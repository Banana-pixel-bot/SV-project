# 電梯監測

這是一個簡單的電梯監測網頁應用程式，允許用戶輸入他們目前所在的樓層和下一層，並將這些數據儲存到一個記事本中。

## 專案結構

```
elevator-monitor
├── src
│   ├── css
│   │   └── style.css      # 網頁樣式
│   ├── js
│   │   └── main.js        # 網頁功能
│   └── index.html         # 主網頁文件
├── data
│   └── records.txt        # 儲存輸入數據的文件
└── README.md              # 專案說明文件
```

## 使用說明

1. 克隆此專案到本地：
   ```
   git clone <repository-url>
   ```

2. 打開 `src/index.html` 文件於瀏覽器中。

3. 輸入「目前所在樓層」和「下一層」的數據。

4. 點擊「接收」按鈕，數據將被儲存到 `data/records.txt` 文件中。

## 技術棧

- HTML
- CSS
- JavaScript

## 貢獻

歡迎任何形式的貢獻！請提出問題或提交拉取請求。