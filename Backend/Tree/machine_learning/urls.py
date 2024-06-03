# from .views import apiOverview
# from .views import UserListCreateView, UserRetrieveUpdateDeleteView
# from .views import SignUpView, LoginView
from django.urls import path
from .views import *
# from rest_framework_simplejwt.views import(
#     TokenObtainPairView,
#     TokenRefreshView,
#     TokenVerifyView,
# )

urlpatterns = [
    # path('', apiOverview, name='apiOverview'),
    path('count/', ImageProcessingView.as_view(), name='process_image'),
    # path('addimg/', Addimg.as_view(), name='SignUp')
]