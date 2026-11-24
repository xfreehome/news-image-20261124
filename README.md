# World in One Frame — 24 November 2026

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/xfreehome/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/xfreehome/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

A single picture that sums up the world's biggest news on 24 November 2026.
Five stories, one frame. The image (`entry.png`) is 1024 by 1024 pixels and
stays under the 1 MiB limit. A small Node program (`main.ts`, standard
library only) checks the picture and copies it byte-for-byte to the output
folder.

## What happened today

1. **Nvidia brings Huang back — Santa Clara, USA (Mon 23 Nov).** Eleven
   days after Jensen Huang stepped down, the board votes him back in as
   chief executive, following pressure from President Trump. The stock
   climbs 31%, worth roughly $950 billion; the Nasdaq rises 6.5% and the
   S&P 500 has its best day since April 2025.
2. **Iran hits Gulf bases — Bahrain and the Strait of Hormuz (Sat 21 Nov).**
   Iranian forces strike American-linked bases in Bahrain and tankers
   around the Strait of Hormuz — around 25 tankers attacked in one week.
   A civilian plant in Sitra catches fire and two people are hurt, while
   Washington tightens sanctions and its naval blockade.
3. **Ukraine sinks a Russian warship — Benghazi, Libya (Sun 22 Nov).**
   Seven Ukrainian sea drones sink the corvette Merkury, one of Russia's
   newest warships, while it sits in port at Benghazi — 2,400 kilometres
   from the front line. A cargo vessel and a Ka-27 helicopter are struck
   as well.
4. **Russian jets enter Korea's air zone — Ulleung Island (Tue 24 Nov).**
   Several Russian military aircraft fly into South Korea's air defence
   identification zone near Ulleung Island. Seoul sends up fighter jets
   and tells residents to take shelter; the alert ends after three
   minutes.
5. **EU drafts a 22nd sanctions package — Brussels (Mon 23 Nov).** The
   European Union proposes its 22nd round of sanctions on Russia: Russian
   teams are barred from EU events under their own flag, and banks, crypto
   platforms and former combatants are targeted.

Sources: Reuters, AP, CNN, WSJ, Al Jazeera, Yonhap.

## Run it

```sh
node main.ts
# writes /output/entry.png (or $MAKEFUN_OUTPUT_DIR/entry.png)
```

Running `main.ts` twice gives a byte-identical `/output/entry.png`
(the same SHA-256 every time).
