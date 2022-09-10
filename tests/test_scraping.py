import unittest
from bs4 import BeautifulSoup
from src.date import areSameDatetime, newDatetime
from src.scraping import getActualTeam, getGameDatetime
from src.team import Psg


class TestLionelMessiStats(unittest.TestCase):
    def setUp(self):
        self.PATH_MESSI_STATS = 'tests/assets/messi_stats_example.html'
        self.HTMLFileToBeOpened = open(self.PATH_MESSI_STATS, "r")
        contents = self.HTMLFileToBeOpened.read()
        self.soup = BeautifulSoup(contents, 'html.parser')

    def tearDown(self):
        self.HTMLFileToBeOpened.close()

    def test_ChequeaQueEsLaPaginaDeMessi_Correctamente(self):
        playerNameDiv = self.soup.find(class_ = "player-name")
        playerName = playerNameDiv.h1.text
        self.assertEqual(playerName, 'Lionel Messi')

    def test_SeObtieneElDiaDelPartidoQueEsMañana_Correctamente(self):
        nextGameDatetime = getGameDatetime(self.soup)
        realGameDatetime = newDatetime(2022, 9, 10, 12, 00)
        self.assertTrue(areSameDatetime(nextGameDatetime, realGameDatetime))

    def test_SeObtieneElEquipoDondeJuegaMessiMañana_Correctamente(self):
        nextTeam = getActualTeam(self.soup)
        realNextTeam = Psg()
        self.assertEqual(nextTeam, realNextTeam.name)