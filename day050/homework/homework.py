# hw 1
try:
    user_input = input("Enter a number: ")
    number = float(user_input) 
    print(f"You entered the number: {number}")
except ValueError:
    print("Error: That is not a valid number.")

# hw 2
my_list = [10, 20, 30]
try:
    print("Accessing 5th element of the list:", my_list[4])
except IndexError:
    print("Error: List index out of range.")

# hw 3
try:
    result = "abc" + 5
    print("Result:", result)
except TypeError:
    print("Error: Cannot add a string and an integer.")
