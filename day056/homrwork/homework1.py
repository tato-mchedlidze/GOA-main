# hw2) Print your name
print("Tarieli Mchedlidze")  # Display your name


# hw3) Print a favorite quote
print("In case i dont see you, Good afternoon, Good evening and Good night")  # Print a quote


# hw4) Print multiple lines
print("He clasps the crag with crooked hands")  # Line 1 of poem
print("Close to the sun in lonley lands")       # Line 2 of poem
print("Ring'd with the azure world, he stands") # Line 3 of poem


# hw5) Print a simple math result
print(5+2)  # Output the result of 5 + 2


# hw6) Print a shape with symbols
# Using multiple print statements to build a pyramid shape
print("    *")       # Line 1 of pyramid
print("   ***")      # Line 2
print("  *****")     # Line 3
print(" *******")    # Line 4
print("*********")   # Line 5


# hw7) Convert string to integer
# Convert the string "42" to an integer and print it
str = "42"
int = int(str)       # Convert string "42" to integer
print(int)


# hw8) Add two floats
# Simple float addition of 3.5 and 2.5
a = 3.5
b = 2.5
result = a + b       # Add two float numbers
print(result)


# hw9) Concatenate two strings
# Combine two strings with a space between them
str1 = "Hello"
str2 = "World"
greeting = str1 + " " + str2  # Combine with space
print(greeting)


# hw10) Print data types
# Show the type of each variable using type()
x = 10         # Integer
y = "text"     # String
z = 3.14       # Float
print(type(x))  # Print type of x
print(type(y))  # Print type of y
print(type(z))  # Print type of z


# hw11) User input and type conversion
# Ask for user age, convert it to integer, and calculate next year's age
age = input("Enter your age: ")             # Ask for age
age_next_year = int(age) + 1                # Convert to int and add 1
print("Next year you will be", age_next_year)


# hw12) Ask for your name
# Get user's name and greet them
name = input("your name is?: ")             # Ask for name
print("Hello, " + name + "!")               # Greet user


# hw13) Ask for age and calculate next year’s age
# This mistakenly uses the previous 'age' variable instead of 'age1'
age1 = input("How old are you?: ")          # Get age input
next_age = int(age) + 1                     # Convert and add 1 (note: reused 'age' not 'age1')
print("Next year you will be", next_age)


# hw14) Simple calculator: addition
# Get two numbers from the user and print their sum
num1 = input("first number: ")              # Get first number
num2 = input("second number: ")             # Get second number
sum = int(num1) + int(num2)                 # Convert to int and add
print("sum is", sum)


# hw15) Favorite color
# Ask the user for their favorite color and print it back
color = input("your favorite color?: ")     # Ask for favorite color
print("Your favorite color is", color + "!")


# hw16) Check if the user is tall enough
# Compare height input with 150 cm to determine if tall enough
height = input("your height in cm: ")       # Get height
if int(height) > 150:                       # Check if taller than 150cm
    print("You are tall enough!")
else:
    print("You are not tall enough.")


# hw17) Print numbers from 1 to 5
# Use a for-loop with range to print numbers 1 through 5
for i in range(1, 6):
    print(i)  # Print each number


# hw18) Print each letter of a string
# Loop through each character in the string and print it
text = "Python"
for i in text:
    print(i)  # Print each character


# hw19) Sum of numbers 1 to 10
# Use a loop to sum numbers from 1 to 10
total = 0
for i in range(1, 11):
    total += i  # Add each number to total
print("Sum", total)


# hw20) Print a multiplication table (1 to 5) for number 2
# Print the first 5 multiples of 2 in table format
for i in range(1, 6):
    print("2 x", i, "=", 2 * i)


# hw21) Print all even numbers between 2 and 20
# Use step=2 in range to get even numbers only
for i in range(2, 21, 2):
    print(i)  # Step of 2 gives even numbers


# hw22) Print numbers from 1 to 5
# Use a while-loop to print numbers 1 to 5
i = 1
while i <= 5:
    print(i)
    i += 1  # Increment until 5


# hw23) Sum of numbers 1 to 5
# While loop to add numbers from 1 to 5 and print total
i = 1
total = 0
while i <= 5:
    total += i
    i += 1
print("Sum is", total)


# hw24) Count down from 10 to 1
# Countdown loop from 10 to 1 using while
i = 10
while i >= 1:
    print(i)
    i -= 1  # Decrement


# hw25) Print all odd numbers between 1 and 10
# Use while-loop with condition to check for odd numbers
i = 1
while i <= 10:
    if i % 2 != 0:  # Check for odd
        print(i)
    i += 1


# hw26) Ask for user input until they enter "exit"
# This loop keeps asking for input until the user types "exit"
user_input = ""
while user_input != "exit":
    user_input = input("Enter something (type 'exit' to quit): ")


# hw27) Print all elements of a list
# Loop through each fruit in the list and print it
fruits = ["apple", "banana", "cherry"]
for i in fruits:
    print(i)


# hw28) Find the length of a list
# Use len() to count how many elements are in the list
colors = ["red", "green", "blue", "yellow"]
print("Length of list:", len(colors))


# hw29) Access a specific element from the list
# Lists are zero-indexed, so index 1 gives us the second element
numbers = [10, 20, 30, 40]
print("Second element:", numbers[1])  # Indexing starts at 0


# hw30) Add an element to the list
# .append() adds a new item to the end of the list
animals = ["cat", "dog", "rabbit"]
animals.append("hamster")  # Add new item
print("Updated list:", animals)


# hw31) Remove an element from the list
# .remove() deletes the first occurrence of the specified item
items = ["pen", "pencil", "eraser", "marker"]
items.remove("pencil")  # Remove specific item
print("After removal:", items)


# hw32) Create a list of squares
# Uses list comprehension to generate squares of numbers from 1 to 5
squares = [x**2 for x in range(1, 6)]  # List comprehension
print("Squares:", squares)


# hw33) Create a list of even numbers
# Creates a list of even numbers from 2 to 10 using condition in comprehension
evens = [x for x in range(2, 11) if x % 2 == 0]
print("Even numbers:", evens)


# hw34) Filter odd numbers from a list
# Filters out the odd numbers from the given list using a condition
numbers1 = [1, 2, 3, 4, 5, 6, 7]
odds = [x for x in numbers1 if x % 2 != 0]
print("Odd numbers:", odds)


# hw35) Convert a list of strings to uppercase
# .upper() converts each string to all capital letters
words = ["hello", "world", "python"]
upper_words = [word.upper() for word in words]
print("Uppercase words:", upper_words)


# hw36) Create a list of numbers squared if they are divisible by 2
# List comprehension with a filter for even numbers, then squares them
nums = [1, 2, 3, 4, 5, 6]
squared_evens = [x**2 for x in nums if x % 2 == 0]
print("Squared evens:", squared_evens)


# hw37) Function to greet a user
# Simple function that prints a personalized greeting
def greet(name):
    print("Hello, " + name + "!")
# Example:
greet("Alice")


# hw38) Function to add two numbers
# Returns the sum of two arguments passed to it
def add(a, b):
    return a + b
# Example:
result = add(3, 5)
print("Sum:", result)


# hw39) Function to check if a number is even or odd
# Checks if number is divisible by 2, returns "Even" or "Odd"
def even_or_odd(n):
    if n % 2 == 0:
        return "Even"
    else:
        return "Odd"
# Example:
print("7 is", even_or_odd(7))


# hw40) Function to calculate the area of a rectangle
# Area = length × width
def rectangle_area(length, width):
    return length * width
# Example:
print("Area:", rectangle_area(4, 6))


# hw41) Function to reverse a string
# Uses slicing to reverse the characters in a string
def reverse_string(s):
    return s[::-1]
# Example:
print("Reversed:", reverse_string("hello"))


# hw42) Create and print a tuple
# Tuples are like lists, but immutable (unchangeable)
tuple = (1, "hello", 3.14)
print("Tuple:", tuple)


# hw43) Access an element in a tuple
# Accessing elements is similar to lists; use index
tuple1 = (10, 20, 30, 40)
print("Second element:", tuple1[1])


# hw44) Find the length of a tuple
# len() returns the number of items in the tuple
tuple2 = ("apple", "banana", "cherry", "date")
print("Length of tuple:", len(tuple2))


# hw45) Concatenate two tuples
# Use + operator to join two tuples together
tuple3 = (1, 2, 3)
tuple4 = (4, 5, 6)
concatenated_tuple = tuple3 + tuple4
print("Concatenated tuple:", concatenated_tuple)


# hw46) Check if an item exists in a tuple
# Using 'in' keyword to check for membership
tuple5 = ("apple", "banana", "cherry")
if "banana" in tuple5:
    print("Found")
else:
    print("Not found")


# hw47) Create and print a set
# Sets are unordered collections with unique elements
set = {1, "apple", 3.14}
print("Set:", set)


# hw48) Check if an element is in a set
# Intended to check set1 but mistakenly checks set (previous set)
set1 = {1, "banana", 3.14}
if "banana" in set:
    print("Yes")
else:
    print("No")  # (Note: checks wrong set; should use set1)


# hw49) Add an element to a set
# .add() method adds a new unique item to the set
set2 = {1, 2, 3}
set2.add(4)
print("Updated set:", set2)


# hw50) Remove an element from a set
# .remove() deletes the specified element from the set
set3 = {1, 2, 3, 4}
set3.remove(3)
print("Set after removal:", set3)


# hw51) Find the union of two sets
# Union combines all unique elements from both sets
set4 = {1, 2, 3}
set5 = {3, 4, 5}
union_set = set4 | set5
print("Union of sets:", union_set)


# hw52) Create and print a dictionary
# Dictionary with key-value pairs
my_dict = {
    "name": "Alice", 
    "age": 25
}
print("Dictionary:", my_dict)


# hw53) Access a value by key
# Accessing a value using the key 'name'
my_dict1 = {
    "name": "Bob", 
    "age": 30
}
print("Value associated with 'name':", my_dict1["name"])


# hw54) Add a new key-value pair to a dictionary
# Adding a new entry to the dictionary with a new key 'city'
my_dict2 = {
    "name": "Charlie", 
    "age": 35
}
my_dict2["city"] = "New York"
print("Updated dictionary:", my_dict2)


# hw55) Basic variable assignment
# Simple string concatenation example
a = "code"
b = "wa.rs"
name = a + b  # Concatenate strings


# hw56) Get character from ASCII Value
# chr() converts an ASCII value to the corresponding character
def get_char(num):
    return chr(num)
