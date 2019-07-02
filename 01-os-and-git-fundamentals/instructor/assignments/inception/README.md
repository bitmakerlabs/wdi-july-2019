This assignment will allow you to revisit Git, Github, and Unix by recreating the story of [Inception](http://www.imdb.com/title/tt1375666/?ref_=fn_al_tt_1). Instead of using dreams and characters, we will be using files and directories. Each directory will represent a level and each file will represent a character. As you go down each level (directory), one character (file) will be left behind and you will make a commit.

## Learning Goals

By the end of the assignment you should know how to use the command line to do the following:

* Create, delete, rename, move directories or files
* Find what your current directory contains `ls`
* Find what your current path is `pwd`

You should also get a sense of what Git is, how it differs from GitHub, and how to use each of these tools. For Git, this means `git init`, `git add`, `git commit`, and `git status`. For GitHub, this means how to create a remote repository and push your local repository to it.

## Assignment
The 7 characters from the movie are:

* Ariadne
* Arthur
* Cobb
* Eames
* Robert Fischer Jr.
* Saito
* Yusuf

[Here's an infographic depicting the different dream levels and who goes where.](http://www.inceptionending.com/wp-content/uploads/2010/08/INCEPTION-infographic-v3.5.2_dwang.jpg)

## Setting up your project
1. Create a git repository on GitHub, called "inception" or something similar
2. Clone it to your computer and cd into the project directory

Have fun and don't forget to work alongside a partner!

## Assignment Steps

**You must commit your changes after each step, otherwise you won't be taking snapshots in time!**

1. Create text files, one for each character listed above (Ariadne, Arthur, Cobb, etc.,)
2. Make a commit to record this chapter of the story.
3. Create the first directory called `level_one` and move all your characters into it
4. Make another commit!
5. Create the next directory, `level_two` and move all but one character down into level_two
6. Keep going for 2 more levels (`level_three`, `level_four` or even `limbo`!), committing each step of the way.
7. Push your code to GitHub

When you stage your from within a subdirectory files, you will need to use the --all flag instead of a period for git add. So instead of this:
```bash
$ git add .
```

Try this:
```bash
$ git add --all
```

At the end of the assignment you should have a repository on your GitHub that looks similar to [this one](https://git.generalassemb.ly/wdi-toronto/inception). Take note of the commits.

![Inception Commit History](http://i.imgur.com/rDYj6VD.png)

### Tips and Tricks:

Github only tracks files and not directories. You won't be able to commit a new directory unless there's at least one file in it! See [Git FAQ: Empty directories] (https://git.wiki.kernel.org/index.php/GitFaq#Can_I_add_empty_directories.3F) for more details.

If you want more information about a Unix command you can type:
```bash
$ man <the name of the command>
```

When you do this you will enter a text editor within your command line interface. To quit this text editor type q.

You might also want to go back to a previous commit. To do this type:

```bash
$ git reset --hard HEAD^
```

If you want to know the differences between --hard, --soft, and --mixed, check [this](http://stackoverflow.com/questions/3528245/whats-the-difference-between-git-reset-mixed-soft-and-hard) out.

### Important Git Commands

#### Git Workflow
```bash
# creates new git repository
$ git init

# stages changes to files
$ git add .

# stages changes to all files (including deleted files)
$ git add --all

# shows status of files
$ git status

# creates a new commit (a snapshot in time) with associated message
$ git commit -m "<message>"

# shows history of commits
$ git log
```

#### Remote Repositories (Github)
```bash
# sets up the server URL
$ git remote add origin <server url>

# pulls from remote repo to local repo
$ git pull origin master

# pushes local repo to remote repo
$ git push origin master

# copies a new remote repo to computer
$ git clone <server url>
```

### Additional Resources

* [Try Git: A Course on Code School](https://www.codeschool.com/courses/try-git)
* [How to undo the last Git commit?](http://stackoverflow.com/questions/927358/how-to-undo-the-last-git-commit)
* [Git Guide](http://rogerdudler.github.io/git-guide/)
* [Create a Repository on GitHub](https://help.github.com/articles/create-a-repo)
* [Reference to Unix Commands](http://www.cs.tau.ac.il/~roded/courses/soft1-b05/unix1.htm)
* [Dive more into Unix](http://matt.might.net/articles/basic-unix/)

### Submitting
If you're stuck, you can refer back to this [Submissions Cheat Sheet](https://github.com/bitmakerlabs/resources/blob/master/submitting_your_work.md).
