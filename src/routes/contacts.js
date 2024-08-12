const express = require('express');
const { sendMail } = require('../functions/sendMail');
const { getCompanyTemplate, getClientTemplate } = require('../utils/getEmailTemplates');
const { db } = require('../configs/db');

const router = express.Router();

router.post('/contacts', async (req, res) => {
    try {
        const query = "INSERT INTO contacts SET ?";

        db.query(query, req.body, async (err) => {
            if(err) res.sendStatus(500).send(err);
            
            try {
                const clientEmailHtml = getClientTemplate(req.body);
                const companyEmailHtml = getCompanyTemplate(req.body);
                await sendMail(data.name, data.email, "Enquiry", clientEmailHtml);
                await sendMail(data.name, 'info@consumerclaimshelp.co.uk', "Enquiry", companyEmailHtml);
                res.sendStatus(200);
            } catch (err) {
                res.status(500).send(err);
            }
        })
        
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;
