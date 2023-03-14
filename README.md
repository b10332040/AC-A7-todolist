# Todo List X MVC with React

- 專案：https://github.com/b10332040/AC-A7-todolist
- 起始專案：https://github.com/ALPHACamp/todolist-react-starter.git

### User Story

- 使用者可以在網域輸入路徑進入對應頁面：
  - /login：進入登入頁面。
  - /signup：進入註冊頁面。
  - /todo：進入 Todo List 頁面。
  - 其餘：進入首頁。
- 使用者可以查看自己的所有 todo。
- 使用者可以新增 todo。
- 使用者可以刪除 todo。
- 使用者可以標記完成/未完成的 todo。
- 使用者可以雙擊清單上的特定 todo 編輯內容。
- 使用者登入成功會跳轉到 Todo List 頁面。
- 使用者在已登入情形下，網址輸入 /login、/signup 或是首頁，都會跳轉到 Todo List 頁面。
- 使用者在 Todo List 頁面登出後會跳轉到登入頁。
- 使用者在為登入情況下不能進到 Todo List 頁面。

---

### Environment - 環境建置

1.nvm(Windows)

[nvm-windows](https://github.com/coreybutler/nvm-windows/releases)，點擊`nvm-setup.zip`下載安裝。開啟終端機(Terminal)，輸入下述指令以確定安裝成功。

```
nvm version
```

2.Node.js

開啟終端機(Terminal)，輸入下述指令查看可安裝的 Node.js 的版本。下載並使用 Node.js，這裡下載 16.16.0 版本。

```
nvm list available
nvm install 16.16.0
nvm use 16.16.0
```

---

### Installing - 專案建置

1.開啟終端機(Terminal)，Clone 此專案至本機電腦。

```
git clone https://github.com/b10332040/AC-A7-todolist
```

2.進入專案資料夾。

```
cd AC-A7-todolist
```

3.下載相關套件。

```
npm install
```

4.啟動專案，有順利自動開啟 http://localhost:3000 看到畫面及安裝成功。

```
npm start
```

---

# Getting Started with Create React App

- A starter project for react tutorial
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
