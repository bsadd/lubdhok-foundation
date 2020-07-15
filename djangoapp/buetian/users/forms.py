from allauth.account.forms import LoginForm, SignupForm, ResetPasswordForm
from allauth.socialaccount.forms import SignupForm as SocialSignupForm
from crispy_forms.helper import FormHelper
from django.contrib.auth import forms, get_user_model
from crispy_forms.layout import Layout, Fieldset, ButtonHolder, Submit
from django.core.exceptions import ValidationError
from django.forms import CharField, ModelForm, EmailField, TextInput
from django.utils.translation import ugettext_lazy as _

from .models import Profile
from .fields import CustomFileInput


User = get_user_model()

class UserChangeForm(forms.UserChangeForm):
    class Meta(forms.UserChangeForm.Meta):
        model = User


class UserCreationForm(forms.UserCreationForm):

    error_message = forms.UserCreationForm.error_messages.update(
        {"duplicate_username": _("This username has already been taken.")}
    )

    class Meta(forms.UserCreationForm.Meta):
        model = User

    def clean_username(self):
        username = self.cleaned_data["username"]

        try:
            User.objects.get(username=username)
        except User.DoesNotExist:
            return username

        raise ValidationError(self.error_messages["duplicate_username"])


class ProfileUpdateForm(ModelForm):
    email = EmailField(widget = TextInput(attrs={'readonly':'readonly'}), required=False)
    name = CharField(max_length=255)

    def __init__(self, *args, **kwargs):
        super(ProfileUpdateForm, self).__init__(*args, **kwargs)

        if self.instance:
            self.fields['email'].initial = self.instance.user.email
            self.fields['name'].initial = self.instance.user.name

        self.helper = FormHelper()
        self.helper.layout = Layout(
            'name',
            'email',
            'phone',
            'about',
            CustomFileInput('image'),
            ButtonHolder(
                Submit('submit', 'Save Changes', css_class='btn btn-success btn-block')
            )
        )

    def save(self, commit=True):
        profile = super().save(commit=False)
        profile.user.name = self.cleaned_data["name"]

        if commit:
            profile.user.save()
            profile.save()
        return profile

    class Meta:
        model = Profile
        fields = ('name', 'email', 'phone', 'image', 'about', )



class BLoginForm(LoginForm):
    def __init__(self, *args, **kwargs):
        super(BLoginForm, self).__init__(*args, **kwargs)


class BSignupForm(SignupForm):
    name = CharField(label='Your Name', max_length=255)


class BResetPasswordForm(ResetPasswordForm):
    def __init__(self, *args, **kwargs):
        super(BResetPasswordForm, self).__init__(*args, **kwargs)
        self.fields['email'].label = "EMAIL ADDRESS"


class BSocialSignupForm(SocialSignupForm):
    name = CharField(label='Your Name', max_length=255)

    def __init__(self, *args, **kwargs):
        super(BSocialSignupForm, self).__init__(*args, **kwargs)
        self.fields['email'].disabled = True

    def save(self):

        # Ensure you call the parent class's save.
        # .save() returns a User object.
        user = super(BSocialSignupForm, self).save()

        # Add your own processing here.

        # You must return the original result.
        return user
