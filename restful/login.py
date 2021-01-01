from app import api, client_id, client_secret
import requests
from flask_restplus import Resource, abort, reqparse, fields
from flask import request

login = api.namespace('login', description='Login Endpoints and Functionalities')

# A list of our required parameters added into one api.model object
# api.model objects can be 'expected' in API endpoints for parameter handling
access_code_req = api.model('Access Code Input', {
    'callback_uri': fields.String(required=True, example='http://localhost:3000/callback'),
    'code': fields.String(required=True, example='sdkjfhweoi23890d82e9uhf72heuwkj'),
    'grant_type': fields.String(required=True, example='auth_code')
})

# 
@login.route('/access_token', strict_slashes=False)
class Access_Token(Resource):
    # defining the repsonse codes available in the scope of this API 
    @login.response(200, 'Success')
    @login.response(400, 'Malformed Request')
    @login.response(404, 'Error! Not Found')
    # This API requires the parameters defined in the model access_code_req
    @login.expect(access_code_req)

    # Documentation for reading
    @login.doc(description='''
        Endpoint for calling the Spotify API for step 2 of the authorisation code flow. 
    ''')

    def get(self):
        #username = str(request.args['username'])
        params = request.args
        print(params)

        # actual function
        return {'fuck':'you'}