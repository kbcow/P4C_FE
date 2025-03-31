// preload.js
const { contextBridge, ipcRenderer } = require("electron");

//일렉트론 API를 사용하는 코드

contextBridge.exposeInMainWorld("electronAPI", {
  sendMessage: (msg) => ipcRenderer.send("toMain", msg),
  onMessage: (callback) => ipcRenderer.on("fromMain", (event, data) => callback(data)),
});
