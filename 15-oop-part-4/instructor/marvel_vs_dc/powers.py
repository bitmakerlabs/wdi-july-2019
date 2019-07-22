
class Speed:

    RUNNING_SPEED = 1000

    def run(self):
      self.altitude = self.RUNNING_SPEED

    def walk(self):
      self.altitude = 0

class Flight:

    CRUISING_ALTITUDE = 1000

    def fly(self):
      self.altitude = self.CRUISING_ALTITUDE

    def land(self):
      self.altitude = 0

class Strength:

    GODLY_STRENGTH = 40

    def __init__(self, name):
      super().__init__(name)
      self.power += self.GODLY_STRENGTH

class MartialArts:

    MARTIAL_ARTS_POWER = 10

    def __init__(self, name):
      super().__init__(name)
      self.power += self.MARTIAL_ARTS_POWER

class Claws:

    CLAWS_POWER = 20

    def __init__(self, name):
      super().__init__(name)
      self.power += self.CLAWS_POWER
