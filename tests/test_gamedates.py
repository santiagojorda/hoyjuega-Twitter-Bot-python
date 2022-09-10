import unittest

from src.date import *
from src.game import *


class TestElPartidoEsAhora(unittest.TestCase):

    def setUp(self):
        self.game = Game(now(), Arg)
        self.gameStamp = Game(datetimeFromTimestamp(datetime.timestamp(now())), Arg)

    def test_LaFechaYHoraConLasDelPartido_Coinciden(self):
        self.assertTrue(areSameDatetime(self.game.datetime, now()))

    def test_LaHoraActualYLaDelPartido_Coinciden(self):
        self.assertTrue(areSameTime(self.game.datetime, now()))

    def test_LaFechaActualYLaDelPartido_Coinciden(self):
        self.assertTrue(areSameDate(self.game.datetime, now()))


class TestDatesCreadorConTimestamp(unittest.TestCase):
    def setUp(self):
        datetimeNow = now()
        timestamp = datetime.timestamp(datetimeNow)
        gameDatetime = datetimeFromTimestamp(timestamp)
        self.game = Game(gameDatetime, Arg)

    def test_LaFechaYHoraConLasDelPartido_Coinciden(self):
        self.assertTrue(areSameDatetime(self.game.datetime, now()))

    def test_LaHoraActualYLaDelPartido_Coinciden(self):
        self.assertTrue(areSameTime(self.game.datetime, now()))

    def test_LaFechaActualYLaDelPartido_Coinciden(self):
        self.assertTrue(areSameDate(self.game.datetime, now()))

class TestElPartidoEsEnUnaHora(unittest.TestCase):

    def setUp(self):
        gameDate = now() + timedelta(hours=1)
        self.game = Game(gameDate, Arg)

    def test_LaFechaYHoraActualConLasDelPartido_NoCoinciden(self):
        self.assertFalse(areSameDatetime(now(), self.game.datetime))

    def test_LaFechaActualYLaDelPartido_Coinciden(self):
        self.assertTrue(areSameDate(now(), self.game.datetime))

    def test_LaHoraActualYLaDelPartido_NoCoinciden(self):
        self.assertFalse(areSameTime(now(), self.game.datetime))


class TestElPartidoEsMañanaALaMismaHora(unittest.TestCase):

    def setUp(self):
        gameDate = now() + timedelta(days=1)
        self.game = Game(gameDate, Arg)
        
    def test_LaFechaYHoraActualConLasDelPartido_NoCoinciden(self):
        self.assertFalse(areSameDatetime(now(), self.game.datetime))

    def test_LaFechaActualYLaDelPartido_NoCoinciden(self):
        self.assertFalse(areSameDate(now(), self.game.datetime))

    def test_LaHoraActualYLaDelPartido_Coinciden(self):
        self.assertTrue(areSameTime(now(), self.game.datetime))


class TestElPartidoEsOtroDiaYOtraHora(unittest.TestCase):
    
    def setUp(self):
        gameDate = now() + timedelta(days=1, minutes=3)
        self.game = Game(gameDate, Arg)

    def test_LaFechaYHoraActualConLasDelPartido_NoCoinciden(self):
        self.assertFalse(areSameDatetime(now(), self.game.datetime))

    def test_LaFechaActualYLaDelPartido_NoCoinciden(self):
        self.assertFalse(areSameDate(now(), self.game.datetime))

    def test_LaHoraActualYLaDelPartido_NoCoinciden(self):
        self.assertFalse(areSameTime(now(), self.game.datetime))


if __name__ == '__main__':
    unittest.main()