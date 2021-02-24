from django.db import models
from taggit.managers import TaggableManager

# Create your models here.
class Language(models.Model):
    """Model definition for Language."""

    name = models.CharField(max_length=50)

    class Meta:
        """Meta definition for Language."""

        verbose_name = 'Language'
        verbose_name_plural = 'Languages'

    def __str__(self):
        """Unicode representation of Language."""
        return self.name
    
class Vocabulary(models.Model):
    """Model definition for Vocabulary."""

    language = models.ForeignKey(Language, on_delete=models.CASCADE, related_name='vocabularies')
    title = models.CharField(max_length=100)
    pronounce = models.CharField(max_length=100)
    created_at = models.DateField(auto_now_add=False)
    
    tags = TaggableManager()

    class Meta:
        """Meta definition for Vocabulary."""

        verbose_name = 'Vocabulary'
        verbose_name_plural = 'Vocabularys'

    def __str__(self):
        """Unicode representation of Vocabulary."""
        return self.title
    
class Definition(models.Model):
    """Model definition for Definition."""

    vocabulary = models.ForeignKey(Vocabulary, on_delete=models.CASCADE, related_name='definitions')
    value = models.CharField(max_length=200)

    class Meta:
        """Meta definition for Definition."""

        verbose_name = 'Definition'
        verbose_name_plural = 'Definitions'

    def __str__(self):
        """Unicode representation of Definition."""
        return self.value
    
class Example(models.Model):
    """Model definition for Example."""

    vocabulary = models.ForeignKey(Vocabulary, on_delete=models.CASCADE, related_name='examples')
    value = models.CharField(max_length=200)

    class Meta:
        """Meta definition for Example."""

        verbose_name = 'Example'
        verbose_name_plural = 'Examples'

    def __str__(self):
        """Unicode representation of Example."""
        return self.value




