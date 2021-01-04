from flask import Flask
from flask_restplus import Api
from flask_cors import CORS 

with open('clientID', 'r') as idFile:
    client_id = idFile.read()

with open('clientSecret', 'r') as secretFile:
    client_secret = secretFile.read()

flaskApp = Flask(__name__)
# ToDo: Learn about this    
flaskApp.config['ERROR_404_HELP'] = False
CORS(flaskApp)

# Backend API server object
api = Api(flaskApp)




