# Generated by Django 5.0.3 on 2024-03-19 03:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('materiales', '0006_alter_material_cantidad'),
    ]

    operations = [
        migrations.AlterField(
            model_name='material',
            name='cantidad',
            field=models.IntegerField(default=0),
        ),
    ]