## Exercises on Collections and Iteration


### What You Will Learn
* ranges
* iteration

### Prerequisites

* variables
* data types
* string interpolation
* if/else statements
* readiness to look things up online!
## Ranges

In this example, we're using something called a **range** to describe a series of numbers from 1 to 5 (`(1..5)`).  Try out the following code in the Python shell:

```python
one_to_four = range(1,5)

for num in one_to_four:
  print(num)

# 1
# 2
# 3
# 4

zero_to_four = range(5)

for num in zero_to_four:
  print(num)

# 0
# 1
# 2
# 3
# 4

five_to_ten = range(5, 11)

for num in five_to_ten:
  print(num)

# 5
# 6
# 7
# 8
# 9
# 10
```

Notice the range goes up to one number less than the second argument we pass in.

Try the following example in the Python shell:

```python
one_to_five = range(1, 6)

for num in one_to_five:
  print(num * num)

# 1
# 4
# 9
# 16
# 25
```

We can also convert a range into a list:

```python
list(range(10))
```

## Exercise 11

Let's do our own General Assembly version of [FizzBuzz](http://en.wikipedia.org/wiki/Fizz_buzz), which is the name of a classic job interview coding problem.

Write a program that loops over the numbers from 1 to 100. If the number is a multiple of three, output the string "General".  For multiples of five, output "Assembly". For numbers which are multiples of both three and five, output "General Assembly".  Otherwise output the number itself.

To solve this problem you will likely need to search the web. Start with the particular aspect of the question you are unsure of, such as "check if number is multiple of another python". _Do_ use online resources, but _do not_ read or copy an entire solution to the problem.  Make sure the code you submit is your own. You will learn much more if you work through it yourself!

As always, don't forget to commit your work as you make progress.

## Exercise 12

PizzaMaker wants to handle bulk orders of pizzas, with varying amounts of toppings on each. Ask the user for a number of pizzas - call it `quantity`. We then want to ask the user for `quantity` more numbers - the number of toppings on that pizza - and print them out as in the following example.

```
How many pizzas do you want to order?
$ 3
How many toppings for pizza 1?
$ 5
You have ordered a pizza with 5 toppings.
How many toppings for pizza 2?
$ 1
You have ordered a pizza with 1 toppings.
How many toppings for pizza 3?
$ 4
You have ordered a pizza with 4 toppings.
```

You will need:
* to ask the user for input twice.
* a loop of some kind.
* to make sure your variables are what you think they are! Convert them to integers if needed.
* string interpolation

## Additional Resources

* [Real Python: ranges](https://realpython.com/python-range/)
