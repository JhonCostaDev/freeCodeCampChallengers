def menu():
    initial_screen = """The Calculator
Type (1) to Sum
Type (2) to Subtract.
Type (3) to Multiply
type (4) to Divide by
Type (0) to exit.
"""
    print(initial_screen)

def get_user_option() -> int:
    while(True):

        try:
            user_option = int(input("Type your choise:\n"))
            if not 0 <= user_option <= 4:
                raise ValueError("The option must be between 0 and 4")
        except ValueError:
            print("The option must be a integer number between 0 and 4")
        else:
           return user_option

def sumTwo(a, b):
    return a + b

def subTwo(a, b):
    return a - b

def multTwo(a, b):
    return a * b

def dividByTwo(a, b):
    return a / b

def calculator():
    option = get_user_option()
    match option:
        case 1:
            subTwo()



if __name__ == '__main__':
    menu()
    get_user_option() 