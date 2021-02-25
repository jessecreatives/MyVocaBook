from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'languages', views.LanguageViewSet)
router.register(r'vocabularies', views.VocabularyViewSet)
router.register(r'definitions', views.DefinitionViewSet)
router.register(r'examples', views.ExampleViewSet)

urlpatterns = [
    path('', include(router.urls)),
]