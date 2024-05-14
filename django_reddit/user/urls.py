from django.urls import path, include
from . import views
from blog import views as blogViews
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('',views.profile,name="user-profile"),
    path('submit/',blogViews.createPost,name='user-createpost'),
]
