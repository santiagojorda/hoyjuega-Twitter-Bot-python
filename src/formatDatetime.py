from datetime import datetime

# clase formateadora de la hora del partido, sin segundos ni microsegundos
class FormatDatetime():
    def __init__(self, inputDateTime: datetime):
        self.datetime = inputDateTime.replace(second=0, microsecond=0)