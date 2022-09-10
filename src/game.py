from src.date import datetime
from src.team import *

class Game():
    def __init__(self, inputDateTime: datetime, inputTeam: Team):
        self.datetime = inputDateTime
        self.team = inputTeam
