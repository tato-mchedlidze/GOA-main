# cw 1 Shortest Word
def find_short(s):
    s=s.split()
    lenghts=[]
    for i in s:
        lenghts.append(len(i))
    return min(lenghts)


# cw 2 String ends with?\
def solution(text, ending):
    return text.endswith(ending)


# cw 3 Mumbling
def accum(st):
    result = []
    for i in range(len(st)):
        part = st[i].upper() + st[i].lower() * i
        result.append(part)
    return "-".join(result)


# cw 4 Sum of two lowest positive integers
def sum_two_smallest_numbers(numbers):
    return sum(sorted(numbers, reverse=True)[-2:])


# cw 5 Complementary DNA
def DNA_strand(dna):
    res = ""
    
    for base in dna:
        if base == "A": res+="T"
        elif base == "T": res+="A"
        elif base == "C": res+="G"
        else: res+="C"
    
    return res


# cw 6 Beginner Series #3 Sum of Numbers
def get_sum(a,b):
    if a==b:
        return a
    
    if a>b:
        a,b=b,a
    res=0
    for i in range(a,b+1):
        res+=i
    return res


# cw 7 Friend or Foe?
def friend(x):
    return [i for i in x if len(i)==4]


# cw 8 Credit Card Mask
def maskify(cc):
    if len(cc) <= 4:
        return cc
    res = ""
    for i in range(len(cc)):
        if i < len(cc) - 4:
            res+="#"
        else: res+=cc[i]
    return res


# cw 9 Binary Addition
def add_binary(a,b):
    return bin(a + b)[2:]


# hw 10-15
# hw 10 Regex validate PIN code
def validate_pin(pin):
    if len(pin) == 4 or len(pin) == 6:
        return pin.isdigit()
    return False


# hw 11 Is this a triangle?
def is_triangle(a, b, c):
    if a + b > c and a + c > b and b + c > a:
        return True
    return False


# hw 12 Two to One
def longest(a1, a2):
    i = a1 + a2
    ul = set(i)
    sl = sorted(ul)
    return ''.join(sl)


# hw 13 Categorize New Member
def open_or_senior(data):
    i = []
    for age, handicap in data:
        if age >= 55 and handicap > 7:
            i.append("Senior")
        else:
            i.append("Open")
    return i


# hw 14 Find the next perfect square!
def find_next_square(sq):
    i = int(sq ** 0.5)
    
    if i * i == sq:
        next_i = i + 1
        return next_i * next_i
    else:
        return -1