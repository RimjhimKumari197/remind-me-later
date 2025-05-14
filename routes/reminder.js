const Reminder = require('../models/Reminder');
const express=require("express");
const router = express.Router();
router.post('/', async (req, res) => {
    const { date, time, message} = req.body;
  
    if (!date || !time || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
  
    try {
      const newReminder = new Reminder({ date, time, message });
      await newReminder.save();
      res.status(201).json({ message: 'Reminder saved successfully.', reminder: newReminder });
    } catch (err) {
      res.status(500).json({ error: 'Server error.' });
    }
});
module.exports = router;