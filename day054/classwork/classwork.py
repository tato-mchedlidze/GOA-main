try:
    num1 = float(input("number 1: "))
    num2 = float(input("number 2: "))

    if num2 == 0:
        raise ValueError("can't divide by zero! :C")

    result = num1 / num2
    print("Result:", result)

except ValueError as err:
    print("Error:", err)

except:
    print("enter valid numbers")

finally:
    print("complete")