# World in One Frame — 24 November 2026

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/xfreehome/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/xfreehome/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

One image summing up 24 November 2026's world news — five stories, one frame.
`entry.png` is 1024×1024 px, under 1 MiB. `main.ts` (Node 22, standard
library only) verifies the PNG and copies it byte-for-byte to `/output/entry.png`.

## The five stories

1. **Huang is back at Nvidia — Santa Clara, USA (Mon 23 Nov).** The board
   unanimously reinstates Jensen Huang as CEO, 11 days after he resigned —
   after pressure from President Trump. Shares soar 31%, adding about
   $950 billion in value; the Nasdaq jumps 6.5% and the S&P 500 posts its
   biggest daily gain since April 2025.
2. **Iran strikes Gulf bases — Bahrain & Hormuz (Sat 21 Nov).** Iran hits
   US-linked bases in Bahrain and tankers near the Strait of Hormuz — about
   25 tankers attacked in a week. A civilian plant on Sitra burns; 2
   wounded. The US tightens sanctions and its naval blockade.
3. **Ukraine sinks Russian warship — Benghazi, Libya (Sun 22 Nov).** Seven
   Ukrainian sea drones sink the corvette Merkury, one of Russia's newest
   warships, docked at Benghazi — 2,400 km from the front line. A cargo
   ship and a Ka-27 helicopter are hit too.
4. **Russian jets enter Korea air zone — Ulleung Island (Tue 24 Nov).**
   Several Russian military aircraft enter South Korea's air defense zone
   near Ulleung Island. Seoul scrambles fighter jets; residents are told
   to shelter. The alert is lifted after 3 minutes.
5. **EU proposes 22nd sanctions on Russia — Brussels (Mon 23 Nov).** A
   22nd sanctions package: Russian teams barred from EU events under their
   flag; banks, crypto platforms and ex-combatants targeted.

Sources: Reuters, AP, CNN, WSJ, Al Jazeera, Yonhap.

## Run it

```sh
node main.ts
# writes /output/entry.png (or $MAKEFUN_OUTPUT_DIR/entry.png)
```

Deterministic: running `main.ts` twice produces a byte-identical
`/output/entry.png` (same SHA-256).
