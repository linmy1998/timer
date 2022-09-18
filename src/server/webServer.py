'''
Author: linmingyu
Date: 2022-09-18 18:33:46
LastEditors: linmingyu
LastEditTime: 2022-09-18 21:16:22
Description: file content
'''
# flask具有轻量、简捷易上手的特点，适合新手使用
from flask import Flask
# request用于接收数据
from flask import request
# 解决跨域问题
from flask_cors import CORS


#  创建flask服务对象
app = Flask(__name__)
#  动态解决前端跨域问题
CORS(app, supports_credentials=True)


#  指定请求路径、方法
@app.route('/log', methods=['GET'])
def reciveLog():
    #get请求数据获取 post请求数据获取request.form.get("log")
    # data = request.args.get("log")
    return 'holle python server'


if __name__== "__main__":
    #  指定端口号和地址
    app.run(port=8888)

