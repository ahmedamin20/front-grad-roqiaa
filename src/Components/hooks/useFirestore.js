import { useSyncExternalStore } from "react";
import {firebaseStore , resultStore} from "./firebaseStore.js"
export const useFirestore = () => {
    const data = useSyncExternalStore(firebaseStore.subscribe, firebaseStore.getSnapshot);
    return data;
  };

export const useResult = ()=>{
  const data = useSyncExternalStore(resultStore.subscribe, resultStore.getSnapshot);
    return data;
};