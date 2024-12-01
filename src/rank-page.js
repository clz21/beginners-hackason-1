import { db } from "./utils/firebase.js";
import { query, collection, getDocs } from "firebase/firestore";

let users_point = {};
async function roadUsersPoint() {
    const q = query(collection(db, "Users"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((document) => {
        let data = document.data();
        users_point[data.name] = data.point;
    });
    // console.log(users_point);
    return showRanking();
}

function showRanking() {
    let data = {
        labels: Object.keys(users_point),
        datasets: [
            {
                label: "ユーザーのポイント",
                data: Object.values(users_point),
            },
        ],
    };
    let options = {
        /*グラフのオプション(省略可)*/
        scales: {
            /*範囲指定*/
            yAxes: [
                {
                    /*y軸範囲*/
                    ticks: {
                        /*y軸メモリ指定*/ min: 0 /*y軸最小メモリを0に指定*/,
                        // max: 10 /
                    },
                },
            ],
        },
    };
    var myChart = new Chart(chartArea, {
        type: "bar",
        data: data,
        options: options /*13行目のoptionを反映*/,
    });
}

document.addEventListener("DOMContentLoaded", function () {
    roadUsersPoint();
});
