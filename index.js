const express = require('express');
let helmet = require('helmet');
const app = express();

app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello Helmet!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server on port ${port}`));
