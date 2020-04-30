# Auto Mod
Learn how to let 3PG filter explicit content, spam and more!

## Filters
Filters usernames content, and message content

`Threshold = guild.autoMod.filterThreshold` default (5)

| Filter             | Trigger Example                          | Condition
|:-------------------|:-----------------------------------------|:-------------------------------------------|
| All Caps           | TESTING123?!?!?!?                 | (`Threshold` * 10)% caps (<=50% caps by default)
| Bad Links          | [saved bad link address]                         | Message contains custom bad link
| Bad Words          | [listed bad word]                                      | Any words equal custom bad word
| Emoji Spam         | 🤔🤔🤔🤔🤔🤔🤔🤔🤔                   | `Threshold` emojis
| Mass Mention       | @User @User @User @User @User            | `Threshold` mentions
| Zalgo              | Mͭͭͬu̔ͨ͊tͣ̃̚eͨͭ͐ ҉̴̴̢                                   | Any zalgo symbols