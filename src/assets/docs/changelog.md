# Changelog

*Built on [2PG](https://2pg.xyz)*

---

# v2

---

## Alpha

---

## 2.0.3a `Upcoming`

![v2.0.3a Dashboard](assets/docs/img/dashboard-v2.0.3a.png)

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

**Remove**


---

## 2.0.1a `16/05/20`

![v2.0.1a Dashboard](assets/docs/img/dashboard-v2.0.1a.png)

**Add**
- music: manager, API routes, docs, 3 more properties
- badges
- dashboard docs references
  
**Change/Fix**
- dashboard singleton loading (much faster on slower connections)

---

## 2.0.0a `09/05/20`

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

# v1 `2018-2019`

### 1.x

![v1.x Dashboard](assets/docs/img/dashboard-v1.x.png)

![v1.x Home](assets/docs/img/dashboard-home-v1.x.png)