## What You Will Learn

* Understanding classes and instances

## Outline

1. [Intro](#intro)
2. [Bank Account Exercise](#exercise-1)


## Intro

### What are Objects and Classes?

Objects help us build programs that model how we tend to think about the world. Human minds tend to break down the world into objects: trees, leaves, roads, desks, cars, tacos, songs, and so on (all the things). Since it is our natural mental tendency to understand the world in terms of objects, this is very useful for modelling things in the real world in our programs.

A class is the blueprint from which individual objects are created. In object-oriented terms, we say that your bicycle is an instance of the class of objects known as bicycles.

Take the example of any vehicle. It comprises wheels, horsepower, and gas tank capacity. These characteristics form the data members of the class "vehicle". These characteristics allow us to tell one vehicle from another.

A vehicle can also have certain abilities, such as driving, stopping, and speeding up. Even these abilities make a vehicle a vehicle. You can therefore define a class as a combination of characteristics and abilities.  Another term for "characteristics" is "state", and another term for "abilities" is "behaviours".  So you can also define a class as a combination of "state and behaviour".

### Defining Classes

The syntax for starting to define a new class (e.g. `Person`) in Python looks like this:

```python
class Person:
  # code describing Person class goes in here
  # ...
  # ...
  # ...

# un-indent when class definition is over
```

Note that the name of the class must start with a capital letter: `Person`, not `person`.

We need to be able to set the _attributes_ or _state_ of each person we make: i.e. give them a name and an age.  To allow us to do this, we define a specially named method `__init__` (that's two underscores at the start and two at the end) inside the class, which takes a specially named first argument `self`.  It also takes two more arguments: the name and age.  Inside the method definition we assign the values of those name and age arguments to the new person object as attributes, or _instance variables_.  `self` refers to the specific person that's being created or "instantiated".

```python
class Person:

  def __init__(self, name, age):
    self.name = name
    self.age = age

# un-indent when class definition is over
```

### Creating Objects (Instances) of a Class

Now we can create people and assign them names and ages:

```python
janelle = Person("Janelle", 33)
dora = Person("Dora", 28)
```

Writing `Person()` calls the `__init()__` method from the `Person` class.  We pass in the two `name` and `age` arguments, but we don't pass anything in for the special first argument, `self`.

Now we can make objects with attributes/state! And we can display the attributes of an object like so:

```python
print(janelle.name)
# "Janelle"
print(janelle.age)
# 33
```

And we can change the values of attributes too:

```python
janelle.age = 34

print(janelle.age)
# 34
```

Let's see another example:

```python
class Recipe:

  def __init__(self, title, description, mins, veg):
    self.title = title
    self.description = description
    self.time_in_minutes = mins
    self.vegetarian = veg

breakfast = Recipe("oatmeal", "a healthy breakfast", 15, True)
lunch = Recipe("pork miso soup", "savoury goodness", 50, False)
dinner = Recipe("chicken curry", "aromatic", 45, False)

print(breakfast.title)
# "oatmeal"

# increase the time needed for dinner:
dinner.time_in_minutes = 50
# update the description
dinner.description = "aromatic and filling"

print("dinner will take {} minutes to prepare".format(dinner.time_in_minutes))
# dinner will take 50 minutes to prepare
```

### Displaying Objects

So far we've been printing specific attributes, like `print(breakfast.title)`.  What happens if we print the whole object?

```python
print(breakfast)
# <__main__.Recipe object at 0x7fa639c00518>
```

Wow, that output looks terrible, doesn't it?  Unless we spell out what exactly we want to see, Python doesn't know how to display objects of classes that we defined ourselves.

Of course, it's never wrong to tell Python exactly what to display (i.e. ask for the title specifically with `print(breakfast.title)`), but to make our lives easier we can also define a `__str__()` instance method that returns a string representation of the object.  `__str__()` is a specially named method (similar to `__init__()`) that Python will check for.  If a class contains a `__str__()` method, Python will use it to display an object when it's printed.  Let's see an example:

```python
class Recipe:

  def __init__(self, title, description, mins, veg):
    self.title = title
    self.description = description
    self.time_in_minutes = mins
    self.vegetarian = veg

  # as with __init__, we define self as a special first argument
  def __str__(self):
    return "RECIPE: title: {} - description: {} - time_in_minutes: {} - vegetarian: {}".format(self.title, self.description, self.time_in_minutes, self.vegetarian)

breakfast = Recipe("oatmeal", "a healthy breakfast", 15, True)
print(breakfast)
#RECIPE: title: oatmeal - description: a healthy breakfast - time_in_minutes: 15 - vegetarian: True
```

Now when we pass a recipe object to `print`, Python uses the `Recipe` class's `__str__()` method to convert the recipe to a nice string.  We have much nicer output now!

### More on Initializing State

`__init__()` can also initialize instance variables that aren't passed in as arguments:

```python
class Recipe:

  def __init__(self, title, description, mins, veg):
    self.title = title
    self.description = description
    self.time_in_minutes = mins
    self.vegetarian = veg
    # votes always starts at 0
    self.votes = 0


breakfast = Recipe("oatmeal", "a healthy breakfast", 15, True)

print(breakfast.votes)
# 0

breakfast.votes += 1

print(breakfast.votes)
# 1
```

This is what we would do if we wanted all recipes to start with zero votes.

### Instance Methods

Instance methods are the actions/behaviours that objects can perform.  Just like with `__init__()`, when defining an instance method we give it a special first argument `self`.

Inside instance methods we can make use to the instance variables we set up in `__init__()`: `self.name`, `self.age`.

We can't just call an instance method on its own - we need an object/instance of the class to perform the action.  In this example, we've added `introduce()` as an instance method in the `Person` class.  We create a new person object and call `introduce()` _on_ that person.  Put another way, we have that person perform the "introduce" action.


```python
class Person:

  def __init__(self, name, age):
    self.name = name
    self.age = age

  def introduce(self):
    return "Hello, my name is {}".format(self.name)


janelle = Person("Janelle", 33)

print(janelle.introduce())
# Hello, my name is Janelle
```

Notice how we are able to use `self.name` inside the instance method (`introduce()`).

Notice also that we don't have to pass any arguments to `introduce()`.  Let's define another instance method that _does_ take an argument:

```python
class Person:

  def __init__(self, name, age):
    self.name = name
    self.age = age

  def introduce(self):
    return "Hello, my name is {}".format(self.name)

  def meet(self, other_name):
    return "Hello {}, my name is {}".format(other_name, self.name)


janelle = Person("Janelle", 33)

print(janelle.introduce())
# Hello, my name is Janelle

print(janelle.meet("Betty"))
# Hello Betty, my name is Janelle
```

It looks like `introduce()` should take one argument and `meet()` should take two, but `self` doesn't really count as an argument that needs to be passed it.  

## Exercise 1: Bank Account

1. Create a `BankAccount` class
2. Every bank account should have `balance` and `interest_rate` attributes (instance variables)
  * Since we want these fields to be set for every account, you'll need to add an `__init__` method to your class
  * At this point you should test out creating an instance of your class to make sure it works
3. Define a `__str__()` instance method so you can print bank account objects and see a nice, meaningful string.  Make sure this method _returns_ a string, rather than printing it!
4. Your class should have an instance method called `deposit` that accepts one `amount` argument and adds that amount to the total balance
  * Test out your method by calling it on an instance of your class
5. There should be a `withdraw` instance method that accepts one `amount` argument and subtracts it from the total balance
  * Don't forget to test it out!
6. Finally, there should be a `gain_interest` instance method that increases the total balance according to the interest rate.

Once all of that is working, don't forget to commit!
