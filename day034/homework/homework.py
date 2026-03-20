# hw 1
def hallo_world ():
    print("hallo world")

# hw 2
def add_numbers(a, b):
    sum_result = a + b
    print(sum_result)

# hw 3
def multiplitaion(i):
    print(i * 10)

# hw 4
def greeting(name = "guest"):
    print("hallo", name)

# hw 5
def even_odd(numbers):
    for i in numbers:
        print("Even" if i % 2 == 0 else "Odd")

# hw 6
def max(numbers):
    max_num = numbers[0]
    for i in numbers:
        if i > max_num:
            max_num = i
    print(max_num)

# hw 7
def get_positive(numbers):
    positive = [i for i in numbers if i > 0]
    print(positive)

# he 8
def divisible_by_3():
    total = 0
    for num in range(1, 101):
        if num % 3 == 0:
            total += num
    print(total)


