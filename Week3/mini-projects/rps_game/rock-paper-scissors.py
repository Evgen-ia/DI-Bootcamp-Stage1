from game import Game

def get_user_menu_choice():
    print("1. Play a new game")
    print("2. Show scores")
    print("3. Quit")

    while True:
        choice = input("Enter your choice (1/2/3): ")
        if choice in ['1', '2', '3']:
            return choice
        else:
            print("Invalid choice. Please enter 1, 2, or 3.")

def print_results(results):
    print("\nGame Results:")
    print("Wins: {}, Losses: {}, Draws: {}".format(results['win'], results['loss'], results['draw']))
    print("Thanks for playing!")

def main():
    results = {'win': 0, 'loss': 0, 'draw': 0}
    game = Game()

    while True:
        choice = get_user_menu_choice()

        if choice == '1':
            result = game.play()
            results[result] += 1
        elif choice == '2':
            print_results(results)
        elif choice == '3':
            print_results(results)
            break

if __name__ == "__main__":
    main()
