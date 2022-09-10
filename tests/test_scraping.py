import unittest
from bs4 import BeautifulSoup
from src.date import areSameDatetime, newDatetime
from src.scraping import getActualTeam, getGameDatetime, getNextMatch, getSoupScrappingFromFile, isLionelMessiStatsPage
from src.team import Psg


class TestLionelMessiStats(unittest.TestCase):
    def setUp(self):
        self.PATH_MESSI_STATS = 'tests/assets/messi_stats_example.html'
        self.file = open(self.PATH_MESSI_STATS, "r", encoding='UTF8')
        self.soup = getSoupScrappingFromFile(self.file)

    def tearDown(self):
        self.file.close()

    def test_ChequeaQueEsLaPaginaDeMessi_Correctamente(self):
        self.assertTrue(isLionelMessiStatsPage(self.soup))

    def test_SeObtieneElDiaDelPartido_Correctamente(self):
        nextGameDatetime = getGameDatetime(self.soup)
        realGameDatetime = newDatetime(2022, 9, 10, 12, 00)
        self.assertTrue(areSameDatetime(nextGameDatetime, realGameDatetime))

    def test_SeObtieneLaHoraDelPartido_Correctamente(self):
        nextGameTime = getGameDatetime(self.soup).time()
        realGameTime = newDatetime(2022, 9, 10, 12, 00).time()
        self.assertTrue(areSameDatetime(nextGameTime, realGameTime))

    def test_SeObtieneElEquipoDondeJuegaMessi_Correctamente(self):
        nextTeam = getActualTeam(self.soup)
        realNextTeam = Psg()
        self.assertEqual(nextTeam, realNextTeam.name)


class TestOtherPlayerStats(unittest.TestCase):
    def setUp(self):
        self.PATH_OTHER_PLAYER_STATS = 'tests/assets/other_player_example.html   '
        self.file = open(self.PATH_OTHER_PLAYER_STATS, "r", encoding='UTF8')
        self.soup = getSoupScrappingFromFile(self.file)

    def tearDown(self):
        self.file.close()

    def test_ChequeaQueEsLaPaginaDeMessi_PeroNoLoEs(self):
        self.assertFalse(isLionelMessiStatsPage(self.soup))
    
    def test_QuiereObtenerElPartido_PeroNoLoEsLaPaginaDeMessi_lanzaException(self):
        with self.assertRaises(Exception) as context:
            getNextMatch(self.soup)
        self.assertTrue('notMessiException' in str(context.exception))

    def test_QuiereObtenerElEquipoConElQueJuegaMessi_PeroNoLoEsLaPaginaDeMessi_lanzaException(self):
        with self.assertRaises(Exception) as context:
            getActualTeam(self.soup)
        self.assertTrue('notMessiException' in str(context.exception))

    def test_QuiereObtenerLaFechaDelPartido_PeroNoLoEsLaPaginaDeMessi_lanzaException(self):
        with self.assertRaises(Exception) as context:
            getGameDatetime(self.soup)
        self.assertTrue('notMessiException' in str(context.exception))



