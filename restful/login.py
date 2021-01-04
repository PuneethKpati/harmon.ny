from app import api, client_id, client_secret
import requests
from flask_restplus import Resource, abort, reqparse, fields
from flask import request
import base64
import json 

login = api.namespace('login', description='Login Endpoints and Functionalities')

# A list of our required parameters added into one api.model object
# api.model objects can be 'expected' in API endpoints for parameter handling
access_code_req = api.model('Access Code Input', {
    'redirect_uri': fields.String(required=True, example='http://localhost:3000/callback'),
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

    @login.expect(access_code_req, validate=True)
    def post(self):
        params = request.json
        #username = str(request.args['username'])
        tokenUrl = 'https://accounts.spotify.com/api/token'
        payload = {'redirect_uri':params['redirect_uri'], 'grant_type':params['grant_type'], 'code':params['code']}

        encodedString = client_id + ':' + client_secret 
        encodedCreds = base64.b64encode(bytes(encodedString, 'utf-8'))
        headers = {'Authorization': 'Basic ' + str(encodedCreds, 'utf-8')}

        resp = requests.post(tokenUrl, data=json.dumps(payload), headers=headers)
        print(payload)
        print(params)
        print(resp)
        # actual function
        return {'fuck':'you'}