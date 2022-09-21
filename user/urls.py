from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index_handler_main, name='index'),
    path('common', views.index_handler, name='index_com'),
    path('professional', views.index_handler_pro, name='index_pro'),
    re_path('(\d+)', views.re_handler, name='re'),
    re_path(r'^(\w+.*\d+)$', views.user_handler, name='username'),
    path('reverse', views.reverse_handler),
    path('redirect', views.redirect_handler)
]
