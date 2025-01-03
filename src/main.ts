import App from "./App.svelte";
import makeRenderer from "svelte-state-renderer";
import makeStateRouter from "abstract-state-router";
import Child from "./lib/Child.svelte";
const renderer = makeRenderer();

const target = document.getElementById("app");
const stateRouter = makeStateRouter(renderer, target, {
  throwOnError: true,
});

stateRouter.addState({
  name: "app",
  route: "/",
  defaultChild: "child1",
  template: App,
  resolve: async () => ({}),
});

stateRouter.addState({
  name: "app.child1",
  route: "/child1",
  template: Child,
  resolve: async () => ({}),
});

stateRouter.addState({
  name: "app.child2",
  route: "/child2",
  template: Child,
  resolve: async () => ({}),
});

document.addEventListener("DOMContentLoaded", () => {
  stateRouter.evaluateCurrentRoute("app");
});

stateRouter.on("stateChangeError", (err: any) => {
  alert(err.message);
});
