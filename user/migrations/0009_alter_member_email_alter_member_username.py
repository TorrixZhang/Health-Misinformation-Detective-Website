# Generated by Django 4.1.1 on 2022-10-04 10:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0008_alter_member_identity'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='email',
            field=models.EmailField(max_length=50, unique=True),
        ),
        migrations.AlterField(
            model_name='member',
            name='username',
            field=models.CharField(max_length=16, null=True),
        ),
    ]
