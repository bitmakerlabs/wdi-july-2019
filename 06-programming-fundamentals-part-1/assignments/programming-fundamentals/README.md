## What You Will Learn
This assignment will teach you the fundamental building blocks of programming.

* data types
* variables
* input and output with `input` and `print`
* conditionals: `if`, `elif`, `else`
* boolean logic: `and`, `or`, `not`, `==`, `!=`, `>`, `<`, `<=`, `>=`
* looping with `while`

## Prerequisites

* Command-line basics
* Have Python 3 installed on your computer: in your command-line interface (aka shell or terminal), if typing `python --version` returns an error, Python 3 is not installed (in which case you can refer to the installation guide for the course, or ask an instructor for help). Otherwise, you're good to go!
* you _do not_ have to have completed the HTML and CSS assignments from last week in order to work on this one

## Getting Started

Create a git repository on GitHub, called "python_fundamentals1" or something similar. Clone it onto your own computer. This assignment will walk you through creating several Python programs which you should add to your git repository.  Don't forget to commit after each exercise!

## Disclaimer

This assignment is about walking you through the fundamental features of the Python language using short, simplified code examples.  If you find yourself wondering "why would I ever write this code?" or "ok, but what is this thing _for_?", try not to panic! Today's assignment is about discovering **what** is possible in Python, not **why** those features are useful.  However, if you can start to envision how you might use these features in more complicated programming scenarios, that's great!

Moreover, if you finish a section but felt like you didn't quite understand, it's very helpful to experiment and explore on your own.


## Programming Languages

Python is a programming language, and like every other programming language, you can use it to command your computer. A very wide range of programming languages exists and many are tailored to work best in specific domains.

Perhaps you've heard of some other popular programming languages, such as **Java**, **C++**, **Ruby**, or **JavaScript**?

Every programming language has its own unique syntax, rules, pros, and cons.

## Running Python Programs

When writing Python programs, programmers work text editors and save their code in files. The file extension used to indicate that a file is a Python program is `.py`

Imagine we have a file called `first.py`. To "run" or "execute" the program, run this in your terminal:

`python first.py`

This will run the program, output any results and return to the command prompt when it's done.

![](https://raw.git.generalassemb.ly/wdi-toronto/course_materials/master/06-programming-fundamentals-part-1/assignments/programming-fundamentals/success.png)

If there are any errors, the output will look something like this

![](https://raw.git.generalassemb.ly/wdi-toronto/course_materials/master/06-programming-fundamentals-part-1/assignments/programming-fundamentals/error.png)

## Exercise 1

Create a file called `exercise1.py` and open it in your text editor. Write this code:

```python
2 + 3
```

and save the file. Now, let's run the file by typing in your terminal:

`python exercise1.py`

Nothing happened, right?

Python won't print out anything unless we explicitly tell it to. Let's edit our file and change it to:

```python
print(2 + 3)
```

and run `python exercise1.py` again.

Did it print `5`?

`print` is for displaying messages. Lets add some more lines at the beginning of our program so it looks like the following, and then go ahead and run it:

```python
print(2)
print(3)
print(2 + 3)
```

We have just created and run our first multi-line Python program. As you can see, we have written each Python statement on its own line. Try writing everything on the same line and running it again, like so:

```python
print(2) print(3) print(2+3)
```

Oh no!

```
File "exercise1.py", line 1
  print(2) print(3) print(2 + 3)
               ^
SyntaxError: invalid syntax
```

We got an error, but there's no need to panic.  Error messages are Python's way of telling us what's wrong.  In this case Python couldn't understand our program with every statement on the same line.  We can simply put it back the way it was: with one "statement" per line. Run it again to confirm that it's fixed.

Now that you have written a working program in Python, make sure to commit it to git.  Remember to check the output of `git status` after every git command to verify that everything is as it should be. Feel free to review the [Github cheat sheet](https://git.generalassemb.ly/wdi-toronto/resources/blob/master/submitting_your_work.md) at any time.


## Interactive Python Shell

If you just run `python` on the command line, without specifying the name of a file, you are launched into a program that allows you to run Python statements interactively within the terminal instead of writing them in a file.  This interactive Python environment is called the Python _shell_ or the Python _REPL_, which stands for *r*ead, *e*valuate, *p*rint, *l*oop, and is pronounced "_reh-pull_".

Run the command `python` on its own to start the Python shell:

![!python shell from the terminal](https://raw.git.generalassemb.ly/wdi-toronto/course_materials/master/06-programming-fundamentals-part-1/assignments/programming-fundamentals/repl.png)

Now you can type in some code and the Python shell will automatically output the result. As a simple example, type in `1 + 1` and press enter. The Python shell will respond by printing `2`.

You can type `exit()` or hit CTRL-D at any time to return back to your original terminal.

### Try out the Python Shell

Start the Python shell (by running just `python`) and try running each of these commands, one at a time. Make sure you type them out yourself rather than copying and pasting.  You'll learn much more that way.

`5 + 1`

`1`

`5`

`3 + 7 + 1`

`5 * 3 # multiplication uses the asterisk (*) operator, not the letter x`

As you can see, Python can do math!

But what's happening in that last line of code? If you write a pound/number sign (`#`) Python ignores everything that comes after it until the end of the line. So you can (and should) use it to write useful **comments** throughout your code. Comments make it easier for you to understand your code when you come back to it in future and no longer remember how it works. They also serve the same purpose for other people who might be trying to read your code.

Using the Python shell to experiment with bits of Python code as you work on future assignments and projects is an excellent habit to get into!

# Basic Data Types

Data types allow us to represent different kinds of information.  Let's look at some basic Python data types.

## Numbers

Numbers without decimal points (eg. `1`, `250`, `99999`) are called **integers**, and numbers with decimal points (eg. `1.5`, `150.3985`, `50.0`) are usually called floating-point numbers or, more simply, **floats**.

Doing operations with numbers is simple. Fire up the Python shell in your terminal and try out the following:

`# Basic arithmetic -----`

`5 + 3`

`5 - 3`

`5 * 3`

`5 / 3`

`5 / 3.0`

`5 % 3` (modulo/remainder)

`# Comparisons -----`

`5 > 3`

`5 < 3`

`5 > 5`

`5 >= 5`

`2 == 2 # note: two equals symbols, not one`

`2 == 3`

`2 != 3`


Python has **arithmetic operators** such as `+`, `-`, `*`, `/`, `%`,  and **comparison operators** such as `>`, `<`, `>=`, `<=`, `==` and `!=` (not equal). You must *always* use *two* equals signs when doing a comparison.  The [list of Python operators](https://www.tutorialspoint.com/python/python_basic_operators.htm) is extensive. Feel free to try some other ones out in the Python shell.

## Strings

Strings are sequences of characters between quotation marks.  This is the data type that allows you to incorporate words and sentences in your programs.

To create a string, type some characters between single or double quotes. Below is an example of how to display strings using either single or double quotes and `print`:

```python
print('Hello world')
print("Hello world")
```

So what difference is there between single quotes and double quotes in Python? In the above example, there's no difference. However, consider the following code:

```python
print("Betty's pie shop")
print('Betty\'s pie shop')
```

Because the word "Betty's" contains an apostrophe, which is the same character as the single quote, in the second line we need to use a backslash to **escape** the apostrophe so that Python understands that the apostrophe is part of the string and not marking the end of the string. The combination of the backslash followed by the single quote is called an **escape sequence**.

Using double quotes for this string allows us to avoid having to use an escape sequence.

### Escape Sequences

Below are some of the more common escape sequences:

`\"` double quote

`\'` single quote

`\\` single backslash

`\n` new line / line break

`\t` tab

Try out this example code to better understand escape sequences:

```python
print("Hello\t\tworld")
print("1. Hello\n2. World")
print("Hello\n\n\n\n\nGoodbye world")
print("Hello \"world\"")
print("Hello \'world\'")
```

### String Interpolation

String interpolation is a means of embedding Python code into a string, like so:

```python
"Ada Lovelace lived for {} years".format(1852 - 1815)

# Ada Lovelace lived for 37 years.
```

First, Python calculated `1852 - 1815`, comes up with the number `37`, and then inserts that number into the string where we've left `{}` as a placeholder.

Try out this example of string interpolation:

```python
"Three times three is {}".format(3 * 3)
```

Or we can use a variable:

```python
name = "Betty"
"Hello {}".format(name)
```

We can also embed more than one value:

```python
"Hello {}, hello {}!".format("Betty", "Bella")
```

```python
name1 = "Betty"
name2 = "Bella"

"Hello {}, hello {}!".format(name1, name2)
```

## Operators

Strings can also work with some arithmetic operators (`+`, `-`, `*`, etc) and comparison operators (`>`, `<=`, `==`, etc). Try a few in the Python shell to see what works and what doesn't.

## Booleans

In Python, boolean data types allow us to represent the concepts of **true** and **false**. Boolean expressions are very common in programming and allow computers to evaluate statements as being either true or false.

Boolean expressions work with **logical operators**: `and`, `or`, and `not`.

Exercise: Try the following examples for yourself in the Python shell.

```python
True and True
# true
not True
# False
not False
# True
True and False
# False
True and not False
# True
True or False
# True
True or True
# True
False or True
# True
False or False
# False
not False or False
# True
```

You can also try combining comparison and logical operators like so:

```python
(1 < 3) and (3 < 5)
# True

(1 > 1) and (2 > 2)
# False

(1 == 2) or (2 < 3)
# True

(1 != 2) or (2 < 3)
# True

(1 == 2) or (2 == 3)
# False

```

The purpose of boolean logic will become clearer later on when we talk about [control structures](#control-structures).


## Exercise 2
Create a file called `exercise2.py` and in it enter the solution for the four problems below, then commit.
Try annotating your code by leaving comments (using the `#` symbol) in the file before each of your answers to the following questions:

1. How would you calculate a good tip for a 55 dollar meal? Use `print` to print the answer.
2. Try adding a string and an integer with the `+` operator. What happens? Find a way to convert the integer into a string first and use `print` to print the result.
3. Try outputting the result of 45628 multiplied by 7839 in a sentence by using [string interpolation](#string-interpolation).
4. What's the value of the expression `(10 < 20 and 30 < 20) or not(10 == 11)`? Try figuring it out on your own before typing it in.

# Variables

To store a number or a string in your computer's memory for use later in your program, you need to assign it to a variable, like so:

```python
my_variable = 'my_variable now contains this string'
```

We can now refer to that variable whenever we want to access that string. Try the following in the Python shell:

```python
name = "Sandra"
greeting = "Hello {}! It's good to see you again.".format(name)
mission = "Your mission, should you choose to accept it..."

print("{} {}".format(greeting, mission))

```

### Variables and Boolean Logic (together at last)

```
my_number = 12
my_number > 10
# True

my_number < 10
# False

your_number = 1

my_number == your_number
# False

my_number != you_number
# True
```

Exercise: Try out the following example in the Python shell to get more familiar with how Python deals with variable assignment:

```python
amount = 20
new_amount = amount
new_amount             # 20

amount = "twenty"

amount                 #  "twenty"
new_amount             # 20
```

In the above example, we set `amount` to the value `20`.

We then set `new_amount` to `20` (because `amount` -> `20`).

We then decide to change `amount` to contain the value `"twenty"` instead, but we haven't changed `new_amount`.

Try some more examples:

```python
animal = "cats"
number = 20
location = "the yard"

"There are {} {} in {}!".format(number, animal, location)
```

```python
who = "Mrs. Peacock"
where = "the library"
what = "rope"

accusation = "It was {} in {} with the {}.".format(who, where, what)

accusation
```

## Operator and Assignment Shorthand

We can do calculations with variables without changing their values:

```python
counter = 25
counter + 1
counter            # counter is still 25
```

We are not actually assigning a new value to `counter`. We're simply calculating the sum of 1 and the value in `counter`.

Alternatively we can reassign `counter` to the result of that calculation:

```python
counter = counter + 1
counter                   # counter is now 26
```

Programmers are obsessed with efficiency, even when it comes to typing, which means most programming languages contain a lot of typing short cuts. Combining operators and variable reassignment is a commonly used shortcut. For example:


```python
counter += 1
counter
```

`counter += 1` is the same as `counter = counter + 1`.

but takes nine fewer characters(!!!) to type. Try this out in the Python shell to see the value of `counter` change. Then try it with different variables and different amounts.

### += and -=

`+=` is the combination of the addition and assignment operator. It adds the value on the right-hand side to the current value of the variable on the left-hand side and assigns the result to that variable.  For example:

```python
amount = 1
amount += 10
amount           # 11
```

`-=` is the combination of the subtraction and assignment operator. It subtracts the value on the right-hand side from the current value of the variable on the left-hand side and assigns the result to that variable.  For example:

```python
amount = 30
amount -= 5
amount          # 25

```

## Exercise 3
Let's make a Python program that greets someone by name. Let's call it **exercise3.py**.

Start with displaying a question:

```python
print("What is your name?")
```
Run your program to verify that it works so far. If it works, commit what you've got to git with a meaningful commit message.

### Getting User Input
The next step is to get input from your hypothetical user (which for now is just you). We can do that with `input()`. `input()` will pause the execution of your program and give your user the chance to type something into their terminal.  When the user finishes typing and hits "enter", the value that they typed in is **returned** by `input()` and your program resumes normal execution.  Try assigning `input()` to a variable in order to save your user's input.

```python
print("What is your name?")
user_name = input()
print("Hello, {}".format(user_name))
```

Having that string in a variable allows us to display it back to the user later on.

Let's do another example:

```python
secret_password = "please"

print("What's the password?")
password_attempt = input()

correct_or_not = (password_attempt == secret_password)

print("That's {}!".format(correct_or_not))
```

`input()` always gives us a string, so if we want to do math with a number from our user, we'll have to convert it from a string to an integer using `int()`.

```python
print("How many cookies have been eaten?")
eaten = input()

# convert user input to integer and subtract it from 12
remaining_cookies = 12 - int(eaten)

print("There are {} cookies left.".format(remaining_cookies))
```

*Your challenge*:
Let's try asking the user how old they are and have the program output what year they were born in.

Don't forget to commit your work again!

# Control Structures

## if

`if` statements can be used to manage a program's "control flow", allowing you to either execute or skip a block of code based on a condition that evaluates to `True` or `False` (remember boolean values?). The syntax looks like this:

```python
if my_number > 1:
  print("The number is greater than 1")
```

Notice that the second line (`print(...`) is indented under the `if` line.  In HTML (and in most programming languages), indentation simply made our code more readable from a human perspective.  In Python, indentation changes the meaning of the code from the computer's perspective as well.

Let's see what happens if we don't indent that line:

```python
if my_number > 1:
print("The number is greater than 1")
```

We get the following error message:

```
print("The number is greater than 1")
    ^
IndentationError: expected an indented block
```

This is one characteristic of Python that sets it apart from other programming languages.

Try running the following example:

```python
my_number = 5

if my_number < 4:
  print("Hello")
  print("Bonjour")

if my_number > 4:
  print("Hi there")
  print("How are you?")
```

Now let's un-indent a few lines and notice how the output changes:

```python
my_number = 5

if my_number < 4:
  print("Hello")
print("Bonjour")

if my_number > 4:
  print("Hi there")
print("How are you?")
```

Of course, it would make more sense if the number we were checking came from user input:

```python
your_number = input()

if int(your_number) > 5:
  print("This line will run if the user enters a number greater than 5")

print("This line always runs")
```

## if/else

If you want to provide two different blocks of code for your `if` statement to choose between — ie. "do this thing or else do this other thing" — you can tack an an `else` statement on to the end of your `if` statement, like so:

```python
number = input() # the user types in a number

if int(number) > 0:
  print("{} is positive".format(number)) # this line executes if the user enters a positive number
else:
  print("{} is negative".format(number)) # this line executes if the user enters a negative number
```

## elif

You can add additional options to your if/else statement using `elif`:

```python
x = input()
y = input()

if int(x) > int(y):
  print("x is greater than y!")
elif x < y:
  print("x is less than y!")
else:
  print("x equals y!")

```

## User Input and Conditionals (together at last)

### Exercise 4

Create new `.py` files for each of the following challenges:

1. Ask the user to enter a number.  Use an `if` statement to print "that's a big number!" if the number is 100 or more, or "why not dream a little bigger?" otherwise.

2. Ask the user to enter their age, and then display a message telling them how many years apart in age you are from them.  If they enter a number larger than 105, print "I'm not sure I believe you".

3. Save your name as a string into a variable, then ask the user to enter their name.  If the two names match, print "We have the same name!".

4. Pick a number and save it in a variable called `secret_number`.  Ask the user to enter a number.  If they enter the secret number, print "You win!".  If they are off by 1, print "So close!".  Otherwise, print "Try again".

# Loops

Python includes a `while` loop that will execute a block of code over and over until its condition is no longer true.

## while

```python
while True:
  print("I'm an infinite loop!")

# this program will never finish running because the condition given to the while loop will never stop being true
```

^ Hit `CTRL-C` to stop Python when it's stuck in an infinite loop.

```python
counter = 1

while counter < 4:
  print("counter currently at {}.".format(counter))
  counter += 1 # increase the value of counter by 1

#counter currently at 1.
#counter currently at 2.
#counter currently at 3.
```

## Exercise 5

You decide to get some exercise and fresh air, but you want to keep track of how far from home you are.

Ask the user for input on what action to take - walk or run. If they walk, the total distance should go up by one, and you should update the user on their total distance traveled as follows:

    "Distance from home is 6 km."

If they run, their total distance should go up by 5. Your program should keep asking for input - you don't know where you're going until you get there! Each time, you should print the total distance traveled.

```
Would you like to walk or run?
$ walk
Distance from home is 1km.
Would you like to walk or run?
$ walk
Distance from home is 2km.
Would you like to walk or run?
$ run
Distance from home is 7km.
Would you like to walk or run?
$ run
Distance from home is 12km.
```

Suggestions:
* Break this problem down into smaller pieces. What do you know how to do? Start with that!
* Read the problem very carefully. If the question uses the word 'if', you almost certainly need an `if` statement!
* You can press CTRL-C to end your program if it keeps asking you for input.

### Exercise 6.1
Allow the user to go home when they are done exercising. The program should stop asking for input if the user enters 'go home'.

See if you can also make the program tell the user when they have entered a command that does not exist.

### Exercise 6.2
You started the day with energy, but you are going to get tired as you travel! Keep track of your `energy`.

If you walk, your `energy` should increase. If you run, it should decrease. Moreover, you should not be able to run if your energy is zero.

...then, go crazy with it! Allow the user to rest and eat. Do whatever you think might be interesting.


Congrats for making it this far!

### Submitting

When you're done the exercises and have pushed your work to Github, click on the "Submissions" tab at the top of this page and paste in the link to your Github repository.

## Additional Resources

* [Real Python: Data Types](https://realpython.com/python-data-types/)
* [Real Python: Variables](https://realpython.com/python-variables/)
* [Real Python: Operators and Expressions](https://realpython.com/python-operators-expressions/)
* [Real Python: Working with Strings](https://realpython.com/python-strings/)
* [Real Python: Conditionals](https://realpython.com/python-conditional-statements/)
* [Real Python: While loops](https://realpython.com/python-while-loop/)
* [Real Python: Why Python](https://realpython.com/python-introduction/)
* [Code Academy Python course](https://www.codecademy.com/learn/learn-python-3)
* [Learn Python3 in Y Minutes](https://learnxinyminutes.com/docs/python3/)
