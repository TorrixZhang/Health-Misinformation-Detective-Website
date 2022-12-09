from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', WritingsPostCreateView, basename='create')
router.register('<int:pk>/', WritingsPostCreateView, basename='create')


urlpatterns = [
    path('new/', include(router.urls)),
    path('', WritingsPostListView.as_view()),
    path('category/', WritingsPostCategoryView.as_view()),
    path('<slug>/', WritingsPostDetailView.as_view()),

]
