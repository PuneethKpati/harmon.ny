# harmon.ny
Flask Rest API backend and a React Frontend project that utilises the Spotify Web API.

## Setup 
The setup for this project requires Python [TODO], npm [TODO] and React [TODO]
Current document contains instructions for linux systems.

### REACT frontend Setup
To initiate the installs on the node package modules, move to the Frontend folder and install the modules through *npm*
`npm install`

After the packages have been installed successfully, you can start the REACT and nodejs server through, 
`npm start`

This should open up the REACT frontend webpage in your default browser under the address 
`http://localhost:3000`

### REST API Backend Setup [Python]
This project requires the modules that are listed in _requirements.txt_, before we run the backend Flask Api server, we must install the python libraries necessary.

_If you do not have virtualenv installed, install it through python3 pip_
`python3 -m pip install virtualenv`

Then we install the virtual environment in a folder named venv
in _harmon.ny/_:
`python3 -m virtualenv venv`

Activate the virtual environment and install all the required modules for the project:
`source ./venv/bin/activate`
`python3 -m pip install -r requirements.txt`

After all the modules have been installed we are good to go to run the API server.
`python3 run.py`