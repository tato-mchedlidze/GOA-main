# cw1)
# Create the anonymous function
f = lambda i: i[::-1].capitalize()

# Call the function 3 times with different inputs
print(f("tato"))
print(f("rick"))
print(f("rool"))


# cw2)
print((lambda x: x * 2)(5))  # Output: 10


# cw3)
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(list(map(lambda x: x**2, numbers)))
