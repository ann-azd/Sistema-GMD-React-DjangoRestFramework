# Generated by Django 5.0.3 on 2024-03-13 23:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('materiales', '0002_alter_material_autor'),
    ]

    operations = [
        migrations.AddField(
            model_name='material',
            name='urlimage',
            field=models.ImageField(blank=True, default='/pic.jpg', null=True, upload_to=''),
        ),
    ]