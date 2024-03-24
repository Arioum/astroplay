import express from 'express';

const app = express();

app.listen(4002, () => {
  console.log('recommendation engine running on port 4002');
});
