import { configureStore } from "@reduxjs/toolkit";
import Form from "../components/Form";
import Formslice from "./Formslice";

export const Store =configureStore({
reducer:Formslice
});

