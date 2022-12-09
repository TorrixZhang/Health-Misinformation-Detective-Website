from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Member

admin.site.site_header = "Health Misinformation Detective"
admin.site.index_title = "Backend System"
admin.site.site_title = "Administration"


# Register your models here.

# @admin.register(Member)
admin.site.register(Member, UserAdmin)
class MemberAdmin(admin.ModelAdmin):
    list_display = ['username', 'password', 'email', 'identity']
    list_filter = ['identity']
    search_fields = ['username', 'email']


