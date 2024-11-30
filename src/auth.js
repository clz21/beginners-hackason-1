import { db } from "./firebase.js";
import { collection, getDocs, addDoc } from "firebase/firestore";

//読み込みテスト
async function listDocuments(db) {
    const citiesCol = collection(db, "OneTimePass");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    console.log(cityList);
}
listDocuments(db);

// //書き込みテスト
// async function addOneTimePass(db, name, pass) {
//     try {
//         const docRef = await addDoc(collection(db, "OneTimePass"), {
//             name: name,
//             pass: pass,
//             timestamp: new Date(),
//         });
//         console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }
// }
// const pass = generateOneTimePasscode();
// addOneTimePass(db, pass, pass);

//ワンタイムパスコードを生成
function generateOneTimePasscode() {
    const length = 6;
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let passcode = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        passcode += characters[randomIndex];
    }
    return passcode;
}

// ワンタイムパスコードを認証
function verifyOneTimePasscode(inputPasscode, actualPasscode) {
    return inputPasscode === actualPasscode;
}
// alert(generateOneTimePasscode());

document.querySelector("button").onclick = function () {
    const result = generateOneTimePasscode();
    document.querySelector("p").innerText = result;
};

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const passcode = document.getElementById("passcode").value;
    loginGoogle();
    // alert("Entered passcode: " + passcode);
});
