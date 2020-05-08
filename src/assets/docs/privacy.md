# Privacy

---

# What is public?
Can be found on search engines.

- Public leaderboards <Pro>

---

# What is unlisted?
Only accessible with URL.

Only members in your guilds, or who have your Guild ID (18 digit number), will be able to use the 3PG API to view these URLs.

Item        | Requirement   | URL           | Uses
:-----------|:--------------|:--------------|:-------------
A Specific Message    | Guild, Channel, and Message ID | `https://3pg.xyz/api/guilds/[guildId]/channels/[channelId]/messages/[messageId]` | Reaction role message preview
Dashboard Audit Log       | Guild ID | `https://3pg.xyz/api/guilds/[guildId]/log` | Audit log and Dashboard overview
Channels    | Guild ID | `https://3pg.xyz/api/guilds/[guildId]/channels` | Channel input selection
Members     | Guild ID | `https://3pg.xyz/api/guilds/[guildId]/members` | Leaderboard 
Roles       | Guild ID | `https://3pg.xyz/api/guilds/[guildId]/public` | Role input selection

---

# What is private?
Only your Discord account has access.

- What guilds you are in
- Your current saved guild config

[!] DISCLAIMER:  We try our best to secure your data, but not all items will be listed here, and this document is subject to change with new updates.