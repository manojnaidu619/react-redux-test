import pandas, os
import matplotlib.pyplot as plt
from datetime import datetime
from alpha_vantage.timeseries import TimeSeries

####### Values could be customized ############

REQ_TYPE = 'intraday'
#['intraday', 'daily', 'weekly', 'monthly'] are the other options.

SYMBOL = 'AAPL'

INTERVAL = 1
#[1, 5, 15, 30, 60] are the other options.

OUTPUTSIZE = 'full'
#['compact', 'full'] are the other options.

PATHTOCHART = './scripts'
GRIDVIEW = True

PLOT = 'close'
#['close', 'open', 'high', 'low'] are the other options

COLOR = 'green'

#############  Value customization end    #################

#API_KEY = os.environ['ALPHA_VANTAGE_KEY']
API_KEY = 'TPQBCYY9DA1F6X6U'

def setup_request_object(request, symbol, interval):
    try:
        ts = TimeSeries(API_KEY, output_format='pandas', indexing_type='date')
    except:
        print("Error occurred/ Number of API calls exhausted")
        return [False, False]
    if request == 'intraday': return ['intraday', ts]
    if request == 'daily': return ['daily', ts]
    if request == 'weekly': return ['weekly', ts]
    if request == 'monthly': return ['monthly', ts]
    return [False, False]

def make_request(type, object):
    if type == 'intraday':
        interval = str(INTERVAL)+'min'
        return object.get_intraday(symbol=SYMBOL, interval=interval, outputsize=OUTPUTSIZE)
    if type == 'daily':
        return object.get_daily(symbol=SYMBOL, outputsize=OUTPUTSIZE)
    if type == 'weekly':
        return object.get_weekly(symbol=SYMBOL, outputsize=OUTPUTSIZE)
    if type == 'monthly':
        return object.get_monthly(symbol=SYMBOL, outputsize=OUTPUTSIZE)

def save_chart(values):
    chart_save_path = PATHTOCHART + '/stock-chart.png'
    # Clear previous chart
    if os.path.exists(chart_save_path):
        os.remove(chart_save_path)
        print("Old chart removed")

    #Get Timestamps
    now = datetime.now().strftime("%b %d, %Y(%H:%M:%S)")

    # Save new chart
    if PLOT == 'open': plot = '1. open'
    if PLOT == 'high': plot = '2. high'
    if PLOT == 'low': plot = '3. low'
    if PLOT == 'close': plot = '4. close'
    values[plot].plot(color=COLOR)
    plt.title("{} Stock chart of {} - Last updated at {}".format(REQ_TYPE, SYMBOL, now))
    plt.ylabel('Price')
    plt.xlabel('Time')
    if GRIDVIEW: plt.grid()
    plt.savefig(chart_save_path)
    print("Saved new chart")

def rewrite_readme():
    file = open('./README.md', 'a')
    file.write('\n')
    file.write('![Stock-Chart](./scripts/stock-chart.png)')
    file.write('\n')
    file.close()

# Driver Code
request_type, request_object = setup_request_object(REQ_TYPE, SYMBOL, INTERVAL)
if (request_type != False and request_object != False):
    values, columns = make_request(request_type, request_object)
    save_chart(values)
    rewrite_readme()
