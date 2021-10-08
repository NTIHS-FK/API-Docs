# 文章 API

## Post Object
|   Field   |  Type   | Description  |
| :-------: | :-----: | :----------: |
|    id     | integer |    文章id    |
|   time    |  time   | 文章發表時間 |
|   image   | string  |    圖片id    |
| textImage | string  |    圖文id    |
|  voting   | boolean |   發布了沒   |

## `GET` /posts
獲取已發布文章列表

### Example Partial Post

```json5
{
  "id": 2,
  "time": 1633699600705,
  "image": "asdasdasdasd",
  "textImage": "asdasd",
  "voting": true
}

```

