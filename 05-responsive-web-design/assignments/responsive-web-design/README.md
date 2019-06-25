
## Now Playing

This is a simple app that shows popular movies. It provides a simple mobile-first design for creating a responsive design based on this content.

## Prerequisites
* HTML and CSS fundamentals
* working with the developer tools
* box model properties: width, height, padding, border, margin
* display and position properties

If you haven't finished the assignments on these topics, it's recommended that you complete those first before attempting this one.

## Learning Goals
* responsive design: viewport meta tag, media queries

## Setup
[You'll find the starter code for this assignment in this respository](https://git.generalassemb.ly/wdi-toronto/now-playing-static)

1. Fork and clone the repository
2. Don't forget to commit your code frequently when making changes!

## Overview

Our movie app's single-column, mobile-first design has been implemented. It's up to us to turn this into a responsive design for devices of all sizes.

You'll get an opportunity to put together all of the techniques we've been practicing so far, including layout, positioning, and media queries.

> This is a great assignment to work on in pairs or groups so you can help each other figure out how to implement the design changes.

### Step 1: Read the code

Since you'll be working with existing code, the first step should be to read through the provided code to get a handle on what it does.

Throughout the provided CSS you'll find comments explaining what particular rules are doing. By comparing the style rules in the stylesheets to the rendered output in your browser, you should get a better idea of what each rule does.

### Step 2: Use your developer tools

You'll need to get familiar with your browser developer tools to efficiently work through this design process. If you don't have your dev tools open, you're making life difficult for yourself! Toggling style rules on and off in the developer tools is a great way to understand what effect they have on the selected elements.


**Hint** When designing for mobile on your desktop, you can get a good approximation of how it will behave on phones by turning on [Device Emulation Mode](https://developers.google.com/web/tools/chrome-devtools/device-mode/) in Chrome DevTools (it also exists in other browsers).

### Mobile-first

This is the design you're starting out with:

![Mobile-first design](https://github.com/bitmakerlabs/now-playing-responsive/raw/master/mobile.png)

The navigation bar is fixed to the bottom of the window and the logo is fixed to the top left corner. Film cards are stacked and the titles are overlaid over the image. There's a footer with navigation and a copyright notice, both are stacked at the bottom.


### Small screen design

Our first responsive breakpoint will occur at **768px**.

![Small screen design](https://github.com/bitmakerlabs/now-playing-responsive/raw/master/tablet.png)

Once the device (or browser window) is wider than 768px,

* the navigation bar should move to be fixed to the left side of the window,
* the logo should be within the sidebar rather than on its own,
* the film overviews should be visible, and
* the footer sections should be side by side rather than stacked, with a black background and white text.

**Hint** Now that you're making a responsive design, you'll need to tell the browser. Don't forget your `<meta>` viewport tag!

### Large screen design

Our second responsive breakpoint will occur at **992px**.

![Large screen design](https://github.com/bitmakerlabs/now-playing-responsive/raw/master/desktop.png)

Once the device (or browser window) is wider than 992px,

* Posters should show for all movies except the first one,
* Movie overviews should be hidden for all movies except the first one.
* Movies should be laid out in a 3-column grid, except for the first one.

**Hint!** You'll need to use the `:first-child` CSS pseudo-selector to make this happen. [You can read about how it works on MDN](https://developer.mozilla.org/en/docs/Web/CSS/:first-child).

### Review

This is a good time to review the skills you needed to finish this assignment:

* `display`,
* `position`,
* `@media`,
* the `<meta>` viewport tag

Make sure you ask to get help with any of the above concepts!

### And Beyond!

Once you've implemented the two previous breakpoints, it's up to you to make it your own. There are still some problems you can solve in here too!

For instance, you'll notice if you make the browser window wide enough that, at a certain width, the first film's image no longer fills the screen. That seems like a good candidate for another breakpoint!
