const { Router } = require('express');
const router = Router();

const { renderIndex, renderNewEntry, createNewEntry } = require('../controllers/e-control');

router.get('/', renderIndex);
router.get('/new', renderNewEntry);
router.post('/new', createNewEntry);

module.exports = router;