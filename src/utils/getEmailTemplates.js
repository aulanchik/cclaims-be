const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

const getTemplate = (templateName) => {
    const templatePath = path.join(__dirname, `../templates/${templateName}.html`);
    const templateHtml = fs.readFileSync(templatePath, 'utf8');
    return handlebars.compile(templateHtml);
}

const getClientTemplate = (data) => {
    const template = getTemplate('ThankYou');
    return template({recepientName: data});
}

const getCompanyTemplate = (data) => {
    const template = getTemplate('Enquire');
    return template({
        companyName: data.companyName,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
    });
}

module.exports = {
    getClientTemplate,
    getCompanyTemplate
}
