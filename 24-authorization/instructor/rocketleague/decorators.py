from django.shortcuts import redirect
from django.urls import reverse
from rocketleague.models import Game

def user_is_game_creator(view_func):
  def wrapper(request, *args, **kwargs):
    game = Game.objects.get(pk=kwargs['game_id'])
    if game.referee == request.user:
      return view_func(request, *args, **kwargs)
    else:
      return redirect(reverse('index'))

  return wrapper
