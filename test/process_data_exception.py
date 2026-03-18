def pow_number(number):
    try:
        number = int(number)

        return number**2
    except ValueError:
        print('You must type a integer number!')
        raise


try:
    result = pow_number('2A')
except ValueError:
print(result)

