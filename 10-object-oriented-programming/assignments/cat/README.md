## What You Will Learn

* Understanding classes and instances

## Exercise 2: The Cat's Meow

Since we're working toward the goal of building apps for the web, we may as well start with the one thing that the web wouldn't exist without: cats!

In this exercise, we're going to create a cat class so we can populate our software with a menagerie of feline friends.

Start a new project (create a new subfolder) and add a new file called "cat.py". Run your program and commit your work after each step.

1. Create a class called `Cat`
2. Every cat should have three attributes when they're created: `name`, `preferred_food` and `meal_time`
3. Create two instances of the Cat class in your file
  * They should each have unique names, preferred foods and meal times
  * Let's assume `meal_time` is an integer from 0 to 23 (representing the hour of the day in 24 hour time)
4. Define a `__str__()` instance method.
5. Add an instance method called `eats_at` that returns the hour of the day with AM or PM that this cat eats.
  * The return value should be something like "11 AM" or "3 PM"
  * Make sure your method _returns_ this string rather than _printing_ it
6. Add another instance method called `meow` that returns a string of the cat telling you all about itself
  * The return value should be something like "My name is Sparkles and I eat tuna at 11 AM"
7. Call the `meow` method on each of the cats you instantiated in step 3
