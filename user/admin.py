from django.contrib import admin
from .models import Member

admin.site.site_header = "Misinformation Detective"
admin.site.index_title = "Backends System"
admin.site.site_title = "Administration"


# Register your models here.
@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ['id', 'username', 'password', 'email']
    list_filter = ['identity']
    search_fields = ['id', 'username', 'email']

