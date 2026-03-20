#  find hw 1
string = "python is a proggraming language"

find = string.find("python")

print(find)

# find hw 2

string1 = input("Enter the string: ")
substring = input("Enter the substring to search for: ")

index = string1.find(substring)

if index != -1:
    print(f"The substring '{substring}' starts at index {index}.")
else:
    print(f"The substring '{substring}' was not found.")

# find hw 3
def find_character(string, char):
    index = string.find(char)
    if index != -1:
        print(f"The character '{char}' is found at index {index}.")
    else:
        print(f"The character '{char}' is not found in the string.")
