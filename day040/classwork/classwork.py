#Function 1 - hello world
def greet():
    return "hello world"

# Counting sheep...
def count_sheeps(sheep):
    return sheep.count(True)

# Remove String Spaces
def no_space(x):
    return x.replace(" ", "")


# You Can't Code Under Pressure #1
def double_integer(i):
    return i*2

# Returning Strings
def greet(name):
    return "Hello, {} how are you doing today?".format(name)

# Convert a Boolean to a String
def boolean_to_string(b):
    return str(b)

# Basic Mathematical Operations
def basic_op(operator, value1, value2):
    if operator == "+":
        return value1 + value2
    elif operator == "-":
        return value1 - value2
    elif operator == "*":
        return value1 * value2
    else:
        return value1 / value2
    
# Keep Hydrated!
def litres(time):
    return time // 2

# Century From Year
def century(year): 
    if year % 100 == 0:
        return year // 100
    else:
        return year // 100 + 1
#  2nd variation   
def century(year): 
    return (year + 99) // 100

# Convert number to reversed array of digits
def digitize(n):
    starting_str = str(n)
    reversed_str = starting_str[::-1]

    res_list = []

    for i in reversed_str:
        res_list.append(int(i))

    return res_list

# Beginner - Lost Without a Map
def maps(a):
    saver=[]
    for i in a:
        saver.append(i*2)
    return saver

# Opposites Attract
def lovefunc( flower1, flower2 ):
    if flower1 % 2 == 0 and flower2 % 2 == 1:
        return True
    elif flower1 % 2 == 1 and flower2 % 2 == 0:
        return True
    else:
        return False
    
# Sum Arrays
def sum_array(a):
    return sum(a)