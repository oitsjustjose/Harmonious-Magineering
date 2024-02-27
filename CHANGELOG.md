# Harmonious Magineering Changelog

## v1.0.0-BETA8

### Added:

- Paxi
- New Framing Saw item textures
- New Sawmill item textures
- Silt -> 4x Silt Ball recipe

### Changed:

- Glass now requires a **Blast Furnace** rather than a _Normal Furnace_.
- Resource Packs are now being loaded by Paxi, meaning I no longer need to worry about file names changing, etc. and can more specifically control the resource pack loading order to have custom pack-specific resources take precedence over top of Brush-Up! and Brush-Up!++, etc..

### Fixed:

- Sodium Shader Incompatibility warning at each startup
- Beams are now craftable (as a result, 16 sticks can no longer be created from stripped logs)
- Stack names being reset when they shouldn't be (not usually applicable)
- Drawer Keys being gated _way_ too late in the game (sorry)
- Piglins should no longer drop arrows (I _did_ forget to test this to verify, but it should be fixed..)
- Mending _sometimes_ being obtainable from certain chest loot tables (specifically in the End as far as I can tell?). Now if you get it on a tool, the tool's enchantments will be wiped, and even if you somehow counteract that, Mending actually won't do anything to repair the tool anyways.

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
- Farmer's Delight milk bottle recipe now yields 3 instead of 4 bottles. This is because _canonically_ a bottle of {fluid} is a **third** of a bucket, not a **fourth**. (Thanks Ellpeck for pointing this out - I couldn't unsee it)

### Fixed:

- Hopefully fixed the Xaero Coords not being disabled automatically - in my testing, this has been fixed...
- Changed T2 Blood Orb recipe to avoid conflicts
- None of my Miscellany recipes working (thanks auto-formatter for adding parentheses >_>)
- Quark's Framed Glass being able to be used in the recipe for Quark's Framed Glass (and JEI wanting to use it in making itself, causing an infinite and Iron-expensive loop)

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

- Allowed Quark's inventory management buttons to appear in all containers -- please report any containers that _shouldn't_ have these buttons to me on the Discord or as a GitHub issue
- Changed Barley actually balanced
- Cleaned up tooltips, possibly fixed the modname tooltip not working on servers 🤞
- Made Post Boxes much easier to craft
- Removed main menu icons in the four corners
- Reverted changes to the Netherrack break/place sound (you're welcome Ellpeck)
- Created script to automatically disable Xaero's coordinate info display
    - This means your minimap settings won't reset each update anymore, but you'll be unable to use Xaero's Coordinate Display under the minimap (which is how I always intended the modpack to be played 😉)

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