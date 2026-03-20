# hw 2
one_ten = [x for x in range (1, 11)]

# hw 3
one_five_two = [x**2 for x in range (1, 6)]

# hw 4
even = [x for x in range (1, 21, 2)]

# hw 5 
word = [input("input words between "" plsss")]
first_letters = [word[0] for word in word]

# hw 6
upper = [input("input words between "" plsss")]
uppercase_words = [upper.upper() for upper in upper]

# hw 7
div_by_3 = [x // 3 for x in range (1, 51)]

# hw 8 
four_letter=[input("input words between "" plsss")]
long_words = [four_letter for four_letter in four_letter if len(four_letter) > 4]

# hw 9
celsius_temps = [0, 20, 37, 100]
fahrenheit_temps = [(temp * 9/5) + 32 for temp in celsius_temps]

# hw 10
primes = [num for num in range(2, 101) if not any(num % i == 0 for i in range(2, num))]

# cw 11
sentence = "This is a simple example sentence for testing words with vowels"
words = [word for word in sentence.split() if len(word) > 5 and any(vowel in word for vowel in 'aeiouAEIOU')]
print(words)

# cw 12

fibonacci = [0, 1] 
fibonacci2 = fibonacci + [sum(fibonacci[-2:]) for _ in range(18)]
print(fibonacci2)