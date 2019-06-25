## Exercises on Collections and Iteration

This assignment will provide repetitious exercises in order to practice dealing with collections of different types and iterating over them.

### What You Will Learn
* lists
* dictionaries
* iteration

### Prerequisites

* variables
* data types
* string interpolation
* if/else statements
* readiness to look things up online!


## Submission
For each exercise, put your answers into a single Python file called `exercises.py` (to be run and submitted). Run your work at each step! You want to see your output and ensure there are no errors before moving on to the next step. The Python shell can also be helpful.

## Lists Intro

A list is a Python data type that holds an ordered collection of values, which can be any type.

Example using literal notation:
```python
x = [1, 2, 3, 4]
y = ['beep', 'bloop']
x
# [1, 2, 3, 4]
y
# ['beep','bloop']

y.append('bibbity bobbity')
y
# ['beep', 'bloop', 'bibbity bobbity']
```


Let's explore properties of lists by typing each one of the following in the Python shell. Avoid copying and pasting!

`type(["green", "purple", "orange"])`

`len(["green", "purple", "orange"])`

`type([1, 15, 7, 4])`

`len(["hello", 7, True])`

`type([])`

Let's do some more by making a list called `colours`:

`colours = ["green", "purple", "orange"]`

`type(colours)`

`len(colours)`

`colours[2]`

`type(colours[2])`

`colours[0].upper()`

`colours[2] = "yellow"`

`colours`

`colours[-1]`

`colours[-2]`

`colours[3]` -> this should cause an error. Why?

Now let's put a bunch of greetings into a list and play around with them:

`greeting = "hello"`

`greetings = [greeting, "hi", "what's up?"]`

`greetings[0]`

`greetings[1]`

`number = 2`

`greetings[number]`

`greetings[-1]`

So, what does this tell us?
* Lists are delimited with square brackets (`[...]`), similar to how quotation marks delimit a string
* Each object within a list is separated by a comma
* Lists can hold objects of any type, even multiple types in the same list
* You can get the length of a list by calling the `len()` method on it
* We can access individual objects within a list by using square brackets and **indices**. Python lists are zero-indexed, which means the first element's index is always 0.
* If we try to access a list index which doesn't exist, it causes a `list index out of range` error

There are a bunch of built-in functions that we can use with lists. We've already seen `type()`, `append()`, and `len()`. You can of course see a full list of possible functions in the [Python documentation](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists). Let's try some more things in the Python shell:

`colours = ["red", "purple", "pink"]`

`len(colours)`

`colours.append("blue")`

`len(colours)`

`colours`

`colours[0:3]`

`colours[0:2]`

`colours[1:3]`

`colours[2:3]`

`colours[2:2]`

`colours.append("orange")`

`"purple" in colours`

`"yellow" in colours`

`colours.sort()`

`colours`

`grades = [87, 65, 90, 77, 90]`

`len(grades)`

`grades.sort()`

`grades`

`grades.reverse()`

`grades`

`grades.count(90)`

`grades.count(77)`

`grades.count(100)`

`grades.index(77)`

`grades.index(90)`

`grades.index(100)`

`max(grades)`

`min(grades)`

`mixed = [1, 2, "A+"]`

`min(mixed)`

`mixed.sort()`

What did we learn?

Keep experimenting on your own to get more familiar with how lists behave.  Feel free to ask an instructor to clarify anything that doesn't make sense!  You can also try other functions from [the official Python list documentation](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists) that we haven't explored yet.

## Iterating through a List

Let's say we wanted to display all the colours in a list:

```python
visible_colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
print(visible_colours[0])
print(visible_colours[1])
print(visible_colours[2])
print(visible_colours[3])
print(visible_colours[4])
print(visible_colours[5])
print(visible_colours[6])
```

This code works when there are only 7 colours, but what if we had a list containing 1000 items?  Our approach wouldn't be sustainable.  We need a way of repeating a step for every item in a list, regardless of the length.  That's where the `for` loop comes in:

```python
visible_colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

for each_colour in visible_colours:
  print(each_colour)
```

The `for` loop always follows this form:

```python
for item in collection:
  # Do something with item
```

Let's try another example in the Python shell:

```python
guests = ['Anabel', 'Arthi', 'Aish']

for name in guests:
  print("Hi, {}!".format(name))
```

We can have multi-line loops too.  Try running this is the Python shell:

```python
numbers = [1,5,22,100]

for current_num in numbers:
  # all these steps will happen once for each number:
  double = current_num * 2
  double_plus_one = double + 1
  no_more_than_one_hundred = max(100, double_plus_one)
  message = "Your score is {}%".format(no_more_than_one_hundred)
  print(message)

# un-indent to end the loop
print("This message displays just once after the loop is done")
```

Let's do something more useful:

```python
grades_list = [50, 77, 90, 95, 65]
total = 0

for grade in grades_list:
  total = total + grade

average = total / len(grades_list)
print("The class average is {}.".format(average))
```

## `for` loops with `enumerate`

What if we want to modify list items as we loop through them? We'll need to know the index.  `enumerate` helps us with this:

```python
grades_list = [50, 77, 90, 95, 65]

for index, grade in enumerate(grades_list):
  grades_list[index] = grade + 1

print(grades_list) # 51, 78, 91, 96, 66
```

Try this example in the Python shell to get a better understanding:

```python
foods = ['rice', 'potatoes', 'noodles']

for current_index, current_food in enumerate(foods):
  print("{} is at position {}".format(current_food, current_index))
```
## Iterating through strings

We can use `for` loops with strings as well:

```python
for character in "hello":
  print(character)

# h
# e
# l
# l
# o
```

Can we use `enumerate()` with a string?  Try it yourself in the Python shell to find out!

## Dictionaries Intro

Dictionaries are collections of key-value pairs. Like lists, they have values associated with indices, but in the case of dictionaries the indices are called **keys**. Instead of referring to the position of a specific value, keys act more like labels for the values in your dictionary.  Keys can be many different data types, including integers, float, and (most often) strings.  The values to which keys refer can be any data type.

Why would we want key-value pairs? Think about a physical dictionary that you use when you want to know the definition of a word. You look up the word 'transcendent' in the dictionary to get the definition. The key is the word 'transcendent' and the value is the definition. It turns out that we want to do this kind of thing very often in programming.

The syntax for creating a new dictionary is like so:
```python
my_dictionary = {
  'python': 'a big snake',
  'cat': 'a fluffy friend',
  'sheep': 'looks like a cloud'
}
```

The **keys** of this new dictionary are the strings `'python'`, `'cat'`, and `'sheep'`.  The **values** are the strings `'a big snake'`, `'a fluffy friend'`, and `'looks like a cloud'`.

You retrieve a value from a dictionary by writing its key in square brackets.  You can also add new keys and values to an existing dictionary using square brackets:

```python
my_dictionary = {
  'python': 'a big snake',
  'cat': 'a fluffy friend',
  'sheep': 'looks like a cloud'
}

my_dictionary['octopus'] = 'intelligent sea creature with 8 legs'
my_dictionary['octopus'] # 'intelligent sea creature with 8 legs'

my_dictionary['cat'] # 'a fluffy friend'
my_dictionary['dog'] # KeyError: 'dog'
```

As the last line in the above example illustrates, if you try to refer to a key that doesn't exist, you'll get an error.  A safe way to try to retrieve a key that may or may not exist is to use `get()` instead, which allows us to specify a fall-back value:

```python
my_dictionary.get('dog', None) # returns None instead of erroring
my_dictionary.get('cat', None) # returns 'a fluffy friend'
```

Updating existing values looks just like adding new ones:

```python
my_dictionary['sheep'] = 'looks like a cloud; a bit smelly'
```

To remove items, use `pop()`:

```python
my_dictionary.pop('sheep') # 'looks like a cloud; a bit smelly'
my_dictionary # {'python': 'a big snake', 'cat': 'a fluffy friend', 'octopus': 'intelligent sea creature with 8 legs'}
```

We can get just a list of the keys:

```python
my_dictionary.keys() # dict_keys(['python', 'cat',  'octopus'])
```

Or just the values:

```python
my_dictionary.values() # dict_values(['a big snake', 'a fluffy friend', 'intelligent sea creature with 8 legs'])
```

We can use `.items()` in combination with a `for` loop to iterate through dictionaries:

```python
for key, val in my_dictionary.items():
  print("{} ----> {}".format(key, val))

# python ----> a big snake
# cat ----> a fluffy friend
# octopus ----> intelligent sea creature with 8 legs
```

## Combining Lists and Dictionaries

Lists can contain dictionaries:

```python
[
  {'apple': 'fruit', 'carrot': 'vegetable'},
  {'winter': 'cold', 'summer': 'hot'}
]
```

or other lists:

```python
[
  [1,2,3,4],
  ['hi', 'bye']
]
```

or both:

```python
[
  [1,2,3],
  {'one': 1, 'two': 2}
]
```

And dictionaries can contain lists:

```python
{
  'numbers': [8,5,3],
  'words': ['hi', 'bye']
}
```

and dictionaries can contain dictionaries:

```python
{
  'foods': {'apple': 'fruit', 'carrot': 'vegetable'},
  'seasons': {'winter': 'cold', 'summer': 'warm'}
}
```

or both:

```python
{
  'foods': {'apple': 'fruit', 'carrot': 'vegetable'},
  'seasons': {'winter': 'cold', 'summer': 'warm'},
  'numbers': [1,2,3,4],
  'greeting': 'hello'
}
```


The possibilities are endless!

## Exercise 0
#### Creating Lists and Dictionaries

Save each of the following lists and dictionaries into variables. You will use them throughout the assignment.

Eg. `fav_colours = ` ...

1. Create a list for each item below that contains the given information:
  * your favourite colours
  * the age of you and your siblings/cousins/friends
  * flip a coin 5 times and record whether or not the result was 'heads'
  * your three favourite performing artists

1. Create a dictionary for each item below that contains the given information:
  * three words and their definitions
  * your favourite movie names and their year of creation
  * three cities of the world and their population
  * the names of your siblings/cousins/friends and their ages

After you've done that you should run your code to make sure there aren't any syntax errors.  You should get in the habit of running your code after each step in order to catch any mistakes as soon as they're introduced.


## Exercise 1

1. Print out the list of coin flips.
1. Print out the first element of the list of your favourite colours.
1. Output the sorted version of the list of your friends and family members' ages.

1. Add a new baby (0 years old) to the list of your family's ages.
1. Using the dictionary of movie information, access and print the year of one of the movies.

If you haven't done so recently, now would be a good time to check that your code works and commit once it does.


## Exercise 2

1. Print out the last element of the list of your favourite colours.
  * Note: do this in a way that would still work for a list of any size!
1. Add a new city to the dictionary of cities and population.
1. Reverse the list of coin flips and save it.
1. Print out the population of one of the cities.
1. Print out a sentence about each item in the list of performing artists. For example:
  * `I think Pearl Jam is great.`
  * `I think Lady Gaga is great.`
  * `I think Pink Floyd is great.`


## Exercise 3

1. Print out the first two performing artists in that list.
1. For each of your favourite movies, print out a sentence about when the movie was released. For example:
  * `Avatar came out in 2009.`
  * `Mean Girls came out in 2004.`
  * `The Matrix came out in 1999.`
1. Sort and reverse the list of ages of your family. Save it and print it to the screen.
  * See if you can sort and reverse the list on one line!
1. Add "Beauty and the Beast" movie to your dictionary of movies information, but with a twist: the movie was released both in 1991 and in 2017. Print it out.


## Exercise 4

1. Print out all of the ages of your friends/family that are less than 30 (or any number where some ages will not be printed!).
1. Find and output the age of the oldest person in your friends/family list.
1. Count how many times you flipped 'heads' using the coin flips list.
1. You realize one of the performing artists in your list is no longer a favourite. Remove one of them from the list.
1. Pick a city in your city population dictionary and change its population.


## Exercise 5

1. Find the sum total of the population in the dictionary of cities.
1. Using your dictionary containing the names of your family and friends with their ages, print out one of two messages for each depending on their age. For example:
  * `Martha is old.`
  * `Stewart is young.`
  * `Holly is young.`
1. Print out the last two colours in your list of favourite colours.
1. Increase by 1 the age of everyone in your list of ages. Print it out.
1. Add two new colours to your list of favourite colours.


## Exercise 6
#### Composing Lists and Dictionaries

1. Make a new dictionary that contains a list of movies for each year. Each list of movies should be a list. Below is some data you can use.
  * 1999: The Matrix, Star Wars: Episode 1, The Mummy
  * 2009: Avatar, Star Trek, District 9
  * 2019: How to Train Your Dragon 3, Toy Story 4, Star Wars: Episode 9

1. Make a new list that contains each row of the buttons on a phone. Each row should be a list.
  * The rows on a phone are: `1 2 3`, `4 5 6`, `7 8 9`, `* 0 #`

1. Make a new list that contains information about three countries. Each country should be a dictionary that has a name, a continent, and whether or not it is an island.


## Exercise 7

1. Output the message `"I will not skateboard in the halls"` 20 times.

1. Create a list consisting of the above message. It should appear in the list 20 times.

1. Create a list consisting of the numbers between 1 and 50.

1. Use a `for` loop to find the sum of the numbers in the above list.

1. Create a new list which has three of each number up to 50.
  * Ie. `[1, 1, 1, 2, 2, 2, 3, 3, 3, ... , 50, 50, 50]` and so on, up to 50.

1. Make a new list out all of the countries from the dictionary in Exercise 6 that are not islands. Print out both lists.

## Exercise 8
You want to add up your expenses for the year. Create a list of numbers (integers or floats) that represents your expenses, eg:

`[250, 7.95, 30.95, 16.50]`

Add up the numbers and output the result.

Put this code into a method. The method should take a list as an argument and return the sum of the expenses in the list. Call the method twice with different lists.
