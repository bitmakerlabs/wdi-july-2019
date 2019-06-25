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

## Exercise 9
We're going to make a shopping list by storing a few items in a list. Feel free to start with whatever items you like:

```python
grocery_list = ["carrots", "toilet paper", "apples", "salmon"]
```

After each step, run your program to ensure it works before you move onto the next one. It's a good idea to commit often, too.

1. Your next step should present your grocery list with an item on each line, with an **asterisk** (\*) in front of it so that it appears like this:

![](https://raw.git.generalassemb.ly/wdi-toronto/course_materials/master/08-programming-fundamentals-collections-and-iteration/assignments/collections-and-iteration-part-2/list.png)
1. You realize you've forgotten some rice, so add it to your list and output it again. Given that you've already output your list twice, it might be good to consider writing a method to do this. Putting frequently used chunks of code in a method lets you reuse them throughout your program without having to type them out over and over.
1. You lost count of how many things you need to pick up. Better output the total number of items on your list.
1. Check to see if your list includes "bananas". If it does, output "You need to pick up bananas". Otherwise, output "You don't need to pick up bananas today".
1. Display the second item in the list. (Don't forget that lists indices start at zero!)
1. It turns out that everything in this grocery store you're visiting is stored alphabetically, so to better plan out what you need to buy you should sort your grocery list and output it with asterisks again.
1. After looking everywhere, you can't find the salmon. Delete it from your list and redisplay the list one last time.

After you're done, be sure you have everything committed and pushed to your github repo.

## Exercise 10

1. Start out by creating the following dictionary representing the number of students in past Bitmaker cohorts:

    ```python
    students = {
      'cohort1': 34,
      'cohort2': 42,
      'cohort3': 22
    }
    ```

2. Create a method that displays the name and number of students for each cohort, like so:

    ![](https://raw.git.generalassemb.ly/wdi-toronto/course_materials/master/08-programming-fundamentals-collections-and-iteration/assignments/collections-and-iteration-part-2/list2.png)
3. Add cohort 4, which had 43 students, to the dictionary.
4. Use the `keys` method to output all of the cohort names.
5. The classrooms have been expanded! Increase each cohort size by 5% and display the new results.
6. Delete the 2nd cohort and redisplay the dictionary.
7. BONUS: Calculate the total number of students across all cohorts using a `for` loop. Output the result.

## Submitting

After you're done, be sure you have committed and pushed everything to your Github repo.

## Additional Resources

* [Real Python: for loops](https://realpython.com/python-for-loop/)
* [Real Python: dictionaries](https://realpython.com/python-dicts/)
* [Real Python: lists and tuples](https://realpython.com/python-lists-tuples/)
