const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Lead = require('../models/lead');

// Create a new lead
router.post('/new', (req, res, next) => {
    // Save new supplier
    const lead = new Lead({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        userId: mongoose.Types.ObjectId(),
        email: req.body.email,
        facebook_account: req.body.facebookAccount,
        instagram_account: req.body.instagramAccount,
        tel: req.body.tel,
        created_at: new Date()
    })
    lead.save()
    .then(lead => {
        res.status(201).json({
            statusCode: 201,
            message: 'Lead saved successfully',
            lead: lead
        })
    })
    .catch(err => {
        res.status(500).json({ error: err, statusCode: 500 })
    })
})

// Update stats of a lead
router.patch('/stats/update/:id', (req, res, next) => {
    Lead.findById(req.params.id)
    .exec()
    .then(lead => {
        if (lead) {
            Lead.updateOne({ _id: lead._id }, {
                $set: {
                    engagement_rate: req.body.engagement_rate,
                    status: req.body.status,
                    qualification_status: req.body.qualification_status,
                }
            })
            .then(lead => {
                res.status(201).json({
                    message: 'Lead updated successfully',
                    lead: lead
                })
            })
            .catch(err => {
                res.status(500).json({ error: err })
            })
        } else {
            res.status(403).json({ error: "No Lead found" })
        }
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
})

// Update personnam information of a lead
router.patch('/infos/update/:id', (req, res, next) => {
    Lead.findById(req.params.id)
    .exec()
    .then(lead => {
        if (lead) {
            Lead.updateOne({ _id: lead._id }, {
                $set: {
                    name: req.body.name,
                    email: req.body.email,
                    facebook_account: req.body.facebookAccount,
                    instagram_account: req.body.instagramAccount,
                    tel: req.body.tel,
                    website: req.body.website,
                    observation: req.body.observation
                }
            })
            .then(lead => {
                res.status(201).json({
                    message: 'Lead updated successfully',
                    lead: lead
                })
            })
            .catch(err => {
                res.status(500).json({ error: err })
            })
        } else {
            res.status(403).json({ error: "No Lead found" })
        }
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
})

// Search lead by name or email
router.get('/:query/search', (req, res, next) => {
    const query = req.params.query.toString()
    User.find({ $or: [{name: new RegExp(query, 'i')}, {email: new RegExp(query, 'i')} ]})
        .exec()
        .then(users => {
            return res.status(201).json({
                users: users
            })
        })
        .catch(err => {
            return res.status(500).json({ error: err })
        })
})


// delete a lead
router.delete('/:userId', (req, res, next) => {
    User.remove({ _id: req.params.userId })
        .exec()
        .then(result => {
            return res.status(200).json({
                message: "User deleted"
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err })
        })
});


// Get a single lead
router.get('/:userId', (req, res, next) => {
    User.findOne({ _id: req.params.userId })
        .exec()
        .then(user => {
            return res.status(200).json({
                user: user
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err })
        })
});


// Get all leads
router.get('/', (req, res, next) => {
    User.find({role: "user"}).sort({ $natural: -1 })
    .exec()
        .then(users => {
        return res.status(201).json({
            users: users
        })
    })
    .catch(err => {
        return res.status(500).json({ error: err })
    })
})

// count all lead
router.get('/count/all', (req, res, next) => {
    User.find({ role: "user" }).count()
        .exec()
        .then(n => {
            return res.status(201).json({
                n: n
            })
        })
        .catch(err => {
            return res.status(500).json({ error: err })
        })
})

module.exports = router;