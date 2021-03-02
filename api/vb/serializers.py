from rest_framework import serializers

from .models import Language, Vocabulary, Definition, Example

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ['id', 'name']
        
class VocabularySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vocabulary
        fields = ['id', 'title', 'pronounce', 'created_at']
 
class DefinitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Definition
        fields = ['id', 'value']

class ExampleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Example
        fields = ['id', 'value']