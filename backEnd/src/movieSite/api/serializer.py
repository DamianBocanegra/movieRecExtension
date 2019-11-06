from rest_framework import serializers
from movieSite.models import Movie

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('filmID', 'title', 'genre', 'releaseYear', 'length', 'MPAA_rating', 'qualityRating')
        