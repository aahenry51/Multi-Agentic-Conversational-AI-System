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
profile = db.profile


@app.route("/")
def home():
    return "Hello, World!"

@app.route('/api/data', methods =['POST'])
def set_data():

    data = request.get_json()
        # Process the received data (e.g., save to a database)
    print(f"Received data: {data}")
    #if request.method == 'POST':
    #    content = request.form['content']
    #    degree = request.form['degree']
     #   profile.insert_one({'content': content, 'degree': degree})
    return jsonify({"message": "Data received successfully!", "received_data": data}), 200

  

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)