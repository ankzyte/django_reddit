from django.db import models

# Create your models here.
from django.contrib.auth.models import User
# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    displayName = models.CharField(default = "", max_length=100)
    about = models.TextField(null=True, blank=True)
    image = models.ImageField(default="default.jpg",upload_to="profile_pics")

    def __str__(self):
        return f'{ self.user.username } profile'

    def save(self, *args, **kwargs):
        if not self.displayName:  # Check if displayName is not set
            self.displayName = self.user.username
        super().save(*args, **kwargs)