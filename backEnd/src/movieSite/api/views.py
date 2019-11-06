from rest_framework.generics import ListAPIView, RetrieveAPIView
from movieSite.models import Movie

from .serializer import MovieSerializer

class MovieListView(ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class MovieDetailView(RetrieveAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer