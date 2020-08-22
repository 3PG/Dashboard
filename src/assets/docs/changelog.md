# Changelog

*Built on [3PG](https://3PG.xyz)*

---

# v2

---

## Beta

---

### v2.2.1b

**Add**

**Change/Fix**
- 

**Remove**
- dashboard -> badges
- dashboard -> crates (may be temporary)

---

### v2.2.0b
`18/07/2020`

![v2.2.0b Dashboard](assets/docs/img/dashboard-v2.2.0b.png)

**Add**
- `/dashboard` -> better Discord-styled layout
- `/dashboard` -> server -> insufficient permission notification
- `/commands` -> much easier to use command searching
- themes -> more themes
- commands -> command aliases

**Change/Fix**
- `/dashboard` -> announce -> renamed to logs
- `/dashboard` -> general -> moved reaction roles to a separate module
- `/` -> optimized scripts for faster home page load
- auth -> optimized login process and speed
- reaction roles -> roles now are given to anyone who reacts

---

### v2.1.2b
`27/06/2020`

![v2.1.2b Dashboard](assets/docs/img/dashboard-v2.1.2b.png)

**Add**
- dashboard -> timers -> add better command timers interface
- dashboard -> one-click sign in

**Change/Fix**
- timers -> timer spam
- dashboard -> guild -> redirects to /dashboard then to /login when guild cannot be found
- rate limiting -> changed rate limiting settings to be more user friendly
- bot persistently crashed due to memory leak

**Remove**
- obnoxious alert error logs
- `ITS TIME TO STOP! ITS TIME TO STOP OK! NO MORE!` rate limiting message

---

### v2.1.1b
`13/06/2020`

![v2.1.1b Dashboard](assets/docs/img/dashboard-v2.1.1b.png)

**Add**
- home -> cool waves footer
- home -> server status notifications
- auto mod -> explicit words filter

**Change/Fix**
- dashboard -> bad request error when user login key expired
- crates -> made crate rewards harder to get (chance of getting the best reward was >5%)
- auto mod ->copy and paste boo boo with explicit words
- commands -> empty permissions displayed undefined
- docs -> changelog -> navigating to docs anchor links was sending 404
- reaction roles -> emoji name comparison bug stopped some reaction roles from working 
  
**Removed**
- logs -> cleared all existing logs as some were unnecessary

---

### v2.1.0b
`30/05/2020`

![v2.1.0b Dashboard](assets/docs/img/dashboard-v2.1.0b.png)

**Add**
- announce -> unmute event
- general -> info command -> get bot info
- general -> server command -> get server info

**Change/Fix**
- dashboard -> leveling -> default level role values now filter on submit
- commands -> clear -> fixed typo that made the command inaccessible
- dashboard -> fixed cross server lag

---

## Alpha

---

### v2.0.2a
`23/04/2020`

![v2.0.2a Dashboard](assets/docs/img/dashboard-v2.0.2a.png)

**Add**
- new theme -> 3PG Discord
- announce -> user mute event
- crates -> unlocked by voting
- dashboard -> music player -> shuffle, and volume control

**Change/Fix**
- adding guilds via dashboard did not update them
- users were not updating properly on dashboard load
- better home page scrolling
- timers -> disabled timers no longer being saved
- xp card colours -> primary and tertiary colour typo
- dashboard -> guild data caching: faster dashboard loading (especially on slow connections)
- dashboard -> events -> fix ban/level-up confusion
- dashboard -> fixed widget data not updating on guild navigation
- dashboard -> color pickers -> now adapt to theme

---

### v2.0.1a
`16/05/20`

![v2.0.1a Dashboard](assets/docs/img/dashboard-v2.0.1a.png)

**Add**
- music: manager, API routes, docs, 3 more properties
- badges
- dashboard docs references
  
**Change/Fix**
- dashboard singleton loading (much faster on slower connections)

---

### v2.0.0a
`09/05/20`

![v2.0.0a Dashboard](assets/docs/img/dashboard-v2.0.0a.png)

**Add**
- lots of more documentation
- command timers -> automatically run commands in intervals
- 3PG PRO -> keep 3PG alive
- say, lock, unlock commands
- reset guild config from dashboard
- features preview

**Change/Fix**
- nearly every line of code
- migrate auto mod features
- warn panel -> replaces ban panel, Discord audit log is better for searching bans
- rename XP module: XP -> Leveling

**Remove**
- lots of impractical commands that were mostly unused
- ban, kick, mute, unmute commands -> can mostly be done with Discord
- ~99% of previous webapp bugs
- features preview
- global leaderboard

---

# v1
`2018-2019`

### v1.x

![v1.x Dashboard](assets/docs/img/dashboard-v1.x.png)

![v1.x Home](assets/docs/img/dashboard-home-v1.x.png)