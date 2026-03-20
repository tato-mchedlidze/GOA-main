# hw1 Simple Fun #176: Reverse Letter
def reverse_letter(st):
    return ''.join([i for i in st if i.isalpha()])[::-1]


# hw2 Find the middle element
def gimme(arr):
    sorted_arr = sorted(arr)
    middle_value = sorted_arr[1]
    return arr.index(middle_value)


# hw3 Sum of angles
def angle(n):
     return (n - 2) * 180


# hw4 Round up to the next multiple of 5
def round_to_next5(n):
    return n if n % 5 == 0 else n + (5 - n % 5)


# hw5 Two Oldest Ages
def two_oldest_ages(ages):
    sorted_ages = sorted(ages)
    return sorted_ages[-2:]