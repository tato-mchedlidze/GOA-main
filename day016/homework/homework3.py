correct_password = "1234"
correct_username = "tato"

user_guess1 = input("Enter password: ")
user_guess2 = input("Enter username: ")

counter = 0

while (user_guess1 != correct_password) or (user_guess2 != correct_username):
    user_guess1 = input("Enter password: ")
    user_guess2 = input("Enter username: ")
    counter += 1 
print("Access granted")
print("Your guess count:", str(counter))