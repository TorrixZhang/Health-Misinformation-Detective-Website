from django.db import models
from videos.validators import file_size


# Create your models here.
class Video(models.Model):
    caption = models.CharField(max_length=100)
    video = models.FileField(upload_to="video/%y")

    def __str__(self) -> str:
        return self.caption

