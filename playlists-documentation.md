# Documentation

## Scaffolding

### Development machine

#### Prerequisites

- Install homebrew
- Install java
- Install maven

#### install springboot-cli

The springboot cli helps initialising a springboot project (you can also use the initializr website):

```bash
brew tap pivotal/tap
brew install springboot
```

#### Initialise spring-boot REST project

```bash
spring help init
spring init --list | more
spring init playlists -ddata-rest
```

This will create a spring REST project.

##### Start the project directly

```bash
mvn spring-boot:run
```

Now a REST call can be made from a browser: [http://localhost:8080](http://localhost:8080)

(The server can be killed on the commandline with CTRL-c)

##### Package the project and start it from a jar

 ```bash
 mvn package
 java -jar target/demo-0.0.1-SNAPSHOT.jar
 ```
 
(The server can be killed on the commandline with CTRL-c)

### Server Machine

#### Prerequisites

- java 8 installed
- playlists folder created in /opt/

```bash
scp target/demo-0.0.1-SNAPSHOT.jar someuser@ip-of-nas:/opt/playlists/playlists.jar
ssh someuser@ip-of-nas
cd /opt/playlists/
java -jar playlists.jar --server.port=7757
```

I had to configure another port, because 8080 is already in use.

### IntelliJ

- New.. -> project from existing sources -> import project from external model [Maven] -> Rest: default.
- Project settings: project SDK and platform SDK to java 8


