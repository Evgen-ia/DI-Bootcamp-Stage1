import math


# ex1
def insert_at_index(my_list, index, item):
    my_list.insert(index, item)
    return my_list


original_list = [1, 2, 3, 4, 5]
result_list = insert_at_index(original_list, 2, 10)
# print(result_list)


# ex2
def count_spaces(my_string):
    return my_string.count(' ')


sentence = "This is a sample sentence."
spaces_count = count_spaces(sentence)
# print(spaces_count)


# ex3
def count_upper_lower(my_string):
    upper_count = sum(1 for char in my_string if char.isupper())
    lower_count = sum(1 for char in my_string if char.islower())
    return upper_count, lower_count


text = "Hello World"
upper, lower = count_upper_lower(text)
# print(f"Uppercase count: {upper}, Lowercase count: {lower}")


# ex4
def my_sum(my_array):
    return sum(my_array)


array = [1, 5, 4, 2]
result_sum = my_sum(array)
# print(result_sum)


# ex5
def find_max(my_list):
    return max(my_list)


numbers = [0, 1, 3, 50]
max_number = find_max(numbers)
# print(max_number)


# ex6
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)


result_factorial = factorial(4)
# print(result_factorial)


# ex7
def list_count(my_list, element):
    return sum(1 for item in my_list if item == element)


example_list = ['a', 'a', 't', 'o']
count_a = list_count(example_list, 'a')
# print(count_a)


# ex8
def norm(my_list):
    return math.sqrt(sum(x**2 for x in my_list))


values = [1, 2, 2]
result_norm = norm(values)
# print(result_norm)


# ex9
def is_mono(my_list):
    return all(my_list[i] <= my_list[i + 1] for i in range(len(my_list) - 1)) or \
           all(my_list[i] >= my_list[i + 1] for i in range(len(my_list) - 1))


mono_list = [7, 6, 5, 5, 2, 0]
result_mono = is_mono(mono_list)
# print(result_mono)


# ex10
def longest_word(word_list):
    return max(word_list, key=len)


word_list = ['apple', 'banana', 'grapefruit', 'kiwi']
result_longest = longest_word(word_list)
# print(result_longest)


# ex11
def separate_int_str(my_list):
    integers = [x for x in my_list if isinstance(x, int)]
    strings = [x for x in my_list if isinstance(x, str)]
    return integers, strings


mixed_list = [1, 'apple', 3, 'banana', 5, 'cherry']
integers, strings = separate_int_str(mixed_list)
print("Integers:", integers)
# print("Strings:", strings)


# ex12
def is_palindrome(my_string):
    return my_string == my_string[::-1]


result_palindrome = is_palindrome('radar')
# print(result_palindrome)


# ex13
def sum_over_k(sentence, k):
    words = sentence.split()
    return sum(1 for word in words if len(word) > k)


sentence = 'Do or do not there is no try'
k_value = 2
result_count = sum_over_k(sentence, k_value)
# print(result_count)


# ex14
def dict_avg(my_dict):
    values = my_dict.values()
    return sum(values) / len(values)


my_dictionary = {'a': 1, 'b': 2, 'c': 8, 'd': 1}
result_avg = dict_avg(my_dictionary)
# print(result_avg)


# ex15
def common_div(num1, num2):
    common_divisors = [i for i in range(1, min(num1, num2) + 1) if num1 % i == 0 and num2 % i == 0]
    return common_divisors


result_common_div = common_div(10, 20)
# print(result_common_div)


# ex16
def is_prime(number):
    if number < 2:
        return False
    for i in range(2, int(number ** 0.5) + 1):
        if number % i == 0:
            return False
    return True


result_prime = is_prime(11)
# print(result_prime)


# ex17
def weird_print(my_list):
    return [value for index, value in enumerate(my_list) if index % 2 == 0 and value % 2 == 0]


my_numbers = [1, 2, 2, 3, 4, 5]
result_weird_print = weird_print(my_numbers)
print(result_weird_print)
