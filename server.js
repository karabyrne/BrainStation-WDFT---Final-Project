const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const bodyParser = require('body-parser');

const Profession = require('./models/Profession');
const Industry = require ('./models/Industry');
const Education = require ('./models/Education');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // Serve static assets
app.use(express.static(path.resolve(__dirname, 'front/build')));
  console.log(__dirname);
  console.log(path.resolve(__dirname, 'front/build'))
// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'front/build', 'index.html'));
  });

mongoose.connect(process.env.MONGODB_URI  || 'mongodb://localhost:27017/careers');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db/")
});


// get all professions

app.get('/api/v1/professions', (req,res) =>{
    // access database, get a list of professions, then send back list using
    // the res object
    Industry.find({})
        .then(industry =>{
            if(!industry) {
                res.status(404).send("Nothing found")
            } else {
                res.json(industry);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// get a single profession by id

// app.get('/professions/:name', (req, res) => {
//     let name = req.params.name;

//     Profession.findById(name)
//         .then(profession => {
//             if(!profession){
//                 res.status(404).send("Nothing found")
//             } else {
//                 res.json(profession)
//             }
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         })

// });

app.get('/api/v1/professions/:industry', (req, res) => {
    let industrySlug = req.params.industry; // get slug from url

    // get the industry by the slug, so we know it's _id

    // once we get the industry, use it's _id to get all the professions
    // that have that industry_id
    Industry.findOne({slug: industrySlug})
        .then((industry)=>{
            console.log(industry);
            return Profession.find({industry: industry.name})
        })
        .then((professions) => {
            if(!professions){
                res.status(404).send("Nothing found")
            } else {
                console.log(professions);
                res.json(professions)
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Something went wrong")
        })



});

app.get('/api/v1/education/:id', (req, res) => {
    let id = req.params.id; // get slug from url

    // get the industry by the slug, so we know it's _id

    // once we get the industry, use it's _id to get all the professions
    // that have that industry_id
    Education.findById(id)
    .then(education => {
        res.json(education);
    })
    .catch(err => {
        console.log(err);
    })


});

app.get('/api/v1/professions/:industry/:name', (req, res) => {
    // get a profession's details
    let nameOfProfession = req.params.name; // get name from url

    // get the industry by the slug, so we know it's _id

    // once we get the industry, use it's _id to get all the professions
    // that have that industry_id
    Profession.findOne({slug: nameOfProfession})
        .then((profession)=>{
            console.log(profession);
            res.json(profession)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Something went wrong")
        })



});




app.post('/api/v1/professions/healthcare', (req, res) => {
    console.log(req.body);

    const IndustryProfession = new Profession(req.body);

    IndustryProfession.save()
        .then(savedProfession => {
            console.log(savedProfession);
            res.json(savedProfession);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
})

app.post('/api/v1/professions', (req, res) => {
    console.log(req.body);

    const IndustryName = new Industry(req.body);

    IndustryName.save()
        .then(savedIndustry => {
            console.log(savedIndustry);
            res.json(savedIndustry);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
})

app.post('/api/v1/education', (req, res) => {
    console.log(req.body);

    const RequiredEducation = new Education(req.body);

    RequiredEducation.save()
        .then(savedEducation => {
            console.log(savedEducation);
            res.json(savedEducation);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
})


// app.listen(8080, () => {
//     console.log('Server listening on 8080');
// });

module.exports = app; 