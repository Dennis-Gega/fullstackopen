participant browser
participant server

browser->server GET https://studies.cs.helsinki.fi/exampleapp/notes
server->browser sends HTML file

browser->server GET https://studies.cs.helsinki.fi/exampleapp/main.css
server->browser sends css file

browser->server GET https://studies.cs.helsinki.fi/exampleapp/main.js
server->browser sends js file

js code runs

browser->server GET https://studies.cs.helsinki.fi/exampleapp/data.json
server->browser sends data.json