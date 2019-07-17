class Gallery:

  galleries = []

  def __init__(self, name, city):
    self.name    = name
    self.city    = city
    self.artwork = []
    Gallery.galleries.append(self)

  def add(self, gallery):
    self.artwork.append(gallery)

  @classmethod
  def report(cls):
    for city, number in cls.sorted_cities():
      print(f'{city}: {number}')

  @classmethod
  def cities(cls):
    result = {}

    for gallery in cls.galleries:
      city = gallery.city
      if result.get(city):
        result[city] += 1
      else:
        result[city] = 1

    return result

  @classmethod
  def sorted_cities(cls):
    return sorted(cls.cities().items(), key=lambda city: city[1])

ago          = Gallery('Art Gallery of Ontario',         'Toronto')
louvre       = Gallery('Louvre',                         'Paris')
paris_modern = Gallery('Paris Museum of Modern Art',     'Paris')
pompidou     = Gallery('The Centre Pompidou',            'Paris')
nyc_modern   = Gallery('The Metropolitan Museum of Art', 'New York')
guggenheim   = Gallery('Guggenheim Museum',              'New York')
Gallery.report()
