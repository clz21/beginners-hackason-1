import { db } from "./utils/firebase.js";

import { generateOneTimePasscode } from "./utils/create-otp.js";
import { findMatchingDocument } from "./utils/verify-otp.js";
import { addPoint } from "./utils/add-point.js";

const NAME = "nnfaoifjoahga";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("show-button").onclick = function () {
        console.log("clicked");
        const result = generateOneTimePasscode(db, NAME);
        document.getElementById("otp-show").innerText = result;
    };

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        const passcode = document.getElementById("passcode").value;
        // alert("Entered passcode: " + passcode);
        findMatchingDocument(db, passcode).then((result) => {
            if (result) {
                document.getElementById(
                    "otp-verify"
                ).innerText = `${result}さんにポイントを送りました！`;
                addPoint(db, result);
            } else {
                alert("Passcode is incorrect");
            }
        });
    });
});
