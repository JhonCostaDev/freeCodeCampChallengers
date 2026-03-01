def func_fora():
    word = 'escada'
    
    def func_dentro():
        nonlocal word
        word += ' subindo'
        print(word)

    func_dentro()

def check_number(num):
    
    print(isinstance(num, str))
check_number('5')

