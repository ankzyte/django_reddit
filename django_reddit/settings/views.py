from django.shortcuts import render,redirect
from .forms import ProfileUpdateForm
from django.contrib import messages
from django.contrib.auth.models import User
# Create your views here.
def settings(request):
    return render(request,'settings/index.html')

def updateProfile(request):
    if request.method == "POST":
        form = ProfileUpdateForm(request.POST,instance=request.user.profile)
        if form.is_valid():
            form.save()
            messages.success(request,f'successfully updated profile!')
            return redirect('settings-updateprofile')
    else:
        form = ProfileUpdateForm(instance=request.user.profile)
    context = {'form':form}
    return render(request,'settings/update_profile.html',context)