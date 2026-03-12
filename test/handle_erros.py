try:
    a = int(input('Type a number\n'))
    b = int(input('Type another one number\n'))
except ValueError:
    print("Please type a integer number")

else:
    result = a + b 
    print(f"The sum of {a} + {b} is equal to : {result}")

finally:
    print("End of the program...")
