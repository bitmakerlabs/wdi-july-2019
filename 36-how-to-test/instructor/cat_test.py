import unittest
from cat import Cat

class TestCat(unittest.TestCase):

  def test_true_is_true(self):
    self.assertTrue(True)

  def test_false_is_false(self):
    self.assertFalse(True)

if __name__ == '__main__':
    unittest.main()
