# hw1 The Coupon Code
from datetime import datetime

def check_coupon(entered_code, correct_code, current_date, expiration_date):
    
    current_date = datetime.strptime(current_date,"%B %d, %Y")
    expiration_date = datetime.strptime(expiration_date, "%B %d, %Y")
    
    return current_date <= expiration_date and entered_code == str(correct_code)

# hw2 Are the numbers in order?
def in_asc_order(arr):
    return arr == sorted(arr)


# hw3 Flatten and sort an array
def flatten_and_sort(array):
    return sorted([num for sublist in array for num in sublist])


# hw4 Factorial
def factorial(n):
    result = 1
    for i in range(2, n+1):
        result *= i
    return result


# hw5 Maximum Length Difference
def mxdiflg(a1, a2):
    if not a1 or not a2:
        return -1
    return max(len(max(a1, key=len)) - len(min(a2, key=len)), len(max(a2, key=len)) - len(min(a1, key=len)))