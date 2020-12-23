from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
import time
from django.contrib import messages


# Create your views here.
def sign(request):
    if request.method == 'POST':
        fname = request.POST['fname']
        username = request.POST['username']
        email = request.POST['email']
        pass1 = request.POST['password1']
        pass2 = request.POST['password2']
        if pass1 == pass2:
            if User.objects.filter(username=username).exists():
                messages.info(request, "user")
            elif User.objects.filter(email=email).exists():
                messages.info(request, "email")
            else:
                messages.info(request, "sucess")
                user = User.objects.create_user(username=username,
                                                password=pass1,
                                                email=email,
                                                first_name=fname,
                                                last_name="")
                user.save()
        else:
            messages.info(request, "password")
        return redirect('/SignUp')
    else:
        return render(request, 'signup.html')