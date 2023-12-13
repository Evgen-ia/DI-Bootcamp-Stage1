#!/usr/bin/env python3

import random
import os


def get_words_from_file(file_path):
    with open(file_path, 'r') as file:
        words = file.read().split()
    return words


def get_random_sentence(length, words):
    sentence = ' '.join(random.sample(words, length)).lower() + '.'
    return sentence


def main():
    file_path = 'ex1.txt'

    current_directory = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(current_directory, file_path)
    words = get_words_from_file(file_path)

    length = input("How long do you want the sentence to be ? ")

    if isinstance(length, int):
        random_sentence = get_random_sentence(length, words)
        print("Random Sentence: {}".format(random_sentence))
    else:
        raise TypeError("not a number")


if __name__ == "__main__":
    main()
