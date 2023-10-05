const express = require('express');
const router = express.Router();
const Subjects = require('../modules/subjectModule');

// Read all data
router.get('/sub', (req, res) => {
  Subjects.find({})
    .then((subjects) => res.json(subjects))
    .catch((err) => res.json(err));
});

// Read data from id
router.get('/sub/:id', (req, res) => {
  const id = req.params.id;
  Subjects.findById({ _id: id })
    .then((subjects) => res.json(subjects))
    .catch((err) => res.json(err));
});

// Insert data
router.post('/sub', (req, res) => {
  Subjects.create(req.body)
    .then((subjects) => res.json(subjects))
    .catch((err) => res.json(err));
});

// Update data
router.put('/sub/:id', (req, res) => {
  const id = req.params.id;
  Subjects.findByIdAndUpdate(
    { _id: id },
    {
      subCode: req.body.subCode,
      subName: req.body.subName,
      credit: req.body.credit,
      year: req.body.year,
      semester: req.body.semester,
      grade: req.body.grade,
    }
  )
    .then((subjects) => res.json(subjects))
    .catch((err) => res.json(err));
});

// Delete data
router.delete('/sub/:id', (req, res) => {
  const id = req.params.id;
  Subjects.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

module.exports = router;
