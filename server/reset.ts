import * as cron from "node-cron";
import { Mutation } from "./resolvers/TodoResolvers";

const testData = {
  data: [
    { content: "create awesome todo app", completed: true },
    { content: "find awesome new job" }
  ]
};

export async function reset() {
  await Mutation.deleteAll({});
  await Mutation.createTodo({}, testData);
}

cron.schedule("*/5 * * * *", async () => {
  reset();
});

reset();
