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