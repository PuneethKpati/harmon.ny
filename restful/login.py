from app import api, client_id, client_secret
import requests
from flask_restplus import Resource, abort, reqparse, fields
from flask import request
import base64
import json 

auth = api.namespace('authorization', description='auth Endpoints and Functionalities')

# A list of our required parameters added into one api.model object
# api.model objects can be 'expected' in API endpoints for parameter handling
access_code_req = api.model('Access Code Input', {
    'redirect_uri': fields.String(required=True, example='http://localhost:3000/callback'),
    'code': fields.String(required=True, example='sdkjfhweoi23890d82e9uhf72heuwkj'),
    'grant_type': fields.String(required=True, example='auth_code')
})

# 

@auth.route('/access_token', strict_slashes=False)
class Access_Token(Resource):
    # defining the repsonse codes available in the scope of this API 
    @auth.response(200, 'Success')
    @auth.response(400, 'Malformed Request')
    @auth.response(404, 'Error! Not Found')
    # This API requires the parameters defined in the model access_code_req
    @auth.expect(access_code_req)

    # Documentation for reading
    @auth.doc(description='''
        Endpoint for calling the Spotify API for step 2 of the authorisation code flow. 
    ''')

    @auth.expect(access_code_req, validate=True)
    def post(self):
        # Get all of the parameters from the post request body 
        params = request.json

        # checking if we received all the required parameters in 'access_code_req'
        # Abort with error code 400 if parameter is missing
        for param in access_code_req:
            if not (param in params):
                abort(400, f'{param} was not provided!')

        # Sending an API call to spotify for access token
        tokenUrl = 'https://accounts.spotify.com/api/token'
        payload = {'redirect_uri':params['redirect_uri'], 'grant_type':params['grant_type'], 'code':params['code'], 'client_id':client_id, 'client_secret':client_secret}
        resp = requests.post(tokenUrl, data=payload)

        print(resp, resp.text)
        if resp.status_code == 200:
            responseValues = json.loads(resp.text)

            profileURL = 'https://api.spotify.com/v1/me'
            header = {'Authorization': 'Bearer ' +  responseValues['access_token']}
            print(header)
            resp = requests.get(profileURL, headers=header)
            print(resp.text)

        return json.loads(resp.text)