# AngularPythonTutorial
## 開發環境(npm、python)
https://hackmd.io/@CrazyHandsomeFish/H1WsPJFMu

## 檔案結構
├─angular-python
│  ├─e2e
│  │  └─src
│  └─src
│      ├─app
│      │  ├─modules #前端本地開發模組
│      │  │  ├─material-example #以 angular material 元件組為基礎開發本地模組
│      │  │  │  ├─views
│      │  │  │  │   └─material-dashboard #angular material 範例頁面
│      │  │  │  ├─material-example-routing.module.ts #本地模組 component 與 url binding 關係
│      │  │  │  └─material-example.module.ts #本地模組
│      │  │  └─primeng-example #以 primeng 元件組為基礎開發本地模組
│      │  │      └─views
│      │  │          └─primeng-dashboard #angular material 範例頁面
│      │  └─shared #公用
│      │      ├─modules #公用第三方開發模組，可以import 到本地模組使用
│      │      └─services #公用 service
│      ├─assets #圖片、檔案等資源
│      ├─environments #正式發行變數
│      └─scripts #shell script
├─main.py #後端主程式
├─sqliteExample.py #後端sqlite function範例，可加載到 main.py 使用
└─test.db #Sqlite 資料庫

## 執行程式
1. 在 AngularPython 資料夾底下開啟 command line(terminal)
2. 執行下列指令
```
//第一次請執行(安裝前/後端套件+編譯執行)
sh scripts/backend-initial.sh 
sh scripts/frontend-initial.sh
//之後請執行(前/後端編譯執行)
sh scripts/backend-serve.sh 
sh scripts/frontend-serve.sh 
```
3. 等待前/後端都編譯執行完成後開起
- 前端 http://localhost:4200
- 後端 http://localhost:5000
    - 後端請用 postman 測試(網頁不會顯示東西)
    
## Angular 從零開始
https://ithelp.ithome.com.tw/articles/10203185