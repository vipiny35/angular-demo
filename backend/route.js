const express = require('express')
const router = express.Router()

const { getAllForms, saveForm, deleteForm, updateForm } = require('./controller')

router.get('/', getAllForms);
router.post('/', saveForm);
router.delete('/:id', deleteForm);
router.put('/:id', updateForm);

module.exports = router;