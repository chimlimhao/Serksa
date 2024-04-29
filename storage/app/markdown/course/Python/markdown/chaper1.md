## Chapter UNDEFINED: Object Oriented Programming

`Python` ...
___
How to write a class:

```python
class Parent:
    ...
```
### Creating Instances
___
```python
object_1 = Parent()
```
___
Class constructors

```python
class Parent:

    def __init__(self, value): # You need to pass `self` as the first argument.
        self.value = value
        ...

object_1 = Parent(2)
print(object_1.value) # 2
```
### Methods
___
Every methods in a class need to have an argument `self` at the start. This contains the data of the instance.

When manipulating the data in an object. You need to always use `self.` before the variable name.
```python
class Parent:

    def __init__(self, value):
        self.value = value
        ...

    def add(self, value):
        self.value += value

    def sub(self, value):
        self.value -= value

object_1 = Parent(2)
print(object_1.value) # 2

object_1.add(4)
print(object_1.value) # 6

object_1.sub(6)
print(object_1.value) # 0
```
### Properties
___
In `Python` you can set a method to be a property. This means to access it, you write what you would do when getting a variable an the instance.

For example:

#### Before
```python
class Parent:

    def __init__(self, value):
        self.value_data = value
        ...

    def value(self):
        return self.value_data


object_1.value_data # this is how to access a variable
object_1.value() # this is how you call a method
```
#### After
```python
class Parent:

    def __init__(self, value):
        self.value_data = value
        ...

    @property # just write the decorator @property to turn a method into a property
    def value(self):
        return self.value_data


object_1.value # this is how you call a property
```
___
#### Properies can have setters

This is useful because you can add checks to any data that come through.
```python
class Parent:
    ...

    @property
    def value(self):
        return self.value_data

    @value.setter
    def value(self, value):
        ...
        return self.value_data = value


object_1.value = 10
print(object_1.value) # 10
```

### Dunder Methods
___
`Python` classes have many special methods that gets called automatically when if you never specify them. `__init__` being one of them.

Some of them are:
___
#### `__str__`
Called when you use print() with the instance directly or when converting it to a string.

```python
class Student:

    def __init__(self, name, age, year):
        self.name = name
        self.age = age
        self.year = year

    def __str__(self):
        return f"{self.name}, Age: {self.age}, Year: {self.year}"


student_1 = Student('Chim Limhao', 19, 2)
print(student_1) # Chim Limhao, Age: 19, Year: 2
```
___
#### `__len__`
Called when you use `len()` on the instance.

```python
class Rectangle:

    def __init__(self, width, height):
        self.width = width
        self.height = height

    def __len__(self): # we wants to return how long the rectangle is
        return self.width


rec_1 = Rectangle(100, 50)
print(len(rec_1)) # 100
```
___
#### `__getitem__`
Called when you use indexes on the instance

```python
class BankHistory:

    def __init__(self, acc_id, transactions):
        self.acc_id = acc_id
        self.transactions = transactions

    def __getitem__(self, index):
        return self.transactions[index]


user_1_id = 1
user_1_transactions = [
    "+100.00$",
    "-39.99$",
    "+20.00$",
    "-1.00$",
]

user_1_history = BankHistory(user_1_id, user_1_transactions)
print(user_1_history[2]) # +20.00$
```

### Inheritance

In `Python`, like most other languages, classes can extends other classes. This means the new class can use the methods and functions of the class it inherits and can override/extends the functionalities even more.

How to make a class extends another class:
```python
class Parent:
    ...

class Child(Parent):
    ...
```
___
Example of overriding a method
```python
class Shape:

    def __init__(self, color):
        self.color = color

class Circle(Shape):

    def __init__(self, radius, color):
        self.radius = radius
        self.color = color
```
___
Example of adding more functionality instead
```python
class Shape:

    def __init__(self, color):
        self.color = color

class Circle(Shape):

    def __init__(self, radius, color):
        super().__init__(color) # We can use super() to call the old method we overrode
        self.radius = radius
```
