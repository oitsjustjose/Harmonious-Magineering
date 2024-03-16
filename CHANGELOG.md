# Harmonious Magineering Changelog

## v1.0.0-BETA11

### ⚠️IMPORTANT⚠️

This update has two potentially breaking changes. Before proceeding, if you choose not to read further, at the _very_ least make a world backup before updating in case you lose _everything_ (because that's actually possible with this update. Two factors cause the one-time instability in this update:

#### Iron Chests: Restocked

This mod has been removed in this update. v1.0.0-BETA9 talks all about this and how you can migrate to Expanded Storage without having to re-craft anything or even move your items manually! It's all automatically handled so please go read that changelog if you haven't already.

#### Tectonic/Lithostiched

Tectonic has now recommended adding the "[Lithostitched](https://www.curseforge.com/minecraft/mc-mods/lithostitched)" mod, which allows for more refined control over biome modifiers, surface rules & temperature overall. This allows Tectonic to reduce the amount of inappropriately placed snow, which I want, so I added this mod. Like any mod that modified world gen at a low level, there's a chance this will bring about unsavory visible chunk borders that cannot be fixed in any other way aside from not updating to this version or not using Lithostitched at all. I have tested locally and have not been able to find any cases of large chunk borders/walls in my testing world of 4 months, but YMMV.

### Added:

- Added new **Oil Droplet** item as well as a corresponding IE Mineral Mix that allows the player to harvest PnC Oil in _item_ form using the Excavator.
- Mineral deposits for Sphalerite (Zinc), Dungeon Digsite (Hellforged Ore & Diamond), and added Fluorite to the Beryl deposit
- Recipe for crushing AE2 Skystone into Skystone Dust 
- [Mod] Create Train Perspective
- [Mod] Inventory Profiles: Next
- [Mod] LithoStitched

### Removed:

- [Mod] Iron Chests: Restocked (see v1.0.0-BETA9 Changelog)
- [Mod] Inventory Sorter (Incompatible with AE2)
- [Mod] [Library] Collective (entirely unused)
- Gravitite tools no longer have the block/entity yeeting property. When hitting a mob, you'll no longer throw them into the sky, and when right-clicking any block you'll no longer send it floating into the sky.

### Changed:

- Embers' fluid vessels have been disabled due to a fluid dupe glitch - in the meantime, Create's tanks have been made accessible as soon as you're able to make 
- Improved Wither Skeleton Skull drop rate somewhat
- [Internal] Converted loot table modifications to only use LootJS

### Fixed:

- Advancement-based quests (for tag quests) no longer always mark themselves as completed all the time.
- Overall script priority issues, such as the Mekanism Steel Casing recipe having its old revision _and_ its new one 😤
- Leftover logging that I totally didn't forget to remove 😉

### Updated:

- [Library] Almost Unified
- [Library] Blueprint
- [Library] Curios
- [Library] Moonlight
- [Library] Obsidian UI
- Aether Redux
- Amendments
- Embeddium
- FTB Mods
- Lootr
- Moonlight
- Raised
- Ryoamic Lights
- Sophisticated Backpacks
- Tectonic

## v1.0.0-BETA10

### Added:
- Pretty Pipes: Fluids
- [Resource Pack] Smooth Drawers

### Fixed:

- Certain Create & PNC chapter quests not being hidden correctly
- Modular Routers not being able to work in a chunk claimed with OPAC
- Stage tooltips will no longer appear when in Creative Mode since the stage conversions won't occur while in creative.

### Changed:

- All of Embers' Alchemy Recipes are now done via the Eidolon Brazier because the codex and randomness of the crafting recipes are total nonsense. I wasted tons of resources trying to get anything to work and it never did, and it's all seed-based so you can't look it up >_>

### Updated:
- Aeroblender
- Aether Redux (You **will** lose some items/accessories - this is unavoidable)
- Amendments
- Applied Energistics 2
- BadMobs
- Cupboard
- Delightful
- Every Compat
- Framed Blocks
- Moonlight

## v1.0.0-BETA9

### Added:

- Custom textures for Expanded Storage Minecarts
- Expanded Storage and brought back all my prior recipes and changes.
- Recipes for using PneumaticCraft explosion crafting to scrap gear you don't need
  - This mechanic is also introduced with the new Embers update, but Exploding the gear will have a 50% chance to fail whereas the Embers method will
    not have a chance to fail.

### Updated:

- Amendments
- Corpse
- Delightful
- Easy Anvils
- Embeddium
- Embers
- Every Compat
- Fancy Menu
- Framed Blocks
- Quark
- Raised
- Regions Unexplored
- Sawmill
- Snow! Real Magic!
- Sophisticated Backpacks
- Storage Drawers
- Supplementaries
- Zeta
- [Library] AlmostUnified
- [Library] Balm
- [Library] Cupboard
- [Library] Iceberg
- [Library] Selene
- [Library] Sophisticated Core
- [Library] Yung's API

### Fixed:

- Fixed a few server-side log-spam inducing bugs
- Improved InventoryChanged error state handling
- Mimic's having wrong lootr chest texture
- Re-fixed backpack XP upgrade iconography
- Somehow the Fried Egg recipe broke?!?
- Teleposer Foci having a recipe conflict

### Removed:

- Obfuscated names for unknown items has been disabled for now. Will be revisited eventually when I can make it more performant in ItemGator itself
- **IronChests: Restocked WILL BE REMOVED NEXT UPDATE**
  - Due to a large number of minor gripes I've had with this mod, I'm glad to replace it with Expanded Storage now that the dev of said mod has stated
    they'll no longer be unpublishing the mod - it truly is a superior mod. Right now you'll get a chat message letting you know that next update Iron
    Chests be going away and that if you right-click any "Iron Chests" chest, it'll automatically convert & move your items over :)

## v1.0.0-BETA8

### Added:

- Paxi
- New Framing Saw item textures
- New Sawmill item textures
- Silt -> 4x Silt Ball recipe

### Changed:

- Glass now requires a **Blast Furnace** rather than a _Normal Furnace_.
- Resource Packs are now being loaded by Paxi, meaning I no longer need to worry about file names changing, etc. and can more specifically control the
  resource pack loading order to have custom pack-specific resources take precedence over top of Brush-Up! and Brush-Up!++, etc..

### Fixed:

- Xaero Coordinate fix causing server log spam (and not working -- it _definitely_ works now)
- Sodium Shader Incompatibility warning at each startup
- Beams are now craftable (as a result, 16 sticks can no longer be created from stripped logs)
- Stack names being reset when they shouldn't be (not usually applicable)
- Drawer Keys being gated _way_ too late in the game (sorry)
- Piglins should no longer drop arrows (I _did_ forget to test this to verify, but it should be fixed..)
- Mending _sometimes_ being obtainable from certain chest loot tables (specifically in the End as far as I can tell?). Now if you get it on a tool,
  the tool's enchantments will be wiped, and even if you somehow counteract that, Mending actually won't do anything to repair the tool anyways.
- XP Tank Backpack Upgrade having arrows that are _definitively_ pointing the WRONG DIRECTION >:v

### Updated:

- Amendments
- Snow Real Magic
- Structure Essentals
- Many uninteresting library mods

## v1.0.0-BETA7:

### Added:

- Helpful tooltip to explain that some Aether tooltips are dungeon loot only

### Changed:

- Downgraded to NeoForge 47.1.99 so CurseForge support would be easier on me
- Farmer's Delight milk bottle recipe now yields 3 instead of 4 bottles. This is because _canonically_ a bottle of {fluid} is a **third** of a bucket,
  not a **fourth**. (Thanks Ellpeck for pointing this out - I couldn't unsee it)

### Fixed:

- Hopefully fixed the Xaero Coords not being disabled automatically - in my testing, this has been fixed...
- Changed T2 Blood Orb recipe to avoid conflicts
- None of my Miscellany recipes working (thanks auto-formatter for adding parentheses >\_>)
- Quark's Framed Glass being able to be used in the recipe for Quark's Framed Glass (and JEI wanting to use it in making itself, causing an infinite
  and Iron-expensive loop)

## v1.0.0-BETA6:

### Updated:

- Amendments
- Delightful
- Embeddium
- PacketFixer
- Supplementaries
- Supplementaries²
- Text Animator

### Removed:

- NoChatReports (Incompatible with NeoForge)

### Fixed:

- Quest chapters being centered oddly (this was very apparent with the BloodMagic quest)

### Changed:

- For the backpack quest, any type of backpack will now be accepted
- Now using Quark's easy harvesting feature instead of V-Tweaks's

## v1.0.0-BETA5:

### Added

- [Amendments](https://www.curseforge.com/minecraft/mc-mods/amendments)
- [NoChatReport](https://www.curseforge.com/minecraft/mc-mods/no-chat-reports)

### Fixed

- Disabled block face culling to fix AE2 culling
- Disabled Open Parties & Claim's Chunk Loading mechanic (see: actual chunk loaders pls)
- Fixed Cobalt Nylium dropping Netherrack when it should drop Blackstone

### Updated

- Updated AlmostUnified
- Updated Create Connected
- Updated Every Compat
- Updated Mekanism
- Updated Mekanism Generators
- Updated Mekanism Weapons
- Updated Regions Unexplored
- Updated Supplementaries
- Updated Brush-Up!++ Resource Pack
  - Adds lovely new Diamond & Gold Barrel textures
  - Adds sculk-themed background + sculk-themed tabs when creating a new world, etc.

### Changed

- Allowed Quark's inventory management buttons to appear in all containers -- please report any containers that _shouldn't_ have these buttons to me
  on the Discord or as a GitHub issue
- Changed Barley actually balanced
- Cleaned up tooltips, possibly fixed the modname tooltip not working on servers 🤞
- Made Post Boxes much easier to craft
- Removed main menu icons in the four corners
- Reverted changes to the Netherrack break/place sound (you're welcome Ellpeck)
- Created script to automatically disable Xaero's coordinate info display
  - This means your minimap settings won't reset each update anymore, but you'll be unable to use Xaero's Coordinate Display under the minimap (which
    is how I always intended the modpack to be played 😉)

## v1.0.0-BETA4:

- Updated ItemGator to include a critical fix
- Updated NeoForge to v100

## v1.0.0-BETA3:

- Added Open Parties & Claims
- Added OuterEnd Halite -> Mek Salt compat
- Cleaned up duplicate Tuff/Calcite variants between Twigs & Quark

## v1.0.0-BETA2:

- Fixed NeoForge not installing properly

## v1.0.0-BETA1

- Initial Release!
