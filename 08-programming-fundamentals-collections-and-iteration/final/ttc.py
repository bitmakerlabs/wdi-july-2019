from data import stations_with_line_numbers
from pprint import pprint

stations = stations_with_line_numbers

for k,v in stations.items():
  print(k, v)
# print(stations.keys())
pprint(stations.values(), indent=4, width=4)


# for station, line_number in stations.items():
#   if line_number == 'Line 3':
#     print(station)


# print(stations_with_line_numbers)

# for station, line_number in stations_with_line_numbers.items():
#   print(line_number + ': ' + station)


# stations = {}
# stations['finch'] = 'line 1'
# stations['main street'] = 'line 2'
# stations['midland'] = 'line 3'
# stations['leslie'] = 'line 4'

# print(stations)

# from data import stations

# passengers = []

# passengers.append('adult')
# passengers.append('student')
# passengers.append('senior')
# passengers.append('child')

# passengers.pop(2)

# passengers.append('adult')
# passengers.append('adult')

# passengers.insert(2, 'child')

# print(passengers)

# total = 0.0

# for passenger in passengers:
#   if passenger == 'adult':
#     total += 3.25
#   elif passenger == 'student':
#     total += 2.10
#   elif passenger == 'senior':
#     total += 2.10
#   elif passenger == 'child':
#     total += 0.0

# formatted_total = '{:.2f}'.format(total)

# print(formatted_total)

# passengers.sort()
# passengers.reverse()
# print(passengers)

# print(passengers[1:2])


# print(sorted(passengers))

# print(list(reversed(sorted(passengers))))

# print(reversed(passengers))

