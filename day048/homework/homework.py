# cw 1 grasshopper - personalized message
def greet(name, owner):
    if name == owner:
        return "Hello boss"
    return "Hello guest"

# cw 2 Transportation on vacation
def rental_car_cost(d):
    # your code
    cost = d * 40
    if d >= 7:
        cost  -= 50
    elif d >= 3 and d < 7:
        cost -=20
    return cost

# cw 3 Quarter of the year
def quarter_of(month):
    if month < 4: return 1
    elif month < 7: return 2
    elif month < 10: return 3
    return 4

# cw 4 Remove exclamation marks
def remove_exclamation_marks(s):
    return s.replace("!","")


# cw 5 Total amount of points
def points(games):
    total_points = 0
    
    for game in games:
        x = game[0]
        y = game[2]
        
        if x > y: total_points += 3
        elif x == y: total_points += 1
    
    return total_points

# cw 6 Volume of a Cuboid
def get_volume_of_cuboid(length, width, height):
    return length*width*height

# cw 7 Jenny's secret message
def greet(name):
    if name == "Johnny":
        return "Hello, my love!"
    return "Hello, {}!".format(name)

# cw 8 Area or Perimeter
def area_or_perimeter(l , w):
    if l == w:
        return l*w
    return 2 * (l + w)

# cw 9 Thinkful - Logic Drills: Traffic light
def update_light(current):
    if current == "green": return "yellow"
    elif current == "yellow":  return "red"
    return "green"

# cw 10 Third Angle of a Triangle
def other_angle(a, b):
    return 180 - (a + b)  

# cw 11 L1: Set Alarm
def set_alarm(employed, vacation):
    if employed == True and vacation == False:
        return True
    return False

# cw 12 Sum Mixed Array
# v1
def sum_mix(arr):
    res = 0
    
    for i in arr:
        res += int(i)
    
    return res
# v2
def sum_mix(arr):
    return sum([int(i) for i in arr])

# cw 13 Sum without highest and lowest number
def sum_array(arr):
    if arr is None or len(arr) == 1 or len(arr) == 0: return 0

    min_ind = arr.index(min(arr))
    arr.pop(min_ind)
    
    max_ind = arr.index(max(arr))
    arr.pop(max_ind)
    
    return sum(arr)

# cw 14 Grasshopper - Messi goals function
def goals(laLiga, copaDelRey, championsLeague):
    return laLiga + copaDelRey + championsLeague