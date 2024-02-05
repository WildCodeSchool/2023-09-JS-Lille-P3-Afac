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
        VALUES("Dall-E", "Salvador", "salvador.dalle@email.com", "/assets/images/Dall-e.png", "$argon2id$v=19$m=16,t=2,p=1$Y3RXSDY1Y210T1c0YjM5dg$IEvColWiVYtiyGDckiDY8Q"),
              ("Picassietttes", "Pablo", "pablo.picassiettes@email.com", "/assets/images/Picassiettes.png", "$argon2id$v=19$m=16,t=2,p=1$Y3RXSDY1Y210T1c0YjM5dg$IEvColWiVYtiyGDckiDY8Q"),
              ("Khaloops", "Frida", "frida.kahloops@email.com", "/assets/images/kahloops.png", "$argon2id$v=19$m=16,t=2,p=1$Y3RXSDY1Y210T1c0YjM5dg$IEvColWiVYtiyGDckiDY8Q"),
              ("Monnaie", "Claude", "claude.monnaie@email.com", "/assets/images/monnaie.png", "$argon2id$v=19$m=16,t=2,p=1$Y3RXSDY1Y210T1c0YjM5dg$IEvColWiVYtiyGDckiDY8Q"),
              ("Reblanc", "Auguste", "auguste.reblanc@email.com", "/assets/images/reblanc.png", "$argon2id$v=19$m=16,t=2,p=1$Y3RXSDY1Y210T1c0YjM5dg$IEvColWiVYtiyGDckiDY8Q"),
              ("Chacaille", "Marc", "marc.chacaille@email.com", "/assets/images/chacaille.png", "$argon2id$v=19$m=16,t=2,p=1$Y3RXSDY1Y210T1c0YjM5dg$IEvColWiVYtiyGDckiDY8Q"),
              ("Delabière", "Eugène", "eugene.delabiere@email.com", "/assets/images/Delabiere.png", "$argon2id$v=19$m=16,t=2,p=1$Y3RXSDY1Y210T1c0YjM5dg$IEvColWiVYtiyGDckiDY8Q"),
              ("Klimteastwood", "Gustave", "gustave.klimteastwood@email.com", "/assets/images/Klimteastwood.png", "$argon2id$v=19$m=16,t=2,p=1$Y3RXSDY1Y210T1c0YjM5dg$IEvColWiVYtiyGDckiDY8Q")`
      )
    );

    for (let i = 1; i < 9; i += 1) {
      queries.push(
        database.query("INSERT INTO logged_user(user_id) VALUES (?)", [i])
      );
    }

    queries.push(
      await database.query(
        `INSERT INTO artist (biography, user_id)
            VALUES("Née au cœur des montagnes andalouses, Frida Khaloops a grandi entourée de la splendeur naturelle qui a façonné son œuvre artistique. Les vallées luxuriantes, les rivières cristallines et les ciels incandescents ont nourri son âme artistique dès son plus jeune âge. Inspirée par la nature en perpétuel changement, Frida utilise une palette de couleurs dynamique pour capturer l'énergie vivante de la terre, faisant de chacune de ses toiles une célébration de la vie.", 3), ("Issu des ruelles labyrinthiques de Brooklyn, Claude Monnaie incarne l'esprit urbain rebelle. Sa jeunesse au sein de cette jungle de béton l'a amené à voir l'art là où d'autres ne voyaient que la monotonie. En explorant des formes d'expression alternatives, Claude a élevé le graffiti au rang d'art, insufflant une magie visuelle dans des espaces souvent ignorés.", 4), ("Élevée dans une petite ville où les contes de fées prenaient vie, Marc Chacaille a transformé son amour pour les récits fantastiques en une carrière artistique. Les pages des livres étaient ses fenêtres vers des mondes imaginaires, et aujourd'hui, ses illustrations magiques transportent les observateurs dans des royaumes où la réalité et la fantaisie se mêlent harmonieusement.", 6), ("Auguste Reblanc, maître du réalisme, capture la vie quotidienne avec une précision frappante. Ses personnages sont comme des acteurs capturés sur une scène naturelle, offrant une profondeur narrative remarquable.", 5), ("Les personnages de Salvador Dall-E émergent de mondes oniriques. Leurs formes étranges et distordues invitent à une réflexion profonde sur la réalité et l'illusion, créant une expérience visuelle étrange et fascinante.", 1), ("Eugène Delabière, maître de la lumière, façonne des personnages baignés dans une aura mystique. Ses œuvres captivent par l''utilisation judicieuse de la lumière et de l''ombre, ajoutant une dimension presque magique.", 7), ("Gustave Klimteastwood fusionne l'art nouveau et le symbolisme, présentant des personnages ornés de motifs floraux et de formes sensuelles. Ses œuvres évoquent une élégance mystérieuse, chaque personnage étant une énigme visuelle à déchiffrer.", 8), ("Pionnier de l'art numérique, il explore les frontières entre la réalité et la technologie. Ses toiles ne sont pas seulement des œuvres statiques, mais des portails interactifs vers des mondes virtuels, où l'art devient une expérience immersive et futuriste.", 2)`
      )
    );

    queries.push(
      await database.query(
        `INSERT INTO artwork (title, technique, artwork_year, format, source, alt, user_id_ar)
        VALUES("Abri-côtier", "Aquarelle", 2022, "800x600", "/assets/images/shelterWithFrame.png", "Paysage de la côte réunionnaise pendant l'été 2021", 7),
              ("Piton de la fournaise", "Dessin", 2023, "1024x1024", "/assets/images/PeakWithFrame.png", "Paysage du piton de la fournaise", 2),
              ("Le rougail saucisse local", "Aquarelle", 2023, "1024x1024", "/assets/images/rougailWithFrame.png", "Le plat traditionnel réunionnais par excellence", 8),
              ("Soirée traditionnelle réunionnaise", "Aquarelle", 2023, "1024x1024", "/assets/images/partyWithFrame.png", "Une soirée animée et tradionnelle de l'ile de la Réunion", 3),
              ("Village de la Réunion", "Dessin", 2023, "1024x1024", "/assets/images/villageWithFrame.png", "Une journée classique dans un village de la Réunion", 6),
              ("Femme réunionnaise", "Aquarelle", 2023, "1024x1024", "/assets/images/womanWithWholeFrame.png", "Une femme sur la plage de l'ile de la Réunion", 1),
              ("Le réunionnais ultime", "Aquarelle", 2023, "1024x1024", "/assets/images/Payet.png", "Le plus grand réunionnais de l'histoire", 4),
              ("Le piton rose et bleu", "Aquarelle", 2023, "1024x1024", "/assets/images/fusionColorWithFrame.png", "L'ile de la Réunion avec de fortes nuances roses et bleues", 5),
              ("Littoral réunionnais", "Aquarelle", 2023, "1024x1024", "/assets/images/playaWithFrame.png", "Plage de l'ile de la Réunion", 6),
              ("Vue globale de La Réunion", "Aquarelle", 2023, "1024x1024", "/assets/images/blueWithFrame.png", "L'ile de la Réunion avec de fortes nuances bleues", 6),
              ("L'île intense", "Aquarelle", 2023, "1024x1024", "/assets/images/pinkVillage.png", "L'ile de la Réunion avec de fortes nuances roses", 2),
              ("La rosée matinale", "Aquarelle", 2023, "1024x1024", "/assets/images/roseVillageWithFrame.png", "L'ile de la Réunion avec de fortes nuances roses", 1),
              ("Aurore", "Aquarelle", 2020, "1024x1024", "/assets/images/Reunion.jpg", "Aquarelle 'Reunion' par Pablo Picassiettes", 2)`
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
