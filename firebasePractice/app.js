//(function() {

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCbnrAPtUv1vUXa7SUdlwZAZdy6dYZTG4A",
    authDomain: "hotdogsandwich-be39e.firebaseapp.com",
    databaseURL: "https://hotdogsandwich-be39e.firebaseio.com",
    projectId: "hotdogsandwich-be39e",
    storageBucket: "hotdogsandwich-be39e.appspot.com",
    messagingSenderId: "585429640400"
};
firebase.initializeApp(config);
var firestore = firebase.firestore();

//which document am i going to save this data? from input text field
//need document reference for that:
//const docRef = firestore.collections("samples").doc("voteData");
const docRef = firestore.doc("samples/sandwhichData");

const outputHeader = document.querySelector("#hotDogOutput");
const inputTextField = document.querySelector("#latestHotDogStatus");
const saveButton = document.querySelector("#saveButton");
const loadButton = document.querySelector("#loadButton");



saveButton.addEventListener("click", function() {
    const textToSave = inputTextField.value;
    console.log("I am going to save " + textToSave + " to FireStore");
    docRef.set({
        hotDogStatus: textToSave
    }).then(function() {
        console.log("Status saved!");
    }).catch(function(error) {
        console.log("We got an error: ", error);
    });
})

loadButton.addEventListener("click", function() {
    docRef.get().then(function(doc) {
        if (doc && doc.exists) {
            const myData = doc.data();
            outputHeader.innerText = "Hot Dog Status: " + myData.hotDogStatus;
        }
    }).catch(function(error) {
        console.log("We Got an Error", error);
    });
});

//})();