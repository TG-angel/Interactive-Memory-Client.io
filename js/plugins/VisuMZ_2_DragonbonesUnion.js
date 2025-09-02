//=============================================================================
// VisuStella MZ - Dragonbones Union
// VisuMZ_2_DragonbonesUnion.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_DragonbonesUnion = true;

var VisuMZ = VisuMZ || {};
VisuMZ.DragonbonesUnion = VisuMZ.DragonbonesUnion || {};
VisuMZ.DragonbonesUnion.version = 1.28;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.28] [DragonbonesUnion]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Dragonbones_Union_VisuStella_MZ
 * @base Public_0_Dragonbones
 * @orderAfter VisuMZ_0_CoreEngine
 * @orderAfter Public_0_Dragonbones
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * DragonBones allows your games to use skeletal animation, a type of computer
 * animation in which a character (or object) is represented by skins/textures
 * and a digital set of interconnected bones (called the skeleton). Using a set
 * of instructions, the game will create animations based off these skins,
 * skeletons, and instructions to create beautifully smooth and light-weight
 * movements.
 *
 * This plugin gives you such control over various facets of your game: the
 * battle system, event pictures, and map sprites for characters. Various
 * plugin commands, notetags, and comment tags are added through this plugin to
 * give you as much control as you need over Dragonbones from the RPG Maker MZ
 * editor itself.
 *
 * The version of Dragonbones used for this plugin is 5.7.002b.
 * More information can be found at http://dragonbones.com/
 *
 * Features include all (but not limited to) the following:
 * 
 * - Adds Dragonbones support to RPG Maker MZ.
 * - Dragonbones armatures can be used as battler sprites.
 * - Dragonbones armatures can be attached to event pictures.
 * - Dragonbones armatures can be inserted into the map as character sprites.
 * - A variety of Plugin Parameters, Notetags, and Plugin Commands to control
 *   the Dragonbones armatures and their animations.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * - Dragonbones*
 *
 * *Note* You can download this library from the below URL or from the
 * Dragonbones Union product page. Install it as a Tier 0 plugin.
 *
 * URL: https://www.npmjs.com/package/pixi5-dragonbones/v/5.7.0-2b
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Dragonbones Naming
 * ============================================================================
 *
 * If you are trying to set up a Dragonbones armature through notetags, Plugin
 * Commands, etc., and are getting the error message "Cannot Read property
 * 'parent' of null", then most likely, the incorrect Dragonbones armature name
 * is being used.
 *
 * ---
 * 
 * To find the Proper Name:
 * 
 * 1. Open up the Dragonbones armature in the Dragonbones editor.
 * 
 * ---
 * 
 * 2. Open the armature's Properties.
 * 
 * ---
 * 
 * 3. Look at what the "Name:" field lists. This is the name to use with the
 *    Dragonbones Union plugin.
 * 
 * ---
 *
 * ============================================================================
 * Dragonbones Armature Behaviors
 * ============================================================================
 *
 * Dragonbones armatures have certain behaviors when used with battlers,
 * pictures, and/or map sprites.
 *
 * ---
 *
 * 1. When a Dragonbones armature is loaded, it will play the 'idle' animation
 *    or whatever is set inside the Plugin Parameters => General Settings =>
 *    Loaded Animation field upon loading. Make your Dragonbones armatures with
 *    this in mind. At other times, the 'idle' animation will be used as a base
 *    defaulting animation.
 *
 * ---
 *
 * 2. The Dragonbones armature will always be anchored at the X, Y coordinates
 *    of the target. This X, Y coordinate point will be where the root/pivot
 *    point of the Dragonbones armature will be located.
 *
 * ---
 *
 * 3. The properties used by a sprite (ie the opacity, scale, rotation, and
 *    tint) will also be shared and/or amplified with the Dragonbones armature.
 *    The exception to this will be Blend Modes aren't supported.
 *
 * ---
 *
 * ============================================================================
 * IMPORTANT!! Dragonbones Armatures as Map Sprites
 * ============================================================================
 *
 * If you plan on using Dragonbones armatures as map sprites, please keep in
 * mind that there will be certain limitations and properties regarding them,
 * which will be listed below:
 *
 * ---
 *
 * 1. Try not to use more than 99 vertices for meshes. The reason behind this
 *    is because the Dragonbones armature is added as a sprite to the game's
 *    Tilemap. Any and all sprites added to the Tilemap have some restrictions
 *    placed on them as per Pixi JS's design. The Dragonbones armatures are no
 *    exception to this.
 *
 *    If the number of vertices exceeds 99, strange things will occur to the
 *    Dragonbones armature that are outside of this plugin's control. While it
 *    won't stop the plugin from functioning properly, expected behaviors may
 *    happen due to the threshold.
 *
 * ---
 *
 * 2. When using Dragonbones armatures that are too tall or wide, they may clip
 *    into the tile layer above or to the side due to how the Tilemap works.
 *    Things that you would see happen would include clipping into the tops of
 *    trees and structures.
 *
 * ---
 *
 * 3. Certain motions will request specific animations from the Dragonbones
 *    armature. If the animations exist, it will play those motions. If they
 *    don't, the motions may request a different animation down the line. The
 *    request orders are as follows:
 *
 *    Jumping:
 *    - jump, walk, idle
 *
 *    Rope (Climbing) (Requires: VisuMZ_1_EventsMoveCore):
 *    - ropeclimb, ladderclimb, walk, ropeidle, ladderidle, idle
 *
 *    Rope (Idle) (Requires: VisuMZ_1_EventsMoveCore):
 *    - ropeidle, ladderidle, idle
 *
 *    Ladder (Climbing):
 *    - ladderclimb, walk, ladderidle, idle
 *
 *    Ladder (Idle):
 *    - ladderidle, idle
 *
 *    Dashing:
 *    - dash, walk, idle
 *
 *    Walking:
 *    - walk, idle
 *
 *    Idle:
 *    - idle
 *
 *    Name the animations for the Dragonbones armature as such to make the most
 *    out of the motion priority lists.
 *
 * ---
 *
 * 4. You can add directional animations for your Dragonbones armature motion
 *    animations. To do so, add a number after the animation's name like such:
 *    walk2, walk4, walk6, walk8. These numbers are based off the NumPad
 *    directions to determine which way to face:
 *
 *    7 8 9
 *    4   6
 *    1 2 3
 *
 *    These numbers are added onto the priority system listed in #3 above, too.
 *    Diagonal directions also become split and added multiple times for better
 *    streamlining, with a priority given to the horizontal direction before
 *    the vertical direction. For example, dashing becomes the following:
 *
 *    Dashing (Upper Left):
 *    - dash7, dash4, dash8, dash,
 *      walk7, walk4, walk8, walk,
 *      idle7, idle4, idle8, idle
 *
 *    Dashing (Right):
 *    - dash6, dash,
 *      walk6, walk,
 *      idle6, idle
 *
 * ---
 *
 * 5. When a Dragonbones armature is moving, it will animate slower or faster
 *    depending on the character's current movement speed. At speed
 *    '4: Normal', it will animation 4x faster than what's seen in Dragonbones.
 *    At speed '6: x4 Faster', it will animate 6x faster while '1: x8 Slower'
 *    will be at x1 speed seen in Dragonbones. In other words, the speed
 *    animated is equal to the number written on the left of the
 *    movement speed.
 *
 *    When dashing, that multiplier increases by 1 in order to match movement
 *    speeds and the Dragonbones armature will do the same to follow.
 *
 * ---
 *
 * You will need to create your Dragonbones armatures with these 5 key rules in
 * mind in order to make the armatures animate smoothly within your game.
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 *
 * VisuMZ_3_StateTooltips
 *
 * If you are using a Dragonbones Battler and want to apply a state tooltip to
 * it, the access area of the battler will be based on the hitbox size you
 * declare for the Dragonbones Battler with notetags. This is because all
 * Dragonbones battlers do not have innate automatically calculated hitbox
 * sizes as a result of their dynamically animated nature.
 * 
 * Please refer to the notetag section of the Dragonbones Union plugin for
 * Dragonbones Battler hitboxes to learn how to apply hitbox sizes.
 *
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 *
 * === Dragonbones Battler Notetags ===
 *
 * The following notetags are to be assigned to either actors and/or enemies.
 * An assigned actor/enemy will have their original sprite hidden from view in
 * favor of the Dragonbones armature to be displayed. Use these notetags to
 * declare various settings for your Dragonbones armatures.
 *
 * ---
 *
 * <Dragonbones Battler: filename>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets the DragonBones associated with this actor/enemy to be 'filename'.
 * - The name will be associated with the assets used.
 * - It will be used to check for associated filenames that end with _ske.json,
 *   _tex.json, and _tex.png.
 * - The listed assets must be found in the assigned assets folder.
 *
 * Examples:
 *
 * <Dragonbones Battler: Demon>
 * <Dragonbones Battler: DragonBoy>
 * <Dragonbones Battler: Swordsman>
 * <Dragonbones Battler: Ubbie>
 *
 * ---
 *
 * <Dragonbones Battler Scale: x, y>
 *
 * <Dragonbones Battler Scale X: x>
 * <Dragonbones Battler Scale Y: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets the base scale for the Dragonbones associated with this actor/enemy.
 *   This is for those instances where a Dragonbones armature is too large or
 *   small and needs to be scaled down/up.
 * - This scale will be amplified by the actor/enemy's sprite's scale value.
 * - Use the 1st notetag to assign values to both Scale X and Scale Y.
 * - Use the 2nd/3rd notetags to assign Scale X and Y values separately.
 * - Use negative values to flip the Dragonbones armature around.
 *
 * Examples:
 * 
 * <Dragonbones Battler Scale: -0.3, 0.3>
 *
 * <Dragonbones Battler Scale X: -0.3>
 * <Dragonbones Battler Scale Y: 0.3>
 *
 * ---
 *
 * <Dragonbones Battler Offset: x, y>
 *
 * <Dragonbones Battler Offset X: x>
 * <Dragonbones Battler Offset Y: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - When a Dragonbones armature is attached to an actor/enemy's sprite, it
 *   will always be attached at the root point assigned within the Dragonbones
 *   data. If a Dragonbones armature has a root point that does not fit well
 *   with your battler sprite, you can offset it using these notetags.
 * - Replace 'x' and 'y' with number values representing how many pixels you
 *   want to offset the Dragonbones armature by.
 * - Use the 1st notetag to assign values to both Offset X and Offset Y.
 * - Use the 2nd/3rd notetags to assign Offset X and Y values separately.
 * - Use negative values to offset to the left (X) or up (Y) directions.
 *
 * Examples:
 *
 * <Dragonbones Battler Offset: -10, 5>
 *
 * <Dragonbones Battler Offset X: -10>
 * <Dragonbones Battler Offset Y: 5>
 *
 * ---
 *
 * <Dragonbones Battler Size: width, height>
 *
 * <Dragonbones Battler Width: x>
 * <Dragonbones Battler Height: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Dragonbones armatures have no standard width or height. This makes it
 *   problematic when trying to calculate the sprite's width/height for Action
 *   Sequences and the like. These notetags allow you to assign a width and
 *   height value to the sprite, despite the fact the Dragonbones armatures
 *   have no such thing.
 * - Replace 'width', 'height', or 'x' with number values representing the
 *   dimension values in pixels.
 * - Use the 1st notetag to assign values to both Width and Height.
 * - Use the 2nd/3rd notetags to assign Width and Height values separately.
 * - If these notetags aren't used, then use the values defined by default in
 *   Plugin Parameters => Battler Settings => Default => Width/Height.
 *
 * Examples:
 *
 * <Dragonbones Battler Size: 50, 100>
 *
 * <Dragonbones Battler Width: 50>
 * <Dragonbones Battler Height: 100>
 *
 * ---
 *
 * <Dragonbones Battler Time Scale: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Lets you adjust the time scale for the Dragonbones armature.
 * - Replace 'x' with a number value depicting how fast the armature should
 *   animate.
 *   - 1.0 is the default value.
 *   - Higher numbers animate faster.
 *   - Lower numbers animate slower.
 *   - If a number is too small, it may not animate at all.
 *
 * Example:
 *
 * <Dragonbones Battler Time Scale: 1.5>
 *
 * ---
 *
 * <Dragonbones Battler Motion Walk: animation>
 * <Dragonbones Battler Motion Wait: animation>
 * <Dragonbones Battler Motion Chant: animation>
 * <Dragonbones Battler Motion Guard: animation>
 * <Dragonbones Battler Motion Damage: animation>
 * <Dragonbones Battler Motion Evade: animation>
 * <Dragonbones Battler Motion Thrust: animation>
 * <Dragonbones Battler Motion Swing: animation>
 * <Dragonbones Battler Motion Missile: animation>
 * <Dragonbones Battler Motion Skill: animation>
 * <Dragonbones Battler Motion Spell: animation>
 * <Dragonbones Battler Motion Item: animation>
 * <Dragonbones Battler Motion Escape: animation>
 * <Dragonbones Battler Motion Victory: animation>
 * <Dragonbones Battler Motion Dying: animation>
 * <Dragonbones Battler Motion Abnormal: animation>
 * <Dragonbones Battler Motion Sleep: animation>
 * <Dragonbones Battler Motion Dead: animation>
 *
 * - Used for: Actor, Enemy Notetags
 * - Use these notetags to assign Dragonbones animations to play when the
 *   actor/enemy sprite is supposed to play such a motion.
 * - Replace 'animation' with the name of the Dragonbones animation.
 * - If this notetag is not used, when such a motion is rquested, it will
 *   default to attempting to play the animation name equal to the motion.
 * - Animation names do not need to be case sensitive.
 * - If no animation is found, then no animation will be played.
 *
 * Examples:
 *
 * <Dragonbones Battler Motion Wait: idle>
 * <Dragonbones Battler Motion Swing: attack>
 * <Dragonbones Battler Motion Thrust: attack>
 * <Dragonbones Battler Motion Missle: attack>
 * <Dragonbones Battler Motion Skill: special>
 * <Dragonbones Battler Motion Spell: special>
 * <Dragonbones Battler Motion Dead: defeated>
 *
 * ---
 *
 * <Dragonbones Battler Settings>
 *  Battler: filename
 *  
 *  Scale: x, y
 *
 *  Scale X: x
 *  Scale Y: x
 *
 *  Offset: x, y
 *
 *  Offset X: x
 *  Offset Y: x
 *
 *  Size: width, height
 *
 *  Width: x
 *  Height: x
 *
 *  Time Scale: x
 *
 *  Motion Walk: animation
 *  Motion Wait: animation
 *  Motion Chant: animation
 *  Motion Guard: animation
 *  Motion Damage: animation
 *  Motion Evade: animation
 *  Motion Thrust: animation
 *  Motion Swing: animation
 *  Motion Missile: animation
 *  Motion Skill: animation
 *  Motion Spell: animation
 *  Motion Item: animation
 *  Motion Escape: animation
 *  Motion Victory: animation
 *  Motion Dying: animation
 *  Motion Abnormal: animation
 *  Motion Sleep: animation
 *  Motion Dead: animation
 * </Dragonbones Battler Settings>
 *
 * - Used for: Actor, Enemy Notetags
 * - The above notetag allows to wrap up all the information you'd like to
 *   set for Dragonbones battler armatures needed inside a single notetag
 *   container.
 * - The settings are the same as the notetags listed above it.
 * - You may remove the settings you don't wish to change.
 * - The only necessary data is the 'Battler: filename' line.
 *
 * Example:
 *
 * <Dragonbones Battler Settings>
 *  Battler: Demon
 *  
 *  Scale: 0.3, 0.3
 *
 *  Size: 80, 80
 *
 *  Motion Wait: idle
 *  Motion Damage: hit
 *  Motion Swing: attack
 *  Motion Thrust: attack
 *  Motion Missile: attack
 *  Motion Skill: special
 *  Motion spell: special
 *  Motion Dead: defeated
 * </Dragonbones Battler Settings>
 *
 * ---
 * 
 * <Dragonbones Hue Affected>
 * 
 * - Used for: Enemy Notetags
 * - The above notetag enables hues to affect enemy battlers.
 * - This will bypass the Plugin Parameter default settings.
 * 
 * ---
 * 
 * <Dragonbones No Hue>
 * 
 * - Used for: Enemy Notetags
 * - The above notetag disables hues to affect enemy battlers.
 * - This will bypass the Plugin Parameter default settings.
 * 
 * ---
 *
 * === Dragonbones Map Sprite Notetags & Comment Tags ===
 *
 * You can also use Dragonbones armatures as map sprites. When used, any of the
 * original sprites before will become invisible and will be replaced with the
 * Dragonbones armature.
 *
 * These notetags can be used for actors and events. In the case of events,
 * both notetags and comment tags can be used to determine what settings to use
 * for the Dragonbones armatures.
 *
 * Be cautious when using Comment Tags for event pages since comments contain a
 * maximum line count of 6.
 *
 * ---
 *
 * <Dragonbones Sprite: filename>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Sets the DragonBones associated with this map sprite to be 'filename'.
 * - The name will be associated with the assets used.
 * - It will be used to check for associated filenames that end with _ske.json,
 *   _tex.json, and _tex.png.
 * - The listed assets must be found in the assigned assets folder.
 *
 * Examples:
 *
 * <Dragonbones Sprite: Demon>
 * <Dragonbones Sprite: DragonBoy>
 * <Dragonbones Sprite: Swordsman>
 * <Dragonbones Sprite: Ubbie>
 *
 * ---
 *
 * <Dragonbones Sprite Scale: x, y>
 *
 * <Dragonbones Sprite Scale X: x>
 * <Dragonbones Sprite Scale Y: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Sets the base scale for the Dragonbones associated with this map sprite.
 *   This is for those instances where a Dragonbones armature is too large or
 *   small and needs to be scaled down/up.
 * - This scale will be amplified by the character's sprite's scale value.
 * - Use the 1st notetag to assign values to both Scale X and Scale Y.
 * - Use the 2nd/3rd notetags to assign Scale X and Y values separately.
 * - Use negative values to flip the Dragonbones armature around.
 *
 * Examples:
 * 
 * <Dragonbones Sprite Scale: -0.3, 0.3>
 *
 * <Dragonbones Sprite Scale X: -0.3>
 * <Dragonbones Sprite Scale Y: 0.3>
 *
 * ---
 *
 * <Dragonbones Sprite Offset: x, y>
 *
 * <Dragonbones Sprite Offset X: x>
 * <Dragonbones Sprite Offset Y: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - When a Dragonbones armature is attached to an character's map sprite, it
 *   will always be attached at the root point assigned within the Dragonbones
 *   data. If a Dragonbones armature has a root point that does not fit well
 *   with your battler sprite, you can offset it using these notetags.
 * - Replace 'x' and 'y' with number values representing how many pixels you
 *   want to offset the Dragonbones armature by.
 * - Use the 1st notetag to assign values to both Offset X and Offset Y.
 * - Use the 2nd/3rd notetags to assign Offset X and Y values separately.
 * - Use negative values to offset to the left (X) or up (Y) directions.
 *
 * Examples:
 *
 * <Dragonbones Sprite Offset: -10, 5>
 *
 * <Dragonbones Sprite Offset X: -10>
 * <Dragonbones Sprite Offset Y: 5>
 *
 * ---
 *
 * <Dragonbones Sprite Time Scale: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets you adjust the time scale for the Dragonbones armature.
 * - Replace 'x' with a number value depicting how fast the armature should
 *   animate.
 *   - 1.0 is the default value.
 *   - Higher numbers animate faster.
 *   - Lower numbers animate slower.
 *   - If a number is too small, it may not animate at all.
 *
 * Example:
 *
 * <Dragonbones Sprite Time Scale: 1.5>
 *
 * ---
 * 
 * <Dragonbones Sprite Walk Rate: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets you adjust the animation speed for the Dragonbones armature only
 *   when it is walking.
 * - Replace 'x' with a number value depicting how fast the armature should
 *   animate.
 *   - 1.0 is the default value.
 *   - Higher numbers animate faster.
 *   - Lower numbers animate slower.
 *   - If a number is too small, it may not animate at all.
 * - If used with the <Dragonbones Sprite Time Scale: x>, the speed will stack
 *   multiplicatively.
 *
 * Example:
 *
 * <Dragonbones Sprite Walk Rate: 1.5>
 * 
 * ---
 * 
 * <Dragonbones Sprite Dash Rate: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets you adjust the animation speed for the Dragonbones armature only
 *   when it is dashing.
 * - Replace 'x' with a number value depicting how fast the armature should
 *   animate.
 *   - 1.0 is the default value.
 *   - Higher numbers animate faster.
 *   - Lower numbers animate slower.
 *   - If a number is too small, it may not animate at all.
 * - If used with the <Dragonbones Sprite Time Scale: x>, the speed will stack
 *   multiplicatively.
 *
 * Example:
 *
 * <Dragonbones Sprite Dash Rate: 1.5>
 * 
 * ---
 *
 * <Dragonbones Sprite Size: width, height>
 *
 * <Dragonbones Sprite Width: x>
 * <Dragonbones Sprite Height: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Dragonbones armatures have no standard width or height. This makes it
 *   problematic when trying to calculate the sprite's width/height for various
 *   plugins that use it. These notetags allow you to assign a width and
 *   height value to the sprite, despite the fact the Dragonbones armatures
 *   have no such thing.
 * - Replace 'width', 'height', or 'x' with number values representing the
 *   dimension values in pixels.
 * - Use the 1st notetag to assign values to both Width and Height.
 * - Use the 2nd/3rd notetags to assign Width and Height values separately.
 * - If these notetags aren't used, then use the values defined by default in
 *   the Plugin Parameters.
 *
 * Examples:
 *
 * <Dragonbones Sprite Size: 48, 64>
 *
 * <Dragonbones Sprite Width: 48>
 * <Dragonbones Sprite Height: 64>
 *
 * ---
 *
 * <Dragonbones Sprite Flip Left>
 * <Dragonbones Sprite Flip Right>
 *
 * <Dragonbones Sprite No Flip Left>
 * <Dragonbones Sprite No Flip Right>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets the map sprite know to flip itself when facing either the left/right
 *   directions in order to reuse animations.
 * - The 'No' variants will prevent flipping from occuring.
 * - These notetags will override settings applied in the Plugin Parameters.
 *
 * ---
 *
 * <Dragonbones Sprite Motion Idle: animation>
 * <Dragonbones Sprite Motion Walk: animation>
 * <Dragonbones Sprite Motion Dash: animation>
 * <Dragonbones Sprite Motion Jump: animation>
 * <Dragonbones Sprite Motion LadderIdle: animation>
 * <Dragonbones Sprite Motion LadderClimb: animation>
 * <Dragonbones Sprite Motion RopeIdle: animation>
 * <Dragonbones Sprite Motion RopeClimb: animation>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets you set specific animations different from the ones listed in the
 *   Plugin Parameters for specific motions.
 * - Replace 'animation' with the name of the Dragonbones animation.
 * - If this notetag is not used, when such a motion is rquested, it will
 *   default to attempting to play the animation name equal to the motion.
 * - Animation names do not need to be case sensitive.
 * - If no animation is found, then no animation will be played.
 *
 * Example:
 *
 * <Dragonbones Sprite Motion Idle: stand>
 * <Dragonbones Sprite Motion Walk: move>
 * <Dragonbones Sprite Motion Dash: run>
 * <Dragonbones Sprite Motion Jump: hop>
 *
 * ---
 *
 * <Dragonbones Sprite Settings>
 *  Filename: filename
 *
 *  Scale: x, y
 *
 *  Scale X: x
 *  Scale Y: x
 *
 *  Offset: x, y
 *
 *  Offset X: x
 *  Offset Y: x
 *
 *  Time Scale: x
 * 
 *  Walk Rate: x
 *  Dash Rate: x
 *
 *  Width: x
 *  Height: x
 *
 *  Flip Left
 *  Flip Right
 *
 *  No Flip Left
 *  No Flip Right
 *
 *  Motion Idle: animation
 *  Motion Walk: animation
 *  Motion Dash: animation
 *  Motion Jump: animation
 *  Motion LadderIdle: animation
 *  Motion LadderClimb: animation
 *  Motion RopeIdle: animation
 *  Motion RopeClimb: animation
 * </Dragonbones Sprite Settings>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - The above notetag allows to wrap up all the information you'd like to
 *   set for Dragonbones battler armatures needed inside a single notetag
 *   container.
 * - The settings are the same as the notetags listed above it.
 * - You may remove the settings you don't wish to change.
 * - The only necessary data is the 'Filename: filename' line.
 *
 * Example:
 *
 * <Dragonbones Sprite Settings>
 *  Filename: Ubbie
 *
 *  Scale: 0.1, 0.1
 *
 *  Flip Right
 *
 *  Motion Idle: stand
 *  Motion Walk: walk
 * </Dragonbones Sprite Settings>
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Battler Plugin Commands ===
 * 
 * ---
 *
 * Battler: Actor Change Settings
 * - Change target actor's Dragonbones armature settings for battle.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *     Filename:
 *     - Change the armature's filename.
 *
 *     Offset X:
 *     - Change the armature's Offset X value.
 *
 *     Offset Y:
 *     - Change the armature's Offset Y value.
 *
 *     Scale X:
 *     - Change the armature's Scale X value.
 * 
 *     Scale Y:
 *     - Change the armature's Scale Y value.
 *
 *     Time Scale:
 *     - Change the armature's Time Scale value.
 *
 *     Width:
 *     - Change the battler width size.
 *
 *     Height:
 *     - Change the battler height size.
 *
 *   Motion Settings:
 *
 *     Walk:
 *     Wait:
 *     Chant:
 *     Guard:
 *     Damage:
 *     Evade:
 *     Thrust:
 *     Swing:
 *     Missile:
 *     Skill:
 *     Spell:
 *     Item:
 *     Escape:
 *     Victory:
 *     Dying:
 *     Abnormal:
 *     Sleep:
 *     Dead:
 *     - Change the animation used for this motion.
 *
 * ---
 * 
 * === Map Sprite Plugin Commands ===
 * 
 * ---
 *
 * Map Sprite: Actor Change Settings
 * - Change target actor's Dragonbones armature settings for map sprites.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *     Filename:
 *     - Change the armature's filename.
 *
 *     Offset X:
 *     - Change the armature's Offset X value.
 *
 *     Offset Y:
 *     - Change the armature's Offset Y value.
 *
 *     Scale X:
 *     - Change the armature's Scale X value.
 * 
 *     Scale Y:
 *     - Change the armature's Scale Y value.
 *
 *     Time Scale:
 *     - Change the armature's Time Scale value.
 * 
 *       Walk Rate:
 *       - Change the armature's walk animation rate.
 * 
 *       Dash Rate:
 *       - Change the armature's dash animation rate.
 *
 *     Width:
 *     - Change the battler width size.
 *
 *     Height:
 *     - Change the battler height size.
 *
 *   Flip Settings:
 *
 *     Flip Left?:
 *     Flip Right:
 *     - Flip the scale x value when facing left/right-ward directions?
 *
 *   Motion Settings:
 *
 *     Idle:
 *     Walk:
 *     Dash:
 *     Jump:
 *     Ladder (Idle):
 *     Ladder (Climb):
 *     Rope (Idle):
 *     Rope (Climb):
 *     - Base rope climbing animation name used.
 *
 * ---
 *
 * Map Sprite: Actor Play Animation
 * - Target actor plays a custom Dragonbones animation.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *   Play Animation:
 *   - Play this animation.
 *
 * NOTE: An alternative to this is to put the following code inside of a
 *       Movement Route's script call:
 *
 *       this.dragonbonesAnimation = "AnimationName";
 *
 *       Replace 'AnimationName' (keep the quotes) with the name of the
 *       Dragonbones animation.
 *
 * ---
 *
 * Map Sprite: Actor Stop Animation
 * - Stops a target actor's custom Dragonbones animation.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 * ---
 *
 * Map Sprite: Event Play Animation
 * - Target event plays a custom Dragonbones animation.
 *
 *   Event ID:
 *   - Select which Event ID to affect.
 *
 *   Play Animation:
 *   - Play this animation.
 *
 * ---
 *
 * Map Sprite: Event Stop Animation
 * - Stops a target event's custom Dragonbones animation.
 *
 *   Event ID:
 *   - Select which Event ID to affect.
 *
 * ---
 *
 * Map Sprite: Follower Play Animation
 * - Target follower plays a custom Dragonbones animation.
 *
 *   Follower Index:
 *   - Select which Follower Index to affect.
 *
 *   Play Animation:
 *   - Play this animation.
 *
 * ---
 *
 * Map Sprite: Follower Stop Animation
 * - Stops a target follower's custom Dragonbones animation.
 *
 *   Follower ID:
 *   - Select which Follower Index to affect.
 *
 * ---
 *
 * Map Sprite: Player Play Animation
 * - Player plays a custom Dragonbones animation.
 *
 *   Play Animation:
 *   - Play this animation.
 *
 * ---
 *
 * Map Sprite: Player Stop Animation
 * - Stops player's custom Dragonbones animation.
 *
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 *
 * Picture: Dragonbones Setup
 * - Setup a Dragonbones armature for a picture.
 *
 *   Picture ID:
 *   - Select which Picture ID(s) to give a Dragonbones armature.
 *
 *   Armature Filename:
 *   - What is the armature's filename?
 *
 *   Play Animation:
 *   - Play this animation once it starts.
 *
 *   Offset: X:
 *   - Default X offset value for this Dragonbones armature.
 *
 *   Offset: Y:
 *   - Default Y offset value for this Dragonbones armature.
 *
 *   Scale: X:
 *   - Default X scaling for this Dragonbones armature.
 *   - This will be amplified by the picture's scaling value.
 *
 *   Scale: Y:
 *   - Default Y scaling for this Dragonbones armature.
 *   - This will be amplified by the picture's scaling value.
 *
 *   Time Scale:
 *   - Default time scale for this Dragonbones armature.
 *   - Higher values play faster. Lower values play slower.
 *
 * ---
 *
 * Picture: Play Dragonbones Animation
 * - Make an existing Dragonbones armature attached to a picture play
 *   an animation.
 *
 *   Picture ID:
 *   - Select which Picture ID to modify.
 *
 *   Play Animation:
 *   - Play this animation.
 * 
 *   Finish: Revert Idle:
 *   - Revert animation to 'idle' animation after finishing?
 *
 * ---
 *
 * Picture: Offset Dragonbones
 * - Offset the X, Y attachment point of the Dragonbones armature.
 *
 *   Picture ID:
 *   - Select which Picture ID to modify.
 *
 *   Offset: X:
 *   - X offset value for this Dragonbones armature.
 *
 *   Offset: Y:
 *   - Y offset value for this Dragonbones armature.
 *
 * ---
 *
 * Picture: Scale Dragonbones
 * - Change the scaling values of the Dragonbones armature.
 *
 *   Picture ID:
 *   - Select which Picture ID to modify.
 *
 *   Scale: X:
 *   - X scaling for this Dragonbones armature.
 *   - This will be amplified by the picture's scaling value.
 *
 *   Scale: Y:
 *   - Y scaling for this Dragonbones armature.
 *   - This will be amplified by the picture's scaling value.
 *
 * ---
 *
 * Picture: Time Scale Dragonbones
 * - Change the speed at which Dragonbones animations play.
 *
 *   Picture ID:
 *   - Select which Picture ID to modify.
 *
 *   Time Scale:
 *   - Time scale for this Dragonbones armature.
 *   - Higher values play faster. Lower values play slower.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the general settings that apply to all uses of Dragonbones through
 * this plugin. While the majority of these can remain unchanged, for those who
 * wish to customize the nature of the plugin to their liking can do so through
 * these Plugin Parameters.
 *
 * ---
 *
 * Assets Path
 * - The filepath to the directory that houses all the Dragonbone files.
 *
 * ---
 *
 * Defaults
 * 
 *   Loaded Animation:
 *   - The default animation to play once a Dragonbones armature is loaded.
 * 
 *   Looping Animations:
 *   - Force these animations to become looping animations even if they don't
 *     loop in Dragonbones.
 *
 * ---
 *
 * Skeletal Data
 * Texture Data
 * Texture Asset
 * 
 *   Key:
 *   - Key used to determine where needed data is stored.
 * 
 *   Extension:
 *   - Extension used to determine which files contain needed data.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battler Settings
 * ============================================================================
 *
 * Actor and Enemy sprites can have Dragonbones armatures attached to them as
 * sprites. Use these settings to make the Dragonbones armatures fit your needs
 * in battle.
 *
 * ---
 *
 * Default Settings
 * 
 *   Enemy Hue Affected?:
 *   - Affect hues for enemies with Dragonbones battlers?
 * 
 *   Offset: X:
 *   - Default X offset for battler sprites.
 * 
 *   Offset: Y:
 *   - Default Y offset for battler sprites.
 * 
 *   Scale: X:
 *   - Default scale for X used by Dragonbones battlers.
 * 
 *     Flip for Actors?:
 *     Flip for Enemies?:
 *     - Flip the scale x value into negative automatically for all actors
 *       or enemies?
 * 
 *   Scale: Y:
 *   - Default scale for Y used by Dragonbones battlers.
 * 
 *   Width:
 *   - Treat battler sprites as if they have this width.
 *   - Used for Action Sequences.
 * 
 *   Height:
 *   - Treat battler sprites as if they have this height.
 *   - Used for Action Sequences.
 *
 * ---
 * 
 * Idle Bypass
 * 
 *   List:
 *   - This is a list of animations that will not return back to the idle
 *     animation after completion.
 *   - Remove them if you want them to revert back to the idle animation
 *     after completion.
 *   - Add to the list if you want animations to stay in their final frame.
 * 
 * ---
 *
 * Default Motions
 * 
 *   Walk:
 *   Wait:
 *   Chant:
 *   Guard:
 *   Damage:
 *   Evade:
 *   Thrust:
 *   Swing:
 *   Missile:
 *   Skill:
 *   Spell:
 *   Item:
 *   Escape:
 *   Victory:
 *   Dying:
 *   Abnormal:
 *   Sleep:
 *   Dead:
 *   - Play this Dragonbones animation whenever this motion is requested
 *     by default.
 *   - Used for Action Sequences.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Map Sprite Settings
 * ============================================================================
 *
 * These Plugin Parameter settings adjust the default configurations for any
 * map sprite that's using a Dragonbones armature. These settings can be
 * overwritten on per a sprite basis using notetags and comment tags, too.
 *
 * ---
 *
 * Defaults
 * 
 *   Offset: X:
 *   - Default X offset for map sprites.
 * 
 *   Offset: Y:
 *   - Default Y offset for map sprites.
 * 
 *   Scale: X:
 *   - Default scale for X used by Dragonbones map sprites.
 * 
 *     Flip Left?:
 *     Flip Right?:
 *     - Flip the scale x value when facing left/right-ward directions?
 * 
 *   Scale: Y:
 *   - Default scale for Y used by Dragonbones map sprites.
 * 
 *   Time Scale:
 *   - The rate at which animations play.
 *   - Higher numbers go faster.
 * 
 *   Width:
 *   - Treat map sprites as if they have this width.
 *   - Used for various plugins.
 * 
 *   Height:
 *   - Treat map sprites as if they have this height.
 *   - Used for various plugins.
 *
 * ---
 *
 * Motion Settings
 * 
 *   Idle:
 *   Walk:
 *   Dash:
 *   Jump:
 *   Ladder (Idle):
 *   Ladder (Climb):
 *   Rope (Idle):
 *   Rope (Climb):
 *   - Base walk animation name used.
 * 
 *   Walk Timer:
 *   - Number of frames to count as walking so that an idle animation isn't
 *     immediately forced upon stopping.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Experimental Settings
 * ============================================================================
 *
 * These settings are experimental and have not been tested extensively yet.
 *
 * ---
 *
 * Experimental Settings
 * 
 *   Enemy Stances:
 *   - Enemies can use stance motions for idling such as chanting,
 *     guarding, etc.
 *   - Requires VisuMZ_1_BattleCore!
 *   - This is not available normally since animations are not available for
 *     enemies with the base RPG Maker MZ core scripts.
 *   - Disable this to use the default animation flow for enemies.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 *
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * Special Thanks To
 * 
 * * Green Kel
 * * Ækashics
 * * Swift Illusion
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.28: August 17, 2023
 * * Feature Update!
 * ** If a Dragonbones battler has an "idle" animation, it will no longer
 *    utilize the "walk" motion and instead, refer to its own "idle" motion.
 *    Update made by Irina.
 * ** If a Dragonbones map sprite has a non-looping animation with a playtime
 *    value of 1, the animation will halt at the last frame instead of looping
 *    or reverting to the first neutral frame. Update made by Irina.
 * 
 * Version 1.27: July 13, 2023
 * * Bug Fixes!
 * ** Fixed a bug that made dragonbones armatures persist after removing party
 *    members from the team. Fix made by Irina.
 * 
 * Version 1.26: May 18, 2023
 * * Bug Fixes!
 * ** Fixed a bug that caused scene changes back into the battle scene would
 *    cause collapsed Dragonbones Battlers to reappear. Fix made by Arisu.
 * 
 * Version 1.25: March 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that caused some Dragonbones animations to be unable to play
 *    on map sprites if they are facing specific directions. Fix made by Irina.
 * 
 * Version 1.24: February 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that the "Flip Actors" and "Flip Enemies" parameters did not
 *    work properly after using a scale X notetag. Fix made by Olivia.
 * 
 * Version 1.23: January 20, 2023
 * * Feature Update!
 * ** Guard animations should no longer temporarily default to idle stances if
 *    an unnamed animation does not exist if the battler is guarding. Update
 *    made by Irina.
 * 
 * Version 1.22: December 15, 2022
 * * Compatibility Update!
 * ** Should now work with RPG Maker MZ version 1.6.1's updated Pixi JS version
 *    of 5.3.12 from 5.2.4. If ya don't have this plugin updated and you are
 *    using 5.3.12 onward, your battlers won't be loading.
 * 
 * Version 1.21: November 24, 2022
 * * Bug Fixes!
 * ** Custom motions now work better with non-actor participants during actions
 *    involving dragonbones battlers. Fix made by Arisu.
 * 
 * Version 1.20: November 17, 2022
 * * Bug Fixes!
 * ** "Damage" motion wasn't working properly for actors. This should now be
 *    fixed and working properly.
 * * Bug Fixes!
 * ** "Escape" motion should now work properly with Dragonbones actors. Idle
 *    motions will no longer take priority over them.
 * 
 * Version 1.19: November 10, 2022
 * * Bug Fixes!
 * ** Fixed a bug from the v1.18 update that prevented custom motions from
 *    being displayed properly with actors. Fix made by Irina.
 * 
 * Version 1.18: October 13, 2022
 * * Compatibility Update!
 * ** Plugin should be more compatible with VisuMZ_3_VisualStateEffect.
 * 
 * Version 1.17: January 27, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Added Plugin Command Parameter for "Picture: Play Dragonbones Animation":
 * *** Finish: Revert Idle?
 * **** Revert animation to 'idle' animation after finishing?
 * **** Added by Irina
 *
 * Version 1.16: January 6, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.15: June 18, 2021
 * * Compatibility Update
 * ** Compatibility update with Elements and Status Menu Core's trait hues.
 *    These will be affected by the notetags and/or Plugin Parameters applied.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Irina and sponsored by Ækashics:
 * *** <Dragonbones Hue Affected>
 * *** <Dragonbones No Hue>
 * **** Determines if this enemy's Dragonbones battler is affected by hues
 *      or not. This will bypass the Plugin Parameter's default value.
 * ** New Plugin Parameter added by Irina and sponsored by Ækashics:
 * *** Plugin Parameters > Battler Settings > Default > Enemy Hue Affected?
 * **** Affect hues for enemies with Dragonbones battlers?
 * **** This will be disabled by default. Enable it or set it to true to make
 *      it work properly.
 * 
 * Version 1.14: April 2, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_3_StateTooltips plugin.
 * 
 * Version 1.13: March 19, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > Experimental: Enemy Stances
 * **** Allows enemies to utilize stance motions for idling such as chanting,
 *      guarding, etc.
 * **** Requires VisuMZ_1_BattleCore!
 * **** This is not available normally since animations are not available for
 *      enemies with the base RPG Maker MZ core scripts.
 * **** Disable this to use the default animation flow for enemies.
 * 
 * Version 1.12: February 19, 2021
 * * Bug Fixes!
 * ** Fixed a bug that would cause a crash upon teleporting with an altering
 *    Dragonbones armature load without a base sprite. Fix made by Irina.
 * 
 * Version 1.11: February 12, 2021
 * * Bug Fixes!
 * ** Fixed a bug involving the changing of a Dragonbones battler in-battle to
 *    prevent multiple instances being added at once. Fix made by Irina.
 * 
 * Version 1.10: January 22, 2021
 * * Bug Fixes!
 * ** Upon changing map sprites, Dragonbones characters would become skewed.
 *    This should no longer happen.
 * * Documentation Update!
 * ** Updated help file for new features.
 * * New Features!
 * ** Map Sprite: Actor Change Settings new Plugin Command parameters
 * *** "Walk Rate" and "Dash Rate" modifiers added.
 * 
 * Version 1.09: November 29, 2020
 * * Bug Fixes!
 * ** Dragonbones height for actors is no longer affected by frame divisibility
 *    for SV Actors to skew the positions of height data. Fix made by Arisu.
 * 
 * Version 1.08: November 15, 2020
 * * Documentation Update!
 * ** Updated help file for new features.
 * * New Features!
 * ** Two new notetags have been added for map sprites by Irina.
 * *** <Dragonbones Sprite Walk Rate: x>
 * *** <Dragonbones Sprite Dash Rate: x>
 * **** These two new notetags allow you to animate specific Dragonbones
 *      animations at a different speed when walking or dashing. These speed
 *      multipliers will stack multiplicatively with the time scale.
 * 
 * Version 1.07: October 25, 2020
 * * Bug Fixes!
 * ** Dead animations for actors no longer keep looping upon motion refreshes.
 *    Fix made by Irina.
 * * Documentation Update!
 * ** Updated help file for new features.
 * * New Features!
 * ** New plugin parameter added by Irina.
 * *** Plugin Parameters > Battler Settings > Idle Bypass > List
 * **** This is a list of animations that will not return back to the idle
 *      animation after completion. Remove them if you want them to revert back
 *      to the idle animation after completion. Add to the list if you want
 *      animations to stay in their final frame.
 * 
 * Version 1.06: October 18, 2020
 * * Bug Fixes!
 * ** Enemies with Dragonbones battlers transforming into other enemies with
 *    Dragonbones battlers will now attach the sprites properly. Fix by Yanfly.
 * ** Enemies with Dragonbones battlers transforming into enemies without them
 *    will now remove the non-transformed bitmap.
 * * Documentation Update!
 * ** Added the 'Dragonbones Naming' section.
 * 
 * Version 1.05: October 4, 2020
 * * Bug Fixes!
 * ** Selected Dragonbones battlers will no longer leave behind a residual
 *    blink effect. Fix made by Irina.
 * ** There should be no more crashes from map events that have been previously
 *    deleted but not cleared from the map event list. Fix made by Irina.
 * 
 * Version 1.04: September 20, 2020
 * * Bug Fixes!
 * ** Hidden enemies with Dragonbones should be invisible at the start of
 *    battle. Fix made by Yanfly.
 * 
 * Version 1.03: September 13, 2020
 * * Compatibility Update!
 * ** Added compatibility with the new Battle Core v1.04 features!
 * 
 * Version 1.02: September 6, 2020
 * * Bug Fixes!
 * ** Previously, a Dragonbones battler does not show the blinking indicator if
 *    the battler is a selected target. This is now fixed. Fix made by Yanfly.
 * ** Prevents a crash now if no bitmap is detected for the main sprite.
 * 
 * Version 1.01: August 30, 2020
 * * Bug Fixes!
 * ** Erasing a picture no longer causes a crash when changing scenes. Fix made
 *    by Yanfly.
 * * Compatibility Update
 * ** Added compatibility for VisuStella MZ's Visual State Effects.
 *
 * Version 1.00: August 24, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Battler_ActorChange
 * @text Battler: Actor Change Settings
 * @desc Change target actor's Dragonbones armature settings for battle.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Filename:str
 * @text Filename
 * @parent ActorID:num
 * @desc Change the armature's filename.
 * @default name
 *
 * @arg OffsetX:eval
 * @text Offset X
 * @parent ActorID:num
 * @desc Change the armature's Offset X value.
 * @default 0
 *
 * @arg OffsetY:eval
 * @text Offset Y
 * @parent ActorID:num
 * @desc Change the armature's Offset Y value.
 * @default 0
 *
 * @arg ScaleX:eval
 * @text Scale X
 * @parent ActorID:num
 * @desc Change the armature's Scale X value.
 * @default 1.0
 *
 * @arg ScaleY:eval
 * @text Scale Y
 * @parent ActorID:num
 * @desc Change the armature's Scale Y value.
 * @default 1.0
 *
 * @arg TimeScale:eval
 * @text Time Scale
 * @parent ActorID:num
 * @desc Change the armature's Time Scale value.
 * @default 1.0
 *
 * @arg Width:eval
 * @text Width
 * @parent ActorID:num
 * @desc Change the battler width size.
 * @default 64
 *
 * @arg Height:eval
 * @text Height
 * @parent ActorID:num
 * @desc Change the battler height size.
 * @default 64
 *
 * @arg DefaultMotions
 * @text Motion Settings
 *
 * @arg MotionWalk:str
 * @text Walk
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default walk
 *
 * @arg MotionWait:str
 * @text Wait
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default wait
 *
 * @arg MotionChant:str
 * @text Chant
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default chant
 *
 * @arg MotionGuard:str
 * @text Guard
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default guard
 *
 * @arg MotionDamage:str
 * @text Damage
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default damage
 *
 * @arg MotionEvade:str
 * @text Evade
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default evade
 *
 * @arg MotionThrust:str
 * @text Thrust
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default thrust
 *
 * @arg MotionSwing:str
 * @text Swing
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default swing
 *
 * @arg MotionMissile:str
 * @text Missile
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default missile
 *
 * @arg MotionSkill:str
 * @text Skill
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default skill
 *
 * @arg MotionSpell:str
 * @text Spell
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default spell
 *
 * @arg MotionItem:str
 * @text Item
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default item
 *
 * @arg MotionEscape:str
 * @text Escape
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default escape
 *
 * @arg MotionVictory:str
 * @text Victory
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default victory
 *
 * @arg MotionDying:str
 * @text Dying
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default dying
 *
 * @arg MotionAbnormal:str
 * @text Abnormal
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default abnormal
 *
 * @arg MotionSleep:str
 * @text Sleep
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default sleep
 *
 * @arg MotionDead:str
 * @text Dead
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default dead
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_ActorChange
 * @text Map Sprite: Actor Change Settings
 * @desc Change target actor's Dragonbones armature settings for map sprites.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Filename:str
 * @text Filename
 * @parent ActorID:num
 * @desc Change the armature's filename.
 * @default name
 *
 * @arg OffsetX:eval
 * @text Offset X
 * @parent ActorID:num
 * @desc Change the armature's Offset X value.
 * @default 0
 *
 * @arg OffsetY:eval
 * @text Offset Y
 * @parent ActorID:num
 * @desc Change the armature's Offset Y value.
 * @default 0
 *
 * @arg ScaleX:eval
 * @text Scale X
 * @parent ActorID:num
 * @desc Change the armature's Scale X value.
 * @default 0.5
 *
 * @arg ScaleY:eval
 * @text Scale Y
 * @parent ActorID:num
 * @desc Change the armature's Scale Y value.
 * @default 0.5
 *
 * @arg TimeScale:eval
 * @text Time Scale
 * @parent ActorID:num
 * @desc Change the armature's Time Scale value.
 * @default 1.0
 *
 * @arg WalkRate:eval
 * @text Walk Rate
 * @parent TimeScale:eval
 * @desc Change the armature's walk animation rate.
 * @default 1.0
 *
 * @arg DashRate:eval
 * @text Dash Rate
 * @parent TimeScale:eval
 * @desc Change the armature's dash animation rate.
 * @default 1.0
 *
 * @arg Width:eval
 * @text Width
 * @parent ActorID:num
 * @desc Change the armature's width value.
 * @default 48
 *
 * @arg Height:eval
 * @text Height
 * @parent ActorID:num
 * @desc Change the armature's height.
 * @default 48
 *
 * @arg FlipSettings
 * @text Flip Settings
 *
 * @arg FlipLeft:eval
 * @text Flip Left?
 * @parent FlipSettings
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value when facing left-ward directions?
 * @default false
 *
 * @arg FlipRight:eval
 * @text Flip Right?
 * @parent FlipSettings
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value when facing right-ward directions?
 * animation is found?
 * @default false
 *
 * @arg Animations
 * @text Motion Settings
 *
 * @arg Idle:str
 * @text Idle
 * @parent Animations
 * @desc Base idle animation name used.
 * @default idle
 *
 * @arg Walk:str
 * @text Walk
 * @parent Animations
 * @desc Base walk animation name used.
 * @default walk
 *
 * @arg Dash:str
 * @text Dash
 * @parent Animations
 * @desc Base dash animation name used.
 * @default dash
 *
 * @arg Jump:str
 * @text Jump
 * @parent Animations
 * @desc Base jump animation name used.
 * @default jump
 *
 * @arg LadderIdle:str
 * @text Ladder (Idle)
 * @parent Animations
 * @desc Base ladder idle animation name used.
 * @default ladderidle
 *
 * @arg LadderClimb:str
 * @text Ladder (Climb)
 * @parent Animations
 * @desc Base ladder climbing animation name used.
 * @default ladderclimb
 *
 * @arg RopeIdle:str
 * @text Rope (Idle)
 * @parent Animations
 * @desc Base rope idle animation name used.
 * @default ropeidle
 *
 * @arg RopeClimb:str
 * @text Rope (Climb)
 * @parent Animations
 * @desc Base rope climbing animation name used.
 * @default ropecllmb
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_ActorAnimationPlay
 * @text Map Sprite: Actor Play Animation
 * @desc Target actor plays a custom Dragonbones animation.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_ActorAnimationStop
 * @text Map Sprite: Actor Stop Animation
 * @desc Stops a target actor's custom Dragonbones animation.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_EventAnimationPlay
 * @text Map Sprite: Event Play Animation
 * @desc Target event plays a custom Dragonbones animation.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Select which Event ID to affect.
 * @default 1
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_EventAnimationStop
 * @text Map Sprite: Event Stop Animation
 * @desc Stops a target event's custom Dragonbones animation.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Select which Event ID to affect.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_FollowerAnimationPlay
 * @text Map Sprite: Follower Play Animation
 * @desc Target follower plays a custom Dragonbones animation.
 *
 * @arg FollowerIndex:eval
 * @text Follower Index
 * @desc Select which Follower Index to affect.
 * @default 0
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_FollowerAnimationStop
 * @text Map Sprite: Follower Stop Animation
 * @desc Stops a target follower's custom Dragonbones animation.
 *
 * @arg FollowerIndex:eval
 * @text Follower ID
 * @desc Select which Follower Index to affect.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_PlayerAnimationPlay
 * @text Map Sprite: Player Play Animation
 * @desc Player plays a custom Dragonbones animation.
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_PlayerAnimationStop
 * @text Map Sprite: Player Stop Animation
 * @desc Stops player's custom Dragonbones animation.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_SetupDragonbones
 * @text Picture: Dragonbones Setup
 * @desc Setup a Dragonbones armature for a picture.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID(s) to give a Dragonbones armature.
 * @default 1
 *
 * @arg Filename:str
 * @text Armature Filename
 * @desc What is the armature's filename?
 * @default Untitled
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation once it starts.
 * @default Idle
 *
 * @arg OffsetX:eval
 * @text Offset: X
 * @desc Default X offset value for this Dragonbones armature.
 * @default 0
 *
 * @arg OffsetY:eval
 * @text Offset: Y
 * @desc Default Y offset value for this Dragonbones armature.
 * @default 0
 *
 * @arg ScaleX:eval
 * @text Scale: X
 * @desc Default X scaling for this Dragonbones armature.
 * This will be amplified by the picture's scaling value.
 * @default 1.0
 *
 * @arg ScaleY:eval
 * @text Scale: Y
 * @desc Default Y scaling for this Dragonbones armature.
 * This will be amplified by the picture's scaling value.
 * @default 1.0
 *
 * @arg TimeScale:eval
 * @text Time Scale
 * @desc Default time scale for this Dragonbones armature.
 * Higher values play faster. Lower values play slower.
 * @default 1.0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_DragonbonesAnimation
 * @text Picture: Play Dragonbones Animation
 * @desc Make an existing Dragonbones armature attached to a picture play an animation.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID to modify.
 * @default 1
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @arg IdleFinish:eval
 * @text Finish: Revert Idle?
 * @parent FlipSettings
 * @type boolean
 * @on Revert
 * @off Freeze
 * @desc Revert animation to 'idle' animation after finishing?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_DragonbonesOffset
 * @text Picture: Offset Dragonbones
 * @desc Offset the X, Y attachment point of the Dragonbones armature.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID to modify.
 * @default 1
 *
 * @arg OffsetX:eval
 * @text Offset: X
 * @desc X offset value for this Dragonbones armature.
 * @default 0
 *
 * @arg OffsetY:eval
 * @text Offset: Y
 * @desc Y offset value for this Dragonbones armature.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_ScaleDragonbones
 * @text Picture: Scale Dragonbones
 * @desc Change the scaling values of the Dragonbones armature.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID to modify.
 * @default 1
 *
 * @arg ScaleX:eval
 * @text Scale: X
 * @desc X scaling for this Dragonbones armature.
 * This will be amplified by the picture's scaling value.
 * @default 1.0
 *
 * @arg ScaleY:eval
 * @text Scale: Y
 * @desc Y scaling for this Dragonbones armature.
 * This will be amplified by the picture's scaling value.
 * @default 1.0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_TimeScaleDragonbones
 * @text Picture: Time Scale Dragonbones
 * @desc Change the speed at which Dragonbones animations play.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID to modify.
 * @default 1
 *
 * @arg TimeScale:eval
 * @text Time Scale
 * @desc Default time scale for this Dragonbones armature.
 * Higher values play faster. Lower values play slower.
 * @default 1.0
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param DragonbonesUnion
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Main
 * @text Main Settings
 *
 * @param AssetsPath:str
 * @text Assets Path
 * @parent Main
 * @desc The filepath to the directory that houses all the Dragonbone files.
 * @default ./dragonbones_assets/
 *
 * @param General:struct
 * @text General Settings
 * @parent Main
 * @type struct<General>
 * @desc A set of general settings pertaining to all uses of Dragonbones.
 * @default {"Defaults":"","LoadAnimation:str":"idle","LoopingAnimations:arraystr":"[\"idle\",\"walk\",\"wait\",\"chant\",\"guard\",\"dying\",\"abnormal\",\"sleep\",\"dash\",\"ladderidle\",\"ladderclimb\",\"ropeidle\",\"ropeclimb\"]","SkeletalData":"","SkeKey:str":"dbData","SkeExt:str":"_ske.json","TextureData":"","TexKey:str":"texData","TexExt:str":"_tex.json","TextureAsset":"","TxaKey:str":"texAsset","TxaExt:str":"_tex.png"}
 *
 * @param Battler:struct
 * @text Battler Settings
 * @parent Main
 * @type struct<Battler>
 * @desc A set of general settings pertaining to Dragonbones battlers.
 * @default {"Defaults":"","OffsetX:num":"0","OffsetY:num":"0","ScaleX:num":"1.0","FlipActors:eval":"false","FlipEnemies:eval":"false","ScaleY:num":"1.0","TimeScale:num":"1.0","Width:num":"64","Height:num":"64","IdleBypass":"","IdleBypassList:arraystr":"[\"dead\",\"escape\",\"victory\"]","DefaultMotions":"","MotionWalk:str":"walk","MotionWait:str":"wait","MotionChant:str":"chant","MotionGuard:str":"guard","MotionDamage:str":"damage","MotionEvade:str":"evade","MotionThrust:str":"thrust","MotionSwing:str":"swing","MotionMissile:str":"missile","MotionSkill:str":"skill","MotionSpell:str":"spell","MotionItem:str":"item","MotionEscape:str":"escape","MotionVictory:str":"victory","MotionDying:str":"dying","MotionAbnormal:str":"abnormal","MotionSleep:str":"sleep","MotionDead:str":"dead"}
 *
 * @param MapSprite:struct
 * @text Map Sprite Settings
 * @parent Main
 * @type struct<MapSprite>
 * @desc A set of general settings pertaining to Dragonbones map sprites.
 * @default {"Defaults":"","OffsetX:num":"0","OffsetY:num":"0","ScaleX:num":"0.5","FlipLeft:eval":"false","FlipRight:eval":"false","ScaleY:num":"0.5","TimeScale:num":"1.0","Width:num":"48","Height:num":"48","Animations":"","Idle:str":"idle","Walk:str":"walk","WalkTimer:num":"2","Dash:str":"dash","Jump:str":"jump","LadderIdle:str":"ladderidle","LadderClimb:str":"ladderclimb","RopeIdle:str":"ropeidle","RopeClimb:str":"ropecllmb"}
 * 
 * @param Experimental
 * 
 * @param EnemyStances:eval
 * @text Enemy Stances
 * @parent Experimental
 * @type boolean
 * @on Enable Stances
 * @off No Stances
 * @desc Enemies can use stance motions for idling such as
 * chanting, guarding, etc. Requires VisuMZ_1_BattleCore!
 * @default false
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param Defaults
 *
 * @param LoadAnimation:str
 * @text Loaded Animation
 * @parent Defaults
 * @desc The default animation to play once a Dragonbones armature is loaded.
 * @default idle
 *
 * @param LoopingAnimations:arraystr
 * @text Looping Animations
 * @parent Defaults
 * @type string[]
 * @desc Force these animations to become looping animations even if they don't loop in Dragonbones.
 * @default ["idle","walk","wait","chant","guard","dying","abnormal","sleep","dash","ladderidle","ladderclimb","ropeidle","ropeclimb"]
 *
 * @param SkeletalData
 * @text Skeletal Data
 *
 * @param SkeKey:str
 * @text Key
 * @parent SkeletalData
 * @desc Key used to determine where skeletal data is stored.
 * @default dbData
 *
 * @param SkeExt:str
 * @text Extension
 * @parent SkeletalData
 * @desc Extension used to determine which files contain skeletal data.
 * @default _ske.json
 *
 * @param TextureData
 * @text Texture Data
 *
 * @param TexKey:str
 * @text Key
 * @parent TextureData
 * @desc Key used to determine where texture data is stored.
 * @default texData
 *
 * @param TexExt:str
 * @text Extension
 * @parent TextureData
 * @desc Extension used to determine which files contain texture data.
 * @default _tex.json
 *
 * @param TextureAsset
 * @text Texture Asset
 *
 * @param TxaKey:str
 * @text Key
 * @parent TextureAsset
 * @desc Key used to determine where texture assets are stored.
 * @default texAsset
 *
 * @param TxaExt:str
 * @text Extension
 * @parent TextureAsset
 * @desc Extension used to determine which files contain texture assets.
 * @default _tex.png
 *
 */
/* ----------------------------------------------------------------------------
 * Battler Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Battler:
 *
 * @param Defaults
 * @text Default Settings
 *
 * @param HueAffected:eval
 * @text Enemy Hue Affected?
 * @parent Defaults
 * @type boolean
 * @on Affect Hues
 * @off No Hues
 * @desc Affect hues for enemies with Dragonbones battlers?
 * @default false
 *
 * @param OffsetX:num
 * @text Offset: X
 * @parent Defaults
 * @desc Default X offset for battler sprites.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset: Y
 * @parent Defaults
 * @desc Default Y offset for battler sprites.
 * @default 0
 *
 * @param ScaleX:num
 * @text Scale: X
 * @parent Defaults
 * @desc Default scale for X used by Dragonbones battlers.
 * @default 1.0
 *
 * @param FlipActors:eval
 * @text Flip for Actors?
 * @parent ScaleX:num
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value into negative automatically for all actors?
 * @default false
 *
 * @param FlipEnemies:eval
 * @text Flip for Enemies?
 * @parent ScaleX:num
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value into negative automatically for all enemies?
 * @default false
 *
 * @param ScaleY:num
 * @text Scale: Y
 * @parent Defaults
 * @desc Default scale for Y used by Dragonbones battlers.
 * @default 1.0
 *
 * @param TimeScale:num
 * @text Time Scale
 * @parent Defaults
 * @desc The rate at which animations play.
 * Higher numbers go faster.
 * @default 1.0
 *
 * @param Width:num
 * @text Width
 * @parent Defaults
 * @desc Treat battler sprites as if they have this width.
 * Used for Action Sequences.
 * @default 64
 *
 * @param Height:num
 * @text Height
 * @parent Defaults
 * @desc Treat battler sprites as if they have this height.
 * Used for Action Sequences.
 * @default 64
 *
 * @param IdleBypass
 * @text Idle Bypass
 *
 * @param IdleBypassList:arraystr
 * @text List
 * @parent IdleBypass
 * @type combo[]
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc This is a list of animations that will not return back to the idle animation after completion.
 * @default ["dead","escape","victory"]
 *
 * @param DefaultMotions
 * @text Default Motions
 *
 * @param MotionWalk:str
 * @text Walk
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default walk
 *
 * @param MotionWait:str
 * @text Wait
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default wait
 *
 * @param MotionChant:str
 * @text Chant
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default chant
 *
 * @param MotionGuard:str
 * @text Guard
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default guard
 *
 * @param MotionDamage:str
 * @text Damage
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default damage
 *
 * @param MotionEvade:str
 * @text Evade
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default evade
 *
 * @param MotionThrust:str
 * @text Thrust
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default thrust
 *
 * @param MotionSwing:str
 * @text Swing
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default swing
 *
 * @param MotionMissile:str
 * @text Missile
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default missile
 *
 * @param MotionSkill:str
 * @text Skill
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default skill
 *
 * @param MotionSpell:str
 * @text Spell
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default spell
 *
 * @param MotionItem:str
 * @text Item
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default item
 *
 * @param MotionEscape:str
 * @text Escape
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default escape
 *
 * @param MotionVictory:str
 * @text Victory
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default victory
 *
 * @param MotionDying:str
 * @text Dying
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default dying
 *
 * @param MotionAbnormal:str
 * @text Abnormal
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default abnormal
 *
 * @param MotionSleep:str
 * @text Sleep
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default sleep
 *
 * @param MotionDead:str
 * @text Dead
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default dead
 *
 */
/* ----------------------------------------------------------------------------
 * Map Sprite Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MapSprite:
 *
 * @param Defaults
 * @text Default Settings
 *
 * @param OffsetX:num
 * @text Offset: X
 * @parent Defaults
 * @desc Default X offset for map sprites.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset: Y
 * @parent Defaults
 * @desc Default Y offset for map sprites.
 * @default 0
 *
 * @param ScaleX:num
 * @text Scale: X
 * @parent Defaults
 * @desc Default scale for X used by Dragonbones map sprites.
 * @default 0.5
 *
 * @param FlipLeft:eval
 * @text Flip Left?
 * @parent ScaleX:num
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value when facing left-ward directions?
 * @default false
 *
 * @param FlipRight:eval
 * @text Flip Right?
 * @parent ScaleX:num
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value when facing right-ward directions?
 * animation is found?
 * @default false
 *
 * @param ScaleY:num
 * @text Scale: Y
 * @parent Defaults
 * @desc Default scale for Y used by Dragonbones map sprites.
 * @default 0.5
 *
 * @param TimeScale:num
 * @text Time Scale
 * @parent Defaults
 * @desc The rate at which animations play.
 * Higher numbers go faster.
 * @default 1.0
 *
 * @param Width:num
 * @text Width
 * @parent Defaults
 * @desc Treat map sprites as if they have this width.
 * Used for various plugins.
 * @default 48
 *
 * @param Height:num
 * @text Height
 * @parent Defaults
 * @desc Treat map sprites as if they have this height.
 * Used for various plugins.
 * @default 48
 *
 * @param Animations
 * @text Motion Settings
 *
 * @param Idle:str
 * @text Idle
 * @parent Animations
 * @desc Base idle animation name used.
 * @default idle
 *
 * @param Walk:str
 * @text Walk
 * @parent Animations
 * @desc Base walk animation name used.
 * @default walk
 *
 * @param WalkTimer:num
 * @text Walk Timer
 * @parent Walk:str
 * @desc Number of frames to count as walking so that an idle animation isn't immediately forced upon stopping.
 * @default 2
 *
 * @param Dash:str
 * @text Dash
 * @parent Animations
 * @desc Base dash animation name used.
 * @default dash
 *
 * @param Jump:str
 * @text Jump
 * @parent Animations
 * @desc Base jump animation name used.
 * @default jump
 *
 * @param LadderIdle:str
 * @text Ladder (Idle)
 * @parent Animations
 * @desc Base ladder idle animation name used.
 * @default ladderidle
 *
 * @param LadderClimb:str
 * @text Ladder (Climb)
 * @parent Animations
 * @desc Base ladder climbing animation name used.
 * @default ladderclimb
 *
 * @param RopeIdle:str
 * @text Rope (Idle)
 * @parent Animations
 * @desc Base rope idle animation name used.
 * @default ropeidle
 *
 * @param RopeClimb:str
 * @text Rope (Climb)
 * @parent Animations
 * @desc Base rope climbing animation name used.
 * @default ropecllmb
 *
 */
//=============================================================================

const _0x354f2b=_0x423a;(function(_0xb9ef9a,_0x2f05ca){const _0x4dc2a6=_0x423a,_0x23a53b=_0xb9ef9a();while(!![]){try{const _0x5a4170=-parseInt(_0x4dc2a6(0x316))/0x1+parseInt(_0x4dc2a6(0x395))/0x2+parseInt(_0x4dc2a6(0x270))/0x3+-parseInt(_0x4dc2a6(0x2df))/0x4+parseInt(_0x4dc2a6(0x2ba))/0x5+-parseInt(_0x4dc2a6(0x21f))/0x6*(parseInt(_0x4dc2a6(0x365))/0x7)+parseInt(_0x4dc2a6(0x38e))/0x8;if(_0x5a4170===_0x2f05ca)break;else _0x23a53b['push'](_0x23a53b['shift']());}catch(_0x4c4aad){_0x23a53b['push'](_0x23a53b['shift']());}}}(_0x2848,0xcecf0));var label=_0x354f2b(0x29c),tier=tier||0x0,dependencies=['Dragonbones'],pluginData=$plugins['filter'](function(_0x14e08c){const _0x31b277=_0x354f2b;return _0x14e08c['status']&&_0x14e08c['description'][_0x31b277(0x294)]('['+label+']');})[0x0];function _0x2848(){const _0x5e3eb2=['factory','testArmature','call','realPictureId','Battler','WdHMB','dragonbonesData','IdleFinish','Sprite_Actor_updateFrame','shift','Sprite_Character_updateBitmap','animation','ladderidle','Game_Enemy_performDamage','setupDragonbonesDataNotetags','xWxaJ','parse','tDTYT','Sprite_Character_updateCharacterFrame','BattleManager_endBattle','once','ARRAYFUNC','Game_Interpreter_PluginCommand','realMoveSpeed','cFhqK','canActorPlayDragonbonesMotion','SkeExt','TxaExt','leader','Sprite_Enemy_setHue','isMoving','performCollapseDragonbonesUnion','JSON','setBattler','isAlive','loadNextArmature','6661796fYIHws','format','version','WXAPc','MotionEvade','isChanting','FUNC','prototype','Sprite_Enemy_refreshMotion','Game_Enemy_performCollapse','round','MotionDying','dispose','Game_Player_refresh','initMembersDragonbonesUnion','erasePicture','_hue','MapSprite_FollowerAnimationStop','endBattle','isDying','walkRate','isActing','skill','BattleManager_processEscape','testLoaded','addDragonbonesAnimationDirections','MapSprite','pMLMK','lastAnimationState','resources','MotionSwing','Animation','SIJju','Game_Actor_performCollapse','FollowerIndex','MotionEscape','UHrlS','registerCommand','motion','play','updateDragonbonesSelection','OJHSV','refresh','RopeIdle','CAAMP','_escaped','playDragonbonesIdleAnimation','Picture_ScaleDragonbones','Game_Event_clearPageSettings','offsetY','_requestedDragonbonesAnimation','setupPageSettings','concat','followers','VisuMZ_1_BattleCore','1311552PCAyCl','scaleY','battleAniSpeed','MotionAbnormal','TimeScale','DashRate','MotionWalk','isGuardWaiting','item','Picture_TimeScaleDragonbones','wrBUI','setDragonbonesHue','UoBvB','updateShadow','Game_Actor_setup','removeChild','createDefaultPicture','performActionMotions','OffsetX','isrXv','playDragonbonesMotion','offsetX','note','LoadedFilenames','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','addChild','GLTlp','_dragonbonesBattlerData','Sprite_Enemy_setBattler','guard','command357','kJYFj','isTryingToEscape','setupDragonbones','battlerSprites','rVhKu','ladderclimb','push','isGuard','follower','VisuMZ_1_OptionsCore','children','FwHlO','constructor','isSceneBattle','wkKsA','ScaleY','Game_Enemy_transform','bksFg','sNIPS','isActor','GKTRp','Game_Battler_performActionEndMembers','attachSpritesToDistortionSprite','MotionDamage','requestMotionRefresh','QWxHw','Idle','sldSP','setFrame','return\x200','setup','Game_Actor_performAttack','VisuMZ_0_CoreEngine','NUM','Game_Battler_requestMotionRefresh','Loader','xrmsk','lastAnimationName','bVTJo','scaleX','Picture_SetupDragonbones','rpotF','dragonbonesAnimation','width','description','GVYLl','Game_Picture_initialize','PixiFactory','637483zVuJhE','Game_Enemy_setup','dragonbonesFlip','parameters','MapSprite_PlayerAnimationStop','isDragonbonesHueAffected','performActionDragonbonesUnion','Filename','lAnth','HueAffected','battlerHue','defineProperty','MotionSpell','_dragonbones','Game_CharacterBase_update','_dragonbonesData','Sprite_Character_initialize','EnemyStances','walk','MapSprite_PlayerAnimationPlay','addDragonbonesChild','GjGev','isJumping','RIFhC','ARRAYNUM','Ywrcj','_dragonbonesFlipDirection','WpAwp','ZShwP','DnJYn','Game_Actor_performDamage','Sprite_Actor_updateShadow','abnormal','mpsCo','updateDragonbonesUnion','_dragonbonesName','_lastPluginCommandInterpreter','clearTryEscaping','_mainSprite','filename','createArmature','24066592uKgSOm','FlipEnemies','initDragonbonesData','WrrXm','nSzMq','load','attack','923492EqDvtu','victory','Sprite_Actor_initMembers','MapSprite_EventAnimationStop','index','Sprite_Enemy_initMembers','ZXETH','updateDragonbonesProperties','LoadQueue','MotionSleep','flipRight','jCNpn','Battler_ActorChange','Sprite_Actor_updateBitmap','AssetsPath','erasePictureDragonbonesUnion','height','_spriteset','name','awAkI','animationNames','prepareNextLoadArmature','tbMsC','playTimes','damage','_dragonbonesFilename','bind','shared','SkeKey','Sprite_Actor_startMotion','MapSprite_ActorAnimationPlay','updateDragonbones','ropeclimb','performDamage','isOnRope','transform','XNoAZ','performAction','trim','isDead','refreshMotionDragonbones','woVKv','Walk','opacity','_target','This\x20is\x20a\x20static\x20class','idle','setupDragonbonesData','_dragonbonesSpriteData','isDashing','wiyLG','requestDragonbonesAnimation','Sprite_Picture_initialize','update','bcIhA','JXwaF','MotionWait','ConvertParams','add','onComplete','FlipActors','_dragonbonesAnimation','max','Game_Follower_refresh','updateDragonbonesBattler','Sprite_Enemy_updateBitmap','timeScale','rEIEh','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','ccYeG','xekNP','Game_Screen_erasePicture','oILIz','tXNBf','WalkRate','STRUCT','makeDeepCopy','MotionItem','checkDragonbonesStringTags','ScaleX','Width','enemy','performActionEndMembers','5.3.12','collapseType','battler','MapSprite_FollowerAnimationPlay','LadderClimb','qnYqN','picture','Game_Actor_performAction','MotionChant','isInputting','chant','otiDb','MapSprite_EventAnimationPlay','actor','performDamageDragonbonesUnion','bTbRG','isCompleted','page','loading','dash','bitmap','WgLuu','JxiZk','getLastPluginCommandInterpreter','TexExt','visible','test','wait','_enemy','_stateSprite','NoYSL','_scene','Game_Battler_requestMotion','66uldHfV','stateMotionIndex','bAYqr','Sprite_Actor','disposeDragonbones','MapSprite_ActorChange','_escaping','escape','onEscapeFailure','dead','htUSx','setHue','ActorID','IJepk','toUpperCase','VERSION','nbukA','exit','_subject','_pictureContainer','GLVJc','EVAL','flipLeft','ylLXF','Sprite_Actor_update','_battler','ARRAYSTR','sleep','findTargetSprite','updateDragonbonesAnimation','map','findPictureSprite','updateDragonbonesArmature','General','initialize','ropeidle','MotionThrust','_baseDragonbonesSprite','asvdn','_character','isAttack','MotionDead','EventID','updateShadowDragonbonesUnion','complete','MSLfE','ieGnW','Game_Event_setupPageSettings','initMembers','parseTextureAtlasData','_pictures','Jump','ntrbf','clearPageSettings','MotionSkill','Scene_Battle_terminate','length','dashRate','requestMotion','list','toLowerCase','code','ePiZd','OffsetY','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','uAEvN','FlipRight','zqRxi','updateDragonbonesTimeScale','NrUJv','_enemyId','showPicture','gDctH','WKEZF','loadArmature','Height','MotionVictory','pGOYC','processEscape','refreshMotion','direction','1257324PGcBaW','_dragonbonesSpriteContainer','addChildAt','setLastPluginCommandInterpreter','GwzAC','scale','JTejy','PictureID','createBaseDragonbonesSprite','NldMw','match','isUndecided','tcTFI','BattleManager_onEscapeFailure','gnQhA','dragonbonesSpriteData','CallbackQueue','isEnemy','hasDragonbones','performCollapse','isMagicSkill','BnHSD','_battleAniSpeedLooping','loadComplete','playDragonbonesAnimation','iGPQl','updateFrame','mFCSR','updateCharacterFrameDragonbonesUnion','terminate','setupDragonbonesDataCommentTags','runQueuedCallbacks','OnkbR','onLoadDragonbones','TexKey','texture','includes','Dash','lastFileName','updateCharacterFrame','revertToIdle','type','RopeClimb','buildArmatureDisplay','DragonbonesUnion','TCVsX','TxaKey','Game_Enemy_performAction','_dragonbonesMoveTimer','IdleBypassList','VgtxH','_playtestF7Looping','BvJXh','MotionGuard','MotionMissile','FlipLeft','animations','eventId','isHidden','dying','oPQta','rmcQa','LadderIdle','Settings','RdUPJ','updateBitmap','STR','hasDragonbonesBattler','yIIgK','DefaultAnimation','performAttack','WalkTimer','data','event','4683350IBVgpt'];_0x2848=function(){return _0x5e3eb2;};return _0x2848();}VisuMZ[label]['Settings']=VisuMZ[label][_0x354f2b(0x2af)]||{},VisuMZ[_0x354f2b(0x1e4)]=function(_0x13e77f,_0x58ea8b){const _0xf2d81e=_0x354f2b;for(const _0x1383b4 in _0x58ea8b){if(_0x1383b4[_0xf2d81e(0x27a)](/(.*):(.*)/i)){const _0x2d33fd=String(RegExp['$1']),_0x750aa7=String(RegExp['$2'])[_0xf2d81e(0x22d)]()[_0xf2d81e(0x1d1)]();let _0x37f557,_0x572f1e,_0x268afd;switch(_0x750aa7){case _0xf2d81e(0x356):_0x37f557=_0x58ea8b[_0x1383b4]!==''?Number(_0x58ea8b[_0x1383b4]):0x0;break;case _0xf2d81e(0x37d):_0x572f1e=_0x58ea8b[_0x1383b4]!==''?JSON[_0xf2d81e(0x2cb)](_0x58ea8b[_0x1383b4]):[],_0x37f557=_0x572f1e[_0xf2d81e(0x23d)](_0x536d91=>Number(_0x536d91));break;case _0xf2d81e(0x234):_0x37f557=_0x58ea8b[_0x1383b4]!==''?eval(_0x58ea8b[_0x1383b4]):null;break;case'ARRAYEVAL':_0x572f1e=_0x58ea8b[_0x1383b4]!==''?JSON['parse'](_0x58ea8b[_0x1383b4]):[],_0x37f557=_0x572f1e['map'](_0x3f4f73=>eval(_0x3f4f73));break;case _0xf2d81e(0x2db):_0x37f557=_0x58ea8b[_0x1383b4]!==''?JSON[_0xf2d81e(0x2cb)](_0x58ea8b[_0x1383b4]):'';break;case'ARRAYJSON':_0x572f1e=_0x58ea8b[_0x1383b4]!==''?JSON['parse'](_0x58ea8b[_0x1383b4]):[],_0x37f557=_0x572f1e[_0xf2d81e(0x23d)](_0x2fbbc3=>JSON[_0xf2d81e(0x2cb)](_0x2fbbc3));break;case _0xf2d81e(0x2e5):_0x37f557=_0x58ea8b[_0x1383b4]!==''?new Function(JSON['parse'](_0x58ea8b[_0x1383b4])):new Function(_0xf2d81e(0x352));break;case _0xf2d81e(0x2d0):_0x572f1e=_0x58ea8b[_0x1383b4]!==''?JSON[_0xf2d81e(0x2cb)](_0x58ea8b[_0x1383b4]):[],_0x37f557=_0x572f1e[_0xf2d81e(0x23d)](_0x20e577=>new Function(JSON[_0xf2d81e(0x2cb)](_0x20e577)));break;case _0xf2d81e(0x2b2):_0x37f557=_0x58ea8b[_0x1383b4]!==''?String(_0x58ea8b[_0x1383b4]):'';break;case _0xf2d81e(0x239):_0x572f1e=_0x58ea8b[_0x1383b4]!==''?JSON['parse'](_0x58ea8b[_0x1383b4]):[],_0x37f557=_0x572f1e[_0xf2d81e(0x23d)](_0x2d28bd=>String(_0x2d28bd));break;case _0xf2d81e(0x1f6):_0x268afd=_0x58ea8b[_0x1383b4]!==''?JSON['parse'](_0x58ea8b[_0x1383b4]):{},_0x37f557=VisuMZ[_0xf2d81e(0x1e4)]({},_0x268afd);break;case'ARRAYSTRUCT':_0x572f1e=_0x58ea8b[_0x1383b4]!==''?JSON[_0xf2d81e(0x2cb)](_0x58ea8b[_0x1383b4]):[],_0x37f557=_0x572f1e[_0xf2d81e(0x23d)](_0x2100bc=>VisuMZ[_0xf2d81e(0x1e4)]({},JSON[_0xf2d81e(0x2cb)](_0x2100bc)));break;default:continue;}_0x13e77f[_0x2d33fd]=_0x37f557;}}return _0x13e77f;},(_0x3bf88b=>{const _0x54b0d9=_0x354f2b,_0x2a7303=_0x3bf88b[_0x54b0d9(0x1bd)];for(const _0x563940 of dependencies){if(!Imported[_0x563940]){alert(_0x54b0d9(0x32e)['format'](_0x2a7303,_0x563940)),SceneManager[_0x54b0d9(0x230)]();break;}}const _0x2df21d=_0x3bf88b[_0x54b0d9(0x361)];if(_0x2df21d['match'](/\[Version[ ](.*?)\]/i)){const _0x4477f9=Number(RegExp['$1']);_0x4477f9!==VisuMZ[label][_0x54b0d9(0x2e1)]&&(alert(_0x54b0d9(0x25f)['format'](_0x2a7303,_0x4477f9)),SceneManager[_0x54b0d9(0x230)]());}if(_0x2df21d[_0x54b0d9(0x27a)](/\[Tier[ ](\d+)\]/i)){if(_0x54b0d9(0x214)===_0x54b0d9(0x214)){const _0xa29e40=Number(RegExp['$1']);_0xa29e40<tier?(alert(_0x54b0d9(0x1ef)[_0x54b0d9(0x2e0)](_0x2a7303,_0xa29e40,tier)),SceneManager[_0x54b0d9(0x230)]()):tier=Math[_0x54b0d9(0x1e9)](_0xa29e40,tier);}else _0x237754[_0x54b0d9(0x29c)]['Game_Battler_requestMotionRefresh'][_0x54b0d9(0x2bd)](this),this[_0x54b0d9(0x2b3)]()&&this['battler']()[_0x54b0d9(0x30d)]();}VisuMZ[_0x54b0d9(0x1e4)](VisuMZ[label][_0x54b0d9(0x2af)],_0x3bf88b[_0x54b0d9(0x368)]);})(pluginData);function _0x423a(_0x27b6e0,_0x52fdd3){const _0x28485f=_0x2848();return _0x423a=function(_0x423a3c,_0x48104a){_0x423a3c=_0x423a3c-0x1ae;let _0x309453=_0x28485f[_0x423a3c];return _0x309453;},_0x423a(_0x27b6e0,_0x52fdd3);}function DragonbonesManager(){const _0x22777f=_0x354f2b;throw new Error(_0x22777f(0x1d8));}DragonbonesManager[_0x354f2b(0x1b9)]=VisuMZ['DragonbonesUnion'][_0x354f2b(0x2af)][_0x354f2b(0x1b9)],DragonbonesManager[_0x354f2b(0x2b5)]=VisuMZ['DragonbonesUnion']['Settings'][_0x354f2b(0x240)]['LoadAnimation'],DragonbonesManager[_0x354f2b(0x32d)]=[],DragonbonesManager[_0x354f2b(0x1b3)]=[],DragonbonesManager[_0x354f2b(0x280)]=[],DragonbonesManager[_0x354f2b(0x218)]=function(_0x3451a6,_0x3ba41a,_0x2b03c9,_0x30e2ac){const _0x3c3b0a=_0x354f2b;if(!_0x2b03c9)_0x2b03c9=SceneManager[_0x3c3b0a(0x21d)];if(!_0x30e2ac)_0x30e2ac=_0x3c3b0a(0x2bc);if(_0x2b03c9[_0x30e2ac]){if(_0x3c3b0a(0x392)!=='mGsUB'){const _0x7754db=_0x2b03c9[_0x30e2ac];_0x7754db&&(_0x2b03c9['removeChild'](_0x7754db),_0x7754db[_0x3c3b0a(0x2eb)]());}else _0x4e38b4['walkRate']=_0x5c385b(_0x4a68f4['$1']);}this[_0x3c3b0a(0x269)](_0x3451a6,DragonbonesManager[_0x3c3b0a(0x2f7)][_0x3c3b0a(0x1c5)](this,_0x3451a6,_0x3ba41a,_0x2b03c9,_0x30e2ac));},DragonbonesManager['testLoaded']=function(_0x40d44a,_0x4d72dd,_0x5a11c9,_0x261e96){const _0x13a6b4=_0x354f2b,_0x1bec24=this['createArmature'](_0x40d44a);if(_0x1bec24){_0x5a11c9[_0x13a6b4(0x32f)](_0x1bec24),_0x1bec24['x']=Graphics[_0x13a6b4(0x360)]/0x2,_0x1bec24['y']=Graphics[_0x13a6b4(0x1bb)]*0x3/0x4,_0x4d72dd=_0x4d72dd||DragonbonesManager['DefaultAnimation'],_0x4d72dd=_0x4d72dd['toLowerCase']();if(_0x1bec24[_0x13a6b4(0x2c6)]['animations'][_0x4d72dd]){if('fhmky'!==_0x13a6b4(0x233))_0x1bec24['animation']['play'](_0x4d72dd);else{if(this[_0x13a6b4(0x1db)]!==_0x1cc7ca)return this[_0x13a6b4(0x1db)];return this[_0x13a6b4(0x390)](),this[_0x13a6b4(0x1da)](),this['_dragonbonesSpriteData'];}}}_0x5a11c9[_0x261e96]=_0x1bec24;},DragonbonesManager[_0x354f2b(0x38d)]=function(_0x2487a9){const _0x20e8f9=_0x354f2b,_0x518b7c=dragonBones[_0x20e8f9(0x364)][_0x20e8f9(0x2bb)][_0x20e8f9(0x29b)](_0x2487a9);if(!_0x518b7c)return null;for(const _0x413e8c in _0x518b7c[_0x20e8f9(0x2c6)]['animations']){if(_0x413e8c[_0x20e8f9(0x25b)]()===_0x413e8c)continue;_0x518b7c[_0x20e8f9(0x2c6)][_0x20e8f9(0x2a8)][_0x413e8c[_0x20e8f9(0x25b)]()]=_0x518b7c['animation']['animations'][_0x413e8c],delete _0x518b7c[_0x20e8f9(0x2c6)][_0x20e8f9(0x2a8)][_0x413e8c];}for(let _0x36a722=0x0;_0x36a722<_0x518b7c['animation'][_0x20e8f9(0x1bf)][_0x20e8f9(0x257)];_0x36a722++){_0x518b7c[_0x20e8f9(0x2c6)][_0x20e8f9(0x1bf)][_0x36a722]=_0x518b7c[_0x20e8f9(0x2c6)][_0x20e8f9(0x1bf)][_0x36a722][_0x20e8f9(0x25b)]();}const _0x341f6e=VisuMZ['DragonbonesUnion'][_0x20e8f9(0x2af)][_0x20e8f9(0x240)]['LoopingAnimations'];for(let _0x3c93aa of _0x341f6e){_0x3c93aa=_0x3c93aa[_0x20e8f9(0x25b)]()[_0x20e8f9(0x1d1)]();_0x518b7c['animation'][_0x20e8f9(0x2a8)][_0x3c93aa]&&(_0x518b7c[_0x20e8f9(0x2c6)]['animations'][_0x3c93aa][_0x20e8f9(0x1c2)]=0x0);for(let _0x2ca5a8=0x1;_0x2ca5a8<=0x9;_0x2ca5a8++){if(_0x20e8f9(0x29d)===_0x20e8f9(0x29d)){const _0x3e29a5=_0x3c93aa+_0x2ca5a8;_0x518b7c[_0x20e8f9(0x2c6)]['animations'][_0x3e29a5]&&(_0x518b7c[_0x20e8f9(0x2c6)]['animations'][_0x3e29a5]['playTimes']=0x0);}else{if(!this['hasDragonbonesBattler']())return;this[_0x20e8f9(0x259)](_0x20e8f9(0x1c3));}}}return _0x518b7c[_0x20e8f9(0x2c6)][_0x20e8f9(0x2a8)][DragonbonesManager['DefaultAnimation']]&&(_0x20e8f9(0x28b)!==_0x20e8f9(0x22c)?_0x518b7c[_0x20e8f9(0x2c6)]['play'](DragonbonesManager[_0x20e8f9(0x2b5)]):this[_0x20e8f9(0x2a0)]--),_0x518b7c;},DragonbonesManager['loadArmature']=function(_0x1cf13b,_0x1efbdc){const _0x4befda=_0x354f2b;_0x1cf13b=_0x1cf13b['trim'](),DragonbonesManager['LoadQueue'][_0x4befda(0x33b)](_0x1cf13b),DragonbonesManager[_0x4befda(0x280)][_0x4befda(0x33b)](_0x1efbdc);const _0x204dc2=PIXI[_0x4befda(0x358)][_0x4befda(0x1c6)];!_0x204dc2[_0x4befda(0x210)]&&(_0x4befda(0x308)!==_0x4befda(0x308)?_0x25b44b[_0x4befda(0x1ed)]=_0x2e5b86(_0x10ab26['$1']):this[_0x4befda(0x2de)]());},DragonbonesManager[_0x354f2b(0x2de)]=function(){const _0x4838b8=_0x354f2b;DragonbonesManager[_0x4838b8(0x1b3)]['length']>0x0?'rEIEh'===_0x4838b8(0x1ee)?this[_0x4838b8(0x1c0)]():(_0x30dd8e[_0x4838b8(0x360)]=_0x45275e(_0x382bf9['$1']),_0x3d94b2[_0x4838b8(0x1bb)]=_0x4f5ac3(_0x32addf['$2'])):_0x4838b8(0x380)!==_0x4838b8(0x1b6)?this['runQueuedCallbacks']():_0x61b34c[_0x4838b8(0x2c6)][_0x4838b8(0x306)](_0x5365d4);},DragonbonesManager[_0x354f2b(0x1c0)]=function(){const _0x493d93=_0x354f2b,_0xb27f0a=DragonbonesManager['LoadQueue'][_0x493d93(0x2c4)]();if(this[_0x493d93(0x32d)]['includes'](_0xb27f0a))this[_0x493d93(0x2de)]();else{if(!this[_0x493d93(0x32d)][_0x493d93(0x294)](_0xb27f0a)){if(_0x493d93(0x209)!==_0x493d93(0x36d))this['processLoad'](_0xb27f0a);else{const _0x4adbfd=_0x10e573[_0x493d93(0x22e)]>='5.3.12';this[_0x493d93(0x32d)]['push'](_0x43a3e4),this['lastFileName']=_0x3631ef;const _0x31fd75=_0x3b3ed6[_0x493d93(0x29c)][_0x493d93(0x2af)][_0x493d93(0x240)],_0x47fcc0=_0x59653f[_0x493d93(0x1b9)],_0x220423=_0x1397e6['Loader'][_0x493d93(0x1c6)];_0x220423[_0x493d93(0x1e5)](_0x19ce3a+_0x31fd75[_0x493d93(0x1c7)],_0x47fcc0+_0x6334ca+_0x31fd75[_0x493d93(0x2d5)]),_0x220423[_0x493d93(0x1e5)](_0x47a9a8+_0x31fd75[_0x493d93(0x292)],_0x47fcc0+_0x2e3322+_0x31fd75[_0x493d93(0x216)]),_0x220423[_0x493d93(0x1e5)](_0x50489a+_0x31fd75['TxaKey'],_0x47fcc0+_0x23c296+_0x31fd75['TxaExt']),_0x4adbfd?(_0x220423[_0x493d93(0x393)](_0x220423),_0x220423[_0x493d93(0x1e6)]['once'](()=>_0x33d464[_0x493d93(0x287)](_0x220423,_0x220423[_0x493d93(0x2fc)]))):(_0x220423['once'](_0x493d93(0x24b),_0x20bd47[_0x493d93(0x287)],this),_0x220423[_0x493d93(0x393)]());}}}},DragonbonesManager['processLoad']=function(_0x48476b){const _0x235fcb=_0x354f2b,_0x1576e8=PIXI[_0x235fcb(0x22e)]>=_0x235fcb(0x1fe);this[_0x235fcb(0x32d)][_0x235fcb(0x33b)](_0x48476b),this[_0x235fcb(0x296)]=_0x48476b;const _0x4fbd41=VisuMZ[_0x235fcb(0x29c)][_0x235fcb(0x2af)][_0x235fcb(0x240)],_0x3902a1=DragonbonesManager['AssetsPath'],_0x24c3e0=PIXI[_0x235fcb(0x358)][_0x235fcb(0x1c6)];_0x24c3e0[_0x235fcb(0x1e5)](_0x48476b+_0x4fbd41['SkeKey'],_0x3902a1+_0x48476b+_0x4fbd41['SkeExt']),_0x24c3e0[_0x235fcb(0x1e5)](_0x48476b+_0x4fbd41[_0x235fcb(0x292)],_0x3902a1+_0x48476b+_0x4fbd41[_0x235fcb(0x216)]),_0x24c3e0[_0x235fcb(0x1e5)](_0x48476b+_0x4fbd41['TxaKey'],_0x3902a1+_0x48476b+_0x4fbd41[_0x235fcb(0x2d6)]),_0x1576e8?_0x235fcb(0x24c)!==_0x235fcb(0x2cc)?(_0x24c3e0[_0x235fcb(0x393)](_0x24c3e0),_0x24c3e0[_0x235fcb(0x1e6)][_0x235fcb(0x2cf)](()=>DragonbonesManager[_0x235fcb(0x287)](_0x24c3e0,_0x24c3e0['resources']))):(_0x561de2[_0x235fcb(0x33b)](_0xe829b0[_0x235fcb(0x1bf)][_0x235fcb(0x33a)]),_0x2704bf=_0x23d403['concat'](this[_0x235fcb(0x2f8)](_0x5b887d[_0x235fcb(0x1bf)][_0x235fcb(0x377)]))):_0x235fcb(0x290)!==_0x235fcb(0x290)?(_0x15b283[_0x235fcb(0x29c)][_0x235fcb(0x363)][_0x235fcb(0x2bd)](this),this[_0x235fcb(0x390)]()):(_0x24c3e0[_0x235fcb(0x2cf)](_0x235fcb(0x24b),DragonbonesManager[_0x235fcb(0x287)],this),_0x24c3e0[_0x235fcb(0x393)]());},DragonbonesManager[_0x354f2b(0x287)]=function(_0x2bcdc3,_0x50c73d){const _0x71aa05=_0x354f2b,_0x52234a=VisuMZ[_0x71aa05(0x29c)][_0x71aa05(0x2af)][_0x71aa05(0x240)],_0x4eee14=this[_0x71aa05(0x296)],_0xef35a4=dragonBones[_0x71aa05(0x364)]['factory'];_0xef35a4['parseDragonBonesData'](_0x50c73d[_0x4eee14+_0x52234a['SkeKey']][_0x71aa05(0x2b8)]),_0xef35a4[_0x71aa05(0x250)](_0x50c73d[_0x4eee14+_0x52234a['TexKey']]['data'],_0x50c73d[_0x4eee14+_0x52234a[_0x71aa05(0x29e)]][_0x71aa05(0x293)]),this[_0x71aa05(0x2de)]();},DragonbonesManager[_0x354f2b(0x28f)]=function(){const _0x8acf00=_0x354f2b;while(DragonbonesManager[_0x8acf00(0x280)][_0x8acf00(0x257)]>0x0){if(_0x8acf00(0x1c1)===_0x8acf00(0x1c1)){const _0x56726b=DragonbonesManager[_0x8acf00(0x280)][_0x8acf00(0x2c4)]();if(_0x56726b)_0x56726b(this);}else{if(!this[_0x8acf00(0x372)])return;const _0x3df836=this[_0x8acf00(0x246)]['dragonbonesSpriteData']();this[_0x8acf00(0x372)]['x']=_0x3df836[_0x8acf00(0x32b)],this[_0x8acf00(0x372)]['y']=_0x3df836['offsetY'],this[_0x8acf00(0x372)][_0x8acf00(0x275)]['x']=_0x3df836[_0x8acf00(0x35c)]*this[_0x8acf00(0x367)](),this[_0x8acf00(0x372)]['scale']['y']=_0x3df836['scaleY'];}}},PluginManager[_0x354f2b(0x304)](pluginData[_0x354f2b(0x1bd)],_0x354f2b(0x1b7),_0x19abd6=>{const _0x7fb9ab=_0x354f2b;if(!$gameMap)return;VisuMZ[_0x7fb9ab(0x1e4)](_0x19abd6,_0x19abd6);const _0x447bef=$gameActors[_0x7fb9ab(0x20b)](_0x19abd6[_0x7fb9ab(0x22b)]);if(!_0x447bef)return;_0x447bef[_0x7fb9ab(0x331)]={'battler':_0x19abd6[_0x7fb9ab(0x36c)],'scaleX':_0x19abd6['ScaleX'],'scaleY':_0x19abd6['ScaleY'],'offsetX':_0x19abd6[_0x7fb9ab(0x328)],'offsetY':_0x19abd6[_0x7fb9ab(0x25e)],'timeScale':_0x19abd6[_0x7fb9ab(0x31a)],'width':_0x19abd6['Width'],'height':_0x19abd6[_0x7fb9ab(0x26a)],'motion':{'walk':_0x19abd6[_0x7fb9ab(0x31c)],'wait':_0x19abd6[_0x7fb9ab(0x1e3)],'chant':_0x19abd6[_0x7fb9ab(0x206)],'guard':_0x19abd6[_0x7fb9ab(0x2a5)],'damage':_0x19abd6[_0x7fb9ab(0x34c)],'evade':_0x19abd6['MotionEvade'],'thrust':_0x19abd6[_0x7fb9ab(0x243)],'swing':_0x19abd6[_0x7fb9ab(0x2fd)],'missile':_0x19abd6[_0x7fb9ab(0x2a6)],'skill':_0x19abd6[_0x7fb9ab(0x255)],'spell':_0x19abd6[_0x7fb9ab(0x371)],'item':_0x19abd6[_0x7fb9ab(0x1f8)],'escape':_0x19abd6['MotionEscape'],'victory':_0x19abd6[_0x7fb9ab(0x26b)],'dying':_0x19abd6[_0x7fb9ab(0x2ea)],'abnormal':_0x19abd6[_0x7fb9ab(0x319)],'sleep':_0x19abd6[_0x7fb9ab(0x1b4)],'dead':_0x19abd6[_0x7fb9ab(0x248)]}};}),SceneManager[_0x354f2b(0x342)]=function(){const _0x355733=_0x354f2b;return this[_0x355733(0x21d)]&&this['_scene'][_0x355733(0x341)]===Scene_Battle;},SceneManager['isSceneMap']=function(){const _0x1b28e1=_0x354f2b;return this[_0x1b28e1(0x21d)]&&this[_0x1b28e1(0x21d)]['constructor']===Scene_Map;},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x2f6)]=BattleManager[_0x354f2b(0x26d)],BattleManager[_0x354f2b(0x26d)]=function(){const _0x2392db=_0x354f2b;return this[_0x2392db(0x225)]=!![],VisuMZ['DragonbonesUnion'][_0x2392db(0x2f6)]['call'](this);},VisuMZ['DragonbonesUnion']['BattleManager_onEscapeFailure']=BattleManager['onEscapeFailure'],BattleManager[_0x354f2b(0x227)]=function(){const _0x491d15=_0x354f2b;VisuMZ[_0x491d15(0x29c)]['BattleManager_onEscapeFailure'][_0x491d15(0x2bd)](this),setTimeout(this[_0x491d15(0x38a)][_0x491d15(0x1c5)](this),0x1f4);},BattleManager[_0x354f2b(0x38a)]=function(){const _0x530184=_0x354f2b;this[_0x530184(0x225)]=![];},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x2ce)]=BattleManager[_0x354f2b(0x2f1)],BattleManager[_0x354f2b(0x2f1)]=function(_0x25d78f){const _0x3ff8e4=_0x354f2b;this['_escaping']=![],VisuMZ['DragonbonesUnion'][_0x3ff8e4(0x2ce)][_0x3ff8e4(0x2bd)](this,_0x25d78f);},BattleManager[_0x354f2b(0x336)]=function(){const _0x4f019a=_0x354f2b;return this[_0x4f019a(0x225)]||this[_0x4f019a(0x30c)];},Game_BattlerBase[_0x354f2b(0x2e6)][_0x354f2b(0x200)]=function(){const _0x2a2cc4=_0x354f2b;if(!SceneManager[_0x2a2cc4(0x342)]())return null;if(!SceneManager[_0x2a2cc4(0x21d)][_0x2a2cc4(0x1bc)])return null;return SceneManager[_0x2a2cc4(0x21d)][_0x2a2cc4(0x1bc)][_0x2a2cc4(0x23b)](this);},Game_BattlerBase[_0x354f2b(0x2e6)][_0x354f2b(0x390)]=function(){const _0x2e5ee5=_0x354f2b,_0x45b8ee=VisuMZ[_0x2e5ee5(0x29c)][_0x2e5ee5(0x2af)][_0x2e5ee5(0x2bf)];this[_0x2e5ee5(0x331)]={'battler':'','scaleX':_0x45b8ee[_0x2e5ee5(0x1fa)],'scaleY':_0x45b8ee[_0x2e5ee5(0x344)],'width':_0x45b8ee[_0x2e5ee5(0x1fb)],'height':_0x45b8ee[_0x2e5ee5(0x26a)],'offsetX':_0x45b8ee['OffsetX'],'offsetY':_0x45b8ee[_0x2e5ee5(0x25e)],'timeScale':_0x45b8ee['TimeScale'],'motion':{'walk':_0x45b8ee[_0x2e5ee5(0x31c)],'wait':_0x45b8ee['MotionWait'],'chant':_0x45b8ee[_0x2e5ee5(0x206)],'guard':_0x45b8ee[_0x2e5ee5(0x2a5)],'damage':_0x45b8ee[_0x2e5ee5(0x34c)],'evade':_0x45b8ee[_0x2e5ee5(0x2e3)],'thrust':_0x45b8ee[_0x2e5ee5(0x243)],'swing':_0x45b8ee[_0x2e5ee5(0x2fd)],'missile':_0x45b8ee[_0x2e5ee5(0x2a6)],'skill':_0x45b8ee[_0x2e5ee5(0x255)],'spell':_0x45b8ee[_0x2e5ee5(0x371)],'item':_0x45b8ee[_0x2e5ee5(0x1f8)],'escape':_0x45b8ee['MotionEscape'],'victory':_0x45b8ee[_0x2e5ee5(0x26b)],'dying':_0x45b8ee[_0x2e5ee5(0x2ea)],'abnormal':_0x45b8ee['MotionAbnormal'],'sleep':_0x45b8ee[_0x2e5ee5(0x1b4)],'dead':_0x45b8ee[_0x2e5ee5(0x248)]}};if(_0x45b8ee[_0x2e5ee5(0x1e7)]&&this[_0x2e5ee5(0x348)]())this[_0x2e5ee5(0x331)]['scaleX']*=-0x1;if(_0x45b8ee[_0x2e5ee5(0x38f)]&&this[_0x2e5ee5(0x281)]())this[_0x2e5ee5(0x331)][_0x2e5ee5(0x35c)]*=-0x1;},Game_BattlerBase[_0x354f2b(0x2e6)]['setupDragonbonesData']=function(){const _0x4a74a0=_0x354f2b,_0x76228=VisuMZ[_0x4a74a0(0x29c)][_0x4a74a0(0x2af)]['Battler'],_0x39a85c=(this[_0x4a74a0(0x348)]()?this['actor']():this[_0x4a74a0(0x1fc)]())['note'],_0x1cfd09=this[_0x4a74a0(0x2c1)]();if(_0x39a85c['match'](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:BATTLER|SKIN|NAME):[ ]*(.*)>/i)){if(_0x4a74a0(0x2ff)==='SIJju')_0x1cfd09['battler']=String(RegExp['$1'])['trim']();else{this['disposeDragonbones']();const _0x192345=this['_battler'][_0x4a74a0(0x2c1)]();this[_0x4a74a0(0x388)]=_0x192345[_0x4a74a0(0x200)],_0x2ec1fa=_0x192345[_0x4a74a0(0x200)],_0x17b8b3['loadArmature'](_0x57ecd5,this[_0x4a74a0(0x291)][_0x4a74a0(0x1c5)](this)),this[_0x4a74a0(0x212)]=new _0x158def(_0x192345[_0x4a74a0(0x360)],_0x192345['height']),this[_0x4a74a0(0x38b)]&&(this['_mainSprite']['bitmap']=new _0x5dcd0e(_0x192345[_0x4a74a0(0x360)],_0x192345[_0x4a74a0(0x1bb)]));}}_0x39a85c[_0x4a74a0(0x27a)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER):[ ]*(.*)>/i)&&(_0x1cfd09[_0x4a74a0(0x200)]=String(RegExp['$1'])[_0x4a74a0(0x1d1)]());if(_0x39a85c[_0x4a74a0(0x27a)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]SCALE:[ ](.*),[ ](.*)>/i)){if(_0x4a74a0(0x35b)!==_0x4a74a0(0x343)){_0x1cfd09[_0x4a74a0(0x35c)]=Number(RegExp['$1']),_0x1cfd09[_0x4a74a0(0x317)]=Number(RegExp['$2']);if(_0x76228[_0x4a74a0(0x1e7)]&&this[_0x4a74a0(0x348)]())_0x1cfd09[_0x4a74a0(0x35c)]*=-0x1;if(_0x76228['FlipEnemies']&&this[_0x4a74a0(0x281)]())_0x1cfd09[_0x4a74a0(0x35c)]*=-0x1;}else this[_0x4a74a0(0x32a)](_0x4a74a0(0x1d9));}if(_0x39a85c[_0x4a74a0(0x27a)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:SCALEX|SCALE X):[ ](.*)>/i)){_0x1cfd09[_0x4a74a0(0x35c)]=Number(RegExp['$1']);if(_0x76228[_0x4a74a0(0x1e7)]&&this['isActor']())_0x1cfd09[_0x4a74a0(0x35c)]*=-0x1;if(_0x76228[_0x4a74a0(0x38f)]&&this[_0x4a74a0(0x281)]())_0x1cfd09[_0x4a74a0(0x35c)]*=-0x1;}_0x39a85c[_0x4a74a0(0x27a)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]SCALEY:[ ](.*)>/i)&&(_0x1cfd09[_0x4a74a0(0x317)]=Number(RegExp['$1']));_0x39a85c['match'](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]OFFSET:[ ](.*),[ ](.*)>/i)&&(_0x1cfd09[_0x4a74a0(0x32b)]=Number(RegExp['$1']),_0x1cfd09[_0x4a74a0(0x310)]=Number(RegExp['$2']));_0x39a85c[_0x4a74a0(0x27a)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:OFFSETX|OFFSET X):[ ](.*)>/i)&&('jzUzZ'===_0x4a74a0(0x322)?this[_0x4a74a0(0x374)]={'filename':'','animation':_0x1f63ba[_0x4a74a0(0x2b5)],'scaleX':0x1,'scaleY':0x1,'offsetX':0x0,'offsetY':0x0,'timeScale':0x1,'revertToIdle':![]}:_0x1cfd09[_0x4a74a0(0x32b)]=Number(RegExp['$1']));_0x39a85c[_0x4a74a0(0x27a)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:OFFSETY|OFFSET Y):[ ](.*)>/i)&&(_0x1cfd09[_0x4a74a0(0x310)]=Number(RegExp['$1']));_0x39a85c['match'](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:TIMESCALE|TIME SCALE):[ ](.*)>/i)&&(_0x1cfd09[_0x4a74a0(0x1ed)]=Number(RegExp['$1']));_0x39a85c[_0x4a74a0(0x27a)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]SIZE:[ ](.*),[ ](.*)>/i)&&(_0x1cfd09[_0x4a74a0(0x360)]=Number(RegExp['$1']),_0x1cfd09[_0x4a74a0(0x1bb)]=Number(RegExp['$2']));_0x39a85c[_0x4a74a0(0x27a)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]WIDTH:[ ](.*)>/i)&&(_0x1cfd09[_0x4a74a0(0x360)]=Number(RegExp['$1']));_0x39a85c[_0x4a74a0(0x27a)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]HEIGHT:[ ](.*)>/i)&&(_0x1cfd09[_0x4a74a0(0x1bb)]=Number(RegExp['$1']));const _0x27fb4f=_0x39a85c[_0x4a74a0(0x27a)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:ANI|MOTION)[ ](.*):[ ](.*)>/gi);if(_0x27fb4f)for(const _0x1b6ff2 of _0x27fb4f){_0x1b6ff2['match'](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:ANI|MOTION)[ ](.*):[ ](.*)>/i);const _0xee846=String(RegExp['$1'])[_0x4a74a0(0x25b)]()[_0x4a74a0(0x1d1)](),_0x4ba5e3=String(RegExp['$2'])[_0x4a74a0(0x1d1)]();_0x1cfd09[_0x4a74a0(0x305)][_0xee846]=_0x4ba5e3;}if(_0x39a85c[_0x4a74a0(0x27a)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER) (?:SETTINGS|SETTING)>\s*([\s\S]*)\s*<\/(?:DB|DRAGONBONE|DRAGONBONES BATTLER) (?:SETTINGS|SETTING)>/i)){const _0x555e5d=String(RegExp['$1']);_0x555e5d[_0x4a74a0(0x27a)](/(?:BATTLER|SKIN|NAME|FILENAME):[ ]*(.*)/i)&&(_0x1cfd09[_0x4a74a0(0x200)]=String(RegExp['$1'])[_0x4a74a0(0x1d1)]());if(_0x555e5d[_0x4a74a0(0x27a)](/SCALE:[ ](.*),[ ](.*)/i)){_0x1cfd09['scaleX']=Number(RegExp['$1']),_0x1cfd09['scaleY']=Number(RegExp['$2']);if(_0x76228[_0x4a74a0(0x1e7)]&&this['isActor']())_0x1cfd09[_0x4a74a0(0x35c)]*=-0x1;if(_0x76228[_0x4a74a0(0x38f)]&&this['isEnemy']())_0x1cfd09[_0x4a74a0(0x35c)]*=-0x1;}if(_0x555e5d['match'](/(?:SCALEX|SCALE X):[ ](.*)/i)){_0x1cfd09[_0x4a74a0(0x35c)]=Number(RegExp['$1']);if(_0x76228[_0x4a74a0(0x1e7)]&&this[_0x4a74a0(0x348)]())_0x1cfd09[_0x4a74a0(0x35c)]*=-0x1;if(_0x76228[_0x4a74a0(0x38f)]&&this[_0x4a74a0(0x281)]())_0x1cfd09[_0x4a74a0(0x35c)]*=-0x1;}_0x555e5d['match'](/(?:SCALEY|SCALE Y):[ ](.*)/i)&&(_0x1cfd09[_0x4a74a0(0x317)]=Number(RegExp['$1']));if(_0x555e5d[_0x4a74a0(0x27a)](/OFFSET:[ ](.*),[ ](.*)/i)){if('WjKIw'===_0x4a74a0(0x349)){const _0x5afa4a=_0x332a86[_0x4a74a0(0x29c)]['Settings'][_0x4a74a0(0x2f9)];this['_dragonbonesSpriteData']={'filename':'','animation':'','scaleX':_0x5afa4a[_0x4a74a0(0x1fa)],'scaleY':_0x5afa4a[_0x4a74a0(0x344)],'offsetX':_0x5afa4a[_0x4a74a0(0x328)],'offsetY':_0x5afa4a['OffsetY'],'timeScale':_0x5afa4a[_0x4a74a0(0x31a)],'walkRate':0x1,'dashRate':0x1,'width':_0x5afa4a['Width'],'height':_0x5afa4a[_0x4a74a0(0x26a)],'flipLeft':_0x5afa4a[_0x4a74a0(0x2a7)],'flipRight':_0x5afa4a[_0x4a74a0(0x261)],'animationNames':{'idle':_0x5afa4a[_0x4a74a0(0x34f)],'walk':_0x5afa4a['Walk'],'dash':_0x5afa4a['Dash'],'jump':_0x5afa4a[_0x4a74a0(0x252)],'ladderidle':_0x5afa4a[_0x4a74a0(0x2ae)],'ladderclimb':_0x5afa4a[_0x4a74a0(0x202)],'ropeidle':_0x5afa4a[_0x4a74a0(0x30a)],'ropeclimb':_0x5afa4a[_0x4a74a0(0x29a)]}},this[_0x4a74a0(0x2a0)]===_0x3b60e5&&(this[_0x4a74a0(0x2a0)]=0x0);}else _0x1cfd09[_0x4a74a0(0x32b)]=Number(RegExp['$1']),_0x1cfd09[_0x4a74a0(0x310)]=Number(RegExp['$2']);}_0x555e5d[_0x4a74a0(0x27a)](/(?:OFFSETX|OFFSET X):[ ](.*)/i)&&(_0x4a74a0(0x2e2)!==_0x4a74a0(0x37c)?_0x1cfd09['offsetX']=Number(RegExp['$1']):_0x2715f7=_0x4a74a0(0x333));_0x555e5d['match'](/(?:OFFSETY|OFFSET Y):[ ](.*)/i)&&(_0x1cfd09[_0x4a74a0(0x310)]=Number(RegExp['$1']));_0x555e5d['match'](/(?:TIMESCALE|TIME SCALE):[ ](.*)/i)&&(_0x4a74a0(0x25d)!==_0x4a74a0(0x386)?_0x1cfd09[_0x4a74a0(0x1ed)]=Number(RegExp['$1']):this['requestMotion'](_0x4a74a0(0x2f5)));_0x555e5d['match'](/SIZE:[ ](.*),[ ](.*)/i)&&(_0x1cfd09['width']=Number(RegExp['$1']),_0x1cfd09[_0x4a74a0(0x1bb)]=Number(RegExp['$2']));_0x555e5d[_0x4a74a0(0x27a)](/WIDTH:[ ](.*)/i)&&(_0x4a74a0(0x27c)!==_0x4a74a0(0x2d3)?_0x1cfd09['width']=Number(RegExp['$1']):this['isDragonbonesHueAffected']()?this[_0x4a74a0(0x321)](_0x3107ef):_0x2e9cb1[_0x4a74a0(0x29c)][_0x4a74a0(0x2d8)][_0x4a74a0(0x2bd)](this,_0x5cf0f5));_0x555e5d[_0x4a74a0(0x27a)](/HEIGHT:[ ](.*)/i)&&(_0x4a74a0(0x1f4)==='FGExl'?_0x35609d=['dead',_0x4a74a0(0x226),'victory']:_0x1cfd09[_0x4a74a0(0x1bb)]=Number(RegExp['$1']));const _0x9217db=_0x555e5d[_0x4a74a0(0x27a)](/(?:ANI|MOTION)[ ](.*):[ ](.*)/gi);if(_0x9217db)for(const _0x22e667 of _0x9217db){_0x22e667[_0x4a74a0(0x27a)](/(?:ANI|MOTION)[ ](.*):[ ](.*)/i);const _0xba1288=String(RegExp['$1'])[_0x4a74a0(0x25b)]()['trim'](),_0x56d783=String(RegExp['$2'])[_0x4a74a0(0x1d1)]();_0x1cfd09['motion'][_0xba1288]=_0x56d783;}}},Game_BattlerBase[_0x354f2b(0x2e6)][_0x354f2b(0x2c1)]=function(){const _0x5b3798=_0x354f2b;if(this['_dragonbonesBattlerData']!==undefined)return this[_0x5b3798(0x331)];return this[_0x5b3798(0x390)](),this['setupDragonbonesData'](),this[_0x5b3798(0x331)];},Game_BattlerBase[_0x354f2b(0x2e6)][_0x354f2b(0x2b3)]=function(){const _0x4db490=_0x354f2b;return this['battler']()&&this['dragonbonesData']()[_0x4db490(0x200)]!=='';},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x21e)]=Game_Battler[_0x354f2b(0x2e6)][_0x354f2b(0x259)],Game_Battler[_0x354f2b(0x2e6)][_0x354f2b(0x259)]=function(_0x2af28b){const _0x5d24af=_0x354f2b;VisuMZ[_0x5d24af(0x29c)]['Game_Battler_requestMotion'][_0x5d24af(0x2bd)](this,_0x2af28b),this[_0x5d24af(0x2b3)]()&&this[_0x5d24af(0x200)]()[_0x5d24af(0x32a)](_0x2af28b);},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x357)]=Game_Battler[_0x354f2b(0x2e6)][_0x354f2b(0x34d)],Game_Battler[_0x354f2b(0x2e6)]['requestMotionRefresh']=function(){const _0x4f663f=_0x354f2b;VisuMZ['DragonbonesUnion'][_0x4f663f(0x357)][_0x4f663f(0x2bd)](this),this[_0x4f663f(0x2b3)]()&&this[_0x4f663f(0x200)]()[_0x4f663f(0x30d)]();},Game_Battler[_0x354f2b(0x2e6)][_0x354f2b(0x1de)]=function(_0x244c71){const _0x43865b=_0x354f2b;if(!this[_0x43865b(0x2b3)]())return;this[_0x43865b(0x200)]()['playDragonbonesAnimation'](_0x244c71),[_0x43865b(0x377),_0x43865b(0x1d9)][_0x43865b(0x294)](_0x244c71)?this[_0x43865b(0x311)]=![]:this[_0x43865b(0x311)]=!![];},VisuMZ['DragonbonesUnion'][_0x354f2b(0x34a)]=Game_Battler[_0x354f2b(0x2e6)]['performActionEndMembers'],Game_Battler['prototype'][_0x354f2b(0x1fd)]=function(){const _0x590f53=_0x354f2b;this[_0x590f53(0x2b3)]()&&(this[_0x590f53(0x311)]=![]),VisuMZ[_0x590f53(0x29c)][_0x590f53(0x34a)][_0x590f53(0x2bd)](this);},Game_Battler['prototype'][_0x354f2b(0x20c)]=function(){const _0x2f7cb4=_0x354f2b;if(!this[_0x2f7cb4(0x2b3)]())return;this['requestMotion']('damage');},Game_Battler[_0x354f2b(0x2e6)]['performCollapseDragonbonesUnion']=function(){const _0x33e5db=_0x354f2b;if(!this[_0x33e5db(0x2b3)]())return;this[_0x33e5db(0x259)](_0x33e5db(0x228));},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x324)]=Game_Actor['prototype']['setup'],Game_Actor[_0x354f2b(0x2e6)][_0x354f2b(0x353)]=function(_0x1f8545){const _0x2a14de=_0x354f2b;VisuMZ[_0x2a14de(0x29c)]['Game_Actor_setup'][_0x2a14de(0x2bd)](this,_0x1f8545),this[_0x2a14de(0x390)](),this['setupDragonbonesData']();},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x205)]=Game_Actor[_0x354f2b(0x2e6)][_0x354f2b(0x1d0)],Game_Actor[_0x354f2b(0x2e6)]['performAction']=function(_0x185d79){const _0xaf3dfd=_0x354f2b;this[_0xaf3dfd(0x1de)](_0xaf3dfd(0x394)),VisuMZ[_0xaf3dfd(0x29c)]['Game_Actor_performAction'][_0xaf3dfd(0x2bd)](this,_0x185d79);},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x354)]=Game_Actor['prototype'][_0x354f2b(0x2b6)],Game_Actor['prototype']['performAttack']=function(){const _0x2768fc=_0x354f2b;this[_0x2768fc(0x1de)](_0x2768fc(0x394)),VisuMZ[_0x2768fc(0x29c)]['Game_Actor_performAttack'][_0x2768fc(0x2bd)](this);},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x383)]=Game_Actor[_0x354f2b(0x2e6)][_0x354f2b(0x1cc)],Game_Actor[_0x354f2b(0x2e6)][_0x354f2b(0x1cc)]=function(){const _0x3b137a=_0x354f2b;VisuMZ[_0x3b137a(0x29c)][_0x3b137a(0x383)][_0x3b137a(0x2bd)](this),this[_0x3b137a(0x20c)]();},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x300)]=Game_Actor['prototype'][_0x354f2b(0x283)],Game_Actor['prototype'][_0x354f2b(0x283)]=function(){const _0x27cec9=_0x354f2b;VisuMZ['DragonbonesUnion'][_0x27cec9(0x300)]['call'](this),this[_0x27cec9(0x2da)]();},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x366)]=Game_Enemy[_0x354f2b(0x2e6)][_0x354f2b(0x353)],Game_Enemy[_0x354f2b(0x2e6)][_0x354f2b(0x353)]=function(_0x25a8ac,_0x49e233,_0xe96dfe){const _0x2fb202=_0x354f2b;VisuMZ[_0x2fb202(0x29c)][_0x2fb202(0x366)][_0x2fb202(0x2bd)](this,_0x25a8ac,_0x49e233,_0xe96dfe),this[_0x2fb202(0x390)](),this[_0x2fb202(0x1da)]();},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x345)]=Game_Enemy[_0x354f2b(0x2e6)][_0x354f2b(0x1ce)],Game_Enemy[_0x354f2b(0x2e6)]['transform']=function(_0x2664ff){const _0x2c808d=_0x354f2b,_0x288296=this['_enemyId'];VisuMZ[_0x2c808d(0x29c)]['Game_Enemy_transform']['call'](this,_0x2664ff),this[_0x2c808d(0x265)]!==_0x288296&&(this[_0x2c808d(0x390)](),this[_0x2c808d(0x1da)]());},VisuMZ[_0x354f2b(0x29c)]['Game_Enemy_performAction']=Game_Enemy[_0x354f2b(0x2e6)][_0x354f2b(0x1d0)],Game_Enemy[_0x354f2b(0x2e6)]['performAction']=function(_0x13bba0){const _0x3f586f=_0x354f2b;VisuMZ[_0x3f586f(0x29c)][_0x3f586f(0x29f)][_0x3f586f(0x2bd)](this,_0x13bba0),this[_0x3f586f(0x36b)](_0x13bba0);},Game_Enemy[_0x354f2b(0x2e6)]['performActionDragonbonesUnion']=function(_0xb8f4c2){const _0x51f3ab=_0x354f2b;if(!this[_0x51f3ab(0x2b3)]())return;this[_0x51f3ab(0x1de)](_0x51f3ab(0x394));if(Imported[_0x51f3ab(0x315)])return this[_0x51f3ab(0x327)](_0xb8f4c2);if(_0xb8f4c2[_0x51f3ab(0x247)]())_0x51f3ab(0x339)===_0x51f3ab(0x339)?this[_0x51f3ab(0x1de)]('attack'):this[_0x51f3ab(0x389)]=_0x4152a2;else{if(_0xb8f4c2[_0x51f3ab(0x33c)]())'NfyYG'==='NfyYG'?this['requestMotion'](_0x51f3ab(0x333)):_0x713bc5[_0x51f3ab(0x235)]=![];else{if(_0xb8f4c2[_0x51f3ab(0x284)]())this[_0x51f3ab(0x259)]('spell');else{if(_0xb8f4c2['isSkill']())_0xb8f4c2[_0x51f3ab(0x31e)]()[_0x51f3ab(0x1c3)][_0x51f3ab(0x299)]>0x0?this[_0x51f3ab(0x1de)](_0x51f3ab(0x394)):this[_0x51f3ab(0x259)]('skill');else _0xb8f4c2['isItem']()&&this[_0x51f3ab(0x259)]('item');}}}},VisuMZ['DragonbonesUnion']['Game_Enemy_performDamage']=Game_Enemy[_0x354f2b(0x2e6)][_0x354f2b(0x1cc)],Game_Enemy['prototype'][_0x354f2b(0x1cc)]=function(){const _0x41c8fc=_0x354f2b;VisuMZ[_0x41c8fc(0x29c)][_0x41c8fc(0x2c8)]['call'](this),this[_0x41c8fc(0x20c)]();},VisuMZ[_0x354f2b(0x29c)]['Game_Enemy_performCollapse']=Game_Enemy['prototype'][_0x354f2b(0x283)],Game_Enemy[_0x354f2b(0x2e6)][_0x354f2b(0x283)]=function(){const _0x5a7a67=_0x354f2b;VisuMZ['DragonbonesUnion'][_0x5a7a67(0x2e8)][_0x5a7a67(0x2bd)](this),this[_0x5a7a67(0x2da)]();},VisuMZ['DragonbonesUnion'][_0x354f2b(0x256)]=Scene_Battle[_0x354f2b(0x2e6)][_0x354f2b(0x28d)],Scene_Battle[_0x354f2b(0x2e6)][_0x354f2b(0x28d)]=function(){const _0x3eec94=_0x354f2b;this[_0x3eec94(0x1bc)]['disposeDragonbones'](),VisuMZ['DragonbonesUnion'][_0x3eec94(0x256)][_0x3eec94(0x2bd)](this);},Sprite_Battler['prototype'][_0x354f2b(0x2ed)]=function(){const _0x397acf=_0x354f2b;this[_0x397acf(0x372)]=null,this[_0x397acf(0x388)]='';},Sprite_Battler[_0x354f2b(0x2e6)][_0x354f2b(0x337)]=function(){const _0x3aaa13=_0x354f2b;this[_0x3aaa13(0x223)]();const _0x20668b=this['_battler'][_0x3aaa13(0x2c1)]();this['_dragonbonesName']=_0x20668b[_0x3aaa13(0x200)],armatureName=_0x20668b['battler'],DragonbonesManager[_0x3aaa13(0x269)](armatureName,this[_0x3aaa13(0x291)]['bind'](this)),this['bitmap']=new Bitmap(_0x20668b[_0x3aaa13(0x360)],_0x20668b[_0x3aaa13(0x1bb)]),this[_0x3aaa13(0x38b)]&&(this[_0x3aaa13(0x38b)][_0x3aaa13(0x212)]=new Bitmap(_0x20668b[_0x3aaa13(0x360)],_0x20668b['height']));},Sprite_Battler[_0x354f2b(0x2e6)]['disposeDragonbones']=function(){const _0x41ed0d=_0x354f2b;if(this[_0x41ed0d(0x372)]){if(_0x41ed0d(0x260)!==_0x41ed0d(0x276)){if(this[_0x41ed0d(0x271)]){if(_0x41ed0d(0x245)==='asvdn')this[_0x41ed0d(0x271)]['removeChild'](this[_0x41ed0d(0x372)]);else return this[_0x41ed0d(0x21d)]&&this['_scene'][_0x41ed0d(0x341)]===_0x374db1;}this[_0x41ed0d(0x325)](this[_0x41ed0d(0x372)]),this['_dragonbones'][_0x41ed0d(0x2eb)](),delete this[_0x41ed0d(0x372)],delete this[_0x41ed0d(0x388)];}else _0x246368['removeChild'](_0x4b2e06),_0x2d5662[_0x41ed0d(0x2eb)]();}},Sprite_Battler['prototype'][_0x354f2b(0x291)]=function(){const _0x2fee1e=_0x354f2b;if(!this[_0x2fee1e(0x238)])return;const _0x402aa4=this[_0x2fee1e(0x238)][_0x2fee1e(0x2c1)]();this['_dragonbones']=DragonbonesManager['createArmature'](_0x402aa4['battler']);if(!this['_dragonbonesSpriteContainer']){if(_0x2fee1e(0x27e)===_0x2fee1e(0x27e))this['_dragonbonesSpriteContainer']=new Sprite(),this[_0x2fee1e(0x271)]['addChild'](this['_dragonbones']);else{_0x2060eb[_0x2fee1e(0x27a)](/<DRAGONBONES SPRITE MOTION (.*):[ ](.*)>/i);const _0x47e327=_0x4ce55d(_0x5cbf30['$1'])[_0x2fee1e(0x25b)]()[_0x2fee1e(0x1d1)](),_0x2ef240=_0xe9615e(_0x441d46['$2'])['toLowerCase']()[_0x2fee1e(0x1d1)]();_0x4d8cda[_0x2fee1e(0x1bf)][_0x47e327]=_0x2ef240;}}this[_0x2fee1e(0x272)](this['_dragonbonesSpriteContainer'],0x0);if(this[_0x2fee1e(0x34b)]){if(_0x2fee1e(0x262)!==_0x2fee1e(0x262)){const _0x4084b9=_0x348645[_0x309250];_0x4084b9&&(_0x45dbdb[_0x2fee1e(0x325)](_0x4084b9),_0x4084b9['dispose']());}else this[_0x2fee1e(0x34b)](),this[_0x2fee1e(0x271)][_0x2fee1e(0x32f)](this['_dragonbones']);}this[_0x2fee1e(0x30d)](),this['_dragonbones']['x']=_0x402aa4[_0x2fee1e(0x32b)],this['_dragonbones']['y']=_0x402aa4[_0x2fee1e(0x310)],this[_0x2fee1e(0x372)][_0x2fee1e(0x275)]['x']=_0x402aa4[_0x2fee1e(0x35c)],this['_dragonbones'][_0x2fee1e(0x275)]['y']=_0x402aa4['scaleY'];this[_0x2fee1e(0x238)]&&this['_battler'][_0x2fee1e(0x2aa)]()&&(this[_0x2fee1e(0x1d6)]=0x0);if(this[_0x2fee1e(0x238)]&&this['_battler'][_0x2fee1e(0x1d2)]()){this['playDragonbonesMotion'](_0x2fee1e(0x228)),this[_0x2fee1e(0x1ca)]();if(this[_0x2fee1e(0x238)][_0x2fee1e(0x1ff)]()<0x3){if('GhmcB'!==_0x2fee1e(0x221))this[_0x2fee1e(0x1d6)]=0x0;else{if(!_0x6e39c3)return;_0x1a7733['ConvertParams'](_0x758c6f,_0x3da4b9);const _0x30eb36=_0x1119cf['actor'](_0x2ce8a5[_0x2fee1e(0x22b)]);if(!_0x30eb36)return;_0x30eb36[_0x2fee1e(0x331)]={'battler':_0x27829a[_0x2fee1e(0x36c)],'scaleX':_0x5e80a9['ScaleX'],'scaleY':_0x59e410[_0x2fee1e(0x344)],'offsetX':_0x4c5f32[_0x2fee1e(0x328)],'offsetY':_0x329672[_0x2fee1e(0x25e)],'timeScale':_0x1e3e83['TimeScale'],'width':_0xbbe73c[_0x2fee1e(0x1fb)],'height':_0x3c8c28[_0x2fee1e(0x26a)],'motion':{'walk':_0x26b042[_0x2fee1e(0x31c)],'wait':_0x40c397['MotionWait'],'chant':_0x56b619['MotionChant'],'guard':_0x48a9ab['MotionGuard'],'damage':_0x359f64[_0x2fee1e(0x34c)],'evade':_0x31492c[_0x2fee1e(0x2e3)],'thrust':_0x26af52[_0x2fee1e(0x243)],'swing':_0x4aa4fe[_0x2fee1e(0x2fd)],'missile':_0x209d57[_0x2fee1e(0x2a6)],'skill':_0x5a3d70[_0x2fee1e(0x255)],'spell':_0x23f577[_0x2fee1e(0x371)],'item':_0x5aa64d[_0x2fee1e(0x1f8)],'escape':_0x4b3cd5[_0x2fee1e(0x302)],'victory':_0x2104f1[_0x2fee1e(0x26b)],'dying':_0x244048[_0x2fee1e(0x2ea)],'abnormal':_0xb053cb[_0x2fee1e(0x319)],'sleep':_0x140d16[_0x2fee1e(0x1b4)],'dead':_0x8f92a6[_0x2fee1e(0x248)]}};}}}},Sprite_Battler['prototype']['playDragonbonesMotion']=function(_0x3e421e){const _0x15f0e0=_0x354f2b;if(!this['_dragonbones'])return;if(_0x3e421e===_0x15f0e0(0x1d9)){if(_0x15f0e0(0x1e2)!==_0x15f0e0(0x1e2))this[_0x15f0e0(0x223)]();else{if(this[_0x15f0e0(0x238)]['isDying']())_0x3e421e=_0x15f0e0(0x2ab);else{if(this[_0x15f0e0(0x238)]['isGuard']()||this[_0x15f0e0(0x238)][_0x15f0e0(0x31d)]())_0x15f0e0(0x320)==='knuwR'?_0x1e2ffb*=0x2:_0x3e421e=_0x15f0e0(0x333);else{}}}}const _0x21c647=this[_0x15f0e0(0x238)]['dragonbonesData']();if(_0x21c647[_0x15f0e0(0x305)][_0x3e421e]){const _0x107334=_0x21c647[_0x15f0e0(0x305)][_0x3e421e];this[_0x15f0e0(0x288)](_0x107334);}},Sprite_Battler['prototype'][_0x354f2b(0x288)]=function(_0x1187f5){const _0x45f36d=_0x354f2b;_0x1187f5=_0x1187f5[_0x45f36d(0x25b)]();if(!this[_0x45f36d(0x372)])return;[_0x45f36d(0x1d9),_0x45f36d(0x219)][_0x45f36d(0x294)](_0x1187f5)&&this[_0x45f36d(0x238)]['isGuard']()&&(_0x45f36d(0x34e)==='QWxHw'?_0x1187f5=_0x45f36d(0x333):_0x122bba[_0x45f36d(0x1bb)]=_0x565f02(_0x23933f['$1']));const _0x558f18=this[_0x45f36d(0x372)][_0x45f36d(0x2c6)];if(_0x558f18[_0x45f36d(0x2a8)][_0x1187f5]){const _0x474f8f=_0x558f18[_0x45f36d(0x35a)],_0x54cc7a=[_0x45f36d(0x1d9),_0x45f36d(0x377),_0x45f36d(0x219),_0x45f36d(0x208),_0x45f36d(0x333),_0x45f36d(0x2ab),_0x45f36d(0x385),_0x45f36d(0x23a),_0x45f36d(0x228)];if(_0x474f8f===_0x1187f5&&_0x54cc7a['includes'](_0x1187f5))return;_0x558f18[_0x45f36d(0x306)](_0x1187f5);}},Sprite_Battler[_0x354f2b(0x2e6)][_0x354f2b(0x1ca)]=function(){const _0x375d41=_0x354f2b;this['updateDragonbonesBattler'](),this[_0x375d41(0x263)](),this[_0x375d41(0x23c)](),this['updateDragonbonesSelection']();},Sprite_Battler['prototype'][_0x354f2b(0x1eb)]=function(){const _0x3e05b4=_0x354f2b;if(!this[_0x3e05b4(0x238)])return;const _0x4d82e1=this['_battler'][_0x3e05b4(0x2c1)]();this['_dragonbonesName']=_0x4d82e1[_0x3e05b4(0x200)];},Sprite_Battler[_0x354f2b(0x2e6)][_0x354f2b(0x263)]=function(){const _0x3e2d9e=_0x354f2b;if(!this[_0x3e2d9e(0x372)])return;let _0x309ff5=this[_0x3e2d9e(0x238)]['dragonbonesData']()['timeScale'];const _0x5db45f=SceneManager[_0x3e2d9e(0x21d)];if(Imported[_0x3e2d9e(0x355)]&&_0x5db45f[_0x3e2d9e(0x2a3)]&&$gameTemp['_playTestFastMode']){if(_0x3e2d9e(0x2c0)===_0x3e2d9e(0x2c0))_0x309ff5*=0x2;else{if(!_0x149595)return;if(_0x457da5[_0x3e2d9e(0x21d)][_0x3e2d9e(0x341)]!==_0x27937f)return;_0xac5555[_0x3e2d9e(0x1e4)](_0x5d5572,_0x730034);const _0x10a131=_0x49078b[_0x3e2d9e(0x215)](),_0x4b7ce1=_0x2e66a1['event'](_0x11906c[_0x3e2d9e(0x249)]||_0x10a131[_0x3e2d9e(0x2a9)]());if(!_0x4b7ce1)return;_0x4b7ce1['dragonbonesAnimation']=_0x3f32cd['Animation'];}}Imported[_0x3e2d9e(0x33e)]&&_0x5db45f[_0x3e2d9e(0x286)]&&(_0x3e2d9e(0x274)==='SYpZV'?_0xe89506['animation'][_0x3e2d9e(0x306)](_0x332c4a['DefaultAnimation']):_0x309ff5*=(ConfigManager[_0x3e2d9e(0x318)]||0x0)+0x1),this['_dragonbones'][_0x3e2d9e(0x2c6)]['timeScale']=_0x309ff5;},Sprite_Battler[_0x354f2b(0x2e6)][_0x354f2b(0x23c)]=function(){const _0x20639a=_0x354f2b;if(!this[_0x20639a(0x372)])return;const _0x55b163=this[_0x20639a(0x372)][_0x20639a(0x2c6)];if(_0x55b163[_0x20639a(0x20e)]){const _0x4b7a6e=_0x55b163[_0x20639a(0x35a)];let _0x183ec1=VisuMZ[_0x20639a(0x29c)][_0x20639a(0x2af)][_0x20639a(0x2bf)][_0x20639a(0x2a1)];_0x183ec1===undefined&&(_0x183ec1=[_0x20639a(0x228),_0x20639a(0x226),_0x20639a(0x396)]),!_0x183ec1[_0x20639a(0x294)](_0x4b7a6e)&&(_0x20639a(0x2b4)===_0x20639a(0x2b4)?this['playDragonbonesIdleAnimation']():this[_0x20639a(0x337)]());}},Sprite_Battler[_0x354f2b(0x2e6)][_0x354f2b(0x307)]=function(){return;},Sprite_Battler['prototype'][_0x354f2b(0x30d)]=function(){const _0x111429=_0x354f2b;if(!this[_0x111429(0x372)])return;const _0x1aa6eb=this[_0x111429(0x238)];if(!_0x1aa6eb)return;if(_0x1aa6eb['isEnemy']()){const _0x56a492=this['_dragonbones'][_0x111429(0x2c6)];if(_0x56a492&&!_0x56a492['isCompleted'])return;}if(this[_0x111429(0x2d4)]()){const _0x24b9d4=this['_dragonbones'][_0x111429(0x2c6)];if(_0x24b9d4&&!_0x24b9d4[_0x111429(0x20e)])return;}_0x1aa6eb[_0x111429(0x2dd)]()&&this[_0x111429(0x288)](_0x111429(0x1d9));const _0x3bea9d=_0x1aa6eb[_0x111429(0x220)]();if(_0x1aa6eb[_0x111429(0x207)]()||_0x1aa6eb[_0x111429(0x2f4)]())this[_0x111429(0x32a)](_0x111429(0x1d9));else{if(_0x3bea9d===0x3)_0x111429(0x2a4)!==_0x111429(0x203)?this[_0x111429(0x32a)](_0x111429(0x228)):(this[_0x111429(0x244)][_0x111429(0x325)](this[_0x111429(0x372)]),this[_0x111429(0x372)][_0x111429(0x2eb)](),this[_0x111429(0x372)]=null,this[_0x111429(0x1c4)]='',this[_0x111429(0x1e8)]='');else{if(_0x3bea9d===0x2)'ZCYqN'==='ZCYqN'?this[_0x111429(0x32a)](_0x111429(0x23a)):(_0x3ce6b5[_0x111429(0x360)]=_0x5ce98f(_0x2545c0['$1']),_0x1fc89c[_0x111429(0x1bb)]=_0x2cb390(_0x3c1a48['$2']));else{if(_0x1aa6eb['isActor']()&&BattleManager[_0x111429(0x336)]())_0x111429(0x2b0)===_0x111429(0x1f1)?(this[_0x111429(0x2a0)]>0x0&&(_0x3bb6f4[_0x111429(0x33b)](_0x1450f5['animationNames']['ropeclimb']),_0x85667b[_0x111429(0x33b)](_0x5a5bf4['animationNames'][_0x111429(0x33a)]),_0x1e8c95=_0x319f8d[_0x111429(0x313)](this[_0x111429(0x2f8)](_0x14cb73[_0x111429(0x1bf)]['walk']))),_0x26d30b[_0x111429(0x33b)](_0xee39a0[_0x111429(0x1bf)]['ropeidle']),_0x2816a5[_0x111429(0x33b)](_0x3baee7[_0x111429(0x1bf)]['ladderidle'])):this[_0x111429(0x32a)]('escape');else{if(_0x1aa6eb[_0x111429(0x2e4)]())this[_0x111429(0x32a)](_0x111429(0x208));else{if(_0x1aa6eb[_0x111429(0x33c)]()||_0x1aa6eb['isGuardWaiting']()){if('jokYm'!==_0x111429(0x350))this[_0x111429(0x32a)](_0x111429(0x333));else{if(this[_0x111429(0x204)](_0x4e32bc))return;this['showPicture'](_0x1c5e18,'',0x0,_0x31145f[_0x111429(0x2e9)](_0x56c04b[_0x111429(0x360)]/0x2),_0xdbcfc6[_0x111429(0x2e9)](_0x553358['height']/0x2),0x64,0x64,0xff,0x0);}}else{if(_0x3bea9d===0x1)this[_0x111429(0x32a)](_0x111429(0x385));else{if(_0x1aa6eb['isDying']())_0x111429(0x268)!=='WKEZF'?(_0x102a7d['scaleX']=_0x45d1c3(_0x42fc99['$1']),_0x386fa7[_0x111429(0x317)]=_0x5f0500(_0x3b9589['$2'])):this[_0x111429(0x32a)](_0x111429(0x1d9));else _0x1aa6eb[_0x111429(0x27b)]()?this[_0x111429(0x32a)](_0x111429(0x1d9)):this[_0x111429(0x32a)](_0x111429(0x1d9));}}}}}}}},Sprite_Battler[_0x354f2b(0x2e6)]['canActorPlayDragonbonesMotion']=function(){const _0x1139c5=_0x354f2b;if(!this[_0x1139c5(0x238)]['isActor']())return![];if(this[_0x1139c5(0x238)]===BattleManager[_0x1139c5(0x231)])return!![];if(this[_0x1139c5(0x238)]===BattleManager[_0x1139c5(0x20b)]()&&this[_0x1139c5(0x238)][_0x1139c5(0x207)]())return!![];if(this[_0x1139c5(0x238)][_0x1139c5(0x311)])return!![];if(BattleManager[_0x1139c5(0x1d7)]===this[_0x1139c5(0x238)])return!![];if(BattleManager['_targets'][_0x1139c5(0x294)](this[_0x1139c5(0x238)]))return!![];return![];},VisuMZ['DragonbonesUnion'][_0x354f2b(0x2d8)]=Sprite_Enemy[_0x354f2b(0x2e6)][_0x354f2b(0x22a)],Sprite_Enemy['prototype']['setHue']=function(_0x16f060){const _0x3435c1=_0x354f2b;this[_0x3435c1(0x36a)]()?this[_0x3435c1(0x321)](_0x16f060):VisuMZ[_0x3435c1(0x29c)]['Sprite_Enemy_setHue'][_0x3435c1(0x2bd)](this,_0x16f060);},Sprite_Enemy[_0x354f2b(0x2e6)][_0x354f2b(0x36a)]=function(){const _0x35ee61=_0x354f2b;if(!this[_0x35ee61(0x238)])return![];if(!this[_0x35ee61(0x372)])return![];const _0x450d7c=this[_0x35ee61(0x238)]['enemy']()['note']||'';if(_0x450d7c[_0x35ee61(0x27a)](/<DRAGONBONES HUE AFFECTED>/i)){if('vezou'===_0x35ee61(0x1f3))this[_0x35ee61(0x390)](),_0x370f4b['DragonbonesUnion']['Sprite_Character_initialize']['call'](this,_0x715933),this[_0x35ee61(0x278)]();else return!![];}else{if(_0x450d7c[_0x35ee61(0x27a)](/<DRAGONBONES NO HUE>/i))return![];}return VisuMZ[_0x35ee61(0x29c)][_0x35ee61(0x2af)][_0x35ee61(0x2bf)][_0x35ee61(0x36e)];},Sprite_Enemy[_0x354f2b(0x2e6)][_0x354f2b(0x321)]=function(_0x42ec49){const _0x58e815=_0x354f2b;this[_0x58e815(0x271)][_0x58e815(0x2ef)]!==_0x42ec49&&this[_0x58e815(0x271)][_0x58e815(0x22a)](_0x42ec49);},VisuMZ[_0x354f2b(0x29c)]['Sprite_Actor_initMembers']=Sprite_Actor[_0x354f2b(0x2e6)]['initMembers'],Sprite_Actor['prototype']['initMembers']=function(){const _0x3bf50b=_0x354f2b;VisuMZ[_0x3bf50b(0x29c)][_0x3bf50b(0x397)]['call'](this),this['initMembersDragonbonesUnion']();},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x237)]=Sprite_Actor[_0x354f2b(0x2e6)][_0x354f2b(0x1e0)],Sprite_Actor['prototype'][_0x354f2b(0x1e0)]=function(){const _0x2a6afd=_0x354f2b;VisuMZ[_0x2a6afd(0x29c)]['Sprite_Actor_update']['call'](this),!this['_battler']&&this['_dragonbones']&&this[_0x2a6afd(0x223)]();},VisuMZ['DragonbonesUnion'][_0x354f2b(0x1b8)]=Sprite_Actor[_0x354f2b(0x2e6)][_0x354f2b(0x2b1)],Sprite_Actor[_0x354f2b(0x2e6)][_0x354f2b(0x2b1)]=function(){const _0x1e5730=_0x354f2b,_0x1d5024=this[_0x1e5730(0x238)];if(_0x1d5024['hasDragonbonesBattler']())_0x1e5730(0x253)===_0x1e5730(0x253)?(Sprite_Battler[_0x1e5730(0x2e6)][_0x1e5730(0x2b1)][_0x1e5730(0x2bd)](this),this[_0x1e5730(0x388)]!==_0x1d5024[_0x1e5730(0x2c1)]()[_0x1e5730(0x200)]&&(_0x1e5730(0x37e)===_0x1e5730(0x37e)?this[_0x1e5730(0x337)]():this[_0x1e5730(0x32a)](_0x1e5730(0x1d9))),this[_0x1e5730(0x1ca)]()):this[_0x1e5730(0x1d3)]();else{if('flsQv'!=='flsQv')while(_0x5ced4b['CallbackQueue'][_0x1e5730(0x257)]>0x0){const _0x2ae83e=_0x5c0a4a[_0x1e5730(0x280)][_0x1e5730(0x2c4)]();if(_0x2ae83e)_0x2ae83e(this);}else{VisuMZ['DragonbonesUnion'][_0x1e5730(0x1b8)][_0x1e5730(0x2bd)](this);if(this[_0x1e5730(0x372)]){if(_0x1e5730(0x391)===_0x1e5730(0x2fa))return _0x403ebb[_0x1e5730(0x273)](this),_0x853385[_0x1e5730(0x29c)][_0x1e5730(0x2d1)]['call'](this,_0xc09210);else this[_0x1e5730(0x223)]();}}}},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x1c8)]=Sprite_Actor[_0x354f2b(0x2e6)]['startMotion'],Sprite_Actor[_0x354f2b(0x2e6)]['startMotion']=function(_0x202399){const _0x4675cd=_0x354f2b;VisuMZ[_0x4675cd(0x29c)][_0x4675cd(0x1c8)][_0x4675cd(0x2bd)](this,_0x202399),this[_0x4675cd(0x341)][_0x4675cd(0x1bd)]===_0x4675cd(0x222)&&this[_0x4675cd(0x32a)](_0x202399);},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x384)]=Sprite_Actor[_0x354f2b(0x2e6)][_0x354f2b(0x323)],Sprite_Actor[_0x354f2b(0x2e6)][_0x354f2b(0x323)]=function(){const _0x2de60a=_0x354f2b;this[_0x2de60a(0x24a)](),VisuMZ[_0x2de60a(0x29c)][_0x2de60a(0x384)][_0x2de60a(0x2bd)](this);if(this['_battler']&&this['_battler'][_0x2de60a(0x2b3)]()){if(_0x2de60a(0x213)!==_0x2de60a(0x1dd))this['_shadowSprite'][_0x2de60a(0x217)]=![];else{if(!this['_dragonbones'])return;const _0x3b65ba=this[_0x2de60a(0x246)][_0x2de60a(0x27f)]();let _0x4b1edb=_0x3b65ba['timeScale'];this[_0x2de60a(0x246)][_0x2de60a(0x2d9)]()&&(_0x4b1edb*=this['_character'][_0x2de60a(0x2d2)](),this[_0x2de60a(0x246)][_0x2de60a(0x1dc)]()?_0x4b1edb*=_0x3b65ba['dashRate']:_0x4b1edb*=_0x3b65ba[_0x2de60a(0x2f3)]),this['_dragonbones'][_0x2de60a(0x2c6)]['timeScale']=_0x4b1edb;}}},Sprite_Actor[_0x354f2b(0x2e6)][_0x354f2b(0x24a)]=function(){const _0xd3afc2=_0x354f2b;if(this['constructor']!==Sprite_Actor)return;let _0x5c5ee2=!![];if(this['_battler']&&this[_0xd3afc2(0x238)][_0xd3afc2(0x2b3)]())_0x5c5ee2=![];this[_0xd3afc2(0x38b)]['visible']=_0x5c5ee2,this['_weaponSprite'][_0xd3afc2(0x217)]=_0x5c5ee2,this[_0xd3afc2(0x21b)][_0xd3afc2(0x217)]=_0x5c5ee2;},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x2c3)]=Sprite_Actor[_0x354f2b(0x2e6)]['updateFrame'],Sprite_Actor[_0x354f2b(0x2e6)][_0x354f2b(0x28a)]=function(){const _0x45090c=_0x354f2b;this['_battler']&&this['_battler'][_0x45090c(0x2b3)]()?this['updateFrameDragonbonesUnion']():VisuMZ['DragonbonesUnion'][_0x45090c(0x2c3)][_0x45090c(0x2bd)](this);},Sprite_Actor[_0x354f2b(0x2e6)]['updateFrameDragonbonesUnion']=function(){const _0x11e871=_0x354f2b,_0x2c1118=this[_0x11e871(0x38b)][_0x11e871(0x212)];if(_0x2c1118){if(_0x11e871(0x35e)!==_0x11e871(0x35e)){const _0x2e05e4=_0x530ce7[_0x11e871(0x29c)]['Settings'][_0x11e871(0x2bf)];this[_0x11e871(0x331)]={'battler':'','scaleX':_0x2e05e4[_0x11e871(0x1fa)],'scaleY':_0x2e05e4['ScaleY'],'width':_0x2e05e4[_0x11e871(0x1fb)],'height':_0x2e05e4['Height'],'offsetX':_0x2e05e4[_0x11e871(0x328)],'offsetY':_0x2e05e4['OffsetY'],'timeScale':_0x2e05e4[_0x11e871(0x31a)],'motion':{'walk':_0x2e05e4[_0x11e871(0x31c)],'wait':_0x2e05e4[_0x11e871(0x1e3)],'chant':_0x2e05e4[_0x11e871(0x206)],'guard':_0x2e05e4[_0x11e871(0x2a5)],'damage':_0x2e05e4[_0x11e871(0x34c)],'evade':_0x2e05e4[_0x11e871(0x2e3)],'thrust':_0x2e05e4['MotionThrust'],'swing':_0x2e05e4['MotionSwing'],'missile':_0x2e05e4[_0x11e871(0x2a6)],'skill':_0x2e05e4[_0x11e871(0x255)],'spell':_0x2e05e4['MotionSpell'],'item':_0x2e05e4[_0x11e871(0x1f8)],'escape':_0x2e05e4[_0x11e871(0x302)],'victory':_0x2e05e4['MotionVictory'],'dying':_0x2e05e4[_0x11e871(0x2ea)],'abnormal':_0x2e05e4[_0x11e871(0x319)],'sleep':_0x2e05e4[_0x11e871(0x1b4)],'dead':_0x2e05e4[_0x11e871(0x248)]}};if(_0x2e05e4[_0x11e871(0x1e7)]&&this[_0x11e871(0x348)]())this[_0x11e871(0x331)]['scaleX']*=-0x1;if(_0x2e05e4[_0x11e871(0x38f)]&&this['isEnemy']())this[_0x11e871(0x331)][_0x11e871(0x35c)]*=-0x1;}else{const _0x4cfa84=_0x2c1118['width'],_0x2fede3=_0x2c1118[_0x11e871(0x1bb)];this[_0x11e871(0x38b)][_0x11e871(0x351)](0x0,0x0,_0x4cfa84,_0x2fede3),this[_0x11e871(0x351)](0x0,0x0,_0x4cfa84,_0x2fede3);}}},VisuMZ['DragonbonesUnion']['Sprite_Enemy_initMembers']=Sprite_Enemy['prototype']['initMembers'],Sprite_Enemy[_0x354f2b(0x2e6)][_0x354f2b(0x24f)]=function(){const _0x4d13a2=_0x354f2b;VisuMZ[_0x4d13a2(0x29c)][_0x4d13a2(0x1b0)]['call'](this),this[_0x4d13a2(0x2ed)]();},VisuMZ['DragonbonesUnion'][_0x354f2b(0x332)]=Sprite_Enemy[_0x354f2b(0x2e6)][_0x354f2b(0x2dc)],Sprite_Enemy[_0x354f2b(0x2e6)]['setBattler']=function(_0x1f713a){const _0x110789=_0x354f2b;this[_0x110789(0x223)](),VisuMZ[_0x110789(0x29c)][_0x110789(0x332)][_0x110789(0x2bd)](this,_0x1f713a);if(_0x1f713a[_0x110789(0x2aa)]())this[_0x110789(0x1d6)]=0x0;},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x1ec)]=Sprite_Enemy[_0x354f2b(0x2e6)][_0x354f2b(0x2b1)],Sprite_Enemy[_0x354f2b(0x2e6)][_0x354f2b(0x2b1)]=function(){const _0x4e8fd5=_0x354f2b,_0x465674=this[_0x4e8fd5(0x238)];if(_0x465674[_0x4e8fd5(0x2b3)]()){Sprite_Battler[_0x4e8fd5(0x2e6)][_0x4e8fd5(0x2b1)][_0x4e8fd5(0x2bd)](this);if(this[_0x4e8fd5(0x388)]!==_0x465674['dragonbonesData']()[_0x4e8fd5(0x200)]){if(_0x4e8fd5(0x37a)==='GjGev')this[_0x4e8fd5(0x337)]();else return;}this[_0x4e8fd5(0x1ca)](),this[_0x4e8fd5(0x22a)](this[_0x4e8fd5(0x21a)][_0x4e8fd5(0x36f)]());}else VisuMZ[_0x4e8fd5(0x29c)][_0x4e8fd5(0x1ec)][_0x4e8fd5(0x2bd)](this),this[_0x4e8fd5(0x325)](this['_dragonbones']);},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x2e7)]=Sprite_Enemy[_0x354f2b(0x2e6)][_0x354f2b(0x26e)],Sprite_Enemy[_0x354f2b(0x2e6)][_0x354f2b(0x26e)]=function(){const _0x51c3b4=_0x354f2b;VisuMZ['DragonbonesUnion']['Sprite_Enemy_refreshMotion'][_0x51c3b4(0x2bd)](this);if(!VisuMZ[_0x51c3b4(0x29c)][_0x51c3b4(0x2af)][_0x51c3b4(0x376)])return;const _0x94769f=this[_0x51c3b4(0x238)];_0x94769f&&_0x94769f[_0x51c3b4(0x2b3)]()&&this['refreshMotionDragonbones']();},Sprite_Enemy[_0x354f2b(0x2e6)]['refreshMotionDragonbones']=function(){const _0x5bedb9=_0x354f2b,_0x265934=this[_0x5bedb9(0x238)];if(_0x265934){const _0x566c7c=_0x265934[_0x5bedb9(0x220)]();if(_0x265934[_0x5bedb9(0x207)]()||_0x265934[_0x5bedb9(0x2f4)]())_0x5bedb9(0x24d)!==_0x5bedb9(0x24d)?(_0x35a866[_0x5bedb9(0x29c)][_0x5bedb9(0x21e)][_0x5bedb9(0x2bd)](this,_0xb3d557),this[_0x5bedb9(0x2b3)]()&&this[_0x5bedb9(0x200)]()[_0x5bedb9(0x32a)](_0x4f2452)):this['playDragonbonesMotion'](_0x5bedb9(0x377));else{if(_0x566c7c===0x3){if(_0x5bedb9(0x1f0)!==_0x5bedb9(0x26c))this[_0x5bedb9(0x32a)](_0x5bedb9(0x228));else{if(!_0x44d6a4)return;if(_0x496786[_0x5bedb9(0x21d)][_0x5bedb9(0x341)]!==_0x333545)return;_0x3e775f[_0x5bedb9(0x1e4)](_0xdd7f7b,_0x4732f9),_0x373791[_0x5bedb9(0x35f)]=_0x28c026[_0x5bedb9(0x2fe)];}}else{if(_0x566c7c===0x2)this[_0x5bedb9(0x32a)](_0x5bedb9(0x23a));else{if(_0x265934[_0x5bedb9(0x2e4)]())_0x5bedb9(0x22f)===_0x5bedb9(0x30b)?_0x25efa2[_0x5bedb9(0x2f3)]=_0x38f56e(_0x453aa4['$1']):this[_0x5bedb9(0x32a)](_0x5bedb9(0x208));else{if(_0x265934[_0x5bedb9(0x33c)]()||_0x265934['isGuardWaiting']())_0x5bedb9(0x359)!=='RHbwt'?this['playDragonbonesMotion']('guard'):this[_0x5bedb9(0x1c0)]();else{if(_0x566c7c===0x1)this[_0x5bedb9(0x32a)]('abnormal');else{if(_0x265934[_0x5bedb9(0x2f2)]())this[_0x5bedb9(0x32a)](_0x5bedb9(0x1d9));else _0x265934[_0x5bedb9(0x27b)]()?this['playDragonbonesMotion'](_0x5bedb9(0x1d9)):this[_0x5bedb9(0x32a)](_0x5bedb9(0x1d9));}}}}}}}},Spriteset_Battle['prototype'][_0x354f2b(0x223)]=function(){const _0x5cc7fe=_0x354f2b;for(const _0x51e04e of this[_0x5cc7fe(0x338)]()){if(!_0x51e04e)continue;_0x51e04e[_0x5cc7fe(0x223)]();}},PluginManager['registerCommand'](pluginData[_0x354f2b(0x1bd)],_0x354f2b(0x35d),_0x349382=>{const _0xacc16=_0x354f2b;if(!$gameScreen)return;VisuMZ['ConvertParams'](_0x349382,_0x349382),$gameScreen[_0xacc16(0x326)](_0x349382['PictureID']);const _0x7c7ad1=$gameScreen[_0xacc16(0x204)](_0x349382[_0xacc16(0x277)]),_0xae181f=_0x7c7ad1['dragonbonesData']();_0xae181f[_0xacc16(0x38c)]=_0x349382[_0xacc16(0x36c)],_0xae181f[_0xacc16(0x2c6)]=_0x349382[_0xacc16(0x2fe)],_0xae181f[_0xacc16(0x32b)]=_0x349382[_0xacc16(0x328)],_0xae181f[_0xacc16(0x310)]=_0x349382[_0xacc16(0x25e)],_0xae181f[_0xacc16(0x35c)]=_0x349382[_0xacc16(0x1fa)],_0xae181f['scaleY']=_0x349382[_0xacc16(0x344)],_0xae181f['timeScale']=_0x349382[_0xacc16(0x31a)];}),PluginManager[_0x354f2b(0x304)](pluginData[_0x354f2b(0x1bd)],'Picture_DragonbonesAnimation',_0x48bc4c=>{const _0x56d84f=_0x354f2b;if(!$gameScreen)return;VisuMZ[_0x56d84f(0x1e4)](_0x48bc4c,_0x48bc4c),$gameScreen['createDefaultPicture'](_0x48bc4c[_0x56d84f(0x277)]);const _0x3e1dc8=$gameScreen[_0x56d84f(0x204)](_0x48bc4c[_0x56d84f(0x277)]),_0x234507=_0x3e1dc8[_0x56d84f(0x2c1)](),_0x20b13c=_0x48bc4c[_0x56d84f(0x2c2)]||![];_0x234507[_0x56d84f(0x2c6)]=_0x48bc4c['Animation'],_0x234507[_0x56d84f(0x298)]=_0x20b13c;}),PluginManager['registerCommand'](pluginData[_0x354f2b(0x1bd)],'Picture_DragonbonesOffset',_0xa93c5e=>{const _0x3c4b84=_0x354f2b;if(!$gameScreen)return;VisuMZ[_0x3c4b84(0x1e4)](_0xa93c5e,_0xa93c5e),$gameScreen[_0x3c4b84(0x326)](_0xa93c5e['PictureID']);const _0x1c27ab=$gameScreen[_0x3c4b84(0x204)](_0xa93c5e[_0x3c4b84(0x277)]),_0x16094c=_0x1c27ab[_0x3c4b84(0x2c1)]();_0x16094c[_0x3c4b84(0x32b)]=_0xa93c5e['OffsetX'],_0x16094c[_0x3c4b84(0x310)]=_0xa93c5e[_0x3c4b84(0x25e)];}),PluginManager[_0x354f2b(0x304)](pluginData[_0x354f2b(0x1bd)],_0x354f2b(0x30e),_0x4f3cfd=>{const _0x4322c1=_0x354f2b;if(!$gameScreen)return;VisuMZ[_0x4322c1(0x1e4)](_0x4f3cfd,_0x4f3cfd),$gameScreen['createDefaultPicture'](_0x4f3cfd['PictureID']);const _0x23ce8a=$gameScreen[_0x4322c1(0x204)](_0x4f3cfd['PictureID']),_0x3e0984=_0x23ce8a[_0x4322c1(0x2c1)]();_0x3e0984[_0x4322c1(0x35c)]=_0x4f3cfd['ScaleX'],_0x3e0984[_0x4322c1(0x317)]=_0x4f3cfd[_0x4322c1(0x344)];}),PluginManager[_0x354f2b(0x304)](pluginData['name'],_0x354f2b(0x31f),_0x5d8b6f=>{const _0x37d96d=_0x354f2b;if(!$gameScreen)return;VisuMZ['ConvertParams'](_0x5d8b6f,_0x5d8b6f),$gameScreen[_0x37d96d(0x326)](_0x5d8b6f[_0x37d96d(0x277)]);const _0x39011f=$gameScreen[_0x37d96d(0x204)](_0x5d8b6f[_0x37d96d(0x277)]),_0x3b408a=_0x39011f[_0x37d96d(0x2c1)]();_0x3b408a[_0x37d96d(0x1ed)]=_0x5d8b6f[_0x37d96d(0x31a)];}),Game_Screen[_0x354f2b(0x2e6)]['createDefaultPicture']=function(_0x59caf8){const _0x4b9c95=_0x354f2b;if(this[_0x4b9c95(0x204)](_0x59caf8))return;this[_0x4b9c95(0x266)](_0x59caf8,'',0x0,Math[_0x4b9c95(0x2e9)](Graphics[_0x4b9c95(0x360)]/0x2),Math[_0x4b9c95(0x2e9)](Graphics[_0x4b9c95(0x1bb)]/0x2),0x64,0x64,0xff,0x0);},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x1f2)]=Game_Screen[_0x354f2b(0x2e6)][_0x354f2b(0x2ee)],Game_Screen[_0x354f2b(0x2e6)][_0x354f2b(0x2ee)]=function(_0x41335f){const _0x319d2d=_0x354f2b;this[_0x319d2d(0x1ba)](_0x41335f),VisuMZ[_0x319d2d(0x29c)][_0x319d2d(0x1f2)][_0x319d2d(0x2bd)](this,_0x41335f);},Game_Screen[_0x354f2b(0x2e6)][_0x354f2b(0x1ba)]=function(_0x165af6){const _0x465f0e=_0x354f2b,_0xfe97c6=this[_0x465f0e(0x2be)](_0x165af6),_0x31142b=this[_0x465f0e(0x251)][_0xfe97c6];if(!_0x31142b)return;_0x31142b[_0x465f0e(0x390)](),_0x31142b[_0x465f0e(0x223)]();},VisuMZ[_0x354f2b(0x29c)]['Game_Picture_initialize']=Game_Picture['prototype'][_0x354f2b(0x241)],Game_Picture[_0x354f2b(0x2e6)][_0x354f2b(0x241)]=function(){const _0x1e3ba4=_0x354f2b;VisuMZ['DragonbonesUnion'][_0x1e3ba4(0x363)][_0x1e3ba4(0x2bd)](this),this[_0x1e3ba4(0x390)]();},Game_Picture[_0x354f2b(0x2e6)][_0x354f2b(0x390)]=function(){const _0x58e400=_0x354f2b;this[_0x58e400(0x374)]={'filename':'','animation':DragonbonesManager[_0x58e400(0x2b5)],'scaleX':0x1,'scaleY':0x1,'offsetX':0x0,'offsetY':0x0,'timeScale':0x1,'revertToIdle':![]};},Game_Picture['prototype'][_0x354f2b(0x2c1)]=function(){const _0x2d2748=_0x354f2b;if(this[_0x2d2748(0x374)]!==undefined)return this['_dragonbonesData'];return this[_0x2d2748(0x390)](),this[_0x2d2748(0x374)];},Game_Picture[_0x354f2b(0x2e6)]['hasDragonbones']=function(){const _0x34d458=_0x354f2b;return this[_0x34d458(0x2c1)]()['filename']!=='';},Game_Picture[_0x354f2b(0x2e6)][_0x354f2b(0x223)]=function(){const _0x406e49=_0x354f2b;if(!SceneManager[_0x406e49(0x21d)])return;if(!SceneManager['_scene']['_spriteset'])return;const _0x200f44=SceneManager['_scene'][_0x406e49(0x1bc)][_0x406e49(0x23e)](this);if(_0x200f44)_0x200f44['disposeDragonbones']();},Spriteset_Base[_0x354f2b(0x2e6)][_0x354f2b(0x23e)]=function(_0x3a9f7a){const _0x11e0e5=_0x354f2b;return this[_0x11e0e5(0x232)][_0x11e0e5(0x33f)]['find'](_0x3d43f1=>_0x3d43f1&&_0x3d43f1[_0x11e0e5(0x204)]()===_0x3a9f7a);},VisuMZ['DragonbonesUnion']['Sprite_Picture_initialize']=Sprite_Picture[_0x354f2b(0x2e6)][_0x354f2b(0x241)],Sprite_Picture[_0x354f2b(0x2e6)][_0x354f2b(0x241)]=function(_0x1794d2){const _0x2f2861=_0x354f2b;this[_0x2f2861(0x390)](),VisuMZ['DragonbonesUnion'][_0x2f2861(0x1df)][_0x2f2861(0x2bd)](this,_0x1794d2);},Sprite_Picture[_0x354f2b(0x2e6)]['initDragonbonesData']=function(_0x13a6d4){const _0x5a1628=_0x354f2b;this[_0x5a1628(0x372)]=null,this['_dragonbonesFilename']='',this[_0x5a1628(0x1e8)]='';},VisuMZ[_0x354f2b(0x29c)]['Sprite_Picture_update']=Sprite_Picture['prototype'][_0x354f2b(0x1e0)],Sprite_Picture[_0x354f2b(0x2e6)][_0x354f2b(0x1e0)]=function(){const _0x38a217=_0x354f2b;VisuMZ[_0x38a217(0x29c)]['Sprite_Picture_update']['call'](this),this[_0x38a217(0x1ca)]();},Sprite_Picture[_0x354f2b(0x2e6)][_0x354f2b(0x223)]=function(){const _0x24decb=_0x354f2b;this[_0x24decb(0x372)]&&(this[_0x24decb(0x325)](this['_dragonbones']),this[_0x24decb(0x372)][_0x24decb(0x2eb)](),this[_0x24decb(0x372)]=null,this['_dragonbonesFilename']='',this[_0x24decb(0x1e8)]='');},Sprite_Picture[_0x354f2b(0x2e6)][_0x354f2b(0x1ca)]=function(){const _0x3428a6=_0x354f2b,_0x154a45=this[_0x3428a6(0x204)]();if(!_0x154a45)return this[_0x3428a6(0x223)]();if(!_0x154a45[_0x3428a6(0x282)]())return this['disposeDragonbones']();this[_0x3428a6(0x23f)]();if(!this[_0x3428a6(0x372)])return;this[_0x3428a6(0x23c)](),this[_0x3428a6(0x1b2)](),this[_0x3428a6(0x263)]();},Sprite_Picture[_0x354f2b(0x2e6)]['updateDragonbonesArmature']=function(){const _0x2aefe0=_0x354f2b,_0x2a9d05=this[_0x2aefe0(0x204)]()['dragonbonesData']();if(this[_0x2aefe0(0x1c4)]===_0x2a9d05[_0x2aefe0(0x38c)])return;this[_0x2aefe0(0x223)](),this[_0x2aefe0(0x1c4)]=_0x2a9d05[_0x2aefe0(0x38c)],DragonbonesManager[_0x2aefe0(0x269)](_0x2a9d05[_0x2aefe0(0x38c)],this[_0x2aefe0(0x291)][_0x2aefe0(0x1c5)](this));},Sprite_Picture[_0x354f2b(0x2e6)][_0x354f2b(0x291)]=function(){const _0x25b858=_0x354f2b,_0x65c691=this[_0x25b858(0x204)]()[_0x25b858(0x2c1)]();this[_0x25b858(0x372)]=DragonbonesManager['createArmature'](_0x65c691[_0x25b858(0x38c)]),this[_0x25b858(0x272)](this[_0x25b858(0x372)],0x0),this[_0x25b858(0x23c)]();},Sprite_Picture[_0x354f2b(0x2e6)][_0x354f2b(0x23c)]=function(){const _0x293152=_0x354f2b;if(!this[_0x293152(0x372)])return;const _0x131d9f=this['picture']()['dragonbonesData']();this[_0x293152(0x1e8)]!==_0x131d9f[_0x293152(0x2c6)]&&(this[_0x293152(0x1e8)]=_0x131d9f[_0x293152(0x2c6)],this[_0x293152(0x288)]());},Sprite_Picture[_0x354f2b(0x2e6)][_0x354f2b(0x288)]=function(){const _0x3a580c=_0x354f2b;if(!this[_0x3a580c(0x372)])return;const _0x3224f9=this['_dragonbones']['animation'],_0x1eb8ee=this['_dragonbonesAnimation'][_0x3a580c(0x25b)]()[_0x3a580c(0x1d1)]();_0x3224f9[_0x3a580c(0x2a8)][_0x1eb8ee]&&_0x3224f9[_0x3a580c(0x306)](_0x1eb8ee);},Sprite_Picture[_0x354f2b(0x2e6)][_0x354f2b(0x1b2)]=function(){const _0x1ad0b8=_0x354f2b;if(!this[_0x1ad0b8(0x372)])return;const _0x3c5919=this[_0x1ad0b8(0x204)]()['dragonbonesData']();this[_0x1ad0b8(0x372)]['x']=_0x3c5919[_0x1ad0b8(0x32b)],this['_dragonbones']['y']=_0x3c5919[_0x1ad0b8(0x310)],this[_0x1ad0b8(0x372)][_0x1ad0b8(0x275)]['x']=_0x3c5919[_0x1ad0b8(0x35c)],this[_0x1ad0b8(0x372)]['scale']['y']=_0x3c5919[_0x1ad0b8(0x317)],this[_0x1ad0b8(0x372)][_0x1ad0b8(0x2c6)]['isPlaying']===![]&&_0x3c5919[_0x1ad0b8(0x298)]&&(_0x3c5919[_0x1ad0b8(0x2c6)]=_0x1ad0b8(0x1d9));},Sprite_Picture['prototype'][_0x354f2b(0x263)]=function(){const _0x20e74e=_0x354f2b;if(!this[_0x20e74e(0x372)])return;const _0x5bf468=this['picture']()[_0x20e74e(0x2c1)]();let _0x404967=_0x5bf468['timeScale'];this[_0x20e74e(0x372)][_0x20e74e(0x2c6)][_0x20e74e(0x1ed)]=_0x404967;},PluginManager[_0x354f2b(0x304)](pluginData[_0x354f2b(0x1bd)],_0x354f2b(0x224),_0xa56ddc=>{const _0x4b8354=_0x354f2b;if(!$gameMap)return;VisuMZ[_0x4b8354(0x1e4)](_0xa56ddc,_0xa56ddc);const _0x6f57eb=$gameActors[_0x4b8354(0x20b)](_0xa56ddc[_0x4b8354(0x22b)]);if(!_0x6f57eb)return;const _0x22fbaf=JsonEx[_0x4b8354(0x1f7)](_0x6f57eb[_0x4b8354(0x1db)]);_0x6f57eb[_0x4b8354(0x1db)]={'filename':_0xa56ddc[_0x4b8354(0x36c)],'animation':'','scaleX':_0xa56ddc[_0x4b8354(0x1fa)],'scaleY':_0xa56ddc[_0x4b8354(0x344)],'offsetX':_0xa56ddc['OffsetX'],'offsetY':_0xa56ddc['OffsetY'],'timeScale':_0xa56ddc[_0x4b8354(0x31a)],'walkRate':_0xa56ddc[_0x4b8354(0x1f5)]??0x1,'dashRate':_0xa56ddc[_0x4b8354(0x31b)]??0x1,'width':_0xa56ddc[_0x4b8354(0x1fb)],'height':_0xa56ddc[_0x4b8354(0x26a)],'flipLeft':_0xa56ddc[_0x4b8354(0x2a7)],'flipRight':_0xa56ddc[_0x4b8354(0x261)],'animationNames':{'idle':_0xa56ddc[_0x4b8354(0x34f)],'walk':_0xa56ddc[_0x4b8354(0x1d5)],'dash':_0xa56ddc['Dash'],'jump':_0xa56ddc[_0x4b8354(0x252)],'ladderidle':_0xa56ddc[_0x4b8354(0x2ae)],'ladderclimb':_0xa56ddc[_0x4b8354(0x202)],'ropeidle':_0xa56ddc[_0x4b8354(0x30a)],'ropeclimb':_0xa56ddc[_0x4b8354(0x29a)]}},$gamePlayer[_0x4b8354(0x309)]();}),PluginManager[_0x354f2b(0x304)](pluginData['name'],_0x354f2b(0x1c9),_0x5f51bc=>{const _0x3c9f2b=_0x354f2b;if(!$gameMap)return;if(SceneManager['_scene'][_0x3c9f2b(0x341)]!==Scene_Map)return;VisuMZ[_0x3c9f2b(0x1e4)](_0x5f51bc,_0x5f51bc);const _0x18f21a=$gameActors[_0x3c9f2b(0x20b)](_0x5f51bc[_0x3c9f2b(0x22b)]),_0x58c2cd=_0x18f21a['index'](),_0x5d6909=_0x58c2cd===0x0?$gamePlayer:$gamePlayer[_0x3c9f2b(0x314)]()[_0x3c9f2b(0x33d)](_0x58c2cd-0x1);if(!_0x5d6909)return;_0x5d6909[_0x3c9f2b(0x35f)]=_0x5f51bc[_0x3c9f2b(0x2fe)];}),PluginManager[_0x354f2b(0x304)](pluginData[_0x354f2b(0x1bd)],'MapSprite_ActorAnimationStop',_0x151d17=>{const _0x4acbfc=_0x354f2b;if(!$gameMap)return;if(SceneManager['_scene'][_0x4acbfc(0x341)]!==Scene_Map)return;VisuMZ[_0x4acbfc(0x1e4)](_0x151d17,_0x151d17);const _0x4cbaa4=$gameActors[_0x4acbfc(0x20b)](_0x151d17[_0x4acbfc(0x22b)]),_0x3404a4=_0x4cbaa4[_0x4acbfc(0x1af)](),_0x2d0b53=_0x3404a4===0x0?$gamePlayer:$gamePlayer[_0x4acbfc(0x314)]()['follower'](_0x3404a4-0x1);if(!_0x2d0b53)return;_0x2d0b53['dragonbonesAnimation']='';}),PluginManager['registerCommand'](pluginData[_0x354f2b(0x1bd)],_0x354f2b(0x20a),_0x276d52=>{const _0x627331=_0x354f2b;if(!$gameMap)return;if(SceneManager[_0x627331(0x21d)][_0x627331(0x341)]!==Scene_Map)return;VisuMZ['ConvertParams'](_0x276d52,_0x276d52);const _0x952d40=$gameTemp[_0x627331(0x215)](),_0x585694=$gameMap['event'](_0x276d52['EventID']||_0x952d40[_0x627331(0x2a9)]());if(!_0x585694)return;_0x585694[_0x627331(0x35f)]=_0x276d52[_0x627331(0x2fe)];}),PluginManager['registerCommand'](pluginData[_0x354f2b(0x1bd)],_0x354f2b(0x1ae),_0x2dc5c0=>{const _0x22ecfd=_0x354f2b;if(!$gameMap)return;if(SceneManager[_0x22ecfd(0x21d)]['constructor']!==Scene_Map)return;VisuMZ[_0x22ecfd(0x1e4)](_0x2dc5c0,_0x2dc5c0);const _0x2ea01c=$gameTemp['getLastPluginCommandInterpreter'](),_0x3a21de=$gameMap[_0x22ecfd(0x2b9)](_0x2dc5c0['EventID']||_0x2ea01c[_0x22ecfd(0x2a9)]());if(!_0x3a21de)return;_0x3a21de[_0x22ecfd(0x35f)]='';}),PluginManager[_0x354f2b(0x304)](pluginData[_0x354f2b(0x1bd)],_0x354f2b(0x201),_0x9a7c10=>{const _0x4f823f=_0x354f2b;if(!$gameMap)return;if(SceneManager['_scene'][_0x4f823f(0x341)]!==Scene_Map)return;VisuMZ[_0x4f823f(0x1e4)](_0x9a7c10,_0x9a7c10);const _0x527c21=$gamePlayer[_0x4f823f(0x314)]()[_0x4f823f(0x33d)](_0x9a7c10[_0x4f823f(0x301)]);if(!_0x527c21)return;_0x527c21['dragonbonesAnimation']=_0x9a7c10[_0x4f823f(0x2fe)];}),PluginManager[_0x354f2b(0x304)](pluginData[_0x354f2b(0x1bd)],_0x354f2b(0x2f0),_0x900460=>{const _0x25e402=_0x354f2b;if(!$gameMap)return;if(SceneManager['_scene']['constructor']!==Scene_Map)return;VisuMZ[_0x25e402(0x1e4)](_0x900460,_0x900460);const _0xeed9c5=$gamePlayer[_0x25e402(0x314)]()[_0x25e402(0x33d)](_0x900460['FollowerIndex']);if(!_0xeed9c5)return;_0xeed9c5[_0x25e402(0x35f)]='';}),PluginManager['registerCommand'](pluginData[_0x354f2b(0x1bd)],_0x354f2b(0x378),_0xa132cc=>{const _0x1da04e=_0x354f2b;if(!$gameMap)return;if(SceneManager[_0x1da04e(0x21d)]['constructor']!==Scene_Map)return;VisuMZ[_0x1da04e(0x1e4)](_0xa132cc,_0xa132cc),$gamePlayer[_0x1da04e(0x35f)]=_0xa132cc[_0x1da04e(0x2fe)];}),PluginManager[_0x354f2b(0x304)](pluginData[_0x354f2b(0x1bd)],_0x354f2b(0x369),_0x27ad8b=>{const _0x1caa33=_0x354f2b;if(!$gameMap)return;if(SceneManager[_0x1caa33(0x21d)][_0x1caa33(0x341)]!==Scene_Map)return;$gamePlayer['dragonbonesAnimation']='';}),Game_Temp[_0x354f2b(0x2e6)]['setLastPluginCommandInterpreter']=function(_0x2bdcc3){this['_lastPluginCommandInterpreter']=_0x2bdcc3;},Game_Temp[_0x354f2b(0x2e6)][_0x354f2b(0x215)]=function(){const _0x162a15=_0x354f2b;return this[_0x162a15(0x389)];},Object[_0x354f2b(0x370)](Game_CharacterBase[_0x354f2b(0x2e6)],_0x354f2b(0x35f),{'get':function(){const _0x2d3c7c=_0x354f2b;return this[_0x2d3c7c(0x27f)]()[_0x2d3c7c(0x2c6)];},'set':function(_0x56d82a){const _0x5295dc=_0x354f2b;this[_0x5295dc(0x27f)]()['animation']=_0x56d82a;},'configurable':!![]}),Game_CharacterBase[_0x354f2b(0x2e6)][_0x354f2b(0x390)]=function(){const _0x332539=_0x354f2b,_0x2e3164=VisuMZ['DragonbonesUnion'][_0x332539(0x2af)][_0x332539(0x2f9)];this['_dragonbonesSpriteData']={'filename':'','animation':'','scaleX':_0x2e3164[_0x332539(0x1fa)],'scaleY':_0x2e3164[_0x332539(0x344)],'offsetX':_0x2e3164[_0x332539(0x328)],'offsetY':_0x2e3164[_0x332539(0x25e)],'timeScale':_0x2e3164[_0x332539(0x31a)],'walkRate':0x1,'dashRate':0x1,'width':_0x2e3164[_0x332539(0x1fb)],'height':_0x2e3164[_0x332539(0x26a)],'flipLeft':_0x2e3164[_0x332539(0x2a7)],'flipRight':_0x2e3164[_0x332539(0x261)],'animationNames':{'idle':_0x2e3164['Idle'],'walk':_0x2e3164['Walk'],'dash':_0x2e3164[_0x332539(0x295)],'jump':_0x2e3164[_0x332539(0x252)],'ladderidle':_0x2e3164['LadderIdle'],'ladderclimb':_0x2e3164[_0x332539(0x202)],'ropeidle':_0x2e3164[_0x332539(0x30a)],'ropeclimb':_0x2e3164[_0x332539(0x29a)]}},this['_dragonbonesMoveTimer']===undefined&&(_0x332539(0x347)!==_0x332539(0x21c)?this[_0x332539(0x2a0)]=0x0:this[_0x332539(0x32a)](_0x332539(0x1d9)));},Game_CharacterBase['prototype'][_0x354f2b(0x1da)]=function(){},Game_CharacterBase[_0x354f2b(0x2e6)]['checkDragonbonesStringTags']=function(_0x5edc51){const _0x2ac3d5=_0x354f2b,_0x1e7f31=this[_0x2ac3d5(0x27f)]();_0x5edc51['match'](/<DRAGONBONES SPRITE:[ ]*(.*)>/i)&&(_0x1e7f31['filename']=String(RegExp['$1'])['trim']());_0x5edc51[_0x2ac3d5(0x27a)](/<DRAGONBONES SPRITE (?:SKIN|NAME|FILENAME):[ ]*(.*)>/i)&&(_0x1e7f31['filename']=String(RegExp['$1'])['trim']());_0x5edc51[_0x2ac3d5(0x27a)](/<DRAGONBONES SPRITE[ ]SCALE:[ ](.*),[ ](.*)>/i)&&(_0x1e7f31[_0x2ac3d5(0x35c)]=Number(RegExp['$1']),_0x1e7f31['scaleY']=Number(RegExp['$2']));if(_0x5edc51[_0x2ac3d5(0x27a)](/<DRAGONBONES SPRITE[ ](?:SCALEX|SCALE X):[ ](.*)>/i)){if(_0x2ac3d5(0x382)!=='RRZTo')_0x1e7f31[_0x2ac3d5(0x35c)]=Number(RegExp['$1']);else{if(!_0x1f61f4)_0xe039d1=_0x1fb348[_0x2ac3d5(0x21d)];if(!_0x2e2dde)_0x1d6e02=_0x2ac3d5(0x2bc);if(_0x5a5cc1[_0x43e91c]){const _0x110673=_0x9f2d5f[_0x6a141d];_0x110673&&(_0x35a8cd[_0x2ac3d5(0x325)](_0x110673),_0x110673['dispose']());}this[_0x2ac3d5(0x269)](_0x28aaac,_0x557223[_0x2ac3d5(0x2f7)][_0x2ac3d5(0x1c5)](this,_0x224fd9,_0x160f00,_0x362c2d,_0x4fc293));}}_0x5edc51[_0x2ac3d5(0x27a)](/<DRAGONBONES SPRITE[ ](?:SCALEY|SCALE Y):[ ](.*)>/i)&&(_0x1e7f31[_0x2ac3d5(0x317)]=Number(RegExp['$1']));_0x5edc51[_0x2ac3d5(0x27a)](/<DRAGONBONES SPRITE[ ]OFFSET:[ ](.*),[ ](.*)>/i)&&(_0x1e7f31[_0x2ac3d5(0x32b)]=Number(RegExp['$1']),_0x1e7f31['offsetY']=Number(RegExp['$2']));_0x5edc51['match'](/<DRAGONBONES SPRITE[ ](?:OFFSETX|OFFSET X):[ ](.*)>/i)&&(_0x1e7f31[_0x2ac3d5(0x32b)]=Number(RegExp['$1']));_0x5edc51[_0x2ac3d5(0x27a)](/<DRAGONBONES SPRITE[ ](?:OFFSETY|OFFSET Y):[ ](.*)>/i)&&(_0x1e7f31[_0x2ac3d5(0x310)]=Number(RegExp['$1']));_0x5edc51['match'](/<DRAGONBONES SPRITE[ ]SIZE:[ ](.*),[ ](.*)>/i)&&(_0x1e7f31['width']=Number(RegExp['$1']),_0x1e7f31[_0x2ac3d5(0x1bb)]=Number(RegExp['$2']));_0x5edc51[_0x2ac3d5(0x27a)](/<DRAGONBONES SPRITE[ ]WIDTH:[ ](.*)>/i)&&(_0x1e7f31[_0x2ac3d5(0x360)]=Number(RegExp['$1']));if(_0x5edc51[_0x2ac3d5(0x27a)](/<DRAGONBONES SPRITE[ ]HEIGHT:[ ](.*)>/i)){if(_0x2ac3d5(0x279)===_0x2ac3d5(0x279))_0x1e7f31[_0x2ac3d5(0x1bb)]=Number(RegExp['$1']);else{if(!this[_0x2ac3d5(0x282)]())return;this['isMoving']()?this['_dragonbonesMoveTimer']=_0x299f8e[_0x2ac3d5(0x29c)][_0x2ac3d5(0x2af)][_0x2ac3d5(0x2f9)][_0x2ac3d5(0x2b7)]:this[_0x2ac3d5(0x2a0)]--;}}_0x5edc51[_0x2ac3d5(0x27a)](/<DRAGONBONES SPRITE[ ](?:TIMESCALE|TIME SCALE):[ ](.*)>/i)&&('dUyAF'!==_0x2ac3d5(0x2ad)?_0x1e7f31[_0x2ac3d5(0x1ed)]=Number(RegExp['$1']):(_0x1d10f2['DragonbonesUnion']['Game_Actor_setup'][_0x2ac3d5(0x2bd)](this,_0x18803b),this['initDragonbonesData'](),this[_0x2ac3d5(0x1da)]()));_0x5edc51['match'](/<DRAGONBONES SPRITE[ ](?:WALK RATE|WALKING RATE):[ ](.*)>/i)&&(_0x2ac3d5(0x362)!==_0x2ac3d5(0x362)?_0x1d8678[_0x2ac3d5(0x29c)][_0x2ac3d5(0x2c3)]['call'](this):_0x1e7f31[_0x2ac3d5(0x2f3)]=Number(RegExp['$1']));_0x5edc51[_0x2ac3d5(0x27a)](/<DRAGONBONES SPRITE[ ](?:DASH RATE|DASHING RATE):[ ](.*)>/i)&&(_0x2ac3d5(0x285)!=='BnHSD'?this[_0x2ac3d5(0x2de)]():_0x1e7f31[_0x2ac3d5(0x258)]=Number(RegExp['$1']));_0x5edc51[_0x2ac3d5(0x27a)](/<DRAGONBONES SPRITE FLIP LEFT>/i)&&(_0x2ac3d5(0x381)!=='ZShwP'?_0x58a2a2*=_0x1a15f9['walkRate']:_0x1e7f31[_0x2ac3d5(0x235)]=!![]);_0x5edc51[_0x2ac3d5(0x27a)](/<DRAGONBONES SPRITE NO FLIP LEFT>/i)&&(_0x1e7f31[_0x2ac3d5(0x235)]=![]);_0x5edc51[_0x2ac3d5(0x27a)](/<DRAGONBONES SPRITE FLIP RIGHT>/i)&&(_0x1e7f31[_0x2ac3d5(0x1b5)]=!![]);_0x5edc51[_0x2ac3d5(0x27a)](/<DRAGONBONES SPRITE NO FLIP RIGHT>/i)&&(_0x1e7f31[_0x2ac3d5(0x1b5)]=![]);const _0xff2003=_0x5edc51['match'](/<DRAGONBONES SPRITE MOTION (.*):[ ](.*)>/gi);if(_0xff2003)for(const _0x216d3e of _0xff2003){if(_0x2ac3d5(0x2ca)!=='xWxaJ')this[_0x2ac3d5(0x390)](),_0x517267[_0x2ac3d5(0x29c)][_0x2ac3d5(0x1df)]['call'](this,_0x5f00de);else{_0x216d3e[_0x2ac3d5(0x27a)](/<DRAGONBONES SPRITE MOTION (.*):[ ](.*)>/i);const _0x2f3bc8=String(RegExp['$1'])['toLowerCase']()[_0x2ac3d5(0x1d1)](),_0x4e08a5=String(RegExp['$2'])[_0x2ac3d5(0x25b)]()[_0x2ac3d5(0x1d1)]();_0x1e7f31[_0x2ac3d5(0x1bf)][_0x2f3bc8]=_0x4e08a5;}}if(_0x5edc51[_0x2ac3d5(0x27a)](/<DRAGONBONES SPRITE (?:SETTINGS|SETTING)>\s*([\s\S]*)\s*<\/DRAGONBONES SPRITE (?:SETTINGS|SETTING)>/i)){if(_0x2ac3d5(0x330)===_0x2ac3d5(0x330)){const _0x424553=String(RegExp['$1']);_0x424553['match'](/(?:SKIN|NAME|FILENAME):[ ]*(.*)/i)&&(_0x1e7f31[_0x2ac3d5(0x38c)]=String(RegExp['$1'])[_0x2ac3d5(0x1d1)]());_0x424553['match'](/SCALE:[ ](.*),[ ](.*)/i)&&(_0x2ac3d5(0x1e1)===_0x2ac3d5(0x1d4)?this['_dragonbonesFlipDirection']=-0x1:(_0x1e7f31[_0x2ac3d5(0x35c)]=Number(RegExp['$1']),_0x1e7f31['scaleY']=Number(RegExp['$2'])));_0x424553['match'](/(?:SCALEX|SCALE X):[ ](.*)/i)&&(_0x1e7f31[_0x2ac3d5(0x35c)]=Number(RegExp['$1']));_0x424553[_0x2ac3d5(0x27a)](/(?:SCALEY|SCALE Y):[ ](.*)/i)&&(_0x1e7f31['scaleY']=Number(RegExp['$1']));_0x424553[_0x2ac3d5(0x27a)](/OFFSET:[ ](.*),[ ](.*)/i)&&('EXniS'!=='iibDZ'?(_0x1e7f31[_0x2ac3d5(0x32b)]=Number(RegExp['$1']),_0x1e7f31[_0x2ac3d5(0x310)]=Number(RegExp['$2'])):_0x26a53d[_0x2ac3d5(0x32b)]=_0x5150a7(_0xfca4c['$1']));_0x424553[_0x2ac3d5(0x27a)](/(?:OFFSETX|OFFSET X):[ ](.*)/i)&&(_0x1e7f31[_0x2ac3d5(0x32b)]=Number(RegExp['$1']));_0x424553['match'](/(?:OFFSETY|OFFSET Y):[ ](.*)/i)&&(_0x1e7f31[_0x2ac3d5(0x310)]=Number(RegExp['$1']));_0x424553[_0x2ac3d5(0x27a)](/(?:TIMESCALE|TIME SCALE):[ ](.*)/i)&&(_0x1e7f31[_0x2ac3d5(0x1ed)]=Number(RegExp['$1']));_0x424553[_0x2ac3d5(0x27a)](/(?:WALK RATE|WALKING RATE):[ ](.*)/i)&&(_0x1e7f31[_0x2ac3d5(0x2f3)]=Number(RegExp['$1']));_0x424553['match'](/(?:DASH RATE|DASHING RATE):[ ](.*)/i)&&(_0x2ac3d5(0x267)==='oaoBT'?this[_0x2ac3d5(0x246)]&&this[_0x2ac3d5(0x246)][_0x2ac3d5(0x282)]()?this[_0x2ac3d5(0x28c)]():_0x1bb7b6[_0x2ac3d5(0x29c)][_0x2ac3d5(0x2cd)][_0x2ac3d5(0x2bd)](this):_0x1e7f31[_0x2ac3d5(0x258)]=Number(RegExp['$1']));_0x424553[_0x2ac3d5(0x27a)](/SIZE:[ ](.*),[ ](.*)/i)&&(_0x1e7f31[_0x2ac3d5(0x360)]=Number(RegExp['$1']),_0x1e7f31[_0x2ac3d5(0x1bb)]=Number(RegExp['$2']));if(_0x424553[_0x2ac3d5(0x27a)](/WIDTH:[ ](.*)/i)){if(_0x2ac3d5(0x2ac)==='oPQta')_0x1e7f31[_0x2ac3d5(0x360)]=Number(RegExp['$1']);else{const _0x2487cd=_0x152487[_0x2ac3d5(0x360)],_0x596071=_0xf32680[_0x2ac3d5(0x1bb)];this[_0x2ac3d5(0x38b)][_0x2ac3d5(0x351)](0x0,0x0,_0x2487cd,_0x596071),this[_0x2ac3d5(0x351)](0x0,0x0,_0x2487cd,_0x596071);}}_0x424553[_0x2ac3d5(0x27a)](/HEIGHT:[ ](.*)/i)&&(_0x1e7f31[_0x2ac3d5(0x1bb)]=Number(RegExp['$1']));_0x424553[_0x2ac3d5(0x27a)](/NO FLIP LEFT/i)&&(_0x1e7f31['flipLeft']=![]);_0x424553[_0x2ac3d5(0x27a)](/FLIP LEFT/i)&&(_0x1e7f31[_0x2ac3d5(0x235)]=!![]);_0x424553[_0x2ac3d5(0x27a)](/NO FLIP RIGHT/i)&&(_0x1e7f31[_0x2ac3d5(0x1b5)]=![]);_0x424553[_0x2ac3d5(0x27a)](/FLIP RIGHT/i)&&(_0x1e7f31[_0x2ac3d5(0x1b5)]=!![]);const _0x5bd382=_0x5edc51['match'](/(?:ANI|MOTION) (.*):[ ](.*)/gi);if(_0x5bd382)for(const _0x4d110d of _0x5bd382){if('apZlp'!==_0x2ac3d5(0x264)){_0x4d110d[_0x2ac3d5(0x27a)](/(?:ANI|MOTION) (.*):[ ](.*)/i);const _0x2ec9de=String(RegExp['$1'])[_0x2ac3d5(0x25b)]()[_0x2ac3d5(0x1d1)](),_0x1773a0=String(RegExp['$2'])['toLowerCase']()[_0x2ac3d5(0x1d1)]();_0x1e7f31[_0x2ac3d5(0x1bf)][_0x2ec9de]=_0x1773a0;}else _0x2866f4[_0x2ac3d5(0x317)]=_0x5adea7(_0x58beca['$1']);}}else{if(this['_battler'][_0x2ac3d5(0x2f2)]())_0xa9b22a=_0x2ac3d5(0x2ab);else{if(this[_0x2ac3d5(0x238)]['isGuard']()||this[_0x2ac3d5(0x238)][_0x2ac3d5(0x31d)]())_0x5bc90b='guard';else{}}}}},Game_CharacterBase[_0x354f2b(0x2e6)][_0x354f2b(0x27f)]=function(){const _0x2d6e3c=_0x354f2b;if(this[_0x2d6e3c(0x1db)]!==undefined)return this[_0x2d6e3c(0x1db)];return this[_0x2d6e3c(0x390)](),this[_0x2d6e3c(0x1da)](),this[_0x2d6e3c(0x1db)];},Game_CharacterBase[_0x354f2b(0x2e6)][_0x354f2b(0x282)]=function(){return this['dragonbonesSpriteData']()['filename']!=='';},Game_CharacterBase['prototype']['currentDragonbonesAnimation']=function(_0x30a405){const _0x407def=_0x354f2b,_0x115824=this[_0x407def(0x27f)]();if(!_0x30a405)return _0x115824[_0x407def(0x1bf)]['idle'];_0x115824[_0x407def(0x2c6)]=_0x115824['animation'][_0x407def(0x25b)]()[_0x407def(0x1d1)]();if(_0x115824[_0x407def(0x2c6)]!==''&&_0x30a405[_0x407def(0x2c6)][_0x407def(0x2a8)][_0x115824[_0x407def(0x2c6)]])return _0x115824[_0x407def(0x2c6)];let _0x533d9b=[];if(this[_0x407def(0x37b)]())_0x533d9b=_0x533d9b[_0x407def(0x313)](this[_0x407def(0x2f8)](_0x115824['animationNames']['jump'])),_0x533d9b=_0x533d9b[_0x407def(0x313)](this['addDragonbonesAnimationDirections'](_0x115824[_0x407def(0x1bf)][_0x407def(0x377)]));else{if(this['isOnLadder']()&&!this[_0x407def(0x37b)]()){if(Imported['VisuMZ_1_EventsMoveCore']&&this[_0x407def(0x1cd)]()){if(_0x407def(0x20d)!==_0x407def(0x20d)){_0x3c8e68[_0x407def(0x33b)](_0x1092ee+0x6);if(_0x42bd77[_0x407def(0x1b5)])_0x5e7e46['push'](_0x36586a+0x4);_0x17e4d7[_0x407def(0x33b)](_0x1a8aec+0x8);}else{if(this[_0x407def(0x2a0)]>0x0){if('ylLXF'!==_0x407def(0x236)){if(this[_0x407def(0x374)]!==_0x284f2a)return this[_0x407def(0x374)];return this[_0x407def(0x390)](),this['_dragonbonesData'];}else _0x533d9b['push'](_0x115824[_0x407def(0x1bf)][_0x407def(0x1cb)]),_0x533d9b['push'](_0x115824[_0x407def(0x1bf)][_0x407def(0x33a)]),_0x533d9b=_0x533d9b['concat'](this[_0x407def(0x2f8)](_0x115824[_0x407def(0x1bf)][_0x407def(0x377)]));}_0x533d9b[_0x407def(0x33b)](_0x115824[_0x407def(0x1bf)][_0x407def(0x242)]),_0x533d9b[_0x407def(0x33b)](_0x115824['animationNames'][_0x407def(0x2c7)]);}}else'YvVZR'!=='cBRnd'?(this[_0x407def(0x2a0)]>0x0&&(_0x407def(0x229)==='ZGffc'?this['_shadowSprite']['visible']=![]:(_0x533d9b[_0x407def(0x33b)](_0x115824[_0x407def(0x1bf)][_0x407def(0x33a)]),_0x533d9b=_0x533d9b[_0x407def(0x313)](this[_0x407def(0x2f8)](_0x115824['animationNames']['walk'])))),_0x533d9b[_0x407def(0x33b)](_0x115824['animationNames'][_0x407def(0x2c7)])):(this[_0x407def(0x1e8)]=_0x2cf003[_0x407def(0x2c6)],this[_0x407def(0x288)]());}else this[_0x407def(0x2a0)]>0x0&&(_0x407def(0x340)!==_0x407def(0x340)?(_0x313cb1[_0x407def(0x393)](_0x3f57ec),_0x2b0312[_0x407def(0x1e6)]['once'](()=>_0x2e45df['loadComplete'](_0x5248e1,_0x297428['resources']))):(this['isDashing']()&&(_0x533d9b=_0x533d9b[_0x407def(0x313)](this['addDragonbonesAnimationDirections'](_0x115824[_0x407def(0x1bf)][_0x407def(0x211)]))),_0x533d9b=_0x533d9b[_0x407def(0x313)](this[_0x407def(0x2f8)](_0x115824[_0x407def(0x1bf)]['walk']))));}_0x533d9b=_0x533d9b[_0x407def(0x313)](this[_0x407def(0x2f8)](_0x115824[_0x407def(0x1bf)]['idle']));for(const _0x5d2f2 of _0x533d9b){if('HhvLs'!=='HhvLs')this[_0x407def(0x1d6)]=0x0;else{if(_0x30a405[_0x407def(0x2c6)][_0x407def(0x2a8)][_0x5d2f2])return _0x5d2f2;}}return _0x115824[_0x407def(0x1bf)][_0x407def(0x1d9)];},Game_CharacterBase[_0x354f2b(0x2e6)][_0x354f2b(0x2f8)]=function(_0x302b6d){const _0x43b7dd=_0x354f2b,_0x3cde81=this[_0x43b7dd(0x27f)](),_0x1c2a6f=this[_0x43b7dd(0x26f)]();let _0x267b33=[];_0x267b33[_0x43b7dd(0x33b)](_0x302b6d+_0x1c2a6f);if(_0x1c2a6f===0x1){_0x267b33[_0x43b7dd(0x33b)](_0x302b6d+0x4);if(_0x3cde81[_0x43b7dd(0x235)])_0x267b33[_0x43b7dd(0x33b)](_0x302b6d+0x6);_0x267b33[_0x43b7dd(0x33b)](_0x302b6d+0x2);}if(_0x1c2a6f===0x3){_0x267b33['push'](_0x302b6d+0x6);if(_0x3cde81[_0x43b7dd(0x1b5)])_0x267b33[_0x43b7dd(0x33b)](_0x302b6d+0x4);_0x267b33[_0x43b7dd(0x33b)](_0x302b6d+0x2);}if(_0x1c2a6f===0x7){_0x267b33[_0x43b7dd(0x33b)](_0x302b6d+0x4);if(_0x3cde81[_0x43b7dd(0x235)])_0x267b33[_0x43b7dd(0x33b)](_0x302b6d+0x6);_0x267b33[_0x43b7dd(0x33b)](_0x302b6d+0x8);}if(_0x1c2a6f===0x9){if('ZdDsX'!=='PVXmW'){_0x267b33[_0x43b7dd(0x33b)](_0x302b6d+0x6);if(_0x3cde81[_0x43b7dd(0x1b5)])_0x267b33[_0x43b7dd(0x33b)](_0x302b6d+0x4);_0x267b33[_0x43b7dd(0x33b)](_0x302b6d+0x8);}else{if(!this[_0x43b7dd(0x2b3)]())return;this[_0x43b7dd(0x259)](_0x43b7dd(0x228));}}return _0x267b33[_0x43b7dd(0x33b)](_0x302b6d),_0x267b33;},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x373)]=Game_CharacterBase[_0x354f2b(0x2e6)][_0x354f2b(0x1e0)],Game_CharacterBase['prototype'][_0x354f2b(0x1e0)]=function(){const _0x134001=_0x354f2b;VisuMZ[_0x134001(0x29c)]['Game_CharacterBase_update'][_0x134001(0x2bd)](this),this['updateDragonbonesUnion']();},Game_CharacterBase[_0x354f2b(0x2e6)][_0x354f2b(0x387)]=function(){const _0x1e853c=_0x354f2b;if(!this[_0x1e853c(0x282)]())return;this[_0x1e853c(0x2d9)]()?_0x1e853c(0x2a2)==='drGnN'?(_0x222c97['DragonbonesUnion'][_0x1e853c(0x27d)][_0x1e853c(0x2bd)](this),_0x5c39ec(this[_0x1e853c(0x38a)]['bind'](this),0x1f4)):this['_dragonbonesMoveTimer']=VisuMZ[_0x1e853c(0x29c)][_0x1e853c(0x2af)]['MapSprite'][_0x1e853c(0x2b7)]:_0x1e853c(0x346)!==_0x1e853c(0x346)?this[_0x1e853c(0x32a)](_0x1e853c(0x385)):this['_dragonbonesMoveTimer']--;},VisuMZ['DragonbonesUnion'][_0x354f2b(0x2ec)]=Game_Player[_0x354f2b(0x2e6)]['refresh'],Game_Player[_0x354f2b(0x2e6)][_0x354f2b(0x309)]=function(){const _0x2a42f5=_0x354f2b;VisuMZ['DragonbonesUnion'][_0x2a42f5(0x2ec)][_0x2a42f5(0x2bd)](this),this[_0x2a42f5(0x1da)]();},Game_Player[_0x354f2b(0x2e6)]['setupDragonbonesData']=function(){const _0x2d276b=_0x354f2b,_0x45b1e7=$gameParty[_0x2d276b(0x2d7)]();!_0x45b1e7?this['initDragonbonesData']():this[_0x2d276b(0x1db)]=_0x45b1e7[_0x2d276b(0x27f)]();},VisuMZ['DragonbonesUnion'][_0x354f2b(0x1ea)]=Game_Follower[_0x354f2b(0x2e6)][_0x354f2b(0x309)],Game_Follower[_0x354f2b(0x2e6)][_0x354f2b(0x309)]=function(){const _0x5235ba=_0x354f2b;VisuMZ[_0x5235ba(0x29c)][_0x5235ba(0x1ea)][_0x5235ba(0x2bd)](this),this[_0x5235ba(0x1da)]();},Game_Follower[_0x354f2b(0x2e6)][_0x354f2b(0x1da)]=function(){const _0x369e73=_0x354f2b,_0x3d71a9=this['actor']();!_0x3d71a9?this[_0x369e73(0x390)]():this[_0x369e73(0x1db)]=_0x3d71a9[_0x369e73(0x27f)]();},Game_Actor[_0x354f2b(0x2e6)]['initDragonbonesData']=function(){const _0x5a2a9b=_0x354f2b;Game_BattlerBase['prototype'][_0x5a2a9b(0x390)]['call'](this),Game_CharacterBase[_0x5a2a9b(0x2e6)][_0x5a2a9b(0x390)][_0x5a2a9b(0x2bd)](this);},Game_Actor[_0x354f2b(0x2e6)][_0x354f2b(0x1da)]=function(){const _0x117271=_0x354f2b;Game_BattlerBase[_0x117271(0x2e6)][_0x117271(0x1da)]['call'](this);const _0x98a100=this[_0x117271(0x20b)]()['note'];Game_CharacterBase[_0x117271(0x2e6)][_0x117271(0x1f9)][_0x117271(0x2bd)](this,_0x98a100);},Game_Actor[_0x354f2b(0x2e6)][_0x354f2b(0x27f)]=function(){const _0x3f8027=_0x354f2b;if(this[_0x3f8027(0x1db)]!==undefined)return this[_0x3f8027(0x1db)];return this[_0x3f8027(0x390)](),this[_0x3f8027(0x1da)](),this[_0x3f8027(0x1db)];},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x30f)]=Game_Event[_0x354f2b(0x2e6)][_0x354f2b(0x254)],Game_Event[_0x354f2b(0x2e6)][_0x354f2b(0x254)]=function(){const _0x13d091=_0x354f2b;VisuMZ[_0x13d091(0x29c)]['Game_Event_clearPageSettings'][_0x13d091(0x2bd)](this),this[_0x13d091(0x390)]();},VisuMZ['DragonbonesUnion'][_0x354f2b(0x24e)]=Game_Event[_0x354f2b(0x2e6)][_0x354f2b(0x312)],Game_Event[_0x354f2b(0x2e6)][_0x354f2b(0x312)]=function(){const _0x145703=_0x354f2b;VisuMZ[_0x145703(0x29c)]['Game_Event_setupPageSettings']['call'](this),this[_0x145703(0x390)](),this[_0x145703(0x1da)]();},Game_Event['prototype'][_0x354f2b(0x1da)]=function(){const _0x5eed4d=_0x354f2b;this[_0x5eed4d(0x2c9)](),this[_0x5eed4d(0x28e)]();},Game_Event[_0x354f2b(0x2e6)]['setupDragonbonesDataNotetags']=function(){const _0x4bc7cd=_0x354f2b;if(!this[_0x4bc7cd(0x2b9)]())return;const _0x5e347d=this['event']()[_0x4bc7cd(0x32c)];if(_0x5e347d==='')return;this[_0x4bc7cd(0x1f9)](_0x5e347d);},Game_Event[_0x354f2b(0x2e6)]['setupDragonbonesDataCommentTags']=function(){const _0x91e265=_0x354f2b;if(!this[_0x91e265(0x2b9)]()){if('iGPQl'===_0x91e265(0x289))return;else{if(!_0x1ee6cc)return;_0x2795db[_0x91e265(0x1e4)](_0x4ccba0,_0x43af6d),_0x3e9b94[_0x91e265(0x326)](_0x5b3a79[_0x91e265(0x277)]);const _0x34bf59=_0x11edbb[_0x91e265(0x204)](_0x377f43['PictureID']),_0x487561=_0x34bf59[_0x91e265(0x2c1)](),_0x52d917=_0x262fe8[_0x91e265(0x2c2)]||![];_0x487561['animation']=_0x1dcef1[_0x91e265(0x2fe)],_0x487561['revertToIdle']=_0x52d917;}}if(!this[_0x91e265(0x20f)]())return;const _0xb9696f=this[_0x91e265(0x25a)]();let _0x34d4de='';for(const _0x126d8b of _0xb9696f){if([0x6c,0x198]['includes'](_0x126d8b[_0x91e265(0x25c)])){if(_0x34d4de!=='')_0x34d4de+='\x0a';_0x34d4de+=_0x126d8b['parameters'][0x0];}}this[_0x91e265(0x1f9)](_0x34d4de);},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x2d1)]=Game_Interpreter[_0x354f2b(0x2e6)][_0x354f2b(0x334)],Game_Interpreter[_0x354f2b(0x2e6)]['command357']=function(_0x470125){const _0x3c0b8d=_0x354f2b;return $gameTemp['setLastPluginCommandInterpreter'](this),VisuMZ[_0x3c0b8d(0x29c)][_0x3c0b8d(0x2d1)][_0x3c0b8d(0x2bd)](this,_0x470125);},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x375)]=Sprite_Character[_0x354f2b(0x2e6)][_0x354f2b(0x241)],Sprite_Character[_0x354f2b(0x2e6)][_0x354f2b(0x241)]=function(_0x127c83){const _0x2e3748=_0x354f2b;this[_0x2e3748(0x390)](),VisuMZ[_0x2e3748(0x29c)]['Sprite_Character_initialize'][_0x2e3748(0x2bd)](this,_0x127c83),this[_0x2e3748(0x278)]();},Sprite_Character['prototype'][_0x354f2b(0x390)]=function(){const _0xef15de=_0x354f2b;this[_0xef15de(0x372)]=null,this[_0xef15de(0x1c4)]='',this[_0xef15de(0x1e8)]='';},Sprite_Character[_0x354f2b(0x2e6)][_0x354f2b(0x278)]=function(){const _0x24a498=_0x354f2b;this[_0x24a498(0x244)]=new Sprite(),this['addChild'](this[_0x24a498(0x244)]);},VisuMZ[_0x354f2b(0x29c)][_0x354f2b(0x2c5)]=Sprite_Character[_0x354f2b(0x2e6)][_0x354f2b(0x2b1)],Sprite_Character[_0x354f2b(0x2e6)][_0x354f2b(0x2b1)]=function(){const _0x5931d0=_0x354f2b;VisuMZ['DragonbonesUnion'][_0x5931d0(0x2c5)][_0x5931d0(0x2bd)](this),this[_0x5931d0(0x1ca)]();},Sprite_Character[_0x354f2b(0x2e6)]['disposeDragonbones']=function(){const _0x31d400=_0x354f2b;this[_0x31d400(0x372)]&&(_0x31d400(0x1b1)!==_0x31d400(0x1b1)?(this[_0x31d400(0x390)](),this['setupDragonbonesData']()):(this[_0x31d400(0x244)]['removeChild'](this[_0x31d400(0x372)]),this['_dragonbones'][_0x31d400(0x2eb)](),this['_dragonbones']=null,this[_0x31d400(0x1c4)]='',this[_0x31d400(0x1e8)]=''));},Sprite_Character[_0x354f2b(0x2e6)][_0x354f2b(0x1ca)]=function(){const _0x116d60=_0x354f2b;if(!this['_character'])return this[_0x116d60(0x223)]();if(!this[_0x116d60(0x246)][_0x116d60(0x282)]())return this['disposeDragonbones']();this['updateDragonbonesArmature']();if(!this['_dragonbones'])return;this['updateDragonbonesAnimation'](),this[_0x116d60(0x1b2)](),this[_0x116d60(0x263)]();},Sprite_Character[_0x354f2b(0x2e6)]['updateDragonbonesArmature']=function(){const _0x1e1aa5=_0x354f2b,_0x4e3d9d=this[_0x1e1aa5(0x246)][_0x1e1aa5(0x27f)]();if(this[_0x1e1aa5(0x1c4)]===_0x4e3d9d[_0x1e1aa5(0x38c)])return;this['disposeDragonbones'](),this[_0x1e1aa5(0x1c4)]=_0x4e3d9d['filename'],DragonbonesManager[_0x1e1aa5(0x269)](_0x4e3d9d[_0x1e1aa5(0x38c)],this[_0x1e1aa5(0x291)][_0x1e1aa5(0x1c5)](this));},Sprite_Character[_0x354f2b(0x2e6)][_0x354f2b(0x291)]=function(){const _0xf37b48=_0x354f2b,_0x544146=this[_0xf37b48(0x246)][_0xf37b48(0x27f)]();this[_0xf37b48(0x372)]=DragonbonesManager[_0xf37b48(0x38d)](_0x544146[_0xf37b48(0x38c)]),this[_0xf37b48(0x23c)](),setTimeout(this[_0xf37b48(0x379)]['bind'](this),0x0);},Sprite_Character[_0x354f2b(0x2e6)]['addDragonbonesChild']=function(){const _0x5b801e=_0x354f2b;if(!this[_0x5b801e(0x372)])return;if(!this[_0x5b801e(0x244)])return;this[_0x5b801e(0x244)][_0x5b801e(0x272)](this[_0x5b801e(0x372)],0x0);},Sprite_Character[_0x354f2b(0x2e6)][_0x354f2b(0x23c)]=function(){const _0x5254d1=_0x354f2b;if(!this['_dragonbones'])return;const _0x3f5912=this['_character'][_0x5254d1(0x27f)](),_0x164362=this[_0x5254d1(0x372)][_0x5254d1(0x2c6)],_0xd0011e=this[_0x5254d1(0x246)]['currentDragonbonesAnimation'](this[_0x5254d1(0x372)]);if(_0x164362['isCompleted']){if(_0xd0011e&&_0xd0011e[_0x5254d1(0x27a)](/(?:IDLE|WALK|DASH)(\d+)/i))'awAkI'===_0x5254d1(0x1be)?this[_0x5254d1(0x246)][_0x5254d1(0x35f)]='':this[_0x5254d1(0x27f)]()[_0x5254d1(0x2c6)]=_0x590483;else{if(_0x164362[_0x5254d1(0x2fb)][_0x5254d1(0x1c2)]===0x1){if(_0x5254d1(0x1cf)===_0x5254d1(0x1cf))return;else _0x2fedaf[_0x5254d1(0x1ed)]=_0x495c92(_0x48b319['$1']);}}this[_0x5254d1(0x1e8)]='',_0x164362['lastAnimationName']='';}this[_0x5254d1(0x1e8)]!==_0xd0011e&&(this[_0x5254d1(0x1e8)]=_0xd0011e,this[_0x5254d1(0x288)]());},Sprite_Character[_0x354f2b(0x2e6)][_0x354f2b(0x288)]=function(){const _0x1431b0=_0x354f2b;if(!this[_0x1431b0(0x372)])return;const _0xc4153d=this[_0x1431b0(0x372)][_0x1431b0(0x2c6)],_0xec84b4=this[_0x1431b0(0x1e8)]['toLowerCase']()[_0x1431b0(0x1d1)]();if(_0xc4153d[_0x1431b0(0x2a8)][_0xec84b4]){if(_0xc4153d[_0x1431b0(0x35a)]===_0xec84b4&&_0xc4153d[_0x1431b0(0x2a8)][_0xec84b4][_0x1431b0(0x1c2)]<=0x0)return;_0xc4153d[_0x1431b0(0x306)](_0xec84b4);}},Sprite_Character[_0x354f2b(0x2e6)][_0x354f2b(0x1b2)]=function(){const _0x1d4bb0=_0x354f2b;if(!this[_0x1d4bb0(0x372)])return;const _0x149217=this[_0x1d4bb0(0x246)][_0x1d4bb0(0x27f)]();this['_dragonbones']['x']=_0x149217['offsetX'],this[_0x1d4bb0(0x372)]['y']=_0x149217[_0x1d4bb0(0x310)],this[_0x1d4bb0(0x372)][_0x1d4bb0(0x275)]['x']=_0x149217[_0x1d4bb0(0x35c)]*this[_0x1d4bb0(0x367)](),this[_0x1d4bb0(0x372)][_0x1d4bb0(0x275)]['y']=_0x149217[_0x1d4bb0(0x317)];},Sprite_Character[_0x354f2b(0x2e6)][_0x354f2b(0x367)]=function(){const _0x48b601=_0x354f2b,_0x436984=this['_character'][_0x48b601(0x27f)]();this['_dragonbonesFlipDirection']=this[_0x48b601(0x37f)]||0x1;if(_0x436984['flipLeft']&&[0x1,0x4,0x7][_0x48b601(0x294)](this[_0x48b601(0x246)][_0x48b601(0x26f)]()))this[_0x48b601(0x37f)]=-0x1;else{if(_0x436984['flipRight']&&[0x9,0x6,0x3][_0x48b601(0x294)](this['_character'][_0x48b601(0x26f)]()))this[_0x48b601(0x37f)]=-0x1;else![0x8,0x2][_0x48b601(0x294)](this[_0x48b601(0x246)][_0x48b601(0x26f)]())&&(_0x48b601(0x303)==='UHrlS'?this[_0x48b601(0x37f)]=0x1:(_0x4f6c50['addChild'](_0x282ad9),_0x3226a0['x']=_0x144fae[_0x48b601(0x360)]/0x2,_0x55515d['y']=_0x220566[_0x48b601(0x1bb)]*0x3/0x4,_0x1fcd69=_0x3ca177||_0x4b2e92[_0x48b601(0x2b5)],_0x564610=_0x40d89b[_0x48b601(0x25b)](),_0x526ddd[_0x48b601(0x2c6)][_0x48b601(0x2a8)][_0x3ba28]&&_0x36fa45[_0x48b601(0x2c6)]['play'](_0x5d73e0)));}return this['_dragonbonesFlipDirection'];},Sprite_Character[_0x354f2b(0x2e6)][_0x354f2b(0x263)]=function(){const _0x3217e7=_0x354f2b;if(!this['_dragonbones'])return;const _0x695d8e=this[_0x3217e7(0x246)]['dragonbonesSpriteData']();let _0x3fd3a0=_0x695d8e[_0x3217e7(0x1ed)];if(this[_0x3217e7(0x246)][_0x3217e7(0x2d9)]()){_0x3fd3a0*=this[_0x3217e7(0x246)][_0x3217e7(0x2d2)]();if(this[_0x3217e7(0x246)]['isDashing']()){if('ltjqg'!=='XUWpf')_0x3fd3a0*=_0x695d8e[_0x3217e7(0x258)];else{const _0x4f74c7=_0x1ee55b(_0x380163['$1']);_0x4f74c7!==_0x41b480[_0x397647][_0x3217e7(0x2e1)]&&(_0xa31c4c(_0x3217e7(0x25f)[_0x3217e7(0x2e0)](_0x4f8feb,_0x4f74c7)),_0x4eaffb[_0x3217e7(0x230)]());}}else _0x3217e7(0x329)!==_0x3217e7(0x335)?_0x3fd3a0*=_0x695d8e['walkRate']:this['initDragonbonesData']();}this['_dragonbones']['animation'][_0x3217e7(0x1ed)]=_0x3fd3a0;},VisuMZ[_0x354f2b(0x29c)]['Sprite_Character_updateCharacterFrame']=Sprite_Character['prototype'][_0x354f2b(0x297)],Sprite_Character[_0x354f2b(0x2e6)][_0x354f2b(0x297)]=function(){const _0x337112=_0x354f2b;this[_0x337112(0x246)]&&this[_0x337112(0x246)][_0x337112(0x282)]()?this[_0x337112(0x28c)]():VisuMZ['DragonbonesUnion'][_0x337112(0x2cd)][_0x337112(0x2bd)](this);},Sprite_Character[_0x354f2b(0x2e6)][_0x354f2b(0x28c)]=function(){const _0x46f507=_0x354f2b,_0x4d3bb5=this[_0x46f507(0x246)][_0x46f507(0x27f)](),_0x1d458e=_0x4d3bb5[_0x46f507(0x1bb)];this[_0x46f507(0x351)](0x0,0x0,0x0,_0x1d458e);};