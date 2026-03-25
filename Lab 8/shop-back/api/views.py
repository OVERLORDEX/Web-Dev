from django.http import JsonResponse
from .models import Product, Category


def product_list(request):
    products = Product.objects.all()
    return JsonResponse(list(products.values()), safe=False)


def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
        return JsonResponse({
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "description": product.description,
            "count": product.count,
            "is_active": product.is_active,
            "category": product.category_id
        })
    except Product.DoesNotExist:
        return JsonResponse({"error": "Not found"})


def category_list(request):
    categories = Category.objects.all()
    return JsonResponse(list(categories.values()), safe=False)


def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
        return JsonResponse({
            "id": category.id,
            "name": category.name
        })
    except Category.DoesNotExist:
        return JsonResponse({"error": "Not found"})


def products_by_category(request, id):
    products = Product.objects.filter(category_id=id)
    return JsonResponse(list(products.values()), safe=False)