const express = require('express');
const router = express.Router();
const Job = require('../models/Jobs');
const fetchuser = require('../middleware/fetchuser');

router.get('/disjob', async (req, res) => {
  try {
    // Fetch all jobs from the database
    const allJobs = await Job.find().populate('employer', 'name email');

    // Send the list of jobs as a response
    res.json(allJobs);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
