# cw1 Expressions Matter
def expression_matter(a, b, c):
    combs = [
        a+b+c,
        a*b*c,
        (a+b)*c,
        a*(b+c),
        a+(b*c),
        (a*b)+c,
        a*b+c
    ]
    
    return max(combs)

# cw2 I love you, a little , a lot, passionately ... not at all
def how_much_i_love_you(nb_petals):
    num=nb_petals % 6
    if num == 0: return "not at all"
    elif num == 1: return "I love you"
    elif num == 2: return "a little"
    elif num == 3: return "a lot"
    elif num == 4: return "passionately"
    elif num == 5: return "madly"

# cw3 Reverse List Order
# v1
def reverse_list(l):
    return l[::-1]
# v2
def reverse_list(l):
    res = []
    for i in range(len(l)-1, -1, -1): res.append(l[i])
    return res
# v3
def reverse_list(l):
    l.reverse()
    return l

# cw4 Count Odd Numbers below n
def odd_count(n):
    return n//2

# cw5 Difference of Volumes of Cuboids
def find_difference(a, b):
    v_a = a[0] * a[1] * a[2]
    v_b = b[0] * b[1] * b[2]
    
    if v_a > v_b: return v_a - v_b
    return v_b - v_a

# cw6 Welcome!
def greet(language):
    all_lang = [ 
        ("english", "Welcome")
        , ("czech", "Vitejte")
        , ("danish", "Velkomst")
        , ("dutch", "Welkom")
        , ("estonian", "Tere tulemast")
        , ("finnish", "Tervetuloa")
        , ("flemish", "Welgekomen")
        , ("french", "Bienvenue")
        , ("german", "Willkommen")
        , ("irish", "Failte")
        , ("italian", "Benvenuto")
        , ("latvian", "Gaidits")
        , ("lithuanian", "Laukiamas")
        , ("polish", "Witamy")
        , ("spanish", "Bienvenido")
        , ("swedish", "Valkommen")
        , ("welsh", "Croeso")
    ]
    
    for key in all_lang:
        if key[0] == language: return key[1]
    
    return "Welcome"

# cw7 Drink about
def people_with_age_drink(age):
    if age < 14:
        return "drink toddy"
    elif age < 18:
        return "drink coke"
    elif age < 21:
        return "drink beer"
    else:
        return "drink whisky"

# cw8 Sort and Star
def two_sort(array):
    array.sort()
    
    res = ""
    for i in array[0]:
        res += i+"***"
    
    return res[:-3]

# cw9 Grasshopper - Messi Goals
la_liga_goals = 43
champions_league_goals = 10
copa_del_rey_goals = 5

total_goals = la_liga_goals + champions_league_goals + copa_del_rey_goals

# cw10 Short Long Short
def solution(a, b):
    if len(a) > len(b):
        return b+a+b
    else:
        return a+b+a

# cw11 My head is at the wrong end!
def fix_the_meerkat(arr):
    arr.reverse()
    return arr

# cw12 Find Multiples of a Number
def find_multiples(integer, limit):
    return [i for i in range(integer, limit + 1, integer)]

# cw13 Unfinished Loop - Bug Fixing #1
def create_array(n):
    res = []
    i = 1
    while i <= n:
        res += [i]
        i += 1
    return res