import hashlib
from urllib.parse import urlencode

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _


class User(AbstractUser):
    name = models.CharField(_("Name"), blank=True, max_length=255)
    email = models.EmailField(_('email address'), unique=True)

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})

    @property
    def image_url(self):
        if self.user_profile.image:
            return self.user_profile.image.url
        return "https://www.gravatar.com/avatar/%s?%s" % (hashlib.md5(self.email.lower().encode('utf-8')).hexdigest(), urlencode({'d':"", 's':str(40)}))
