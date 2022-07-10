import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "nico的博客",
  description: "nico的博客",

  base: "/",

  theme,
});
