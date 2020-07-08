const { conversation, MediaObject } = require('@assistant/conversation');
const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialize Firestore database
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const queue = db.collection('queue').doc('0');

const app = conversation({debug: true});

app.handle('addToSongQueue', conv => {
  const songName = conv.session.params.songName;
  // console.log("Song Name: ", songName);
  
  db.collection("tracks").where("song", "==", songName).then(function(snapshot) {
    console.log("snapshot: ", snapshot.val());
  });
  
  return;
});

app.handle('playQueue', conv => {
  return queue.get()
  .then(doc => {
    if (!doc.exists) {
      conv.add('No data found in the database!');
    } else {
      conv.add(`The value "${doc.data().entry}" was read from Firestore.`);
    }
    return Promise.resolve('Read complete');
  }).catch(err => {
    conv.add('Error accessing Firestore database');
  });
});

app.handle('writeToFirestore', conv => {
  const databaseEntry = conv.session.params.databaseEntry;
  return db.runTransaction(t => {
    t.set(dbDoc, {entry: databaseEntry});
    return Promise.resolve('Write complete');
  }).then(doc => {
    conv.add(`Wrote "${databaseEntry}" to the Firestore database.`);
  }).catch(err => {
    console.log(`Error writing to Firestore: ${err}`);
    conv.add(`Failed to write "${databaseEntry}" to the Firestore database.`);
    conv.add('Please go to https://console.firebase.google.com on the same project and create the Firestore database to enable this sample to work');
  });
});

app.handle('readFromFirestore', conv => {
  return dbDoc.get()
    .then(doc => {
      if (!doc.exists) {
        conv.add('No data found in the database!');
      } else {
        conv.add(`The value "${doc.data().entry}" was read from Firestore.`);
      }
      return Promise.resolve('Read complete');
    }).catch(err => {
      conv.add('Error accessing Firestore database');
      conv.add('Please go to https://console.firebase.google.com on the same project and create the Firestore database to enable this sample to work');
    });
});

app.handle('aintmusic', conv => {
  conv.add("Up next, some one added Bill Withers Aint No Sunshine.");
  conv.add(new MediaObject({
    name: 'Aint no sunshine',
    url: "https://firebasestorage.googleapis.com/v0/b/club-d5626.appspot.com/o/bill%20withers%20-%20ain't%20no%20sunshine.mp3?alt=media&token=ef6d5796-0036-47d8-a6b4-db65b38e3671",
    description: 'A soulful tune',
  }));
})
exports.ActionsOnGoogleFulfillment = functions.https.onRequest(app);
