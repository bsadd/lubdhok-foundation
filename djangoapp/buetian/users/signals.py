from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver

from .models.profile import Profile


@receiver(post_save, sender=get_user_model())
def user_post_save(sender, instance, created, **kwargs):
    if created:
        profile = Profile.objects.create(user=instance)
    else:
        instance.user_profile.save()
