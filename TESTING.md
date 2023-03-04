# Python Vs JavaScript Quiz Testing 

![Python Vs Javascript quiz viewed in different screens](documentation/gifs/am-i-responsive-finalgif.gif)

[View Live site here](https://sooryageorge7.github.io/Python-Vs-Javascript-Quiz/)

---

## CONTENTS

* [Automated Testing](#Automated-Testing)
  * [W3C Validator](#W3C-Validator)
  * [JavaScript Validator](#JavaScript-Validator)
  * [Lighthouse](#Lighthouse)
  * [Wave Accessibility Test](#Wave)
* [Manual Testing](#Manual-Testing)
  * [Testing User Stories](#Testing-User-Stories)
  * [Full Testing](#Full-Testing)

  ---

I used google developer tools throughout development of game to test different aspects and stages of the game.
I also used the console section in chrome dev tools to test javascript code and also to check and troubleshoot any issues that arise in the code too. 

---

## Automated Testing 

### W3C Validator 

1. [W3C validation for index.html](documentation/tests/final-index.html-validation.png) - Passed
2. [W3C validation for 404.html](documentation/tests/404-html-validation.png) - Passed
3. [Jigsaw W3C Validation for style.css](documentation/tests/final-css-validation.png) 
  *  No errors, 
  * 2 warnings are : -webkit-background-clip is a vendor extension - Ive checked with CI tutor support if this would be a problem and they assured me that it wouldnt be since its a warning. I used that code to have a certain effect on my quiz heading. 


### JavaScript Validator 

1. [Js Hint validation for script.js](documentation/tests/script-javascript-validation.png) 
  * Initially had unused variables howtoPlay, playButton, validateMessage but i realized it was because i used onclick function in html instead of using event listners to call functions in javascript files. I corrected this.
  * Unused variable shown in validator called "questions" is from the questions array in questions.js. I checked with ci tutor support if this was okay, and they assured that i wouldnt lose points for that.
2.  [Js Hint validation for questions.js](documentation/tests/questions-js-validation.png)
  * The unused variable "questions" is used in script.js 

### Lighthouse 

**index.html** 
  * Desktop 
    * Lightmode

    ![index.html lighthouse desktop(light)](documentation/lighthouse-scores/lighthouse-score-desktop.png)

    * Darkmode

    ![index.html lighthouse desktop(dark)](documentation/lighthouse-scores/lighthouse-score-desktop(dark).png)

  * Mobile
    * Lightmode

    ![index.html lighthouse mobile(light)](documentation/lighthouse-scores/lighthouse-score-mobile.png)

    * Darkmode

    ![index.html lighthouse mobile(dark)](documentation/lighthouse-scores/lighthouse-score-mobile(dark).png)

**404.html**
  * Desktop
    * Lightmode

    ![404.html lighthouse desktop(light)](documentation/lighthouse-scores/lighthouse-score-desktop-404.png)

    * Darkmode

    ![404.html lighthouse desktop(dark)](documentation/lighthouse-scores/lighthouse-score-desktop(dark)-404.png)

  * Mobile
    * Lightmode 

    ![404.html lighthouse mobile(light)](documentation/lighthouse-scores/lighthouse-score-mobile-404.png)

    * Darkmode

    ![404.html lighthouse mobile(dark)](documentation/lighthouse-scores/lighthouse-score-mobile(dark)-404.png)

### Wave

[Wave test for quiz game](documentation/tests/wavetest-index.html.png)

The wave test alerts were for 8 possible headings and 1 X html5 video. 
* The possible headings was not valid in this case as its not a website but a game. 
* The video alert wasnt warrented in this case because its a background video that automatically plays itself, doesnt have audio or subtitles.I have added alt and aria-labels to video in index.html incase video doesnt load or for people with vision impairments.