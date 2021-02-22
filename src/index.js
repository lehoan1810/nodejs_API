const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const { extname } = require('path');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');
// connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

//HTPP logger
app.use(morgan('combined')); 

//
app.use(methodOverride('_method'));
//Template engine
app.engine('hbs', handlebars({
  extname: '.hbs',
  helpers : { 
    sum: function (a, b) {
      return a + b;
        }
    } 
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
//dùng để cấu hình lại đường dẫn mặc định cho handelbar, vì cấu trúc
//thư mục khác với form của nó, nên mình phải set lại đường dẫn khác


app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

//Routes init
route(app);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
})
