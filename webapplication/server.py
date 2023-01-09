import json

from flask import Flask, request, jsonify
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_identity, \
    unset_jwt_cookies, jwt_required, JWTManager

from flask_cors import CORS

import log_in_dao
import partners_dao
import products_dao
import register_dao
from sql_connect import get_sql_connect

app = Flask(__name__)

app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
jwt = JWTManager(app)

CORS(app, resources=r'/editProduct', headers='Content-Type')
connection = get_sql_connect()


@app.route('/token', methods=['POST'])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return {"msg": "Wrong email or password"}, 401

    access_token = create_access_token(identity=email)
    response = {"access_token": access_token}
    return response


@app.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response


@app.route('/profile')
@jwt_required()
def my_profile():
    response_body = {
        "name": "Nagato",
        "about": "Hello! I'm a full stack developer that loves python and javascript"
    }


@app.route('/login', methods=['POST', 'GET'])
def login():
    data = json.loads(request.data)
    print("before query")
    loginD = log_in_dao.log_in(connection, data)
    print("after query")
    response = jsonify({
        'login_status': loginD
    })
    print(loginD)
    return response


@app.route('/register', methods=['POST'])
def new_register():
    data = json.loads(request.data)
    register = register_dao.new_register(connection, data)
    response = jsonify({
        'register_status': register
    })
    print(register)
    return response


@app.route('/getProducts', methods=['GET'])
def get_products():
    email = request.args.get('emailID')
    item = products_dao.get_all_products(connection, email)
    return jsonify(item)


@app.route('/insertProduct', methods=['POST'])
def insert_product():
    data = json.loads(request.data)
    product = products_dao.insert_new_product(connection, data)
    response = jsonify({
        'product': product
    })
    return response


@app.route('/editProduct', methods=['PUT'])
def edit_product():
    data = json.loads(request.data)
    product = products_dao.edit_product(connection, data)

    response = jsonify({
        'product': product
    })
    return response


@app.route('/deleteProduct/<id>', methods=['DELETE'])
def delete_product(id):
    result = products_dao.delete_product(connection, id)
    response = jsonify({
        'id': result
    })
    return response


@app.route('/getPartners', methods=['GET'])
def get_partners():
    emailID = request.args.get('emailID')
    response = partners_dao.get_all_partners(connection, emailID)

    return jsonify(response)


@app.route('/insertPartner', methods=['POST'])
def insert_partner():
    data = json.loads(request.data)
    partner = partners_dao.insert_new_partner(connection, data)
    response = jsonify({
        'partner': partner
    })

    return response


@app.route('/editPartner', methods=['PUT'])
def edit_partner():
    data = json.loads(request.data)
    partner = partners_dao.edit_partner(connection, data)
    response = jsonify({
        'partner': partner
    })
    return response


@app.route('/deletePartner/<id>', methods=['DELETE'])
def delete_partner(id):
    result = partners_dao.delete_partner(connection, id)
    response = jsonify({
        'id': result
    })
    print('response')
    return response


@app.after_request
def after_request(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers[
        'Access-Control-Allow-Headers'] = 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization'
    response.headers['Access-Control-Allow-Methods'] = 'POST, PUT, PATCH, GET, DELETE, OPTIONS'
    return response


if __name__ == '__main__':
    print("Starting Python Flask Server")
    app.run(port=5000)
