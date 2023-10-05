const express = require('express');
const router = express.Router();
const Subjects = require('../modules/subjectModule');

// Read all data
router.get('/sub', (req, res) => {
  res.send('get');
});

// Read data from id
router.get('/sub/:id', (req, res) => {
  res.send('get id');
});

// Insert data
router.post('/sub', (req, res) => {
  res.send('insert ');
});

// Update data
router.put('/sub/:id', (req, res) => {
  res.send('update');
});

// Delete data
router.delete('/sub/:id', (req, res) => {
  res.send('delete');
});

module.exports = router;
