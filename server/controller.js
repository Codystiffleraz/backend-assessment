const create = require('./db.json')
let globalID = 3
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A faithful friend is a strong defense.", "Advice, when most needed, is least heeded.", "Competence like yours is underrated.", "For hate is never conquered by hate. Hate is conquered by love.", "Observe all men, but most of all yourself."]

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    createCompliment: (req, res) => {

      
        res.status(200).send(createCompliment);
    }
}

