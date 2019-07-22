# OOP and Fundamentals Reinforcement


## Agenda

* [Review of OOP](#review-of-oop) (15 mins)
* [Review of Inheritance](#review-of-inheritance) (15 mins)
* [Multiple Inheritance](#multiple-inheritance) (15 mins)

## Review of OOP

* Instance vs Instance Variable vs Instance Method
* Class vs Class Variables vs Class Method
* Types of Objects

```
Object   | State              | Behaviour
---------+--------------------+-----------------
Instance | Instance Variables | Instance Method
Class    | Class Variables    | Class Method
```

* Everything in Python is an Object
  * Instances of basic data types (strings, integers, etc) are also objects.
* The `__class__` attribute and how to use it
  * `("hello").__class__`
  * `(5).__class__`
  * `(5.0).__class__`
* Even basic data types have methods
  * `(5).bit_length()`
  * `(5.0).is_integer()`
  * `("hello").capitalize()`
  * `("hello").title()`


## Review of Inheritance

* Is-a vs Has-a
  * Types of video games (Is-a)
  * Parts of a car (Has-a)
* How to inspect Ancestors of a class
  * `some_instance.__class__.__mro__`

## Multiple Inheritance (Bonus Material)

* (This is bonus material)
