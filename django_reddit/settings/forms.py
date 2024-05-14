from django import forms
from django.contrib.auth.forms import UserCreationForm,PasswordResetForm
from django.contrib.auth.models import User
from user.models import Profile

class ProfileUpdateForm(forms.ModelForm):
    class Meta:
        model=Profile
        fields=['displayName','about','image']