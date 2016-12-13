const router = require('express').Router();
const controller = require('./controllers');

router.get('/api/data', controller.data.getAll);
router.get('/api/data/:query', controller.data.getOne);
router.post('/api/data', controller.data.newItem);
router.post('/api/data/:id', controller.data.update);
router.delete('/api/data/:id', controller.data.removeItem);

module.exports = router;
