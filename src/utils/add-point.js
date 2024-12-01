import {
    collection,
    query,
    where,
    getDocs,
    updateDoc,
    increment,
} from "firebase/firestore";

async function addPoint(db, name) {
    const q = query(collection(db, "Users"), where("name", "==", name));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (doc) => {
        try {
            await updateDoc(doc.ref, {
                point: increment(1),
            });
            console.log("Document successfully updated!");
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    });
}

export { addPoint };
