from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify


class Categories(models.TextChoices):
    NUTRITION = 'Nutrition',
    DISEASE = 'Diseases',
    BEAUTY = 'Beauty',


class WritingsPost(models.Model):
    title = models.CharField(max_length=300)
    slug = models.SlugField()
    category = models.CharField(max_length=50, choices=Categories.choices)
    content = models.TextField()
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        queryset = WritingsPost.objects.all().filter(slug__iexact=original_slug).count()

        count = 1
        slug = original_slug
        while (queryset):
            slug = original_slug + '-' + str(count)
            count += 1
            queryset = WritingsPost.objects.all().filter(slug__iexact=slug).count()

        self.slug = slug

        super(WritingsPost, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
