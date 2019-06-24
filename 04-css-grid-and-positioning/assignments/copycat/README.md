## Copycat Assignment

At this point, we've covered quite a few topics:
* HTML
* CSS Fundamentals:
  * CSS Syntax
  * CSS Selectors (tag-level selectors & class-level selectors)
  * Box Model
  * `content-box` vs. `border-box`
  * Layout Techniques
    * display
      * `inline` vs. `block`
    * CSS Grid
      * `display: grid`
      * `grid-template-columns`
* Using Developer Tools

One really great way to improve your skills is to analyze other people's sites and try to replicate it as close as possible.

**Putting together all the concepts we've been exposed to thus far, we should be able to recreate the layout of the following site:**  
http://bitmakerlabs.github.io/fed-copycat/


---

### Getting Started

#### Step 1: Create your project folder
1. In the projects folder where you save all your Bitmaker work, create a new folder called `copycat-assignment`
2. Open the`copycat-assignment` project folder in your editor

#### Step 2: Create your `index.html` file
With your `copycat-assignment` project opened in your editor, we can now go ahead and **create our `index.html` file**.

  * Be sure to save your file with the `.html` extension. This ensures that the editor will recognize your file as an _html_ file.


**Pro Tip:**
To quickly build out the skeleton of an HTML document, in your `index.html` follow the steps below:
1. In the empty `index.html` document you just created, type the letters `html`
2. Hit the magical `tab` key
3. The shell of an HTML document should appear

 * **If that's not working, try this instead:**  
You may find that the steps above only created the opening and closing `html` tags, try the following:
    * Delete the code you have in your document, make sure your `index.html` page is empty
    * Type the exclamation mark character `!`
    * Hit the magical `tab` key
    * This alternative method may work instead  

  * If neither methods work for you, let us know and we can look into it some more :)



#### Step 3: Create your stylesheet
There are various ways we can approach setting up our file & folder structures.

We typically recommend nesting your stylesheets in its own folder called `styles` or `css`. Similarly, if you have images in your project, we would recommend creating an `images` folder to hold all your images.

Following the recommended structure, let's do the following:

1. Make a new folder called `css`
2. Make a new file in the css folder called `styles.css`

**Note:**
If the `styles.css` file wasn't saved inside of the `css` folder, we can easily move it there.
* In your editor, look for the `styles.css` file in the left side panel
* Drag and drop the `styles.css` file into the `css` folder



#### Step 4: Verify your file/folder structure
Your file/folder structure should look similar to this
![Image of Project Folder Structure](https://s3.amazonaws.com/bitmakerhq/lessons/front-end-development/resources/folder-structure.png)  

---


### Copycat-ing!
Now that we have our base files and folders set up, let's start copycat-ing :)!  
**We highly encourage exploring the site with your Developer Tools**  
http://bitmakerlabs.github.io/fed-copycat/

#### Not sure how to get started?
1. Analyze the content on the page
  * Focus on marking up your document first (HTML)
2. Analyze the layout of the content
  * Are the elements stacking underneath each other? How do we achieve that "stacking" effect?
  * Are the elements sitting beside each other? How do we align our items next to one another?

### Stretch Goal: Deploy to Github Pages!

Github provides a really simple way of deploying static sites (sites with only HTML, CSS, and JS - no back end code).  

If you haven't already, set up a git repo on your local machine as well as on github.  Add and commit your changes and push them to master.  Then run this command
```
git push -f origin master:gh-pages
```
This tells git to copy your code from the `master` branch to the `gh-pages` branch.  `gh-pages` is a special branch name that Github knows to watch for and deploy on your behalf.

Now your site is deployed to `http://YOUR-GITHUB-USERNAME.github.io/YOUR-REPO-NAME`.  Wow, so easy!
