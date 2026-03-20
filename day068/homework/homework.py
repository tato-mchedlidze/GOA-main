# hw1 Disemvowel Trolls
def disemvowel(string_):
    vowels = "aeiouAEIOU"
    res = ""
    
    for i in string_:
        if i not in vowels:
            res += i
    
    return res


# hw2 Square Every Digit
def square_digits(num):
    return int("".join([str(int(d)**2) for d in str(num)]))


# hw3 Highest and Lowest
def high_and_low(numbers):
    nums = list(map(int, numbers.split()))
    return f"{max(nums)} {min(nums)}"


# hw4 List Filtering
def filter_list(l):
    return [i for i in l if isinstance(i, int)]


# hw5 Descending Order
def descending_order(num):
    num_str = str(num)
    sorted_digits = sorted(num_str)[::-1]
    sorted_str = ''.join(sorted_digits)
    return int(sorted_str)


# hw6 You're a square!
def is_square(n):
    if n < 0:
        return False
    return int(n ** 0.5) ** 2 == n


# hw7 Get the Middle Character
def get_middle(s):
    if len(s) % 2 == 0:
        return s[len(s)//2 - 1 : len(s)//2 + 1]
    else:
        return s[len(s)//2]


# hw8 Isograms
def is_isogram(s):
    s = s.lower()
    return len(set(s)) == len(s)


# hw9 Exes and Ohs
def xo(s):
    s = s.lower()
    return s.count('x') == s.count('o')


# hw10 Jaden Casing Strings
def to_jaden_case(string):
    return ' '.join(word.capitalize() for word in string.split())