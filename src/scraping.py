import requests 
from bs4 import BeautifulSoup
from src.date import datetimeFromTimestamp
from src.game import Game
from src.team import *

MESSI_MATCHS_URL = 'https://www.footballcritic.com/lionel-messi/profile/5663'

def getActualTeam(soup):
    nextGameDiv = soup.find(class_ = "column next-game")
    matchBox = nextGameDiv.find(class_ = "match-box")
    teamsBoxes = matchBox.find_all(class_ = 'info-box')
    for teamBox in teamsBoxes:
        team = teamBox.find(class_ = 'team-name')
        teamName = team.a.text 
        if teamName == ARG_NAME or teamName == PSG_NAME:
            return teamName

def getGameDatetime(soup):
    nextGameDiv = soup.find(class_ = "column next-game")
    dateDiv = nextGameDiv.find("span", {"class": "date timezone"})
    gameTimestamp = int(dateDiv.attrs['data-timestamp'])
    gameDatetime = datetimeFromTimestamp(gameTimestamp)
    return gameDatetime

def getNextMatch():
    page  = requests.get(MESSI_MATCHS_URL).content
    soup = BeautifulSoup(page, 'html.parser')
    actualTeam = getActualTeam(soup)
    nextGameDatetime = getGameDatetime(soup)

    # buscar patron de diseño
    team = None
    if actualTeam == Arg().name:
        team = Arg()
    elif actualTeam == Psg().name:
        team  = Psg()
    else:
        raise Exception('El equipo actual es invalido')
    
    return Game(nextGameDatetime, team)




    