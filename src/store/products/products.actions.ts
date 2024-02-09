import { createAsyncThunk } from "@reduxjs/toolkit";
import db from "../../firebase";
import { collection, onSnapshot, DocumentData } from "firebase/firestore";
// import { Product } from "../../interfaces/interfaces";

const getProductsFirebase = (collectionPath: string) => {
  return new Promise((resolve, reject) => {
    const productsCollection = collection(db, collectionPath);

    onSnapshot(
      productsCollection,
      (snapshot) => {
        const productsData = snapshot.docs.map(
          (doc) => doc.data() as DocumentData
        );
        resolve(productsData);
        console.log(productsData);
      },
      reject
    );
  });
};

export const getProductsPizza = createAsyncThunk(
  "products",
  async (_, thunkApi) => {
    try {
      const response = await getProductsFirebase("product-pizza");
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
