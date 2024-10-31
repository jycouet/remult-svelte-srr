import { remult, RestDataProvider } from "remult";
import type { PageLoad } from "./$types";
import { Task } from "../../demo/todo/Task";

export const load = (async (event) => {
  const todos = await remult.repo(Task).find();
  return { todos };
}) satisfies PageLoad;
