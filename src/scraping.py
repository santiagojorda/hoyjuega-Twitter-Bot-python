import requests 
from bs4 import BeautifulSoup
from src.date import datetimeFromTimestamp
from src.game import Game
from src.team import *

ARGENTINA_TEAM_WEB_NAME = 'Argentina'
PSG_TEAM_WEB_NAME = 'PSG'
LIONEL_WEB_NAME = 'Lionel Messi'

def getSoup(url):
    page = requests.get(url).content
    return BeautifulSoup(page, 'html.parser')
   
def getSoupScrappingFromFile(file):
    return BeautifulSoup(file.read(), 'html.parser')

def checkIfIsMessiStatsPage(soup):
    if ( not isLionelMessiStatsPage(soup)):
        raise Exception('notMessiException')

def getActualTeam(soup):
    checkIfIsMessiStatsPage(soup)
    nextGameDiv = soup.find(class_ = "column next-game")
    matchBox = nextGameDiv.find(class_ = "match-box")
    teamsBoxes = matchBox.find_all(class_ = 'info-box')
    for teamBox in teamsBoxes:
        team = teamBox.find(class_ = 'team-name')
        teamName = team.a.text 
        if teamName == ARGENTINA_TEAM_WEB_NAME or teamName == PSG_TEAM_WEB_NAME:
            return teamName

def getGameDatetime(soup):
    checkIfIsMessiStatsPage(soup)
    nextGameDiv = soup.find(class_ = "column next-game")
    dateDiv = nextGameDiv.find("span", {"class": "date timezone"})
    gameTimestamp = int(dateDiv.attrs['data-timestamp'])
    gameDatetime = datetimeFromTimestamp(gameTimestamp)
    return gameDatetime

def isLionelMessiStatsPage(soup):
    playerNameDiv = soup.find(class_ = "player-name")
    playerName = playerNameDiv.h1.text 
    return LIONEL_WEB_NAME == playerName

def getNextMatch(soup):
    actualTeam = getActualTeam(soup)
    nextGameDatetime = getGameDatetime(soup)

    team = None
    if actualTeam == ARGENTINA_TEAM_WEB_NAME:
        team = Arg()
    elif actualTeam == PSG_TEAM_WEB_NAME:
        team  = Psg()
    else:
        raise Exception('invalidTeamException')
    
    return Game(nextGameDatetime, team)




    