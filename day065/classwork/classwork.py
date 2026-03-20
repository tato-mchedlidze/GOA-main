# cw 1 Vowel Count
def get_count(sentence):
    return sum(1 for char in sentence if char in "aeiou")