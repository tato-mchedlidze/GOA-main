# hw1 Function 1 - hello world
def greet():
    return "hello world!"


# hw2 Convert a string to an array
def string_to_array(s):
    return s.split() if s else [""]


# hw3 Simple multiplication
def simple_multiplication(number) :
    if number%2==0:
        return number*8
    else:
        return number*9


# hw4 Quarter of the year
def quarter_of(month):
    return (month - 1) // 3 + 1


# hw5 A wolf in sheep's clothing
def warn_the_sheep(queue):
    wolf_index = queue.index("wolf")
    if wolf_index == len(queue) - 1:
        return "Pls go away and stop eating my sheep"
    else:
        sheep_number = len(queue) - wolf_index - 1
        return f"Oi! Sheep number {sheep_number}! You are about to be eaten by a wolf!"


# hw6 L1: Set Alarm
def set_alarm(employed, vacation):
    return employed and not vacation


# hw7 Sum Mixed Array
def sum_mix(arr):
    return sum(int(x) for x in arr)


# hw8 Sum without highest and lowest number
def sum_array(arr):
    if arr is None or len(arr) <= 2:
        return 0
    
    highest = max(arr)
    lowest = min(arr)
    
    total = sum(arr)
    
    result = total - highest - lowest
    
    return result


# hw9 Gravity Flip
def flip(d, a):
    if d == 'R':
        return sorted(a)
    else:  # d == 'L'
        return sorted(a, reverse=True)


# hw10 [Bug] XCOM-409: Flight distance of Interceptor planes is miscalculated
def travel_distance(avg_speed, travel_time):
    NAUTICAL_MILE_TO_KM = 1.852
    travel_hours = travel_time / 60
    travel_kms = avg_speed * travel_hours * NAUTICAL_MILE_TO_KM
    return travel_kms


# hw11 Was the package received before it was sent? (Simplified)
def was_package_received_yesterday(tz_from, tz_to, start, duration):
    arrival_hour_at_receiver = start + (tz_to - tz_from) + duration
    return arrival_hour_at_receiver < 0


# hw12 Neutralisation
def neutralise(s1, s2):
    result = ""

    for i in range(len(s1)):
        char1 = s1[i]
        char2 = s2[i]
        
        if char1 == char2:
            result += char1
        else:
            result += "0"
    
    return result


# hw13 Flick Switch
def flick_switch(lst):
    result = []
    bool = True
    
    for item in lst:
        if item == 'flick':
            bool = not bool
        
        result.append(bool)
    
    return result


# hw14 Vexing Vanishing Values
def mul_by_n(lst, n):
    print("Inputs: ", lst, n) # Check our inputs
    result = [x * n for x in lst]
    print("Result: ", result) # Check our result
    return result


# hw15 Quadrants
def quadrant(x, y):
    if x > 0 and y > 0:
        return 1
    elif x < 0 and y > 0:
        return 2
    elif x < 0 and y < 0:
        return 3
    else:
        return 4


# hw16 Floating point comparison
def approx_equals(a, b):
    return abs(a - b) < 0.001


# hw17 Check same case
def same_case(a, b):
    if not ('A' <= a <= 'Z' or 'a' <= a <= 'z') or not ('A' <= b <= 'Z' or 'a' <= b <= 'z'):
        return -1
    return int(('a' <= a <= 'z') == ('a' <= b <= 'z'))


# hw18 Closest elevator
def elevator(left, right, call):
    left_dist = left - call if left > call else call - left
    right_dist = right - call if right > call else call - right
    return "right" if right_dist <= left_dist else "left"


# hw19 Pillars
def pillars(num_pill, dist, width):
    if num_pill == 1:
        return 0
    return (num_pill - 1) * dist * 100 + (num_pill - 2) * width


# hw20 Quadratic Coefficients Solver
def quadratic(x1, x2):
    a = 1
    b = -(x1 + x2)
    c = x1 * x2
    return (a, b, c)


'''
⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠋⠉⠉⠉⠙⠛⢿⠿⠛⠛⠛⠛⠛⠿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡿⠁⠀⠀⢀⡀⠤⠤⢄⣀⠐⡄⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠟⠀⠀⠀⠐⠁⠀⠀⢀⣀⣀⣉⣒⣄⠉⠉⠉⢉⣀⣂⠈⠙⠻⣿⣿
⣿⣿⣿⠟⠉⡄⠀⠀⠀⠠⠤⣐⠭⠒⠉⠉⠉⠉⣒⣳⠈⠛⠂⠀⠀⣒⣛⡢⠈⢿
⣿⣿⠁⠀⠀⠃⠀⠀⠈⠛⠛⠠⣤⣶⠖⠙⠀⡉⢻⡿⣶⣿⣿⠁⡂⠠⠈⢿⠗⢸
⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠂⠭⠤⠤⠤⣤⠄⠊⠀⠀⠈⠀⠀⠀⠀⢀⣶⣿
⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠒⠉⠀⠀⠀⠈⠁⠒⠂⠈⠁⠘⢿⣿⣿
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿
⡇⠀⠀⠀⠀⠀⠀⠀⠀⣾⣟⣛⣛⣻⡶⠶⠶⣶⣤⣤⣤⣤⣤⣤⣤⡶⠾⢃⣼
⣷⡀⠀⠀⠀⠀⠀⠘⢄⡀⠀⠀⠉⠉⠙⠛⠛⠛⠓⠛⠻⠿⠿⠷⠿⠟⢃⣼⣿
⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣿⣿⣿⣿⣿
⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿
⣿⡿⠁⠀⠀⢠⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡶⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿
⣿⠃⠀⠀⢀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⠀⢠⢶⣿⣿⣿⣿⣿⣿⣿⣿
⣿⡄⠀⢠⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠋⢸⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡏⠀⠀⠀⠀⢰⣶⣤⣤⣤⣤⣤⣴⣦⡀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣷⣄⣀⣀⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣄⣀⣤⣿⣿⣿⣿⣿⣿⣿
'''