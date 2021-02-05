const { app, BrowserWindow } = require("electron");
const ipc = require("electron").ipcMain;
const { Nike } = require("nike-puppet");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("dist/sneaker-bot/index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipc.on("test", async (event, arg) => {
  // const browser = await puppeteer.launch({ headless: false });
  // const page = await browser.newPage();
  // await page.goto("https://google.com", {
  //   waitUntil: "networkidle2",
  // });

  // await browser.close();
  let nike = new Nike();
  await nike.init();
  await nike.login("jintao90811@gmail.com", "6QFptXuU6kbzNxA");

  console.log("test");
});
