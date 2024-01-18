import random


def choose_word():
    words = ["hangman", "python", "programming", "developer", "challenge", "openai"]
    return random.choice(words)


def display_word(word, guessed_letters):
    display = ""
    for letter in word:
        if letter in guessed_letters:
            display += letter
        else:
            display += "*"
    return display


def hangman():
    word_to_guess = choose_word()
    guessed_letters = []
    incorrect_attempts = 0
    max_attempts = 6

    print("Welcome to Hangman!")
    print(display_word(word_to_guess, guessed_letters))

    while incorrect_attempts < max_attempts:
        guess = input("Guess a letter: ").lower()

        if guess.isalpha() and len(guess) == 1:
            if guess in guessed_letters:
                print("You already guessed that letter. Try again.")
                continue

            guessed_letters.append(guess)

            if guess in word_to_guess:
                print("Correct!")
            else:
                incorrect_attempts += 1
                print(f"Incorrect! {max_attempts - incorrect_attempts} attempts remaining.")

            current_display = display_word(word_to_guess, guessed_letters)
            print(current_display)

            if "*" not in current_display:
                print("Congratulations! You guessed the word!")
                break
        else:
            print("Invalid input. Please enter a single letter.")

    if "*" in display_word(word_to_guess, guessed_letters):
        print(f"Sorry, you ran out of attempts. The word was '{word_to_guess}'.")


if __name__ == "__main__":
    hangman()
