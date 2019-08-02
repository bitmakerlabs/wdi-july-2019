from django.shortcuts import redirect
from django.urls import reverse
from rocketleague.models import Game

# def foo():
#   return 'bar'
#
# baz = foo
# baz()

def user_is_game_creator(view_func):
  # wrapper(request, 1, 2, 3)
  # args = [1,2,3]
  #
  # my_list = [2,6,7]
  #
  # my_func(my_list[0], my_list[1], my_list[2])
  # my_func(*my_list)

  # *args # 1, 2, 3
  def wrapper(request, *args, **kwargs):
    game = Game.objects.get(pk=kwargs['game_id'])
    if game.referee == request.user:
      return view_func(request, *args, **kwargs)
    else:
      return redirect(reverse('index'))

  return wrapper
