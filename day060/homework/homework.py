# hw 1 The Wide-Mouthed frog!
def mouth_size(animal):
    if animal.lower() == "alligator":
        return "small"
    else:
        return "wide"


# hw 2 Get Nth Even Number
def nth_even(n):
    return (n - 1) * 2


# hw 3 Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
def replace_exclamation(st):
    return ''.join('!' if st in 'aeiouAEIOU' else st for st in st)


# hw 4 5 without numbers !!
def unusual_five():
    return len("apple")


# hw 5 Add Length
def add_length(str_):
    return [f"{word} {len(word)}" for word in str_.split()]