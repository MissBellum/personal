from django.shortcuts import render

# Create your views here.
# portfolio/views.py

from django.shortcuts import render
from .models import Project

def index(request):
    return render(request, 'index.html')

def projects(request):
    projects = Project.objects.all()
    return render(request, 'projects.html', {'projects': projects})

def about(request):
    return render(request, 'about.html')

def balls(request):
    return render(request, "balls.html")
