# Generated by Django 5.2.1 on 2025-06-13 16:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reportes', '0002_remove_reportes_comentario_reporte'),
    ]

    operations = [
        migrations.AddField(
            model_name='reportes',
            name='estado_reporte',
            field=models.CharField(choices=[('rechazada', 'RECHAZADA'), ('pendiente', 'PENDIENTE'), ('aprobada', 'APROBADA')], default='pendiente', max_length=50),
        ),
    ]
