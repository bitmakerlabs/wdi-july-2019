# Generated by Django 2.2.3 on 2019-07-26 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crm', '0002_auto_20190726_1550'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='phone_number',
            field=models.CharField(default='', max_length=255),
            preserve_default=False,
        ),
    ]
