This is a cool project that I followed along with from the Hack Club Stardance summer program. Check it out for yourself: https://stardance.space/r-bjp86

You can test out the bot in the Hack Club Slack: https://app.slack.com/client/E09V59WQY1E/C0P5NE354

The bot features 3 commands:
- /tacobot-ping: Gets the latency.
- /tacobot-random-quote: Gets a random quote from Quotable.
- /tacobot-roll: Rolls a dice for you. By default its a 6 sided die but you can change it by typing in any number after the command. 

Hope you enjoy using the bot. If you want to use the bot in your own Slack then:
- Pull the repo ```git pull https://github.com/J-Taco/slack-taco-bot.git```
- create a .env file in the root of the project folder
    - Add SLACK_BOT_TOKEN & SLACK_APP_TOKEN to the env
- save it and run ```node index.js```