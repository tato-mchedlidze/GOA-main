# cw1 Form The Minimum
def min_value(digits):
    i = sorted(set(digits))
    return int("".join(str(a) for a in i))


# cw2 Triangular Treasure
def triangular(n):
    if n <= 0:
        return 0
    return n * (n + 1) // 2 


# cw3 Sum of Minimums!
def sum_of_minimums(matrix):
    total = 0
    for row in matrix:
        total += min(row)
    return total


# cw4 Fizz Buzz
def fizzbuzz(n):
    result = []
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(i)
    return result
