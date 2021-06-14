const express = require('express')
const { getAllAuthors, getAuthorByIdOrName } = require('./controllers/authors')
const { getAllGenres, getGenreById } = require('./controllers/genres')
const { getAllNovels, getNovelByIdOrTitle } = require('./controllers/novels')

const app = express()

app.use(express.static('public'))

app.use((req, res, next) => {
  res.setHeader(
    "content-security-policy-report-only",
    "default-src 'self'; script-src 'report-sample' 'self'; style-src 'report-sample' 'self'; object-src 'none'; base-uri 'self'; connect-src 'self' https://api.github.com; font-src 'self'; frame-src 'self'; img-src 'self' https://*.githubusercontent.com; manifest-src 'self'; media-src 'self'; report-uri https://5f723390a82aebac90867ce8.endpoint.csper.io/; worker-src 'none';"
  );
  next();
});

app.get('/api', getAllAuthors)
app.get('/api/:identifier', getAuthorByIdOrName)

app.get('/api', getAllGenres)
app.get('/api/:id', getGenreById)

app.get('/api', getAllNovels)
app.get('/api/:identifier', getNovelByIdOrTitle)

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
