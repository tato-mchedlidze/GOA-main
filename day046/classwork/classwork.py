# cw 1
def manual_list(start, end, step, user_num):
    return [num for num in range(start, end, step) if num > user_num]

print(manual_list(1, 20, 2, 10))
print(manual_list(5, 50, 5, 25))
print(manual_list(-10, 10, 3, -2))

# cw 2
filtered_numbers = [num for num in range(1, 101) if num % 3 == 0 or num % 5 == 0]  

print(filtered_numbers)

# cw 3
palindromic_numbers = [num for num in range(10, 201) if str(num) == str(num)[::-1]]

print(palindromic_numbers)