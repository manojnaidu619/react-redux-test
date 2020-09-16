import matplotlib.pyplot as plt
import pandas
from datetime import datetime
from alpha_vantage.timeseries import TimeSeries

# Current Timestamp
# now = datetime.now()
# print(now.strftime("%b %d, %Y(%H:%M:%S)"))

ts = TimeSeries('TPQBCYY9DA1F6X6U', output_format='pandas', indexing_type='date')
symbol = 'DXYN'

values, columns = ts.get_daily(symbol=symbol, outputsize='full')

values['4. close'].plot(color="green")
plt.title("Stock chart of {}".format(symbol))
plt.ylabel('Price')
plt.xlabel('Range')
plt.savefig('./scripts/chart.png')
#plt.grid()
#plt.show()
