require("dotenv").config();

const axios = require("axios");
const { App } = require("@slack/bolt");

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true,
});

app.command("/tacobot-ping", async ({ command, ack, respond }) => {
    const start = Date.now();
    await ack();
    const latency = Date.now() - start;
    await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

app.command("/tacobot-random-quote", async ({ command, ack, respond }) => {
    await ack();

    try {
        const response = await axios.get("https://type.fit/api/quotes");
        await respond({ text: `${response.data[0].text} - ${response.data[0].author}` });
    } catch (error) {
        console.log(error);
        await respond({ text: "Failed to fetch a random quote." });
    }
});

(async () => {
    await app.start();
    console.log("TacoBot is running!");
})();