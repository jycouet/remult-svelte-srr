import { sequence } from "@sveltejs/kit/hooks";
import { api } from "./server/api";

export const handle = sequence(api);
