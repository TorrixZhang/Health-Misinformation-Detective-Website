from django.http import HttpResponse
from django.shortcuts import render, HttpResponse, redirect

from .models import Video
# Create your views here.

# def index(request):
#     all_video = Video.objects.all()
#     if request.method == "POST":
#         form = Video_form(data = request.POST, files = request.FILES)
#         if form.is_valid():
#             form.save()
#             return HttpResponse("<h1>Successful</h1>")
#     else:
#         form = Video_form()
#     return render(request, 'index.html', {"form":form, "all":all_video})


def index(request):
    video = Video.objects.all()
    return render(request, 'index.html', {"video": video})

# def index(request):
#     return render(request, 'index.html')