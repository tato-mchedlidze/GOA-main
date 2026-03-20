num1 = int(input("first number: "))
num2 = int(input("second number: "))

sum = 0

for i in range(num1, num2 + 1):
    sum += i

print("sum of numbers between", num1, "and", num2, "is:", sum)
