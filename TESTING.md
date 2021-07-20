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

    - With the starting of a new word, underscores matching the new word don't load and instead remain the same as from the former word.

    - Hangman figure does not work correctly. It will eventually display parts of the hangman even after correct input. For example: When the user guesses a letter correctly, there isn't a new part of the hangman displayed, however when the user after this guesses incorrectly, the hangman figure displays two new parts instead of one.

    - Hangman already displays as a whole on game start, and disappears after first input.

- Documentation of any open bugs (ideally, test cases should focus on each individual section of every page on the website).

[Back to Repository](https://github.com/nowane/Hangman)

[Back to README.md](https://github.com/nowane/Hangman/blob/master/README.md)