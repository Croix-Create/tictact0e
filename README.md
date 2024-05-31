# tictact0e
a simple tic tac t0e app

Hello!

Formalities:

As requested, the tictac app depends on Node.js version 16.20. The required dependencies are yarn 1.22.22, playwright 1.44.1 and vitest 0.29.3.
The assessment was built using Windows 11, unfortuantely. {crowd.applasue();}

Setup and Installation

If you have a newer version of Node.js, you may want to consider using a tool like <nvm> to switch to version 16.20.
If on Ubuntu, please note that switching to older versions is best done via NodeSource, as apt will always install the latest stable release.
Although you can specify a version using apt, it is not recommended.

If you by chance do not have yarn installed currently, and plan on using it in the future, consider installing it globally for consistency.
This can be simply done by:

npm install --global yarn

Note: if you are on Windows, please ensure you have running scripts enabled, and you might want to have "developer mode" on, for good measure.

The Good Stuff:

While GitHub Actions will install yarn for you, you can do so manually by:

Open the project in your desired IDE (I like PhpStorm) and run:

yarn install

This will then download and install all the necessary dependencies from the npm registry into the project's node_modules folder.

VIEWING THE GAME ON LOCALHOST

In the project root, please run:

http-server

This will host the tictac app on two local ports, please (ctrl + click) on one of them listed in your terminal.
A basic yet usable version of the classic Ticactoe game will be generated.

TESTING

While GitHub Actions will automate the tests, please note that the project is configured as follows:

yarn test -> will run the unit test.

yarn tes:palywright -> will run the end to end test.

Much thanks,

Croix


P.S



---Don't--have--a---good--day--have--a--great--day!------------
        =====-=========-----------------::::::::::::
        +=====-=========----------------::::::::::::
        ++=====-=========---------------:::::::.....
        +++=====-==========+*###=---:::::::...::::::
        *++======-===++++**+*###**+--------:::::::::
        #*+++======+***+++++#%%%#*#*=---::::::::::::
        ##*+++==+=**##*=--=+**#%%#*****--:::::::::::
        *##*+++=++***+-::--==+*#########+--::::::---
        =**#*++++###*-:::-===++*###%%%%#+---====++**
        :-+##*++####*::-=++++***###%###*+*---#######
        ::+##+=+#####-=+##+=*#%%##%%%#=:::::::-*####
        :=*#*=-+*##%#=-===-=+****%%%%+:-:::::::::-=*
        -+*#+--+*#%%%*--=+=+*****%%@%*-:----:::-::::
        +*#*-::-*##%%*==+=++****+#%%%*--:-----------
        +*#=-::=+**#%%=++=+**+**+%%%%%*--=++========
        *#+-:::+*##%%%#===++++*+%@%%%%%######*******
        *#=-::-+####%%%*+++****#%%%%%*+****++*+*####
        #+-:::+*%%#**#-%*++***##*###===+===-===-----
