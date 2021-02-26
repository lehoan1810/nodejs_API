const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const { extname } = require('path');
const SortMiddleware = require('./app/middleware/SortMiddleware')
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
    }, 
    sortable: (field, sort) => {
      const sortType = field === sort.column ? sort.type : 'default';

      const icons = {
        default: 'oi oi-elevator',
        asc: 'oi oi-sort-ascending',
        desc: 'oi oi-sort-descending',
      };

      const types = {
        default: 'desc',
        asc: 'desc',
        desc: 'asc',
      };
      
      const icon = icons[sortType];
      const type = types[sortType];

      return `<a href="?_sort&column=${field}&type=${type}">
                  <span class="${icon}"></span>
              </a>`;
    }
  }
  
}));
app.use(SortMiddleware);
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
