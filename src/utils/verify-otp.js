import { collection, query, getDocs } from "firebase/firestore";

// コレクション内に一致するドキュメントを検索
async function findMatchingDocument(db, pass) {
    const q = query(collection(db, "Users"));
    const querySnapshot = await getDocs(q);
    let result_name = false;
    for (let i = 0; i < querySnapshot.docs.length; i++) {
        let doc = querySnapshot.docs[i];
        if (doc.data().pass === pass) {
            result_name = doc.data().name;
            break;
        }
    }
    return result_name;
}

export { findMatchingDocument };
