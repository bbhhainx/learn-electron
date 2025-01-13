const { contextBridge } = require('electron')


// khai báo 1 biến toàn cục versions với contextBridge
contextBridge.exposeInMainWorld('versions', {
  /** version của node trong process */
  node: () => process.versions.node,
  /** version của chrome trong process */
  chrome: () => process.versions.chrome,
  /** version của electron trong process */
  electron: () => process.versions.electron,
})