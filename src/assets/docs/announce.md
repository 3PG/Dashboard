# Announce
Receive messages when something happens.

---

## Events
Custom responses to specific events.

### Types
These types combine both Discord events and 3PG events.

Event               | Description
:-------------------|:----------------------------
BAN                 | User is banned on Discord
CONFIG_UPDATE        | Bot config is changed
LEVEL_UP             | User reaches a new XP level
MEMBER_JOIN          | User joins the guild
MEMBER_LEAVE         | User leaves the guild
MESSAGE_DELETED      | User message is deleted
UNBAN               | User is unbanned on Discord
WARN                | User is warned with the warn command

---

### Event Variables
Event variables are used in the message and provide more context to a message.

Variable        | Description                           | Events
:---------------|:--------------------------------------|:-----------------------------|
`[GUILD]`         | Guild name                            | All        
`[INSTIGATOR]`    | User mention of the punisher          | WARN        
`[MEMBER_COUNT]`  | Number of members in guild            | All
`[MESSAGE]`       | Message content                       | MESSAGE_DELETED
`[NEW_LEVEL]`     | The new level of a member             | LEVEL_UP
`[NEW_VALUE]`     | The new value of the config           | CONFIG_UPDATE
`[OLD_LEVEL]`     | The old level of a member             | LEVEL_UP
`[OLD_VALUE]`     | The old value of the config           | CONFIG_UPDATE
`[REASON]`        | Logged reason for punishment          | WARN
`[USER]`          | User mention                          | All
`[XP]`            | The current xp of a member            | LEVEL_UP
