def display_board(board):
    for row in board:
        print(" | ".join(row))
        print("-" * 9)

def player_input(player):
    while True:
        row = int(input("Player {}, enter row (0, 1, or 2): ".format(player)))
        col = int(input("Player {}, enter column (0, 1, or 2): ".format(player)))
        return row, col
        
def check_win(board, row, col):
    # Check row
    if board[row][0] == board[row][1] == board[row][2] != ' ':
        return True
    # Check column
    if board[0][col] == board[1][col] == board[2][col] != ' ':
        return True
    # Check diagonals
    if (row == col and board[0][0] == board[1][1] == board[2][2] != ' ') or \
       (row + col == 2 and board[0][2] == board[1][1] == board[2][0] != ' '):
        return True
    return False

def check_full(board):
    for row in board:
        if ' ' in row:
            return False
    return True

def reset_board():
    return [[' '] * 3 for _ in range(3)]

def play():
    current_player = 'X'
    board = reset_board()

    while True:
        display_board(board)
        row, col = player_input(current_player)

        if board[row][col] == ' ':
            board[row][col] = current_player
            if check_win(board, row, col):
                display_board(board)
                print("Player {} wins!".format(current_player))
                break
            elif check_full(board):
                display_board(board)
                print("It's a draw!")
                break
            else:
                current_player = 'O' if current_player == 'X' else 'X'
        else:
            print("This cell is already taken. Choose another.")

if __name__ == "__main__":
    play()
