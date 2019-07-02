Before we dive into programming, it's good to get to know the lay of the land and how to get around our computers: our operating systems, the command-line interface and how to manage files and directories. We'll also learn about git and GitHub so that we can track changes to our projects.

## Agenda
1. [Accounts](#accounts)
2. [Tools Overview](#tools-overview)
3. [Command-line Review](#command-line)
4. Break
5. [Git](#git)
6. [GitHub](#github)

## Accounts
* Accounts for [Slack](https://bitmaker-students.slack.com), [Github](http://github.com), Alexa

## Tools Overview

### Useful applications
To get started with the program, you'll need a text editor, web browser, and terminal.

* VS Code
* Chrome
* Terminal (already installed)

### Your Operating System

* OS X or Linux are preferred for this course because they have full-featured UNIX-style command-line interfaces
* Getting to know your keyboard shortcuts will help you be more productive
  * cmd-tab (OS X) or alt-tab (Linux) to switch windows (hold down shift as well to reverse direction)
  * ctrl-tab (OS X and Linux) in Chrome to move between tabs (hold down shift as well to reverse direction)

## Command-line
* What is the command-line? What is bash?
* Common commands

```
pwd
ls
cd
mkdir
touch
rm
rm -rf
mv
```

`.` refers to current directory

`..` refers to parent directory

`/` refers to top-level directory of entire file system

* tab autocompletion
* up arrow to repeat previous commands

## Git
* What is version control? What is git?
* Creating a new repository
* Checking status
* Staging and unstaging
* Creating commits

### Standard Git workflow:

#### Beginning of project:
```bash
$ git init
```

#### Throughout project:
```bash
$ git add .
$ git status
$ git commit -m 'add a comment'
$ git status
```

### If you forget `-m` when running `git commit`

If you run `git commit` instead of `git commit -m`, you may find yourself in a bewildering text editor called Vim.  To get back to your normal command-line, hit `Esc` followed by `:q!`, and then hit `enter`.  Now you can try to commit again, this time remembering to add `-m "and a message in quotes like this"`.

To stop this from happening again, run this command to change Git's default text editor to VS Code (or the editor of your choice):

```bash
git config --global core.editor "code"
```

## GitHub

Git and GitHub are two different things, but we'll often be working with them together. GitHub is a website where you can store your git repositories.

* Remote repositories
* Adding and removing
* Pushing and pulling
* Cloning
* Forking


### Remote commands for git

Create a remote repository to GitHub named origin:
```bash
$ git remote add origin <ssh url to repo>
```

Pushing your code to origin (aka github):
```bash
$ git push origin master
```

Pulling your code from origin (aka github)

```bash
$ git pull origin master
```

### Adding collaborators to a Github Repo

From repo page on Github: `settings` -> `collaborators`


### init vs clone
You will only ever use `git init` _or_ `git clone` to start a new repo on your laptop - not both.

Start with `git init` if you're starting a _brand new_ project on your laptop and no files exist yet on Github.

Start with `git clone <url>` if a project already exists on Github and you want a copy on your computer.

### forking

Forking is something done purely on Github.  To get the forked repo on to your laptop, run `git clone <url of fork>` like you would any other repo.  When you fork someone else's repo, you create an independent version of that project in _your_ account.  The fork has the same history as the original repo, but from that point on the two repos diverge.  When you push to your fork, the original repo is unaffected.

## Resources
* [Useful keyboard shortcuts for Terminal](https://github.com/0nn0/terminal-mac-cheatsheet/wiki/Terminal-Cheatsheet-for-Mac-(-basics-)
* [CheatSheet App for OS X](http://www.cheatsheetapp.com/CheatSheet/)
* [Git Tutorial: Setting Up a Git Repository](https://www.atlassian.com/git/tutorials/setting-up-a-repository)
* [Git Tutorial: Saving Changes](https://www.atlassian.com/git/tutorials/saving-changes)
* [Git Tutorial: Inspecting a Repository](https://www.atlassian.com/git/tutorials/inspecting-a-repository)
* [Spectacle](https://www.spectacleapp.com/)
* [Linux Unity Keyboard Shortcuts](https://askubuntu.com/a/28087)
* [Slides on Git](https://docs.google.com/presentation/d/1Vwv2xueyHcaMvU1CVbGwr2XhVP26VUxuJ9-mw9K3CuE/edit?usp=sharing)
* [Bitmaker Installation Guide for Linux](https://github.com/bitmakerlabs/python-dev-setup-guide-linux)
* [Bitmaker Installation Guide for Mac](https://github.com/bitmakerlabs/python-dev-setup-guide-mac)
