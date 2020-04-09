// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
import * as functions from 'firebase-functions';

// The Firebase Admin SDK to access the Firebase Realtime Database.
import * as admin from 'firebase-admin';
admin.initializeApp();


/*
Context: Es el usuario que está llamando la function
Data: Debería ser el email que se pase por parametro;
*/

exports.addAdmin = functions.https.onCall((data, context) => {

  // if (context.auth){
  //   if(context.auth.token.isAdmin !== true) return { error: "Request not authorized. User must be a admin to fulfill request." };
  // }

  return grantAdminRole(data.email).then(() => {
    return { result: `Request fulfilled! ${data.email} is an admin now!` }
  });
});

exports.addRole = functions.https.onCall((data, context) => {
  // if (context.auth){
  //   if(context.auth.token.isAdmin !== true) return { error: "Request not authorized. User must be a admin to fulfill request." };
  // }

  return grantRole(data.role, data.email).then(() => {
    return { result: `Request fulfilled! ${data.email} is an ${data.role} now!` }
  });
});

async function grantAdminRole(email: string): Promise<void> {

  //Get the user token by its email
  const user = await admin.auth().getUserByEmail(email);

  // Si ya tiene rol, retorne
  if (user.customClaims && (user.customClaims as any).isAdmin === true) return;

  // Si no tiene rol, seteelo
  return admin.auth().setCustomUserClaims(user.uid, { isAdmin: true, });

};

async function grantRole(role: string, email: string): Promise<void> {

  //Get the user token by its email
  const user = await admin.auth().getUserByEmail(email);

  // Si ya tiene rol, retorne
  if (user.customClaims && user.customClaims[role] === true) return;

  // Si no tiene rol, seteelo
  return admin.auth().setCustomUserClaims(user.uid, { [role]: true, });


};
