const port = process.env.PORT || 5001;
const app = require('./index')

app.listen(port, () => {
  console.log(`listen port ${port}`);
})

module.exports = app;