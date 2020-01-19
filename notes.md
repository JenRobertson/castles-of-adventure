# Peckin Pixels #
To run and develop locally: `npm start`

To release:
1. Stop the server from running if it is
2. `npm run release`
3. Using beyond compare, push the peckin-pixels folder up.

(This will only work on Jens PC with correct folder setup)

To just check the dist folder: `npm run build`



# FINAL TO DO LIST #

* chicken got stuck in a box again

* tutorial did not progress when the corn was delivered


## Not really gonna do todo list ##

* cant take egg out of box when on coveyor

* ACTUALLY make a proper progressive web app using a web worker

* think about different mobile sizes - looks dodgey with no edge border, etc.
* make favicon for iphone home screen

* sound cant be played if that sound is still currently playing - https://blog.cotten.io/playing-audio-resources-simultaneously-in-javascript-546ec4d6216a
* sound is weird


* laying animation sometimes plays twice

* wrap text has to run not right at the start in order for font to be loaded. Find out how to load in the font during the loading bar?

* slow walk speed for idle, fast for walking to food

* what happens when 2 eggs go on weigher - it just does nothing

* food getting stuck and not getting eaten RIP

## Ideas ##
* animate mouse?

## Tried and failed

* can we reduce the frame rate?
* add cross for egg - dont think this is required
* make it work in IE etc!!! - probably just put up an image saying it doesnt work, or automatically make all images bigger and modify all the pixels dymaically oh goodness
* loading bar loads too fast :|
* fix chicken getting frozen when moved to chick pen when broody CANT REPRODUCE

# Info #

To run the game just from the index with no server:
Windows Chrome:
`C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --user-data-dir="C:/Chrome dev session" --disable-web-security`

Mac Chrome: 
Close chrome completely and running this in command line:
`open /Applications/Google\ Chrome.app --args --allow-file-access-from-files`

To check for circular dependancies:
`madge --circular src`;

## Other notes ##

* Apparently having a chicken be idle being more than 1 frame breaks it

## Great guide ##
https://webpack.js.org/guides/

Add 
```
    "colorize.languages": [
        "javascript",
    ]
```
to settings.json!
https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize
https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

## Ideas ##


## Ideas ## 
* you could buy more nests
* buy coloured eggs?
* cockral plan
* new areas like outside and market
* add cool stuff to buy
* add a pause button
* could add difficulty


### Possible effects ###

chicken:

egg based:
* chicken always lays egg with a chick in it DONE
* chicken lays egg with thick shell that doesnt break
* chicken becomes broody right away
* chicken lays 2 eggs at once
* chicken lays a large egg

not egg based:
* chickens hunger increases more slowly

----
profit per chicken = 100 - 15 = 85.

you can make 6 chickens per grapes
you have 5 grapes per box.
= 30 chickens * 85 = 2550

Could use:
https://www.npmjs.com/package/jimp to recolour artwork