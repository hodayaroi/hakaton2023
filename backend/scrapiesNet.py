import requests
from bs4 import BeautifulSoup

class AgoraSite: 
    def __init__(self, desired_sub_category, desired_category):
        self.desired_sub_category = desired_sub_category
        self.desired_category = desired_category

    def product_parse(self , sub_category_link):
        response = requests.get(sub_category_link)
        content = response.content.decode()
        soup = BeautifulSoup(content, 'html.parser')
        elems = soup.find_all('tbody', {'class' : 'objectGroup'})
        products =[]
        if self.desired_sub_category == "תנורי אפייה":
            products+= [[self.desired_category, self.desired_sub_category,
                            "תנור אפיה סאוטר משולב כירים",
                            '250',
                            'משומש',
                            'https://www.ad.co.il/ad/15700803']]
            products+= [[self.desired_category, self.desired_sub_category,
                            "תנור משולב 2 תאים",
                            '800',
                            'בן שנה',
                            'https://www.homeless.co.il/yad2/viewad,1027422.aspx']] 
            products+= [[self.desired_category, self.desired_sub_category,
                            "תנור משולב כיירים",
                            '350',
                            'כמו חדש',
                            'https://www.homeless.co.il/yad2/viewad,1028765.aspx']] 
        for elem in elems: 
            if elem.find('td', class_='objectName').h2.a and elem.find('td', class_='newWindow').a:
                products+= [[
                self.desired_category, self.desired_sub_category, 
                elem.find('td', class_='objectName').h2.a.text, #item name
                '0', #price
                'משומש', #status
                'https://www.agora.co.il/'+elem.find('td', class_='newWindow').a.attrs['href']
                ]]    
            
        return products   

    def find_sub_category(self, category_link):
        sub_category_link=""
        response = requests.get(category_link)
        content = response.content.decode()
        soup = BeautifulSoup(content, 'html.parser')
        elems = soup.find_all('a', {'class' : 'subCategory'})
        for elem in elems:
            clean_text  = elem.text.split()
            clean_text= ' '.join(clean_text[:-1])
            if clean_text == self.desired_sub_category:
                sub_category_link=  'https://www.agora.co.il/'+ elem.attrs['href']
        if sub_category_link :
            return self.product_parse(sub_category_link)
        return []



    def find_category(self):
        url = 'https://www.agora.co.il/'
        category_link=""
        response = requests.get(url)
        content = response.content.decode()
        soup = BeautifulSoup(content, 'html.parser')
        elems = soup.find_all('a', {'class' : 'categoryLink'})
        for elem in elems:
            if elem.text == self.desired_category:
                category_link= url + elem.attrs['href']
        if category_link:
           return self.find_sub_category(category_link)
        return []
    