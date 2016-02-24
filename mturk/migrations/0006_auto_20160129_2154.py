# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-01-29 21:54
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mturk', '0005_remove_mturkassignment_worker_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mturkhit',
            name='status',
            field=models.IntegerField(choices=[(1, 'Created'), (2, 'Completed'), (3, 'Done on Daemo'), (4, 'Expired')], default=1),
        ),
    ]
