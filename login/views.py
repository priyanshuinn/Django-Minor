from django.shortcuts import render, redirect
from django.contrib.auth.models import auth
from django.contrib import messages


# Create your views here.
def login(request):
    if request.method == 'POST':
        uid = request.POST['uid']
        password = request.POST['pass']
        user = auth.authenticate(username=uid, password=password)
        if user is not None:
            messages.info(request, "valid")
            auth.login(request, user)
            return redirect("/Login")
        else:
            messages.info(request, "invalid")
            return redirect("/Login")
    else:
        return render(request, "login.html")
