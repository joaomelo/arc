// // import { pullProfile }

// function convertTeamToDoc (team) {
//   const doc = {
//     title: team.title,
//     owner: team.owner.id
//   };

//   const membersTypes = ['editors', 'viewers'];
//   membersTypes.forEach(type => {
//     if (team[type] && team[type].length > 0) {
//       doc[type] = team[type].map(member => member.id);
//     }
//   });

//   return doc;
// }

// function convertDocsToTeams (docs) {
//   return docs.map(doc => convertDocToTeam(doc));
// }

// function convertDocToTeam (doc) {
//   if (!doc.exists) return;
//   const data = { ...doc.data() };

//   const team = {
//     collection: 'teams',
//     id: doc.id,
//     tittle: data.title
//   };

//   return team;
// }

// async function convertToItem (doc) {
//   const item = {};
//   const firedata = { ...doc.data() };

//   item.collection = doc.ref.parent.id;
//   item.id = doc.id;

//   for (const key of Object.keys(firedata)) {
//     item[key] = await convertToItemData(firedata[key]);
//   }

//   return item;
// }

// async function convertToItemData (firedata) {
//   if (firedata instanceof firebase.firestore.DocumentReference) {
//     const refDoc = await firedata.get();
//     const itemField = await convertToItem(refDoc);
//     return itemField;
//   }

//   if (Array.isArray(firedata)) {
//     const promises = firedata.map(i => convertToItemData(i));
//     const arrayField = await Promise.all(promises);
//     return arrayField;
//   }

//   if (isPlainObject(firedata) && Object.keys(firedata).length > 0) {
//     const objectField = {};
//     Object.keys(firedata).forEach(k => convertToItemData(firedata[k]).then(v => { objectField[k] = v; }));
//     return objectField;
//   }

//   if (firedata instanceof firebase.firestore.Timestamp) {
//     const dateField = firedata.toDate();
//     return dateField;
//   }

//   return firedata;
// }

// function convertToDocument (item) {
//   const doc = {};

//   Object.keys(item).forEach(key => {
//     if (![null, undefined].includes(item[key]) && !['id', 'collection'].includes(key)) {
//       if (Array.isArray(item[key])) {
//         if (item[key].length > 0) {
//           doc[key] = item[key].map(i => i.collection ? convertToReference(i.collection, i.id) : i);
//         }
//       } else if (item[key].collection) {
//         doc[key] = convertToReference(item[key].collection, item[key].id);
//       } else {
//         doc[key] = item[key];
//       }
//     }
//   });
//   return doc;
// }

// function convertToReference (collection, id) {
//   return db.collection(collection).doc(id);
// }

// export { convertTeamToDoc, convertDocsToTeams };
