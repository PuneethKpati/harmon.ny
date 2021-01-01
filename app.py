from flask import Flask
from flask_restplus import Api
from flask_cors import CORS 

#You do this when you make a new flask app
flaskApp = Flask(__name__)
# ToDo: Learn about this    
flaskApp.config['ERROR_404_HELP'] = False
CORS(flaskApp)

# Backend API server object
api = Api(flaskApp)


