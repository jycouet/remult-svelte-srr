import { remult, RestDataProvider } from "remult";
import type { PageLoad } from "./$types";
import { Task } from "../../demo/todo/Task";

export const load = (async (event) => {
  const dp = new RestDataProvider(() => ({
    httpClient: event.fetch,
  }));
  const todos = await remult.repo(Task, dp).find();
  return { todos };
}) satisfies PageLoad;
