# 投票 API

## Article Object
|   Field   |  Type   | Description  |
| :-------: | :-----: | :----------: |
|    id     | integer |    文章id    |
|   time    |  time   | 文章發表時間 |
|   image   | string  |    圖片id    |
| textImage | string  |    圖文id    |
|  voting   | boolean |   發布了沒   |
|   text    | string  |   文章內容   |

## `GET` /api/votes

```json5
[
  {
    "id": 2,
    "time": 1633699600705,
    "textImage": "asdasd",
    "voting": true
  },
  {
    "id": 3,
    "time": 1633699650705,
    "textImage": "asdasdasdasd",
    "voting": true
  }
]
```