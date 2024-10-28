import { remultSveltekit } from "remult/remult-sveltekit";
import { Task } from "../demo/todo/Task";
import { remult, SqlDatabase } from "remult";
import Database from "better-sqlite3";
import { BetterSqlite3DataProvider } from "remult/remult-better-sqlite3";
import { createPostgresDataProvider } from "remult/postgres";

SqlDatabase.LogToConsole = "oneLiner";

export const api = remultSveltekit({
  admin: true,
  entities: [Task],
  // dataProvider: new SqlDatabase(
  //   new BetterSqlite3DataProvider(new Database("./mydb.sqlite"))
  // ),
  dataProvider: createPostgresDataProvider({
    connectionString: "postgres://postgres:example@127.0.0.1:5433/test",
    // configuration: {} // optional: a `pg.PoolConfig` object or "heroku"
  }),
  initApi: async () => {
    // const todos = await remult.repo(Task).find();
    // console.log(`todo234`, todos);
  },
});
