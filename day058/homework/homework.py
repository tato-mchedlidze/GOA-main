# hw2: Create a lambda function that adds 5 to a given number.
add_five = lambda x: x + 5


# hw3: Write a lambda function to multiply two numbers.
multiply = lambda x, y: x * y


# hw4: Use a lambda function to check if a number is even.
is_even = lambda x: x % 2 == 0


# hw5: Use a lambda function to convert a list of temperatures from Celsius to Fahrenheit.
celsius_to_fahrenheit = lambda celsius: [(temp * 9/5) + 32 for temp in celsius]


# hw6: Create a lambda function that returns True if a string starts with the letter 'A'.
starts_with_A = lambda s: s.lower().startswith('a')


# hw7: Use map() to add 10 to every number in a list.
add_ten = lambda nums: list(map(lambda x: x + 10, nums))


# hw8: Use map() to convert a list of strings to uppercase.
to_uppercase = lambda words: list(map(lambda x: x.upper(), words))


# hw9: Use map() to find the length of each word in a list of strings.
word_lengths = lambda words: list(map(lambda x: len(x), words))


# hw10: Use map() to square each number in a list.
squares = lambda nums: list(map(lambda x: x**2, nums))


# hw11: Use map() to convert a list of integers to strings.
int_to_str = lambda nums: list(map(lambda x: str(x), nums))


# hw12: Use map() to concatenate the string "Hello " to each name in a list of names.
greet_names = lambda names: list(map(lambda name: "Hello " + name, names))


# hw13: Use map() to subtract 5 from every element in a list.
subtract_five = lambda nums: list(map(lambda x: x - 5, nums))


# hw14: Use map() to multiply each number in a list by 3.
multiply_by_three = lambda nums: list(map(lambda x: x * 3, nums))


# hw15: Use map() to convert a list of temperatures in Celsius to Fahrenheit.
c_to_f_map = lambda temps: list(map(lambda c: (c * 9/5) + 32, temps))


# hw16: Use map() to check if numbers in a list are greater than 50.
greater_than_50 = lambda nums: list(map(lambda x: x > 50, nums))


# hw17: Use filter() to keep only even numbers from a list.
filter_even = lambda nums: list(filter(lambda x: x % 2 == 0, nums))


# hw18: Use filter() to select numbers greater than 10 from a list.
filter_greater_than_10 = lambda nums: list(filter(lambda x: x > 10, nums))


# hw19: Use filter() to keep strings longer than 5 characters from a list of strings.
filter_long_strings = lambda strings: list(filter(lambda s: len(s) > 5, strings))


# hw20: Use filter() to remove empty strings from a list of strings.
remove_empty_strings = lambda strings: list(filter(lambda s: s != "", strings))


# hw21: Use filter() to select only positive numbers from a list.
filter_positive = lambda nums: list(filter(lambda x: x > 0, nums))


# hw22: Use filter() to keep names that start with the letter 'A' from a list of names.
filter_names_starting_with_A = lambda names: list(filter(lambda name: name.lower().startswith('a'), names))

# hw23: Use filter() to get numbers divisible by 3 from a list.
filter_divisible_by_3 = lambda nums: list(filter(lambda x: x % 3 == 0, nums))


# hw24: Use filter() to keep words that contain the letter 'e' from a list of words.
filter_words_with_e = lambda words: list(filter(lambda word: 'e' in word.lower(), words))


# hw25: Use filter() to remove all None values from a list.
remove_none = lambda items: list(filter(lambda x: x is not None, items))


# hw26: Use filter() to keep numbers that are less than or equal to 50 from a list.
filter_less_equal_50 = lambda nums: list(filter(lambda x: x <= 50, nums))