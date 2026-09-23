import re
patiente = {
        'patient_id': 1,
        'age': '34',
        'gender': 'Female',
        'diagnosis': 'Hypertension',
        'medications': ['Lisinopril'],
        'last_visit_id': 'V2301'
    }


def find_invalid_records(patient_id, age, gender, diagnosis, medications, last_visit_id):
    constraints = {
        'patient_id': isinstance(patient_id, str) and re.fullmatch('p\\d+', patient_id, re.IGNORECASE),
        'age': isinstance(age, int) and age >= 18,
        'gender': isinstance(gender, str) and gender.lower() in ('male', 'female'),
        'diagnosis': isinstance(diagnosis, str) or diagnosis is None,
        'medications': isinstance(medications, list) and all([isinstance(x, str) for x in medications]),
        'last_visit_id': isinstance(last_visit_id, str) and re.fullmatch('v\\d+', last_visit_id, re.IGNORECASE)
    }

    for key, value in constraints.items():
        if not value or value == None:
            print(value)
    return list(key for key, value in constraints.items() if  not value or value == None)#constraints 

print(find_invalid_records(**patiente))