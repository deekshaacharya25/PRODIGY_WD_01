const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
    const formData = req.body;

    // Save the form data to a JSON file
    fs.writeFile('formData.json', JSON.stringify(formData, null, 2), (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error saving data.');
        } else {
            res.send('Your message has been sent successfully.');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
