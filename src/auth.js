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
// console.log(generateOneTimePasscode());

document.querySelector("button").onclick = function () {
    const result = generateOneTimePasscode();
    document.querySelector("p").innerText = result;
};
