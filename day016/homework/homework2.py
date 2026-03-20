correct_password = "tatomchedlidze"
user_guess = input("Enter password: ")
counter = 0

while user_guess != correct_password:
    user_guess = input("Enter password: ")
    counter += 1

print("Access granted")
print("Your guess count:", str(counter))