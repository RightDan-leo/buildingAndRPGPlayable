# Implementation Plan: Workers & Visual Goal

## 1. Automated Workers

* [UI] Add "Recruit Worker" button to `ui-overlay`. Cost: 100 Wood.
* [Logic] `Game.recruitWorker()`: Spawns a worker unit at base.
* [Entity] `Worker` class/object:
  * State: `IDLE` | `MOVING_TO_LOOT` | `RETURNING`.
  * Speed: Slightly faster than base.
  * Behavior: Detects nearest `loot` -> Moves to it -> "Picks up" (plays sound `collect`) -> Instant deposit (for simplicity) or carry back. *Decision: Instant deposit + visual effect to keep it snappy.*
* [Update] `updateWorkers(dt)` loop.

## 2. Resource Drops

* [Modify] `createTree`: Ensure chopping a tree spawns a `Loot` object instead of direct wood gain.
* [Modify] `killEnemy`: Ensure enemies spawn `Loot` (Energy Stones or Wood). *User said "workers pick up resources", so let's make enemies drop "Scrap" (Wood) for now to be useful for ammo.*

## 3. Visual Goal (Red Box Area)

* [Visual] Create a massive "Beacon" at `destinationZ` (-2000).
  * Tall cylinder/beam glowing red/cyan.
  * Floating text "EVAC POINT".

## 4. Audio

* [Audio] Add `collect` sound (coin/pickup chime) for workers.

## Verification

1. **Start Game**: See huge beacon in distance.
2. **Recruit**: Click "Recruit Worker" (need 100 wood).
3. **Observation**: Chop tree -> Loot drops -> Worker runs to it -> Scout plays sound -> Wood increases.
