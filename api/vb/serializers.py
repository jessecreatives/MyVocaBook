from rest_framework import serializers

from .models import Language, Vocabulary, Definition, Example

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ['id', 'name', 'vocabularies']
        depth = 1
        
class VocabularySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vocabulary
        fields = ['id', 'title', 'pronounce', 'definitions', 'examples', 'created_at']
        depth = 1
 
class DefinitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Definition
        fields = ['id', 'value']

class ExampleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Example
        fields = ['id', 'value']