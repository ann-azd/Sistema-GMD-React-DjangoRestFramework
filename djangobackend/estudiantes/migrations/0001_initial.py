# Generated by Django 5.0.3 on 2024-04-01 10:26

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('materiales', '0007_alter_material_cantidad'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Estudiante',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('CI', models.PositiveIntegerField(max_length=11)),
                ('phoneinput', models.CharField(max_length=15)),
                ('anno', models.CharField(max_length=10)),
                ('grupo', models.CharField(max_length=10)),
                ('descripcion', models.TextField()),
                ('materiales', models.ManyToManyField(related_name='estudiantes', to='materiales.material')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
