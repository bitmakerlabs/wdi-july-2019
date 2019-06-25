This assignment will allow you to take a break from Ruby syntax errors and focus on the fundamental skill of writing an algorithm to tell a computer what to do.  We'll be making some fun interactive programs using Scratch, a fun drag-and-drop programming language that was designed for kids.

## Prerequisites

* programming fundamentals
  * conditionals
  * loops

## Learning Goals

* practicing programmatic thinking

## Warm-up
1. [Go to https://scratch.mit.edu/](https://scratch.mit.edu/).

2. Open a new Scratch project by clicking on "create" in the navigation bar at the top of the page.

3. You should see a blank project with one "sprite" (character), as seen below.  The large empty grey area on the right side is where we'll add our code.

 ![screenshot of new scratch project](https://raw.git.generalassemb.ly/wdi-toronto/course_materials/master/09-problem-solving-computational-thinking/assignments/algorithmic-thinking-with-scratch/initial.png)

4. Let's make our sprite do something.  Try dragging the  blue "move 10 steps" script  from the "motion" menu into the grey area and then start your program by clicking the green flag at the top right corner of the box that contains your sprite.

 ![screenshot of how to start program](https://raw.git.generalassemb.ly/wdi-toronto/course_materials/master/09-problem-solving-computational-thinking/assignments/algorithmic-thinking-with-scratch/start.png)

 Nothing happened! Why?  It's because we didn't tell Scratch _when_ to make our sprite move 10 steps.  If you check out the "events" menu you should see an event for when the green flag is clicked.  You'll need to start all your Scratch programs with an event like this in order for them to work:  

 ![code step 0](https://raw.git.generalassemb.ly/wdi-toronto/course_materials/master/09-problem-solving-computational-thinking/assignments/algorithmic-thinking-with-scratch/code0.png)

 After attaching "move 10 steps" to the flag event, your sprite should now move slightly to the right when you click the green flag.

5. Let's change our program to make the sprite move when we press the space key instead.  The "control" menu includes an "if/then" script and the "sensing" menu contains a "key \__ pressed?" script that lists "space" as one of the options.  We can use these together like this:

 ![code step 1](https://raw.git.generalassemb.ly/wdi-toronto/course_materials/master/09-problem-solving-computational-thinking/assignments/algorithmic-thinking-with-scratch/code1.png)

 _Note: It can be a little finicky trying to get the "key \__ pressed?" script to lock inside the "if/then" script.  Don't give up!_

 Our program stopped working again!  Why?  The reason is Scratch is now only checking to see if the spacebar is pressed at the exact moment we start our program, and never again.  We need to wrap our code in a "forever" loop from the control menu to tell Scratch to continuously monitor the space key.

 ![code step 2](https://raw.git.generalassemb.ly/wdi-toronto/course_materials/master/09-problem-solving-computational-thinking/assignments/algorithmic-thinking-with-scratch/code2.png)

6. The last thing we're going to add is some way to keep our sprite from being able to run off the edge of the screen.  Luckily Scratch makes this easy for us with an "if on edge, bounce" script in the motion menu.  Let's add that inside our "forever" loop.  Your sprite should now turn around when it reaches the edge of the screen.

 Congratulations, you just made your first Scratch program!  

## Tag Game

Your task is to [recreate this game](https://pages.git.generalassemb.ly/wdi-toronto/scratch/).  You can choose to either start a new Scratch project or build on the one you just made.

Part of the challenge of this assignment is to explore what's possible with Scratch.  You'll have to experiment with scripts that we didn't cover in the warm-up tutorial (a "script" being one of those little coloured blocks of code), so don’t be afraid to try out new things to see what they do.

If you're feeling confident, feel free to proceed without relying on this guide.  Otherwise, keep reading for some guidance about how to approach this problem.

1. Your first task should be to make it possible to move the sprite using the four arrow keys: the up arrow should increase the sprite's y coordinate, the down arrow should decrease its y coordinate, the right arrow should increase its x coordinate and the left arrow should decrease its x coordinate.

2. Next make the sprite "bounce" when it touches the edge of the screen (as in the warm-up tutorial).

3. Add a second sprite through the "new sprite" menu near the bottom of the page.  

 ![screenshot of sprite menu](https://raw.git.generalassemb.ly/wdi-toronto/course_materials/master/09-problem-solving-computational-thinking/assignments/algorithmic-thinking-with-scratch/new-sprite.png)

 Each sprite is coded separately.  You can toggle back and forth between your two sets of code by clicking on the images of the sprites in the "sprites" panel at the bottom of the page.

 ![screenshot of sprites menu](https://raw.git.generalassemb.ly/wdi-toronto/course_materials/master/09-problem-solving-computational-thinking/assignments/algorithmic-thinking-with-scratch/toggle-sprites.png)

4. Make the second sprite appear in a random location when the program starts.

5. Make the second sprite bounce if it touches the edge of the screen.

6. When the first sprite touches the second sprite, the second sprite should jump to a new random location.  Hint: check out the options in the "sensing" menu to check if the two sprites are touching.

You did it!

Feel free to add your own fun effects to customize the game now that it's working.

Need inspiration?
- [Dragon tag ](https://pages.git.generalassemb.ly/wdi-toronto/scratch/dragon.html)
- [Doughnut tag](https://pages.git.generalassemb.ly/wdi-toronto/scratch/doughnut.html)
