const mongoose = require("mongoose");

const MONGO_URI = "mongodb://root@localhost:27017/root?authSource=admin"; //changer l'url de la BDD quand mongodb remarchera

async function connectToDatabase() {
  try {
    await mongoose.connect(MONGO_URI, {});
    console.log("Connecté à MongoDB avec Mongoose");
  } catch (error) {
    console.error("Erreur de connexion à MongoDB:", error);
    process.exit(1);
  }
}

module.exports.connectToDatabase = connectToDatabase;
