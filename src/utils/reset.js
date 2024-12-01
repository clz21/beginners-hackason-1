import { query, collection, doc, getDocs, deleteDoc } from "firebase/firestore";

//毎日0時にリセットするやつ、まだなんかいろいろ違う

// コレクション内のすべてのドキュメントを削除
async function resetDatabase(db) {
    const q = query(collection(db, "Users"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (document) => {
        await deleteDoc(doc(db, "Users", document.id));
    });
    console.log("Database reset");
}

// 毎日0時にデータベースをリセット
// function scheduleDatabaseReset(db, hour, minute) {
//     const now = new Date();
//     const resetTime = new Date();
//     resetTime.setHours(hour, minute, 0, 0);
//     if (resetTime < now) {
//         resetTime.setDate(resetTime.getDate() + 1);
//     }
//     const timeUntilReset = resetTime - now;
//     setTimeout(() => {
//         resetDatabase(db);
//         scheduleDatabaseReset(db, hour, minute);
//     }, timeUntilReset);
// }
// scheduleDatabaseReset(db, 0, 0);
