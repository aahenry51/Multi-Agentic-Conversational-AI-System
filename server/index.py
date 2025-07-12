import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

app = Flask(__name__)
CORS(app) # Enable CORS for all routes
load_dotenv()

mongodb_username = os.getenv("MONGODB_USERNAME")
mongodb_password = os.getenv("MONGODB_PASSWORD")
mongodb_server = os.getenv("MONGODB_SERVER")

uri = f"mongodb+srv://{mongodb_username}:{mongodb_password}{mongodb_server}"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)
 
db = client.userProfile
collection= db.profile


@app.route("/")
def home():
    return "Hello, World!"

@app.route('/crm/create_user', methods =['POST'])
def signUp_data():

    data = request.get_json()

    res = collection.find_one({
        "email":data.get('email')
        })
    
    #Email not found
    if res == None:
        obj = collection.insert_one({
            "firstName": data.get('first'),
            "lastName": data.get('last'),
            "company": data.get('company'),
            "email":data.get('email'),
            "password": data.get('password'),
            })
        
        id = str(obj.inserted_id)

        return jsonify({
            "message": "Data received successfully!", 
            "existAlready": False,
            "id": id
            }), 200
    else:
        return jsonify({"message": "Email already in database", "existAlready": True}), 200

@app.route('/crm/login_user', methods =['POST'])
def login_data():

    data = request.get_json()

    res = collection.find_one({
        "email":data.get('email'),
        "password":data.get('password')
        })
    
    if res == None:
        return jsonify({"message": "Email is not in database", "existAlready": False}), 200
    else:

        id = str(res['_id'])
        return jsonify({
            "message": "Data received successfully!", 
            "existAlready": True,
            "id": id
            }), 200
    
  

    

  

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)