from django.shortcuts import render, HttpResponse, reverse, redirect
from django.http import JsonResponse

# Create your views here.


def index_handler_main(request):
    # return HttpResponse('hello world')
    # print(request.method)
    # print(request.path)
    # print(request.META['REMOTE_ADDR'])
    # print(request.META['CONTENT_TYPE'])
    # print(request.META)
    # return HttpResponse('user index')
    # return HttpResponse(
    #     content='HttpResponse',
    #     content_type='text/plain',
    #     status=500
    # )
    context = {
        'username': 'name1',
        'password': 'pass1'
    }
    return render(request, 'index.html',context)


def index_handler(request):
    return HttpResponse('hello common user')


def index_handler_pro(request):
    return HttpResponse('hello professional user')


def re_handler(request, num):
    num1 = int(num) + 1
    return HttpResponse(num1)


def user_handler(request, username):
    return HttpResponse('Hello: %s' % username)


def reverse_handler(request):
    print(reverse('user:index'))
    print(reverse('user:re', args=('1234',)))
    return HttpResponse('reverse')


def redirect_handler(request):
    return redirect(reverse('user:index'))

