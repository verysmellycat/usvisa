import axios from "axios";

axios({
  method: "POST",
   url: process.env.DISCORD_WEBHOOK_URL,
   data: JSON.stringify({
     content: "New deployment is live!",
   }),
   headers: {
     "Content-Type": "application/json",
   },
 }).then((response) => {
   console.info("response", response.data);
 }).catch((error) => {
   console.error("error", error);
 });
