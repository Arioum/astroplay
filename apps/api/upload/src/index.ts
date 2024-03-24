import express from 'express';

const app = express();
app.use(express.json());

app.listen(4003, () => console.log('Uploads service running on port 4003'));
