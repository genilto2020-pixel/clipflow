const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('clipflow', {
  store: {
    get: (key) => ipcRenderer.invoke('store-get', key),
    set: (key, value) => ipcRenderer.invoke('store-set', key, value),
    delete: (key) => ipcRenderer.invoke('store-delete', key)
  },
  ayrshare: {
    post: (apiKey, payload) => ipcRenderer.invoke('ayrshare-post', { apiKey, payload }),
    history: (apiKey) => ipcRenderer.invoke('ayrshare-history', { apiKey })
  }
});
