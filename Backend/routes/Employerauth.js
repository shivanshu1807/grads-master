// employerRoutes.js
const express = require('express');
const router = express.Router();
const Employer = require('../models/employer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchemployer = require("../middleware/fetchemployer");
const { body, validationResult } = require('express-validator');

// Route 1: Create an Employer using POST "/api/auth/createemployer". No login required
router.post('/createemployer', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('phnno', 'Enter a valid phone number').isMobilePhone(),
    body('companyname', 'Enter a valid company name').isLength({ min: 3 }),
    body('pincode', 'Enter a valid pincode').isLength({ min: 6 }),
    body('address', 'Enter a valid address').isLength({ min: 3 }),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    let success = false;

    // If there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    try {
        // Check whether the employer with this email already exists
        let employer = await Employer.findOne({ email: req.body.email });
        if (employer) {
            return res.status(400).json({ success, error: "Sorry, an employer with this email already exists" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        // Create a new employer
        employer = await Employer.create({
            name: req.body.name,
            email: req.body.email,
            phnno: req.body.phnno,
            companyname: req.body.companyname,
            pincode: req.body.pincode,
            address: req.body.address,
            password: secPass
        });

        const data = {
            employer: {
                id: employer.id
            }
        }

        const JWT_SECRET = "red"; // Use a different secret for employer
        const authtoken = jwt.sign(data, JWT_SECRET);

        success = true;
        res.json({ success, authtoken })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

// Route 2: Authenticate an Employer using POST "/api/auth/loginemployer". No login required
router.post('/loginemployer', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let employer = await Employer.findOne({ email });
        if (!employer) {
            return res.status(404).json({ error: "Please try to login with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, employer.password);
        if (!passwordCompare) {
            success = false
            return res.status(400).json({ success, error: "Please try to login with correct credentials" })
        }

        const data = {
            employer: {
                id: employer.id
            }
        }

        const JWT_SECRET = "red"; // Use a different secret for employer
        const authtoken = jwt.sign(data, JWT_SECRET);

        success = true;
        res.json({ success, authtoken })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

// Route to get employer details
router.post('/getemployer', fetchemployer, async (req,res) => {
    try{
        employerId = req.employer.id;
        const employer = await Employer.findById(employerId).select("-password")
        res.json(employer)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

module.exports = router;
