# hw 1 Double Char
def double_char(s):
    return ''.join([char * 2 for char in s])

# hw 2 Parse nice int from char problem
def get_age(age):
    return int(age[0])

#  hw 3 The Feast of Many Beasts
def feast(beast, dish):
    if str(beast[0]) == str(dish[0]) and beast[-1] == dish[-1]:
        return True
    return False

#  hw 4 Array plus array
def array_plus_array(arr1,arr2):
    return sum(arr1) + sum(arr2)

# hw 5 Grasshopper - Check for factor
def check_for_factor(base, factor):
    if base % factor == 0:
        return True
    return False