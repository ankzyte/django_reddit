from django.urls import path, include
from . import views
from django.conf.urls.static import static
from django.conf import settings
from .views import PostListView

urlpatterns = [
    path('',PostListView.as_view(),name="blog-home"),  
    path('submit/',views.createPost,name='blog-createpost'),
]