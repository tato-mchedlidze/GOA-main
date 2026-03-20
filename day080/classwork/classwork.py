# cw1 Sum of the first nth term of Series
def series_sum(n):
    if n == 0:
        return "0.00"

    total = 0
    denominator = 1

    for _ in range(n):
        total += 1 / denominator
        denominator += 3

    return "{:.2f}".format(total)


# cw2 Find the divisors!
def divisors(integer):
    result = [i for i in range(2, integer) if integer % i == 0]
    
    if result:
        return result
    else:
        return f"{integer} is prime"


# cw3 Remove the minimum
def remove_smallest(numbers):
    if numbers == []:
        return []

    smallest = min(numbers)
    index = numbers.index(smallest)

    result = []

    for i in range(len(numbers)):
        if i != index:
            result.append(numbers[i])

    return result


# cw4 Testing 1-2-3
def number(lines):
    result = []

    for i in range(len(lines)):
        line_number = i + 1
        result.append(f"{line_number}: {lines[i]}")

    return result


# cw5 Count the divisors of a number
def divisors(n):
    count = 0

    for i in range(1, int(n**0.5) + 1):
        if n % i == 0:
            if i * i == n:
                count += 1  # Perfect square (count only once)
            else:
                count += 2  # i and n // i are both divisors

    return count