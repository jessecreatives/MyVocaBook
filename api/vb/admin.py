from django.contrib import admin
from .models import Language, Vocabulary, Definition, Example

# Register your models here.
admin.site.register(Language)
admin.site.register(Vocabulary)
admin.site.register(Definition)
admin.site.register(Example)