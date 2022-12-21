FROM nikolaik/python-nodejs:latest
#Definisce la working directory del container
WORKDIR /app 

#Copia requirements.txt e installa le dipendenze
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
RUN  npm install -g nodemon
#Copia tutta la cartella server
COPY . .

#Espone la porta 5000
EXPOSE 5000

#Avvia il server python
CMD [ "nodemon", "./app.py" ]