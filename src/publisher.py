from game import *
from datetime import datetime, date
from file import *
from publication import Publication
from scraping import *

MATCH_DATES_FILE = 'gameDates.txt' 

def thereIsAGameToday(game: Game):
    return game.date == date.today()

def messiPlayedToday(game: Game):
    messiPlayed = datetime.now() > game.datetime
    if messiPlayed:
        print('ya jugo')
    return messiPlayed 

def intToStr2D(num):
    return f"{num:02d}"

def tweetMessiPlaysToday():
    nearlyGame = getNextMatch()
    if thereIsAGameToday(nearlyGame):
        if not messiPlayedToday(nearlyGame):
            gameDatetime = nearlyGame.datetime
            message = 'hoy juega messi a las ' + intToStr2D(gameDatetime.hour) + ':' + intToStr2D(gameDatetime.minute) + 'hs ' + nearlyGame.team.emojis
            Publication(message).publish()

    else:
        print('hoy no juega messi')

