ARG_NAME = 'Argentina'
ARG_EMOJIS = '🇦🇷 🔵⚪'
PSG_NAME = 'PSG'
PSG_EMOJIS = '🇫🇷 🔵🔴'

class Team():
    def __init__(self, name, emojis):
        self.name = name
        self.emojis = emojis

class Arg(Team):
    def __init__(self):
        super().__init__(ARG_NAME, ARG_EMOJIS)

class Psg(Team):
    def __init__(self):
        super().__init__(PSG_NAME, PSG_EMOJIS)