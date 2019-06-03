## What You Will Learn

Today you are going to write a novel but unfortunately, because of time constraints, you’ll need to enlist the help of your friends. You are going to work with others in the class. The person with the most letters in his or her name is going to fork [this repository](https://github.com/bitmakerlabs/collaborative_writing) from Bitmaker Labs to his or her own account and add the rest of the group as collaborators. Then the rest of the group is going to clone this new repository and one by one each of you will write the next sentence. In the end you will have a story that starts off with the sentence we give you and finishes with what you and your group writes.

This assignment is going to teach you how to collaborate on GitHub. This means cloning a repository, pulling the changes that other people have made, and pushing your changes up. You might even come across merge conflicts.

Have fun and don't forget to work alongside a group!

## Learning Goals
* adding collaborators in Github
* forking Github repos
* navigating the command line: `cd`, `ls`
* `git clone`
* `git add`
* `git commit`
* `git push`
* `git pull`
* `git status`

## Before you start

Before you start, you will need to ensure that you've correctly configured git so that you can attach your GitHub account to it. The following tutorials should help walk you through all the steps required. Don't forget to ask another student or an instructor if you get stuck.

Even though GitHub recommends otherwise, **always clone your repositories using SSH instead of HTTPS**

1. [Set up Git](https://help.github.com/articles/set-up-git#set-up-git)
2. [Generate SSH keys and attach them to your account](https://help.github.com/articles/generating-ssh-keys)

## Assignment

1. One person forks the [`collaborative_writing` repository on Bitmaker Labs’ GitHub](https://github.com/bitmakerlabs/collaborative_writing). [How to fork on Github](https://help.github.com/articles/fork-a-repo)
2. After the repo has been forked, this person adds the rest of the group as collaborators. [How do I add a collaborator?](https://help.github.com/articles/how-do-i-add-a-collaborator)
3. The rest of the group clones the first person's repository
4. One person pulls the most recent changes, edits the text file, writes the next sentence, makes a commit, and pushes the changes up
5. Repeat Step 3 until everybody has done it
6. You now have a working copy of the repository on your own computer. To show others that you’ve done this work too, fork the first person's repository to your own account.

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
# maps server url to "origin"
$ git remote add origin <server url>

# pulls a specific branch to local repo
$ git pull <branch name>

# pushes local repo to remote repo
$ git push origin <branch name>

# copies a new remote repo to computer
$ git clone <server url>
```


### Additional Resources

* [Collaborating at GitHub Help](https://help.github.com/categories/63/articles)
* [Team Collaboration with GitHub at Tuts+](http://net.tutsplus.com/articles/general/team-collaboration-with-github/)

### Submitting
Create a git repository on GitHub, called "collaborative_writing" or similar. Clone it onto your own computer. The assignment will walk you through creating files and adding those files to the repository. If you're stuck, you can refer back to this [Submissions Cheat Sheet](https://github.com/bitmakerlabs/resources/blob/master/submitting_your_work.md).

