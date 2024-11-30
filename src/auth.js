import { db } from "./firebase.js";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

const NAME = "syachihoco";

//ワンタイムパスコードを生成
function generateOneTimePasscode() {
    const length = 6;
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let pass = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        pass += characters[randomIndex];
    }
    addOneTimePass(db, NAME, pass);
    return pass;
}

// ワンタイムパスコードを認証
function verifyOneTimePasscode(inputPasscode, actualPasscode) {
    return inputPasscode === actualPasscode;
}
// alert(generateOneTimePasscode());

// コレクション内に一致するドキュメントを検索
async function findMatchingDocument(db, name, pass) {
    const q = query(collection(db, "OneTimePass"));
    const querySnapshot = await getDocs(q);
    let result = false;
    for (let i = 0; i < querySnapshot.docs.length; i++) {
        let doc = querySnapshot.docs[i];
        if (doc.data().name === name && doc.data().pass === pass) {
            result = true;
            break;
        }
    }
    return result;
}

if (findMatchingDocument(db, "OneTimePass", "sample-name", "sample-pass")) {
    console.log("OK");
} else {
    console.log("NG");
}

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

//firebaseへの書き込み
async function addOneTimePass(db, name, pass) {
    try {
        const docRef = await addDoc(collection(db, "OneTimePass"), {
            name: name,
            pass: pass,
            timestamp: new Date(),
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
// //読み込みテスト
// async function listDocuments(db) {
//     const citiesCol = collection(db, "OneTimePass");
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map((doc) => doc.data());
//     console.log(cityList);
// }
// listDocuments(db);
