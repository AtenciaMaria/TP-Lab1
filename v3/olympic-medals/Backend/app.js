const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/add-medal', (req, res) => {
    const { country, gold, silver, bronze } = req.body;

    db.run(`INSERT INTO medals (country, gold, silver, bronze) VALUES (?, ?, ?, ?)`, 
        [country, gold, silver, bronze], function(err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ id: this.lastID });
        });
});

app.get('/medals', (req, res) => {
    db.all('SELECT * FROM medals', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

