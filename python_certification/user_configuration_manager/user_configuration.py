test_setting = {
    'theme': 'dark',
    'notifications': 'enable',
    'volume': 'high'
}

def add_setting(dict_setting, key_value):
    #key, value = key_value

    if key_value[0].lower() in dict_setting:
        return f'Setting \'{key_value[0].lower()}\' already exists! Cannot add a new setting with this name.'
    
    dict_setting.update({key_value[0].lower(): key_value[1].lower()})

    return f"Setting '{key_value[0].lower()}' added with value '{key_value[1].lower()}' successfully!"

def update_setting(dict_setting, key_value):
    if key_value[0].lower() in dict_setting:
        dict_setting[key_value[0].lower()] = key_value[1].lower()
        return f"Setting '{key_value[0].lower()}' updated to '{key_value[1].lower()}' successfully!"
    return f"Setting '{key_value[1].lower()}' does not exist! Cannot update a non-existing setting."

def delete_setting(dict_setting, key):
    if key.lower() in dict_setting:
        del dict_setting[key.lower()]
        return f"Setting '{key.lower()}' deleted successfully!"
    return f"Setting not found!"

def view_settings(dict_setting):
    if len(dict_setting) == 0:
        return 'No settings available'
    
    user_setting = ''
    for idx, (key, value) in enumerate(dict_setting.items()):
        if idx == len(dict_setting) - 1:
            user_setting += f'{key.capitalize()}: {value}'
        else:
            user_setting += f'{key.capitalize()}: {value}\n'
    return f"""Current User Settings:
{user_setting}
"""

# print(add_setting(test_setting, ('Pin', 'light')))
# print(update_setting(test_setting, ('cam', 'lower')))
# print(delete_setting(test_setting, 'notification'))
print(view_settings(test_setting))
#print(add_setting({'theme': 'light'}, ('THEME', 'dark')))