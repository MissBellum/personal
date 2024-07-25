from django.shortcuts import render

# Create your views here.
# portfolio/views.py

from django.shortcuts import render
from .models import Project

def index(request):
    return render(request, 'portfolio/index.html')

def portfolio(request):
    projects = Project.objects.all()
    return render(request, 'portfolio/portfolio.html', {'projects': projects})

