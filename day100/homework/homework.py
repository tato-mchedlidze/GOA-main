
# https://www.codewars.com/kata/5b16490986b6d336c900007d

# hw1 Alphabet war
def alphabet_war(fight):
    left = {'w': 4, 'p': 3, 'b': 2, 's': 1}
    right = {'m': 4, 'q': 3, 'd': 2, 'z': 1}

    left_score = sum(left.get(c, 0) for c in fight)
    right_score = sum(right.get(c, 0) for c in fight)

    if left_score > right_score:
        return "Left side wins!"
    elif right_score > left_score:
        return "Right side wins!"
    else:
        return "Let's fight again!"


# hw2 Maximum Product
def adjacent_element_product(arr):
    return max(arr[i] * arr[i+1] for i in range(len(arr)-1))


# hw3 Filter the number
def filter_string(st):
    return int("".join(ch for ch in st if ch.isdigit()))


# hw4 Odd-Even String Sort
def sort_my_string(s):
    even = s[::2]
    odd = s[1::2]
    return even + " " + odd


# hw5 My Language Skills
def my_languages(results):
    return [lang for lang, score in sorted(results.items(), key=lambda x: x[1], reverse=True) if score >= 60]