from bs4 import BeautifulSoup
import pandas as pd

# Try both files - prefer the .xls one the user may have saved
for fname in ['enlaces_videojuegos.xls', 'enlaces_videojuegos.xlsx']:
    try:
        df = pd.read_excel(fname)
        df = df.dropna(how='all')
        col = df.columns[2]
        non_empty = df[col].dropna()
        if len(non_empty) > 0:
            print('Using file: ' + fname)
            print('Columns: ' + str(list(df.columns)))
            for i, row in df.iterrows():
                print(str(i+1) + '. ' + str(row[df.columns[0]]) + ' -> ' + str(row[col]))
            break
    except Exception as e:
        print('Error with ' + fname + ': ' + str(e))
