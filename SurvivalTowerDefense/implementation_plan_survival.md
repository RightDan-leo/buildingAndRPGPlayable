# Survival Tower Defense - Implementation Plan

## Goal

Convert the existing static tower defense game into a **Moving Camp Survival** game where the base travels along the Z-axis, the player gathers wood for ammo/repairs, and energy stones for upgrades.

## Proposed Changes

### 1. Game State & Map (`survival_tower_defense_3d.html`)

* [MODIFY] Update `game.base` to include specific Camp attributes (speed, destinationZ).
* [MODIFY] Change Map generation to be a long Z-axis strip (Start 0 -> End 2000).
* [NEW] Add `game.state.campMoving` flag and update logic to move `baseMesh`, `playerMesh` (relative), and camera along Z.

### 2. Resources & Logic

* [MODIFY] `Tree` logic: Player needs to stand near tree to "chop" (auto-tick). Tree drops `Wood`.
* [NEW] `Wood` usage:
  * Towers consume 1 Wood per shot.
  * Repair Base cost (e.g. 10 Wood -> 20 HP).
* [NEW] `Energy Stone` logic: Enemies drop Energy Stones instead of just "score".
  * Used for "Tavern" upgrades (3-choice modal).

### 3. Entities

* [MODIFY] `Enemies`: Spawn ahead of the camp and move towards `baseMesh`.
* [NEW] `Automation`: Add "Lumberjack" unit that auto-targets nearby trees and adds wood to base.

### 4. Audio

* [NEW] Implement `SynthAudio` class (using AudioContext) for:
  * `chop` (Wood gather)
  * `shoot` (Tower fire)
  * `move` (Camp constant rumble? or just music)
  * `win/lose` jingles.

### 5. UI

* [MODIFY] Update HUD to show: Wood (Ammo), Energy Stones, Distance to Goal.
* [NEW] Add "Tavern" Modal for upgrades.
* [NEW] Add "Ad" Modal on Victory.

## Verification Plan

### Manual Verification

1. **Movement**: Start game -> Verify Base moves forward automatically.
2. **Gathering**: Stand near tree -> Verify tree disappears, Wood count increases, Sound plays.
3. **Combat**:
    * Wait for enemy -> Verify Tower shoots ONLY if Wood > 0.
    * Verify Tower consumes Wood.
    * Kill enemy -> Verify Energy Stone drop.
4. **Win Condition**: Wait until Camp reaches Z=2000 (approx 2 min) -> Verify Victory Screen/Ad.
