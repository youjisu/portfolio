export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAk6olxPrhRE3mzCHQYHmvOHQ44F3ub2YY",
    authDomain: "jisu-world.firebaseapp.com",
    databaseURL: "https://jisu-world.firebaseio.com",
    projectId: "jisu-world",
    storageBucket: "jisu-world.appspot.com",
    messagingSenderId: "574618850027",
    appId: "1:574618850027:web:d238f06ef018bd5be5e4ae"
};

export const snapshotToArray = snapshot => {
    let returnArray = []
    snapshot.forEach(element => {
        let item = element.val()
        item.key = element.key
        returnArray.push(item)
    });
    return returnArray
}