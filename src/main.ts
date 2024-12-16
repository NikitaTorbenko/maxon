import { createApp } from "vue";
import { App, router } from "@/app";
import "@/app/styles/tailwind.css";

const app = createApp(App);

app.use(router);
app.mount("#app");
