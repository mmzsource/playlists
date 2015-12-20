# Documentation

## Scaffolding

### Development machine

#### Prerequisites

- Install homebrew
- Install nodejs

### IntelliJ

- Install intellij
- Install nodejs and javascript plugins

### Initialise node project



#### Start the project locally


#### Package the project



### Server Machine

#### Prerequisites

- nodejs installed
- playlists folder created in /opt/

```bash
scp target/demo-0.0.1-SNAPSHOT.jar someuser@ip-of-nas:/opt/playlists/playlists.jar
ssh someuser@ip-of-nas
cd /opt/playlists/
java -jar playlists.jar --server.port=7757
```

I had to configure another port, because 8080 is already in use.





