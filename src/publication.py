import api, file
from datetime import datetime, date

PUBLICATIONS_DATES_FILE = 'publicationsDates.txt'
FORMAT_PUBLICATIONS_DATE = "%d/%m/%Y"

def datetimeFromLine(dateLine):
    print(dateLine)
    return datetime(
        int(dateLine[2]),
        int(dateLine[1]),
        int(dateLine[0])
    )

def getFormatDateToday():
    return date.today().strftime(FORMAT_PUBLICATIONS_DATE)

def wasPublishedToday():
    lines = file.getFileLines(PUBLICATIONS_DATES_FILE)
    if len(lines) == 0:
        raise Exception('El archivo de lectura de fechas de publicacion esta vacio')
    dateLine = lines[-1].split('/')
    datetimeLine = datetimeFromLine(dateLine)
    if (date.today() == datetimeLine.date()):
        return True
    return False

class Publication():
    def __init__(self, message):
        self._message = message

    def publish(self):
        if not wasPublishedToday():
            writtingDate = getFormatDateToday() + "\n"
            file.writeAtTheEnd(PUBLICATIONS_DATES_FILE, writtingDate)
            api.tweet(self._message) 
        else:
            print('ya hubo publicacion')

        
        # api.getTweetsProfile()
