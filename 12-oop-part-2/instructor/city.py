class Gallery:

  def __init__(self, name):
    self.name = name

class City:

  def __init__(self, name):
    self.name      = name
    self.galleries = []

  def __repr__(self):
    return self.name

  def __lt__(self, other):
    print()
    print(f"{self.name} > {other.name}")
    # print(f"{self.galleries}  > {other.galleries}")
    print(f"{len(self.galleries)} > {len(other.galleries)}")
    print()

    return len(self.galleries) < len(other.galleries)

class Gallery:

  def __init__(self, name):
    self.name = name

toronto  = City('Toronto')
paris    = City('Paris')
new_york = City('New York')

cities   = [toronto, paris, new_york]

toronto.galleries.append(Gallery('Art Gallery of Ontario'))
paris.galleries.append(Gallery('Louvre'))
paris.galleries.append(Gallery('Paris Museum of Modern Art'))
paris.galleries.append(Gallery('The Centre Pompidou'))
new_york.galleries.append(Gallery('The Metropolitan Museum of Art'))
new_york.galleries.append(Gallery('Guggenheim Museum'))

print(cities)         # [Toronto, Paris, New York]
print(sorted(cities)) # [Toronto, New York, Paris]
