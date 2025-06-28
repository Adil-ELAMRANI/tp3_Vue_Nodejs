module.exports = app => {
    const forfait = require('../controllers/forfait.controller.js')
    const router = require('express').Router()
    router.get('/', forfait.findAll)
    router.post('/', forfait.create)
    router.get('/:id', forfait.findOne)
    router.put('/:id', forfait.update)
    router.delete('/:id', forfait.delete)
    app.use('/api/forfaits', router)
}