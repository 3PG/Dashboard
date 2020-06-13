# Auto Mod
Let 3PG filter explicit content, spam and more!

---

## Duration

Value | Duration
:-----|:---------
`3s`  | 3 seconds
`3m`  | 3 months
`3h`  | 3 hours
`3d`  | 3 days
`3w`  | 3 weeks
`3mo` | 3 months (3 x 30 days)
`3y`  | 3 years (3 x 365 days)
`forever` `-1` | Forever

---

### Auto Delete Messages `true`
Whether to automatically delete messages that are filtered.

### Auto Warn Users `false`
Whether to automatically warn users, that type a filtered message.

### Ban Links `[]`
Single characters, or parts of a word, that trigger the `Links` filter.

### Ban Words `[]`
Single words that trigger the `Words` filter.

### Filters `[]`
Filter message content, based on specific conditions.

| Filter             | Trigger Example                          | Condition
|:-------------------|:-----------------------------------------|:-------------------------------------------|
| MASS_CAPS          | TESTING123?!?!?!?                 | Message Length > `Threshold` and (`Threshold` * 10)% caps (<=50% caps by default)
| LINKS              | [saved bad link address]                         | Message contains custom bad link
| WORDS              | [listed bad word]                                      | Any words equal custom bad word
| EMOJI              | 🤔🤔🤔🤔🤔🤔🤔🤔🤔                   | `Threshold` emojis
| EXPLICIT           | [any explicit word blocked by Google]       | `Threshold` emojis
| MASS_MENTION       | <User> <User> <User> <User> <User>            | `Threshold` mentions
| ZALGO              | Mͭͭͬu̔ͨ͊tͣ̃̚eͨͭ͐ ҉̴̴̢                                   | Any zalgo symbols

---


### Filter Threshold `5`
The strictness of most of the variable filters.

### Ignored Roles `[]`
Roles that are not affected by auto-mod.
A use case for this may be an Admin role, where Admins could `SPAM CAPS IN CHAT` and watch other members suffer trying to do the same thing.