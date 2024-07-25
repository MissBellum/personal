from django.db import models
from django_resized import ResizedImageField

# Create your models here.
# portfolio/models.py

from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    technology = models.CharField(max_length=50)
    image = ResizedImageField(size=[300, 300], quality=85, upload_to="images/", force_format='JPEG', blank=True)
    date = models.DateField(verbose_name='date added')

    def __str__(self):
        return f'{self.title}, {self.description}, {self.technology}, {self.image}, {self.date}'

