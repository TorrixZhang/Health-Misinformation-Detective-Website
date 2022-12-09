from django.db import models


# Create your models here.
class Article(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(null=True, max_length=120)
    topic = models.CharField(null=True, max_length=16,
                             choices=[('Nutrition', 'Nutrition'), ('Health', 'Health'), ('Beauty', 'Beauty')])
    content = models.TextField(null=True)

    def __str__(self):
        return self.title
