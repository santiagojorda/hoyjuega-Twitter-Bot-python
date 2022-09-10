from src.date import areSameDate, now
from src.game import *
from datetime import datetime, date
from src.file import *
from src.publication import Publication
from src.scraping import *

MATCH_DATES_FILE = 'gameDates.txt' 
MESSI_MATCHS_URL = 'https://www.footballcritic.com/lionel-messi/profile/5663'

def thereIsAGameToday(game: Game):
    return areSameDate(game.datetime, now())

def messiPlayedToday(game: Game):
    messiPlayed = datetime.now() > game.datetime
    if messiPlayed:
        print('ya jugo')
    return messiPlayed 

def intToStr2D(num):
    return f"{num:02d}"

def tweetMessiPlaysToday():
    soup = getSoup(MESSI_MATCHS_URL)
    nearlyGame = getNextMatch(soup)
    if thereIsAGameToday(nearlyGame):
        if not messiPlayedToday(nearlyGame):
            gameDatetime = nearlyGame.datetime
            message = 'hoy juega messi a las ' + intToStr2D(gameDatetime.hour) + ':' + intToStr2D(gameDatetime.minute) + 'hs ' + nearlyGame.team.emojis
            print(message)
            Publication(message).publish()

    else:
        print('hoy no juega messi')

