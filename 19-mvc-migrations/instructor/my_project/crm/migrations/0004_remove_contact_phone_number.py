# Generated by Django 2.2.3 on 2019-07-26 16:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('crm', '0003_contact_phone_number'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contact',
            name='phone_number',
        ),
    ]
