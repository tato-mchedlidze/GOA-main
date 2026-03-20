# cw1 Exclusive "or" (xor) Logical Operator
def xor(a,b):
    return a != b


# cw2 What's the real floor?
def get_real_floor(n):
    if n < 1:
        return n
    elif n < 13:
        return n-1
    elif n > 13:
        return n-2


# cw3 Filter out the geese
def goose_filter(birds):
    geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    return [bird for bird in birds if bird not in geese]


# cw4 Name Shuffler
def name_shuffler(s):
    parts = s.split()
    return f"{parts[1]} {parts[0]}"


# cw5 Find numbers which are divisible by given number
def divisible_by(numbers, divisor):
    return [num for num in numbers if num % divisor == 0]


# cw6 Lario and Muigi Pipe Problem
def pipe_fix(nums):
    return list(range(min(nums), max(nums) + 1)) 


# cw7 Plural
def plural(n):
    return n == 0 or n > 1


# cw8 Multiplication table for number
def multi_table(number):
    res = ""
    for i in range(1,11):
        res += f"{i} * {number} = {i*number}\n"     
    return res[0:-1]


# cw9 Super Duper Easy
def problem(a):
    if type(a) == str: return "Error"
    return a*50+6


# cw10 Grasshopper - If/else syntax debug
def check_alive(health):
    if health > 0:
        return True
    else:
        return False


# cw11 Grasshopper - Basic Function Fixer
def add_five(num):
    total = num + 5
    return total


# cw12 Grasshopper - Terminal game combat function
def combat(health, damage):
    if health - damage > 0: return health - damage
    return 0


# cw13 Capitalization and Mutability
def capitalize_word (word : str) -> str:
    return word[0].upper() + word[1:]


# cw14 How many lightsabers do you own?
def how_many_light_sabers_do_you_own(name=''):
    return 18 if name == 'Zach' else 0


# cw15 Stringy Strings
def stringy(size):
    return ('10' * size)[:size]


# cw16 Remove duplicates from list
def distinct(seq):
    res = []
    for i in seq:
        if i not in res: res.append(i)
    return res

# cw17 Merge two sorted arrays into one
# v1
def merge_arrays(arr1, arr2):
    
    arr3 = arr1 + arr2
    
    arr4 = list(set(arr3))
    
    arr4.sort()
    
    return arr4
# v2
def merge_arrays(arr1, arr2):
    return sorted(list(set(arr1+arr2)))