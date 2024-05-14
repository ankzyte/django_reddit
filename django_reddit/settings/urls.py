from django.urls import path, include
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('',views.settings,name="settings"),
    path('profile/',views.updateProfile,name="settings-updateprofile")
]