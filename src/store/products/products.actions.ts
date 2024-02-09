import { createAsyncThunk } from "@reduxjs/toolkit";
import db from "../../firebase";
import { collection, onSnapshot, DocumentData } from "firebase/firestore";
// Импортируйте ваш интерфейс или тип данных, если есть
// import { Product } from "../../interfaces/interfaces";

const getProductsFirebase = (products): Promise<DocumentData[]> => {
  return new Promise((resolve, reject) => {
    const productsCollection = collection(db, "product-pizza");

    onSnapshot(
      productsCollection,
      (snapshot) => {
        const productsData = snapshot.docs.map(
          (doc) => doc.data() as DocumentData
        );
        resolve(productsData);
      },
      reject
    );
  });
};

export const getProductsPizza = createAsyncThunk(
  "products",
  async (products, thunkApi) => {
    const response = await getProductsFirebase(products);
    return response;
  }
);
