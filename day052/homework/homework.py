# cw1 Get the mean of an array
# v1
def get_average(marks):
    return sum(marks) // len(marks)
# v2
def get_average(marks):
    return int(sum(marks) / len(marks))

# cw2 Keep up the hoop
def hoop_count(n):
    if n >= 10:
        return "Great, now move on to tricks"
    return "Keep at it until you get it"

# cw3 Reversed Words
def reverse_words(s):
    return " ".join(s.split(" ")[::-1])

# cw4 Beginner Series #4 Cockroach
def cockroach_speed(s):
    return int(s*27.777778)

# cw5 Switch it Up!
def switch_it_up(number):
    res = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", ]
    return res[number]

# cw6 Function 2 - squaring an argument
def square(n):
    return n ** 2

# cw7 Removing Elements
def remove_every_other(my_list):
    return my_list[::2]

# cw8 Twice as old
def twice_as_old(dad_years_old, son_years_old):
    res = (dad_years_old - 2 * son_years_old)
    
    if res < 0: return res*-1
    return res

# cw9 All Star Code Challenge #18
def str_count(strng, letter):
    return strng.count(letter)

# cw10 Is it even?
def is_even(n): 
    return n % 2 == 0

# cw11 Grasshopper - Terminal game move function
def move(position, roll):
    return position + roll*2

# cw12 Get Planet Name By ID
def get_planet_name(id):
    if id == 1: return "Mercury"
    elif id == 2: return "Venus"
    elif id == 3: return "Earth"
    elif id == 4: return "Mars"
    elif id == 5: return "Jupiter"
    elif id == 6: return "Saturn"
    elif id == 7: return "Uranus"
    elif id == 8: return "Neptune"
    return id

# cw13 Will there be enough space?
# v1
def enough(cap, on, wait):
    available = cap - on
    
    if available >= wait: return 0
    return wait - available
# v2
def enough(cap, on, wait):
    return max(0, wait - (cap - on))

# cw14 What is between?
def between(a,b):
    return list(range(a, b+1))

# cw15 Is the string uppercase?
def is_uppercase(inp):
    return inp == inp.upper()

# cw16 Grasshopper - Debug sayHello
def say_hello(name):
    return f"Hello, {name}"

# cw17 Count the Monkeys!
def monkey_count(n):
    return list(range(1, n+1))

# cw18 Powers of 2
def powers_of_two(n):
    return [2**i for i in range(n+1)]

# cw19 Cat years, Dog years
# v1
def human_years_cat_years_dog_years(human_years):
    if human_years == 1:
        return [human_years, 15, 15]
    
    if human_years == 2:
        return [human_years, 24, 24]
    
    cat_years = 24 + (human_years - 2) * 4
    dog_years = 24 + (human_years - 2) * 5
    
    return [human_years, cat_years, dog_years]
# v2
def human_years_cat_years_dog_years(h):
    if h == 1: return [1, 15, 15]
    elif h == 2: return [2, 24, 24]
    return [h, 24+((h-2) * 4), 24+((h-2) * 5)]