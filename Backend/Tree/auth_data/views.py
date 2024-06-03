from django.shortcuts import render
from django.contrib.auth import authenticate
from django.shortcuts import get_object_or_404

from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics, status

from .models import User
from .serializers import SignUpSerializer, UserSerializer
from .tokens import createTokenPair

# Create your views here.

@api_view(['GET'])
def apiOverview(request):
    return Response({
       'message': 'Hello World!'
    })


class UserListCreateView(APIView):
    serializer_class = UserSerializer

    def get(self, request: Request, *args, **kwargs):
        user = User.objects.all()
        serializer = self.serializer_class(instance=user, many=True)
        return Response(
            data=serializer.data, 
            status=status.HTTP_200_OK
        )

    def post(self, request: Request, *args, **kwargs):
        data = request.data
        serializer = self.serializer_class(data=data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                data={
                    'data': serializer.data, 
                    'message': 'User created',
                }, 
                status=status.HTTP_201_CREATED
            )

        return Response(
            data=serializer.errors, 
            status=status.HTTP_400_BAD_REQUEST
        )

class UserRetrieveUpdateDeleteView(APIView):
    serializer_class = UserSerializer

    def get(self, request: Request, user_id: int):
        user = get_object_or_404(User, pk=user_id)
        serializer = self.serializer_class(instance=user)

        return Response(
            data=serializer.data, 
            status=status.HTTP_200_OK
        )

    def put(self, request: Request, user_id: int):
        user = get_object_or_404(User, pk=user_id)
        data = request.data
        serializer = self.serializer_class(instance=user, data=data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                data={
                    'data': serializer.data, 
                    'message': 'User updated successfully',
                },  
                status=status.HTTP_200_OK
            )

        return Response(
            data=serializer.errors, 
            status=status.HTTP_400_BAD_REQUEST
        )

    def delete(self, request: Request, user_id: int):
        user = get_object_or_404(User, pk=user_id)
        user.delete()
        return Response(
            data={
                    'data': None, 
                    'message': 'User deleted',
                }, 
            status=status.HTTP_204_NO_CONTENT
        )

class SignUpView(generics.GenericAPIView):
    permission_classes = []
    serializer_class = SignUpSerializer

    def post(self, request: Request):
        data = request.data
        serializer = self.serializer_class(data=data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                data={
                    'data': serializer.data, 
                    'message': 'User signed up',
                },
                status=status.HTTP_201_CREATED,
            )

        return Response(
            data=serializer.errors, 
            status=status.HTTP_400_BAD_REQUEST\
        )


class LoginView(APIView):
    permission_classes = []

    def post(self, request: Request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(email=email, password=password)

        if user is not None:
            tokens = createTokenPair(user)
            return Response(
                data={
                    'message': 'Login successful', 
                    'token': tokens
                    }, 
                status=status.HTTP_200_OK
            )

        else:
            return Response(
                data={'message': 'Invalid credentials'}, 
                status=status.HTTP_400_BAD_REQUEST
            )

    def get(self, request: Request):
        content = {
            'user' : str(request.user),
            'auth' : str(request.auth)
        }

        return Response(data=content, status=status.HTTP_200_OK)


