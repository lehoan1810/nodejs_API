const express = require('express');
const route = express.Router();

const courseController = require('../app/controllers/CourseControllre');

route.get('/create', courseController.create);
route.post('/store', courseController.store);
route.get('/:id/edit', courseController.edit);//load ra trang hiển thị dữ liệu để edit
route.put('/:id', courseController.update);// dùng để cập nhập chỉnh sửa
route.patch('/:id/restore', courseController.restore);
route.delete('/:id', courseController.destroy);
route.delete('/:id/force', courseController.forceDestroy);
route.get('/:slug', courseController.show);

module.exports = route;
