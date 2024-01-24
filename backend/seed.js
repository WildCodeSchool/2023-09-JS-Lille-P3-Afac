/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    queries.push(
      await database.query(
        `INSERT INTO user (lastname, firstname, email, src, password_hash)
        VALUES("Dall-E", "Salvador", "salvador.dalle@email.com", "./src/assets/Dall-e.png", "$argon2id$v=19$m=16,t=2,p=1$Y3RXSDY1Y210T1c0YjM5dg$IEvColWiVYtiyGDckiDY8Q"),
              ("Picassietttes", "Pablo", "pablo.picassiettes@email.com", "./src/assets/Picassiettes.png", "$argon2id$v=19$m=16,t=2,p=1$Y3RXSDY1Y210T1c0YjM5dg$IEvColWiVYtiyGDckiDY8Q"),
              ("Khaloops", "Frida", "frida.kahloops@email.com", "./src/assets/kahloops.png", "$argon2id$v=19$m=16,t=2,p=1$Y3RXSDY1Y210T1c0YjM5dg$IEvColWiVYtiyGDckiDY8Q"),
              ("Monnaie", "Claude", "claude.monnaie@email.com", "./src/assets/monnaie.png", "$argon2id$v=19$m=16,t=2,p=1$Y3RXSDY1Y210T1c0YjM5dg$IEvColWiVYtiyGDckiDY8Q"),
              ("Reblanc", "Auguste", "auguste.reblanc@email.com", "./src/assets/reblanc.png", "$argon2id$v=19$m=16,t=2,p=1$Y3RXSDY1Y210T1c0YjM5dg$IEvColWiVYtiyGDckiDY8Q"),
              ("Chacaille", "Marc", "marc.chacaille@email.com", "./src/assets/chacaille.png", "$argon2id$v=19$m=16,t=2,p=1$Y3RXSDY1Y210T1c0YjM5dg$IEvColWiVYtiyGDckiDY8Q"),
              ("Delabière", "Eugène", "eugene.delabiere@email.com", "./src/assets/Delabiere.png", "$argon2id$v=19$m=16,t=2,p=1$Y3RXSDY1Y210T1c0YjM5dg$IEvColWiVYtiyGDckiDY8Q"),
              ("Klimteastwood", "Gustave", "gustave.klimteastwood@email.com", "./src/assets/Klimteastwood.png", "$argon2id$v=19$m=16,t=2,p=1$Y3RXSDY1Y210T1c0YjM5dg$IEvColWiVYtiyGDckiDY8Q")`
      )
    );

    for (let i = 1; i < 9; i += 1) {
      queries.push(
        database.query("INSERT INTO logged_user(user_id) VALUES (?)", [i])
      );
    }

    for (let i = 1; i < 9; i += 1) {
      queries.push(
        database.query(
          `INSERT INTO artist (biography, user_id)
        VALUES(?, ?)`,
          [faker.lorem.paragraphs(), i]
        )
      );
    }

    queries.push(
      await database.query(
        `INSERT INTO artwork (title, technique, artwork_year, format, source, alt, user_id_ar)
        VALUES("Abris-côtier", "Aquarelle", 2022, "800x600", "./src/assets/shelterWithFrame.png", "Paysage de la côte réunionnaise pendant l'été 2021", 7),
              ("Piton de la fournaise", "Dessin", 2023, "1024x1024", "./src/assets/PeakWithFrame.png", "Paysage du piton de la fournaise", 2),
              ("Le rougail saucisse local", "Aquarelle", 2023, "1024x1024", "./src/assets/rougailWithFrame.png", "Le plat traditionnel réunionnais par excellence", 1),
              ("Soirée traditionnelle réunionnaise", "Aquarelle", 2023, "1024x1024", "./src/assets/partyWithFrame.png", "Une soirée animée et tradionnelle de l'ile de la Réunion", 3),
              ("Village de la Réunion", "Dessin", 2023, "1024x1024", "./src/assets/villageWithFrame.png", "Une journée classique dans un village de la Réunion", 8),
              ("Femme réunionnaise", "Aquarelle", 2023, "1024x1024", "./src/assets/womanWithWholeFrame.png", "Une femme sur la plage de l'ile de la Réunion", 1),
              ("Le réunionnais ultime", "Aquarelle", 2023, "1024x1024", "./src/assets/Payet.png", "Le plus grand réunionnais de l'histoire", 4),
              ("L'ile de la Réunion", "Aquarelle", 2023, "1024x1024", "./src/assets/fusionColorWithFrame.png", "L'ile de la Réunion avec de fortes nuances roses et bleues", 5),
              ("L'ile de la Réunion", "Aquarelle", 2023, "1024x1024", "./src/assets/playaWithFrame.png", "Plage de l'ile de la Réunion", 6),
              ("L'ile de la Réunion", "Aquarelle", 2023, "1024x1024", "./src/assets/blueWithFrame.png", "L'ile de la Réunion avec de fortes nuances bleues", 8),
              ("L'ile de la Réunion", "Aquarelle", 2023, "1024x1024", "./src/assets/pinkVillage.png", "L'ile de la Réunion avec de fortes nuances roses", 2),
              ("Rougail-Saucisses", "Aquarelle", 2023, "1024x1024", "./src/assets/roseVillageWithFrame.png", "L'ile de la Réunion avec de fortes nuances roses", 1),
              ("Réunion", "Aquarelle", 2020, "1024x1024", "./src/assets/Reunion.jpg", "Aquarelle 'Reunion' par Pablo Picassiettes", 2),
              ("Le Piton", "Dessin", 2004, "1282 x 852", "./src/assets/Piton.png", "Dessin 'Le Piton' par Auguste Reblanc", 5)`
      )
    );

    for (let i = 1; i < 7; i += 1) {
      const rand = Math.floor(Math.min(Math.random() * 10 + 1, 3));
      for (let j = 0; j < rand; j += 1) {
        queries.push(
          database.query(
            `INSERT INTO anecdote (fact, artwork_id)
          VALUES(?, ?)`,
            [faker.lorem.paragraph(), i]
          )
        );
      }
    }

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
