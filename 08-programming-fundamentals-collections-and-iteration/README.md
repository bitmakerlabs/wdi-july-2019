# Lists

> Ordered collections of objects

Lists are represent by square brackets: `[]`

## Creating an empty list

```py
my_list = []
```

## Creating a list with items

```py
my_list = ['soda', 'popcorn', 'napkins']
```

## List Indexes

Lists keep track of each item within using an *index*

Indexes begin at 0 and increase by 1 as items are added to the list. This means the first item in a list is at index 0, the second item is at index 1, and so on.

```py
movie_activities = [
  'drank a soda',          # index 0
  'ate some popcorn',      # index 1
  'wiped up with a napkin' # index 2
]
```

You can access an item by the list index using `[]`:

```py
words = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

# using a single integer to access the index
print(words[4]) # jumps

# using a range integer to access the index
print(words[4:6]) # ['jumps', 'over']  (notice that the end of the range `6` is not part of the captured items)

# accessing all the items from the beginning up to but excluding index 4
print(words[:4]) # ['the', 'quick', 'brown', 'fox']

# accessing all the items from index 4 to the end of the list
print(words[4:]) # ['jumps', 'over', 'the', 'lazy', 'dog']

# use negative numbers to access from the end of the list
print(words[-1]) # dog
print(words[-2]) # lazy
print(words[-3]) # the

# use a negative range to access from the end of the list
print(words[-4:-2]) # ['over', 'the']
```


## Iterating over a list

Use a `for` loop to iterate through a list.

```py
words = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

for word in words:
  print('---', word, '---')

# Output:
# --- the ---
# --- quick ---
# --- brown ---
# --- fox ---
# --- jumps ---
# --- over ---
# --- the ---
# --- lazy ---
# --- dog ---
```

Summing up numbers:

```py
sales = [99, 50, 3]

total = 0

for sale in sales:
  total += sale

print(total) # 152
```


## List methods

A non-exhaustive list of useful methods that lists support:

### `count`

Return how many of a particular object are in the list.

```py
my_list = ['soda', 'popcorn', 'popcorn', 'popcorn', 'napkins']
my_list.count('popcorn') # 3
```

### `append`

Adds an object to the end of the list.

```py
my_list = ['soda', 'popcorn', 'napkins']
my_list.append('something')
print(my_list) # ['soda', 'popcorn', 'napkins', 'something']
```

### `remove`

Removes an object from a list.

```py
my_list = ['soda', 'popcorn', 'napkins']
my_list.remove('popcorn')
print(my_list) # ['soda', 'napkins']
```

### `index`

Retrieve the index of an item.

```py
my_list = ['soda', 'popcorn', 'napkins']
my_list.index('napkins') # 2
```

### `insert`

Add an item at an index.

```py
my_list = ['soda', 'popcorn', 'napkins']
my_list.insert(2, 'something') # ['soda', popcorn', 'something', 'napkins']
```

### `pop`

Remove an item from the end of a list.

```py
my_list = ['soda', 'popcorn', 'napkins']
my_list.pop() # 'napkins
my_list == ['soda', 'popcorn']
```

### `sort`

Sort the list.

```py
my_list = ['soda', 'popcorn', 'napkins']
my_list.sort()
my_list # ['napkins', 'popcorn', 'soda']
```

### `reverse`

Reverse the order of the items in the list.

```py
my_list = ['soda', 'popcorn', 'napkins']
my_list.reverse()
my_list # ['napkins', 'popcorn', 'soda']
```

### `clear`

Empties the list.

```py
my_list = ['soda', 'popcorn', 'napkins']
my_list.clear()
my_list # []
```

## Using built-ins with lists

### `min` and `max`, `len`, `sum`

```py
numbers = [3, 12, 2, 90, 77]

len(numbers) # 5
min(numbers) # 2
max(numbers) # 90
sum(numbers) # 184
```

### `map`

Transforms a list from one state to another through a lambda (an anonymous function).

```py
list(map(lambda number: number * number, [1, 2, 3, 4, 5]))
# [1, 4, 9, 16, 25]

list(map(lambda name: 'Three cheers for {}!'.format(name.capitalize()), ['ray', 'penelope', 'felix']))
# ['Three cheers for Ray!', 'Three cheers for Penelope!', 'Three cheers for Felix!']
```

### `sorted` and `reversed`

Return a transformed sorted or reverse-sorted list but don't mutate the original list.

```py
original_list_of_candies = ['jelly bean', 'chocolate', 'licorice', 'sour key']
sorted_list_of_candies = sorted(candies)
reversed_list_of_candies = list(reversed(candies))

sorted_list_of_candies   # ['chocolate', 'jelly bean', 'licorice', 'sour key']
reversed_list_of_candies # ['sour key', 'licorice', 'jelly bean', 'chocolate']
original_list_of_candies # ['jelly bean', 'chocolate', 'licorice', 'sour key'] (nothing has changed in the original list)
```

### `list`

The `list` built-in can transform other iterable objects into lists.

```py
# transform a string into characters
sentence = 'the cat in the hat'
print(list(sentence))
['t', 'h', 'e', ' ', 'c', 'a', 't', ' ', 'i', 'n', ' ', 't', 'h', 'e', ' ', 'h', 'a', 't']

# transform a reverseiterator into a list
numbers = [1, 2, 3, 4, 5]
reversed_numbers = reversed(numbers)
print(reversed_numbers)
<list_reverseiterator object at 0x1012852b0>

print(list(reversed_numbers))
[5, 4, 3, 2, 1]
```

### all

Check if a condition is true for ***all*** items in a list.

First we `map` the items to booleans, and then we call `all` on the map result.

```py
all(map(lambda number: number > 10, [1, 5, 11, 99])) # False

all(map(lambda number: number > 10, [12, 15, 11, 99])) # True
```

### any

Check if a condition is true for ***any*** items in a list.

First we `map` the items to booleans, and then we call `any` on the map result.

```py
any(map(lambda number: number > 100, [12, 15, 11, 99])) #False

any(map(lambda number: number > 100, [12, 15, 11, 99, 101]))  # True
```

### filter

Filter a list.

First we `map` the items to booleans that meet a certain condition, and then we call `filter` on the map result.

```py
# filtering a list of numbers to only those that area greater than 10
list(filter(lambda number: number > 10, [1, 4, 14, 2, 8, 16, 45]))
[14, 16, 45]
```

---

# Dictionaries

Dictionaries are collections with key, value pairs.

## Creating an empty dictionary

```py
my_dict = {}
```

## Creating a dict with items

```py
colours = { 'house': 'brown', 'fire': 'red', 'flower': 'yellow' }
```

## Accessing items

Dict items can be accessed through their key.

```py
colours = { 'house': 'brown', 'fire': 'red', 'flower': 'yellow' }
colours['house']  # 'brown'
colours['flower'] # 'yellow'
```

## Adding items by the key

To add an item to an existing dictionary:

```py
colours = { 'house': 'brown', 'fire': 'red', 'flower': 'yellow' }
colours['sky'] = 'blue'
colours # {'house': 'brown', 'fire': 'red', 'flower': 'yellow', 'sky': 'blue'}
```

## Iterating over a dictionary

Use a for loop, passing in to variables (one for the key, and one for the value). Be sure to call `.items` on the dictionary.

```py
colours = { 'house': 'brown', 'fire': 'red', 'flower': 'yellow' }
for item, colour in my_dict.items():
  print('The {} is the colour: {}'.format(item, colour))

# The house is the colour: brown
# The fire is the colour: red
# The flower is the colour: yellow
```

## Dictionary methods

A non-exhaustive list of useful methods that dictionaries support:

### `keys`

Return the keys of a dictionary.

```py
colours = { 'house': 'brown', 'fire': 'red', 'flower': 'yellow' }
colours.keys() # dict_keys(['house', 'fire', 'flower'])
```

### `values`

Return the values of a dictionary.

```py
colours = { 'house': 'brown', 'fire': 'red', 'flower': 'yellow' }
colours.values() # dict_values(['brown', 'red', 'yellow'])
```

### `get`

Returns the value of a key in a dictionary if it exists, otherwise returns none.

This is useful as using the `my_dict[]` syntax will raise an error if it doesn't exist.

```py
colours = { 'house': 'brown', 'fire': 'red', 'flower': 'yellow' }
colours.get('house') # 'brown'
colours['house']     # 'brown'
colours.get('house') # None
colours['car']       # KeyError raised
```

# Sets

Sets are like lists, but can only store unique items. They are created with `{}`

```py
my_set = { 1, 2, 3, 4 }
my_set # {1, 2, 3, 4}

my_other_set = { 1, 2, 3, 3, 4, 4 }
my_other_set # {1, 2, 3, 4} (did not retain duplicate values)
```

## Using a set for uniqueness

Sets can be useful if you want unique items in your list.

```py
my_set = { 1, 2, 3, 4 }
my_set #  {1, 2, 3, 4}
my_other_set = { 1, 2, 3, 3, 4,  4 }
my_other_set #  {1, 2, 3, 4}

my_list_with_duplicates = ['burger', 'fries', 'drink', 'burger', 'drink']
my_set = set(my_list_with_duplicates)
my_set # {'burger', 'fries', 'drink'}

my_list_without_duplicates = list(my_set)
my_list_without_duplicates # ['burger', 'fries', 'drink']
```

# Ranges

Ranges can be used to create sequences of numbers.

Passing 1 arg to `range` will create a range from 0 up to (but not including) that number you pass in.

Passing 2 args to `range` will create a range from the first arg up to (but not including) that number you pass in.

Passing 3 args to `range` will create a range from the first arg up to (but not including) that number you pass in, stepping every third_arg.


```py
numbers = range(1, 10)
list(numbers)
[1, 2, 3, 4, 5, 6, 7, 8, 9]

small_numbers = range(3)
list(small_numbers)
[0, 1, 2]

odd_numbers = range(1, 20, 2)
list(odd_numbers)
[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
>>>
```

## Iterating over a range

```py
for i in range(1, 10):
  print(i)

# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
```
