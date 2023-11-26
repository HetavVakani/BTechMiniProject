const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Endpoint 1
app.get('/', (req, res) => {
    res.json({
        "IT-496 CP03": "G10 Data Diggers"
    });
});

// Endpoint 2
app.get('/predict', (req, res) => {
    res.json({
        "Result_of_Remaining_Mathces": [
            "Sri Lanka",
            "Afghanistan",
            "Pakistan",
            "England",
            "India",
            "Bangladesh",
            "Afghanistan",
            "England",
            "New Zealand",
            "Afghanistan",
            "Australia",
            "England",
            "India"
        ]
    });
});

// Endpoint 3
app.get('/predict-semifinalists', (req, res) => {
    res.json({
        "tables": {
            "0": "India",
            "1": "South Africa",
            "2": "Australia",
            "3": "New Zealand"
        }
    });
});

// Endpoint 4
app.get('/predict-finalists', (req, res) => {
    res.json({
        "final teams": [
            "India",
            "Australia"
        ]
    });
});

// Endpoint 5
app.get('/predict-winner', (req, res) => {
    res.json({
        "winner": [
            "Australia"
        ]
    });
});

// Endpoint 6
app.get('/predict-eleven', (req, res) => {
    res.json({
        "India": [
            "RA Jadeja",
            "V Kohli",
            "SS Iyer",
            "Shubhman Gill",
            "RG Sharma",
            "KL Rahul",
            "SA Yadav",
            "Mohammed Shami",
            "Kuldeep Yadav",
            "JJ Bumrah",
            "Ishan Kishan"
        ],
        "Australia": [
            "TM Head",
            "SPD Smith",
            "PJ Cummins",
            "JR Hazlewood",
            "MA Starc",
            "MP Stoinis",
            "MR Marsh",
            "JP Inglis",
            "M Labuschagne",
            "GJ Maxwell",
            "DA Warner"
        ]
    });
});

// Endpoint 7
app.get('/predict-batsman', (req, res) => {
    res.json({
        "Top Scorers" : [
            "Q de Kock - 709",
            "RG Sharma - 589",
            "DA Warner - 569",
            "V Kohli - 558",
            "S Samarawickrama - 526",
            "R Ravindra - 524",
            "Mohammad Rizwan - 484",
            "HE van der Dussen - 462",
            "AK Markram - 461",
            "DJ Mitchell - 456",
            "P Nissanka - 448",
            "H Klaasen - 425",
            "Abdullah Shafique - 417",
            "DP Conway - 382",
            "Mahmudullah - 362"
        ]
        
    });
});

// Endpoint 8
app.get('/predict-bowler', (req, res) => {
    res.json({
        "Top Wicket Takers": [
        "Shaheen Shah Afridi - 18",
        "M Jansen - 15",
        "MJ Santner - 15",
        "Mohammed Shami - 13",
        "JJ Bumrah - 13",
        "A Zampa - 12",
        "LV van Beek - 12",
        "BFW de Leede - 11",
        "PA van Meekeren - 11",
        "Mahedi Hasan - 10",
        "AU Rashid - 9",
        "A Dutt - 8",
        "Haris Rauf - 8",
        "CN Ackermann - 7",
        "D Madushanka - 7"
        ]
        
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
