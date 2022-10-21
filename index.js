const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

//call categories
const categories = require("./data/categories.json");
//call news
const news = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("News Api Running");
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(news);
  } else {
    const categoryNews = news.filter((n) => n.category_id === id);
    res.send(categoryNews);
  }
});

app.get('/news', (req, res) => {
  res.send(news)
})

//load single news
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((singleNews) => singleNews._id === id);
  res.send(selectedNews);

  res.send(news);
});

app.listen(port, () => {
  console.log(`Dragon News Server Running on  ${port}`);
});
