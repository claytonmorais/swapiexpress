const app = require('../src/app');

const port = portResolve(process.env.PORT || '8080');


app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})


function portResolve(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
      return val;
  }
if (port >= 0) {
      return port;
  }
return false;
}