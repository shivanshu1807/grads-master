const express = require('express');
const router = express.Router();
const Job = require('../models/Jobs');
const fetchemployer = require("../middleware/fetchemployer");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

router.post('/addjob', fetchemployer, [
  body('title', 'Enter a valid name').isLength({ min: 3 }),
  body('company', 'Enter a valid email'),
  body('state', 'Enter a valid state name').isLength({ min: 3 }),
  body('city', 'Enter a valid city name').isLength({ min: 3 }),
  body('address', 'Enter a valid phone number'),
  body('description', 'Enter a valid company name').isLength({ min: 3 }),
  body('requirements', 'Enter a valid pincode').isLength({ min: 10 }),
], async (req, res) => {
  try {
    const { title, company, state, city, address, description, requirements } = req.body;

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Declare the newJob variable
    let newJob;

    // Assign a new instance of the Job model to newJob
    newJob = new Job({
      employer: req.employer.id,
      title,
      company,
      state,
      city,
      address,
      description,
      requirements,
    });

    const savedJob = await newJob.save();

    res.json(savedJob);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});


router.get('/fetchalljobs', fetchemployer, async (req, res) => {
  try {
    const jobs = await Job.find({ employer: req.employer.id });
    res.json(jobs)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

// Update an existing job
router.put('/jobs/:jobId', async (req, res) => {
  try {
    const updatedJob = await Job.findOneAndUpdate(
      { _id: req.params.jobId, postedBy: req.user.id },
      req.body,
      { new: true }
    );

    if (!updatedJob) {
      return res.status(404).json({ error: 'Job not found' });
    }

    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update job' });
  }
});

// Delete an existing job
router.delete('/jobs/:jobId', async (req, res) => {
  try {
    const deletedJob = await Job.findOneAndDelete({
      _id: req.params.jobId,
      postedBy: req.user.id, 
    });

    if (!deletedJob) {
      return res.status(404).json({ error: 'Job not found' });
    }

    res.json(deletedJob);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete job' });
  }
});

module.exports = router;
