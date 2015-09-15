Siri v2 Demonstrator

##0.Prerequisites

In order to run the demo, you will need several packages.

### Install node & npm

On linux:
```
sudo apt-get update
sudo apt-get install nodejs npm
```

On a mac computer, using brew:

```
brew install node
```

### Install grunt & bower

Gestion des packages locaux et du serveur

```
npm install -g bower grunt-cli gulp
```
##1.Install app packages

Within the app root

```
bower install && npm install
```

It will install the necessary dependencies from bower and npm

##3.Launch app server

The app is served by grunt

```
grunt serve
```

##4.Build and deploy

The built is managed by grunt

```
grunt build
```

You can deploy to gh-pages using the following command

```
gulp deploy
```

If needed you will have to write your own custom deploy script



