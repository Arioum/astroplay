import express from 'express';

const app = express();
app.use(express.json());


app.listen(4000, () => console.log('Uploads service running on port 4000'));
