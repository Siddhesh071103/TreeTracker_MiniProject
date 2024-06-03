from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/',include('auth_data.urls')),
    path('ml/',include('machine_learning.urls')),
]
