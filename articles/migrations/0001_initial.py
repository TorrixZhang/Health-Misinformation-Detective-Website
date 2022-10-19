# Generated by Django 4.1.2 on 2022-10-14 16:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=120, null=True)),
                ('topic', models.CharField(choices=[('Nutrition', 'Nutrition'), ('Health', 'Health'), ('Beauty', 'Beauty')], max_length=16, null=True)),
                ('content', models.TextField(null=True)),
            ],
        ),
    ]
