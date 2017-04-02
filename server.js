import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'public'), {
  dotfiles: 'ignore'
}));

app.get('*', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.sendStatus(err.status || 500);
});

const port = 3000;
app.listen(port);

console.log(`Server running at localhost:${port}`);
