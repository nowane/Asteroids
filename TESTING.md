# Testing

- Manual testing of each section of the site (such as buttons, links etc).

- Testing site responsiveness (using a site like https://responsivedesignchecker.com/  ). 

- Code validation (CSS/HTML/JS using online tools like https://jigsaw.w3.org/css-validator/ and JSHint).

- Testing of all user stories.

- Documentation of any bugs encountered and their resolution steps. 
    - When trying to get the onscreen keyboard to work I tried al sorts of things to get the hidden letters accepting the letters from user iput. I had a function split up in three different pieces. One piece of the function per 1 row of letters on a keyboard. 
        > In the end the solution took me about a day an a half to come up with, and I came across it by accident.. It came down to the fact I used  uppercase letters in the keyboard rows, and those did not work on the words to be generated I put in - being lowercase.

    - When trying to clear the "You Win/Lose"-message the keyboard didn't reload when starting a new game. 
        > This was solved creating a different container for the message.

    - With the starting of a new word, underscores matching the new word don't load. Instead they remain the same as from the former word. Their display will update after a first guess from the user.
        > The order in which functions were resetted when restarting the game was wrong. This was corrected.

    - When the game is won +1 is added to "win". However after the game ends the user can still click on the letter-input. When this happens there is still added +1 to mistakes and when the maximum amount of guesses is reached there will be added +1 to "lose" as well.
        > This was solved by removing the keyboard after the game ends. For symmetry this also happens when a game is lost as well, even though a user obviously can't still "win" the game after a loss.

    - Game would finish before last part of the hangman figure was drawn.
        > Max allowed guesses changed from 9 to 10.

    - Hangman already displays as a whole on game start, and disappears after first input.
        > Apparently forgot to add the drawFigure() function at the bottom of app.js. This solved the issue.

    - Hangman figure does not work correctly. It will display parts of the hangman even after correct input. For example: When the user guesses a letter correctly, there isn't a new part of the hangman displayed, however when the user after this guesses incorrectly, the hangman figure displays two new parts instead of one.

- Documentation of any open bugs (ideally, test cases should focus on each individual section of every page on the website).

[Back to Repository](https://github.com/nowane/Hangman)

[Back to README.md](https://github.com/nowane/Hangman/blob/master/README.md)