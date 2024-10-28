import { sequence } from "@sveltejs/kit/hooks";

import type { Handle } from "@sveltejs/kit";
import { api } from "./server/api";

export const handleRemult: Handle = async ({ event, resolve }) => {
  return await api.withRemult(event, async () => {
    return resolve(event);
  });
};

export const handle = sequence(handleRemult);
