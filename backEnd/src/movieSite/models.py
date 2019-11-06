from django.db import models

class Movie(models.Model):
    filmID = models.IntegerField()
    title =  models.CharField(max_length=120)
    genre = models.CharField(max_length = 12)
    releaseYear = models.CharField(max_length = 4)
    length = models.IntegerField()
    MPAA_rating = models.CharField(max_length = 6)
    qualityRating = models.IntegerField()

    def __str__(self):
        return self.title
