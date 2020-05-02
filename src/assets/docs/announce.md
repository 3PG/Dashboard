# Announce
Receive messages when something happens.

---

## Events
Custom responses to specific events.
These events are Discord based and are not 3PG specific.

**Event Variables**

Variable        | Description                           | Events
:---------------|:--------------------------------------|:-----------------------------|
[GUILD]         | Guild name                            | All        
[MEMBER_COUNT]  | Number of members in guild            | All
[MESSAGE]       | Message content                       | MessageDeleted
[NEW_LEVEL]     | The new level of a member             | LevelUp
[OLD_LEVEL]     | The old level of a member             | LevelUp
[REASON]        | Logged reason for punishment          | Kick, Ban, Unban
[USER]          | User mention                          | All
[XP]            | The current xp of a member            | LevelUp