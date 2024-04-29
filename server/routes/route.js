//  

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const prefixController = require('../controllers/prefix.controller');
const departmentController = require('../controllers/department.controller');
const positionController = require('../controllers/position.controller');

router.get('/user', userController.index);
router.post('/user/store', userController.store);
router.get('/user/edit/:id', userController.edit);
router.put('/user/update', userController.update);
router.delete('/user/destroy/:id', userController.destroy);

// prefix
router.get('/prefix', prefixController.index);
router.post('/prefix/store', prefixController.store);
router.get('/prefix/edit/:id', prefixController.edit);
router.put('/prefix/update', prefixController.update);
router.delete('/prefix/destroy/:id', prefixController.destroy);

// department
router.get('/department', departmentController.index);
router.post('/department/store', departmentController.store);
router.get('/department/edit/:id', departmentController.edit);
router.put('/department/update', departmentController.update);
router.delete('/department/destroy/:id', departmentController.destroy);

// position
router.get('/position', positionController.index);
router.post('/position/store', positionController.store);
router.get('/position/edit/:id', positionController.edit);
router.put('/position/update', positionController.update);
router.delete('/position/destroy/:id', positionController.destroy);



module.exports = router;