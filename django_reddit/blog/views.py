from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from user.forms import UserRegisterForm
from django.contrib import messages
from .forms import PostForm
from django.views.generic import ListView,DetailView,CreateView,UpdateView,DeleteView
from .models import Post
# Create your views here.
class PostListView(ListView):
    model = Post
    template_name = 'blog/home.html'
    context_object_name = 'posts'
    ordering = ['-date_posted']

def createPost(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()
            return redirect('blog-home')  # Redirect to home page or wherever you want
    else:
        form = PostForm()
    return render(request, 'blog/create_post.html', {'form': form})