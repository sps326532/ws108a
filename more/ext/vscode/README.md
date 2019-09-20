# VsCode Extension

* https://code.visualstudio.com/api
* https://github.com/microsoft/vscode-extension-samples

## 開發方式

1. 先 git clone https://github.com/microsoft/vscode-extension-samples.git
2. 用 code helloworld-sample 讓 vscode 開啟該資料夾
3. 用 npm install 安裝，然後按 F5 執行

此時會開出一個新的 vscode ，上面標示 extension development host，我們選 View/Command Palette 或用 Ctrl-Shift-P 就能啟動該程式，此時會看到出現一個 Hello World 訊息框！

其原始碼 : https://github.com/microsoft/vscode-extension-samples/blob/master/helloworld-sample/src/extension.ts


## 改變編輯視窗字體顏色

* https://code.visualstudio.com/api/extension-capabilities/theming

原始碼 -- 