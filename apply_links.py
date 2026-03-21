from bs4 import BeautifulSoup
import pandas as pd

df = pd.read_excel('enlaces_videojuegos.xls').dropna(how='all')
col_afiliado = df.columns[2]
affiliate_links = df[col_afiliado].tolist()

with open('topvideojuegos.html', encoding='utf-8') as f:
    soup = BeautifulSoup(f, 'html.parser')

buy_btns = soup.find_all('a', class_='buy-btn')
for i, (btn, link) in enumerate(zip(buy_btns, affiliate_links)):
    old = btn['href']
    btn['href'] = str(link).strip()
    print(str(i+1) + '. Updated: ' + str(link).strip())

with open('topvideojuegos.html', 'w', encoding='utf-8') as f:
    f.write(str(soup))

print('topvideojuegos.html updated successfully!')
