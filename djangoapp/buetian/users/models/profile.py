from django.contrib.auth import get_user_model
from django.db import models


User = get_user_model()


class Profile(models.Model):
    user = models.OneToOneField(User, related_name='user_profile', on_delete=models.CASCADE)

    phone = models.CharField(blank=True, max_length=20)
    image = models.ImageField(null=True, blank=True, upload_to='profile_images')
    about = models.TextField(blank=True)
