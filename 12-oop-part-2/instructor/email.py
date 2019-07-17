from datetime import datetime

class Email:
  def __init__(self, sender, recipient, subject, body, signature):
    self.datetime  = datetime.now()
    self.sender    = sender
    self.recipient = recipient
    self.subject   = subject
    self.body      = body
    self.signature = signature

  def __len__(self):
    return len(self.body + self.signature)


email = Email('sean@bitmaker.co',
              'example@gmail.com',
              'Hey!',
              'Lorem ipsum',
              '\nKind regards,\nSean')

print(len(email))
