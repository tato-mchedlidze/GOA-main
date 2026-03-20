correct_password = "mylife"
password = input("password: ")
counter= 0

while password != correct_password:
    password = input("password: ")
counter += 1

print("corecctpassword")
print("your guess counter", str(counter))