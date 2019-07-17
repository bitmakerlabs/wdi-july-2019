class School:

  def __init__(self, name):
    self.name = name
    self.location = 'Toronto'

  def __str__(self):
    return self.name

rosedale = School('Rosedale')

print(rosedale)


print(rosedale.name)
print(rosedale.location)
