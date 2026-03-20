# cw1 Sum of a sequence
def sequence_sum(begin_number, end_number, step):
    return sum(range(begin_number,end_number + 1,step))


# cw2 Count the Digit
def nb_dig(n, d):
    return sum(str(i*i).count(str(d)) for i in range(n + 1))


# cw3 Remove anchor from URL
def remove_url_anchor(url):
    return url.split('#')[0]


# cw4 Find the capitals
def capitals(word):
    res = []
    for i in range(len(word)):
        if word[i].isupper():
            res.append(i)
    return res


# cw5 Small enough? - Beginner
def small_enough(array, limit):
    for i in array:
        if i > limit: return False
    return True


# cw6 Factorial
def factorial(n):
    if n < 0 or n > 12:
        raise ValueError
    
    result = 1
    for i in range(2, n+1):
        result *= i
    
    return result


# cw7 Don't give me five!
def dont_give_me_five(start,end):
    res = 0
    for i in range(start,end + 1):
        if "5" not in str(i):
            res+=1
    return res


# cw8 Leap Years
def is_leap_year(year):
    if year % 4 == 0:
        if year % 100 == 0:
            return year % 400 == 0
        return True
    return False