const express = require('express');

const Form = require('../models/Form');

const router = express.Router();

router.post('/send', async (req, res) => {
    try {
        const form = await Form.create(req.body);

        return res.send({ 'msg': "Sua confirmação foi realizada com sucesso.", form});
    }
    catch(e)
    {
        return res.status(400).send({ error: 'Não foi possível realizar sua confirmação, favor entrar em contato.'})
    }
});

module.exports = app => app.use('/form', router);