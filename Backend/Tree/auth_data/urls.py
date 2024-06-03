from .views import apiOverview
from .views import UserListCreateView, UserRetrieveUpdateDeleteView
from .views import SignUpView, LoginView
from django.urls import path

from rest_framework_simplejwt.views import(
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

urlpatterns = [
    path('', apiOverview, name='apiOverview'),
    path('signup/', SignUpView.as_view(), name='SignUp'),
    path('login/', LoginView.as_view(), name='Login'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('create/', UserListCreateView.as_view(), name='user_create'),
    path('list/', UserListCreateView.as_view(), name='user_list'),
    path('update/<int:user_id>/', UserRetrieveUpdateDeleteView.as_view(), name='user_update'),
    path('delete/<int:user_id>/', UserRetrieveUpdateDeleteView.as_view(), name='user_delete'),
    path('detail/<int:user_id>/', UserRetrieveUpdateDeleteView.as_view(), name='user_detail'),
]