import { collection, addDoc } from "firebase/firestore";

//firebaseへの書き込み
async function addOneTimePass(db, name, otp) {
    try {
        const docRef = await addDoc(collection(db, "Users"), {
            name: name,
            passcode: "",
            otp: otp,
            point: 0,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

//ワンタイムパスコードを生成
function generateOneTimePasscode(db, NAME) {
    const length = 6;
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let otp = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        otp += characters[randomIndex];
    }
    addOneTimePass(db, NAME, otp);
    return otp;
}

export { generateOneTimePasscode };
