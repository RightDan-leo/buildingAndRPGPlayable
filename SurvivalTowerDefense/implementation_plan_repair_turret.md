# Implementation Plan: Repair Turret

## Goal

Add a new turret type "Repair Tower" (Type D) that automatically heals the base HP over time.

## Proposed Changes

1. **UI Updates (`survival_tower_defense_3d.html`)**
    * Add a new button in the `#turret-modal` for "Repair Tower".
    * Style: Green button.
    * Cost: 50 Wood (standard).

2. **Logic Updates**
    * **Materials**: Add `turretD` (Green/Medical color) in `setupMaterials`.
    * **Create Logic**: Update `createTurret` to handle `type === 'D'`.
        * Range: 0 (Self).
        * FireRate: 1 (1 Heal tick per second).
        * Healing: 5 HP per tick.
    * **Update Loop (`handleTurrets`)**:
        * Detect Type 'D'.
        * If `base.hp < base.maxHp`, execute heal.
        * Play heal sound (reuse 'collect' or new pitch).
        * Visual effect: Green floating text "+5".

3. **Audio**
    * Add/Reuse sound for healing pulse.

## Verification

1. Start game.
2. Collect 50 Wood.
3. Open Build Menu -> Select "Repair Tower".
4. Wait for enemy to damage base.
5. Observe base HP increasing and green effects.
