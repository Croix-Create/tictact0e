import { test, expect } from '@playwright/test';

const url = 'http://127.0.0.1:8080';

test.describe('Tic Tac Toe Tests', () => {

  test('should allow players to place X or O on the board', async ({ page }) => {
    await page.goto(url);

    await page.waitForSelector('#b1');
    await page.click('#b1');

    await expect(page.locator('#b1')).toHaveValue('X');

    await page.waitForSelector('#b2');
    await page.click('#b2');

    await expect(page.locator('#b2')).toHaveValue('0');
  });

  test('should win a game by getting three Xs in a row', async ( {page} ) => {

    await page.click('#b1');
    await page.click('#b4');
    await page.click('#b2');
    await page.click('#b5');
    await page.click('#b3');

    const winCondition = await page.textContent('#print');
    expect(winCondition).toBe('Player X won');

  });

  test('should end in a tie', async ({ page }) => {

    await page.goto(url);

    const moves = [
      ['#b1', 'X'], ['#b2', 'O'], ['#b3', 'X'],
      ['#b5', 'O'], ['#b4', 'X'], ['#b6', 'O'],
      ['#b8', 'X'], ['#b7', 'O'], ['#b9', 'X']
    ];
    for (const [selector, value] of moves) {
      await page.click(selector);
    }

    const tieText = await page.textContent('#print');
    expect(tieText).toBe('Match Tie');
  });

  test('should reset the game when clicking the reset button', async ({ page }) => {

    await page.waitForSelector('#b1');
    await page.click('#b1');
    await page.click('#but');

    await expect(page.locator('#b1')).toHaveValue('');

  });

});