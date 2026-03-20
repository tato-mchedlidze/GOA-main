def no_duplicates(user_list):
    # ვბრუნდებით სიას, სადაც მხოლოდ უნიკალური ელემენტებია
    return list(set(user_list))

# პირველ გამოიძახება
print(no_duplicates([1, 2, 3, 4, 5, 5, 6, 7, 7]))

# მეორე გამოიძახება
print(no_duplicates([10, 20, 30, 10, 40, 50, 50]))

# მესამე გამოიძახება
print(no_duplicates(['apple', 'banana', 'orange', 'apple', 'grape', 'banana']))