import schedule, time
from src.publisher import tweetMessiPlaysToday

tweetMessiPlaysToday()
schedule.every().day.do(tweetMessiPlaysToday)

while True:
    schedule.run_pending()
    time.sleep(1)