# Generated by Django 5.0.3 on 2024-03-13 13:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='categoria',
            field=models.CharField(default='vice', max_length=100),
        ),
    ]
