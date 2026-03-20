#  mulryply
def multiply(a, b):
    return a * b

# even or odd
def even_or_odd(number):
    if number %2 == 0:
        return "Even"
    else: return "Odd"

#  convert a numbre to a string
def number_to_string(num):
    return str(num)

#  reverse string
def solution(string):
    return string[::-1]

# return negative
def make_negative( number ):
    if number > 0:
        return number * -1
    else: return number
    

# opposite number
def opposite(number):
    return number * -1

# convert boolean values to string 'yes' or 'no'
def bool_to_word(boolean):
    if boolean == True:
        return "Yes"
    else: return "No"

# sum of positive
def positive_sum(arr):
    res = 0
    for i in arr:
        if i > 0:
            res += i
    return res

# string repeat
def repeat_str(repeat, string):
    res = ""
    for i in range(repeat):
        res = res + string
    return res

def repeat_str(repeat, string):
    return string * repeat

# remove first and last character
def remove_char(s):
    return s[1:-1]

# square(n) sum
def square_sum(numbers):
    result=0
    for i in numbers:
        result+=i**2
    return result