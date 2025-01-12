/**
 * app : dùng để kiểm soát vòng đời sự kiện của ứng dụng
 * BrowserWindow : dùng để tạo, quản lý các cửa sổ ứng dụng
 */
const { app, BrowserWindow } = require('electron/main')

/** hàm tạo cửa số ứng dụng bằng cách tải giao diện web vào  */
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

// khi ứng dụng sẵn sàng thì sẽ thực thi hàm call back truyền vào
app.whenReady().then(() => {
  // tạo 1 cửa sổ mới
  createWindow()

  // với macOS thì cần lắng nghe sự kiện activate để tạo cửa sổ mới bởi vì khi ứng dụng của macOS vẫn sẽ tiếp tục chạy ngay cả khi không có cửa số ứng dụng nào cả
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})


// lắng nghe sự kiện đóng hết các cửa sổ
app.on('window-all-closed', () => {

  // trường hợp là windows hoặc linux thì sẽ thực thi hàm app.quit() để đóng ứng dụng còn macOS thì không cần
  if (process.platform !== 'darwin') {
    app.quit()
  }
})