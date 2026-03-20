def validate_isbn(isbn, length):
    if len(isbn) != length:
        print(f'ISBN-{length} code should be {length} digits long.')
        return
    
    main_digits = isbn[0:length]
    given_check_digit = isbn[length - 1]
    main_digits_list = [int(digit) for digit in main_digits]
    print(main_digits, given_check_digit, main_digits_list, length)
    # Calculate the check digit from other digits
    
    if length == 10:
        expected_check_digit = calculate_check_digit_10(main_digits_list)
    
    #else:
        #expected_check_digit = calculate_check_digit_13(main_digits_list)
    # Check if the given check digit matches with the calculated check digit
    if given_check_digit == expected_check_digit:
        print('Valid ISBN Code.')
    else:
        print('Invalid ISBN Code.')


def calculate_check_digit_10(main_digits_list):
    # Note: You don't have to fully understand the logic in this function.
    digits_sum = 0
    # Multiply each of the first 9 digits by its corresponding weight (10 to 2) and sum up the results
    for index, digit in enumerate(main_digits_list):
        digits_sum += digit * (10 - index)
    # Find the remainder of dividing the sum by 11, then subtract it from 11
    result = 11 - digits_sum % 11
    # The calculation result can range from 1 to 11.
    # If the result is 11, use 0.
    # If the result is 10, use upper case X.
    # Use the value as it is for other numbers.
    if result == 11:
        expected_check_digit = '0'
    elif result == 10:
        expected_check_digit = 'X'
    else:
        expected_check_digit = str(result)
    return expected_check_digit

def main():
    #user_input = input('Enter ISBN and length: ')
    user_input10 = '1530051126,10'
    user_input13 = '9781530051120,13'
    
    values = user_input10.split(',')
    isbn = values[0]
    length = int(values[1])
    if length == 10 or length == 13:
        validate_isbn(isbn, length)
    else:
        print('Length should be 10 or 13.')

main()