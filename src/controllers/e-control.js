const {getConnection} = require('../database');

const renderIndex = (req, res) =>{
    const entries = getConnection().get('tasks').value();
    res.render('index', {entries});
};

const renderNewEntry = (req, res) =>{
    res.render('new');
};

const createNewEntry= (req, res) =>{
    const newEntry = {
         title: req.body.title,
         content: req.body.entry,
         published: new Date()
    };
    getConnection().get('tasks').push(newEntry).write();
    res.redirect('/');
    
};

module.exports = {
    renderIndex,
    renderNewEntry,
    createNewEntry
}