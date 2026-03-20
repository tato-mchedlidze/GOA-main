# cw1 Alternate capitalization
def capitalize(s):
    even = [s[i].upper() if i % 2 == 0 else s[i] for i in range(len(s))  ]
    odd = [s[i].upper() if i % 2 != 0 else s[i] for i in range(len(s))  ]
    return ["".join(even),"".join(odd)]


# cw2 No oddities here
def no_odds(values):
    return [x for x in values if x%2 == 0]


# cw3 Check the exam
def check_exam(arr1,arr2):
    score = 0
    for i in range(len(arr1)):
        if arr2[i] == "":
            score += 0
        elif arr2[i] == arr1[i]:
            score += 4
        else: score-= 1
    if score < 0:
        return 0
    return score


# cw4 Fix string case
def solve(s):
    upper = 0
    lower = 0
    for c in s:
        if c.isupper():
            upper += 1
        else:
            lower += 1
    if lower >= upper:
        return s.lower()
    else:
        return s.upper()


# cw5 Number of Decimal Digits
def digits(n):
    return len(str(n))