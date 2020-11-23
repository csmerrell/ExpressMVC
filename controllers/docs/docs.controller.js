import express from 'express';

const docsController = express.Router();

docsController.get('/ExampleRoute', (req, res) => {
    res.render('test/ExampleRoute', { title: "Example MVC Route", layout: "centeredLayout" });
})

docsController.get('/', (req, res) => {
    res.render('docs/index', { title: "CSM - Documentation", layout: "centeredLayout" });
})

export default docsController;