# cw 1 Sum of odd numbers
def row_sum_odd_numbers(n):
    return n ** 3


# cw 2 Printer Errors
def printer_error(s):
    errors = sum(1 for char in s if char > 'm')  # Count letters from 'n' to 'z'
    return f"{errors}/{len(s)}"


# cw 3 Reverse words
def reverse_words(text):
    return ' '.join(word[::-1] for word in text.split(' '))


# cw 4 Ones and Zeros
def binary_array_to_number(arr):
    return int(''.join(str(bit) for bit in arr), 2)


# cw 5 Number of People in the Bus
def number(bus_stops):
    people_on_bus = 0
    for on, off in bus_stops:
        people_on_bus += on   
        people_on_bus -= off
    return people_on_bus


# cw 6 Odd or Even?
def odd_or_even(arr):
    total = sum(arr)
    return "even" if total % 2 == 0 else "odd"


# cw 7 The highest profit wins!
def min_max(lst):
    return [min(lst), max(lst)]