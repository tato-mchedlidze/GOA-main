import tkinter as tk
from tkinter import messagebox

# quiz-ის კითხვები, ვარიანტები და სწორი პასუხები
quiz_main = [
    {
        "question": "What is the largest planet in our solar system?",
        "choices": ["Earth", "Mars", "Jupiter",],
        "answer": "Jupiter"
    },
    {
        "question": "which programming school is the best",
        "choices": ["Step academy", "Goa","Novatori"],
        "answer": "Goa"
    },
    {
        "question": "when does WW2 Started",
        "choices": ["It didn't happen at all", "1939", "1938",],
        "answer": "1939"
    },
    {
        "question": "what is the largest animal on earth",
        "choices": ["elephant", "blue whale", "hippo",],
        "answer": "blue whale"
    },
    {
        "question": "in which centrury America was discoverd?",
        "choices": ["14th", "16th", "15th",],
        "answer": "15th"
    },
    {
        "question": "what is the largest country in the world",
        "choices": ["Russia", "Canada", "USA",],
        "answer": "Russia"
    },
    {       
        "question": "what is the smallest country in the world",
        "choices": ["Monaco", "Vatican city", "Luxemburg",],
        "answer": "Vatican city"
    },
    {
        "question": "Which animal is known for its black and white stripes?",
        "choices": ["Tiger", "Zebra", "panda"],
        "answer": "Zebra"
    },
    {
        "question": "Which element has the chemical symbol 'O'?",
        "choices": ["Oxygen", "Gold", "Osmium"],
        "answer": "Oxygen"
    },
    {
        "question": "What is the main ingrediant in traditonal guacamole?",
        "choices": ["Tomato", "Avocado", "Cucumbre"],
        "answer": "Avocado"
    },
    {
        "question": "What is the smallest prime number?",
        "choices": ["1", "2", "3"],
        "answer": "2"
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "choices": ["Earth", "Venus", "Mars"],
        "answer": "Mars"
    },
    {
        "question": "What is the currency of Japan?",
        "choices": ["Yen", "Won", "Dollar"],
        "answer": "Yen"
    },
    {
        "question": "How many continents are there on Earth?",
        "choices": ["5", "6", "7"],
        "answer": "7"
    },
    {
        "question": "How many legs does a spider have",
        "choices": ["6", "7", "8"],
        "answer": "8"
    },
    {
        "question": "What is the capital of France?",
        "choices": ["Berlin" , "Paris" , "Madrid"],
        "answer" : "Paris"
    },
    {
        "question": "Who wrote ""Romeo and Juliet""?",
        "choices": ["William Shakespeare" , "Charles Dickens" , "Jane Austen"],
        "answer": "William Shakespeare"
    },
    {
        "question": "What is the chemichal symbol for gold?",
        "choices": ["Ag" , "Pb" , "Au"],
        "answer": "Au" 
    },
    {
        "question": "Who painted Mona Lisa?",
        "choices": ["Leonardo da Vinci" , "Vincent van Gogh" , "Pablo Piccaso"],
        "answer": "Leonardo da Vinci"
    },
    {
        "question": "Which country is known as the Land of the Rising Sun?",
        "choices": ["India" , "Japan" , "China"],
        "answer": "Japan"
    },
    {
        "question": "Who invented the light bulb?",
        "choices": ["Nikola Tesla" , "Albert Einstein" , "Thomas Edison"],
        "answer": "Thomas Edison"
    },
    {
        "question": "What is the largest ocean on Earth?",
        "choices": ["Atlantic Ocean" , "Indian Ocean" , "Pacific Ocean"],
        "answer": "Pacific Ocean"
    },
]

#  ფუნქცია რომ ვნახოთ პასუხი სწორია თუ არა
def check_answer(guest_answer):
    global current_question,score
    if guest_answer ==quiz_main[current_question]["answer"]:
        score += 1

    current_question +=1
    if current_question < len(quiz_main):
        update_question()
    else:
        total_IQ = IQ_calculator(score)
        final_score(total_IQ)

# ფუნქცია კითხვების გასანახლად
def update_question():
    # გამოაქვს შეიკთხვა
    question_label.config(text=quiz_main[current_question]["question"])
    # გამოაქვს რიგის ნომერი
    question_number_label.config(text=f"Question {current_question + 1} of {len(quiz_main)}")  
    # გამოაქვს ღილაკები
    for i, choice in enumerate(quiz_main[current_question]["choices"]):
        buttons[i].config(text = choice, command =lambda c=choice: check_answer(c))

# IQ-ს კალკილატორი
def IQ_calculator(score):
    if score <= 5:
        total_IQ = "65-75"
    elif 6 <= score <= 10:
        total_IQ = "75-85"
    elif 11 <= score <= 15:
        total_IQ = "85-95"
    elif 16 <= score <= 20:
        total_IQ = "95-105"
    else:
        total_IQ = "105+"
    return total_IQ

# საბოლოო ქულის გამომყვანი ქულა
def final_score(total_IQ):
    messagebox.showinfo("You finished the Quiz",f"your score is {score} out of {len(quiz_main)} and your total IQ is{total_IQ}")
    show_restart_button()

# რესტარტ ღილაკის განლაგება
def show_restart_button():
    restart_button.pack(pady=20)

# რესატარტ ღილაგის მონაცემები/setting-ები
def restart_game():
    global current_question, score
    current_question = 0
    score = 0
    update_question()
    restart_button.pack_forget()

# GUI-ის შექმნა
home = tk.Tk()
home.title("Quiz game")
home.geometry("550x550")
home.resizable(width=False,height=False)

current_question = 0
score = 0

#კითხვების რიგის მთვლელი 
question_number_label = tk.Label(home, text=f"Question {current_question + 1} of {len(quiz_main)}", font=("Arial", 14))
question_number_label.pack(pady=5)

# ლეიბელების დამატება
question_label=tk.Label(home,text=quiz_main[current_question]["question"], font=("Arial",16))
question_label.pack(pady=20)


# ღილაკების დამატება 
buttons = []
for i in range(3):
    button= tk.Button(home, text = "",font=("Arial",15))
    button.pack(pady=5, fill=tk.X)
    buttons.append(button)

# რესტარტ ღილაკის დამატება
restart_button = tk.Button(home, text="Restart", font=("Arial", 16), command=restart_game)

update_question()

# გამოძახება რის გარეშედაც კოდი არ გაიშვება
home.mainloop()