class Flight:
  CRUISING_ALTITUDE = 1000

  def fly(self):
    self.altitude = self.CRUISING_ALTITUDE

  def land(self):
    self.altitude = 0


class Speed:
  RUNNING_SPEED = 1000

  def run(self):
    self.speed = self.RUNNING_SPEED

  def walk(self):
    self.speed = 0


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


class Regeneration:
  REGENERATION_FACTOR = 40

  def __init__(self, name):
    super().__init__(name)
    self.healing_factor += self.REGENERATION_FACTOR


class Genius:

  def activate_shield(self):
    self.shielded = true

  def take_hit(self, damage):
    if self.shielded:
      self.shielded = false
    else:
      super().take_hit(damage)


class Rich:
  INITIAL_BANKROLL = 1_000_000
  PROFIT = 500_000
  ULTRA_WEAPON_COST = 1_000_000
  ULTRA_DAMAGE = 1000

  def __init__(self, name):
    super().__init__(name)
    self.bankroll = self.INITIAL_BANKROLL

  def make_money(self):
    self.bankroll += self.PROFIT

  def fire_ultra_weapon(self, opponent):
    if self.bankroll >= self.ULTRA_WEAPON_COST:
      opponent.take_hit(self.ULTRA_DAMAGE)
      self.bankroll -= self.ULTRA_WEAPON_COST
