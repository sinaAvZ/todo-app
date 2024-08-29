import { taskProp } from "@/libs/types/Api";
import { atom } from "jotai";

export const tasks = atom<taskProp[]>([]);
