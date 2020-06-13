# Crates

You can unlock crates by voting for 3PG.

---

## Rewards
As of 30/05/2020 the chances of getting a reward have increased.
Therefore these chances are not completely accurate.

### How it works
A decimal number is rolled from 0 to 1.
If the roll is below the **Chance** value, the reward is increased, until `roll > chance`.
For example if you rolled 0.1 you would get __Tier 3 Legend Badge__.

The difficulty is currently `2`.
**Chance** is given by `(1 / (i + 1)^difficulty) * 100` where `i` is the index of the reward.
For example, if there are 8 rewards, the possible values for `i` would be from 0-7.

Reward  | Chance | Stackable
:-------|:------|:-----
Nothing | 50% | Yes
Vote Crate | 25% | Yes
Tier 3 Legend Badge | 12.5% | No
Tier 2 Legend Badge | 6.25% | No
Tier 1 Legend Badge | 3.125% | No
7 days <PRO> | 1.5625% | Yes
1 month <PRO> | 0.78125% | Yes
3 months <PRO> | 0.390625% | Yes

---

#### Stackable
Whether the same reward can be earned multiple times.
For example, if <User> unlocks a Tier 3 badge, they cannot unlock the same Tier 3 badge again later.