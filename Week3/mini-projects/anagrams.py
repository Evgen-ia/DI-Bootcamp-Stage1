class AnagramChecker:
    def __init__(self, word_list_file):
        with open(word_list_file, 'r') as file:
            self.word_list = set(word.strip().lower() for word in file.readlines())

    def is_valid_word(self, word):
        return word.lower() in self.word_list

    def is_anagram(self, word1, word2):
        return sorted(word1.lower()) == sorted(word2.lower())

    def get_anagrams(self, word):
        word = word.lower()
        return [w for w in self.word_list if self.is_anagram(word, w) and word != w]



def get_user_input():
    word = input("Enter a word (or 'exit' to quit): ").strip()
    return word

def validate_input(word):
    if ' ' in word:
        print("Error: Only a single word is allowed.")
        return False
    elif not word.isalpha():
        print("Error: Only alphabetic characters are allowed.")
        return False
    return True

def display_anagrams(anagrams):
    if not anagrams:
        print("No anagrams found.")
    else:
        print("Anagrams found:")
        for anagram in anagrams:
            print("  - {}".format(anagram))

def main():
    word_list_file = "/usr/share/dict/words" 
    anagram_checker = AnagramChecker(word_list_file)

    while True:
        word = get_user_input()

        if word.lower() == 'exit':
            print("Goodbye!")
            break

        word = word.strip()

        if validate_input(word):
            if anagram_checker.is_valid_word(word):
                anagrams = anagram_checker.get_anagrams(word)
                print("Word: {}".format(word))
                display_anagrams(anagrams)
            else:
                print("Error: Not a valid English word.")

if __name__ == "__main__":
    main()
