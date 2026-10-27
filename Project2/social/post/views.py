from django.contrib.auth.decorators import login_required

from django.shortcuts import render, redirect

from .form import PostForm

from accounts.models import User
from .models import Post, Comment


# Create your views here.
def post_list(request):
    posts = Post.objects.all()
    context = {
        'posts': posts,
        'current_user' : request.user
        
    }
    return render(request, 'index.html', context)

@login_required(login_url='login')
def post_add(request):
    if request.method == 'POST':
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            a = form.save(commit=False)
            a.user = request.user
            a.save()
            return redirect('post_list')
    else:
        form = PostForm()
        
    return render(request, 'add_post.html', {'form': form})

def post_delete(request, id):
    post = Post.objects.get(id=id)

    post.delete()
    return redirect('post_list')

def post_like(request, id): 
    post = Post.objects.get(id=id)
    current_user = request.user
    

    if post.likes.filter(id=current_user.id).exists():
        post.likes.remove(current_user)
    else:
        post.likes.add(current_user)

    return redirect('post_list')


def post_comment(request, id):
    post = Post.objects.get(id = id)
    current_user = request.user

    if request.method == 'POST':
        user_comment = request.POST.get('comment')
        new_comment = Comment(comment = user_comment, user = current_user, post = post)
        new_comment.save()

    context = {
        'posts': Post.objects.all(),
        'comments': Comment.objects.filter(post = post),
        'comment_post': post
    }

    return render(request ,'index.html', context)


