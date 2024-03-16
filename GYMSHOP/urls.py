from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

from home.views import home



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls')),
    path('product/', include('catalogo.urls')),
    path('', include('login.urls'))
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)