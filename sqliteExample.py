import sqlite3 

def getCustomersFromDataBase():#自定義 function 用來查資料庫 customer
    cmd = f"SELECT Customer.Id,Customer.Name,Customer.Age FROM Customer"#查詢所有customer sql 查詢指令
    result = []
    try:
        conn = sqlite3.connect('test.db')#建立資料庫連線
        cursor = conn.execute(cmd)#在此資料庫連線中執行查詢指令
        for row in cursor:
            dict = {}#空python dictionary，用來接查詢資料的
            dict['id']=row[0]
            dict['name']=row[1]
            dict['age']=row[2]
            result.append(dict)#塞進 result array 裡面
        conn.close()#完成收工，關閉與資料庫的連線
    except:
        print('SQLite error: %s' % (' '.join(er.args)))#連線失敗或執行失敗，印出 sql 失敗原因
    return result

def getProductFromDataBase():
    cmd = f"SELECT Product.Id,Product.ProductName,Product.Code, Product.Price FROM Product"#查詢所有product sql 指令
    result = []
    try:
        conn = sqlite3.connect('test.db')#建立資料庫連線
        cursor = conn.execute(cmd)
        for row in cursor:
            dict = {}
            dict['id']=row[0]
            dict['name']=row[1]
            dict['price']=row[2]
            result.append(dict)
        conn.close()
    except:
        print('SQLite error: %s' % (' '.join(er.args)))
    return result

def getSpecificCustomerFromDataBase(name):#
    cmd = f"SELECT Customer.Id, Customer.Name, Customer.Age FROM Customer WHERE Customer.Name LIKE '%{name}%'"#查詢所有customer sql 查詢指令
    result = []
    try:
        conn = sqlite3.connect('test.db')#建立資料庫連線
        cursor = conn.execute(cmd)#在此資料庫連線中執行查詢指令
        for row in cursor:
            dict = {}#空python dictionary，用來接查詢資料的
            dict['id']=row[0]
            dict['name']=row[1]
            dict['age']=row[2]
            result.append(dict)#塞進 result array 裡面
        conn.close()#完成收工，關閉與資料庫的連線
    except:
        print('SQLite error: %s' % (' '.join(er.args)))#連線失敗或執行失敗，印出 sql 失敗原因
    return result