These short exercises will help you practice and reinforce the fundamental programming concepts that you have learned so far: variables, data types, conditionals, functions, return values, arguments, collections, and iteration.

## Prerequisites
* programming fundamentals assignment on variables, data types, conditionals
* programming fundamentals assignment on functions
* programming fundamentals assignment on collections and iteration

## Exercises

Create the following list in Python:

```python
[
{'train': "72C", 'frequency_in_minutes': 15, 'direction': "north"},
{'train': "72D", 'frequency_in_minutes': 15, 'direction': "south"},
{'train': "610", 'frequency_in_minutes': 5, 'direction': "north"},
{'train': "611", 'frequency_in_minutes': 5, 'direction': "south"},
{'train': "80A", 'frequency_in_minutes': 30, 'direction': "east"},
{'train': "80B", 'frequency_in_minutes': 30, 'direction': "west"},
{'train': "110", 'frequency_in_minutes': 15, 'direction': "north"},
{'train': "111", 'frequency_in_minutes': 15, 'direction': "south"}
]
```

1. Save the direction of train 111 into a variable.
2. Save the frequency of train 80B into a variable.
3. Save the direction of train 610 into a variable.
4. Create an empty list. Iterate through each train and add the name of the train into the list if it travels north.
5. Do the same thing for trains that travel east.
6. You probably just ended up rewriting some of the same code.  Move this repeated code into a function that accepts a direction and a list of trains as arguments, and returns a list of just the trains that go in that direction.  Call this function once for north and once for east in order to DRY up your code.
7. Pick one train and add another key/value pair for the `first_departure_time`. For simplicity, assume the first train always leave on the hour. You can represent this hour as an integer: `6` for 6:00am, `12` for noon, `13` for 1:00pm, etc.
8. Now we want to (programmatically) make a new dictionary where the train frequencies are the keys and the values are a list of train names, like so:
```python
{
  15: ['72C', '72D', '110', '111'],
  5:   ['610', '611'],
  30:  ['80A', '80B']
}
```  

_Rearrange the order_ of the following lines of code to achieve this task.  You can (and should) adjust the indenting but don't otherwise modify the code:

```python
trains = [
{'train': "72C", 'frequency_in_minutes': 15, 'direction': "north"},
{'train': "72D", 'frequency_in_minutes': 15, 'direction': "south"},
{'train': "610", 'frequency_in_minutes': 5, 'direction': "north"},
{'train': "611", 'frequency_in_minutes': 5, 'direction': "south"},
{'train': "80A", 'frequency_in_minutes': 30, 'direction': "east"},
{'train': "80B", 'frequency_in_minutes': 30, 'direction': "west"},
{'train': "110", 'frequency_in_minutes': 15, 'direction': "north"},
{'train': "111", 'frequency_in_minutes': 15, 'direction': "south"}
]
freq = train['frequency_in_minutes']
print(trains_by_frequency)
for train in trains:
trains_by_frequency = {}
trains_by_frequency[freq] = [name]
name = train['train']
if freq in trains_by_frequency:
else:
trains_by_frequency[freq].append(name)
```
