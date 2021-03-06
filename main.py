from flask import Flask,send_from_directory #若沒有的話可以先: pip install flask
from flask import request
from flask_cors import CORS, cross_origin #若沒有的話可以先: pip install Flask-cors
from flask_socketio import SocketIO #若沒有的話可以先: pip install flask_socketio
import json

import sqliteExample as sqliteExample # 加載 sqliteExample 資料庫操作 function 集合

app = Flask(__name__)
CORS(app)#把瀏覽器 cors 跨域API遮擋打開
@app.route('/<path:path>', methods=['GET'])
def static_proxy(path):
  return send_from_directory('./', path)

@app.route('/getCustomers', methods=['GET'])#範例資料
def customers():
    return json.dumps([{"id":1,"age":16,"name":'hello'},{"id":2,"age":20,"name":'kitty'}])#記得轉換成json格式

@app.route('/getCustomersFromDb', methods=['GET'])#從 test.db 檔案裡面 sql 指令取出 customer table 的資料
def customersFromDb():
    return json.dumps(sqliteExample.getCustomersFromDataBase())#記得轉換成json格式

@app.route('/getSpecificCustomerFromDb')
def specificCustomerFromDb():
  name = request.args.get('name')
  return json.dumps(sqliteExample.getSpecificCustomerFromDataBase(name))#記得轉換成json格式

@app.route('/getProductFromDb', methods=['GET'])#從 test.db 檔案裡面 sql 指令取出 product table 的資料
def productFromDb():
    return json.dumps(sqliteExample.getProductFromDataBase())#記得轉換成json格式


@app.route('/')
def root():
  return send_from_directory('./', 'index.html')
if __name__=="__main__":
  app.run()