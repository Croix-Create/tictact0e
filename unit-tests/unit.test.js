import { describe, it, expect } from 'vitest';
import { checkWinner } from './bidniz-logic';

describe('checkWinner', () => {
  it('should return X as the winner', () => {
    const values = ['X', 'X', 'X', '', '', '', '', '', ''];
    expect(checkWinner(values)).toBe('X');
  });

  it('should return O as the winner', () => {
    const values = ['O', '', '', 'O', '', '', 'O', '', ''];
    expect(checkWinner(values)).toBe('O');
  });

  it('should return Tie if all cells are filled and no winner', () => {
    const values = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
    expect(checkWinner(values)).toBe('Tie');
  });

  it('should return null if the game is not finished', () => {
    const values = ['X', 'O', 'X', '', 'O', '', '', '', ''];
    expect(checkWinner(values)).toBe(null);
  });
});