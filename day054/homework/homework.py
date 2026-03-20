# hw2) User Input Number Division
try:
    num1 = float(input("Enter the first number: "))
    num2 = float(input("Enter the second number: "))
    result = num1 / num2
    print(f"Result: {result}")
except ZeroDivisionError:
    print("Error: Cannot divide by zero.")
except ValueError:
    print("Error: Please enter valid numbers.")


# hw3) List Index Access
my_list = [10, 20, 30, 40, 50]

try:
    index = int(input("Enter an index to access (0-4): "))
    print(f"Element at index {index}: {my_list[index]}")
except IndexError:
    print("Error: Index out of range.")
except ValueError:
    print("Error: Please enter a valid integer index.")


# hw4) Dictionary Key Access
my_dict = {
    'name': 'Alice', 
    'age': 25, 
    'city':'New York'
    }

key = input("Enter a key to access from the dictionary (name, age, city): ")

try:
    print(f"Value: {my_dict[key]}")
except KeyError:
    print("Error: Key not found in the dictionary.")


# hw5) Convert String to Integer
user_input = input("Enter a number to convert to an integer: ")

try:
    number = int(user_input)
    print(f"Converted integer: {number}")
except ValueError:
    print("Error: Invalid input. Please enter a numeric value.")


# hw6) Function as Argument – Greeting
def say_hello():
    print("Hello!")

def greet(func):
    func()

greet(say_hello)


# hw7) Return a Function – Multiplier
def make_multiplier(factor):
    def multiply(number):
        return number * factor
    return multiply

times2 = make_multiplier(2)
print(times2(5))