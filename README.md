# 蛤蟆先生去看心理師・教學導讀網站

《蛤蟆先生去看心理師》(羅伯・狄保德 Robert de Board 著)的教學導讀網站,以 Astro + Starlight 建置。
內容為重點整理、白話解說與思考題,**並非原書全文**;原文引用僅限每課至多兩句短金句。

## 開發

```bash
npm ci
npm run dev      # http://localhost:4321/counselling-for-toads/
npm run build    # 產出 dist/
npm run preview
```

## 結構

- 內容:`src/content/docs/unit*.md`(共 15 篇)+ `index.mdx`(首頁)
- 側欄:`astro.config.mjs` 的 `sidebar`(去編號標題)+ `src/styles/sidebar-num.css`(小號編號),新增章節兩邊都要同步
- 主題:teal,樣式在 `src/styles/theme.css`
- Callout:`:::tip[標題]`、`:::note[標題]`、`:::caution[標題]`;中英數字間加半形空格;範圍用「–」

線上網址:https://yaericure.github.io/counselling-for-toads/(push main 自動部署)
