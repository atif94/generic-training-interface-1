
# Generic Training Interface
<!-- ABOUT THE PROJECT -->
## About The Project

Please see [this](https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project) for setup help with the project if necessary.

<!-- GETTING STARTED -->
## Getting Started
### Prerequisites
#### Install 
* [GitHub Desktop](https://desktop.github.com/) or, optionally, just [git](https://git-scm.com/downloads)
* [Python 3.9.10](https://www.python.org/downloads/release/python-3910/) (latest stable release)
* [Node.js LTS](https://nodejs.org/en/download/)
* [PyCharm](https://www.jetbrains.com/pycharm/) optional, but recommended


### Setup
#### Linux/Mac (Bash)
In the `api/` directory, run:
```
python3 -m venv .venv
source .venv/bin/activate
```
#### Windows (CMD)
In the `api/` directory, run:
```
python -m venv .venv
.venv\Scripts\activate.bat
```
#### Installing Dependencies
Once the virtual environment is created and initalized, run
```
pip install flask python-dotenv flask-cors mariadb
```
In the `frontend/` directory, run:
```
npm install
```

## Development
After everything is installed, run in the `frontend/` directory:
```
npm start
```
And, in another terminal in the `api/src/` directory, run:
```
flask run
```
Then, navigate to: http://localhost:3000.
The page should automatically reload after any changes.

## Production Deployment
### Deploying the latest code
Once you ssh into AWS, run:
```
cd ~/generic-training-interface/frontend/
git pull
npm i
npm run build
sudo cp -rf build /var/www/html
sudo service apache2 restart
```
Or, as a one-liner:
```
cd ~/generic-training-interface/frontend/ && git pull && npm i && npm run build && sudo cp -rf build /var/www/html && sudo service apache2 restart
```
### Running the API
```
cd ~/generic-training-interface/api/src
nohup flask run --host=0.0.0.0
```
nohup forks the process into the background so you can logout and still have it run.
To stop it, 
```
ps -ef | grep nohup
```
The output will look something like this:
```
ubuntu      8168    8155  0 01:46 pts/0    00:00:00 grep --color=auto nohup
```
Now,
```
sudo kill 8168
```
which kills the Flask server.
### Debugging
If you are having issues, refer to the Apache error log. Use the following to view the error log in real-time:
```
tail -f /var/log/apache2/error.log
```
### Connecting to the database
```
sudo snap start docker
docker start fcb60afab175
mysql -u root -h 0.0.0.0 --port=3301 -p
```
