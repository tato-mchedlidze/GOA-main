# hw 1 Find the first non-consecutive number
def first_non_consecutive(arr):
    for i in range(1, len(arr)):
        if arr[i] != arr[i - 1] + 1:
            return arr[i]
    return None

# hw 2 altERnaTIng cAsE <=> ALTerNAtiNG CaSe
def to_alternating_case(string):
    return string.swapcase()

# hw 3 Correct the mistakes of the character recognition software
def correct(text):
    return text.replace('5', 'S').replace('0', 'O').replace('1', 'I')

# hw 4 Is it a palindrome?
def is_palindrome(s):
    if s.upper() == s[::-1].upper():
        return True
    return False

# hw 5 Do I get a bonus?\
def bonus_time(salary, bonus):
    return f"${salary * 10}" if bonus else f"${salary}"

# hw 6 Student's Final Grade
def final_grade(exam, projects):
    if exam > 90 or projects > 10:
        return 100
    elif exam > 75 and projects >= 5:
        return 90
    elif exam > 50 and projects >= 2:
        return 75
    else:
        return 0

# hw 7 Sum The Strings
def sum_str(a, b):
    return str(int(a or 0) + int(b or 0))