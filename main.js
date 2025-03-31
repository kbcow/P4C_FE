const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  //로컬 호스트 연결
  win.loadURL("http://localhost:3000");

  // 콘솔
  win.webContents.openDevTools();
}
//ipcMain.on(채널이름 , (event, arg )=> {})형태
//React가 toMain 채널에 "React에서 보냄!"" 을 보내고 Electron에서 받은 다음 fromMain채널로 응답함
//.on은 받는 거고 .send는 보내는거
//ipcMain은 일렉트론이 주체
//ipcRenderer는 리액트가 주체
//once는 딱 한번만 실행
ipcMain.on("toMain", (event, message) => {
  console.log(message); //React에서 보낸 메시지

  event.sender.send("fromMain", `Electron이 보내는 메시지: ${message}`); //React에게 응답 전송
});

app.whenReady().then(() => {
  createWindow();
});
