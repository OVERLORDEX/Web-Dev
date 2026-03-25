from django.core.management.base import BaseCommand
from api.models import Category, Product
import random

class Command(BaseCommand):
    help = 'Seed database with categories and products'

    def handle(self, *args, **kwargs):
        # Чистим таблицы
        Product.objects.all().delete()
        Category.objects.all().delete()

        category_names = ["Electronics", "Clothes", "Books", "Toys", "Home"]
        
        for cname in category_names:
            category = Category.objects.create(name=cname)
            for i in range(1, 11):
                Product.objects.create(
                    name=f"{cname} Product {i}",
                    price=round(random.uniform(10, 1000), 2),
                    description=f"Description for {cname} Product {i}",
                    count=random.randint(1, 20),
                    is_active=True,
                    category=category
                )
        self.stdout.write(self.style.SUCCESS('Database seeded successfully!'))