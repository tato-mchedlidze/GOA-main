# cw 1
my_integer = 10

try:
    result = my_integer + "some_string"
except TypeError as e:
    print(f"TypeError: {e}")


# cw 2
user_input = input("შეიყვანეთ თქვენი სახელ ან გვარი: ")

try:
    if user_input == "":
        print("თქვენ უნდა შეიყვანოთ სახელი ან გვარი!")
    else:
        print(f"თქვენი სახელი არის: {user_input}")

except Exception as e:
    print(f"შეცდომა: {e}")