# Write a function that takes as input a 
# list of dealt cards, and returns the count

# 2-6, +1 to the count
# 10, J, Q, K, A, -1 to the count

# LOOKUP TABLE
DECK = {
  '2': 1,
  '3': 1,
  '4': 1,
  '5': 1,
  '6': 1,
  '7': 0,
  '8': 0,
  '9': 0,
  '10': -1,
  'J': -1,
  'Q': -1,
  'K': -1,
  'A': -1
}

def lookup(card):
    return DECK[card]

def count(cards):

    # With an if statement
    # ...skipped...
    
    # With a traditional loop
    count = 0
    for card in cards:
        count += lookup(card)
    return count

    # With a map
    values = map(lookup, cards)
    return sum(values)

    # With a lambda
    values = map(lambda card: DECK[card], cards)
    return sum(values)

    # With "list comprehension"
    values = [lookup(card) for card in cards]
    return sum(values)


#print(count(dealt_cards)) # ==> -1
dealt_cards = ['3', 'A', '7', 'Q']
print(count(dealt_cards))