//Comment added on uploaded file

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the CloudFirestore Database.
const admin = require('firebase-admin');
admin.initializeApp();


exports.marianasPoints = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const pointsInGame = req.query.pointsEarned;
  //const userID = req.query.userID;
  const finalTickoins = pointsInGame * 10  + 1;

  const marianasRef = await admin.firestore().collection('users_info').doc('LqUSggrY6Am5vQvA3yvE').collection('highscores_minigames').doc('marianastrench');

  //marianasRef.set(data);
  //const queryRes = marianasRef('highscore','>=',0);

  //if(queryRes < finalTickoins){

  
   marianasRef.set(
       {highscore: finalTickoins},
       {last_date_modified: Date.now()})


   res.json({result: `Tickoins added to your balance: ${finalTickoins}.`});

  /*}else{
    res.json({result: `points earned are less than actual.`});
  }*/
  
  //res.redirect(303, snapshot.ref.toString());
  
});
