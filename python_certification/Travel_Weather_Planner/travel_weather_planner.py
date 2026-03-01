distance_mi = 0
is_raining = False
has_bike = False
has_car = False
has_ride_share_app = False

if not distance_mi:
    print(bool(distance_mi))
elif distance_mi <= 1 and not is_raining:
    print(True)
elif distance_mi <= 6 and (has_bike and not is_raining):
    print(True)
elif distance_mi > 6 and (has_car or has_ride_share_app):
    print(True)
else:
    print(False)