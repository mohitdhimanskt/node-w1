Exercise 2: To the left, to the left...

Oh no! A senior developer from your team Slacks you that he tried to pad some numbers to 8 characters and it was not working at all. He asks you to (politely) fix the bug as soon as possible or face the wrath of management.

When you look at the function code you realize that the function only works up to 5 characters.

// This change doesn't satisfy our needs!
function padLeft(val, num, str) {
	return '00000'.replace(/0/g, str).slice(0, num - val.length) + val;
}

What a stupid function! For a moment, you consider to rename the file to my-terrible-function.js, but realize that will not help your situation in any way. You could add additional three zeroes so that it works for 8 characters:

// This change doesn't do much for us either...
function padLeft(val, num, str) {
	return '00000000'.replace(/0/g, str).slice(0, num - val.length) + val;
}

Then it would be just a matter of time before someone tries to use it for 9 characters and you get the same issue. You scour StackOverflow for related questions and discover that there is already a function that pads numbers, available through NPM: left-pad.

Perfect! Let's use this one instead of our own. Follow the steps:

    Create a new empty folder, e.g. 2-left-pad
    Inside we'll recreate our app.js file (copy and paste from the previous folder is fine)
    Also, initialize NPM using npm init, to create a package.json file
    Follow the instructions on the website - from https://www.npmjs.com/package/left-pad on how to install and require the left-pad package inside of app.js
    Replace the function padLeft to use this new NPM package called left-pad instead
    Pad the numbers to 8 characters and check if it works correctly

Tips:

    Make sure you're in the correct directory when running npm install left-pad
    Use padLeft(number, 8 , " ") to pad a number to 8 characters
