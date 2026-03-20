number = int(input("Enter a number: "))

if number <= 1:
    print(f"{number} is not a prime number.")
else:
    if number == 2 or number % 2 != 0:
        print(f"{number} is a prime number.")
    else:
        print(f"{number} is not a prime number.")