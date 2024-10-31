import { remult, RestDataProvider } from "remult";
import type { LayoutLoad } from "./$types";

export const load = (async (event) => {
  remult.dataProvider = new RestDataProvider(() => ({
    httpClient: event.fetch,
  }));
}) satisfies LayoutLoad;
