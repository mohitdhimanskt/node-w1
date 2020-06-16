Exercise 3: Create an HTTP web server

In this exercise we will build a simple web server. It will only serve one HTML file and one JavaScript file. This is enough to serve a minimal web site.

Follow the steps:

    As always start with a new empty folder e.g. 3-web-server
    Initialize NPM in this folder, using the correct command you've learned in the previous exercise
    Create a file, called server.js, for the code of your application
    Copy and paste the following code. This code create a server that listens on port 3000 and sends the client a response with the message Hello World!.

var http = require('http');

//create a server
let server = http.createServer(function (req, res) {
	res.write('Hello World!'); // Sends a response back to the client
	res.end(); // Ends the response
});

server.listen(3000); // The server listens on port 3000

Now run the code (using node server.js in the command line) and check that it works by opening a browser at http:\\localhost:3000.

If it works, proceed to step 5. If it doesn't try to debug it until it does.

    Create a file, called index.html and paste in the following HTML.

<html>
	<head>
		<title>My First Web Server</title>
	</head>
	<body>
		<h1>Hello, anyone there?</h1>
		<div id="content"></div>
		<script src="script.js"></script>
	</body>
</html>

    Now we want to send this HTML as a response instead. Replace the "Hello World!" with the name of the HTML file.
    Before sending a response, give the response you're sending a header: the Content-Type should be text/html. Use the following function: response.setHeader(name, value)

Run the code and check that it works by opening a browser at http:\\localhost:3000.

If you open the Network tab (in the developer tools of your browser) you will notice that the browser tries to load the JavaScript script.js, but fails. This is because our server does not serve this file yet.

So far the server only serves one thing, the HTML file. In order to serve different things, we somehow have to determine what is being requested. This is where the request.url comes in.

If you open the Network tab you can see that when the browser is requesting the HTML code it is using the url http://localhost:3000/. On the other hand, when the browser is requesting the javascript it is using the url http://localhost:3000/script.js.

Let's send a different response, depending on the URL.

    Write 2 conditional statements, if the URL is / we send the HTML file and if it's /script.js we send the JavaScript file. Make sure the JavaScript file includes the following:

document.getElementById('content').appendChild(document.createTextNode('Welcome to Server-land!'));

Run the code and check that it works by opening a browser at http://localhost:3000. You should see the message Welcome to Server-land!.

Congratulations, you have created your very own working web server!

    In a nutshell this is how most web sites work. The client requests resources, server sends them, then the client processes the response based on the content type. This processing often leads to new requests and the cycle continues until everything is loaded and ready for the user to interact with.

BONUS
Our website is working, but looks stale. Try adding some style to it. The style should be from an external source. Add this to your HTML file.

<link rel="stylesheet" type="text/css" href="style.css" />

When the server gets a request at http://localhost:3000/style.css respond with a CSS file that contains some basic CSS rules e.g. #content { color: blue }. Don't forget to specify the Content-Type in the header of the request!