from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required

def register(request):
    if request.method == 'POST':
        username = request.POST.get('signup-username')
        email = request.POST.get('signup-email')
        password = request.POST.get('signup-password')

        if User.objects.filter(username=username).exists():
            messages.error(request, 'Username is already taken.')
            return redirect('blog-home')
        else:
            user = User.objects.create_user(username=username, email=email, password=password)
            user.save()
            messages.success(request, 'Account created successfully. Please login.')
            return redirect('blog-home')

# Create your views here.
def loginView(request):
    if request.method == 'POST':
        username = request.POST.get('login-username')
        password = request.POST.get('login-password')
        user = authenticate(request, username=username, password=password)
        if user is not None:            
            login(request, user)
            messages.success(request,'Log In successful')
            return redirect('blog-home')
            #return JsonResponse({'success': True})  # Redirect to the home page after login
        else:
            messages.error(request,'wrong username or password')
            return redirect('blog-home')
            #return JsonResponse({'success': False})
        
def logoutView(request):
    logout(request)
    return redirect('blog-home')

@login_required
def profile(request):
    context={
        'title':'profile',
    }
    return render(request,'user/profile.html',context)

