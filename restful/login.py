from app import api
import requests
from flask_restplus import Resource, abort
from flask import request

login = api.namespace('login', description='login bitch')

@login.route('/loginPage', strict_slashes=False)
class LoginPage(Resource):
    @login.response(200, 'Success')
    @login.response(400, 'Malformed Request')
    @login.response(401, 'Authentication Error')
    @login.response(404, 'Error! Not Found')
    @login.param('username', 'UserName')
    @login.param('password', 'PassWord')
    @login.doc(description='''
        Initiate the login process and do the THANG
    ''')

    def get(self):
        username = str(request.args['username'])
        password = str(request.args['password'])

        if username is None:
            abort(400, 'Enter Username or Password Parameter!')

        if not (username == 'bob'):
            abort(404, 'User not found!')

        if not (password == 'aya'):
            abort(403, 'Wrong PAssword Budday!')

        # actual function
        return {'fuck':'you'}