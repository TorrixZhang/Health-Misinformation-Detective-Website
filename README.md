## Health Misinformation Detective
### Team Information:
 - Name: Coca Koala
 - Team Member: Yankun Zhang, Jiayue Cai, Yining Qiu, Yutao Zhang, Chengyang Xu

### Local setup instructions below. 👇🏼

### Step1. Import the MySQL Database (You need to install MySQL first)
```
cd Backend

mysqladmin -u [UserName] -p[Pasword] create backendData

mysql -u [UserName] -p[Password] backendData < backendData.sql

```

### Step2. Run the backend
```
cd Backend/djangoProject

pip install -r requirements.txt

python manage.py runserver 8888

```

### Step3. Running the Frontend
```
npm install

npm start

```

### Thank you for viewing our project！ 
### Have a good day～ ❤️