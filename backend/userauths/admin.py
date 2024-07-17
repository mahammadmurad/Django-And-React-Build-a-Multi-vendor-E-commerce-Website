from django.contrib import admin
from userauths.models import User, Profile

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'full_name']

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ["full_name", ]


# Register your models here.
