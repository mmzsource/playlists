# Documentation

## Scaffolding

### Development machine

#### Prerequisites

- Install homebrew
- Install nodejs
- Install nodemon (npm install -g nodemon)
- Install bower

### IntelliJ

- Install intellij
- Install nodejs and javascript plugins
- To let IntelliJ know you're working on a javascript project (this will also enable 'use javascript library' in the context menu): In preferences -> languages & frameworks -> javascript : enable NodeJS , JsLint, JSHint, etc.
- To enable code completion for javascript libraries: In preferences -> languages & frameworks -> javascript -> Libraries : click download button -> Select 'Typescript community script' -> find 'Express' (or whatever library you want code completion for) and click download.
- cd to 'public' directory and bower install angular
- cd to 'server' directory and npm install cors --save

### Initialise node project

```bash
npm init
```

### Initialise httpserver

Eventually the webpage needs to be served. Therefor I decided to install httpserver which serves the files in the directory in which it is started:

```bash
npm install -g httpserver
```

### Start nodejs locally

```bash
cd to/server/directory
npm install
nodemon server.js
```

Now you can GET / POST playlists on the configured url + port + path

### Serve index.html

```bash
cd to/public/directory
httpserver 8080
```

Now index.html can be found on [http://localhost:8080/index.html](http://localhost:8080/index.html)

#### Package the project



### Server Machine

#### Prerequisites

- nodejs installed
- some sort of server active to serve the index.html

## Links

- [JetBrains Blog - mean stack walkthrough and tips](http://blog.jetbrains.com/webstorm/2014/06/mean-stack-walkthrough-and-tips/)
- [IntelliJ - Javascript specific guidelines](https://www.jetbrains.com/idea/help/javascript-specific-guidelines.html)
- [JetBrains help - configuring javascript libraries](https://www.jetbrains.com/idea/help/configuring-javascript-libraries.html)
- [Jetbrains help - Running and Debugging Node.js](https://www.jetbrains.com/idea/help/running-and-debugging-node-js.html)
- [httpserver](https://www.npmjs.com/package/httpserver)

