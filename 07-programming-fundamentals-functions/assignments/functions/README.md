
## What You Will Learn

* defining functions
* calling/executing functions
* arguments
* return values

## Prerequisites
* Command-line basics
* This assignment assumes you have completed [the first programming fundamentals assignment](https://git.generalassemb.ly/wdi-toronto/course-materials/blob/master/06-programming-fundamentals-part-1/assignments/programming-fundamentals/README.md)

### Getting Started

Create a git repository on GitHub, called "python-fundamentals-2" or something similar. Clone it onto your own computer. This assignment will walk you through creating several Python programs which you should add to your git repository.  Don't forget to commit after each exercise!  


## Functions

### Built-in Functions

Python comes with a library of predefined functions. In yesterday's assignment we used the built-in functions `print()`, `input()`, and `format()`.

```python
print("What's your name?")
name = input()
print("Hello {}".format(name))
```

Here we called (i.e. executed) the `print()` function and passed it one argument.  When we called the `input()` function, we passed it zero arguments.

`format()` is slightly different from `print()` and `input()` - it belongs to a group of functions - called _methods_ - that must be performed _by_ specific data types.  In programming lingo we say they must be **called on** specific data types.  In the case of `format()`, we must call it *on* a string.  In the above example, `"Hello {}"` is the string we are calling `format()` *on*.

In general, however, the terms "function" and "method" are used interchangeably by most developers.

Some other built-in Python functions include `type()`, `int()`, and `str()`.  They're all called on their own (not "on" anything), like `print()` and `input()`:

```python
str(3) # "3"
```

```python
int("5") # 5
```

```python
type("General Assembly") # <class 'str'>
```

```python
type(55) # <class 'int'>
```

### Defining Functions

You can define your own functions by using the keyword `def` followed by the function name, parentheses (`()`), and a colon (`:`). The function body is indented underneath. In Python the convention is to keep your function names all lower case and to use underscores (`_`) to separate words.  Let's see an example:

```python
def my_first_function():
  return 1 + 1 # Code to be executed
```

To execute or **call** a function in the Python shell, we simply write the following:

```bash
>>> my_first_function()
# 2
```

or in a Python file:

```python
my_first_function() # returns 2
```

```python
print(my_first_function()) # returns *and prints* 2
```

### Return values

Every function **returns** a value. You can specify a return value using the `return` keyword, otherwise the function will return `None` (Python's data type for nothingness). The return value is handed back ("returned") to the **caller** (ie. the place in your code where you called the function) when the function has done its work. A function must always return exactly one value (not more than one).


Any code that comes after a `return` will not be executed.  `return` tells Python to stop running the function and resume execution from wherever it was called.

```python
def explicit_return_function():
 "The interpreter reads over me, but does nothing"
 return 25
  "The interpreter does not read me, because the return keyword above forces the interpreter to exit the function"
```

The `explicit_return_function` function returns the value `25` because of the use of the `return` keyword.


```python
def implicit_return_function():
  "The interpreter reads over me, but does nothing"
  25
  "The interpreter reads over me too, but still does nothing"
```

The `implicit_return_function` function returns the value `None` because at no point was there a `return` statement.

### Parameters

Function **parameters** (also called **arguments**) are specified between parentheses following the function name. A function can accept any number of parameters (or none). This is a way for the caller of a function to pass it the information it needs in order to do its job.

```python
def reverse_sign(num):
  return -1 * num # Code to be executed
```

Here we defined a `reverse_sign` function that accepts one parameter called `num`, which needs to be a number.

```python
reverse_sign(56) # -56
```

Here we called the `reverse_sign` function and **passed** it the number `56` as a parameter/argument.

### Variable Scope

**Scope** defines where in a program a variable is accessible. Python has several types of variable scope, but at this point we are only concerned with **local** variables vs **global** variables.  We'll talk more about the other types in the next few days.

We can have many variables with the same name, and Python will look for the most specific one.

In different scopes, you can reuse the same name. Each one is a completely different variable.


```
def my_func1():
  x = 1    # This is a LOCAL variable.
  print(x) # 1

def my_func2():
  x = 5    # This is a DIFFERENT local variable.
  print(x) #5

print(x) # x is OUT OF SCOPE - no x exists here!
```

Functions create individual local scopes. A local variable doesn’t exist outside its local function scope.

```python
def plus_one(some_number):
 return some_number + 1

plus_one(my_num) # NameError: name 'my_num' is not defined
```

Notice that we we tried to pass the variable `my_num` as a parameter to the `plus_one` function.  This produces an error because we never defined the variable. Let's look at the same example with `my_num` now defined:

```python
my_num = 20

def plus_one(some_number):
 return some_number + 1

plus_one(my_num) # 21
plus_one(some_number) # NameError: name 'some_number' is not defined
```

`my_num` is different than the variable `some_number`, which only exists as a placeholder within the definition of `plus_one`. When we call `plus_one(my_num)` it is the equivalent of calling `plus_one(20)`, because that is the value that `my_num` points to.  When we call the `plus_one(my_num)` function the variable `some_number` gets temporarily assigned to the value that was passed in as a parameter (`20`), but after the function executes that one time, `some_number` no longer has a value.  This means that trying to call `plus_one(some_number)` still causes an error because `some_number` exists _only within the scope of_ the `plus_one` function.  We can't use it outside of that function.

Here's another example:

```python

def plus_one(some_number):
  from_inside_function = 27
  return some_number + 1

# we can pass in any number
plus_one(40)
plus_one(33)
plus_one(7)

# we can pass in any variable defined outside the function
my_num = 20
other_num = 100
plus_one(my_num)
plus_one(other_num)

# we can't pass in a variable that was defined inside the function
plus_one(from_inside_function) # NameError: name 'from_inside_function' is not defined
```

So we now know that variables defined inside functions can't be used outside of the function body.  Those variables are **local** to the function.  But what about the opposite?  If we define a variable outside a function, can we use it inside the function body?  Let's see:

```python
outside_number = 200

def do_some_math():
  return outside_number + 1

do_some_math()
```

It worked!  The `do_some_math()` function was able to access the variable we defined outside the function.

To summarize: variables defined **inside** a function are **local** to that function.  Variables defined **outside** a function are **global**, and can be access from any part of the file.

The best way to understand variable scope is to play around with it as much as you can and cause errors on purpose. Never be afraid to make a new Python program to verify your understanding. Programmers do this all the time!

### `return` vs `print`

As a beginner, it can be quite confusing as to where to use `print` statements vs `return` statements. `return` should be used at the end of a function, whereas `print` should generally be used _outside_ of functions, not inside.

This is good:

```python
def adder_that_returns(num1, num2):
  return num1 + num2

print(adder_that_returns(8, 17)) # displays 25
```

This is not so good:

```python
def adder_that_prints(num1, num2):
  print(num1 + num2)

adder(8, 17) # displays 25
```

Why?  The reason is `adder_that_prints()` can _only_ be used to display the result to a user on the command line, whereas `adder_that_returns()` can hand over the result to `print()` OR to any other piece of code: it's a more flexible and reusable function compared to `adder_that_prints()`:

```python
def adder_that_returns(num1, num2):
  return num1 + num2

def multiplier(num1, num2):
  return num1 * num2

def fancy_formatter(number):
  return "The number is: \n ~~~{}~~~".format(number)

print(adder_that_returns(8, 17)) # displays 25
result1 = adder_that_returns(6, 5)
result2 = adder_that_returns(2, 2)
result3 = multiplier(result1, result2)
formatted = fancy_formatter(result3)
print(formatted)
```

Most of the time it isn't enough to call a single function and display the result - instead, we want to use the _return values_ of various functions to do multi-step calculations and transformations on our data.  When functions give us _return values_, we can save those values into variables, pass them in as arguments to other functions, and generally continue to make use of them.

Why not use both `print` _and_ `return` inside the function, you may ask? Let's see what would happen:

```python
def adder(num1, num2):
  return print(num1 + num2)

result = adder(1,1) # displays 2

adder(result, 10) # TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'
```

The first time we called `adder()` everything went fine: we saw the number `2` displayed, which is the correct result of 1 plus 1.  But when we tried to save that `2` into the variable `result` and pass it in as the argument to `adder()` a second time, we got an error about using the `+` operator with `NoneType`.  Printing `result` makes the picture a bit clearer:

```python
def adder(num1, num2):
  return print(num1 + num2)

result = adder(1,1) # displays 2
print(result) # displays None
```

When we make `print()` our _return value_, our function ends up returning `None`.  Our result does get displayed to the user, but we lose the ability to reuse the result in other parts of our code.

So, to summarize: use `return` inside a function and `print` outside a function.

## Exercise 1

Define a function called `double` that accepts an argument called `my_number` and returns that number multiplied by 2.

Try calling it multiple times and pass in different numbers each time.

## Exercise 2

Define a function called `negative` that accepts a number as an argument and returns a boolean (true/false) indicating whether that number is negative or not.

Try calling it multiple times, passing in different numbers each time.

## Exercise 3

Define a function called `is_even` that accepts a number as an argument and returns a boolean (true/false) indicating whether that number is even or not (HINT: use the `%` operator).

Try calling it with different numbers.

## Exercise 4

Define a function that accepts a string as an argument and returns `False` if the word is less than 8 characters long (or `True` otherwise).

## Exercise 5
Create a function that converts Fahrenheit temperatures to Celsius in a file called **exercise6.py**.

Start with prompting the user for a temperature in Fahrenheit. Then call your function and pass in the user input as a parameter.

Your function should:
* have one parameter: the temperature in Fahrenheit
* do the conversion with this formula: C = (F - 32) x 5/9
* ensure that the parameter you pass in is a number by converting it with `int()`

Output the result in a full sentence using string interpolation.

Don't forget to commit your progress as you go along. Once you're done, commit one last time and push it to github.

## Exercise 6

Let's create a function `wrap_text` that wraps text in symbols of our choice. For example:

```python
wrap_text('hello', '===')
```

should return:

`===hello===`

Now that this function works, how can we use it (without modifying the function) to generate the following string?

`---===###new message###===---`

Note that `wrap_text` needs to _return_ a value rather than print one.

Hints:
* You'll have to call the same function multiple times.
* Try breaking down the problem into smaller pieces that you know `wrap_text` can solve.

## Exercise 7

Read the following Python code that does not follow the principle of "don't repeat yourself".  Rewrite it to use functions instead of repeating code.  Consider what your arguments and return values should be.

```python
print("How far did person 1 run (in metres)?")
distance1 = float(input())
print("How long (in minutes) did person 1 run take to run {} metres?".format(distance1))
mins1 = float(input())

print("How far did person 2 run (in metres)?")
distance2 = float(input())
print("How long (in minutes) did person 2 run take to run {} metres?".format(distance2))
mins2 = float(input())

print("How far did person 3 run (in metres)?")
distance3 = float(input())
print("How long (in minutes) did person 3 run take to run {} metres?".format(distance3))
mins3 = float(input())

secs1 = mins1 * 60
speed1 = distance1/secs1
secs2 = mins2 * 60
speed2 = distance2/secs2
secs3 = mins3 * 60
speed3 = distance3/secs3

if speed3 > speed2 and speed3 > speed1:
  print("Person 3 was the fastest at {} m/s".format(speed3))
elif speed2 > speed3 and speed2 > speed1:
  print("Person 2 was the fastest at {} m/s".format(speed2))
elif speed1 > speed3 and speed1 > speed2:
  print("Person 1 was the fastest at {} m/s".format(speed1))
elif speed1 == speed2 and speed2 == speed3:
  print("Everyone tied at {} m/s".format(speed1))
else:
  print("Well done everyone!")
```


## The end

Don't forget to submit!
