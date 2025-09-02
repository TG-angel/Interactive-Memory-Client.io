/*:
@target MZ
@title sirL_MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68
@author SirLegna
@date July 31, 2025
@url https://sirlegna.itch.io/sir-legnas-plugin-generator 
@filename sirL_MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68
Please reach out to me for any help or just to talk about your project

@plugindesc This plugin is composed of multiple plugins. If problem report it with debug hash which can be found in Help section to the generator page.
@command Actor To Event.setActor2Event
@text Set an Actor to Event
@desc Make an Event look like an Actor while storing the actor data in the event to be pulled later
	@arg ActorId
	@text Actor Id
	@type text
	@desc Actor Id that will be used, can use javascript to define the number
	@default 1
	@min 1

	@arg eventId
	@text Event Id
	@type number
	@desc Event Index that has the original event.
	@default 1
	@min 1


@command Actor To Event.getEventActor
@text Get Actor from Event
@desc Get Actor Id from an Event, if none set then it will return as 0
	@arg eventId
	@text Event Id
	@type number
	@desc Event Index that has the original event.
	@default 1
	@min 1

	@arg variableId
	@text Variable Id
	@type variable
	@desc Variable to store Actor Id
	@default 1
	@min 1


@command Actor By Variable.setActorFaceData
@text Set Actor Face Data by Variable
@desc Set the Face Data of Show Text messages based on Actor Face from Variable
	@arg actorID
	@text Actor Id stored in variable
	@type variable
	@desc The variable that contains the Actor ID in
	@default 1


@command Actor By Variable.setActorFaceDataTemp
@text Set a Temporary Actor Face Data by Variable
@desc Set the Face Data of Show Text messages based on Actor Face from Variable for the next Show Text
	@arg actorID
	@text Actor Id stored in variable
	@type variable
	@desc The variable that contains the Actor ID in
	@default 1


@command Actor By Variable.resetActorFaceData
@text Reset Show Text Face Data to default
@desc Reset the Show Text Face Data back to the default behavior

@command Actor By Variable.changePartyMemberByVariable
@text Change Party Member using Variable
@desc Changes an actor in the party using a variable
	@arg actorID
	@text Actor Id stored in variable
	@type variable
	@desc The variable that contains the Actor ID in
	@default 1

	@arg Operation
	@text Operation
	@type select
	@desc Selects whether to add or remove the actor
	@default 0
	@option Add
	@value 0
	@option Remove
	@value 1

	@arg Initialize
	@text Initialize
	@type boolean
	@desc When adding, reverts to the starting state as specified in the database
	@default false
	@on Revert
	@off Retain


@command Actor By Variable.changeEquipmentByVariable
@text Change Equipment using Variable
@desc Changes the equipment of an actor which is defined by a variable
	@arg actorID
	@text Actor Id stored in variable
	@type variable
	@desc The variable that contains the Actor ID for the actor to change the equipment of
	@default 1

	@arg equipmentType
	@text Equipment Type
	@type number
	@desc The number for type of the equipment to be changed, can be found in 'Types' database.
	@default 1
	@min 1

	@arg equipmentItem
	@text Equipment Item
	@type number
	@desc Item to be newly equipped. The party must have the specified item. 0 - none
	@default 0
	@min 0


@command Actor By Variable.changeNameByVariable
@text Change Name using Variable
@desc Changes the name of an actor which is defined by a variable
	@arg actorID
	@text Actor Id stored in variable
	@type variable
	@desc The variable that contains the Actor ID for the actor to change the equipment of
	@default 1

	@arg newName
	@text Name
	@type string
	@desc New name of the actor
	@default 


@command Actor By Variable.changeClassByVariable
@text Changes the class of an actor using Variable
@desc Changes the class of an actor which is defined by a variable
	@arg actorID
	@text Actor Id stored in variable
	@type variable
	@desc The variable that contains the Actor ID for the actor to change the equipment of
	@default 1

	@arg class
	@text Class
	@type class
	@desc The new class of the actor.

	@arg saveLevel
	@text Save Level
	@type boolean
	@desc Save the current level of the actor
	@default false
	@on Save
	@off Reset


@command Actor By Variable.changeNicknameByVariable
@text Change Nickname using Variable
@desc Changes the nickname of an actor which is defined by a variable
	@arg actorID
	@text Actor Id stored in variable
	@type variable
	@desc The variable that contains the Actor ID for the actor to change the equipment of
	@default 1

	@arg newNickname
	@text Nickname
	@type string
	@desc New nickname of the actor
	@default 


@command Actor By Variable.changeProfileByVariable
@text Change Profile using Variable
@desc Changes the profile of an actor which is defined by a variable
	@arg actorID
	@text Actor Id stored in variable
	@type variable
	@desc The variable that contains the Actor ID for the actor to change the equipment of
	@default 1

	@arg newProfile
	@text Profile
	@type multiline_string
	@desc New profile of the actor
	@default 


@command Actor By Variable.nameInputProcessingByVariable
@text Name Input Processing using Variable
@desc Calls up the name input screen for an actor by variable
	@arg actorID
	@text Actor Id stored in variable
	@type variable
	@desc The variable that contains the Actor ID for the actor to change the equipment of
	@default 1

	@arg maxCharacter
	@text Max Characters
	@type number
	@desc Maximum number of characters for name input
	@default 8
	@max 16
	@min 1


@command Actor By Variable.changeActorImagesByVariable
@text Change Actor Images using Variable
@desc Change the image of the actor by variable
	@arg actorID
	@text Actor Id stored in variable
	@type variable
	@desc The variable that contains the Actor ID for the actor to change the equipment of
	@default 1

	@arg faceFile
	@text Face File
	@type file
	@desc File of the image to be displayed on the menu screen
	@dir img/faces/

	@arg faceId
	@text Face Id
	@type number
	@desc Index of the image to be displayed on the menu screen, starting at 0 - top left and 7 - bottom right
	@default 0
	@max 7
	@min 0

	@arg characterFile
	@text Character File
	@type file
	@desc File of the image to be displayed on the menu screen
	@dir img/characters/

	@arg characterId
	@text Character Id
	@type number
	@desc Index of the image to be displayed on the menu screen, starting at 0 - top left and 7 - bottom right
	@default 0
	@max 7
	@min 0

	@arg battlerFile
	@text [SV] Battler File
	@type file
	@desc File of the image to be displayed on the menu screen
	@dir img/sv_actors/


@command Actor By Variable.ForceActionByVariable
@text Force Action using Variable
@desc Forces the specified action on the actor by variable
	@arg actorID
	@text Actor Id stored in variable
	@type variable
	@desc The variable that contains the Actor ID for the actor to change the equipment of
	@default 1

	@arg skill
	@text Skill
	@type skill
	@desc Skill that will be used as the action

	@arg target
	@text Target
	@type select
	@desc Target of the action when selection is required.
	@default 0
	@option Last Target
	@value -2
	@option Random
	@value -1
	@option Index 1
	@value 0
	@option Index 2
	@value 1
	@option Index 3
	@value 2
	@option Index 4
	@value 3
	@option Index 5
	@value 4
	@option Index 6
	@value 5
	@option Index 7
	@value 6
	@option Index 8
	@value 7


@command Actor Cloner.addClone2Game
@text Add Cloned Actor to Game
@desc Add the cloned actor to the game, returns actor ID to a variable, if ID exist will overwrite
	@arg originalActorId
	@text Original Actor Id
	@type number
	@desc Original actor to clone from
	@default 1
	@min 1

	@arg returnVariable
	@text Variable to store new Actor Id
	@type variable
	@desc Game Variable to store the new Actor Id to.
	@default 1
	@min 1

	@arg overwriteData
	@text Clone Overwritten Data
	@type text[]
	@desc This is the list of data that you want to change from the original event to the clone, such as position
	@default ["name:'clonedActor'", "profile:'I am a cloned actor, from SirLegna\\'s Actor Cloner Plugin'","initialLevel:Math.floor(Math.random() * Math.floor(98))+1"]


@command Choice Location.choiceLocation
@text Set Choice Location by X and Y
@desc Sets the location where the choice box will appear by X and Y
	@arg locX
	@text Location X
	@type text
	@desc The javascript code that returns the X pixel value for the choice box. Use choiceList to refer to the choice window
	@default return 0;

	@arg locY
	@text Location Y
	@type text
	@desc The javascript code that returns the Y pixel value for the choice box. Use choiceList to refer to the choice window
	@default return 0;


@command Choice Location.choiceLocationTemp
@text Set a Temporary Choice Location by X and Y
@desc Sets the location where the choice box will appear by X and Y for the next choice box
	@arg locX
	@text Location X
	@type text
	@desc The javascript code that returns the X pixel value for the choice box. Use choiceList to refer to the choice window
	@default return 0;

	@arg locY
	@text Location Y
	@type text
	@desc The javascript code that returns the Y pixel value for the choice box. Use choiceList to refer to the choice window
	@default return 0;


@command Choice Location.resetChoiceLocation
@text Reset choice box behavior to default
@desc Reset the choice box location to the default behavior

@command Control Skip Text.SetSkipableText
@text Set skip-able text
@desc Sets the ability to skip text
	@arg skipableText
	@text Allow skip-able text
	@type boolean
	@desc Should player be able to skip text?
	@default true
	@on Enable Skip
	@off Disable Skip


@command Delay Switches and Variables.setSelfSwitchDelay
@text Set Self-Switch Delay
@desc Set the self-switch to change to a state after a delay
	@arg DelayType
	@text Type of Delay
	@type select
	@desc The type of delay you would like to have
	@default 4
	@option Battle Count
	@value 0
	@option Win Count
	@value 1
	@option Escape Count
	@value 2
	@option Save Count
	@value 3
	@option Frame Count
	@value 4
	@option Play Time Seconds
	@value 5
	@option Steps
	@value 6
	@option Real World Seconds
	@value 7

	@arg mapId
	@text Map Id Number
	@type number
	@desc The Map Id that has the event  you want to use the self-switch on. 0 means this map
	@default 0
	@min 0

	@arg eventId
	@text Event Id Number
	@type number
	@desc The Event Id that has the self-switch you want to delay. 0 means this event
	@default 0
	@min 0

	@arg DelayAmount
	@text Delay Amount
	@type number
	@desc The amount of delay after this plugin command is called
	@default 60
	@min 1

	@arg sSLetter
	@text Self Switch Letter
	@type select
	@desc Self switch to operate.
	@default A
	@option A
	@option B
	@option C
	@option D

	@arg Operation
	@text Operation
	@type boolean
	@desc Selects whether to turn the self switch ON or OFF
	@default true
	@on ON
	@off OFF


@command Delay Switches and Variables.setSwitchDelay
@text Set Switch Delay
@desc Set the switch to change to a state after a delay
	@arg DelayType
	@text Type of Delay
	@type select
	@desc The type of delay you would like to have
	@default 4
	@option Battle Count
	@value 0
	@option Win Count
	@value 1
	@option Escape Count
	@value 2
	@option Save Count
	@value 3
	@option Frame Count
	@value 4
	@option Play Time Seconds
	@value 5
	@option Steps
	@value 6
	@option Real World Seconds
	@value 7

	@arg DelayAmount
	@text Delay Amount
	@type number
	@desc The amount of delay after this plugin command is called
	@default 60
	@min 1

	@arg switchId
	@text Switch
	@type switch
	@desc The switch which you would like to delay after this plugin command is called
	@default 1

	@arg Operation
	@text Operation
	@type boolean
	@desc Selects whether to turn the self switch ON or OFF
	@default true
	@on ON
	@off OFF


@command Delay Switches and Variables.setVariableDelay
@text Set Variable Delay
@desc Set the variable to change to a value after a delay
	@arg DelayType
	@text Type of Delay
	@type select
	@desc The type of delay you would like to have
	@default 4
	@option Battle Count
	@value 0
	@option Win Count
	@value 1
	@option Escape Count
	@value 2
	@option Save Count
	@value 3
	@option Frame Count
	@value 4
	@option Play Time Seconds
	@value 5
	@option Steps
	@value 6
	@option Real World Seconds
	@value 7

	@arg DelayAmount
	@text Delay Amount
	@type number
	@desc The amount of delay after this plugin command is called
	@default 60
	@min 1

	@arg variableId
	@text Variable
	@type variable
	@desc The variable which you would like to delay after this plugin command is called
	@default 1

	@arg Operand
	@text Operand
	@type multiline_string
	@desc Code that will be executed when the delay has passed
	@default return (v[1] || 0) + 1


@command Face Image to Bust.isEnabled
@text Enable Plugin
@desc Enables the Face Image to Bust plugin
	@arg isEnabled
	@text State
	@type boolean
	@desc If the plugin is showing busts or not
	@default true
	@on Show bust (enabled)
	@off Disable


@command Real World Conditional.getYear
@text Get Year
@desc Set variable to year, will be four-digits
	@arg variableId
	@text Variable Id
	@type variable
	@desc Variable to set the value to.
	@default 1
	@min 1


@command Real World Conditional.getMonth
@text Get Month
@desc Set variable to month (1-12)
	@arg variableId
	@text Variable Id
	@type variable
	@desc Variable to set the value to.
	@default 1
	@min 1


@command Real World Conditional.getMonthName
@text Get Month Name
@desc Set variable to month name
	@arg variableId
	@text Variable Id
	@type variable
	@desc Variable to set the value to.
	@default 1
	@min 1


@command Real World Conditional.getDayOfMonth
@text Get Day of Month
@desc Set variable to the day of the month (1-31)
	@arg variableId
	@text Variable Id
	@type variable
	@desc Variable to set the value to.
	@default 1
	@min 1


@command Real World Conditional.getDayOfWeek
@text Get Day of Week
@desc Set variable to the day of the week (0-6) being Sunday to Saturday
	@arg variableId
	@text Variable Id
	@type variable
	@desc Variable to set the value to.
	@default 1
	@min 1


@command Real World Conditional.getDayOfWeekName
@text Get Day Name of Week
@desc Set variable to day name of week
	@arg variableId
	@text Variable Id
	@type variable
	@desc Variable to set the value to.
	@default 1
	@min 1


@command Real World Conditional.get24Hour
@text Get 24 Hour
@desc Set variable to an hour (0-23)
	@arg variableId
	@text Variable Id
	@type variable
	@desc Variable to set the value to.
	@default 1
	@min 1


@command Real World Conditional.get12Hour
@text Get 12 Hour
@desc Set variable to an hour (1-12)
	@arg variableId
	@text Variable Id
	@type variable
	@desc Variable to set the value to.
	@default 1
	@min 1


@command Real World Conditional.get12HourIndicator
@text Get 12 Hour Indicator
@desc Set variable to 12-hour indicator
	@arg variableId
	@text Variable Id
	@type variable
	@desc Variable to set the value to.
	@default 1
	@min 1


@command Real World Conditional.getMinute
@text Get Minute
@desc Set variable to minute (0-59)
	@arg variableId
	@text Variable Id
	@type variable
	@desc Variable to set the value to.
	@default 1
	@min 1


@command Real World Conditional.getSecond
@text Get Second
@desc Set variable to second (0-59)
	@arg variableId
	@text Variable Id
	@type variable
	@desc Variable to set the value to.
	@default 1
	@min 1


@command Better Show Battle Animation.ShowBattleAnimation
@text Show Battle Animation
@desc Displays the specified animation on the battle screen on alive and dead enemies
	@arg lifeStatus
	@text Alive or Dead
	@type select
	@desc Filter enemies that are in one of the states
	@default 0
	@option Alive Only
	@value 0
	@option Dead Only
	@value 1
	@option Both
	@value 2

	@arg enemyId
	@text Enemy Index
	@type select
	@desc The enemy index for the troop in battle which the animation will display on
	@default -1
	@option All Enemies
	@value -1
	@option Index 1
	@value 0
	@option Index 2
	@value 1
	@option Index 3
	@value 2
	@option Index 4
	@value 3
	@option Index 5
	@value 4
	@option Index 6
	@value 5
	@option Index 7
	@value 6
	@option Index 8
	@value 7

	@arg animation
	@text Animation Index
	@type animation
	@desc The animation index that will be animated


@command Final Critical Damage.SetAllowCritBoostForEnemies
@text Set Critical Boost for Enemies
@desc Able to change the final critical damage for the rest of game
	@arg allowCritBoostForEnemies
	@text Enemies have final critical damage
	@type boolean
	@desc Should enemies be able to boost their final attack if the player is low on health
	@default false
	@on Enable
	@off Disable


@command Position BattleBacks.SetAnimatedBattleBacks
@text Set Battle Backs Animation
@desc Sets the battleback to have animation
	@arg animatedBattleBacks
	@text Animate BattleBacks?
	@type boolean
	@desc Should your battlebacks be refreshed per update?
	@default false
	@on Animated
	@off Static


@command Position BattleBacks.Set2Default
@text Set to default
@desc Sets the battleback layout to the default style
	@arg layer
	@text BattleBack Layer
	@type number
	@desc Define which layer you would like to set
	@default 1
	@max 1
	@min 2


@command Position BattleBacks.Set2Screen
@text Set to Screen Size mode
@desc Sets the battleback layout to use the Screen Size
	@arg layer
	@text BattleBack Layer
	@type number
	@desc Define which layer you would like to set
	@default 1
	@max 1
	@min 2


@command Position BattleBacks.Set2UI
@text Set to UI Size mode
@desc Sets the battleback layout to use the UI Size
	@arg layer
	@text BattleBack Layer
	@type number
	@desc Define which layer you would like to set
	@default 1
	@max 1
	@min 2


@command Position BattleBacks.Set2Custom
@text Set to custom battleback positioning
@desc Sets the battleback layout to a custom positioning
	@arg layer
	@text BattleBack Layer
	@type number
	@desc Define which layer you would like to set
	@default 1
	@max 1
	@min 2

	@arg bbWidth
	@text BattleBack Width
	@type multiline_string
	@desc Define the width of the battleback in pixels. You can use javascript as well.
	@default Math.floor((1000 * Graphics.width) / 816)

	@arg bbHeight
	@text BattleBack Height
	@type multiline_string
	@desc Define the height of the battleback in pixels. You can use javascript as well.
	@default Math.floor((740 * Graphics.height) / 624)

	@arg bbXOff
	@text BattleBack X Offset
	@type multiline_string
	@desc Define the X offset of the battleback in pixels. You can use javascript as well.
	@default (Graphics.width - bb.width) / 2

	@arg bbYOff4SideView
	@text BattleBack Y Offset in SideView mode
	@type multiline_string
	@desc Define the Y offset of the battleback in pixels only while in side-view mode. You can use javascript as well.
	@default Graphics.height - bb.height

	@arg bbYOff4FrontView
	@text BattleBack Y Offset in FrontView mode
	@type multiline_string
	@desc Define the Y offset of the battleback in pixels only while in front view mode. You can use javascript as well.
	@default 0

	@arg bbScale
	@text BattleBack Scale
	@type multiline_string
	@desc Define the scale of the battleback in ratio. You can use javascript as well.
	@default Math.max(ratioX, ratioY, 1.0)


@command Better Script Command.ScriptCommand
@text Script Command
@desc Executes any length JavaScript found in this command
	@arg script
	@text Script
	@type multiline_string
	@desc Place any executable javascript here.
	@default 


@command Custom Game Error.throwError
@text Throw Error
@desc Errors out your game with custom message
	@arg title
	@text Title
	@type string
	@desc The yellow title text, %X with X being number is replaced by the line in Variables

	@arg message
	@text Message
	@type string
	@desc The white message text, %X with X being number is replaced by the line in Variables

	@arg variables
	@text Variables
	@type multiline_string[]
	@desc JS code to represent variables in error through replacing %X, where X list number.


@command In Event Comment.blockComment
@text Block Comment
@desc Comment out a block of code in the event
	@arg mode
	@text Mode
	@type boolean
	@desc Comments out for both deployed and play test or play test only
	@default true
	@on Both
	@off Play Test Only


@command In Event Comment.endBlockComment
@text End of Block Comment
@desc Use to end the most outer block command
	@arg mode
	@text Mode
	@type boolean
	@desc Comments out for both deployed and play test or play test only
	@default true
	@on Both
	@off Play Test Only


@command Tile-based Scaling.setZoomPercentage
@text Set the zoom percentage
@desc Set the zoom to a specific percentage, bigger means zoom in
	@arg zoom
	@text Zoom Percentage
	@type multiline_string
	@desc Zoom percentage like 1.25, can use javascript to define
	@default 1


@command Event Cloner.SpawnClonedEvent
@text Spawn Cloned Event
@desc Spawns an event with the data from a cloned event
	@arg mapId
	@text Map Id
	@type number
	@desc Map Index that has the original event.
	@default 1
	@min 1

	@arg eventId
	@text Event Id
	@type number
	@desc Event Index that has the original event.
	@default 1
	@min 1

	@arg overwriteData
	@text Clone Overwritten Data
	@type text[]
	@desc This is the list of data that you want to change from the original event to the clone, such as position
	@default ["_x:$gamePlayer.x","_realX:$gamePlayer.x","_y:$gamePlayer.y","_realY:$gamePlayer.y"]


@command Restore Event Commands.RestoreCommandById
@text Restore Command By Id
@desc Restore an erased event by Id
	@arg eventId
	@text Event Id
	@type number
	@desc Event Id which you would like to restore. Zero means this event
	@default 0
	@min 0


@command Restore Event Commands.RestoreCommandByVariable
@text Restore Command By Variable
@desc Restore an erased event by variable
	@arg variableId
	@text Variable Id
	@type variable
	@desc Variable which holds the Event Id which you would like to restore. Zero means this event
	@default 1
	@min 1


@command Searchable Item Select.searchSelect
@text Search Select
@desc Able to do an item select with a search parameter from an Name Input Processing command
	@arg searchActor
	@text Search Actor
	@type actor
	@desc The actor's name which the search will be conducted on

	@arg groupTerm
	@text Grouping name
	@type string
	@desc The name of the grouping  defined in plugin parameters you want to search through

	@arg storeVariable
	@text Variable to store selected in
	@type variable
	@desc The variable the selected item Id will be stored in



@param Ammo Data

@param aD.AmmoTypes
@text Global Ammo Type
@parent Ammo Data
@desc A list of the ammo type data
@default 
@type struct<ammo>[]

@param Follower Specific Visuals

@param fSV.globalOpacity
@text Global Follower Opacity
@parent Follower Specific Visuals
@desc Defines all followers opacity (0-255) in JS; Custom variables can be found in defualt code & help section
@default null
//Variable Guide
//null means this setting is off and will not be used for calculations
//"actor" = the Game_Actor entry of the specific follower being evaluated
//"follower" = the follower data from Game_Follower object for the specific follower being evaluated
@type multiline_string

@param fSV.globalBlendMode
@text Global Follower Blend Mode
@parent Follower Specific Visuals
@desc Defines all followers blend mode in JS; Custom variables can be found in defualt code & help section
@default null
//Acceptable values explained:
//null means this setting is off and will not be used for calculations
//0 (Normal), 1 (Additive), 2 (Subtractive) and 3 (Screen)
//
//Variable Guide
//"actor" = the Game_Actor entry of the specific follower being evaluated
//"follower" = the follower data from Game_Follower object for the specific follower being evaluated
@type multiline_string

@param fSV.globalWalkAnime
@text Global Follower Walk Anime
@parent Follower Specific Visuals
@desc Defines all followers walk animation (true, false) in JS; Custom variables found in defualt code & help section
@default null
//Variable Guide
//null means this setting is off and will not be used for calculations
//"actor" = the Game_Actor entry of the specific follower being evaluated
//"follower" = the follower data from Game_Follower object for the specific follower being evaluated
@type multiline_string

@param fSV.globalStepAnime
@text Global Follower Step Anime
@parent Follower Specific Visuals
@desc Defines all followers step animation (true, false) in JS; Custom variables found in defualt code & help section
@default null
//Variable Guide
//null means this setting is off and will not be used for calculations
//"actor" = the Game_Actor entry of the specific follower being evaluated
//"follower" = the follower data from Game_Follower object for the specific follower being evaluated
@type multiline_string

@param fSV.globalDirectionFix
@text Global Follower Direction Fix
@parent Follower Specific Visuals
@desc Defines all followers fixed direction state (true, false) in JS; Custom variables found in defualt code & help section
@default null
//Variable Guide
//null means this setting is off and will not be used for calculations
//"actor" = the Game_Actor entry of the specific follower being evaluated
//"follower" = the follower data from Game_Follower object for the specific follower being evaluated
@type multiline_string

@param fSV.globalDirection
@text Global Follower Direction
@parent Follower Specific Visuals
@desc Defines all followers direction state (2,4,6,8) in JS; Custom variables found in defualt code & help section
@default null
//Variable Guide
//null means this setting is off and will not be used for calculations
//"actor" = the Game_Actor entry of the specific follower being evaluated
//"follower" = the follower data from Game_Follower object for the specific follower being evaluated
// 2 - down, 4 - left, 6 - right, and 8 - up
@type multiline_string

@param fSV.globalTransparent
@text Global Follower Transparent
@parent Follower Specific Visuals
@desc Defines all followers transparency state (true, false) in JS; Custom variables found in defualt code & help
@default null
//Variable Guide
//null means this setting is off and will not be used for calculations
//"actor" = the Game_Actor entry of the specific follower being evaluated
//"follower" = the follower data from Game_Follower object for the specific follower being evaluated
@type multiline_string

@param Shop Conditional Purchasing

@param sCP.globalPurchaseEnable
@text Global Purchase Enable
@parent Shop Conditional Purchasing
@desc Defines if purchase is enabled for all items in JS; Custom variables can be found in default code & help section
@default item && shopBuy.price(item) <= shopBuy._money && !$gameParty.hasMaxItems(item) && additional
// Variable Guide:
// "additional" = item purchase enable note tag (must use to enable note tag functionality)
// "item" = the item being evaluated
// "shopBuy" = the window properties of the shop
@type multiline_string

@param sCP.globalPurchaseShow
@text Global Purchase Show
@parent Shop Conditional Purchasing
@desc Defines if purchase is visible for all items in JS; Custom variables can be found in default code & help section
@default true && SirL.MPCore.metaProp(item,"SirL.isSeenBefore") && additional
// Variable Guide:
// "additional" = item purchase show note tag (must use to enable note tag functionality)
// "item" = the item being evaluated
// "shopBuy" = the window properties of the shop
@type multiline_string

@param Accent Manager

@param AccentManager.hideAfterChar
@text Character to hide text after
@parent Accent Manager
@desc This text differentiates the show message name from the accent name.
@default |
@type text

@param AccentManager.accents
@text Accents
@parent Accent Manager
@desc The different types of accents
@default []
@type struct<accent>[]

@param AccentManager.generalRules
@text General Rules
@parent Accent Manager
@desc All messages will have these general rules applied.
@default []
@type struct<rule>[]

@param Control Skip Text

@param cST.skipableText
@text Allow skip-able text
@parent Control Skip Text
@desc Should player be able to skip text?
@default true
@type boolean
@on Enable Skip
@off Disable Skip

@param Face Image to Bust

@param fI2B.pictureLayer
@text Picture Number
@parent Face Image to Bust
@desc Control number of the picture. The larger number, the higher priority
@default 100
@type number
@max 100
@min 1

@param fI2B.pairings
@text Face Image and Bust Pairing
@parent Face Image to Bust
@desc List of all face image and bust properties
@default []
@type struct<pairing>[]

@param Real World Conditional

@param IsReal.daysOfWeek
@text Name of the days of the week
@parent Real World Conditional
@desc The name of the days of the week, starting on Sunday to Saturday
@default ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
@type string[]

@param IsReal.monthsOfYear
@text Name of the months of the year
@parent Real World Conditional
@desc The name of the months of the year, starting on January to December
@default ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November","December"]
@type string[]

@param IsReal.hourIndicator
@text 12 hour period indicator
@parent Real World Conditional
@desc The indicator for 12 hour periods of a day
@default ["am", "pm"]
@type string[]

@param Animation Sound Variance

@param aSV.soundVariances
@text Sound Variances
@parent Animation Sound Variance
@desc List of animation and sound variances to associate
@type struct<animationSelector>[]

@param Final Critical Damage

@param FinalCriticalDamage.allowCritBoostForEnemies
@text Enemies have final critical damage
@parent Final Critical Damage
@desc Should enemies be able to boost their final attack if the player is low on health
@default false
@type boolean
@on Enable
@off Disable

@param Post Action Animation

@param pAA.enemyAnimations
@text Enemy Animations
@parent Post Action Animation

@param pAA.onHitEnemy
@text On Hit
@parent pAA.enemyAnimations
@desc Animations for hits on enemy near the moment the attacker animation executes
@type struct<EnemySelector>[]

@param pAA.onMissEnemy
@text On Miss
@parent pAA.enemyAnimations
@desc Animations for misses on enemy near the moment the attacker animation executes
@type struct<EnemySelector>[]

@param pAA.onEvadedEnemy
@text On Evade
@parent pAA.enemyAnimations
@desc Animations for evaded enemy near the moment the attacker animation executes
@type struct<EnemySelector>[]

@param pAA.actorAnimations
@text Actor Animations
@parent Post Action Animation

@param pAA.onHitActor
@text On Hit
@parent pAA.actorAnimations
@desc Animations for hits on actor near the moment the attacker animation executes
@type struct<ActorSelector>[]

@param pAA.onMissActor
@text On Miss
@parent pAA.actorAnimations
@desc Animations for misses on actor near the moment the attacker animation executes
@type struct<ActorSelector>[]

@param pAA.onEvadedActor
@text On Evade
@parent pAA.actorAnimations
@desc Animations for evaded actor near the moment the attacker animation executes
@type struct<ActorSelector>[]

@param Position BattleBacks

@param PositionBattleBacks.battleBacks
@text List of BattleBacks
@parent Position BattleBacks
@desc The first entry is battleback1. The second entry is battleback2.
@default ["{\"PositionBattleBacks.TypeOfAdjustment\":\"Default\",\"PositionBattleBacks.CustomOptionsHeader\":\"\",\"PositionBattleBacks.bbWidth\":\"Math.floor((1000 * Graphics.width) / 816)\",\"PositionBattleBacks.bbHeight\":\"Math.floor((740 * Graphics.height) / 624)\",\"PositionBattleBacks.bbXOff\":\"(Graphics.width - bb.width) / 2\",\"PositionBattleBacks.bbYOff4SideView\":\"Graphics.height - bb.height\",\"PositionBattleBacks.bbYOff4FrontView\":\"0\",\"PositionBattleBacks.bbScale\":\"Math.max(ratioX, ratioY, 1.0)\"}","{\"PositionBattleBacks.TypeOfAdjustment\":\"Default\",\"PositionBattleBacks.CustomOptionsHeader\":\"\",\"PositionBattleBacks.bbWidth\":\"Math.floor((1000 * Graphics.width) / 816)\",\"PositionBattleBacks.bbHeight\":\"Math.floor((740 * Graphics.height) / 624)\",\"PositionBattleBacks.bbXOff\":\"(Graphics.width - bb.width) / 2\",\"PositionBattleBacks.bbYOff4SideView\":\"Graphics.height - bb.height\",\"PositionBattleBacks.bbYOff4FrontView\":\"0\",\"PositionBattleBacks.bbScale\":\"Math.max(ratioX, ratioY, 1.0)\"}"]
@type struct<SirLBattleBack>[]

@param PositionBattleBacks.animatedBattleBacks
@text Animate BattleBacks?
@parent Position BattleBacks
@desc Should your battlebacks be refreshed per update?
@default false
@type boolean
@on Animated
@off Static

@param Rewards For Escaping

@param RewardsForEscaping.lostItem
@text Lost Item
@parent Rewards For Escaping
@desc The text that appears when item is lost %1 = item name
@default %1 lost!
@type string

@param RewardsForEscaping.lostGold
@text Lost Gold
@parent Rewards For Escaping
@desc The text that appears when gold is lost %1 = amount of gold
@default %1G Lost!
@type string

@param RewardsForEscaping.lostExp
@text Lost Exp
@parent Rewards For Escaping
@desc The text that appears when item is lost %1 = amount of Exp
@default %1 %2 lost!
@type string

@param RewardsForEscaping.includeEquip
@text Include Equipment on Lost
@parent Rewards For Escaping
@desc Items that are equipped by party members will also be affected
@default true
@type boolean
@on Includes
@off Excludes

@param Tile-based Scaling

@param TileBasedScaling.scaleType
@text Type of Scaling
@parent Tile-based Scaling
@desc Determines the way the game will scale to reduce black bars. Check help for descriptions on each
@default Fixed to Long
@type combo
@option Fixed to Long
@option Fixed to Short
@option Fixed to Zoom
@option Fixed Width - Legacy Subtractive
@option Fixed Height - Legacy Additive
@option Custom

@param TileBasedScaling.customScale
@text Custom Scaling Factor
@parent TileBasedScaling.scaleType
@desc Use your own javascript scaling factor to do the scaling to reduce black bars, initial is Fixed to Long
@default Math.min( $dataMap.width / (windowWidthInTiles ), $dataMap.height / (windowHeightInTiles), $dataSystem.advanced.screenWidth / (window.innerWidth), $dataSystem.advanced.screenHeight / (window.innerHeight))
@type multiline_string

@param TileBasedScaling.zoom
@text Default Amount of zoom
@parent Tile-based Scaling
@desc Amount to zoom by initially, bigger means zoom in, can use javascript to define
@default 1
@type multiline_string

@param TileBasedScaling.fitOrStretch
@text Fit or Stretch Options
@parent Tile-based Scaling
@desc Various sprites that take the entire screen settings

@param TileBasedScaling.fOrS_Scene_Title
@text Title Screen
@parent TileBasedScaling.fitOrStretch
@desc Should the title screen size with a fit or stretch
@default true
@type boolean
@on Fit
@off Stretch

@param TileBasedScaling.fOrS_Scene_Gameover
@text Game Over Screen
@parent TileBasedScaling.fitOrStretch
@desc Should the game over screen size with a fit or stretch
@default true
@type boolean
@on Fit
@off Stretch

@param TileBasedScaling.fOrS_battleback
@text Battleback
@parent TileBasedScaling.fitOrStretch
@desc Should the battleback size with a fit or stretch
@default true
@type boolean
@on Fit
@off Stretch

@param Tile Event

@param TileEvent.connections
@text Links
@parent Tile Event
@desc The connection between a group of tile ids and a group of common events
@default []
@type struct<SirLMPTileEventLink>[]

@param Enemy Escape Revamp

@param EnemyEscapeRevamp.deem
@text Display Enemy Escape Message
@parent Enemy Escape Revamp
@desc Define how you would like the escape message to be displayed when the enemy attempts to make an escape.
@default 1
@type select
@option None
@value 0
@option BattleLog
@value 1
@option Message Box
@value 2

@param Searchable Item Select

@param SearchableItemSelect.group
@text Item Grouping
@parent Searchable Item Select
@desc This helps filter items down to specific groups, like places or people
@type struct<grouping>[]

@param SearchableItemSelect.itemTypeId
@text Item Type
@parent Searchable Item Select
@desc What is the common type between all the items?
@default 3
@type select
@option Hidden Item A
@value 3
@option Hidden Item B
@value 4

@param Skill Cost Display

@param SkillCostDisplay.multipleCosts
@text Show costs
@parent Skill Cost Display
@desc To show multiple or single (default) costs when a skill has more than one costs above 0.
@default true
@type boolean
@on Multiple
@off Single

@param SkillCostDisplay.costLabel
@text Label Location
@parent Skill Cost Display
@desc Allows label of skill type to be next to the cost
@default right
@type combo
@option left
@option right
@option none

@param SkillCostDisplay.skillTypes
@text List of Skill types to display
@parent Skill Cost Display
@desc Define the skill types for the costs
@default ["{\"SkillCostDisplay.Skill Type Name\":\"Tp\",\"SkillCostDisplay.Skill Type Color\":\"#00e060\"}","{\"SkillCostDisplay.Skill Type Name\":\"Mp\",\"SkillCostDisplay.Skill Type Color\":\"#40c0f0\"}"]
@type struct<SkillCostDisplaySkillType>[]

@param SkillCostDisplay.DisplayFree
@text Display Free
@parent Skill Cost Display

@param SkillCostDisplay.ShowFree
@text Show Free
@parent SkillCostDisplay.DisplayFree
@desc Do you want the word "FREE" if the skill costs nothing?
@default true
@type boolean
@on Show
@off hide

@param SkillCostDisplay.FreeColor
@text Free Color Code
@parent SkillCostDisplay.DisplayFree
@desc If you are showing free, what color would you like
@default #FF0000
@type text

@param SkillCostDisplay.FreeTerm
@text Term for Free
@parent SkillCostDisplay.DisplayFree
@desc If you are showing free, what term would you like for free
@default FREE
@type text

@param Skill Cost Formula

@param SkillCostFormula.Alt Types
@text List of Alternative Skill types
@parent Skill Cost Formula
@desc Define the skill types that can be used for costs
@default ["{\"SkillCostFormula.Alt Name\":\"Hp\",\"SkillCostFormula.Alt Source\":\"a._hp\"}"]
@type struct<SirLMPSkillCostFormulaAltTypeDef>[]

@param Skill Cost Sorter

@param SkillCostSorter.Sorts
@text List of the ways to sort
@parent Skill Cost Sorter
@desc The code will sort from top to bottom of this list
@default ["{\"SkillCostSorter.eval\":\"skill.mpCost\",\"SkillCostSorter.order\":\"true\"}"]
@type struct<SirLMPSkillCostSorterSorter>[]

@ End of params
@help
Generator Version = 2.3.0
Debug Hash : 
76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$
6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$
5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$
17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$
35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$
2_3e_3_35$b$68

	
If you find any issue, please let me know via the 
Community page at 
https://sirlegna.itch.io/sir-legnas-plugin-generator/
community

This plugin is composed of multiple plugins, which are listed here:
	1. v1.1.0 - Ammo Data
	2. v1.0.0 - Follower Specific Visuals
	3. v1.3.0 - Jump to Tile
	4. v1.1.1 - Shop Conditional Purchasing
	5. v1.0.0 - Actor To Event
	6. v1.0.0 - Actor By Variable
	7. v1.1.0 - Actor Cloner
	8. v2.0.2 - Accent Manager
	9. v2.0.4 - Choice Location
	10. v1.0.0 - Control Skip Text
	11. v1.1.2 - Delay Switches and Variables
	12. v1.0.1 - Face Image to Bust
	13. v1.0.2 - Real World Conditional
	14. v1.0.1 - Armor Requirement Revamp
	15. v1.0.0 - Item Requirement Revamp
	16. v1.0.0 - Skill Restriction
	17. v1.0.0 - Weapon Requirement Revamp
	18. v1.0.0 - Animation Sound Variance
	19. v1.1.2 - Better Show Battle Animation
	20. v1.0.1 - Final Critical Damage
	21. v1.1.0 - Post Action Animation
	22. v2.1.0 - Position BattleBacks
	23. v1.0.2 - Rewards For Escaping
	24. v1.0.0 - Better Script Command
	25. v1.0.0 - Custom Game Error
	26. v1.0.0 - In Event Comment
	27. v2.0.1 - Tile-based Scaling
	28. v1.1.1 - Direction Event Switch Trigger
	29. v1.0.0 - Event Approach Event
	30. v1.0.0 - Random In Line
	31. v1.0.0 - Repeat Next
	32. v1.1.0 - Event Cloner
	33. v1.0.1 - Restore Event Commands
	34. v1.2.0 - Tile Event
	35. v1.1.1 - Enemy Escape Revamp
	36. v1.0.0 - Enemy Stats Formula
	37. v1.0.1 - Item Cost Formula
	38. v1.0.0 - Item Morpher
	39. v1.0.1 - Searchable Item Select
	40. v1.1.0 - Skill Cost Display
	41. v1.1.0 - Skill Cost Formula
	42. v1.0.1 - Skill Cost Sorter
	43. v2.0.0 - Weapon Stats Restrictions

===== v1.1.0 - Ammo Data =====
This plugin adds an additional data field to game actors 
and enemies to manage the current level of ammo

Use Cases:
Using plugin to implement reload system:
	1. Requires: Skill Reduction, Skill Cost Formula plugins
	2. Optional: Skill Cost Display - to display the 
	alternative cost such as 1 bullet
	3. Go to the Plugin manager
	4. Find the plugin that includes this one
	5. Find the Ammo Type parameter and open it
	6. In the empty list, open a new entry
	7. Provide a name, the initial amount all actors and 
	enemies get, and the max amount all actors and 
	enemies get
	8. Repeat 6 and 7 until you have the number of different 
	type of ammos you would like
	9. Return to the Plugin manager
	10. Find the plugin that includes Skill Cost Formula
	11. Find the "List of Alternative Skill types" parameter 
	and open it
	12. In the empty list, open a new entry
	13. Provide an Alternative Skill Name
	14. The Alternative Skill Source will be a.ammo["<name 
	you provided in step 7>"], for example a.ammo["short"]
	15. The next 6 steps are optional if you are using the 
	Skill Cost Display plugin; otherwise go to step 22
	16. Return to the Plugin manager
	17. Find the plugin that includes Skill Cost Display
	18. Find the "List of Skill type to display" parameter and 
	open it
	19. In the empty list, open a new entry
	20. For Skill Type Name it must match the name 
	provided in step 13
	21. For Skill Type Color it can be any hex color code you 
	would like
	22. Apply all changes and close the Plugin Manager
	23. Go to the Database
	24. Open up the Skills Tab
	25. Find the skill you would like to make be the reload 
	function
	26. Go to the Note section
	27. Add the note <SirL.{}Cost: -1> replacing {} with 
	the name you provided in step 13 but all lowercase, for 
	example <SirL.short ammoCost: -1>. This will restore 1 
	point of short ammo
	28. Add the note <SirL.skillRestrict: a.ammo["{}"] >= 
	a.maxAmmo["{}"]> replacing {} with the name you 
	provided in step 7, for example <SirL.skillRestrict: 
	a.ammo["short"] >= a.maxAmmo["short"]>. This 
	restrict the skill from being used if actor or enemy is 
	already at the max ammo amount for that type
	29. Find the skill you would like to cost and use the 
	ammo
	30. Go to the Note section
	31. Add the note <SirL.{}Cost: 1> replacing {} with the 
	name you provided in step 13 but all lowercase, for 
	example <SirL.short ammoCost: 1>. This will cost and 
	use 1 point of short ammo
	32. Apply database changes and close. There you go, 
	now you have a simple reload system

Scripts:
SirL.MPaD.initializeAmmo( member)
	Reads in the plugin parameters for ammo type or note 
	tag if defined and add it to game actor and enemies 
	when they are initialized

Parameters:
	*  member means the actor or enemy object that can 
	have an ammo amount

Returns: None

Note Tags: 


Note tags for Actors:
	* Specified Initial Ammo Amount
<SirL.NAME.Initial: AMOUNT>
	This note tag will overwrite the global initialization of 
	ammo amount for either an actor or enemy. NAME 
	should be the ammo name which was defined and 
	AMOUNT is the number which would like it to be 
	initialize to instead.
	Example uses for note tag:
	 <SirL.short.Initial: 5> which means this actor/enemy 
	will be start off with 5 ammo of the short type

Tips:
	* To reload to maximum you can make the Cost formula 
	to be something like this: <SirL.short ammoCost: 
	a.ammo["short"] - a.maxAmmo["short"]>

	* If you ever want to access ammo or maxAmmo in a 
	script, you just need to access the actor or enemy 
	directly (not the database object) and then use 
	.ammo["TypeNameHere"] and 
	.maxAmmo["TypeNameHere"]

Core functionality that this plugin works with:
	* Game_BattlerBase.prototype.canUse

CHANGELOG
	v1.1.0 - Slight optimization for the initializing ammo 
	amounts, typo fixed and included required function 
	which generally wasn't need as other plugins were 
	required too
	v1.0.0 - Add ammo data field to game actor and enemies

===== v1.0.0 - Follower Specific Visuals =====
This plugin allows the developer to customize the 
rendering of the follower sprites by actor as well as 
globally

Use Cases:
Using plugin parameters to set up the global variables
	1. Go to the plugin parameters and find the Follower 
	Specific Visuals
	2. Click on the setting which you would like to set.
	3. Modify the Global Follower parameter
		Custom Variable Guide:
		"actor" = the Game_Actor entry of the specific follower 
		being evaluated
		"follower" = the follower data from Game_Follower 
		object for the specific follower being evaluated
	4. Each parameter has a specific type of data it can 
	return as well as null, however any of them can return 
	the null value (as default) which acts as turning off the 
	parameter check enitrely
	5. If you return the corrected value then anytime a 
	follower is rendered and doesn't have a specific Actor 
	Notetag, then they shall reflect that value.
	
Using Actors Note tags to modify how that actor renders 
as a follower
	1. Go to the Actors section in your database
	2. Find then actor entry you would like to have 
	rendering rules that decide how that actor will be 
	rendered while they are a follower
	3. Place note tags in the note tag section of the plugin 
	inside that specific entry note tage area.
	4. Modify the CODE section of that note tag with 
	JavaScript that is the value you would like that setting 
	to be set to, for that actor while they are a follower.
		Custom Variable Guide:
		"actor" = the Game_Actor entry of the specific follower 
		being evaluated
		"follower" = the follower data from Game_Follower 
		object for the specific follower being evaluated


Scripts:
SirL.MPfSV.customFollowerSettings( setting,follower)
	Retrieves the custom settings found in either the actor 
	or plugin parameters if defined and returns the 
	calculated value.

Parameters:
	*  setting means the string name of the setting to 
	change which can be: 'Opacity', 'BlendMode', 
	'WalkAnime','StepAnime', 'DirectionFix', 'Direction' 
	'Transparent'
	* follower means an instance of Game_Follower object 
	which will be used in the user provided javascript

Returns: Value defined by the setting parameter, the 
data type is dynamic

Note Tags: 


Note tags for Actors:
	* Actor when follower's Opacity
<SirL.followerOpacity: CODE>
	This note tag will override the global and default 
	behavior of a follower's opacity if that follower is this 
	actor. CODE should be the javascript code you would like 
	to excute instead, resulting in a value between 0 
	(transparent) and 255 (visible). The code can reference 
	the actor object via actor and the follower object via 
	follower.
	Example uses for note tag:
	 <SirL.followerOpacity: Math.round(actor.hp() / 
	actor.mhp()) * 255> which means the follower of this 
	actor opacity will reflect how much health the actor has 
	left

	* Actor when follower's Blend Mode
<SirL.followerBlendMode: CODE>
	This note tag will override the global and default 
	behavior of a follower's blend mode if that follower is 
	this actor. CODE should be the javascript code you 
	would like to excute instead, resulting one of these 
	values: 0 (Normal), 1 (Additive), 2 (Subtractive) and 3 
	(Screen). The code can reference the actor object via 
	actor and the follower object via follower.
	Example uses for note tag:
	 <SirL.followerBlendMode: (follower.direction()-2) / 2> 
	which means the follower of this actor blend mode will 
	change on the direction they are facing Down=Normal, 
	Left=Additive, Right=Subtractive, and Up=Screen.

	* Actor when follower's Walk Anime
<SirL.followerWalkAnime: CODE>
	This note tag will override the global and default 
	behavior of a follower's walk animation if that follower is 
	this actor. CODE should be the javascript code you 
	would like to excute instead, resulting in a boolean value 
	with true being show walk animation. The code can 
	reference the actor object via actor and the follower 
	object via follower.
	Example uses for note tag:
	 <SirL.followerWalkAnime: actor.level()%2 == 2 > 
	which means the follower of this actor's walk animation 
	will play if their level is even.

	* Actor when follower's Step Anime
<SirL.followerStepAnime: CODE>
	This note tag will override the global and default 
	behavior of a follower's step animation if that follower is 
	this actor. CODE should be the javascript code you 
	would like to excute instead, resulting in a boolean value 
	with true being show step animation. The code can 
	reference the actor object via actor and the follower 
	object via follower.
	Example uses for note tag:
	 <SirL.followerStepAnime: actor.level()%2 != 2 > which 
	means the follower of this actor's step animation will 
	play if their level is odd.

	* Actor when follower's Direction Fixed
<SirL.followerDirectionFix: CODE>
	This note tag will override the global and default 
	behavior of a follower's fixed direction if that follower is 
	this actor. CODE should be the javascript code you 
	would like to excute instead, resulting in a boolean value 
	with true if the direction is fixed. The code can reference 
	the actor object via actor and the follower object via 
	follower.
	Example uses for note tag:
	 <SirL.followerDirectionFix: true > which means the 
	follower of this actor's direction is fixed.

	* Actor when follower's Direction
<SirL.followerDirection: CODE>
	This note tag will override the global and default 
	behavior of a follower's direction if that follower is this 
	actor. CODE should be the javascript code you would like 
	to excute instead, resulting in a integer value of 2 
	(down), 4 (left), 6 (right), or 8 (up) indicating the 
	direction. The code can reference the actor object via 
	actor and the follower object via follower.
	Example uses for note tag:
	 <SirL.followerDirection: 2 > which means the follower 
	of this actor's direction is down.

	* Actor when follower's Transparent
<SirL.followerTransparent: CODE>
	This note tag will override the global and default 
	behavior of a follower's transparency if that follower is 
	this actor. CODE should be the javascript code you 
	would like to excute instead, resulting in a boolean value 
	with true if the actor is transparent. The code can 
	reference the actor object via actor and the follower 
	object via follower.
	Example uses for note tag:
	 <SirL.followerTransparent: true > which means the 
	follower of this actor is transparent.

Tips:
	* The order of priority is Actor's Database, then plugin 
	parameters, then default behavior

	* Any javascript code that results in null or undefined 
	will be passed over in calculation

	* Blend Mode in RPG Maker has 4 types, they require a 
	number to be return in respect to their types as 
	followed: 0 - Normal, 1 - Additive, 2 - Subtractive and 3 
	- Screen

	* Setting the Direction will result in the similar behavior 
	to DirectionFix and then setting the Direction, so you 
	can do just one instead of both

Core functionality that this plugin works with:
	* Game_Follower.prototype.update

CHANGELOG
	v1.0.0 - Initial version, allowing both global and actor 
	base setting of various sprite rendering

===== v1.3.0 - Jump to Tile =====
This plugin allows the developer to define a Move Route 
to make an event or player jump to a specific tile, 
defined either with a raw number or javascript that 
results in a number.

Use Cases:
Using scripts inside Movement Route Command:
	1. Go to an Event's contents in which would like to 
	trigger the Movement Route
	2. Create a Set Movement Route Command
	3. Select the Character you would like to make the 
	JumpToTile movement
	4. Select the "Script..." option for when you want to use 
	the JumpToTile command
	5. For x and y positions you can use the 
	"SirL.MPJumpToTile.tile(parent, x,y)" with parent being 
	"this" without quotes, x and y being the value for where 
	the tile is located that you want the player or event to 
	land at. Or for event id you can use 
	"SirL.MPJumpToTile.event(parent, eventId)" with parent 
	being "this" without quotes, and eventId being the value 
	of the id in which the event that you want the player or 
	event to land at.
	
Using scripts inside an Event's Autonomous Movement 
Custom Route:
	1. Opens the event in which you want to make have a 
	JumpToTile movement
	2. In the Autonomous Movement section, verify the Type 
	is Custom
	3. Click the "Route..."
	4. Select the "Script..." option for when you want to use 
	the JumpToTile command
	5. For x and y positions you can use the 
	"SirL.MPJumpToTile.tile(parent, x,y)" with parent being 
	"this" without quotes, x and y being the value for where 
	the tile is located that you want the player or event to 
	land at. Or for event id you can use 
	"SirL.MPJumpToTile.event(parent, eventId)" with parent 
	being "this" without quotes, and eventId being the value 
	of the id in which the event that you want the player or 
	event to land at.

Scripts:
SirL.MPJumpToTile.tile( parent,newX,newY)
	This script forces a game character to jump to a specific 
	tile id

Parameters:
	*  parent means the game character which you want to 
	be doing the movement
	* newX means the X value of the tile you would like the 
	game character to land on
	* newY means the Y value of the tile you would like the 
	game character to land on

Returns: Nothing

SirL.MPJumpToTile.event( parent,eventId)
	This script forces a game character to jump to a specific 
	event location

Parameters:
	*  parent means the game character which you want to 
	be doing the movement
	* eventId means the id of the event in which you would 
	like the game character to land on

Returns: Nothing

Tips:
	* parent should almost always be "this" without quotes, 
	to get the event which is moving during move route 
	commands. A script call maybe different

	* You can use javascript in the script as long as it 
	returns numbers such as 
	SirL.MPJumpToTile.tile($gamePlayer.x, $gamePlayer.y - 
	1) to jump one tile above where the player character is

CHANGELOG
	v1.3.0 - Fixed unknown bug with Jump to Specific 
	Event, Slight optimization in the jump to tile code
	v1.2.0 - Add way to jump to specific event location 
	instead of just x and y position
	v1.1.0 - Explicitly require parent to be this
	v1.0.0 - Allows jumping to a specific tile

===== v1.1.1 - Shop Conditional Purchasing =====
This plugin allows the developer to hide or disable items 
in the shop purchasing window.

The plug-n-play default behavior is to hide items the 
player has seen before, this can be modified in plugin 
parameters under Global Purchase Show

Use Cases:
Set up the Global Purchase Enable
	1. Go to the plugin parameters and modify the Global 
	Purchase Enable parameter
		Custom Variable Guide:
		"additional" = item purchase enable note tag (must use 
		to enable note tag functionality)
		"item" = the item being evaluated
		"shopBuy" = the window properties of the shop
	2. Now anytime an item in the shop buy menu decides if 
	it is enable it will use the code defined in the Global 
	Purchase Enable parameter.
	
Set up the Global Purchase Show
	1. Go to the plugin parameters and modify the Global 
	Purchase Show parameter
		Custom Variable Guide:
		"additional" = item purchase show note tag (must use 
		to enable note tag functionality)
		"item" = the item being evaluated
		"shopBuy" = the window properties of the shop
	2. Now anytime an item in the shop buy menu decides if 
	it is visible it will use the code defined in the Global 
	Purchase Show parameter.
	
Force item to been seen prior to player seeing it
	Details: All items now have an additional variable that 
	checks to see if the item has ever been in the player 
	possession before. However, you might want to make 
	that variable as true even if that hasn't occurred yet.
	1. Go to the Items/Weapons/Armors section in your 
	database
	2. Find the entry you would like to have the marked as 
	seen from the start of the game
	3. Place the note tag "Item has been seen before" inside 
	that specific entry note tag area
	
Add additional enable rules per item
	1. Go to the Items/Weapons/Armors section in your 
	database
	2. Find the entry you would like to have additional rules 
	that decide when it is enable in the shop buy menu
	3. Place the note tag "Additional Purchase Enable" inside 
	that specific entry note tag area
	4. Modify the CODE section of that note tag with 
	JavaScript that is the conditional for that item
	
Add additional show rules per item
	1. Go to the Items/Weapons/Armors section in your 
	database
	2. Find the entry you would like to have additional rules 
	that decide when it is visible in the shop buy menu
	3. Place the note tag "Additional Purchase Show" inside 
	that specific entry note tag area
	4. Modify the CODE section of that note tag with 
	JavaScript that is the conditional for that item


Note Tags: 


Note tags for Items:
	* Item has been seen before
<SirL.isSeenBefore>
	This note tag will automatically be added when seen, 
	the developer can use it to make it seen from the 
	beginning of the game.
	Example uses for note tag:
	 <SirL.isSeenBefore> which means the item will be 
	considered seen from the start of the game, even if the 
	player hasn't encounter it yet.

	* Additional Purchase Enable
<SirL.purchaseEnable:CODE>
	This note tag will define the item, weapon, or armor 
	ability to be purchased, if false it will be gray but still 
	visible, using CODE to define JavaScript that returns 
	either a true or false value.
	Example uses for note tag:
	 <SirL.purchaseEnable:$gameSwitches.value(1)> which 
	means by default this item will be enable if the global 
	parameter and switch 1 is on

	 
	<SirL.purchaseEnable:SirL.MPCore.metaProp(item,
	"SirL.isSeenBefore")> which means by default this item 
	will only be enabled if the global parameters and the 
	item has been added to the party inventory before

	 <SirL.purchaseEnable:shopBuy.price(item) >= 500> 
	which means by default this item will only be enable if 
	the global parameters and the item cost greater than 
	500 dollars in this shop

	* Additional Purchase Show
<SirL.purchaseShow:CODE>
	This note tag will define the item, weapon, or armor 
	shows up in the shop purchase window, if false it will not 
	be visible at all, using CODE to define JavaScript that 
	returns either a true or false value.
	Example uses for note tag:
	 <SirL.purchaseShow:$gameSwitches.value(1)> which 
	means by default this item will be visible if the global 
	parameter and switch 1 is on

	 
	<SirL.purchaseShow:SirL.MPCore.metaProp(item,
	"SirL.isSeenBefore")> which means by default this item 
	will only be visible if the global parameters and the item 
	has been added to the party inventory before

Tips:
	* "Global Purchase Show" and "Additional Purchase 
	Show" have limited use of shopBuy, due to where the 
	code is located.

	* RPG Maker default code for Global Purchase Enable is: 
	item && shopBuy.price(item) <= shopBuy._money && 
	!$gameParty.hasMaxItems(item)

	* RPG Maker default code for Global Purchase Show is: 
	true

	* If you want items to show up with a 50% chance, you 
	can use 'Math.random() < 0.5' either globally or per 
	item.

Core functionality that this plugin works with:
	* Game_Party.prototype.gainItem
	* Window_ShopBuy.prototype.isEnabled
	* Window_ShopBuy.prototype.makeItemList
	* Game_System.prototype.initialize
	* Graphics._onWindowResize
	* Game_Actor.prototype.initEquips

CHANGELOG
	v1.1.1 - Fixed minor issue with loading core function 
	Game_Actor.prototype.initEquips
	v1.1.0 - Initialized actor weapons and armors are 
	counted as being seen by the player
	v1.0.0 - Able to control when items are visible and 
	enable in shop buy menu, on the global and item scale

===== v1.0.0 - Actor To Event =====
This plugin allows the developer to make an event 
appear like an actor and if an event already was made to 
look like an actor it provides a way to retrieve the data of 
the actor which the event's looks like.

Use Cases:
Using plugin commands to set actor data to an event:
	1. Open the database and record the four-digit number 
	to the Actor you would like to set the event to
	2. Close the database
	3. On the map, verify you are in the Event mode
	4. Log the 3 digit number next to the event you would 
	like the actor data to be set to
	5. Go to an Event's contents in which you would like the 
	command to be executed
	6. Add the plugin command "Set an Actor to Event"
	7. Define the Actor Id with the number without leading 
	zeros that was found in the first step
	8. Define the Event Id with the number without leading 
	zeros that was found in the fourth step
	9. Hit the okay button, when the game executes this 
	command it will set the actor data to that specified event
	
Using plugin commands to get actor Id from an event 
that had actor data set to it:
	1. On the map, verify you are in the Event mode
	2. Log the 3 digit number next to the event you would 
	like the actor data to be set to
	3. Go to an Event's contents in which you would like the 
	command to be executed
	4. Add the plugin command "Get Actor from Event"
	5. Define the Event Id with the number without leading 
	zeros that was found in the second step
	6. Define the Variable Id by selecting the variable, by 
	choosing none you will not set the actor ID anywhere
	7. Click okay to add the plugin command

Plugin Commands:
	* Set an Actor to Event - Make an Event look like an 
	Actor while storing the actor data in the event to be 
	pulled later
	* Get Actor from Event - Get Actor Id from an Event, if 
	none set then it will return as 0

Scripts:
SirL.MPActorToEvent.setActor2Event(actorId,eventId)
	Make an Event look like an Actor while storing the actor 
	data in the event to be pulled later

Parameters:
	* actorId means The actor ID you are wanting to get 
	actor data from
	* eventId means The event ID you are wanting to set 
	the actor data to

Returns: Nothing

SirL.MPActorToEvent.getEventActor(eventId)
	Get Actor Id from an Event if none set then it will return 
	as zero

Parameters:
	* eventId means The event ID you are wanting to get 
	actor Id from

Returns: Number of the actor Id or zero if there is no 
actor data set to that event

Tips:
	* Actor data can only be retrieved from events if they 
	were already set to that event using the "Set an Actor to 
	Event" plugin command.

CHANGELOG
	v1.0.0 - This allows you to map an event with an actor, 
	then pull that actor data from the event later

===== v1.0.0 - Actor By Variable =====
This plugin allows the developer to enable various 
commands that involve actors to be defined using a 
variable instead of a defined index value.

Use Cases:
Using plugin commands with variable:
	1. Go to an Event's contents to use Control Variables...
	2. Click Single Variable block
	3. Log the 4 digit number next to the variable you are 
	storing the actor Id in
	4. Go to an Event's contents in which you would like the 
	plugin command to be executed in
	5. Find the equivalent command in the plugin commands 
	and use it to get the same functionality except with 
	actor Id defined by a variable

Plugin Commands:
	* Set Actor Face Data by Variable - Set the Face Data of 
	Show Text messages based on Actor Face from Variable
	* Set a Temporary Actor Face Data by Variable - Set the 
	Face Data of Show Text messages based on Actor Face 
	from Variable for the next Show Text
	* Reset Show Text Face Data to default - Reset the 
	Show Text Face Data back to the default behavior
	* Change Party Member using Variable - Changes an 
	actor in the party using a variable
	* Change Equipment using Variable - Changes the 
	equipment of an actor which is defined by a variable
	* Change Name using Variable - Changes the name of 
	an actor which is defined by a variable
	* Changes the class of an actor using Variable - 
	Changes the class of an actor which is defined by a 
	variable
	* Change Nickname using Variable - Changes the 
	nickname of an actor which is defined by a variable
	* Change Profile using Variable - Changes the profile of 
	an actor which is defined by a variable
	* Name Input Processing using Variable - Calls up the 
	name input screen for an actor by variable
	* Change Actor Images using Variable - Change the 
	image of the actor by variable
	* Force Action using Variable - Forces the specified 
	action on the actor by variable

Scripts:
SirL.MPActorByVariable.reset()
	Resets the custom and reset flag to false, restoring the 
	default behavior of the show text: face data


Returns: Nothing

SirL.MPActorByVariable.set(actorID)
	Sets the face data of show text to the actor face data by 
	variable as well as the flag that makes the custom show 
	text face data appear.

Parameters:
	* actorID means the actor ID as a number of index

Returns: Nothing

Tips:
	* Set Actor Face Data in Show Text, there are three 
	plugin commands for such; 
	"Set Actor Face Data by Variable" - Set the data until 
	reset command, 
	"Set a Temporary Actor Face Data by Variable" - Set the 
	data for the next Show Text only, 
	"Reset Show Text Face Data to default" - Restore to 
	normal functionality

Core functionality that this plugin works with:
	* Game_Interpreter.prototype.command101

CHANGELOG
	v1.0.0 - Add all plugin commands able to be used with 
	actor Id defined as a variable.

===== v1.1.0 - Actor Cloner =====
This plugin allows the developer to clone an actor then 
overwrite any aspect of the cloned actor.

Use Cases:
Using with plugin commands:
	1. Go to an Event's contents in which you would like to 
	clone the actor
	2. Place the plugin command with the "Original Actor Id" 
	for what actor will be the base for cloning, "Variable to 
	store new Actor Id" so that you can reference the new 
	actor for other function calls, then the "Clone 
	Overwritten Data" properties that you want to change 
	on the cloned actor
	3. When that command runs in the game, it will clone 
	the actor at the Original Actor ID and modify the "Clone 
	Overwritten Data" properties then store the new actor 
	Id in the variable provided.

Using with scripts:
	1. Go to where you would like the spawning of the clone 
	actor if in event contents use the script call
	2. The function to use is 
	"SirL.MPActorCloner.addCloneToGame( originalActorId, 
	overrideData, returnVariable)"

Plugin Commands:
	* Add Cloned Actor to Game - Add the cloned actor to 
	the game, returns actor ID to a variable, if ID exist will 
	overwrite

Scripts:
SirL.MPActorCloner.addCloneToGame(originalActorId 
,overrideData ,returnVariable )
	Clones the original actor at originalActorID, and modify 
	the data using the overrideData, then store the new 
	Actor Id in the returnVariable

Parameters:
	* originalActorId  means the number representation of 
	the actor Id to pull the original actor data from
	* overrideData  means a JSON object with the modified 
	actor keys and value pairs
	Example: {"initialLevel":Math.floor(Math.random() * 
	Math.floor(98)) + 1, "id":2, "Name":"'Test'"}
	This will change the cloned actor initialLevel to a random 
	number between 1 and 99, set the name to "Test" 
	(Note: the double, single quote for strings), and set the 
	id to 2, which if already defined will be overwritten with 
	this new actor
	* returnVariable  means the number representation of 
	the variable id to set the new actor id to

Returns: Nothing

Tips:
	* If id already exists, it will overwrite the actor with the 
	new one

Core functionality that this plugin works with:
	* Game_Actors.prototype.actor
	* Game_Party.prototype.removeInvalidMembers
	* Game_Actor.prototype.setup

CHANGELOG
	v1.1.0 - Allows you to overwrite a gameActor if one 
	already exists
	v1.0.0 - Allows you to clone an actor

===== v2.0.2 - Accent Manager =====
This plugin allows the developer to replace text in the 
show text message box by defining the replacement 
"accent" within the Name section in the show text. As 
well as applying a general accent across all show text 
messages. This is a similar method that is used in 
Chrono Cross. 

Use Cases:
Apply a specific accent to a Show Text message:
	1. Set up the plugin parameters to replace text as you 
	desire
	2. Go to an Event's contents in which you would like the 
	Show Text message
	3. Create a Show Text message command
	4. If the name matches the accent, then you do not 
	need to use the "Character to hide text after", otherwise 
	type the name you desire followed by the "Character to 
	hide text after" then the accent name inside the 
	"accents" parameter. For example with Robin being the 
	actor name and British being the desired accent use
		Robin | British
	5. If your accent adjust any of the show message 
	properties it will automatically make those adjustments

Tips:
	* If you have any general rules those will be applied to 
	all show text messages, no matter the accent.

Core functionality that this plugin works with:
	* Game_Interpreter.prototype.command101

CHANGELOG
	v2.0.2 - properly included incompatibility
	v2.0.1 - Stop empty face image data if the accent 
	doesn't have it defined, add incompatibility with VS 
	Message Core
	v2.0.0 - Removed wildcards and integrated the plugin 
	with MZ and the generator.
	v1.0.1 - Added wildcards so that certain characters in a 
	part of a message can be anything you would like.
	v1.0.0 - Set accents for characters than using those 
	accents to replace keywords with accented ones. Also, 
	you can use the default accent to set global rules across 
	all messages. Special Thanks to Michael Morris for the 
	script which had a way to add messages into RPG Maker 
	MV without more issues. It can be found here: 
	https://forums.rpgmakerweb.com/index.php?threads/
	random-dialogue-v1-03a.57313/

===== v2.0.4 - Choice Location =====
This plugin allows developers to make the choice window 
appear anywhere on the screen via plugin commands or 
script calls

Use Cases:
Using plugins commands to move the choice window 
permanently:
	1. Before the choice window command that you want to 
	change you will have to do the following
	2. Go to an Event's contents in which you would like the 
	command to be executed
	3. Add the plugin command "Set Choice Location by X 
	and Y"
	4. X and Y are javascript, so for hard set values, you can 
	use "return VALUE;" with the value being the number. 
	However, you can make custom javascript as long as it 
	returns a number at the end
	5. All future choice boxes where appear at that X and Y, 
	if using javascript it will be recalculated upon loading the 
	choice box

Using plugin commands to reset the choice window to its 
default behavior:
	1. Go to an Event's contents in which you would like to 
	reset the choice window location
	2. Add the plugin command "Reset Choice box behavior 
	to default"
	3. All future choice boxes will behave in the default 
	manner

Using plugins commands to move the choice window 
temporarily:
	1. Before the choice window command that you want to 
	change you will have to do the following
	2. Go to an Event's contents in which you would like the 
	command to be executed
	3. Add the plugin command "Set a Temporary Choice 
	Location by X and Y"
	4. X and Y are javascript, so for hard set values, you can 
	use "return VALUE;" with the value being the number. 
	However, you can make custom javascript as long as it 
	returns a number in the end
	5. Only the next choice box will appear at that X and Y, 
	javascript will be calculated upon loading the choice box
	
Using a script to move the choice window permanently:
	1. Before the choice window command that you want to 
	change you will have to do the following
	2. Go to where you can type javascript code, such as a 
	Script Event Command
	3. Using the function: SirL.MPChoiceLocation.set(X, Y)
	4. All future choice boxes were to appear at that X and Y 
	with the values being string equivalent javascript that 
	returns a number value. 
	
Using a script to reset the choice window to its default 
behavior:
	1. Go to where you can type javascript code, such as a 
	Script Event Command
	2. Use the following function: 
	SirL.MPChoiceLocation.reset()
	3. All future choice boxes will behave in the default 
	manner
	
Using a script to move the choice window temporarily:
	1. Before the choice window command that you want to 
	change you will have to do the following
	2. Go to where you can type javascript code, such as a 
	Script Event Command
	3. Set the variable SirL.MPChoiceLocation.resetFlag to 
	true, this makes it where the next Choice command will 
	reset the position data.
	4. Using the function: SirL.MPChoiceLocation.set(X, Y)
	5. Only the next choice box will appear at that X and Y 
	with the values being string equivalent javascript that 
	returns a number value. 


Known Issues:

	* GALV_MessageStylesMZ
		Reported issues:
		- Functionality stopping in GALV plugin
		
		Steps to work around issues:
		1. Place mine above GALV_MessageStylesMZ plugin


Plugin Commands:
	* Set Choice Location by X and Y - Sets the location 
	where the choice box will appear by X and Y
	* Set a Temporary Choice Location by X and Y - Sets the 
	location where the choice box will appear by X and Y for 
	the next choice box
	* Reset choice box behavior to default - Reset the 
	choice box location to the default behavior

Scripts:
SirL.MPChoiceLocation.reset()
	Resets the custom and reset flag to false, restoring the 
	default behavior of the choice window


Returns: Nothing

SirL.MPChoiceLocation.set(X,Y)
	Sets the custom X and Y value as well as the flag that 
	makes the custom choice window appear.

Parameters:
	* X means the X number of pixels from the left of the 
	screen
	* Y means the Y number of pixels from the top of the 
	screen

Returns: Nothing

Tips:
	* With the plugin commands you can use the variable 
	choiceList to get the choice window property, such as 
	choiceList.windowWidth() to get the window Width

Core functionality that this plugin works with:
	* Game_Interpreter.prototype.command101
	* Window_ChoiceList.prototype.windowX
	* Window_ChoiceList.prototype.windowY

CHANGELOG
	v2.0.4 - Due to conflict with command101 
	GALV_MessageStylesMZ must be below this plugin
	v2.0.3 - Fixed help for script to indicate it needs to be 
	JavaScript that returns a number
	v2.0.2 - Fixed description for resetChoiceLocation 
	command
	v2.0.1 - Fixed bug where Y matters and can refer to 
	choiceList again
	v2.0.0 - Integrated into the generator
	v1.0.0 - Fixed bug where choice box doesn't appear 
	after the series [Message, plugin]
	v0.0.1 - Change location of choice box

===== v1.0.0 - Control Skip Text =====
This plugin is allow the developer to control if the player 
can skip text in message box

Use Cases:
Using plugin command to change the ability to skip text 
in message box:
	1. Go to an Event's contents in which you would like the 
	command executed
	2. Add the plugin command "Set skip-able text"
	3. Define the Allow skip-able text boolean to Enable or 
	Disable the ability
	4. Hit the okay button when the game executes the next 
	show message box, it will have the new state

Plugin Commands:
	* Set skip-able text - Sets the ability to skip text

Tips:
	* Plugin Commands overwrite Plugin Parameters

Core functionality that this plugin works with:
	* Game_System.prototype.initialize
	* Window_Message.prototype.updateShowFast

CHANGELOG
	v1.0.0 - Initial creation of Control Skip Text

===== v1.1.2 - Delay Switches and Variables =====
This plugin allows developers to change self-switches, 
switches, and variables after the delay of battles, wins, 
escapes, saves, frames, game seconds, steps, and 
real-world seconds.

Use Cases:
Create  a delay using plugin commands:
	1. Go to an Event's contents in which you would like the 
	delay initialized
	2. Place the plugin command to change the desired 
	control; self-switch, switch, or variable
	3. Define the plugin command parameters to set up the 
	delay you would like
	4. Now when that command runs in the game, it will 
	initialize the delay
	5. After the delay has reached that control will be 
	defined as you defined it through the plugin parameters

Plugin Commands:
	* Set Self-Switch Delay - Set the self-switch to change 
	to a state after a delay
	* Set Switch Delay - Set the switch to change to a state 
	after a delay
	* Set Variable Delay - Set the variable to change to a 
	value after a delay

Scripts:
SirL.MPDelaySwitchVariables.checkDelays(current,delays)
	Evaluates delayed controls if the delay is or has been 
	passed

Parameters:
	* current means the number value which represents the 
	current value of that control
	* delays means the array of delays for that control

Returns: Nothing

SirL.MPDelaySwitchVariables.setDelay(command,args)
	Adds a new delay to the appropriate controller group

Parameters:
	* command means The string representation of 
	JavaScript code, generally representing how to change 
	the control to the desired value
	* args means An object with the DelayType string and 
	DelayAmount number

Returns: Nothing

Tips:
	* That your changes will apply when the delay is up, 
	even if it was changed another way recently

	* Delays will be saved when the game is saved

	* Parallel events cannot read Event ID Number 0 as this 
	event.

Core functionality that this plugin works with:
	* Game_System.prototype.initialize
	* Game_System.prototype.onBattleStart
	* Game_System.prototype.onBattleWin
	* Game_System.prototype.onBattleEscape
	* Game_System.prototype.onBeforeSave
	* SceneManager.updateFrameCount
	* Game_Party.prototype.increaseSteps

CHANGELOG
	v1.1.2 - Utilize plugin command optimization with 
	interpreter
	v1.1.1 - Quick Fixed requiring TileScaling plugin
	v1.1.0 - Delay on real-world time and optimization
	v1.0.1 - Self-switches now can use this event and this 
	map ids
	v1.0.0 - Allows delay to self-switches, switches, and 
	variables

===== v1.0.1 - Face Image to Bust =====
This plugin allows the player to reveal bust by clicking on 
the face image in a message window

Use Cases:
Using plugin parameters to set up the behavior
	1. Go to the plugin parameters and find the Face Image 
	to Bust
	2. Click Picture Number and update it to the number you 
	would like all Bust to appear at, note it is best not to put 
	any other pictures at that number
	3. Then enter the Face Image and Bust Pairing
	4. Click a blank row to add a new pairing
	5. The Tag value is for the developer to help them 
	remember what the pairing is
	6. The Face File and Face Id are used to identify what 
	the face showing in the show text message
	7. Bust File is the file which developer would like to 
	show up when the player clicks on the message face
	8. Bust Origin has two options "Upper Left" and "Center" 
	9. Bust Designation has two options Pixels or Variables
	10. Bust X and Y location will be either the pixels or 
	variable id that define the bust location
	11. Bust Scale Width and Height is the scale percentage 
	of the bust
	12. Bust Opacity is how visible the Bust is, 255 means 
	fully visible
	13. Bust Blend Mode has 4 options; Normal, Additive, 
	Multiply, and Screen which determines how the Bust will 
	be displayed
	14. You can add as many as you would like, if the 
	developer duplicate Face File and Face Id ( Face in 
	Message window), then the first one will be the selected 
	bust
	15. Click okay until you have applied the Plugin Settings
	16. Now, if you click on the Face File and Face Id that is 
	listed with a pairing Bust, then the Bust will appear until 
	either you click off of it or the message box closes.
	
Using plugin command to disable and enable
	1. The plugin is default to enabled
	2. Find the command Enable Plugin for this plugin
	3. Choose to either enable it or disable it
	4. When that command runs it will enable or disable the 
	plugin, this is savable so when the game loads again the 
	setting will be remembered.

Plugin Commands:
	* Enable Plugin - Enables the Face Image to Bust plugin

Core functionality that this plugin works with:
	* Window_Message.prototype.terminateMessage
	* Window_Message.prototype.update
	* Game_System.prototype.initialize

CHANGELOG
	v1.0.1 - Fixed typo in change log and bust not showing 
	at all times, add new command to enable functionality
	v1.0.0 - Initial creation of Face Image to Bust

===== v1.0.2 - Real World Conditional =====
This plugin allows the developer to make conditionals 
based on real-world local time.

Use Cases:
Using scripts such as in an event's conditional statement:
	1. Go to where you can type javascript code, such as an 
	Event's contents conditional statement.
	2. There are 7 script functions you can use
	
	* SirL.MPIsReal.DayOfMonth(dayOfMonth): This takes a 
	number and checks to see if that matches the day of the 
	month
	* SirL.MPIsReal.DayOfWeek(dayOfWeek): This takes 
	either a number or string matching the "Name of the 
	days of the week" plugin parameter and checks to see if 
	that is the day of the week. The number starts at 0 for 
	Sunday
	* SirL.MPIsReal.Year(year): This takes a number and 
	checks to see if that matches the year
	* SirL.MPIsReal.Hour(hour): This takes either the 12 
	hours or 24-hour time and checks to see if that matches 
	the current hour
	* SirL.MPIsReal.Month(month): This takes either a 
	number or string matching the "Name of the months of 
	the year" plugin parameter and checks to see if that is 
	the current month
	* SirL.MPIsReal.Minute(minute): This takes a number 
	and checks to see if that matches the minute
	* SirL.MPIsReal.Second(second): This takes a number 
	and checks to see if that matches the second
	
	3. If the script matches the value provided it will return 
	true otherwise, it will return false
	
Using the plugin commands:
	1. Go to where you can use plugin commands, such as 
	an Event's contents in which you would like the 
	command to be executed
	2. There are 11 commands you can use
	
	* getYear: sets a variable to the four-digit year
	* getMonth: sets a variable to the month value (1-12)
	* getMonthName: sets a variable to the month name 
	stored in the plugin parameter
	* getDayOfMonth: sets a variable to the day value (1-31)
	* getDayOfWeek: sets a variable to the day value (0-6) 
	being Sunday to Saturday
	* getDayOfWeekName: sets a variable to the day name 
	stored in the plugin parameter
	* get24Hour: sets a variable to the hour in a 24-hour 
	clock (0-23)
	* get12Hour: sets a variable to the hour in a 12-hour 
	clock (1-12)
	* get12HourIndicator: sets a variable to the 12 hours 
	indicator stored in the plugin parameter
	* getMinute: sets a variable to the minute value (0-59)
	* getSecond: sets a variable to the second value (0-59)
	
	3. Add the selected plugin command
	4. Define the Variable ID with the variable you would 
	like the value set to
	5. Hit the okay button, when the game executes this 
	command it will set the current value for that command 
	into the given variable

Plugin Commands:
	* Get Year - Set variable to year, will be four-digits
	* Get Month - Set variable to month (1-12)
	* Get Month Name - Set variable to month name
	* Get Day of Month - Set variable to the day of the 
	month (1-31)
	* Get Day of Week - Set variable to the day of the week 
	(0-6) being Sunday to Saturday
	* Get Day Name of Week - Set variable to day name of 
	week
	* Get 24 Hour - Set variable to an hour (0-23)
	* Get 12 Hour - Set variable to an hour (1-12)
	* Get 12 Hour Indicator - Set variable to 12-hour 
	indicator
	* Get Minute - Set variable to minute (0-59)
	* Get Second - Set variable to second (0-59)

Scripts:
SirL.MPIsReal.DayOfMonth(dayOfMonth)
	The script returns true if the day of the Month is equal 
	to the dayOfMonth given else it returns false

Parameters:
	* dayOfMonth means the day of the Month represented 
	in a number value 1-31

Returns: The value True if the day of Month value given 
matches the current day of the month, else False

SirL.MPIsReal.DayOfWeek(dayOfWeek)
	The script returns true if the day of the Week is equal to 
	the given dayOfWeek number or the same index as of 
	the parameter Days of Week in the plugin parameters, 
	else returns false

Parameters:
	* dayOfWeek means the number value of the day of the 
	week (0 Saturday to 6 Sunday) or the text value stored 
	in Days of Week in the plugin parameters

Returns: The value True if the day of Week value given 
matches the current day of the week, else False

SirL.MPIsReal.Year(year)
	The script returns true if the year (4 digits) that was 
	given matches the current year else returns false

Parameters:
	* year means the four-digit number representation of 
	the year

Returns: The value True if the year provided matches the 
current year, else False

SirL.MPIsReal.Hour(hour)
	The script returns true if the hour provided, be it is the 
	24-hour number or a 12-hour string matches what the 
	current hour is, else returns false

Parameters:
	* hour means the 24-hour representation in a number 
	form or the 12-hour representation with the hour 
	indicator defined in the plugin parameters

Returns: The value True if the hour provided matches the 
current hour, else False

SirL.MPIsReal.Month(month)
	The script returns true if the month provided be it the 
	number value or the string representation that is found 
	in monthsOfYear plugin parameter matches the current 
	month else returns false

Parameters:
	* month means the month value in either a number 
	representation or the string value found in 
	monthsOfYear plugin parameter

Returns: The value True if the month provided matches 
the current month, else False

SirL.MPIsReal.Minute(minute)
	The script returns true if the minute provided matches 
	the current minute, else returns false

Parameters:
	* minute means the minute value is a number between 
	0 and 59

Returns: The value True if the minute provided matches 
the current minute, else False

SirL.MPIsReal.Second(second)
	The script returns true if the second provided matches 
	the current second, else returns false

Parameters:
	* second means the second value is a number between 
	0 and 59

Returns: The value True if the second provided matches 
the current second, else False

Core functionality that this plugin works with:

CHANGELOG
	v1.0.2 - Get 12 Hour missing ")" was found and fixed
	v1.0.1 - Better formula for converting 24 hours to 12
	v1.0.0 - Allows you to make conditional scripts and set 
	variables to real-world local time

===== v1.0.1 - Armor Requirement Revamp =====
This plugin allows the developer to have skills that 
require armor requirements or require no armor 
equipped.

Use Cases:
Using skill note tags to define armor restrictions:
	1. Go to the Skill section in  your database
	2. Find the skill you would like to define armor 
	restrictions on
	3. Use the Note Tag to define the additional 
	requirements with "Additional Armor Requirement"
	4. Now that skill will require one of the armor 
	requirements be it in the note tag or the standard ones 
	in the database to be active
	
Using skill note tags to define no armor requirement:
	1. Go to the Skill section in your database
	2. Find the skill you would like to define with no armor 
	restriction
	3. Use the Note Tag to defined that skill with no armor 
	restriction with the "Require No Armor"
	4. Now that skill will require the actor to have no armor 
	equipped to be active

Scripts:
SirL.MPArmorRequirementRevamp.isSkillAtypeOk(skill,
actor)
	The script gets the armor requirement for a specific skill 
	used by a specific actor 

Parameters:
	* skill means the skill object which checked if usable
	* actor means the actor object which expected to be 
	using it during the tests

Returns: Boolean if the skill meets the armor 
requirements

Note Tags: 


Note tags for Skills:
	* Require No Armor
<SirL.No_Armor:[ExceptionEquipmentId]>
	This note tag will restrict the skill unless the party 
	member has no armor equipped. 
	ExceptionEquipmentIds can be added to allow some 
	armors to be equipped, and this skill still is usable. A 
	comma is used to separate the ExceptionEquipmentIds. 
	ExceptionEquipmentId is a number which can be found 
	in the Database->Types->Equipment Types.
	Example uses for note tag:
	 <SirL.No_Armor> means the skill requires no armors to 
	be equipped at all, without any armor being excepted

	 <SirL.No_Armor:[2]> means that the skill requires no 
	armors except for equipment type 2 is in the default 
	RMMZ game would be Shield

	 <SirL.No_Armor:[2,4]> means that the skill requires 
	no armors except for equipment type 2 and 4 is in the 
	default RMMZ game would be Shield and Body

	* Additional Armor Requirement
<SirL.Required_Armor:{"EquipmentId":[ARMORID]}>
	This note tag will restrict the skill unless the party 
	member has one of the ARMORIDs found in the given 
	EquipmentId slots. EquipmentId is a number that  found 
	in the Database->Types->Equipment Types. While the 
	ARMORID is a number  found in the 
	Database->Types->Armor Types. You can allow one of 
	many Armors in an Equipment slot by using a comma.
	Example uses for note tag:
	 <SirL.Required_Armor:{"4":[1]}> means with default 
	RMMZ game this will restrict the skill to only be active if 
	the party member has on their body slot an armor with 
	the type General Armor

	 <SirL.Required_Armor:{"2":[5,6]}> means with 
	default RMMZ game, this will restrict the skill to only be 
	active if the party member has on their Shield slot an 
	armor with the type Small Shield or Large Shield

	 <SirL.Required_Armor:{"4":[1], "2":[5,6]}> means 
	with default RMMZ game, this will restrict the skill to 
	only be active if the party member has on their body 
	slot an armor with the type General Armor or has on 
	their Shield slot an armor with the type Small Shield or 
	Large Shield

Core functionality that this plugin works with:
	* Game_BattlerBase.prototype.meetsSkillConditions

CHANGELOG
	v1.0.1 - Fixed Additional Armor Note tags to work
	v1.0.0 - Added No Armor and Additional Armor Note tags

===== v1.0.0 - Item Requirement Revamp =====
This plugin allows the developer to limit skill usage based 
on the number of items within the party inventory. The 
limits can be where the skill cannot be used if any item is 
in the player inventory or certain items meet a set 
number.

Use Cases:
Using Note tags to define skill's limit usage based on 
inventory:
	1. Go to the Items section in your database if you are 
	wanting Require Items, else go to step 3
	2. Log the 4 digit number next to the item you would 
	like to restrict the skill to
	3. Go to the Skills section in your database
	4. Find the Skill you would like to restrict the usage to 
	inventory
	5. If you want the skill only to be usable if the inventory 
	is empty then put the <SirL.EmptyInventory>
	6. If you want skill to be restricted to a certain amount 
	of a specific item then use the 
	<SirL.Required_Item:{"ItemId": AMOUNT, "ItemId": 
	AMOUNT}>, the itemId is the number logged in step 2, 
	and the amount is how high the count for that item 
	must get to before the skill becomes usable
	7. Now that skill will have the Item Requirements 
	defined in those note tags

Scripts:
SirL.MPItemRequirementRevamp.
meetsNoItemRequirement(skill)
	The script that is used to test to see if a skill has the 
	SirL.EmptyInventory and if it does check to see if the 
	inventory is empty

Parameters:
	* skill means the Skill that is checking to see if it meets 
	the No Item Requirement

Returns: If the skill has the SirL.EmptyInventory returns 
a false if party inventory has anything, else it will return 
True.

SirL.MPItemRequirementRevamp.isSkillItemOk(skill)
	The script that is used to test to see if a skill meets the 
	Item Requirements via the two note tags that are 
	associated with this plugin or don't have any of the note 
	tags associated with it

Parameters:
	* skill means the Skill that is checking to see if it meets 
	any of the Item Requirements

Returns: If the skill provided meets the Required Items 
requirements, then return true else return false.

Note Tags: 


Note tags for Skills:
	* Require Empty Inventory
<SirL.EmptyInventory>
	This note tag will restrict the skill unless the party has 
	no items in their inventory.
	Example uses for note tag:
	 <SirL.EmptyInventory>

	 The skill now will only be active if the party has no 
	items.

	* Require Items
<SirL.Required_Item:{"ItemId": AMOUNT, "ItemId": 
AMOUNT}>
	This note tag will restrict the skill unless the party has 
	the items at the desired amount or higher. ItemId is a 
	number that matches the number found next to the 
	item in Database-->Items. AMOUNT is a number value 
	that is the minimum value to activate the skill.
	Example uses for note tag:
	 <SirL.Required_Item:{"7":3}> means with the default 
	RMMZ game, the skill now will only be active if the party 
	has at least 3 potions in their inventory.

	 <SirL.Required_Item:{"1":2, "4":7}> means the skill 
	will be usable if the party inventory has 2 or more of 
	item 1 and 7 or more of item 4. Both items must be 
	greater than their amount.

Core functionality that this plugin works with:
	* Game_BattlerBase.prototype.meetsSkillConditions

CHANGELOG
	v1.0.0 - Added No Item and Additional Item Note tags

===== v1.0.0 - Skill Restriction =====
This plugin allows the developer to add additional 
restrictions to prevent the skill being active.

Use Cases:
Using skill note tags to define additional restrictions:
	1. Go to the Skill section in your database
	2. Find the skill you would like to define a skill 
	restriction on
	3. Use the Note Tag to define the restriction you want; 
	remember true means it cannot be used
	4. Now that skill will be restricted from use when the 
	note tag is evaluated to be true

Scripts:
SirL.MPsR.restrict( caster, formula)
	Evaluation of the "SirL.skillRestrict note tag to 
	determine the boolean if it should be restricted"

Parameters:
	*  caster means the actor object that is casting the skill 
	that is being evaluated
	*  formula means the JavaScript code with shorthand 
	that will be evaluated

Returns: The boolean of the NOT evaluation for the note 
tag

Note Tags: 


Note tags for Skills:
	* skillRestrict
<SirL.skillRestrict: FORMULA>
	This note tag defines when the skill is restricted with a 
	formula that is calculated on use. It should result in a 
	'True' boolean value when you want the skill not to be 
	available. The FORMULA must be like the damage 
	formula except for b(target) since that cannot be 
	determined while viewing the skill.

This note tag is using aliasing to allow ease of use. Here 
is the Key:
	"a" means the actor that the skill is being used . You 
	may use this simple abbreviation to reference the 
	actor's object, such as stats, name, and more

	Examples include but are not limited to:
	"a.hp" means this actor's current hp
	"a.name" means this actor's name

	"v" means the game variables very similar to how 
	damage formulas work.

	Examples include but are not limited to:
	"v[1]" means the first game variable value

	"s" means the skill which is being used. You may use 
	this simple abbreviation to reference this skill object, 
	such as invocation, name, and more

	Examples include but are not limited to:
	"a.mpCost" means this skill's mp cost
	"s.name" means this skill's name

	Example uses for note tag:
	 <SirL.skillRestrict: a.hp >= a.mhp / 4> which means 
	this skill is restricted when the actor has more health 
	than 1/4 their max, in other words, the actor can use 
	this skill when they have 1/4 or less of their health

	 <SirL.skillRestrict: v[1] != 5> which means this skill is 
	restricted whenever variable 1 doesn't equal 5, in other 
	words, the actor can only use this skill when variable 1 
	equals 5

	 <SirL.skillRestrict: $gameSwitches.value(1)> which 
	means  this skill is restricted if switch 1 is on, in other 
	words, the actor can only use this skill when switch 1 is 
	off

Core functionality that this plugin works with:
	* Game_BattlerBase.prototype.canPaySkillCost

CHANGELOG
	v1.0.0 - Allows skills to have additional restrictions that 
	not be met

===== v1.0.0 - Weapon Requirement Revamp =====
This plugin allows the developer to have skills that 
require additional weapon requirements or require no 
weapon used.

Use Cases:
Using skill note tags to define additional weapon 
restrictions:
	1. Go to the Skill section in your database
	2. Find the skill you would like to define additional 
	weapon restrictions on
	3. Use the Note Tag to define the additional 
	requirements with "Additional Weapon Requirement"
	4. Now that skill will require one of the weapon 
	requirements be it in the note tag or the standard ones 
	in the database to be active
	
Using skill note tags to define no weapon requirement:
	1. Go to the Skill section in your database
	2. Find the skill you would like to define with no weapon 
	restriction
	3. Use the Note Tag to define that skill with no weapon 
	restriction with the "Require No Weapon"
	4. Now that skill will require the actor to have no 
	weapon equipped to be active

Note Tags: 


Note tags for Skills:
	* Require No Weapon
<SirL.No_Weapon>
	This note tag will restrict the skill unless the party 
	member has no weapons equipped.
	Example uses for note tag:
	 <SirL.No_Weapon> means the skill now will only be 
	active if the party member has no weapon equipped.

	* Additional Weapon Requirement
<SirL.Required_Weapon:[WEAPONID]>
	This note tag will restrict the skill unless the party 
	member has one of the WEAPONID in their weapon slot. 
	WEAPONID is a number found in 
	Database->Types->Weapon Type. You can allow 
	multiple weapons to satisfy that requirement by listing 
	them with a comma between each number. This also 
	extends the default 2 weapon requirement drop-down 
	options on the weapon's page in the database.
	Example uses for note tag:
	 <SirL.Required_Weapon:[2]> means with default 
	RMMZ game, the skill now will only be active if the party 
	member has a sword type weapon equipped.

	 <SirL.Required_Weapon:[1,2,4,12]> means with 
	default RMMZ game, the skill now will only be active if 
	the party member has a dagger, sword, axe, or spear 
	type weapon equipped.

Core functionality that this plugin works with:
	* Game_Actor.prototype.isSkillWtypeOk

CHANGELOG
	v1.0.0 - Added No Weapon and Additional Weapon Note 
	tags

===== v1.0.0 - Animation Sound Variance =====
This plugin allows the developer enable to add sound to 
animation which is randomly selected each time from a 
list of sounds.

Use Cases:
Set up the Plugin Parameters:
	1. Go to the plugin paramters and find Animation Sound 
	Variance then Sound Variances
	2. Add a new Sound Variance to the list
	3. Sound Variance require an Animation which will be 
	what the sound variance is associate with
	4. Then you provide a list of frames and sounds, when 
	the animation hit the frame a random sound from the 
	list will play
	5. Sounds are found the audio/se folder, and you can 
	customize the Pan, Pitch and Volume of the sound.
	6. Click Ok until you have return to the Plugin 
	Parameters window
	7. Now whenever that animation plays that specific 
	frame a sound from the list of sounds will be randomly 
	choosen to be played
	

Tips:
	* If the animation is not long enough to reach the 
	desired frame, the audio will not play.

Core functionality that this plugin works with:
	* Sprite_Animation.prototype.processSoundTimings

CHANGELOG
	v1.0.0 - Allows random variance on sound at a given 
	frame of any animation

===== v1.1.2 - Better Show Battle Animation =====
This plugin allows the developer to show battle 
animations on dead enemies as well as live ones.

Use Cases:
Using the plugin command:
	1. Go to the Database -> Troops
	2. Set the conditions of the Battle Event page
	3. Click on the Battle Event page empty area
	4. Use the plugin command "Show Battle Animation"
	5. If the "Alive or Dead" selected is "Dead Only" or 
	"Both", the animation will still appear on dead enemies
	
Using script inside a battle event page:
	1. Go to the Database -> Troops
	2. Set the conditions of the Battle Event page
	3. Click on the Battle Event page empty area
	4. Use the "Script..." and use the function 
	SirL.MPBetterShowBattleAnimation.SBA(EnemyID, 
	Animation, lifeStatus, interpreter)
	5. If the "lifeStatus" is 1 or 2, the animation will still 
	appear on dead enemies

Plugin Commands:
	* Show Battle Animation - Displays the specified 
	animation on the battle screen on alive and dead 
	enemies

Scripts:
SirL.MPBetterShowBattleAnimation.SBA(EnemyID,
Animation,lifeStatus,interpreter)
	The script request animation on selected enemies as 
	long as they meet the life status requirement

Parameters:
	* EnemyID means the enemy index or -1 if you want all 
	the enemies in that troop
	* Animation means the animation index in the database 
	which you want to request
	* lifeStatus means Filter enemies based on if they are 
	alive; 0 - alive only, 1 - dead only and 2 - both alive or 
	dead enemies
	* interpreter means The active game interpreter at the 
	time. Will most likely be $gameTroop._interpreter

Returns: Return boolean true, due to original function 
doing such

CHANGELOG
	v1.1.2 - Utilize plugin command optimization with 
	interpreter, fixed death animations trigger properly
	v1.1.1 - Typo in the code prevented any animation from 
	showing in battles.
	v1.1.0 - Able to choose animations directly instead of 
	using id numbers
	v1.0.0 - Allow you to define a Show Battle Animation 
	with options for dead enemies as well

===== v1.0.1 - Final Critical Damage =====
This plugin allows the developer enable a final critical 
damage when the target is one hit away from death. 
With the option of only granting the party this ability.

Use Cases:
Set up the Plugin Parameters
	1. Go to the plugin parameters and find Final Critical 
	Damage
	2. Choose if you want to enable enemies to have the 
	ability to boost their final attack if the player is low on 
	health
	
Changing Plugin Parameters mid game with plugin 
command:
	1. Go to the Event's Contents in which you would like 
	the plugin parameters to be changed in.
	2. Find the line before you want the change
	3. Add a new Event Command - Plugin Command
	4. Select the plugin name and the Command name of 
	"Set Critical Boost for Enemies"
	5. In the Arguments set the "Enemies have final critical 
	damage" to either enable (to allow them) or disable (to 
	disallow them)
	6. Close all sub windows with OK/Apply
	7. When that code execute the parameter will be 
	changed for that save file 
	

Plugin Commands:
	* Set Critical Boost for Enemies - Able to change the 
	final critical damage for the rest of game

Tips:
	* Plugin Commands overwrite Plugin Parameters

Core functionality that this plugin works with:
	* Game_Action.prototype.itemCri
	* Game_Action.prototype.makeDamageValue
	* Game_System.prototype.initialize

CHANGELOG
	v1.0.1 - Fixed logic issue, now allow enemies and actors 
	to actually perform ciritcal damage
	v1.0.0 - Add various built-in settings and plugin 
	commands to change them

===== v1.1.0 - Post Action Animation =====
This plugin allows developer to call animations with 
optional delay on the target once an action has been 
completed, allowing custom animations for the hit, miss 
and evaded cases. With the additional factors such as; 
enemy/actor, weapon, armor, and skill.

Use Cases:
Set up the Plugin Parameters
 	1. Go to the plugin parameters and find Post Action 
	Animation
 	2. Choose if you want to define an Animation for an 
	Actor or Enemy as the target by picking either Actor 
	Animations or Enemy Animations respectfully
 	3. Choose if you want to define a Hit/Miss/Evade 
	animation by picking either On Hit, On Miss or On Evade.
 	4. Create a new entry in the On Hit, On Miss, or On 
	Evade listed
 	5. Define the Actor/Enemy Id you would like. This can 
	be a list if you want to group a set of Actors or Enemies. 
	Nothing or [] will result in no execution, while the None 
	option will result in any id being executed.
 	6. Define the Fall Back Animation for what animation 
	you want that Actor/Enemy to have if no weapon 
	definition can be found
 	7. Optional: Define the delay you would like that Fall 
	Back Animation to have in Frames
 	8. Stop if you want this to happen any time that 
	Actor/Enemy is attacked, no matter the 
	weapon/armor/skill being involved.
 	
 	Additionally, define weapons and armors
 	9. Create a new entry in the Weapon of the Attacker list 
	or Armor of the Target list
 	10. Define the Weapon/Armor Id you would like. This 
	can be a list if you want a group of weapons/armors. 
	Nothing or [] will result in no execution, while the None 
	option will result in any id being executed.
 	11. Define the Fall Back Animation for what animation 
	you want that Weapon/Armor to have if no armor/skill 
	definition can be found
 	12. Optional: Define the delay you would like that Fall 
	Back Animation to have in Frames
 	13. Stop if you want this to happen any time that level 
	is involved, loop back to 9 for armors and continue to 14 
	for skills
 
 	Finally Skills; this is after weapon and armors
 	14. Create a new entry in the Skill the attacker used list
 	15. Define the Skill Id you would like. This can be a list 
	if you want a group of skills
 	16. Define the Animation for what animation you want 
	for those specific skills
	17. Optional: Define the delay you would like that Fall 
	Back Animation to have in Frames 


Scripts:
SirL.MPpAA.requestAnimation(effectType,target,subject)
	Request animation for a specific effectType giving a 
	target and subject based on the plugin parameters.

Parameters:
	* effectType means The type of result occurred for the 
	action, currently defined as "Hit", "Miss", "Evaded"
	* target means The Game_Battler object which was the 
	target of the action 
	* subject means The Game_Battler object which was 
	the attacker of the action. Default as SirL.MPpAA.subject

Returns: Nothing

Note Tags: 


Note tags for Enemies:
	* Enemy Weapon Definitions
<SirL.pAA.Weapon: WeaponIds>
	This note tag will define weapons that the enemy is 
	using in a fight used when deciding which post action 
	animation to use on their target.
	Example uses for note tag:
	 <SirL.pAA.Weapon:23> which means when post action 
	animation is determine what weapon this enemy has it 
	will define weapon id 23.

	 <SirL.pAA.Weapon:23, 46> which means when post 
	action animation is determine what weapon this enemy 
	has it will define weapon id 23 and 46.

	 <SirL.pAA.Weapon:23, 46, 157> which means when 
	post action animation is determine what weapon this 
	enemy has it will define weapon id 23, 46, and 157.

	* Enemy Armor Definitions
<SirL.pAA.Armor: ArmorIds>
	This note tag will define armors that the enemy is 
	wearing in a fight when deciding which post action 
	animation.
	Example uses for note tag:
	 <SirL.pAA.Armor:23> which means when post action 
	animation is determine what armor this enemy has it 
	will define armor id 23.

	 <SirL.pAA.Armor:23, 46> which means when post 
	action animation is determine what armor this enemy 
	has it will define armor id 23 and 46.

	 <SirL.pAA.Armor:23, 46, 157> which means when post 
	action animation is determine what armor this enemy 
	has it will define armor id 23, 46, and 157.

Tips:
	* When defining a weapon or armor as None means 
	accept any weapon or armor.

	* When a weapon or armor list is defined with nothing, 
	in other words, empty or just [], this means fallback to 
	the previous animation.

Core functionality that this plugin works with:
	* Window_BattleLog.prototype.displayDamage
	* Window_BattleLog.prototype.displayActionResults

CHANGELOG
	v1.1.0 - Added tags to help the developer organize their 
	thoughts
	v1.0.0 - Allows post action animations for hit, miss and 
	evade and additional parameters after those

===== v2.1.0 - Position BattleBacks =====
This plugin allows the developer to modify the position of 
their battlebacks for battles. Including the ability to 
animate the battleback through updating the parameters 
per frame. This can be done via plugin parameters for all 
the battlebacks or using plugin commands for specific 
battlebacks

Use Cases:
Using plugins commands to define battlebacks from that 
point forward:
	1. Before the battle that you want to change the 
	battleback to
	2. Go to an Event's contents in which you would like the 
	command to be executed
	3. Use the plugin command that sets the battleback per 
	layer to what you desire; "Set to default", "Set to 
	Screen Size mode", "Set to UI Size mode", or "Set to 
	custom battleback positioning"
	4. If you want to adjust if the battleback should be 
	refreshing to make an animated battleback, then use 
	this command as well "Set Battle Backs Animation"
	5. All future battles will have these battleback settings, 
	if you want to return to the one prior you will have to 
	run these commands again with the old settings

Known Issues:

	* VisuMZ_1_BattleCore
		Reported issue:
		- Crashes upon entering battle
		
		Steps to work around issues:
		1. Using only one of the two plugins


Plugin Commands:
	* Set Battle Backs Animation - Sets the battleback to 
	have animation
	* Set to default - Sets the battleback layout to the 
	default style
	* Set to Screen Size mode - Sets the battleback layout 
	to use the Screen Size
	* Set to UI Size mode - Sets the battleback layout to 
	use the UI Size
	* Set to custom battleback positioning - Sets the 
	battleback layout to a custom positioning

Scripts:
SirL.MPPositionBattleBacks.battlebackParser()
	Parses the battleback information in the plugin 
	parameters to generate a list of layers which are JSON 
	objects


Returns: List of the layers data that were in the plugin 
parameters

Tips:
	* Graphics.frameCount%60 <- counts per frame up to 
	60 then reset to 0, Good for when trying to do 
	animation.

	* Plugin Commands overwrite Plugin Parameters

Core functionality that this plugin works with:
	* Game_System.prototype.initialize
	* Sprite_Battleback.prototype.adjustPosition
	* Spriteset_Battle.prototype.updateBattleback

CHANGELOG
	v2.1.0 - Made default actually the default, in case plugin 
	parameters got corrupted
	v2.0.4 - Fixed typo with batteback instead of battleback
	v2.0.3 - Found incompatibility with VS BattleCore
	v2.0.2 - Plugin Commands work
	v2.0.1 - Now hash the savables, preventing game 
	crashing bug
	v2.0.0 - Fixed game crashing bug; Forgot to remove 
	test code as well as updated default value
	v1.0.3 - Integrated for the generator
	v1.0.2 - Broke up the battlebacks and allows 
	recalculation by update(animation), and multi-line inputs
	v1.0.1 - Removed dead code that wasn't doing anything
	v1.0.0 - Add various built-in settings and plugin 
	commands to change them
	v0.0.1 - Allows basic custom parameters via plugin 
	parameters

===== v1.0.2 - Rewards For Escaping =====
This plugin allows the developer to enable 
rewards/penalties when the party successfully escapes.

Use Cases:
Set up for rewards/penalties when the party has escaped:
	1. Go to the plugin parameters and modify them to 
	meet your desire as when losing an item should it 
	include equip items and what message will appear.
	2. Go to the database in the Enemies section and find 
	the enemy you would like to define rewards/penalizes 
	when a party successfully escapes that enemy.
	3. Define the enemy note tags for the rewards/penalizes 
	for when the party successfully escapes; note tags can 
	be found in the note tag section.
	4. Done now when the enemy is in a battle, and the 
	party successfully escapes; the enemy will 
	reward/penalties the player for escaping.

Scripts:
SirL.MPRewardsForEscaping.escapeRewards(BM)
	Create all the escape rewards/penalties then displays 
	and rewards/penalize the party 

Parameters:
	* BM means the active battle manager

Returns: None

SirL.MPRewardsForEscaping.makeItemsForEscape(enemy,
listType)
	Get the items, weapons, armors that are going to 
	drop/taken during this escape by calculating the 
	percentages for that enemy given

Parameters:
	* enemy means the enemy object that you are getting 
	the dropped/took items, weapons, armors from
	* listType means a string of either "Drops" or "Takes" to 
	determine if this list is for drop items or taken items

Returns: An array of all the items that are dropped from 
or toke by that enemy

SirL.MPRewardsForEscaping.loseRewards(lostItems)
	Remove items from the party with the game message 
	defined in RewardsForEscaping.lostItem

Parameters:
	* lostItems means the standard format of drop item 
	object described, however this will take instead of gain.

Returns: Nothing

SirL.MPRewardsForEscaping.obtainLostText(type,
formatting)
	Gets the Lost Text for when gold or exp is being lost

Parameters:
	* type means either RewardsForEscaping.lostGold or 
	RewardsForEscaping.lostExp
	* formatting means any formatting values

Returns: Formatted string as defined in the plugin 
parameters

Note Tags: 


Note tags for Enemies:
	* Escape Experience Reward
<SirL.partyEscapeExp: AMOUNT>
	This note tag will define the amount of experience the 
	party is rewarded upon a successful escape. With 
	AMOUNT being the number value of that amount. You 
	can define the AMOUNT using any JavaScript function as 
	well.

This note tag is using aliasing to allow ease of use. Here 
is the Key:
	"e" means This specific enemy in battle

	Examples include but are not limited to:
	"e.exp()" means get the exp defined for this enemy in 
	the database

	"v" means the game variables very similar to how 
	damage formulas work.

	Examples include but are not limited to:
	"v[1]" means the first game variable value

	"t" means the troop data for the battle which called this 
	enemy into it.

	Examples include but are not limited to:
	"t.members().length" means the total number of 
	members in that troop
	"t.goldRate()" means if the party has gold double rate 
	trait then it returns 2 otherwise 1

	"p" means the player's party can be used to get various 
	properties of the party.

	Examples include but are not limited to:
	"p.steps()" means the number of steps the party has 
	taken in-game
	"p.size()" means the number of party members in the 
	party

	Example uses for note tag:
	 <SirL.partyEscapeExp:500> which means when the 
	party escapes this enemy will reward the player with 
	500 experience points.

	 <SirL.partyEscapeExp:-500> which means when the 
	party escapes this enemy will penalize the player with 
	the lost of 500 experience points.

	 <SirL.partyEscapeExp:$gameVariables.value(1)> which 
	means when the party escapes this enemy will reward 
	the player with experience points equal to the value 
	stored in game variable 1.

	 <SirL.partyEscapeExp:$gameParty.highestLevel()> 
	which means when the party escapes this enemy will 
	reward the player with experience points equal to the 
	highest level in the player party.

	 <SirL.partyEscapeExp:Math.floor(Math.random() * 
	51)> which means when the party escapes this enemy 
	will reward the player with experience points equal to a 
	random value between 0 and 50.

	* Escape Gold Reward
<SirL.partyEscapeGold: AMOUNT>
	This note tag will define the amount of gold the party 
	will reward upon a successful escape. With AMOUNT 
	being the number value of that amount. You can define 
	the AMOUNT using a JavaScript function as well.

This note tag is using aliasing to allow ease of use. Here 
is the Key:
	"e" means This specific enemy in battle

	Examples include but are not limited to:
	"e.gold()" means get the gold defined for this enemy in 
	the database

	"v" means the game variables very similar to how 
	damage formulas work.

	Examples include but are not limited to:
	"v[1]" means the first game variable value

	"t" means the troop data for the battle which called this 
	enemy into it.

	Examples include but are not limited to:
	"t.members().length" means the total number of 
	members in that troop
	"t.goldRate()" means if the party has gold double rate 
	trait then it returns 2 otherwise 1

	"p" means the player's party can be used to get various 
	properties of the party.

	Examples include but are not limited to:
	"p.steps()" means the number of steps the party has 
	taken in-game
	"p.size()" means the number of party members in the 
	party

	Example uses for note tag:
	 <SirL.partyEscapeGold:500> which means when the 
	party escapes this enemy will reward the player with 
	500 gold.

	 <SirL.partyEscapeGold:-500> which means when the 
	party escapes this enemy will penalize the player with 
	the lost of 500 gold.

	 <SirL.partyEscapeGold:$gameVariables.value(1)> 
	which means when the party escapes this enemy will 
	reward the player with gold equal to the value stored in 
	game variable 1.

	 <SirL.partyEscapeGold:$gameParty.highestLevel()> 
	which means when the party escapes this enemy will 
	reward the player with gold equal to the highest level in 
	the player party.

	 <SirL.partyEscapeGold:Math.floor(Math.random() * 
	51)> which means when the party escapes this enemy 
	will reward the player with gold equal to a random value 
	between 0 and 50.

	* Escape Drop Rewards
<SirL.partyEscapeDrops:[{"type":"TYPE",
"probability":PROB,"id":INDEX}]>
	This note tag defines the drops that the enemy will 
	leave upon a successful escape. You can include as 
	many drops as you want with commas. TYPE is defining 
	the type of drop; "Item", "Weapon", "Armor". PROB is 
	the number of likelihood such as 1/PROB. And INDEX is 
	the index that can be found in the database.
	Example uses for note tag:
	 
	<SirL.partyEscapeDrops:[{"type":"Item",
	"probability":10,"id":7}]> which means with default 
	RMMZ game, when the party escapes the enemy will 
	have a 1/10 chance of dropping a potion

	 
	<SirL.partyEscapeDrops:[{"type":"Weapon",
	"probability":1,"id":1}, 
	{"type":"Armor","probability":2,"id":2}]> which means 
	when the party escapes the enemy will always drop the 
	Weapon in index 1 of the database and a 50% (1/2) 
	chance of dropping the Armor in index 2 of the database

	* Escape Take Rewards
<SirL.partyEscapeTakes:[{"type":"TYPE",
"probability":PROB,"id":INDEX}]>
	This note tag defines the items the enemy will take upon 
	a successful escape. You can include as many items as 
	you want with commas. TYPE is defining the type of 
	drop; "Item", "Weapon", "Armor". PROB is the number 
	of likelihood such as 1/PROB. And INDEX is the index 
	that can be found in the database.
	Example uses for note tag:
	 
	<SirL.partyEscapeTakes:[{"type":"Item","probability":10,
	"id":7}]> which means with default RMMZ game, when 
	the party escapes the enemy will have a 1/10 chance of 
	taking a potion

	 
	<SirL.partyEscapeTakes:[{"type":"Weapon",
	"probability":1,"id":1}, 
	{"type":"Armor","probability":2,"id":2}]> which means 
	when the party escapes the enemy will always take the 
	Weapon in index 1 of the database and a 50% (1/2) 
	chance of taking the Armor in index 2 of the database

Core functionality that this plugin works with:
	* BattleManager.onEscapeSuccess
	* BattleManager.displayExp
	* BattleManager.displayGold

CHANGELOG
	v1.0.2 - Fixed bug where lost item message would 
	appear even if their was no item to be lost and added 
	functionality for lost messages when losing Gold or Exp
	v1.0.1 - Added additional documentation for short-hand 
	javascript codes
	v1.0.0 - Allow enemies to fail at escaping with drops 
	being fixed values

===== v1.0.0 - Better Script Command =====
This plugin is obsolete after MZ version 1.3.0 as they 
made the script command now have infinite lines. 

This plugin allows the developer to create script 
commands with a scroll bar and an infinite number of 
lines via a plugin command.

Use Cases:
Using plugin command to create a script command that 
is scrollable:
	1. Go to an Event's contents in which you would like the 
	command executed
	2. Add the plugin command "Script Command"
	3. Define the JavaScript you would like to have executed
	4. Hit the okay button when the game executes this 
	command it will run the JavaScript

Plugin Commands:
	* Script Command - Executes any length JavaScript 
	found in this command

CHANGELOG
	v1.0.0 - Initial creation of Scrollable Script Calls

===== v1.0.0 - Custom Game Error =====
This plugin allows the developer to create custom error 
messages in their game when things go bad.

Use Cases:
Using plugins commands to create a custom error 
message:
	1. Go to an Event's contents in which you would like to 
	have a custom error message
	2. Add the plugin command "Throw Error" to cause an 
	error to appear
	3. From then on when that line get read the error will 
	appear
	
Using custom error messages in your own scripts or 
script calls:
	1. Go to the line in your script which you would like to 
	cause a custom error message
	2. Add the line "SirL.MPCore.throwError(<title>, 
	<message>, <%X variables>)" to throw the error
		- title : string with %X with X being numbers for 
		variables index.
		- message : string with %X with X being numbers for 
		variable index
		- %X variable : optional string encoded JS to provide 
		variables
		Example: SirL.MPCore.throwError("Title Error - %1", 
		"Detail Message of %1 - %2", "First Variable Element", 
		Math.randomInt(20))
	=> Title Error - First Variable Element
		Detail Message of First Variable Element - <random 
		number>

Plugin Commands:
	* Throw Error - Errors out your game with custom 
	message

Core functionality that this plugin works with:

CHANGELOG
	v1.0.0 - Allow throwing errors

===== v1.0.0 - In Event Comment =====
This plugin allows the developer to block comment out 
event code in either play test only or completely

Use Cases:
Using plugins commands to comment out blocks of event 
code:
	1. Go to an Event's contents in which you would like to 
	comment a block of commands out
	2. Add the plugin command "Block Comment" to start 
	the block comment
	3. Somewhere further along the Event's contents, find 
	where you would like the block comment to end
	4. Add the plugin command "End of Block Comment" to 
	end the block comment

Plugin Commands:
	* Block Comment - Comment out a block of code in the 
	event
	* End of Block Comment - Use to end the most outer 
	block command

Tips:
	* Recommend you remove comment out code before 
	release, due to it taking up space in your game files

	* Wrapping half a comment in another block comment 
	could result in errors due to that half of the comment is 
	commented out

Core functionality that this plugin works with:

CHANGELOG
	v1.0.0 - Allows comments that work in all modes and 
	play test mode only

===== v2.0.1 - Tile-based Scaling =====
This plugin allows the developer's game to auto-scale, 
which reduces black bars while keeping the UI 
components fully visible. You can choose between 5 
different preset scaling formulas or create your custom 
scaling formula in JavaScript.
	* Fixed to Long: This will fix the long side of the window 
	and adjust the short side
	* Fixed to Short: This will fix the short side of the 
	window and adjust the long side
	* Fixed to Zoom: Will adjust both sides of the window, 
	however, retain the zoom of the camera
	* Fixed Width - Legacy Subtractive: Will fix the width of 
	the window and adjust the height, was called Subtractive
	* Fixed Height - Legacy Additive: Will fix the height of 
	the window and adjust the height, was called Additive
	* Custom: Defaults to the formula of Fixed to Long, 
	however, can be changed to fit the developer desire
	
	Another parameter now, Default Amount of Zoom, 
	allows you to scale the default zoom. A higher number 
	means zooming in and, a lower number means zooming 
	out.

Use Cases:
Using this plugin with plugin parameters:
	1. Go to the Plugin Manager
	2. Select the plugin that contains this plugin
	3. Under Tile-based Scaling, you will find a parameter 
	Type of Scaling
	4. Choose the type of scaling you would like
	5. If using the custom type of scaling, modify the 
	Custom Scaling factor to your liking with JavaScript
	6. Define the default amount of zoom you would like the 
	game to start with
	7. Change the Title Screen, Game Over Screen and 
	Battleback options between Fit and Stretch
	8. The game will start doing that scaling automatically if 
	the plugin is active

Using the plugin commands:
	1. Go to where you can use plugin commands, such as 
	an Event's contents in which you would like the 
	command to be executed
	2. Add the Set the zoom percentage command,
	3. Define the new Zoom Percentage
	4. Hit the okay button, when the game execute this 
	command it will zoom the game into that percentage

Known Issues:

	* If you resize the window while in battle, the TP will 
	reset unless the actor has the TP Persisted flag on.
	* Certain sized windows may create distorted menus 
	and pictures positions

Plugin Commands:
	* Set the zoom percentage - Set the zoom to a specific 
	percentage, bigger means zoom in

Scripts:
SirL.MPTileBasedScaling.refresh()
	Refresh the entire screen so that the graphics can be 
	re-scaled to the correct size.


Returns: Nothing

SirL.MPTileBasedScaling.calculate()
	Set the Graphics box width and height to the calculated 
	value of the current window size and the plugin 
	parameters


Returns: Nothing

SirL.MPTileBasedScaling.undertakeSpritePicture()
	Code to help scale pictures from ScreenZoom.js by 
	Sasuke KANNAZUKI under the MIT license


Returns: Nothing

SirL.MPTileBasedScaling.
removePictureContainer(spriteSet)
	Code to help scale pictures from ScreenZoom.js by 
	Sasuke KANNAZUKI under the MIT license

Parameters:
	* spriteSet means A scene's spriteSet object

Returns: The spriteSet's picture container

SirL.MPTileBasedScaling.stretchPosition(sbb)
	Stretches the battleback instead of using a fit calculation

Parameters:
	* sbb means A Sprite_Battleback object

Returns: 

Tips:
	* For other plugin developers; if you are using plugins 
	with or creating custom scenes in your game that 
	require preparing before rendering, you must use 
	prepare function with argument variables being the 
	non-underscore version such as:
		MyCustomScene.prototype.prepare = 
		function(x){this._x = x;}

	* If the map size is smaller than the window, black bars 
	may still appear as there isn't any data to render in 
	those areas. Depends on which scaling type you are 
	using.

	* When using the Set the zoom percentage command, 
	recommend using Fadeout Screen before and Fadein 
	Screen afterward to prevent a sudden flash of black 
	when adjusting the scaling.

Core functionality that this plugin works with:
	* SceneManager.changeScene
	* SceneManager.updateScene
	* Graphics._onWindowResize
	* Game_System.prototype.initialize
	* Scene_Map.prototype.fadeOutForTransfer
	* Scene_Map.prototype.stop
	* Scene_Message.prototype.isMessageWindowClosing
	* Scene_Map.prototype.terminate
	* Bitmap.load
	* Game_Map.prototype.screenTileX
	* Game_Map.prototype.screenTileY
	* Game_Map.prototype.canvasToMapX
	* Game_Map.prototype.canvasToMapY
	* Scene_Base.prototype.scaleSprite
	* Sprite_Battler.prototype.setHome
	* Sprite_Battleback.prototype.adjustPosition
	* Spriteset_Battle.prototype.updateBattleback

CHANGELOG
	v2.0.1 - Fixed bug where large map spawning would 
	could offset movement clicks as well as improved zoom 
	refresh rate
	v2.0.0 - Added options to scale via fit or stretch for Title 
	screen, Game over screen or battle background. Now 
	scales pictures correctly thanks to code from 
	ScreenZoom.js by Sasuke KANNAZUKI under the MIT 
	license.
	v1.3.0 - Added Tile Sizes for RPGMZ 1.5 update, 
	previous versions still work
	v1.2.2 - Improve fix for the race condition bug from 
	version 1.2.1
	v1.2.1 - Fixed race condition bug that was crashing 
	some game session on boot
	v1.2.0 - Optimized memory usage, added more scaling 
	formulas, and ability to zoom command
	v1.1.1 - Fixed game crash bug when scaling right 
	between title screen and map screen
	v1.1.0 - Added parameter to help with the better scaling 
	algorithm, along with additional bug fixes
	v1.0.0 - Dynamical scale game components to better fit 
	window size

===== v1.1.1 - Direction Event Switch Trigger =====
This plugin allows the developer to define a Move Route 
to trigger events in which an event is in the direction 
defined and meets the conditional logic for a valid event. 
Trigger them will cause specified self-switches to be set 
to specified values. This plugin also allows the event that 
was doing the move route to have its self-switches 
changed as well.

Use Cases:
Using scripts inside Movement Route Command:
	1. Go to an Event's contents in which would like to 
	trigger the Movement Route
	2. Create a Set Movement Route Command
	3. Select the Event you would like to make the Direction 
	Event Switch Trigger movement
	4. Select the "Script..." option for when you want to use 
	the Direction Event Script Trigger command
	5. Use the "SirL.MPdEST.trigger(parent, conditionalLogic, 
	TriggerEventSwitch, Directions, TriggerSelfSwitch)" with 
	parent being "this" without quotes, conditionalLogic 
	being a JavaScript to filter out events, 
	TriggerEventSwitch is JSON with the structure being 
	{"SwitchLetter":SwitchState} (Letter being A,B,C, or D 
	and State being either true or false representing on and 
	off respectfully). The last two are optional. Directions by 
	default is [0] which means get the direction the event is 
	facing. However, you can define that by using 2, 4, 5, 6, 
	or 8 like [2,4,6,8] would be all the directions. [5] would 
	be the location where the event is located. 
	TriggerSelfSwitch by default is {} which means there is 
	no TriggerSelfSwitch, if you wanted the event that was 
	doing the move route to have it's A self-switch you 
	would want to change it to {"A":true}
	
Using scripts inside an Event's Autonomous Movement 
Custom Route:
	1. Go to an Event's contents in which would like to 
	trigger the Movement Route
	2. In the Autonomous Movement section, verify the Type 
	is Custom
	3. Click the "Route..."
	4. Select the "Script..." option for when you want to use 
	the Direction Event Script Trigger command
	5. Use the "SirL.MPdEST.trigger(parent, conditionalLogic, 
	TriggerEventSwitch, Directions, TriggerSelfSwitch)" with 
	parent being "this" without quotes, conditionalLogic 
	being a JavaScript to filter out events, 
	TriggerEventSwitch is JSON with the structure being 
	{"SwitchLetter":SwitchState} (Letter being A,B,C, or D 
	and State being either true or false representing on and 
	off respectfully). The last two are optional. Directions by 
	default is [0] which means get the direction the event is 
	facing. However, you can define that by using 2, 4, 5, 6, 
	or 8 like [2,4,6,8] would be all the directions. [5] would 
	be the location where the event is located. 
	TriggerSelfSwitch by default is {} which means there is 
	no TriggerSelfSwitch, if you wanted the event that was 
	doing the move route to have it's A self-switch you 
	would want to change it to {"A":true}

Scripts:
SirL.MPdEST.trigger( parent, conditionalLogic, 
TriggerEventSwitch, Directions, TriggerSelfSwitch)
	This script checks if an event that meets the 
	conditionalLogic, if it does then it will change 
	self-switches of those events as well as possibly itself

Parameters:
	*  parent means the game character which you want to 
	be doing the movement
	*  conditionalLogic means the JavasScript to determine 
	if an event is going to be triggered, with a key term; 
	'event' for access to the event found and 'selfSwitches' 
	for access to the found event's selfswitches in the 
	format {'A':true}
	*  TriggerEventSwitch means a JSON object with the 
	self-switch and state, such as {"A":true, "B":false} - 
	this turns self-switch A on and B off
	*  Directions means Optional; an array of the directions 
	2, 4, 6, and 8. Additional values; 0 - the direction the 
	event is facing and 5 - get events where the event is 
	located. Also, you can use 'a' or 'b' to get the above or 
	below events only respectfully, for example, '5a'. 2 - 
	down, 4 - left, 6 - right, and 8 - up
	*  TriggerSelfSwitch means Optional; Similar to 
	TriggerEventSwitch but for the event that is doing the 
	move route

Returns: Return list of events which was triggered on

SirL.MPdEST.compareEventRenderLayer( event1, event2)
	This script compares two events to identify which event 
	is rendered above the other. Best used in the array.sort 
	function

Parameters:
	*  event1 means the first Game_Event object
	*  event2 means the second Game_Event object

Returns: Return an integer used for sorting if >0 then 
event2 is below event1 otherwise event1 is below event2

Tips:
	* parent should almost always be "this" without quotes, 
	to get the event which is moving

	* If you want to only trigger for specific event ids you 
	would want the conditionalLogic to be 
	"[1,2,3].includes(event._eventId)". This specific 
	example only triggers if the events detected had 
	eventID with 1, 2 ,or 3

	* If you would like to compare to event name another 
	conditional logical statement you could use is 
	"['MyEventName1',
	'MyEventName2'].includes($
	dataMap.events[event._eventId].name)". This specific 
	example only triggers if the event detected has an event 
	name of either "MyEventName1" or "MyEventName2"

	* If you want to trigger on all events, you can just make 
	the conditionalLogic to "true"

	* If you want to use the detected event's self-switches 
	in the conditionalLogic, you can by just doing 
	selfswitches['Letter'] with the letter being replaced with 
	the letter you want boolean value from"

	* If you want to include the direction the event is 
	looking at, you need to include the number zero for 
	Directions

	* If you want to include the tile the event is on, you 
	need to include the number five for Directions

CHANGELOG
	v1.1.1 - Bug when using the only above or below 
	functionality which would crash the game
	v1.1.0 - Allows trigger events at the same location, as 
	well as specifying only above or below events
	v1.0.0 - Allows changing another event's self-switch 
	state via a move route command

===== v1.0.0 - Event Approach Event =====
This plugin allows the developer to define a Move Route 
to move towards another event by eventId.

Use Cases:
Using scripts inside Movement Route Command:
	1. Go to an Event's contents in which would like to 
	trigger the Movement Route
	2. Create a Set Movement Route Command
	3. Select the Event you would like to make the Direction 
	Event Switch Trigger movement
	4. Select the "Script..." option for when you want to use 
	the Direction Event Script Trigger command
	5. Use the "SirL.MPeAE.approach(parent, eventId)" with 
	parent being "this" without quotes and eventId being 
	the number which represent the event's ID
	
Using scripts inside an Event's Autonomous Movement 
Custom Route:
	1. Go to an Event's contents in which would like to 
	trigger the Movement Route
	2. In the Autonomous Movement section, verify the Type 
	is Custom
	3. Click the "Route..."
	4. Select the "Script..." option for when you want to use 
	the Direction Event Script Trigger command
	5. Use the "SirL.MPeAE.approach(parent, eventId)" with 
	parent being "this" without quotes and eventId being 
	the number which represent the event's ID

Scripts:
SirL.MPeAE.approach( parent, eventId)
	This script moves the parent event towards the event 
	with a given eventId

Parameters:
	*  parent means the game character which you want to 
	be doing the movement
	*  eventId means the number represent the event ID of 
	the event you would like the parent to move towards

Returns: Nothing

Tips:
	* parent should almost always be "this" without quotes, 
	to get the event which is moving

CHANGELOG
	v1.0.0 - Allows events to approach another event

===== v1.0.0 - Random In Line =====
This plugin allows the developer to define a Move Route 
to make an event or player walk in a random straight line 
as long as that next step is within the region and is valid.

Use Cases:
Using script inside Movement Route Command:
	1. Go to an Event's contents in which you would like to 
	trigger the Movement Route
	2. Create a Set Movement Route Command
	3. Select the Character you would like to make the 
	RandomInLine movement
	4. Select the "Script..." option for when you want to use 
	the RandomInLine commands
	5. Use the "SirL.MPRandomInLine.step(parent, 
	regionIds...)" with the parent being "this" without 
	quotes, regionIds... being the optional list of region ids 
	without '[' or ']' surrounding it for what regions the 
	event is allowed to walk in
	
Using scripts inside an Event's Autonomous Movement 
Custom Route:
	1. Opens the event in which you want to make a 
	RandomInLine movement
	2. In the Autonomous Movement section, verify the Type 
	is Custom
	3. Click the "Route..."
	4. Select the "Script..." option for when you want to use 
	the RandomInLine command
	5. Use the "SirL.MPRandomInLine.step(parent, 
	regionIds...)" with the parent being "this" without 
	quotes, regionIds... being optional a list of region ids 
	without '[' or ']' surrounding it for what regions the 
	event is allowed to walk in

Scripts:
SirL.MPRandomInLine.step( parent,regionIds)
	This script forces a game character to walk in a straight 
	line as long as they are within a given region and the 
	next step is valid

Parameters:
	*  parent means the game character which you want to 
	be doing the movement
	* regionIds means Optional - the list of region ids that 
	limits the event to specific regions when walking in 
	straight line without '[' or ']' around them

Returns: Nothing

CHANGELOG
	v1.0.0 - Allow random movement in straight line defined 
	by region Ids

===== v1.0.0 - Repeat Next =====
This plugin allows the developer to define a Move Route 
and repeat the following step for any number of 
iterations.

Use Cases:
Using script inside Movement Route Command:
	1. Go to an Event's contents in which you would like to 
	trigger the Movement Route
	2. Create a Set Movement Route Command
	3. Select the Character you would like to make the 
	RepeatNext movement
	4. Select the "Script..." option for when you want to use 
	the RepeatNext commands
	5. Use the "SirL.MPRepeatNext.move(parent, 
	iterations)" with the parent being "this" without quotes, 
	iterations being the number of times you want it to 
	repeat, 1 would mean it only does that next move once.
	6. Click the OK Button
	7. Choose the Movement Command that follows the 
	RepeatNext command, this move will be the movement 
	that gets repeated.
	
Using scripts inside an Event's Autonomous Movement 
Custom Route:
	1. Opens the event in which you want to make a 
	RepeatNext movement
	2. In the Autonomous Movement section, verify the Type 
	is Custom
	3. Click the "Route..."
	4. Select the "Script..." option for when you want to use 
	the RepeatNext command
	Use the "SirL.MPRepeatNext.move(parent, iterations)" 
	with the parent being "this" without quotes, iterations 
	being the number of times you want it to repeat, 1 
	would mean it only does that next move once.
	6. Click the OK Button
	7. Choose the Movement Command that follows the 
	RepeatNext command, this move will be the movement 
	that gets repeated.

Scripts:
SirL.MPRepeatNext.move( parent,iterations)
	This script forces the next move in the move route to be 
	repeated the number of iterations

Parameters:
	*  parent means the game character which you want to 
	be doing the movement
	* iterations means the number of times you would like 
	to move to repeat, including the one already listed.

Returns: Nothing

CHANGELOG
	v1.0.0 - Allow a movement to be repeated, so many 
	iterations

===== v1.1.0 - Event Cloner =====
This plugin allows the developer to clone an event from 
any map then overwrite aspects of the cloned event.

Use Cases:
Using plugin commands to spawn a cloned event:
	1. Click the map you would like the original event to 
	come from, record the ID number which can be found as 
	the first three digits in the center of the status bar, or 
	when you click edit on that map it will be the three 
	digits in the title bar.
	2. On that map, verify you are in Event mode
	3. Log the 3 digit number next to the event you would 
	like to clone from
	4. Go to an Event's contents in which you would like the 
	command executed
	5. Add the plugin command "Spawn Cloned Event"
	6. Define the Map Id with the number without leading 
	zeros found in the first step
	7. Define the Event Id with the number without leading 
	zeros found in step 3
	8. Clear out the Clone Overwritten Data unless you want 
	to modify the event data to be different from the 
	original event.
	9. Hit the okay button when the game executes this 
	command. It will set the event data cloned to the event 
	Id on the current map.
	
Using the script to spawn a cloned event:
	1. Click the map you would like the original event to 
	come from, record the ID number which can be found as 
	the first three digits in the center of the status bar, or 
	when you click edit on that map it will be the three 
	digits in the title bar.
	2. On that map, verify you are in Event mode
	3. Log the 3 digit number next to the event you would 
	like to clone from
	4. Go to where you can type javascript code, such as a 
	Script Event Command
	5. Use the function: 
	SirL.MPEventCloner.getEventAtId(mapId, eventId, 
	eventOverride)

Known Issues:

	* VisuMZ_1_EventsMoveCore
		Reported issues:
		- Prevent events from completely spawning onto the 
		map.
		
		Steps to work around issues:
		1. Using only one of the two plugins


Plugin Commands:
	* Spawn Cloned Event - Spawns an event with the data 
	from a cloned event

Scripts:
SirL.MPEventCloner.getMap(src)
	This script creates a promise to read a map data file and 
	return it if it can read the file

Parameters:
	* src means the map data file name within the data 
	directory

Returns: If  found map data returns the map data in a 
JSON format

SirL.MPEventCloner.getEventAtId( mapId, eventId, 
eventOverride)
	Loads the map then adds the cloned event to the map

Parameters:
	*  mapId means the number which is the id of the map 
	in the game which the original event appears on
	*  eventId means the number which is the id of the 
	original event
	*  eventOverride means the dictionary/JSON object 
	which states which keys and values should be applied to 
	the cloned event; Optional

Returns: Nothing

SirL.MPEventCloner.getNewEvent(eventId,eventOverride,
mapId,map)
	Adds a cloned event based on event id, and map to the 
	current map

Parameters:
	* eventId means the number which is the id of the 
	original event
	* eventOverride means the dictionary/JSON object 
	which states which keys and values should be applied to 
	the cloned event
	* mapId means the number which is the id of the map 
	in the game which the original event appears on
	* map means the dictionary/JSON object that 
	represents the map which the original event appears on

Returns: Nothing

Tips:
	* If id already exists, it will overwrite the event with the 
	new one

	* Events will save, however transferring maps will cause 
	spawned events to despawn

	* Example of event Override dictionary/JSON object: 
	{"_eventId":1000, "_x":2, "_y":18, "_realX":3, 
	"_realY":18}
	This will change the eventId and its location in the 
	gameMap array to 1000, set the event real position at 
	(3,18) with a slide to position (2,18)

	* All event properties can be adjusted. In the console, 
	you can type "$gameMap.events()[0]" to get a listing of 
	all the potential fields you could change

Core functionality that this plugin works with:
	* DataManager.loadMapData
	* Scene_Map.prototype.fadeOutForTransfer

CHANGELOG
	v1.1.0 - Added Plugin Command
	v1.0.1 - Null events were causing game crash on load
	v1.0.0 - Allows you to clone an event with a specific id 
	with script call only

===== v1.0.1 - Restore Event Commands =====
This plugin allows the developer to restore an event that 
was erased via the erase command without leaving the 
map and returning.

Use Cases:
Using plugin command to restore an erase event by Id:
	1. Go to an Event's contents in which you would like the 
	command executed
	2. Add the plugin command "Restore Command By Id"
	3. Define the Event Id you would like to have restored
	4. Hit the okay button when the game executes this 
	command it will restore the event at that Event Id from 
	the erased state
	
Using plugin command to restore an erase event by 
Variable:
	1. Go to an Event's contents in which you would like the 
	command executed
	2. Add the plugin command "Restore Command By 
	Variable"
	3. Define the Variable Id by selecting the variable, by 
	choosing none it will always restore the event which this 
	command is being executed in
	4. Hit the okay button when the game executes this 
	command it will restore the event at that Event Id was 
	stored in the Variable Id from the erased state
	
Using script such as in Script Command:
	1. Go to where you can type JavaScript code, such as an 
	Event's contents Script Command.
	2. Use the script function 
	"SirL.MPRestoreEventCommands.restoreEvent(event)" 
	with the event parameter being an event object that you 
	want to restore.

Plugin Commands:
	* Restore Command By Id - Restore an erased event by 
	Id
	* Restore Command By Variable - Restore an erased 
	event by variable

Scripts:
SirL.MPRestoreEventCommands.restoreEvent( event)
	This script restores the erased state for an event

Parameters:
	*  event means the event object which is believed to be 
	erased

Returns: Nothing

Tips:
	* An erased event can restore itself as long as it within 
	the page which erased it

	* If attempt to restore on event that isn't erased, 
	nothing will happen

CHANGELOG
	v1.0.1 - Utilize plugin command optimization with 
	interpreter, This event (0) case works now
	v1.0.0 - Initial creation of Restore commands

===== v1.2.0 - Tile Event =====
This plugin allows developers to make map tiles call 
common events based on three actions; standing on the 
tile, being beside the tile, or pressing the action button. 
This plugin makes tile-specific events easier to manage.

Use Cases:
Creating tile events:
	1. Go to the map that has the tile you would like to tie 
	to a common event
	2. Log the Map Id, X, and Y for that tile location
	3. Open this plugin from your plugin manager
	4. Open the "Links" Parameter
	5. Click a new line in that parameter
	6. Click the "List of Tiles" option
	7. Click a new line in that option
	8. Fill out the Map Id, X, and Y values that you logged 
	from step 2
	9. Determine the trigger; Button Call, Button On Call, 
	Button By Calls, Stand On Calls, Stand On Only Calls, 
	Stand By Calls and Stand By Only Calls
	10. Click the trigger you want
	11. Click a new line in that action
	12. Select the common event you would like to have run 
	when that action happens
	13. When that trigger occurs with a tile that matches 
	those layers, the common events will execute in order.

Scripts:
SirL.MPTileEvent.tileId( x, y, z, map)
	gets the tile id value for a given layer (z) of a tile by x 
	and y location on a map

Parameters:
	*  x means the X coordinates of the tile location
	*  y means the Y coordinates of the tile location
	*  z means the tile layer number; 0,1,2,3
	*  map means the map object which has that tile

Returns: The number value of the tile id or 0 if the tile 
doesn't exist on the map

SirL.MPTileEvent.layeredTiles( x, y, map)
	gets the tile id values for all the layers of a tile by x and 
	y location on a map

Parameters:
	*  x means the X coordinates of the tile location
	*  y means the Y coordinates of the tile location
	*  map means the map object which has that tile

Returns: The array of numbers of tile ids or zeros if the 
tile doesn't exist on the map

SirL.MPTileEvent.getMap(src)
	gets the map data from a source file (src) via an async 
	load

Parameters:
	* src means the map file name as a string

Returns: The promise to load the map data

SirL.MPTileEvent.checkTileEvent(wasMoving)
	triggers all the tile events that the player is facing or is 
	on

Parameters:
	* wasMoving means the boolean flag about if the player 
	was moving

Returns: Nothing

SirL.MPTileEvent.triggerEvent( wasMoving, tiles, loc)
	triggers all the tiles in a list if the player is facing or is 
	on that tile

Parameters:
	*  wasMoving means the boolean flag about if the player 
	was just moving
	*  tiles means the list of tile events available
	*  loc means the list of locations the player is and where 
	they are facing

Returns: Nothing

Core functionality that this plugin works with:
	* Game_System.prototype.initialize
	* Game_Player.prototype.updateNonmoving
	* Scene_Map.prototype.start
	* Game_CharacterBase.prototype.updateJump

CHANGELOG
	v1.2.0 - Made were jumps, transfers, and loading will 
	trigger on-tile or by-tile events
	v1.1.2 - Fixed bug to not break when it cannot find a 
	Tile Event nearby, and added only cases for Button, 
	Stand On, and Stand By.
	v1.0.0 - Fixed bug were if the tile you were standing on 
	had potential Tile Event, then it wouldn't check nearby 
	ones
	v0.0.3 - Added default value plugin parameters to 
	prevent empty data bug
	v0.0.2 - Left some testing code in, oops
	v0.0.1 - Allow tile events for stand on, by, and button 
	pressed

===== v1.1.1 - Enemy Escape Revamp =====
This plugin allows the developer to enable enemies to 
have escape percentages as the party does. As well as 
providing alternative rewards if the enemy escapes vs 
dies in battle.

Use Cases:
Set up for enemy escaping:
	1. Go to the plugin parameters and modify them to 
	meet your desire on how enemy escape attempts should 
	be displayed
	2. Create an enemy that has a skill or condition where 
	they escape from the battle
	3. Define within the enemy note tags if you want unique 
	escape rewards; exp, gold, or drops.
	4. Done when that enemy escapes from the battle. It 
	will be handled with an escaped percentage and could 
	drop unique rewards.

Scripts:
SirL.MPEnemyEscapeRevamp.escapedMembers(troop)
	Get all the members that escaped from a troop in battle

Parameters:
	* troop means the troop object from a given battle

Returns: An array of all the members who have escaped 
from battle using this plugin

SirL.MPEnemyEscapeRevamp.isEscaped(enemy)
	Get the escaped value from an enemy

Parameters:
	* enemy means the enemy object you would like to 
	know the current status of if they have escaped or not

Returns: True if they have escaped and false if they 
haven't

SirL.MPEnemyEscapeRevamp.
makeDropItemsOnEscape(enemy)
	Get the items, weapons, armors that are going to drop 
	during this escape by calculating the percentages for 
	that enemy given

Parameters:
	* enemy means the enemy object that you are getting 
	the dropped items, weapons, armors from

Returns: An array of all the items that are dropped from 
that enemy

Note Tags: 


Note tags for Enemies:
	* Enemy Escape Experience Reward
<SirL.escapeExp: AMOUNT>
	This note tag will define the amount of experience the 
	enemy will reward upon a successful escape. With 
	AMOUNT being the number value of that amount. You 
	can define the AMOUNT using any JavaScript function as 
	well.
	Example uses for note tag:
	 <SirL.escapeExp:500> which means when the enemy 
	escapes the player will be reward with 500 experience 
	points when the battle ends.

	 <SirL.escapeExp:$gameVariables.value(1)> which 
	means when the enemy escapes the player will be 
	reward with experience points equal to the value stored 
	in game variable 1 when the battle ends.

	 <SirL.escapeExp:$gameParty.highestLevel()> which 
	means when the enemy escapes the player will be 
	reward with experience points equal to the highest level 
	in the player party when the battle ends.

	 <SirL.escapeExp:Math.floor(Math.random() * 51)> 
	which means when the enemy escapes the player will be 
	reward with experience points equal to a random value 
	between 0 and 50 when the battle ends.

	* Enemy Escape Gold Reward
<SirL.escapeGold: AMOUNT>
	This note tag will define the amount of gold the enemy 
	will reward upon a successful escape. With AMOUNT 
	being the number value of that amount. You can define 
	the AMOUNT using a JavaScript function as well.
	Example uses for note tag:
	 <SirL.escapeGold:500> which means when the enemy 
	escapes the player will be reward with 500 gold when 
	the battle ends.

	 <SirL.escapeGold:$gameVariables.value(1)> which 
	means when the enemy escapes the player will be 
	reward with gold equal to the value stored in game 
	variable 1 when the battle ends.

	 <SirL.escapeGold:$gameParty.highestLevel()> which 
	means when the enemy escapes the player will be 
	reward with gold equal to the highest level in the player 
	party when the battle ends.

	 <SirL.escapeGold:Math.floor(Math.random() * 51)> 
	which means when the enemy escapes the player will be 
	reward with gold equal to a random value between 0 
	and 50 when the battle ends.

	* Enemy Escape Drop Rewards
<SirL.escapeDrops:[{"type":"TYPE","probability":PROB,
"id":INDEX}]>
	This note tag will define the drops the enemy will leave 
	upon a successful escape. You can include as many 
	drops as you want with commas. TYPE is defining the 
	type of drop; "Item", "Weapon", "Armor". PROB is the 
	number of likelihood such as 1/PROB. And INDEX is the 
	index that can be found in the database.
	Example uses for note tag:
	 
	<SirL.escapeDrops:[{"type":"Item","probability":10,
	"id":7}]> which means with default RMMZ game, when 
	the enemy escapes the player will have a 1/10 chance of 
	receiving a potion

	 
	<SirL.escapeDrops:[{"type":"Weapon","probability":1,
	"id":1}, {"type":"Armor","probability":2,"id":2}]> which 
	means when the enemy escapes the player will always 
	receive the Weapon in index 1 of the database and a 
	50% (1/2) chance to receive the Armor in index 2 of the 
	database

Core functionality that this plugin works with:
	* BattleManager.makeEscapeRatio
	* Game_Battler.prototype.escape
	* Game_BattlerBase.prototype.initMembers
	* Game_Troop.prototype.expTotal
	* Game_Troop.prototype.goldTotal
	* Game_Troop.prototype.makeDropItems

CHANGELOG
	v1.1.1 - Typo in the description on escapeDrop note tag
	v1.1.0 - Enable Escape Exp & Gold to be javascript that 
	results in a number
	v1.0.0 - Allow enemies to fail at escaping with drops 
	being fixed values

===== v1.0.0 - Enemy Stats Formula =====
This plugin allows the developer to dynamically define 
enemy parameters including experience and reward, by 
defining them like damage formulas.

Use Cases:
Using Note tags to define the parameters, experience, or 
gold:
	1. Go to the Enemies section of the database
	2. Find the enemy you want to define parameters, 
	experience, and/or gold using damage formulas like 
	equations
	3. Find the Note tag that you would like to use to define 
	the value you want
	4. Fill in the note tag you want to define, one note tag 
	at a time
	5. Now the enemy will use those note tags upon being 
	called into battle

Scripts:
SirL.MPEnemyStatsFormula.evalParamFormula( enemy, 
formula)
	evaluator for the javascript from the note tags

Parameters:
	*  enemy means the Game_Enemy object for the enemy 
	(e) parameter
	*  formula means the string value in the note tag or a 
	string representation of javascript

Returns: The value or zero if it had an error or was not a 
number

Note Tags: 


Note tags for Enemies:
	* Max HP Param
<SirL.mhp: FORMULA>
	This note tag will define the enemy's Max HP using a 
	FORMULA similar to the damage formula. Any value 
	which is less than 1 will default to 1 instead.

This note tag is using aliasing to allow ease of use. Here 
is the Key:
	"e" means the enemy to which this note tag is applied.

	Examples include but are not limited to:
	"e.paramBase(2)" means this enemy's attack stat from 
	the database, not the equation in a note tag
					
Enemy Parameters are stored in the e.paramBase(id) 
starting at 0 and ending at 7.
	0 = Max HP (MHP)
	1 = Max MP (MMP)
	2 = Attack (ATK)
	3 = Magic Attack (MAT)
	4 = Defense (DEF)
	5 = Magic Defense (MDF)
	6 = Agility (AGI)
	7 = Luck (LUK)
	"e.index()" means this enemy's index in battle, starting 
	at 0

	"v" means the game variables very similar to how 
	damage formulas work.

	Examples include but are not limited to:
	"v[1]" means the first game variable value

	"t" means the troop data for the battle which called this 
	enemy into it.

	Examples include but are not limited to:
	"t.members().length" means the total number of 
	members in that troop
	"t.goldRate()" means if the party has gold double rate 
	trait then it returns 2 otherwise 1

	"p" means the player's party can be used to get various 
	properties of the party.

	Examples include but are not limited to:
	"p.steps()" means the number of steps the party has 
	taken in-game
	"p.size()" means the number of party members in the 
	party

	Example uses for note tag:
	 <SirL.mhp: e.paramBase(4)> which means the Max HP 
	is going to be the same value as the defense that was 
	defined in the database entry for this enemy

	 <SirL.mhp: e.paramBase(0) - v[1]> which means the 
	Max HP is going to be the Max HP as defined in the 
	database entry for this enemy minus the value stored in 
	variable 1

	 <SirL.mhp: 100 + t.members().length> which means 
	the Max HP will be 100 plus the number of troop 
	members, so if there were four enemies, then it would 
	be 104 max HP

	 <SirL.mhp: p.highestLevel() * 50> which means the 
	Max HP will be the party highest level multiplied by 50, 
	so if the party highest level is 20 then the enemy max 
	HP will be 1000

	 <SirL.mhp: Math.round(e.paramBase(0) / 
	t.members().length)> which means the Max HP is going 
	to be the max HP define in the database divided by the 
	total number of enemies in the troop rounded to the 
	nearest whole value

	* Max MP Param
<SirL.mmp: FORMULA>
	This note tag will define the enemy's Max MP using a 
	FORMULA similar to the damage formula. Any value 
	which is less than 0 will default to 0 instead.

This note tag is using aliasing to allow ease of use. Here 
is the Key:
	"e" means the enemy to which this note tag is applied.

	Examples include but are not limited to:
	"e.paramBase(2)" means this enemy's attack stat from 
	the database, not the equation in a note tag
					
Enemy Parameters are stored in the e.paramBase(id) 
starting at 0 and ending at 7.
	0 = Max HP (MHP)
	1 = Max MP (MMP)
	2 = Attack (ATK)
	3 = Magic Attack (MAT)
	4 = Defense (DEF)
	5 = Magic Defense (MDF)
	6 = Agility (AGI)
	7 = Luck (LUK)
	"e.index()" means this enemy's index in battle, starting 
	at 0

	"v" means the game variables very similar to how 
	damage formulas work.

	Examples include but are not limited to:
	"v[1]" means the first game variable value

	"t" means the troop data for the battle which called this 
	enemy into it.

	Examples include but are not limited to:
	"t.members().length" means the total number of 
	members in that troop
	"t.goldRate()" means if the party has gold double rate 
	trait then it returns 2 otherwise 1

	"p" means the player's party can be used to get various 
	properties of the party.

	Examples include but are not limited to:
	"p.steps()" means the number of steps the party has 
	taken in-game
	"p.size()" means the number of party members in the 
	party

	Example uses for note tag:
	 <SirL.mmp: e.paramBase(4)> which means the Max 
	MP is going to be the same value as the defense that 
	was defined in the database entry for this enemy

	 <SirL.mmp: e.paramBase(0) - v[1]> which means the 
	Max MP is going to be the Max HP as defined in the 
	database entry for this enemy minus the value stored in 
	variable 1

	 <SirL.mmp: 100 + t.members().length> which means 
	the Max MP will be 100 plus the number of troop 
	members, so if there were four enemies, then it would 
	be 104 max MP

	 <SirL.mmp: p.highestLevel() * 50> which means the 
	Max MP will be the party highest level multiplied by 50, 
	so if the party highest level is 20 then the enemy max 
	MP will be 1000

	 <SirL.mmp: Math.round(e.paramBase(0) / 
	t.members().length)> which means the Max MP is going 
	to be the max HP define in the database divided by the 
	total number of enemies in the troop rounded to the 
	nearest whole value

	* Attack Param
<SirL.atk: FORMULA>
	This note tag will define the enemy's Attack using a 
	FORMULA similar to the damage formula. Any value 
	which is less than 0 will default to 0 instead.

This note tag is using aliasing to allow ease of use. Here 
is the Key:
	"e" means the enemy to which this note tag is applied.

	Examples include but are not limited to:
	"e.paramBase(2)" means this enemy's attack stat from 
	the database, not the equation in a note tag
					
Enemy Parameters are stored in the e.paramBase(id) 
starting at 0 and ending at 7.
	0 = Max HP (MHP)
	1 = Max MP (MMP)
	2 = Attack (ATK)
	3 = Magic Attack (MAT)
	4 = Defense (DEF)
	5 = Magic Defense (MDF)
	6 = Agility (AGI)
	7 = Luck (LUK)
	"e.index()" means this enemy's index in battle, starting 
	at 0

	"v" means the game variables very similar to how 
	damage formulas work.

	Examples include but are not limited to:
	"v[1]" means the first game variable value

	"t" means the troop data for the battle which called this 
	enemy into it.

	Examples include but are not limited to:
	"t.members().length" means the total number of 
	members in that troop
	"t.goldRate()" means if the party has gold double rate 
	trait then it returns 2 otherwise 1

	"p" means the player's party can be used to get various 
	properties of the party.

	Examples include but are not limited to:
	"p.steps()" means the number of steps the party has 
	taken in-game
	"p.size()" means the number of party members in the 
	party

	Example uses for note tag:
	 <SirL.atk: e.paramBase(4)> which means the Attack is 
	going to be the same value as the defense that was 
	defined in the database entry for this enemy

	 <SirL.atk: e.paramBase(0) - v[1]> which means the 
	Attack is going to be the Max HP as defined in the 
	database entry for this enemy minus the value stored in 
	variable 1

	 <SirL.atk: 100 + t.members().length> which means 
	the Attack will be 100 plus the number of troop 
	members, so if there were four enemies, then it would 
	be 104 attack

	 <SirL.atk: p.highestLevel() * 50> which means the 
	Attack will be the party's highest level multiplied by 50, 
	so if the party's highest level is 20 then the enemy 
	attack will be 1000

	 <SirL.atk: Math.round(e.paramBase(0) / 
	t.members().length)> which means the Attack is going 
	to be the max HP define in the database divided by the 
	total number of enemies in the troop rounded to the 
	nearest whole value

	* Defense Param
<SirL.def: FORMULA>
	This note tag will define the enemy's Defense using a 
	FORMULA similar to the damage formula. Any value 
	which is less than 0 will default to 0 instead.

This note tag is using aliasing to allow ease of use. Here 
is the Key:
	"e" means the enemy to which this note tag is applied.

	Examples include but are not limited to:
	"e.paramBase(2)" means this enemy's attack stat from 
	the database, not the equation in a note tag
					
Enemy Parameters are stored in the e.paramBase(id) 
starting at 0 and ending at 7.
	0 = Max HP (MHP)
	1 = Max MP (MMP)
	2 = Attack (ATK)
	3 = Magic Attack (MAT)
	4 = Defense (DEF)
	5 = Magic Defense (MDF)
	6 = Agility (AGI)
	7 = Luck (LUK)
	"e.index()" means this enemy's index in battle, starting 
	at 0

	"v" means the game variables very similar to how 
	damage formulas work.

	Examples include but are not limited to:
	"v[1]" means the first game variable value

	"t" means the troop data for the battle which called this 
	enemy into it.

	Examples include but are not limited to:
	"t.members().length" means the total number of 
	members in that troop
	"t.goldRate()" means if the party has gold double rate 
	trait then it returns 2 otherwise 1

	"p" means the player's party can be used to get various 
	properties of the party.

	Examples include but are not limited to:
	"p.steps()" means the number of steps the party has 
	taken in-game
	"p.size()" means the number of party members in the 
	party

	Example uses for note tag:
	 <SirL.def: e.paramBase(4)> which means the Defense 
	is going to be the same value as the defense that was 
	defined in the database entry for this enemy

	 <SirL.def: e.paramBase(0) - v[1]> which means the 
	Defense is going to be the Max HP as defined in the 
	database entry for this enemy minus the value stored in 
	variable 1

	 <SirL.def: 100 + t.members().length> which means 
	the Defense will be 100 plus the number of troop 
	members, so if there were four enemies, then it would 
	be 104 defense

	 <SirL.def: p.highestLevel() * 50> which means the 
	Defense will be the party highest level multiplied by 50, 
	so if the party highest level is 20 then the enemy 
	defense will be 1000

	 <SirL.def: Math.round(e.paramBase(0) / 
	t.members().length)> which means the Defense is 
	going to be the max HP define in the database divided 
	by the total number of enemies in the troop rounded to 
	the nearest whole value

	* Magic Attack Param
<SirL.mat: FORMULA>
	This note tag will define the enemy's Magic Attack using 
	a FORMULA similar to the damage formula. Any value 
	which is less than 0 will default to 0 instead.

This note tag is using aliasing to allow ease of use. Here 
is the Key:
	"e" means the enemy to which this note tag is applied.

	Examples include but are not limited to:
	"e.paramBase(2)" means this enemy's attack stat from 
	the database, not the equation in a note tag
					
Enemy Parameters are stored in the e.paramBase(id) 
starting at 0 and ending at 7.
	0 = Max HP (MHP)
	1 = Max MP (MMP)
	2 = Attack (ATK)
	3 = Magic Attack (MAT)
	4 = Defense (DEF)
	5 = Magic Defense (MDF)
	6 = Agility (AGI)
	7 = Luck (LUK)
	"e.index()" means this enemy's index in battle, starting 
	at 0

	"v" means the game variables very similar to how 
	damage formulas work.

	Examples include but are not limited to:
	"v[1]" means the first game variable value

	"t" means the troop data for the battle which called this 
	enemy into it.

	Examples include but are not limited to:
	"t.members().length" means the total number of 
	members in that troop
	"t.goldRate()" means if the party has gold double rate 
	trait then it returns 2 otherwise 1

	"p" means the player's party can be used to get various 
	properties of the party.

	Examples include but are not limited to:
	"p.steps()" means the number of steps the party has 
	taken in-game
	"p.size()" means the number of party members in the 
	party

	Example uses for note tag:
	 <SirL.mat: e.paramBase(4)> which means the Magic 
	Attack is going to be the same value as the defense that 
	was defined in the database entry for this enemy

	 <SirL.mat: e.paramBase(0) - v[1]> which means the 
	Magic Attack is going to be the Max HP as defined in the 
	database entry for this enemy minus the value stored in 
	variable 1

	 <SirL.mat: 100 + t.members().length> which means 
	the Magic Attack will be 100 plus the number of troop 
	members, so if there were four enemies, then it would 
	be 104 magic attack

	 <SirL.mat: p.highestLevel() * 50> which means the 
	Magic Attack will be the party highest level multiplied by 
	50, so if the party highest level is 20 then the enemy 
	magic attack will be 1000

	 <SirL.mat: Math.round(e.paramBase(0) / 
	t.members().length)> which means the Magic Attack is 
	going to be the max HP define in the database divided 
	by the total number of enemies in the troop rounded to 
	the nearest whole value

	* Magic Defense Param
<SirL.mdf: FORMULA>
	This note tag will define the enemy's Magic Defense 
	using a FORMULA similar to the damage formula. Any 
	value which is less than 0 will default to 0 instead.

This note tag is using aliasing to allow ease of use. Here 
is the Key:
	"e" means the enemy to which this note tag is applied.

	Examples include but are not limited to:
	"e.paramBase(2)" means this enemy's attack stat from 
	the database, not the equation in a note tag
					
Enemy Parameters are stored in the e.paramBase(id) 
starting at 0 and ending at 7.
	0 = Max HP (MHP)
	1 = Max MP (MMP)
	2 = Attack (ATK)
	3 = Magic Attack (MAT)
	4 = Defense (DEF)
	5 = Magic Defense (MDF)
	6 = Agility (AGI)
	7 = Luck (LUK)
	"e.index()" means this enemy's index in battle, starting 
	at 0

	"v" means the game variables very similar to how 
	damage formulas work.

	Examples include but are not limited to:
	"v[1]" means the first game variable value

	"t" means the troop data for the battle which called this 
	enemy into it.

	Examples include but are not limited to:
	"t.members().length" means the total number of 
	members in that troop
	"t.goldRate()" means if the party has gold double rate 
	trait then it returns 2 otherwise 1

	"p" means the player's party can be used to get various 
	properties of the party.

	Examples include but are not limited to:
	"p.steps()" means the number of steps the party has 
	taken in-game
	"p.size()" means the number of party members in the 
	party

	Example uses for note tag:
	 <SirL.mdf: e.paramBase(4)> which means the Magic 
	Defense is going to be the same value as the defense 
	that was defined in the database entry for this enemy

	 <SirL.mdf: e.paramBase(0) - v[1]> which means the 
	Magic Defense is going to be the Max HP as defined in 
	the database entry for this enemy minus the value 
	stored in variable 1

	 <SirL.mdf: 100 + t.members().length> which means 
	the Magic Defense will be 100 plus the number of troop 
	members, so if there were four enemies, then it would 
	be 104 magic defense

	 <SirL.mdf: p.highestLevel() * 50> which means the 
	Magic Defense will be the party highest level multiplied 
	by 50, so if the party highest level is 20 then the enemy 
	magic defense will be 1000

	 <SirL.mdf: Math.round(e.paramBase(0) / 
	t.members().length)> which means the Magic Defense 
	is going to be the max HP define in the database divided 
	by the total number of enemies in the troop rounded to 
	the nearest whole value

	* Agility Param
<SirL.agi: FORMULA>
	This note tag will define the enemy's Agility using a 
	FORMULA similar to the damage formula. Any value 
	which is less than 0 will default to 0 instead.

This note tag is using aliasing to allow ease of use. Here 
is the Key:
	"e" means the enemy to which this note tag is applied.

	Examples include but are not limited to:
	"e.paramBase(2)" means this enemy's attack stat from 
	the database, not the equation in a note tag
					
Enemy Parameters are stored in the e.paramBase(id) 
starting at 0 and ending at 7.
	0 = Max HP (MHP)
	1 = Max MP (MMP)
	2 = Attack (ATK)
	3 = Magic Attack (MAT)
	4 = Defense (DEF)
	5 = Magic Defense (MDF)
	6 = Agility (AGI)
	7 = Luck (LUK)
	"e.index()" means this enemy's index in battle, starting 
	at 0

	"v" means the game variables very similar to how 
	damage formulas work.

	Examples include but are not limited to:
	"v[1]" means the first game variable value

	"t" means the troop data for the battle which called this 
	enemy into it.

	Examples include but are not limited to:
	"t.members().length" means the total number of 
	members in that troop
	"t.goldRate()" means if the party has gold double rate 
	trait then it returns 2 otherwise 1

	"p" means the player's party can be used to get various 
	properties of the party.

	Examples include but are not limited to:
	"p.steps()" means the number of steps the party has 
	taken in-game
	"p.size()" means the number of party members in the 
	party

	Example uses for note tag:
	 <SirL.agi: e.paramBase(4)> which means the Agility is 
	going to be the same value as the defense that was 
	defined in the database entry for this enemy

	 <SirL.agi: e.paramBase(0) - v[1]> which means the 
	Agility is going to be the Max HP as defined in the 
	database entry for this enemy minus the value stored in 
	variable 1

	 <SirL.agi: 100 + t.members().length> which means 
	the Agility will be 100 plus the number of troop 
	members, so if there were four enemies, then it would 
	be 104 agility

	 <SirL.agi: p.highestLevel() * 50> which means the 
	Agility will be the party highest level multiplied by 50, so 
	if the party highest level is 20 then the enemy agility 
	will be 1000

	 <SirL.agi: Math.round(e.paramBase(0) / 
	t.members().length)> which means the Agility is going 
	to be the max HP define in the database divided by the 
	total number of enemies in the troop rounded to the 
	nearest whole value

	* Luck Param
<SirL.luk: FORMULA>
	This note tag will define the enemy's Luck using a 
	FORMULA similar to the damage formula. Any value 
	which is less than 0 will default to 0 instead.

This note tag is using aliasing to allow ease of use. Here 
is the Key:
	"e" means the enemy to which this note tag is applied.

	Examples include but are not limited to:
	"e.paramBase(2)" means this enemy's attack stat from 
	the database, not the equation in a note tag
					
Enemy Parameters are stored in the e.paramBase(id) 
starting at 0 and ending at 7.
	0 = Max HP (MHP)
	1 = Max MP (MMP)
	2 = Attack (ATK)
	3 = Magic Attack (MAT)
	4 = Defense (DEF)
	5 = Magic Defense (MDF)
	6 = Agility (AGI)
	7 = Luck (LUK)
	"e.index()" means this enemy's index in battle, starting 
	at 0

	"v" means the game variables very similar to how 
	damage formulas work.

	Examples include but are not limited to:
	"v[1]" means the first game variable value

	"t" means the troop data for the battle which called this 
	enemy into it.

	Examples include but are not limited to:
	"t.members().length" means the total number of 
	members in that troop
	"t.goldRate()" means if the party has gold double rate 
	trait then it returns 2 otherwise 1

	"p" means the player's party can be used to get various 
	properties of the party.

	Examples include but are not limited to:
	"p.steps()" means the number of steps the party has 
	taken in-game
	"p.size()" means the number of party members in the 
	party

	Example uses for note tag:
	 <SirL.luk: e.paramBase(4)> which means the Luck is 
	going to be the same value as the defense that was 
	defined in the database entry for this enemy

	 <SirL.luk: e.paramBase(0) - v[1]> which means the 
	Luck is going to be the Max HP as defined in the 
	database entry for this enemy minus the value stored in 
	variable 1

	 <SirL.luk: 100 + t.members().length> which means 
	the Luck will be 100 plus the number of troop members, 
	so if there were four enemies, then it would be 104 luck

	 <SirL.luk: p.highestLevel() * 50> which means the 
	Luck will be the party highest level multiplied by 50, so 
	if the party highest level is 20 then the enemy luck will 
	be 1000

	 <SirL.luk: Math.round(e.paramBase(0) / 
	t.members().length)> which means the Luck is going to 
	be the max HP define in the database divided by the 
	total number of enemies in the troop rounded to the 
	nearest whole value

	* Experience Param
<SirL.exp: FORMULA>
	This note tag will define the enemy's experience that is 
	reward upon enemy death using a FORMULA similar to 
	the damage formula. Any value which is less than 0 will 
	default to 0 instead.

This note tag is using aliasing to allow ease of use. Here 
is the Key:
	"e" means the enemy to which this note tag is applied.

	Examples include but are not limited to:
	"e.paramBase(2)" means this enemy's attack stat from 
	the database, not the equation in a note tag
					
Enemy Parameters are stored in the e.paramBase(id) 
starting at 0 and ending at 7.
	0 = Max HP (MHP)
	1 = Max MP (MMP)
	2 = Attack (ATK)
	3 = Magic Attack (MAT)
	4 = Defense (DEF)
	5 = Magic Defense (MDF)
	6 = Agility (AGI)
	7 = Luck (LUK)
	"e.index()" means this enemy's index in battle, starting 
	at 0

	"v" means the game variables very similar to how 
	damage formulas work.

	Examples include but are not limited to:
	"v[1]" means the first game variable value

	"t" means the troop data for the battle which called this 
	enemy into it.

	Examples include but are not limited to:
	"t.members().length" means the total number of 
	members in that troop
	"t.goldRate()" means if the party has gold double rate 
	trait then it returns 2 otherwise 1

	"p" means the player's party can be used to get various 
	properties of the party.

	Examples include but are not limited to:
	"p.steps()" means the number of steps the party has 
	taken in-game
	"p.size()" means the number of party members in the 
	party

	Example uses for note tag:
	 <SirL.exp: e.paramBase(4)> which means the 
	Experience is going to be the same value as the defense 
	that was defined in the database entry for this enemy

	 <SirL.exp: e.paramBase(0) - v[1]> which means the 
	Experience is going to be the Max HP as defined in the 
	database entry for this enemy minus the value stored in 
	variable 1

	 <SirL.exp: 100 + t.members().length> which means 
	the Experience will be 100 plus the number of troop 
	members, so if there were four enemies, then it would 
	be 104 experience

	 <SirL.exp: p.highestLevel() * 50> which means the 
	Experience will be the party highest level multiplied by 
	50, so if the party highest level is 20 then the enemy 
	experience will be 1000

	 <SirL.exp: Math.round(e.paramBase(0) / 
	t.members().length)> which means the Experience is 
	going to be the max HP define in the database divided 
	by the total number of enemies in the troop rounded to 
	the nearest whole value

	* Gold Param
<SirL.gold: FORMULA>
	This note tag will define the enemy's gold that rewards 
	upon enemy death using a FORMULA similar to the 
	damage formula. Any value which is less than 0 will 
	default to 0 instead.

This note tag is using aliasing to allow ease of use. Here 
is the Key:
	"e" means the enemy to which this note tag is applied.

	Examples include but are not limited to:
	"e.paramBase(2)" means this enemy's attack stat from 
	the database, not the equation in a note tag
					
Enemy Parameters are stored in the e.paramBase(id) 
starting at 0 and ending at 7.
	0 = Max HP (MHP)
	1 = Max MP (MMP)
	2 = Attack (ATK)
	3 = Magic Attack (MAT)
	4 = Defense (DEF)
	5 = Magic Defense (MDF)
	6 = Agility (AGI)
	7 = Luck (LUK)
	"e.index()" means this enemy's index in battle, starting 
	at 0

	"v" means the game variables very similar to how 
	damage formulas work.

	Examples include but are not limited to:
	"v[1]" means the first game variable value

	"t" means the troop data for the battle which called this 
	enemy into it.

	Examples include but are not limited to:
	"t.members().length" means the total number of 
	members in that troop
	"t.goldRate()" means if the party has gold double rate 
	trait then it returns 2 otherwise 1

	"p" means the player's party can be used to get various 
	properties of the party.

	Examples include but are not limited to:
	"p.steps()" means the number of steps the party has 
	taken in-game
	"p.size()" means the number of party members in the 
	party

	Example uses for note tag:
	 <SirL.gold: e.paramBase(4)> which means the Gold is 
	going to be the same value as the defense that was 
	defined in the database entry for this enemy

	 <SirL.gold: e.paramBase(0) - v[1]> which means the 
	Luck is going to be the Max HP as defined in the 
	database entry for this enemy minus the value stored in 
	variable 1

	 <SirL.gold: 100 + t.members().length> which means 
	the Gold will be 100 plus the number of troop members, 
	so if there were four enemies, then it would be 104 gold

	 <SirL.gold: p.highestLevel() * 50> which means the 
	Gold will be the party highest level multiplied by 50, so 
	if the party highest level is 20 then the enemy gold will 
	be 1000

	 <SirL.gold: Math.round(e.paramBase(0) / 
	t.members().length)> which means the Gold is going to 
	be the max HP define in the database divided by the 
	total number of enemies in the troop rounded to the 
	nearest whole value

Tips:
	* When defining a parameter if you use in your formula 
	e. that parameter you will create an infinite loop. 
	Recommendation using e.paramBase(id) with id being a 
	number starting at 0 and ending 7. The order being Max 
	HP (mhp), Max MP (mmp), Attack (atk), Defense (def),  
	Magic Attack (mat), Magic Defense (mdf), Agility (agi) 
	and Luck (luk). 

	* When defining gold or experience it will not cause an 
	infinite loop, but to properly reference the value in the 
	database you will do e.gold() or e.exp()

Core functionality that this plugin works with:
	* Game_Enemy.prototype.paramBase
	* Game_Enemy.prototype.exp
	* Game_Enemy.prototype.gold

CHANGELOG
	v1.0.0 - The Enemy Params and Rewards can be defined 
	with formulas in their note tags

===== v1.0.1 - Item Cost Formula =====
This plugin allows the developer to dynamically define 
the price of items, weapons, and armors for both buying 
and selling independently. These prices are defined using 
similar damage formulas.

Use Cases:
Using Note tags to define the buying price:
	1. Go to either the Items, Weapons, and Armors section 
	in your database
	2. Find the item, weapon, or armor you want to define 
	the price using a damage formula like an equation
	3. Using the Define Item Price note tag 
	<SirL.setItemPrice: FORMULA> to define the item price
	4. When the player is buying the item it will determine 
	its value from the formula
	
Using Note tags to define the selling price: (selling is 
how much you will get when giving a shop an item)
	1. Go to either the Items, Weapons, and Armors section 
	in your database
	2. Find the item, weapon, or armor you want to define 
	the price using a damage formula like an equation
	3. Using the Define Item Sell Value note tag 
	<SirL.setItemSellValue: FORMULA> to define the item 
	price
	4. When the player sells the item it will determine its 
	value from the formula

Note Tags: 


Note tags for Items:
	* Define Item Price
<SirL.setItemPrice: FORMULA>
	This note tag will define the item, weapon, or armor 
	buying price using a FORMULA similar to the damage 
	formula. 

This note tag is using aliasing to allow ease of use. Here 
is the Key:
	"i" means the item to which this note tag is applied. Can 
	be used to get various item-specific values.

	Examples include but are not limited to:
	"i.price" means this item's price traditionally defined in 
	the database
	"i.name" means this item's name

	"p" means the player's party can be used to get various 
	properties of the party.

	Examples include but are not limited to:
	"p.steps()" means the number of steps the party has 
	taken in-game
	"p.size()" means the number of party members in the 
	party

	"v" means the game variables very similar to how 
	damage formulas work.

	Examples include but are not limited to:
	"v[1]" means the first game variable value

	Example uses for note tag:
	 <SirL.setItemPrice: i.name.length> which means the 
	item buy price is the number of characters in the name 
	field, so if the name is "Potion" then the price would be 6

	 <SirL.setItemPrice: i.price * p.size() > which means 
	the item buy price is the number defined in the 
	database for the item price multiplied by the number of 
	party members

	 <SirL.setItemPrice: i.price - v[1] > which means the 
	item buy price is the number defined in the database for 
	the item price with a flat discount that is stored in 
	variable 1. So if the item cost 34 G and you got a 20 G 
	discount (in variable 1) the item now cost 14 G

	 <SirL.setItemPrice: Math.round(i.price * ((100 - 
	v[1])/100)) > which means the item buy price is the 
	number defined in the database for the item price with a 
	percentage discount that is stored in variable 1. So if 
	the item cost 34 G and you got a 20 % discount (in 
	variable 1) the item now costs 27 G

	* Define Item Sell Value
<SirL.setItemSellValue: FORMULA>
	This note tag will define the item, weapon, or armor 
	selling price using a FORMULA similar to the damage 
	formula.

This note tag is using aliasing to allow ease of use. Here 
is the Key:
	"i" means the item to which this note tag is applied. Can 
	be used to get various item-specific values.

	Examples include but are not limited to:
	"i.price" means this item's price traditionally defined in 
	the database
	"i.name" means this item's name

	"p" means the player's party can be used to get various 
	properties of the party.

	Examples include but are not limited to:
	"p.steps()" means the number of steps the party has 
	taken in-game
	"p.size()" means the number of party members in the 
	party

	"v" means the game variables very similar to how 
	damage formulas work.

	Examples include but are not limited to:
	"v[1]" means the first game variable value

	"buyPrice" means the evaluated price for buying the 
	item, if you use the "Define Item Price" note tag it will 
	use that equation otherwise it just the price in the 
	database field

	Examples include but are not limited to:
	"buyPrice" means the formula defined in "Define Item 
	Price" or database field price

	Example uses for note tag:
	 <SirL.setItemSellValue: i.name.length> which means 
	the item sell price is the number of characters in the 
	name field, so if the name is "Potion" then the price 
	would be 6

	 <SirL.setItemSellValue: i.price * p.size()> which means 
	the item sell price is the number defined in the database 
	for the item price multiplied by the number of party 
	members

	 <SirL.setItemSellValue: i.price - v[1]> which means 
	the item sell price is the number defined in the database 
	for the item price with a flat discount that is stored in 
	variable 1. So if the item cost 34 G and you got a 20 G 
	discount (in variable 1) the item now cost 14 G

	 <SirL.setItemSellValue: buyPrice - v[1]> which means 
	the item sell price is the amount you could buy the item 
	at with a discount that is defined in variable 1.

	 <SirL.setItemSellValue: Math.round(i.price * ((100 - 
	v[1])/100))> which means the item sell price is the 
	number defined in the database for the item price with a 
	percentage discount that is stored in variable 1. So if 
	the item cost 34 G and you got a 20 % discount (in 
	variable 1) the item now costs 27 G

Tips:
	* The parameters for the item alias differs from item, 
	weapon, and armor.

	* If any note tag is less than 1, it will be replaced with 
	the price value found in the database for buying and half 
	that for selling. Which is the default in RPG Maker.

Core functionality that this plugin works with:
	* Window_ShopBuy.prototype.makeItemList
	* Scene_Shop.prototype.sellingPrice

CHANGELOG
	v1.0.1 - Remembered to include item variable 'i' in 
	formulas
	v1.0.0 - Item price is defined by formulas

===== v1.0.0 - Item Morpher =====
This plugin allows the developer to create items that will 
morph into a new item upon consumption (use). Morph 
means that the original item will be used as normal, and 
then the item in the tag will be added to the party 
inventory.

Use Cases:
Using Note tags to define an item to morph into:
	1. Go to the Items section in your database
	2. Log the 4 digit number next to the item you would 
	like the item to morph into
	3. Find the item you would like to have morph when it is 
	used
	4. Using the Morph to next item note tag 
	<SirL.morphItem:#> in that item with the number 
	found in step 2 without the leading zeros
	5. Now when that item is used, it will be removed and 
	replaced with the item defined in the note tag.

Note Tags: 


Note tags for Items:
	* Morph to next item
<SirL.morphItem:#>
	This note tag will define the item to morph this item into 
	upon being used. # is the number of the id for the next 
	item to morph into.
	Example uses for note tag:
	 <SirL.morphItem:10> which means this item will 
	morph into the item found in the database 10th row 
	when used.

Tips:
	* This note tag cannot take in JavaScript, only numbers

Core functionality that this plugin works with:
	* Game_Party.prototype.consumeItem

CHANGELOG
	v1.0.0 - Allow you to morph an item on consumption

===== v1.0.1 - Searchable Item Select =====
This plugin allows the developer to make a searchable 
set of items using either Hidden A or B items. It requires 
using the name of a character to be the search term. 
This makes it where the player must know the name of 
the item they want to select it.

Use Cases:
Set up the Plugin Parameters
	1. Go to the plugin parameters and find Searchable Item 
	Select
	2. Create at least one Item Grouping
	3. By giving it an "Easy to use name", this will be the 
	name you will use in the plugin command to access this 
	Item Grouping
	4. Create a list of the items for the group, each item 
	could be either a specific one or a range. For the range 
	the "Item Id" must be zero to enable range.
	5. Determine if you want to modify the Search 
	Condition, Note if you have multiple Item Groupings 
	with the same name, the first one on the list will be the 
	Search Condition used
	6. Select which Item Type you want to use for searching 
	through, it must be either Hidden Item A or Hidden Item 
	B. All items you want to search must be of that type. 
	Otherwise the code will skip over them.
	
Setting up the Plugin Command to search a item select
	1. Go to the Event Contents which you want the 
	command to be executed in
	2. Find the line you would like the player to have to 
	select
	3. Before executing the plugin command you can set the 
	search term by changing the specified character name 
	with either Change Name command which allows the 
	developer to determine the the search term or Name 
	Input Processing which allows the player to determine 
	the search term
	4. Add a new Event Command - Plugin Command after 
	you have change the name of the specified character
	5. Select the plugin name and the Command name of 
	"Search Select"
	6. Search Actor will be the specified character whose 
	name is the search term
	7. Grouping name will be the easy to use name you set 
	up for the Item Grouping in the plugin parameters
	8. "Variable to store selected in" is the variable in which 
	you want to store the item Id which the player selected
	9 Close all sub windows with OK/Apply
	10. When that code execute a item select window will 
	appear but filtered down to specific items that met the 
	Search Condition with the given actor's name
	

Plugin Commands:
	* Search Select - Able to do an item select with a search 
	parameter from an Name Input Processing command

Tips:
	* Removes all items under item type before search

	* If you have Shop Conditional Purchasing plugin 
	installed as well, for the Search Condition, you can add 
	this code ' && SirL.MPCore.metaProp(i, 
	"SirL.isSeenBefore") ' to restrict to only items that have 
	been in the player's possession before.

	* Conditional's for groups will always be the lowest 
	index with a valid group name

Core functionality that this plugin works with:

CHANGELOG
	v1.0.1 - Moved from Misc to Item Category in generator
	v1.0.0 - Able to use a character name to search through 
	a set defined by Item Grouping

===== v1.1.0 - Skill Cost Display =====
This plugin enables additional costs to be displayed such, 
as MP and TP. However, using the Skill Cost Formula 
plugin if the Alt Name matches the same as the Skill 
Type Name, it will display even more costs. For example, 
HP can display alongside MP and TP. If the cost is 0 then 
the cost shall not display. You can use character control 
like in show message for example, I[123], will render 
icon 123. Additional costs will display on the menu and in 
battle. 

Additionally, you can set a text to display if the skill costs 
nothing, for example with the word "Free".

Use Cases:
Add Alt Cost to be displayed:
	1. Have both this plugin and the Skill Cost Formula 
	plugin loaded into your game
	2. Go to the Plugin Manager
	3. Select the plugin that contains the Skill Cost Formula
	4. Under Skill Cost Formula, you will find the parameter 
	"List of Alternative Skills"
	5. Log the name of the Alternative Skill Name you 
	wanting to show up in the display
	6. Now back in your plugin Manager
	7. Select the plugin that contains this plugin
	8. Under Skill Cost Display, you will find the parameter 
	"List of Skill types to ..."
	9. Add a new row for each custom type
	10. For Skill Type Name, put the name you logged in 
	step 5
	11. For Skill Type Color, define the hex color you would 
	like the game to render
	12. Optionally, For Skill Type Render Name, put the 
	name you want to be shown in the menu, otherwise 
	leave blank to render Skill Type Name

Scripts:
SirL.MPSkillCostDisplay.getShowSkillCostList()
	This script parses the list of Skill Types to generate a list 
	of names


Returns: A list of all the names in Skill Types

SirL.MPSkillCostDisplay.getShowSkillCostColorList(i)
	This script parses the list of Skill Types to get the Skill 
	Type Color based on the index provided

Parameters:
	* i means the index of the Skill Type which you are 
	getting the color of

Returns: The string value of the hex color code for the 
Skill Type index provided

SirL.MPSkillCostDisplay.isShowMultiple()
	This script parses the multipleCosts parameter and gets 
	the boolean value


Returns: The boolean value of the multipleCosts 
parameter

SirL.MPSkillCostDisplay.showLabel( cost, type)
	This script generates the text to be shown for a specific 
	type and cost

Parameters:
	*  cost means the number representation of the cost for 
	that specific type
	*  type means the string value of the type of cost for the 
	skill

Returns: The string value of the type can cost based on 
the location defined in the costLabel parameter of the 
plugin

SirL.MPSkillCostDisplay.getFreeObject()
	This script is used to create the free object, for when a 
	skill cost zero of everything it will render the free text in 
	color specified in the plugin parameters


Returns: The array of the color and the text if ShowFree 
is defined as true in the plugin parameters

Core functionality that this plugin works with:
	* Window_SkillList.prototype.drawSkillCost

CHANGELOG
	v1.1.0 - Able to render a different name that the skill 
	name, so 'MP' can be 'magic'. Also using render name 
	you can render control characters such as I[123] to 
	render icon 123 
	v1.0.0 - Left some testing code in, oops
	v0.0.3 - Add display free option
	v0.0.2 - Add a way to include text next to cost to 
	represent the type
	v0.0.1 - Added Quality of Life feature to include both TP 
	and MP in menus options if the value is greater than zero

===== v1.1.0 - Skill Cost Formula =====
This plugin allows the developer to have dynamic skill 
cost through damage-like formulas. As well as alternative 
costs for example HP.

Use Cases:
Using skill note tags to define dynamic cost:
	1. Go to the Skill section in your database
	2. Find the skill you would like to define a dynamic cost 
	or additional alternative costs on
	3. Use the Note Tag to define the cost you want; TP 
	Cost, MP Cost, or Alt Cost
	4. Now that skill will use those dynamic costs.

Scripts:
SirL.MPSkillCostFormula.evalCostFormula( caster, 
formula)
	This script parses damage like formula with "a" (actor) 
	and "v" (gameVariables._data) shorthand

Parameters:
	*  caster means the actor object that is casting the skill 
	that is being evaluated
	*  formula means the JavaScript code with shorthand 
	that will be evaluated

Returns: The number value of the JavaScript evaluated 
to as long as it is greater than 0 and is a number else it 
returns zero

SirL.MPSkillCostFormula.skillAltCost( caster, type, skill)
	This script gets the cost of Alt values if it cannot find it, 
	it will check for MP and TP cost before just returning 0 
	for a specific skill 

Parameters:
	*  caster means the actor object that is casting the skill 
	that is being evaluated
	*  type means the name of the alternative cost as 
	defined in the plugin parameters
	*  skill means the skill object that is being checked

Returns: The number value of the evaluated cost for the 
skill under that specific type with that specific caster

Note Tags: 


Note tags for Skills:
	* TP Cost
<SirL.tpCost: FORMULA>
	This note tag overwrites the TP cost with a formula that 
	is calculated on use. The FORMULA must be like the 
	damage formula except for b(target) since that cannot 
	be determined while viewing the skill.

This note tag is using aliasing to allow ease of use. Here 
is the Key:
	"a" means the actor that the skill is being used by. You 
	may use this simple abbreviation to reference the 
	actor's object, such as stats, name, and more

	Examples include but are not limited to:
	"a.hp" means this actor's current hp
	"a.name" means this actor's name

	"v" means the game variables very similar to how 
	damage formulas work.

	Examples include but are not limited to:
	"v[1]" means the first game variable value

	Example uses for note tag:
	 <SirL.tpCost: a.hp> which means the skill tp cost will 
	be the actor's current hp

	 <SirL.tpCost: a.hp - v[1]> which means the skill tp 
	cost will be the actor's current hp subtract the value 
	in-game variable 1

	 <SirL.tpCost: Math.ceil(a.hp/v[1])> which means the 
	skill tp cost will be the actor's current hp divided by 
	game variable 1 and rounded up to the nearest whole 
	number

	* MP Cost
<SirL.mpCost: FORMULA>
	This note tag overwrites the MP cost with a formula that 
	is calculated on use. The FORMULA must be like the 
	damage formula except for b(target) since that cannot 
	be determined while viewing the skill.

This note tag is using aliasing to allow ease of use. Here 
is the Key:
	"a" means the actor that the skill is being used by. You 
	may use this simple abbreviation to reference the 
	actor's object, such as stats, name, and more

	Examples include but are not limited to:
	"a.hp" means this actor's current hp
	"a.name" means this actor's name

	"v" means the game variables very similar to how 
	damage formulas work.

	Examples include but are not limited to:
	"v[1]" means the first game variable value

	Example uses for note tag:
	 <SirL.mpCost:  a.hp> which means the skill mp cost 
	will be the actor's current hp

	 <SirL.mpCost: a.hp - v[1]> which means the skill mp 
	cost will be the actor's current hp subtract the value 
	in-game variable 1

	 <SirL.mpCost: Math.ceil(a.hp/v[1])> which means the 
	skill mp cost will be the actor's current hp divided by 
	game variable 1 and rounded up to the nearest whole 
	number

	* Alt Cost
<SirL.ALTCost: FORMULA>
	This note tag defines alternative costs with a formula 
	that is calculated on use. The ALT needs to match the 
	name in the plugin parameter, however all lowercase, 
	for example, Gold would be SirL.goldCost. The FORMULA 
	must be like the damage formula except for b(target) 
	since that cannot be determined while viewing the skill.

This note tag is using aliasing to allow ease of use. Here 
is the Key:
	"a" means the actor that the skill is being used. You may 
	use this simple abbreviation to reference the actor's 
	object, such as stats, name, and more

	Examples include but are not limited to:
	"a.hp" means this actor's current hp
	"a.name" means this actor's name

	"v" means the game variables very similar to how 
	damage formulas work.

	Examples include but are not limited to:
	"v[1]" means the first game variable value

	Example uses for note tag:
	 <SirL.goldCost: a.hp> which means if the parameters 
	for Alternative Skill type is defined with the name being 
	gold and the source being $gameParty._gold, then this 
	skill will cost the actor's hp in gold

	 <SirL.hpCost: a.hp - v[1]> which means  if the 
	parameters for Alternative Skill type is defined with the 
	name being hp and the source being a._hp, then this 
	skill will cost the actor's current hp subtract the value 
	in-game variable 1 in the actor's hp

	 <SirL.item1Cost: Math.ceil(a.hp/v[1])> which means  if 
	the parameters for Alternative Skill type is defined with 
	the name being item1 and the source being 
	$gameParty._items[1], then this skill will cost the actor's 
	current hp divided by game variable 1 and rounded up 
	to the nearest whole number in the number items in 
	database index of 1

Tips:
	* If MP or TP isn't defined it will use the default static 
	value which is normally found in the database entry for 
	that skill

	* Code like $gameParty, will trigger both on actor and 
	enemy, if the enemy has a skill that requires that cost 
	as well.

Core functionality that this plugin works with:
	* Game_BattlerBase.prototype.skillTpCost
	* Game_BattlerBase.prototype.skillMpCost
	* Game_BattlerBase.prototype.canPaySkillCost
	* Game_BattlerBase.prototype.paySkillCost

CHANGELOG
	v1.1.0 - Allow negative values to artificially gain cost 
	type, specifically for reload functions. So -10 MP will 
	render as FREE if no other costs, then gain 10 MP to the 
	user
	v1.0.1 - Added tip about how both enemy and actors 
	will use the cost, such as $gameParty._gold
	v1.0.0 - Allow formulas for the cost for custom stats, 
	such as HP
	v0.0.1 - The cost of both TP and MP can be defined with 
	formulas in their note tags

===== v1.0.1 - Skill Cost Sorter =====
This plugin allows the developer to define how skills are 
sorted while also providing ways to set and get the last 
time the skill was used or if the skill is usable at the 
current moment in gameplay. The sorting is defined via 
plugin parameters
	
The plugin comes with some special Skill codes listed 
below:
	* skill.lastUsedTime = Compares the skills based on 
	when they were last used in either the menu or battle 
	per actor
	* skill.lastUsedBattleTime = Compares the skills based 
	on which they were last used in battle per actor
	* skill.lastUsedMenuTime = Compares the skills based 
	on when they were last used in the menu per actor
	* skill.usable = Compares skill usability in the current 
	menu
	* skill.altType_NAME = must-have skill cost formula 
	plugin, replace NAME with the name of the altType you 
	want to sort on.

Use Cases:
Set up the plugin:
	1. This plugin will automatically start sorting the skills 
	by just adding them to the plugin manager enabled.
	2. To modify how the skills are sorting, go to the plugin 
	manager
	3. The order determines which sorting happens first. so 
	if you had sort by MP then sort by TP, it only sorts by TP 
	if the MP matches

Scripts:
SirL.MPSkillCostSorter.setUsedTime( skill, actor, window)
	Set's the  time that skill was last used by the actor

Parameters:
	*  skill means the skill object that is being used
	*  actor means the actor object that is using the skill
	*  window means Which interface they are using it from, 
	generally Battle or Menu

Returns: Nothing

SirL.MPSkillCostSorter.getUsedTime( skill, actor)
	Get the recent time the skill was used by the actor.

Parameters:
	*  skill means the skill object that is being checked
	*  actor means the actor who is being checked when 
	they used the skill

Returns: The the number representation of UNIX epoch 
when the last time that actor used that skill in either 
menu or battle, could return zero if neither Battle nor 
Menu skill usage was  done with the actor

SirL.MPSkillCostSorter.getUsedBattleTime( skill, actor)
	Get the recent time the skill was used by the actor while 
	in battle

Parameters:
	*  skill means the skill object that is being checked
	*  actor means the actor who is being checked when 
	they last used the skill in battle

Returns: Returns the number representation of UNIX 
epoch when the last time that skill was used by the actor 
in battle or zero if it was not used in battle by the actor.

SirL.MPSkillCostSorter.getUsedMenuTime( skill, actor)
	Get the recent time the skill was used by the actor from 
	the menu

Parameters:
	*  skill means the skill object that is being checked
	*  actor means the actor who is being checked when 
	they last used the skill in the menu

Returns: Returns the number representation of UNIX 
epoch when the last time that skill was used by the actor 
in the menu or zero if it was not used in the menu by the 
actor.

Tips:
	* Can sort skills by skill names in alphabetical order 
	using the skill code "skill.name" 

	* Can sort skills by damage type similar order to how 
	that drop-down appears in the database using the skill 
	code "skill.damage.type"

Core functionality that this plugin works with:
	* Window_SkillList.prototype.makeItemList
	* Game_Actor.prototype.setLastBattleSkill
	* Game_Actor.prototype.setLastMenuSkill

CHANGELOG
	v1.0.1 - Return Item filter back to the code and added 
	some helpful example sorters
	v1.0.0 - Forgot to give the list of sorts a default, and 
	included altTypes if you have skill cost formula plugin
	v0.0.5 - Refactor the code to be cleaner for the generator
	v0.0.4 - Give each party individual time factors, so their 
	most recent come up higher
	v0.0.3 - Created logic to determine if the skill is playable 
	in the current menu
	v0.0.2 - More flexible replacement for the functions
	v0.0.1 - Rough code that just straight replaces the 
	functions

===== v2.0.0 - Weapon Stats Restrictions =====
This plugin prevents a weapon from appearing in the 
equip menu for a specific actor based on a comparison 
with that actor's stats, weapon stats, static values, and 
value from JavaScript expression. Also unequips the 
weapon if the comparison no longer allows for the 
weapons to be equipped.

Use Cases:
Using Note tags to define restrictions:
	1. Go to the Weapons section in your database.
	2. Find the weapon you would like to add the restriction 
	to.
	3. Place the note tage <SirL.weaponRestrict: LOGIC>, 
	replacing LOGIC with the javascript logic to do the 
	comparison inside the specific weapon note tag area.
	4. Modify the note tag to define the stats requirement

Known Issues:

	* If the starting weapon is outside the stats 
	requirement, that the equipment will disappear 
	completely instead of being unequipped.

Scripts:
SirL.MPWeaponStatsRestrictions.weaponStatRestriction( 
weapon, actor)
	This script call can be used to get the boolean state of 
	equipability for a weapon based on its stats requirement 
	and the actor in question stats.

Parameters:
	*  weapon means the weapon's ID number
	*  actor means the actor's ID number

Returns: True if the actor can equip and False if the actor 
cannot equip.

Note Tags: 


Note tags for Weapons:
	* Weapon Restrict
<SirL.weaponRestrict: LOGIC>
	This note tag will restrict the weapon when the LOGIC 
	returns a true value. LOGIC is replaced with any 
	javascript with the additional shorthand code for actor 
	(a) and weapon (w).

This note tag is using aliasing to allow ease of use. Here 
is the Key:
	"a" means the actor that the weapon is being equipped 
	to. You may use this simple abbreviation to reference 
	the actor's object, such as stats, name, and more.

	Examples include but are not limited to:
	"a.atk" means this actor's attack stat.
	"a.name" means this actor's name

	"w" means the weapon the contains this note tag.

	Examples include but are not limited to:
	"w.params[1]" means this weapon's Max MP (MMP) 
	parameter.

	Weapon Parameters are stored in the w.params starting 
	at 0 and ending at 7.
		0 = Max HP (MHP)
		1 = Max MP (MMP)
		2 = Attack (ATK)
		3 = Magic Attack (MAT)
		4 = Defense (DEF)
		5 = Magic Defense (MDF)
		6 = Agility (AGI)
		7 = Luck (LUK)
	"w.price" means this weapon's price.

	Example uses for note tag:
	 <SirL.weaponRestrict: a.atk <= 100> which means the 
	actor attack stat must be greater than or equal to 100 
	to allow weapon to be equipped.

	 <SirL.weaponRestrict: a.atk > 100 && a.def <= 50> 
	which means the actor's attack stat must be less than 
	100 AND actor's defense must be greater than or equal 
	to 50 to allow the weapon to be equipped.

	 <SirL.weaponRestrict: a.agi != w.params[0]> which 
	means the actor agility stat must equal the weapon's 
	Max HP parameter to allow weapon to be equipped.

	 <SirL.weaponRestrict: a.luk <= 
	$gameVariables.value(10) || w.price/10 == a.level> 
	which means the actor luck stat must be greater than 
	the value found in gameVariables.value(10) to allow 
	weapon to be equipped OR the weapon price divided by 
	10 must not be equal to the actor's current level.

Tips:
	* If equipping a weapon that will cause the party 
	member stats to go out of the allowed range, then it will 
	immediately be unequipped.

Core functionality that this plugin works with:
	* Game_BattlerBase.prototype.canEquipWeapon

CHANGELOG
	v2.0.0 - Replaced: LessThanSR, GreaterThanSR, 
	notEqualSR with a single weaponRestrict not tag. To get 
	same functionality use the following respectfully: 
	<SirL.weaponRestrict: stat < stat>, 
	<SirL.weaponRestrict: stat > stat>, and 
	<SirL.weaponRestrict: stat != stat>. If you had multiple 
	link them together with &&
	v1.1.0 - Added `not Equal` note tag and fixed typo so 
	that help file match the note tag capitalization
	v1.0.1 - Fixed error that occurs when checking for this 
	plugin and it not there only occurs on mobile
	v1.0.0 - Allow you to define restrictions of greaterThan 
	and lessThan properties

TERMS OF USE
	All required Terms of Use follow the higher the number, 
	the higher the priority, for example: 1. Can use X and 
	then 2. Cannot use X, then you cannot use X

	Optional Terms of Use are terms that the creator would 
	like to have, but are not forcing anyone to follow.

REQUIRED TERMS OF USE
	1. You are free to use the plugin created in any 
	commercial or non-commercial projects with the RPG 
	Maker software.
	2. You are free to modify the script created to your 
	liking however, for any bug fixes or general features you 
	are required to post an explanation in the Bugs/Features 
	Requests forums on the generator page. This is so that 
	the community can always be using the best code 
	available.
	3. You are not allowed to modify the terms of use except 
	for creating stricter terms.
	4. Place SirLegna Generated Plugins in your credits
	5. You are informed of the MIT license for  the functions, 
	"undertakeSpritePicture" and "removePictureContainer" 
	which came frome the ScreenZoom.js made by Sasuke 
	KANNAZUKI

OPTIONAL TERMS OF USE
	* Gifting SirLegna a copy of your game. I would love to 
	see how you use my code for ideas on how to improve 
	my plugins.

CREDITS:
	 - SirLegna can be found at https://sirlegna.itch.io/ 
	Creator
	 - Kurochan can be found at https://kurochan.itch.io/
	Tester, code reviewer, and fellow idea generator.
	 - jerjer can be found at 
	https://stackoverflow.com/a/9092085
	Creator of the getFnParamNames function
	 - Dmitri Pavlutin can be found at 
	https://dmitripavlutin.com/
	how-to-compare-objects-in-javascript/
	Creator of the shallowEqual function
	 - Sasuke KANNAZUKI can be found at 
	https://www.youtube.com/channel/
	UC643RsSjToOsSq8OES-puiA
	Creator of ScreenZoom.js which tile-based Scaling uses 
	functions from under the MIT License
*/


/*~struct~ammo:
@param aD.ammoName
@text Name of Ammo
@parent ammo
@desc The name to refer to when referencing this specific type of ammo
@type string

@param aD.initialAmmoAmount
@text Initial Ammo Amount
@parent ammo
@desc The amount of ammo they start with
@default 0
@type number

@param aD.maxAmmoAmount
@text Max Ammo Amount
@parent ammo
@desc The max amount of ammo they can have
@default 1
@type number

*/
/*~struct~accent:
@param AccentManager.accentName
@text Accent Name
@parent accent
@desc The text to indicate what accent it is
@type text

@param AccentManager.positionNum
@text Window Position
@parent accent
@desc The Message box location.
@type select
@option Don't Change
@value -1
@option Top
@value 0
@option Middle
@value 1
@option Bottom
@value 2

@param AccentManager.backgroundNum
@text Window Background
@parent accent
@desc The background you would like the window to have
@type select
@option Don't Change
@value -1
@option Window
@value 0
@option Dim
@value 1
@option Transparent
@value 2

@param AccentManager.faceFile
@text Faces
@parent accent
@desc The file name which contains the face for the message window
@type file
@dir img/faces/

@param AccentManager.faceId
@text Face Id
@parent accent
@desc The index is the face you want to take from, starting at 0 - top left and 7 - bottom right.
@type number
@max 7
@min 0

@param AccentManager.rules
@text Rules
@parent accent
@desc The rules will be applied when the accent is selected.
@default []
@type struct<rule>[]

*/
/*~struct~rule:
@param AccentManager.searchValue
@text Search Value
@parent rule
@desc The text it will search for to replace.
@default potion
@type text

@param AccentManager.newValue
@text New Value
@parent rule
@desc Replacement text to replace the old text
@default \C[1]potion\C[0]
@type text

*/
/*~struct~pairing:
@param fI2B.tag
@text Tag
@parent pairing
@desc To help organize thoughts, not used in code at all
@type string

@param fI2B.faceFile
@text Face File
@parent pairing
@desc File of the image to be displayed in the message window
@type file
@dir img/faces/

@param fI2B.faceId
@text Face Id
@parent pairing
@desc Index of the image to be displayed in the message window, starting at 0 - top left and 7 - bottom right
@default 0
@type number
@max 7
@min 0

@param fI2B.bustFile
@text Bust File
@parent pairing
@desc File of the image to be displayed as the bust
@type file
@dir img/pictures/

@param fI2B.bustOrigin
@text Bust Origin
@parent pairing
@desc Origin point of the bust picture
@default 0
@type select
@option Upper Left
@value 0
@option Center
@value 1

@param fI2B.bustDesignation
@text Bust Designation
@parent pairing
@desc Displays at the position determined by pixels or variables
@default 0
@type select
@option Pixels
@value 0
@option Variables
@value 1

@param fI2B.bustX
@text Bust X location
@parent pairing
@desc Either the variable or pixels for the x location
@default 0
@type number
@max 9999
@min -9999

@param fI2B.bustY
@text Bust Y location
@parent pairing
@desc Either the variable or pixels for the y location
@default 0
@type number
@max 9999
@min -9999

@param fI2B.bustScaleWidth
@text Bust Scale Width
@parent pairing
@desc Bust's horizontal scale
@default 100
@type number
@max 2000
@min -2000

@param fI2B.bustScaleHeight
@text Bust Scale Height
@parent pairing
@desc Bust's vertical scale
@default 100
@type number
@max 2000
@min -2000

@param fI2B.bustOpacity
@text Bust Opacity
@parent pairing
@desc Opacity level of the Bust
@default 255
@type number
@max 255
@min 0

@param fI2B.bustBlend
@text Bust Blend Mode
@parent pairing
@desc Blend mode used when the bust is drawn
@default 0
@type select
@option Normal
@value 0
@option Additive
@value 1
@option Multiply
@value 2
@option Screen
@value 3

*/
/*~struct~animationSelector:
@param aSV.tag
@text Tag
@parent animationSelector
@desc To help organize thoughts, not used in code at all
@type string

@param aSV.animationId
@text Animation
@parent animationSelector
@desc The animation to have the sound variance on
@type animation

@param aSV.frameSelection
@text List of frames and sounds
@parent animationSelector
@desc The frame and associated list of sounds
@type struct<frameSelector>[]

*/
/*~struct~frameSelector:
@param aSV.frameIndex
@text Frame
@parent frameSelector
@desc Frame number to associate the data
@default 0
@type number
@min 0

@param aSV.seSelection
@text Sounds
@parent frameSelector
@desc The list of sounds which one will be played from
@type struct<seSelector>[]

*/
/*~struct~seSelector:
@param aSV.fileName
@text File name
@parent seSelector
@desc Select an audio file for playback
@type file
@dir audio/se/

@param aSV.pan
@text Pan
@parent seSelector
@desc Pan for audio playback
@default 0
@type number
@max 100
@min -100

@param aSV.pitch
@text Pitch
@parent seSelector
@desc Pitch for audio playback
@default 100
@type number
@max 150
@min 50

@param aSV.volume
@text Volume
@parent seSelector
@desc Volume for audio playback
@default 90
@type number
@max 100
@min 0

*/
/*~struct~EnemySelector:
@param pAA.tag
@text Tag
@parent EnemySelector
@desc To help organize thoughts, not used in code at all
@type string

@param pAA.targetId
@text Enemy Id
@parent EnemySelector
@desc The enemy that being attacked
@type enemy[]

@param pAA.attackerWeapon
@text Weapon of the attacker
@parent EnemySelector
@desc This is rules for what weapon hit the target
@type struct<WeaponSelector>[]

@param pAA.fallBackAnimation
@text Fall Back Animation
@parent EnemySelector
@desc Animation used if weapon cannot be found
@type animation

@param pAA.AnimationDelay
@text Animation Delay
@parent EnemySelector
@desc Number of frames the animation will be delayed by
@default 0
@type number
@min 0

*/
/*~struct~ActorSelector:
@param pAA.tag
@text Tag
@parent ActorSelector
@desc To help organize thoughts, not used in code at all
@type string

@param pAA.targetId
@text Actor Id
@parent ActorSelector
@desc The actor that being attacked
@type actor[]

@param pAA.attackerWeapon
@text Weapon of the attacker
@parent ActorSelector
@desc This is rules for what weapon hit the target
@type struct<WeaponSelector>[]

@param pAA.fallBackAnimation
@text Fall Back Animation
@parent ActorSelector
@desc Animation used if weapon cannot be found
@type animation

@param pAA.AnimationDelay
@text Animation Delay
@parent ActorSelector
@desc Number of frames the animation will be delayed by
@default 0
@type number
@min 0

*/
/*~struct~WeaponSelector:
@param pAA.tag
@text Tag
@parent WeaponSelector
@desc To help organize thoughts, not used in code at all
@type string

@param pAA.weaponId
@text Weapon Id
@parent WeaponSelector
@desc The weapon the target is being hit with
@type weapon[]

@param pAA.targetArmor
@text Armor of the target
@parent WeaponSelector
@desc This is rules for what armor  the target is equipped with
@type struct<armorSelector>[]

@param pAA.fallBackAnimation
@text Fall Back Animation
@parent WeaponSelector
@desc Animation used if armor cannot be found
@type animation

@param pAA.AnimationDelay
@text Animation Delay
@parent WeaponSelector
@desc Number of frames the animation will be delayed by
@default 0
@type number
@min 0

*/
/*~struct~armorSelector:
@param pAA.tag
@text Tag
@parent armorSelector
@desc To help organize thoughts, not used in code at all
@type string

@param pAA.armorId
@text Armor Id
@parent armorSelector
@desc The armor the target is equipped
@type armor[]

@param pAA.attackerSkill
@text Skill the attacker used
@parent armorSelector
@desc This is rules for what Skill the attacker is using
@type struct<skillSelector>[]

@param pAA.fallBackAnimation
@text Fall Back Animation
@parent armorSelector
@desc Animation used if armor cannot be found
@type animation

@param pAA.AnimationDelay
@text Animation Delay
@parent armorSelector
@desc Number of frames the animation will be delayed by
@default 0
@type number
@min 0

*/
/*~struct~skillSelector:
@param pAA.tag
@text Tag
@parent skillSelector
@desc To help organize thoughts, not used in code at all
@type string

@param pAA.skillId
@text Skill Id
@parent skillSelector
@desc The skill the attacker used
@type skill[]

@param pAA.fallBackAnimation
@text Animation
@parent skillSelector
@desc Animation used if this skill specifically is used
@type animation

@param pAA.AnimationDelay
@text Animation Delay
@parent skillSelector
@desc Number of frames the animation will be delayed by
@default 0
@type number
@min 0

*/
/*~struct~SirLBattleBack:
@param PositionBattleBacks.TypeOfAdjustment
@text Type of Adjustment
@parent SirLBattleBack
@desc Determines the way the battleback will be adjusted
@default Default
@type combo
@option Default
@option Screen Size
@option UI Size
@option Custom

@param PositionBattleBacks.CustomOptionsHeader
@text Custom Options:
@parent SirLBattleBack
@desc Only if the Type of Adjustment equals Custom will this option be used.

@param PositionBattleBacks.bbWidth
@text BattleBack Width
@parent PositionBattleBacks.CustomOptionsHeader
@desc Define the width of the battleback in pixels. You can use javascript as well.
@default Math.floor((1000 * Graphics.width) / 816)
@type multiline_string

@param PositionBattleBacks.bbHeight
@text BattleBack Height
@parent PositionBattleBacks.CustomOptionsHeader
@desc Define the height of the battleback in pixels. You can use javascript as well.
@default Math.floor((740 * Graphics.height) / 624)
@type multiline_string

@param PositionBattleBacks.bbXOff
@text BattleBack X Offset
@parent PositionBattleBacks.CustomOptionsHeader
@desc Define the X offset of the battleback in pixels. You can use javascript as well.
@default (Graphics.width - bb.width) / 2
@type multiline_string

@param PositionBattleBacks.bbYOff4SideView
@text BattleBack Y Offset in SideView mode
@parent PositionBattleBacks.CustomOptionsHeader
@desc Define the Y offset of the battleback in pixels only while inside view mode. You can use javascript as well.
@default Graphics.height - bb.height
@type multiline_string

@param PositionBattleBacks.bbYOff4FrontView
@text BattleBack Y Offset in FrontView mode
@parent PositionBattleBacks.CustomOptionsHeader
@desc Define the Y offset of the battleback in pixels only while in front view mode. You can use javascript as well.
@default 0
@type multiline_string

@param PositionBattleBacks.bbScale
@text BattleBack Scale
@parent PositionBattleBacks.CustomOptionsHeader
@desc Define the scale of the battleback in ratio. You can use javascript as well.
@default Math.max(ratioX, ratioY, 1.0)
@type multiline_string

*/
/*~struct~SirLMPTileEventLink:
@param TileEvent.tiles
@text List of Tiles
@parent SirLMPTileEventLink
@desc The list of tiles which are sensitive
@type struct<SirLMPTileEventTile>[]

@param TileEvent.buttonCalls
@text Button Calls
@parent SirLMPTileEventLink
@desc The common events that are called when the action button is pressed, unless Button By or Button On is called.
@default []
@type common_event[]

@param TileEvent.buttonCallsOn
@text Button On Calls
@parent SirLMPTileEventLink
@desc The common events that are called when the action button is pressed, ignores Button By and Button.
@default []
@type common_event[]

@param TileEvent.buttonCallsBy
@text Button By Calls
@parent SirLMPTileEventLink
@desc Button is pressed & player is in front of tile, common events are called, unless Button On and ignores Button
@default []
@type common_event[]

@param TileEvent.onCalls
@text Stand On Calls
@parent SirLMPTileEventLink
@desc The common events that are called when the player is on it, unless Stand On Only or Stand By Only.
@default []
@type common_event[]

@param TileEvent.onOnlyCalls
@text Stand On Only Calls
@parent SirLMPTileEventLink
@desc The common events that are called when the player is on it, ignoring all other Stand Calls
@default []
@type common_event[]

@param TileEvent.byCalls
@text Stand By Calls
@parent SirLMPTileEventLink
@desc The common events that are called when the player is in front of it, unless Stand On Only or Stand By Only.
@default []
@type common_event[]

@param TileEvent.byOnlyCalls
@text Stand By Only Calls
@parent SirLMPTileEventLink
@desc The common events called when player is in front of it, unless Stand On Only and ignores others Stand Calls.
@default []
@type common_event[]

*/
/*~struct~SirLMPTileEventTile:
@param TileEvent.mapId
@text Map Id
@parent SirLMPTileEventTile
@desc The Map Id without leading zeros
@type number
@min 1

@param TileEvent.tileX
@text X
@parent SirLMPTileEventTile
@desc The X position on the map for the tile you want
@type number
@min 0

@param TileEvent.tileY
@text Y
@parent SirLMPTileEventTile
@desc The Y position on the map for the tile you want
@type number
@min 0

*/
/*~struct~grouping:
@param SearchableItemSelect.name
@text Easy to use name
@parent grouping
@desc The name of the group to be used in plugin command
@type string

@param SearchableItemSelect.items
@text List of items for group
@parent grouping
@desc What the items compose of this group
@type struct<items>[]

@param SearchableItemSelect.conditionalJS
@text Search Condition
@parent grouping
@desc The JS code that is use to search, i = item and t = term
@default i.name.toLowerCase().includes(t.toLowerCase())
@type multiline_string

*/
/*~struct~items:
@param SearchableItemSelect.item
@text Item Id
@parent items
@desc Set to 0 if you want to use the range
@default 0
@type item

@param SearchableItemSelect.startItemRange
@text First Item in Range
@parent items
@desc The first item that will appear in range, Inclusive
@type item

@param SearchableItemSelect.endItemRange
@text Last Item in Range
@parent items
@desc The last item that will appear in range, Inclusive
@type item

*/
/*~struct~SkillCostDisplaySkillType:
@param SkillCostDisplay.Skill Type Name
@text Skill Type Name
@parent SkillCostDisplaySkillType
@desc Define the Skill Type Name
@default Hp
@type text

@param SkillCostDisplay.Skill Type Color
@text Skill Type Color
@parent SkillCostDisplaySkillType
@desc Define the Skill Type Color in hex code like #acf059
@default #e08040
@type text

@param SkillCostDisplay.Skill Type Render Name
@text Skill Type Render Name
@parent SkillCostDisplaySkillType
@desc Define the Skill Type Name which will be render, empty string means use Skill Type Name
@default 
@type text

*/
/*~struct~SirLMPSkillCostFormulaAltTypeDef:
@param SkillCostFormula.Alt Name
@text Alternative Skill Name
@parent SirLMPSkillCostFormulaAltTypeDef
@desc Define the Alternative Skill Name
@default Hp
@type text

@param SkillCostFormula.Alt Source
@text Alternative Skill Source
@parent SirLMPSkillCostFormulaAltTypeDef
@desc Define where calculations will be taken from. You can use damage formula notation, like a for the actor.
@default a._hp
@type text

*/
/*~struct~SirLMPSkillCostSorterSorter:
@param SkillCostSorter.eval
@text Skill code
@parent SirLMPSkillCostSorterSorter
@desc Define the JS that will be sorted with. skill is the variable for the skill, shown with default setting
@default skill.mpCost
@type text

@param SkillCostSorter.order
@text Is Ascending
@parent SirLMPSkillCostSorterSorter
@desc What type of order do you want the skills to appears. Ascending means 1,2,3
@default true
@type boolean
@on Ascending Order
@off Descending Order

*/
var Imported = Imported || {};
Imported.sirL_MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68 = true;
var SirL = SirL || {};
SirL.MPCore = SirL.MPCore || {};
SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68 = SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68 || {};
SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName = decodeURI(document.currentScript.src.match(/.+\/(.+)\.js/)[1]);
SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP = PluginManager.parameters(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName);
SirL.MPaD = SirL.MPaD || {};
SirL.MPfSV = SirL.MPfSV || {};
SirL.MPJumpToTile = SirL.MPJumpToTile || {};
SirL.MPsCP = SirL.MPsCP || {};
SirL.MPActorToEvent = SirL.MPActorToEvent || {};
SirL.MPActorByVariable = SirL.MPActorByVariable || {};
SirL.MPActorByVariable.storedActor = [];
SirL.MPActorCloner = SirL.MPActorCloner || {};
SirL.MPAccentManager = SirL.MPAccentManager || {};
SirL.MPAccentManager.accents = JSON.parse(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["AccentManager.accents"]).map(accent => JSON.parse(accent));
SirL.MPAccentManager.globalRules = JSON.parse(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["AccentManager.generalRules"]).map(accent => JSON.parse(accent));
SirL.MPAccentManager.hideAfterChar = SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["AccentManager.hideAfterChar"];
SirL.MPAccentManager.names = SirL.MPAccentManager.accents.map(accent => accent["AccentManager.accentName"]);
SirL.MPChoiceLocation = SirL.MPChoiceLocation || {};
SirL.MPChoiceLocation.cWinX = 'return 0;';
SirL.MPChoiceLocation.cWinY = 'return 0;';
SirL.MPcST = SirL.MPcST || {};
SirL.MPDelaySwitchVariables = SirL.MPDelaySwitchVariables || {};
SirL.MPfI2B = SirL.MPfI2B || {};
SirL.MPIsReal = SirL.MPIsReal || {};
SirL.MPArmorRequirementRevamp = SirL.MPArmorRequirementRevamp || {};
SirL.MPItemRequirementRevamp = SirL.MPItemRequirementRevamp || {};
SirL.MPsR = SirL.MPsR || {};
SirL.MPWeaponRequirementRevamp = SirL.MPWeaponRequirementRevamp || {};
SirL.MPaSV = SirL.MPaSV || {};
SirL.MPBetterShowBattleAnimation = SirL.MPBetterShowBattleAnimation || {};
SirL.MPFinalCriticalDamage = SirL.MPFinalCriticalDamage || {};
SirL.MPFinalCriticalDamage.critDamage = 0;
SirL.MPFinalCriticalDamage.testForCrit = false;
SirL.MPpAA = SirL.MPpAA || {};
SirL.MPPositionBattleBacks = SirL.MPPositionBattleBacks || {};
SirL.MPRewardsForEscaping = SirL.MPRewardsForEscaping || {};
SirL.MPBetterScriptCommand = SirL.MPBetterScriptCommand || {};
SirL.MPcGE = SirL.MPcGE || {};
SirL.MPiEC = SirL.MPiEC || {};
SirL.MPTileBasedScaling = SirL.MPTileBasedScaling || {};
SirL.MPTileBasedScaling.preparedStorage = SirL.MPTileBasedScaling.preparedStorage || [];
SirL.MPTileBasedScaling.customZoom = SirL.MPTileBasedScaling.customZoom || 1;
SirL.MPTileBasedScaling.container = SirL.MPTileBasedScaling.container || null;
SirL.MPdEST = SirL.MPdEST || {};
SirL.MPeAE = SirL.MPeAE || {};
SirL.MPRandomInLine = SirL.MPRandomInLine || {};
SirL.MPRepeatNext = SirL.MPRepeatNext || {};
SirL.MPEventCloner = SirL.MPEventCloner || {};
SirL.MPRestoreEventCommands = SirL.MPRestoreEventCommands || {};
SirL.MPTileEvent = SirL.MPTileEvent || {};
SirL.MPEnemyEscapeRevamp = SirL.MPEnemyEscapeRevamp || {};
SirL.MPEnemyStatsFormula = SirL.MPEnemyStatsFormula || {};
SirL.MPItemCostFormula = SirL.MPItemCostFormula || {};
SirL.MPItemMorpher = SirL.MPItemMorpher || {};
SirL.MPSearchableItemSelect = SirL.MPSearchableItemSelect || {};
SirL.MPSkillCostDisplay = SirL.MPSkillCostDisplay || {};
SirL.MPSkillCostFormula = SirL.MPSkillCostFormula || {};
SirL.MPSkillCostSorter = SirL.MPSkillCostSorter || {};
SirL.MPWeaponStatsRestrictions = SirL.MPWeaponStatsRestrictions || {};
typeof SirL.savablePP != `undefined` ? SirL.savablePP = SirL.savablePP.concat(...[{"name":"skipText","code":"return Boolean(JSON.parse(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP[\"cST.skipableText\"]))"},{"name":"secondDelays","code":"return {}"},{"name":"frameDelays","code":"return {}"},{"name":"battleDelays","code":"return {}"},{"name":"winDelays","code":"return {}"},{"name":"escapeDelays","code":"return {}"},{"name":"stepDelays","code":"return {}"},{"name":"saveDelays","code":"return {}"},{"name":"rWSecondsDelay","code":"return {}"},{"name":"enabledFL2B","code":"return true"},{"name":"fCD_CB4E","code":"return Boolean(JSON.parse(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP[\"FinalCriticalDamage.allowCritBoostForEnemies\"]))"},{"name":"aBB","code":"return Boolean(JSON.parse(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP[\"PositionBattleBacks.animatedBattleBacks\"]))"},{"name":"layers","code":"return SirL.MPPositionBattleBacks.battlebackParser()"},{"name":"TBS_zoom","code":"return new Function(\"return \" + SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP[\"TileBasedScaling.zoom\"].toString())()"}]) : SirL.savablePP = [{"name":"skipText","code":"return Boolean(JSON.parse(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP[\"cST.skipableText\"]))"},{"name":"secondDelays","code":"return {}"},{"name":"frameDelays","code":"return {}"},{"name":"battleDelays","code":"return {}"},{"name":"winDelays","code":"return {}"},{"name":"escapeDelays","code":"return {}"},{"name":"stepDelays","code":"return {}"},{"name":"saveDelays","code":"return {}"},{"name":"rWSecondsDelay","code":"return {}"},{"name":"enabledFL2B","code":"return true"},{"name":"fCD_CB4E","code":"return Boolean(JSON.parse(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP[\"FinalCriticalDamage.allowCritBoostForEnemies\"]))"},{"name":"aBB","code":"return Boolean(JSON.parse(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP[\"PositionBattleBacks.animatedBattleBacks\"]))"},{"name":"layers","code":"return SirL.MPPositionBattleBacks.battlebackParser()"},{"name":"TBS_zoom","code":"return new Function(\"return \" + SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP[\"TileBasedScaling.zoom\"].toString())()"}];
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Actor To Event.setActor2Event", function SirL_Code(args){
	actorId = new Function("return " + args.ActorId.toString())()
	SirL.MPActorToEvent.setActor2Event(actorId,args.eventId);
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Actor To Event.getEventActor", function SirL_Code(args){
	$gameVariables.setValue(args.variableId,SirL.MPActorToEvent.getEventActor(args.eventId))
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Actor By Variable.setActorFaceData", function SirL_Code(args){
	SirL.MPActorByVariable.set($gameVariables.value(args.actorID));
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Actor By Variable.setActorFaceDataTemp", function SirL_Code(args){
	SirL.MPActorByVariable.resetFlag = true;
SirL.MPActorByVariable.set($gameVariables.value(args.actorID));
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Actor By Variable.resetActorFaceData", function SirL_Code(args){
	SirL.MPActorByVariable.reset();
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Actor By Variable.changePartyMemberByVariable", function SirL_Code(args){
	params = []
	params[0] = $gameVariables.value(args.actorID);
	params[1] = JSON.parse(args.Operation);
	params[2] = Boolean(JSON.parse(args.Initialize))
	Game_Interpreter.prototype.command129.call(this,params);
	$gamePlayer.refresh()
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Actor By Variable.changeEquipmentByVariable", function SirL_Code(args){
	params = []
	params[0] = $gameVariables.value(args.actorID);
	params[1] = JSON.parse(args.equipmentType);
	params[2] = JSON.parse(args.equipmentItem);
	Game_Interpreter.prototype.command319.call(this,params);
	$gamePlayer.refresh()
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Actor By Variable.changeNameByVariable", function SirL_Code(args){
	params = []
	params[0] = $gameVariables.value(args.actorID);
	params[1] = args.newName;
	Game_Interpreter.prototype.command320.call(this,params);
	$gamePlayer.refresh()
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Actor By Variable.changeClassByVariable", function SirL_Code(args){
	params = []
	params[0] = $gameVariables.value(args.actorID);
	params[1] = JSON.parse(args.class);
	params[2] = Boolean(JSON.parse(args.saveLevel))
	Game_Interpreter.prototype.command321.call(this,params);
	$gamePlayer.refresh()
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Actor By Variable.changeNicknameByVariable", function SirL_Code(args){
	params = []
	params[0] = $gameVariables.value(args.actorID);
	params[1] = args.newNickname;
	Game_Interpreter.prototype.command324.call(this,params);
	$gamePlayer.refresh()
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Actor By Variable.changeProfileByVariable", function SirL_Code(args){
	params = []
	params[0] = $gameVariables.value(args.actorID);
	params[1] = args.newProfile;
	Game_Interpreter.prototype.command325.call(this,params);
	$gamePlayer.refresh()
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Actor By Variable.nameInputProcessingByVariable", function SirL_Code(args){
	params = []
	params[0] = $gameVariables.value(args.actorID);
	params[1] = JSON.parse(args.maxCharacter);
	Game_Interpreter.prototype.command303.call(this,params);
	
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Actor By Variable.changeActorImagesByVariable", function SirL_Code(args){
	params = []
	params[0] = $gameVariables.value(args.actorID);
	params[1] = args.faceFile;
	params[2] = JSON.parse(args.faceId);
	params[3] = args.characterFile;
	params[4] = JSON.parse(args.characterId);
	params[5] = args.battlerFile;
	Game_Interpreter.prototype.command322.call(this,params);
	
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Actor By Variable.ForceActionByVariable", function SirL_Code(args){
	params = []
	params[0] = 1 //Selecting Actor
	params[1] = $gameVariables.value(args.actorID);
	params[2] = JSON.parse(args.skill);
	params[3] = JSON.parse(args.target);
	Game_Interpreter.prototype.command339.call(this,params);
	
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Actor Cloner.addClone2Game", function SirL_Code(args){
	actorOverride = {}
	JSON.parse(args.overwriteData).forEach( data => {
		data = data.split(":");
		actorOverride[data[0].trim()] = data[1].trim();
	});
	SirL.MPActorCloner.addCloneToGame(args.originalActorId, actorOverride, args.returnVariable)
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Choice Location.choiceLocation", function SirL_Code(args){
	SirL.MPChoiceLocation.set(args.locX, args.locY);
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Choice Location.choiceLocationTemp", function SirL_Code(args){
	SirL.MPChoiceLocation.resetFlag = true;
SirL.MPChoiceLocation.set(args.locX, args.locY);
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Choice Location.resetChoiceLocation", function SirL_Code(args){
	SirL.MPChoiceLocation.reset();
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Control Skip Text.SetSkipableText", function SirL_Code(args){
	$gameSystem._sirL.savablePP.skipText = Boolean(JSON.parse(args.skipableText));
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Delay Switches and Variables.setSelfSwitchDelay", function SirL_Code(args){
	mapId = parseInt(args.mapId) || $gameMap._mapId
	eventId = parseInt(args.eventId) || this._eventId
	state = Boolean(JSON.parse(args.Operation))
	command = "$gameSelfSwitches.setValue(["+mapId+","+eventId+",'"+args.sSLetter+"'],"+state+")"
	SirL.MPDelaySwitchVariables.setDelay(command,args)
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Delay Switches and Variables.setSwitchDelay", function SirL_Code(args){
	state = Boolean(JSON.parse(args.Operation))
	command = "$gameSwitches.setValue("+args.switchId+","+state+")"
	SirL.MPDelaySwitchVariables.setDelay(command,args)
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Delay Switches and Variables.setVariableDelay", function SirL_Code(args){
	value = new Function(args.Operand)(v = $gameVariables._data)
	command = "$gameVariables.setValue("+args.variableId+","+value+")"
	SirL.MPDelaySwitchVariables.setDelay(command,args)
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Face Image to Bust.isEnabled", function SirL_Code(args){
	$gameSystem._sirL.savablePP.enabledFL2B = SirL.MPCore.parseParam(args.isEnabled)
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Real World Conditional.getYear", function SirL_Code(args){
	$gameVariables.setValue(args.variableId,new Date().getFullYear())
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Real World Conditional.getMonth", function SirL_Code(args){
	$gameVariables.setValue(args.variableId,new Date().getMonth() + 1)
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Real World Conditional.getMonthName", function SirL_Code(args){
	$gameVariables.setValue(args.variableId,SirL.MPCore.toList(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["IsReal.monthsOfYear"])[new Date().getMonth()])
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Real World Conditional.getDayOfMonth", function SirL_Code(args){
	$gameVariables.setValue(args.variableId,new Date().getDate())
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Real World Conditional.getDayOfWeek", function SirL_Code(args){
	$gameVariables.setValue(args.variableId,new Date().getDay())
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Real World Conditional.getDayOfWeekName", function SirL_Code(args){
	$gameVariables.setValue(args.variableId,SirL.MPCore.toList(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["IsReal.daysOfWeek"])[new Date().getDay()])
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Real World Conditional.get24Hour", function SirL_Code(args){
	$gameVariables.setValue(args.variableId,new Date().getHours())
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Real World Conditional.get12Hour", function SirL_Code(args){
	$gameVariables.setValue(args.variableId,((new Date().getHours() + 11) % 12 + 1))
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Real World Conditional.get12HourIndicator", function SirL_Code(args){
	$gameVariables.setValue(args.variableId,SirL.MPCore.toList(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["IsReal.hourIndicator"])[new Date().getHours() > 12 ? 1 : 0])
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Real World Conditional.getMinute", function SirL_Code(args){
	$gameVariables.setValue(args.variableId,new Date().getMinutes())
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Real World Conditional.getSecond", function SirL_Code(args){
	$gameVariables.setValue(args.variableId,new Date().getSeconds())
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Better Show Battle Animation.ShowBattleAnimation", function SirL_Code(args){
	SirL.MPBetterShowBattleAnimation.SBA(args.enemyId, args.animation, args.lifeStatus, this)
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Final Critical Damage.SetAllowCritBoostForEnemies", function SirL_Code(args){
	$gameSystem._sirL.savablePP.fCD_CB4E = Boolean(JSON.parse(args.allowCritBoostForEnemies));
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Position BattleBacks.SetAnimatedBattleBacks", function SirL_Code(args){
	$gameSystem._sirL.savablePP.aBB = Boolean(JSON.parse(args.animatedBattleBacks));
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Position BattleBacks.Set2Default", function SirL_Code(args){
	layer = parseInt(args.layer) - 1;
	$gameSystem._sirL.savablePP.layers[layer]["PositionBattleBacks.TypeOfAdjustment"] = "Default";
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Position BattleBacks.Set2Screen", function SirL_Code(args){
	layer = parseInt(args.layer) - 1;
	$gameSystem._sirL.savablePP.layers[layer]["PositionBattleBacks.TypeOfAdjustment"] = "Screen Size";
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Position BattleBacks.Set2UI", function SirL_Code(args){
	layer = parseInt(args.layer) - 1;
	$gameSystem._sirL.savablePP.layers[layer]["PositionBattleBacks.TypeOfAdjustment"] = "UI Size";
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Position BattleBacks.Set2Custom", function SirL_Code(args){
	layer = parseInt(args.layer) - 1;
	$gameSystem._sirL.savablePP.layers[layer]["PositionBattleBacks.TypeOfAdjustment"] = "Custom";
	$gameSystem._sirL.savablePP.layers[layer]["PositionBattleBacks.bbWidth"] = args.bbWidth; //String
	$gameSystem._sirL.savablePP.layers[layer]["PositionBattleBacks.bbHeight"] = args.bbHeight; //String
	$gameSystem._sirL.savablePP.layers[layer]["PositionBattleBacks.bbXOff"] = args.bbXOff; //String
	$gameSystem._sirL.savablePP.layers[layer]["PositionBattleBacks.bbYOff4SV"] = args.bbYOff4SideView; //String
	$gameSystem._sirL.savablePP.layers[layer]["PositionBattleBacks.bbYOff4FV"] = args.bbYOff4FrontView; //String
	$gameSystem._sirL.savablePP.layers[layer]["PositionBattleBacks.bbScale"] =args.bbScale; //String
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Better Script Command.ScriptCommand", function SirL_Code(args){
	eval(args.script);
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Custom Game Error.throwError", function SirL_Code(args){
	args = SirL.MPCore.parseParam(args);
		args.variables = args.variables.map(variable => eval(variable));
		SirL.MPCore.throwError(args.title, args.message, ...args.variables);
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"In Event Comment.blockComment", function SirL_Code(args){
	if( $gameTemp.isPlaytest() || SirL.MPCore.toBoolean(args.mode) ){
		initialLine = this._index + 1;
		while(true){
			this._index++;
			if (this._index == this._list.length) { //Reached end of event
				SirL.MPCore.throwError("SirLegna's In Event Comment: SyntaxError","Invalid or unexpected token - Started a block comment using In Event Comment plugin command Block Comment at line %1 in event %2 on map %3 without providing an End of Block Comment plugin command after.", initialLine, this.eventId(), this._mapId)
				return;
			} else if (this.currentCommand().code == 357){
				if(this.currentCommand().parameters[0] == SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName){
					if(this.currentCommand().parameters[1] == "In Event Comment.endBlockComment"){ //remove one block comment
						this._index++;
						break;
					}
				}
			}
		}
	}
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"In Event Comment.endBlockComment", function SirL_Code(args){
	if( $gameTemp.isPlaytest() || SirL.MPCore.toBoolean(args.mode) ){
			initialLine = this._index + 1;
			SirL.MPCore.throwError("SirLegna's In Event Comment: SyntaxError","Unexpected token - Ended a block comment using In Event Comment plugin command End of Block Comment at line %1 in event %2 on map %3 without providing a Block Comment plugin command before." , initialLine, this.eventId(), this._mapId)
			return;
		}
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Tile-based Scaling.setZoomPercentage", function SirL_Code(args){
	$gameSystem._sirL.savablePP.TBS_zoom = new Function("return " + args.zoom.toString())();
			SirL.MPTileBasedScaling.refresh();
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Event Cloner.SpawnClonedEvent", function SirL_Code(args){
	eventOverride = {}
	JSON.parse(args.overwriteData).forEach( data => {
		data = data.split(":");
		eventOverride[data[0].trim()] = data[1].trim();
	});
	SirL.MPEventCloner.getEventAtId(args.mapId, args.eventId, eventOverride)
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Restore Event Commands.RestoreCommandById", function SirL_Code(args){
	if(!parseInt(args.eventId)) args.eventId = this._eventId;
	SirL.MPRestoreEventCommands.restoreEvent($gameMap.event(args.eventId));
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Restore Event Commands.RestoreCommandByVariable", function SirL_Code(args){
	eventId = $gameVariables.value(args.variableId)
	if(!eventId) eventId = this._eventId;
	SirL.MPRestoreEventCommands.restoreEvent($gameMap.event(eventId));
});
PluginManager.registerCommand(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName,"Searchable Item Select.searchSelect", function SirL_Code(args){
	pluginParameters = SirL.MPCore.parseParam(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP)
	group = pluginParameters["SearchableItemSelect.group"].filter(group => group["SearchableItemSelect.name"] == args.groupTerm)
	searchItems = []
	for (listing of group){
		for (item of listing["SearchableItemSelect.items"]){
			if (item["SearchableItemSelect.item"]){
				searchItems = searchItems.concat(item["SearchableItemSelect.item"])
			} else {
				searchItems = searchItems.concat(...Array.from({length:item["SearchableItemSelect.endItemRange"]-item["SearchableItemSelect.startItemRange"]+1},(v,k)=>k+item["SearchableItemSelect.startItemRange"]))
			}
		}
	}
	//Deduplicate the list
	searchItems = [...new Set(searchItems)]
	//Cleaning up previous run
	$gameParty.items().filter(item => item.itypeId == parseInt(pluginParameters["SearchableItemSelect.itemTypeId"])).forEach(item => $gameParty.gainItem(item,-1))
	//Add subset to player's inventory if it meets condition
	for (n of searchItems) {
		if(new Function("i,t","return " + group[0]["SearchableItemSelect.conditionalJS"] )($dataItems[n],$gameActors.actor(parseInt(args.searchActor)).name()) && $dataItems[n].itypeId == parseInt(pluginParameters["SearchableItemSelect.itemTypeId"])){
			$gameParty.gainItem($dataItems[n], 1);
		}
	}
	this.setupItemChoice([parseInt(args.storeVariable),parseInt(pluginParameters["SearchableItemSelect.itemTypeId"])]);
	this.setWaitMode("message");
});
SirL.MPaD.initializeAmmo = function(member){
	for (ammo of SirL.MPCore.parseParam(PluginManager.parameters(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName))["aD.AmmoTypes"]){
		member["ammo"] ??= {};
		member["maxAmmo"] ??= {};
		memberDatabaseEntry = member.isActor() ? member.actor() : member.enemy()
		noteInitial = SirL.MPCore.metaProp(memberDatabaseEntry,"SirL."+ammo["aD.ammoName"]+".Initial")
		member["ammo"][ammo["aD.ammoName"]] = noteInitial || ammo["aD.initialAmmoAmount"]
		member["maxAmmo"][ammo["aD.ammoName"]] = ammo["aD.maxAmmoAmount"]
	}
}
SirL.MPfSV.customFollowerSettings = function(setting, follower){
	actorState = new Function("actor, follower","return " + SirL.MPCore.metaProp(follower.actor().actor(), "SirL.follower"+setting))(follower.actor(), follower)
	globalState = new Function("actor, follower","return " + SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["fSV.global"+setting])(follower.actor(), follower)
	return  actorState ?? globalState		
}
SirL.MPJumpToTile.tile = function(parent,newX,newY){
	additionals = parent._followers?._data ?? [];
	jumpers = [parent].concat(additionals);
	for (const jumper of jumpers){
		if(!jumper){continue};
		xPlus = newX - jumper._x;
		yPlus = newY - jumper._y;
		Game_Character.prototype.jump.call(jumper,xPlus,yPlus);
	};
}
SirL.MPJumpToTile.event = function(parent,eventId){
	SirL.MPJumpToTile.tile(parent, $gameMap.event(eventId).x,$gameMap.event(eventId).y);
}
SirL.MPActorToEvent.setActor2Event = function(actorId, eventId){
	event = $gameMap._events[eventId]
	if($gameActors._data[actorId]){
		event._characterName = $gameActors._data[actorId]._characterName;
		event._characterIndex = $gameActors._data[actorId]._characterIndex;
	} else {
		event._characterName = $dataActors[actorId].characterName;
		event._characterIndex = $dataActors[actorId].characterIndex;
	}
	event.actorId = actorId;
}
SirL.MPActorToEvent.getEventActor = function(eventId){
	return $gameMap._events[eventId].actorId || 0
}
SirL.MPActorByVariable.reset = function() {
	SirL.MPActorByVariable.customFlag = false;
	SirL.MPActorByVariable.resetFlag = false;
}
SirL.MPActorByVariable.set = function(actorID) {
	SirL.MPActorByVariable.customFlag = true;
	if($gameActors._data[actorId]){
		faceData = [$gameActors._data[actorId]._faceName,$gameActors._data[actorId]._faceIndex]
	} else {
		faceData = [$dataActors[actorId]._faceName,$dataActors[actorId]._faceIndex]
	}
	SirL.MPActorByVariable.storedActor = faceData;
}
SirL.MPActorCloner.addCloneToGame = function(originalActorId, overrideData={}, returnVariable){
	baseActor = JSON.parse(JSON.stringify($dataActors[originalActorId])) ;
	overrideData["clonedData"] = true;
	if(overrideData.hasOwnProperty('id')){
		newActorId = new Function("return " + overrideData['id'].toString())()
	} else{
		newActorId = $dataActors.length
		overrideData["id"] = newActorId
	}
	
	for(let overrideEntryId = 0; overrideEntryId < Object.keys(overrideData).length;overrideEntryId++){
	   baseActor[Object.keys(overrideData)[overrideEntryId]] = new Function("return " + Object.values(overrideData)[overrideEntryId].toString())()
	}
	$dataActors[newActorId] = baseActor
	if($gameActors._data[newActorId]){
		$gameActors._data[newActorId] = new Game_Actor(newActorId);
	} else {
		$gameActors.actor(newActorId)
	}
	$gameVariables.setValue(returnVariable, newActorId)
}
SirL.MPChoiceLocation.reset = function() {
	SirL.MPChoiceLocation.customFlag = false;
	SirL.MPChoiceLocation.resetFlag = false;
}
SirL.MPChoiceLocation.set = function(X, Y) {
	SirL.MPChoiceLocation.customFlag = true;
	SirL.MPChoiceLocation.cWinX = X;
	SirL.MPChoiceLocation.cWinY = Y;
}
SirL.MPDelaySwitchVariables.checkDelays = function(current, delays){
	var times = Object.keys(delays)
	if (current >= Math.min(...times)){
		for(var timesId = 0; timesId < times.length; timesId++){
			if (times[timesId] <= current){
				commands = delays[times[timesId]]
				delete delays[times[timesId]]
				for( var commandId = 0; commandId < commands.length; commandId++){
					new Function(commands[commandId])()
				}
			}
		}
	}
}
SirL.MPDelaySwitchVariables.setDelay = function(command,args){
	currents = [
		$gameSystem._battleCount,
		$gameSystem._winCount,
		$gameSystem._escapeCount,
		$gameSystem._saveCount,
		Graphics.frameCount, 
		Graphics.frameCount/60,
		$gameParty._steps,
		Math.floor(Date.now() / 1000),
	]
	completedValue = currents[args.DelayType] + parseInt(args.DelayAmount);
	containers = [
		'battleDelays', 
		'winDelays', 
		'escapeDelays',
		'saveDelays',
		'frameDelays',
		'secondDelays',
		'stepDelays',
		'rWSecondsDelay',
	]
	container = containers[args.DelayType]
	typeof $gameSystem._sirL.savablePP[container][completedValue] != 'undefined' ? $gameSystem._sirL.savablePP[container][completedValue].push(command) : $gameSystem._sirL.savablePP[container][completedValue] = [command]	
}
SirL.MPIsReal.DayOfMonth = function(dayOfMonth){
	return new Date().getDate() == dayOfMonth
}
SirL.MPIsReal.DayOfWeek = function(dayOfWeek){
	if (isNaN(dayOfWeek)){
		dayOfWeek = SirL.MPCore.toList(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["IsReal.daysOfWeek"]).indexOf(dayOfWeek)
	}
	return new Date().getDay() == dayOfWeek
}
SirL.MPIsReal.Year = function(year){
	return new Date().getFullYear() == year
}
SirL.MPIsReal.Hour = function(hour){
	if (isNaN(hour)){
		index = -1
		SirL.MPCore.toList(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["IsReal.hourIndicator"]).forEach(function(indicator){if(hour.includes(indicator)){index = SirL.MPCore.toList(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["IsReal.hourIndicator"]).indexOf(indicator)}})
		return ((parseInt((hour).match(/\d+/)[0])%12) + 12 * index) == (new Date().getHours())
	} else {
		return new Date().getHours() == hour
	}
}
SirL.MPIsReal.Month = function(month){
	if (isNaN(month)){
		month = SirL.MPCore.toList(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["IsReal.monthsOfYear"]).indexOf(month) + 1
	}
	return (new Date().getMonth() + 1) == month
}
SirL.MPIsReal.Minute = function(minute){
	return (new Date().getMinutes()) == minute
}
SirL.MPIsReal.Second = function(second){
	return (new Date().getSeconds()) == second
}
SirL.MPArmorRequirementRevamp.isSkillAtypeOk = function(skill,actor){
	noArmor = true;
	noArmorList = SirL.MPCore.metaProp(skill, "SirL.No_Armor")
	if (typeof noArmorList != "undefined"){
		if (noArmorList == true){ noArmorList = []}
		for (equipId = 1; equipId < actor._equips.length; equipId++){
			hasNoEquipment = actor._equips[equipId]._itemId == 0;
			if(!noArmorList.includes(equipId + 1)){
				noArmor = noArmor && hasNoEquipment
			}
		}
	} //Else there is no requirement for no armor
	
	hasRequiredArmor= true;
	requiredArmors = SirL.MPCore.metaProp(skill, "SirL.Required_Armor") || '{}'
	requiredArmors = JSON.parse(requiredArmors)
	for (requiredArmorId = 0; requiredArmorId < Object.keys(requiredArmors).length; requiredArmorId++){
		equipId = Object.keys(requiredArmors)[requiredArmorId] - 1
		armor = $dataArmors[actor._equips[equipId]._itemId] || {"atypeId":-1}
		hasRequiredArmor = hasRequiredArmor && requiredArmors[Object.keys(requiredArmors)[requiredArmorId]].includes(armor.atypeId)
	}
	
	return noArmor && hasRequiredArmor
	
}
SirL.MPItemRequirementRevamp.meetsNoItemRequirement = function(skill){
	if( SirL.MPCore.metaProp(skill, "SirL.EmptyInventory")){
		return !$gameParty.items().length
	}
	return true
}
SirL.MPItemRequirementRevamp.isSkillItemOk = function(skill){
	hasRequiredItems = true;
	requiredItems = SirL.MPCore.metaProp(skill, "SirL.Required_Item") || '{}'
	requiredItems = JSON.parse(requiredItems)
	for (requiredItemsId = 0; requiredItemsId < Object.keys(requiredItems).length; requiredItemsId++){
		itemId = Object.keys(requiredItems)[requiredItemsId]
		if ( ! $gameParty._items.hasOwnProperty(itemId) || requiredItems[itemId] > $gameParty._items[itemId]){
			hasRequiredItems = false
		}
	}
	return SirL.MPItemRequirementRevamp.meetsNoItemRequirement(skill) && hasRequiredItems	
}
SirL.MPsR.restrict = function(caster, skill){
	try{
		const a = caster;
		const v = $gameVariables._data;
		const s = skill;
		const value = eval(SirL.MPCore.metaProp(skill,'SirL.skillRestrict'))
		return !value
	} catch(err){return true};
}
SirL.MPBetterShowBattleAnimation.SBA = function(EnemyID, Animation, lifeStatus, interpreter){
    const targets = [];
    interpreter.iterateEnemyIndex(EnemyID, enemy => {
		alive = enemy.isAlive()
		if (alive && !Boolean(lifeStatus%2) || !alive && parseInt(lifeStatus)) {
			targets.push(enemy);
		}
    });
    $gameTemp.requestAnimation(targets, Animation);
    return true;
}
SirL.MPpAA.requestAnimation = function (effectType, target, subject = SirL.MPpAA.subject) {
	//effectType = ["Hit","Miss","Evaded"]
	if(target.isEnemy()){
		animationParams = SirL.MPCore.parseParam(PluginManager.parameters(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName)["pAA.on"+effectType+"Enemy"])
		id = [0].concat(target.enemyId())
		armorIds =  SirL.MPCore.metaProp($dataEnemies[target.enemyId()], "SirL.pAA.Armor") ? [0].concat(SirL.MPCore.metaProp($dataEnemies[target.enemyId()], "SirL.pAA.Armor").split(",").map(el => parseInt(el))) : [0]
	} else {
		animationParams = SirL.MPCore.parseParam(PluginManager.parameters(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName)["pAA.on"+effectType+"Actor"])
		id = [0].concat(target.actorId())
		armorIds = [0].concat(target.armors().map(el => el.id))
	}
	if(animationParams == "") return;
	if( subject.isEnemy()){
		weaponIds =SirL.MPCore.metaProp($dataEnemies[subject.enemyId()], "SirL.pAA.Weapon") ? [0].concat(SirL.MPCore.metaProp($dataEnemies[subject.enemyId()], "SirL.pAA.Weapon").split(",").map(el => parseInt(el))) : [0]
	} else {
		weaponIds = [0].concat(subject.weapons().map(el => el.id))
	}
	navigationList = [
		["targetId", "attackerWeapon", id ],
		["weaponId", "targetArmor", weaponIds],
		["armorId", "attackerSkill", armorIds],
		["skillId","", BattleManager._action._item._dataClass == "skill" ? [BattleManager._action._item._itemId] : [0] ]
	]
	
	navigationList.forEach(level => {
		try{
			animationParams = animationParams.filter(hitAnim => hitAnim["pAA."+level[0]].some(el => level[2].includes(el)));
			selectedAnimation = animationParams[0]["pAA.fallBackAnimation"];
			delay = animationParams[0]["pAA.AnimationDelay"]
			animationParams = [].concat(...animationParams.filter(hitAnim => hitAnim["pAA."+level[1]].length > 0).map(nextAnim => nextAnim["pAA."+level[1]]));
		} catch ( e ){
			if( e instanceof TypeError){
				return;
			} else {
				throw new Error(e)
			}
		}
	});
	if(selectedAnimation){
		SirL.MPCore.sleep(delay)
		$gameTemp.requestAnimation([target], selectedAnimation);
	}
}
SirL.MPPositionBattleBacks.battlebackParser = function(){
	layers = []
	battleBacks = JSON.parse(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["PositionBattleBacks.battleBacks"])
	for(battleBackId = 0; battleBackId < battleBacks.length; battleBackId++){
		layers.push(JSON.parse(battleBacks[battleBackId]))
	}
	return layers
}
SirL.MPRewardsForEscaping.escapeRewards = function(BM){
	BM._rewards = {
			gold: $gameTroop.members().reduce(function(sum,enemy){
			if(SirL.MPCore.metaProp(enemy.enemy(), "SirL.partyEscapeGold")){
				const e = enemy;
				const v = $gameVariables._data;
				const t = $gameTroop;
				const p = $gameParty;
				sum += eval(SirL.MPCore.metaProp(enemy.enemy(), "SirL.partyEscapeGold"))
			}
			return sum;
		},0),
			exp: $gameTroop.members().reduce(function(sum,enemy){
			if(SirL.MPCore.metaProp(enemy.enemy(), "SirL.partyEscapeExp")){
				const e = enemy;
				const v = $gameVariables._data;
				const t = $gameTroop;
				const p = $gameParty;
				sum += eval(SirL.MPCore.metaProp(enemy.enemy(), "SirL.partyEscapeExp"))
			}
			return sum;
		},0),
			items: $gameTroop.members().reduce(function(r,enemy){
			escapedDropItems = []
			if(SirL.MPCore.metaProp(enemy.enemy(), "SirL.partyEscapeDrops")){
				escapedDropItems = SirL.MPRewardsForEscaping.makeItemsForEscape(enemy,"Drops")
			}
			return r.concat(escapedDropItems);
		},[]),
		lostItems: $gameTroop.members().reduce(function(r,enemy){
			escapedLostItems = []
			if(SirL.MPCore.metaProp(enemy.enemy(), "SirL.partyEscapeTakes")){
				escapedLostItems = SirL.MPRewardsForEscaping.makeItemsForEscape(enemy,"Takes")
			}
			return r.concat(escapedLostItems);
		},[])
	}
	
	BM.displayRewards();
	BM.gainRewards();
	SirL.MPRewardsForEscaping.loseRewards(BM._rewards.lostItems);
}
SirL.MPRewardsForEscaping.makeItemsForEscape = function(enemy,listType) {
    const rate = enemy.dropItemRate();
	kinds = [,"Item","Weapon","Armor"]
	drops = SirL.MPCore.toList(SirL.MPCore.metaProp(enemy.enemy(), "SirL.partyEscape"+listType))
    return drops.reduce((r, di) => {
		di.kind = kinds.indexOf(di.type)
        if (di.kind > 0 && Math.random() * di.probability < rate) {
            return r.concat(enemy.itemObject(di.kind, di.id));
        } else {
            return r;
        }
    }, []);
}
SirL.MPRewardsForEscaping.loseRewards = function(lostItems) {
	if (lostItems.length > 0) {
		$gameMessage.newPage();
		for (const item of lostItems) {
			if($gameParty.numItems(item)){
				$gameParty.gainItem(item, -1, SirL.MPCore.toBoolean(PluginManager.parameters(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName)["RewardsForEscaping.includeEquip"]));
				$gameMessage.add(PluginManager.parameters(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName)["RewardsForEscaping.lostItem"].format(item.name));
			}
		}
    }
}
SirL.MPRewardsForEscaping.obtainLostText = function(type, ...formatting) {
	return PluginManager.parameters(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName)[type].format(...formatting)
}
SirL.MPTileBasedScaling.refresh = function(){
	if(typeof SceneManager._scene.prepare == "function"){ //Does the scene require prepare step, then
		needParameters = SirL.MPCore.getFnParamNames(SceneManager._scene.prepare)
		SirL.MPTileBasedScaling.preparedStorage = []
		needParameters.forEach(parameter => SirL.MPTileBasedScaling.preparedStorage.push(SceneManager._scene["_"+parameter]))
	}
	SirL.MPTileBasedScaling.customZoom = $gameSystem._sirL.savablePP.TBS_zoom;
	$gameScreen.setZoom(0,0, SirL.MPTileBasedScaling.customZoom);
	 $gamePlayer.center($gamePlayer.x,$gamePlayer.y);
	 if (!SirL.MPTileBasedScaling.container) {
        SirL.MPTileBasedScaling.undertakeSpritePicture();
      }
}
SirL.MPTileBasedScaling.calculate = function(){
	if(SceneManager._scene.constructor.name == "Scene_Battle" && SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["TileBasedScaling.fOrS_battleback"] == "true") {
		//Letterboxing for battles, refresh the battle so sprites reload in right location
		return
	}
	tileSize = $dataSystem.tileSize || 48
	windowWidthInTiles = window.innerWidth/tileSize;
	windowHeightInTiles = window.innerHeight/tileSize;
    if(!$dataMap){ //Default value if map doesn't exist
		$dataMap = {width:Number.MAX_SAFE_INTEGER, height:Number.MAX_SAFE_INTEGER}
	}
	if($gameSystem && $dataSystem){
		switch(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["TileBasedScaling.scaleType"]){
			case "Custom":
				ratio = new Function("return "+ SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["TileBasedScaling.customScale"].toString())();
			break;
			case "Fixed Width - Legacy Subtractive":
				ratio = Math.min(  $dataMap.width / (windowWidthInTiles ), $dataSystem.advanced.screenWidth / (window.innerWidth))
			break;
			case "Fixed Height - Legacy Additive":
				ratio = Math.min(  $dataMap.height / (windowHeightInTiles), $dataSystem.advanced.screenHeight / (window.innerHeight))
			break
			case "Fixed to Short":
				ratio = Math.max(Math.min($dataSystem.advanced.screenHeight / (window.innerHeight), $dataMap.height / (windowHeightInTiles)),Math.min($dataSystem.advanced.screenWidth / (window.innerWidth), $dataMap.width / (windowWidthInTiles )))
			break
			case "Fixed to Zoom":
				ratio = 1
			break
			default: //Fixed to Long
				ratio = Math.min( $dataMap.width / (windowWidthInTiles ), $dataMap.height / (windowHeightInTiles), $dataSystem.advanced.screenWidth / (window.innerWidth), $dataSystem.advanced.screenHeight / (window.innerHeight))
			break;
		};
		//May split in the future for Width and Height.
		SirL.MPTileBasedScaling.customZoom = 1/(ratio * (1/$gameSystem._sirL.savablePP.TBS_zoom));
		if (window.innerWidth > window.innerHeight){
			scale = $dataSystem.advanced.screenHeight / (window.innerHeight)
			width = window.innerWidth * scale
			SirL.MPTileBasedScaling.customZoom = SirL.MPTileBasedScaling.customZoom * scale
			Graphics.resize(width,$dataSystem.advanced.screenHeight)
		} else {
			scale = $dataSystem.advanced.screenWidth / (window.innerWidth)
			height = window.innerHeight * scale
			SirL.MPTileBasedScaling.customZoom = SirL.MPTileBasedScaling.customZoom * scale
			Graphics.resize($dataSystem.advanced.screenWidth ,height)
		}
		//Graphics.resize(window.innerWidth,window.innerHeight);
		oldBoxSize = Graphics.boxWidth * Graphics.boxHeight
		Graphics.boxWidth = ($dataSystem.advanced.uiAreaWidth / $dataSystem.advanced.screenWidth) * Graphics.width
		Graphics.boxHeight = ($dataSystem.advanced.uiAreaHeight / $dataSystem.advanced.screenHeight) * Graphics.height
		if(oldBoxSize != Graphics.boxWidth * Graphics.boxHeight){
			if($gamePlayer){
				prevFadeType = $gamePlayer.fadeType()
				$gamePlayer._fadeType = 0
			}
			if(!SceneManager.isSceneChanging()){
				SceneManager.goto(eval(SceneManager._scene.constructor.name));
			}
			if($gamePlayer){
				$gamePlayer._fadeType = prevFadeType
				$gamePlayer.center($gamePlayer.x,$gamePlayer.y)
			}
		}
	}
}
SirL.MPTileBasedScaling.undertakeSpritePicture = function (){
	//Code from ScreenZoom.js by Sasuke KANNAZUKI under the MIT license.
	scene = SceneManager._scene
	if( !(scene._spriteset)){
		return;
	}
	SirL.MPTileBasedScaling.container = SirL.MPTileBasedScaling.removePictureContainer(scene._spriteset);
	scene.removeChild(scene._windowLayer);
	scene.addChild(SirL.MPTileBasedScaling.container);
    scene.addChild(scene._windowLayer);
}
SirL.MPTileBasedScaling.removePictureContainer = function(spriteSet){
	//Code from ScreenZoom.js by Sasuke KANNAZUKI under the MIT license.
	spriteSet.removeChild(spriteSet._pictureContainer);
    return spriteSet._pictureContainer;
}
SirL.MPTileBasedScaling.stretchPosition = function(sbb) {
    sbb.width = sbb.bitmap.width;
    sbb.height = sbb.bitmap.height
	zoomFactor = 1/SirL.MPTileBasedScaling.customZoom
	sbb.scale.x = ( Graphics.width/$dataSystem.advanced.screenWidth) * zoomFactor;
    sbb.scale.y = ( Graphics.height/$dataSystem.advanced.screenHeight) * zoomFactor;
    sbb.x = (-92) * sbb.scale.x; //Don't like it hard coded, but this nearly works perfectly
    if ($gameSystem.isSideView()) {
        sbb.y = (-116) * sbb.scale.y; //Don't like it hard coded, but this nearly works perfectly
    } else {
        sbb.y = 0;
    }
}
SirL.MPdEST.trigger = function(parent,conditionalLogic, TriggerEventSwitch, Directions = [0], TriggerSelfSwitch = {}){
	selfTrigger = false;
	hitEvents = []
	for (var dir of Directions){
		vert = ""
		if(isNaN(dir)){
			vert = dir.slice(1)
			dir = dir.slice(0,-1)
		}
		switch(dir){
			case 0: //direction parent is facing
				x = $gameMap.roundXWithDirection(parent.x, parent.direction())
				y = $gameMap.roundYWithDirection(parent.y, parent.direction())
				break;
			case 5: //spot parent is on
				x = parent.x;
				y= parent.y;
				break;
			default: //All other normal directions 2,4,6,8
				x = $gameMap.roundXWithDirection(parent.x, dir)
				y = $gameMap.roundYWithDirection(parent.y, dir)
		};
		if (vert){
			eventsThere =  $gameMap.eventsXy(x,y)
			eventsThere.push(parent)
			eventsThere = eventsThere.sort(SirL.MPdEST.compareEventRenderLayer)
			if( vert.toLowerCase() == "a"){
				//Above | The +1 is to remove the parent from the eventsThere
				eventsThere = eventsThere.slice(eventsThere.indexOf(parent) + 1, eventsThere.indexOf(parent) + eventsThere.length);
			} else {
				//Below | Parent is removed from eventsThere as well
				eventsThere = eventsThere.splice(0, eventsThere.indexOf(parent))
			}
		} else {
			eventsThere =  $gameMap.eventsXy(x,y)
		}
		eventsThere.forEach(function(event){
			var selfSwitches = Object.keys($gameSelfSwitches._data).reduce((retDic,key) => {
				if(key.includes(event._mapId + ',' + event.eventId())){
					retDic[ key[key.length -1] ] = $gameSelfSwitches.value(key);
				}
				return retDic;
			},{});
			if (eval(conditionalLogic)){
				selfTrigger = true;
				hitEvents.push(event)
				Object.entries(TriggerEventSwitch).forEach(trigger => $gameSelfSwitches.setValue([$gameMap._mapId, event._eventId, trigger[0]], trigger[1]))
			}
		});
		if(selfTrigger) {
			Object.entries(TriggerSelfSwitch).forEach(trigger => $gameSelfSwitches.setValue([$gameMap._mapId, parent._eventId, trigger[0]], trigger[1]))
		}
	}
	return hitEvents;
}
SirL.MPdEST.compareEventRenderLayer = function(event1, event2){
	if (event1._priorityType == event2._priorityType){
		if( (event1._characterName[0] == "!") == (event2._characterName[0] == "!")){
			return event1._eventId - event1._eventId;
		} else {
			return (event1._characterName[0] == "!") - (event2._characterName[0] == "!");
		}
	} else {
		return event1._priorityType - event2._priorityType;
	}
}
SirL.MPeAE.approach = function(parent, eventId){
	parent.moveTowardCharacter($gameMap.event(eventId));
}
SirL.MPRandomInLine.step = function(parent, ...regionIds){
	var d = parent.direction()
	var x2 = $gameMap.roundXWithDirection(parent.x, d);
    var y2 = $gameMap.roundYWithDirection(parent.y, d);
	var nextStepInRegion = !regionIds.length;
	
	for (var i = 0; i < regionIds.length; i++) {
		if (regionIds[i] === $gameMap.regionId(x2, y2)) {
			nextStepInRegion = true;
			break;
		};
	};
	
	if (!nextStepInRegion || !$gameMap.isValid(x2, y2) || !parent.canPass(parent.x, parent.y, d)){
		parent.turnRandom()
	} else {
		parent.moveStraight(d);
	}
};
SirL.MPRepeatNext.move = function(parent, iterations){
	if(iterations <= 0) iterations = 1; //Protection against non-existent arrays
	nextMoves = Array(iterations).fill(parent._moveRoute["list"][parent._moveRouteIndex + 1]);
	if(nextMoves[0]["code"] == 45){
		//Check to see if you are trying to make infinite loop
		if(nextMoves[0]["parameters"][0].includes("repeatNextMove")){
			parent._moveRoute["list"].splice(parent._moveRouteIndex,1);
			parent._moveRouteIndex = parent._moveRouteIndex-1
			return
		}
	}
	parent._moveRoute["list"].splice(parent._moveRouteIndex,2, ...nextMoves);
	parent._moveRouteIndex = parent._moveRouteIndex-1
};
SirL.MPEventCloner.getMap = function(src){
	return new Promise(function(resolve,reject){
		const xhr = new XMLHttpRequest();
		const url = "data/" + src;
		xhr.open("GET", url);
		xhr.overrideMimeType("application/json");
		xhr.onerror = function (){
			reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
		}
		xhr.onload = function(){
			if (xhr.status < 400) {
				resolve(JSON.parse(xhr.responseText));
			} else {
				xhr.onerror()
			}
		}
		xhr.send();
	});
}
SirL.MPEventCloner.getEventAtId = function(mapId,eventId,eventOverride={}){
	SirL_MPEventCloner_getMap(mapId).then(SirL.MPEventCloner.getNewEvent.bind(null,eventId,eventOverride,mapId))
}
SirL.MPEventCloner.getNewEvent = function(eventId, eventOverride, mapId, map){
	originalEvent = map.events[eventId]
	eventOverride["spawnedEventId"] = eventId
	eventOverride["spawnedMapId"] = mapId
	if(eventOverride.hasOwnProperty('_eventId')){
		originalEvent.id = eval(eventOverride._eventId.toString())
		$dataMap.events[eventOverride._eventId] = originalEvent
		originalEvent = new Game_Event($gameMap._mapId, eval(eventOverride._eventId.toString()))
	} else{
		originalEvent.id = $dataMap.events.length
		$dataMap.events.push(originalEvent)
		originalEvent = new Game_Event($gameMap._mapId,$dataMap.events.length-1)
	}
	overrideData = eventOverride
	for(let overrideEntryId = 0; overrideEntryId < Object.keys(overrideData).length;overrideEntryId++){
		originalEvent[Object.keys(overrideData)[overrideEntryId]] = eval(Object.values(overrideData)[overrideEntryId].toString())
	}
	$gameMap._events[originalEvent._eventId] = originalEvent
	prevFadeType = $gamePlayer.fadeType()
	$gamePlayer._fadeType = 0
	SceneManager.goto(Scene_Map);
	$gamePlayer._fadeType = prevFadeType
}
SirL.MPRestoreEventCommands.restoreEvent = function(event){
	if(event){
		event._erased = false;
		$gameMap.refresh();
	}
}
SirL.MPTileEvent.tileId = function(x, y, z,map) {
    const width = map.width;
    const height = map.height;
    return map.data[(z * height + y) * width + x] || 0;
}
SirL.MPTileEvent.layeredTiles = function(x, y,map) {
    const tiles = [];
    for (let i = 0; i < 4; i++) {
        tiles.push(SirL.MPTileEvent.tileId(x, y, 3 - i,map));
    }
	tiles.push($dataTilesets[map.tilesetId].name)
    return tiles;
}
SirL.MPTileEvent.getMap = function(src){
	return new Promise(function(resolve,reject){
		const xhr = new XMLHttpRequest();
		const url = "data/" + src;
		xhr.open("GET", url);
		xhr.overrideMimeType("application/json");
		xhr.onerror = function (){
			reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
		}
		xhr.onload = function(){
			if (xhr.status < 400) {
				resolve(JSON.parse(xhr.responseText));
			} else {
				xhr.onerror()
			}
		}
		xhr.send();
	});
}
SirL.MPTileEvent.checkTileEvent = function(wasMoving){
	tiles = []
	loc = []
	x = $gamePlayer.x
	y = $gamePlayer.y
	loc.push([x,y])
	tiles.push($gameMap.allTiles(x,y).splice(-4).toString())
	switch($gamePlayer.direction()){
		case 8: //Up
			y = y-1
		break;
		case 4: //Left
			x = x-1
		break;
		case 2: //Down
			y = y+1
		break;
		case 6: //Right
			x = x+1
		break;
	};
	loc.push([x,y])
	tiles.push($gameMap.allTiles(x,y).splice(-4).toString())
	SirL.MPTileEvent.triggerEvent(wasMoving,tiles,loc)
}
SirL.MPTileEvent.triggerEvent = function(wasMoving,tiles,loc){
	name = $gameMap.tileset().name
	buttonPressed = Input.isTriggered("ok") 
	touch = TouchInput.isTriggered() && JSON.stringify(loc).includes(JSON.stringify([$gameMap.canvasToMapX(TouchInput._triggerX),$gameMap.canvasToMapY(TouchInput._triggerY)]))
	if (name in SirL.MPTileEvent.linkage && (wasMoving || buttonPressed || touch)){
		protentialTiles = SirL.MPTileEvent.linkage[$gameMap.tileset().name]
		if(tiles[0] in protentialTiles || tiles[1] in protentialTiles){ // on-top or by
			if(buttonPressed || touch){
				events = [];
				events =  events.concat(protentialTiles.hasOwnProperty(tiles[0]) ? protentialTiles[tiles[0]]["ButtonOn"] : []);
				if(!events.length){
					events =  events.concat(protentialTiles.hasOwnProperty(tiles[1]) ? protentialTiles[tiles[1]]["ButtonBy"] : []);
				}
				if(!events.length){
					events =  events.concat(protentialTiles.hasOwnProperty(tiles[0]) ? protentialTiles[tiles[0]]["Button"] : []);
					events =  events.concat(protentialTiles.hasOwnProperty(tiles[1]) ? protentialTiles[tiles[1]]["Button"] : []);
				}
				for(eventId = 0; eventId < events.length; eventId++){$gameTemp.reserveCommonEvent(events[eventId])}
				return
			} else {
				events = [];
				events =  events.concat(protentialTiles.hasOwnProperty(tiles[0]) ? protentialTiles[tiles[0]]["OnOnly"] : []);
				if(!events.length){
					events =  events.concat(protentialTiles.hasOwnProperty(tiles[1]) ? protentialTiles[tiles[1]]["ByOnly"] : []);
				}
				if(!events.length){
					events =  events.concat(protentialTiles.hasOwnProperty(tiles[0]) ? protentialTiles[tiles[0]]["On"] : []);
					events =  events.concat(protentialTiles.hasOwnProperty(tiles[1]) ? protentialTiles[tiles[1]]["By"] : []);
				}
				for(eventId = 0; eventId < events.length; eventId++){$gameTemp.reserveCommonEvent(events[eventId])}
				return
			}
		}
	}
}
SirL.MPEnemyEscapeRevamp.escapedMembers = function(troop){
	return troop.members().filter(member => SirL.MPEnemyEscapeRevamp.isEscaped(member));
}
SirL.MPEnemyEscapeRevamp.isEscaped = function(enemy){
	return enemy._escaped;
}
SirL.MPEnemyEscapeRevamp.makeDropItemsOnEscape = function(enemy) {
    const rate = enemy.dropItemRate();
	kinds = [,"Item","Weapon","Armor"]
	drops = SirL.MPCore.toList(SirL.MPCore.metaProp(enemy.enemy(), "SirL.escapeDrops"))
    return drops.reduce((r, di) => {
		di.kind = kinds.indexOf(di.type)
        if (di.kind > 0 && Math.random() * di.probability < rate) {
            return r.concat(enemy.itemObject(di.kind, di.id));
        } else {
            return r;
        }
    }, []);
}
SirL.MPEnemyStatsFormula.evalParamFormula = function(enemy,formula){
	try {
		const e = enemy;
		const v = $gameVariables._data;
		const t = $gameTroop;
		const p = $gameParty;
		const value = Math.max(eval(formula),0)
		return isNaN(value) ? 0 : value;
	} catch (e) {
		return 0
	}
}
SirL.MPSkillCostDisplay.getShowSkillCostList = function(){
	retObj = []
	SkillCostList = SirL.MPCore.toList(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["SkillCostDisplay.skillTypes"])
	for (i = 0; i < SkillCostList.length; i++){
		skillData = JSON.parse(SkillCostList[i])
		retObj.push([skillData["SkillCostDisplay.Skill Type Name"], skillData["SkillCostDisplay.Skill Type Render Name"]])
	}
	return retObj
}
SirL.MPSkillCostDisplay.getShowSkillCostColorList = function(i){
	return JSON.parse(SirL.MPCore.toList(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["SkillCostDisplay.skillTypes"])[i])["SkillCostDisplay.Skill Type Color"]
}
SirL.MPSkillCostDisplay.isShowMultiple = function(){
	return SirL.MPCore.toBoolean(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["SkillCostDisplay.multipleCosts"]);
}
SirL.MPSkillCostDisplay.showLabel = function(cost, type){
	if (typeof TextManager[type.toLowerCase] != "undefined"){
		type = TextManager[type.toLowerCase]()
	}
	switch(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["SkillCostDisplay.costLabel"]){
		case "right":
			return cost.toString() + " " +type;
			break;
		case "left":
			return type + " " + cost.toString();
			break;
		default:
			return cost.toString();
			break;
	};
}
SirL.MPSkillCostDisplay.getFreeObject = function(){
	if(SirL.MPCore.toBoolean(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["SkillCostDisplay.ShowFree"])){
		return [SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["SkillCostDisplay.FreeColor"],SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["SkillCostDisplay.FreeTerm"]]
	}
	return []
}
SirL.MPSkillCostFormula.evalCostFormula = function(caster, formula){
	try {
		const a = caster;
		const v = $gameVariables._data;
		const value = eval(formula)
		return isNaN(value) ? 0 : value;
	} catch (e) {
		return 0
	}
}
SirL.MPSkillCostFormula.skillAltCost = function(caster, type, skill){
	if (typeof SirL.MPCore.metaProp(skill, 'SirL.'+type+'Cost') == "undefined"){
		try{return caster["skill"+type+"Cost"](skill)} catch(err){return 0}
	} else{
		return SirL.MPSkillCostFormula.evalCostFormula(caster,SirL.MPCore.metaProp(skill, 'SirL.'+type+'Cost'));
	}
}
SirL.MPSkillCostSorter.setUsedTime = function(skill,actor,window){
	if (skill["lastUsed"+window+"Time"] === undefined) { skill["lastUsed"+window+"Time"] = [] }
	skill["lastUsed"+window+"Time"][actor._actorId] = Date.now()
}
SirL.MPSkillCostSorter.getUsedTime = function(skill,actor){
	actorId = actor._actorId
	battleValue = SirL.MPSkillCostSorter.getUsedBattleTime(skill,actor)
	menuValue = SirL.MPSkillCostSorter.getUsedMenuTime(skill,actor)
	return (battleValue > menuValue) ? battleValue : menuValue;
}
SirL.MPSkillCostSorter.getUsedBattleTime = function(skill,actor){
	try{exists = skill["lastUsedBattleTime"][actor._actorId] === undefined} catch(err){exists = true}
	if (exists){
		return 0;
	} else {
		return skill["lastUsedBattleTime"][actor._actorId]
	}
}
SirL.MPSkillCostSorter.getUsedMenuTime = function(skill,actor){
	try{exists = skill["lastUsedMenuTime"][actor._actorId] === undefined} catch(err){exists = true}
	if (exists){
		return 0;
	} else {
		return skill["lastUsedMenuTime"][actor._actorId]
	}
}
SirL.MPWeaponStatsRestrictions.weaponStatRestriction = function(weapon,actor){
	return  !Function(['a','w'],'return '+SirL.MPCore.metaProp(weapon, "SirL.weaponRestrict")+";")(actor,weapon)
}
async function SirL_MPEventCloner_getMap(mapId){
	mapFile = "Map%1.json".format((mapId).padZero(3))
	Map = await SirL.MPEventCloner.getMap(mapFile)
	return Map
}
async function SirL_MPEventCloner_popDataMapWSpawns(event,map){
	while (!$dataMap)
        await SirL.MPCore.threadedDelay(1000);
	$dataMap.events[event._eventId] = map.events[event.spawnedEventId]
	$dataMap.events[event._eventId].id = event._eventId
}
async function SirL_MPTileEvent_parameterParser(){
	parsedData = {}
	connections = JSON.parse(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["TileEvent.connections"])
	for(connectionId = 0; connectionId < connections.length; connectionId++){
		connection = JSON.parse(connections[connectionId])
		tiles = JSON.parse(connection["TileEvent.tiles"])
		buttonCalls = JSON.parse(connection["TileEvent.buttonCalls"])
		buttonOnCalls = JSON.parse(connection["TileEvent.buttonCallsOn"])
		buttonByCalls = JSON.parse(connection["TileEvent.buttonCallsBy"])
		byCalls = JSON.parse(connection["TileEvent.byCalls"])
		byOnlyCalls = JSON.parse(connection["TileEvent.byOnlyCalls"])
		onCalls = JSON.parse(connection["TileEvent.onCalls"])
		onOnlyCalls = JSON.parse(connection["TileEvent.onOnlyCalls"])
		for(tileId = 0; tileId < tiles.length; tileId++){
			tile = JSON.parse(tiles[tileId])
			tile = await SirL_MPTileEvent_getTileMap(parseInt(tile["TileEvent.mapId"]),parseInt(tile["TileEvent.tileX"]),parseInt(tile["TileEvent.tileY"]))
			tileSet = tile.pop()
			parsedData[tileSet] = parsedData[tileSet] || {}
			parsedData[tileSet][tile] = {}
			parsedData[tileSet][tile]["Button"]  = []
			parsedData[tileSet][tile]["ButtonOn"]  = []
			parsedData[tileSet][tile]["ButtonBy"]  = []
			parsedData[tileSet][tile]["By"]  = []
			parsedData[tileSet][tile]["ByOnly"]  = []
			parsedData[tileSet][tile]["On"]  = []
			parsedData[tileSet][tile]["OnOnly"]  = []
			for(buttonCallIds = 0; buttonCallIds < buttonCalls.length; buttonCallIds++){
				parsedData[tileSet][tile]["Button"].push(parseInt(buttonCalls[buttonCallIds]))
			}
			for(buttonOnCallIds = 0; buttonOnCallIds < buttonOnCalls.length; buttonOnCallIds++){
				parsedData[tileSet][tile]["ButtonOn"].push(parseInt(buttonOnCalls[buttonOnCallIds]))
			}
			for(buttonByCallIds = 0; buttonByCallIds < buttonByCalls.length; buttonByCallIds++){
				parsedData[tileSet][tile]["ButtonBy"].push(parseInt(buttonByCalls[buttonByCallIds]))
			}
			for(byCallIds = 0; byCallIds < byCalls.length; byCallIds++){
				parsedData[tileSet][tile]["By"].push(parseInt(byCalls[byCallIds]))
			}
			for(byOnlyCallIds = 0; byOnlyCallIds < byOnlyCalls.length; byOnlyCallIds++){
				parsedData[tileSet][tile]["ByOnly"].push(parseInt(byOnlyCalls[byOnlyCallIds]))
			}
			for(onCallIds = 0; onCallIds < onCalls.length; onCallIds++){
				parsedData[tileSet][tile]["On"].push(parseInt(onCalls[onCallIds]))
			}
			for(onOnlyCallIds = 0; onOnlyCallIds < onOnlyCalls.length; onOnlyCallIds++){
				parsedData[tileSet][tile]["OnOnly"].push(parseInt(onOnlyCalls[onOnlyCallIds]))
			}
		}
	}
	return parsedData
}
async function SirL_MPTileEvent_getTileMap(mapId, x, y){
	mapFile = "Map%1.json".format((mapId).padZero(3))
	Map = await SirL.MPTileEvent.getMap(mapFile)
	return SirL.MPTileEvent.layeredTiles(x,y,Map)
}
Game_BattlerBase.prototype.canUse = function(item) {
    if(!this.ammo){
       SirL.MPaD.initializeAmmo(this)
    }
    if (!item) {
        return false;
    } else if (DataManager.isSkill(item)) {
        return this.meetsSkillConditions(item);
    } else if (DataManager.isItem(item)) {
        return this.meetsItemConditions(item);
    } else {
        return false;
    }
};
SirL.MPCore.parseParam = function(param){
    function parser(parseData){
		let newParseArray = []
		let newParseObject = {}
		switch(parseData.constructor.name){
			case "String":
				try{
					if (["{","["].includes(parseData.charAt(0)) ){
						parseData = parser(JSON.parse(parseData))
						return parseData
					} else if (!isNaN(parseData) && parseData.length){
						return parseInt(parseData)
					} else {
						return parseData
					}
				} catch(err){
					return parseData
				}
				break;
			case "Array":
				newParseArray = []
				for (element of parseData){
					newParseArray.push(parser(element))
				}
				return newParseArray
				break;
			case "Object":
				newParseObject = {}
				for (element of Object.keys(parseData)){
					newParseObject[element] = parser(parseData[element])
				}
				return newParseObject
				break;
			case "Boolean":
			case "Number":
				return parseData
				break;
			default:
				console.log("ERROR")
		};
	}
    return parser(param)
};
SirL.MPCore.metaProp = function(obj, key, value=null){
	if (!obj.hasOwnProperty("sirLMeta")){ //Create if missing
		//For logic on regex visit: https://jex.im/regulex/#!flags=g&re=%5C%3C(.*%3F)(%3F%3A%5C%3A(.*%3F)%5C%3E(%3F%3D%5Cs*(%3F%3A%5C%3C%7C%24))%7C(%3F%3A(%3F%3A%5C%3E(.*%3F)(%3F%3A%5C%3C%5C%2F%5C1%5C%3E))%7C%5C%3E))
		const regExp =/\<(.*?)(?:\:(.*?)\>(?=\s*(?:\<|$))|(?:(?:\>(.*?)(?:\<\/\1\>))|\>))/gs;
		obj.sirLMeta = {};
		for (;;) {
			const match = regExp.exec(obj.note);
			if (match) {
				//match[1] is key, match[2] is value in ':' format, match[3] is value in XML style, if none set to true
				obj.sirLMeta[match[1]] = match[2] || match[3] || true
			} else {
				break;
			}
		}
	}
	if(value){ //setter
		obj.sirLMeta[key] = value
		return value
	} else { //getter
		return obj.sirLMeta[key]
	}
};
Game_Follower.prototype.update = function() {
    Game_Character.prototype.update.call(this);
	if (typeof this.actor() == "undefined"){
		return
	}
    this.setMoveSpeed($gamePlayer.realMoveSpeed());
	this.setOpacity(
		SirL.MPfSV.customFollowerSettings("Opacity", this) ?? $gamePlayer.opacity()
	)
	this.setBlendMode(
		SirL.MPfSV.customFollowerSettings("BlendMode", this) ?? $gamePlayer.blendMode()
	)
	this.setWalkAnime(
		SirL.MPfSV.customFollowerSettings("WalkAnime", this) ?? $gamePlayer.hasWalkAnime()
	)
	this.setStepAnime(
		SirL.MPfSV.customFollowerSettings("StepAnime", this) ?? $gamePlayer.hasStepAnime()
	)
	this.setDirectionFix(
		SirL.MPfSV.customFollowerSettings("DirectionFix", this) ?? $gamePlayer.isDirectionFixed()
	)
	this.setDirection(
		SirL.MPfSV.customFollowerSettings("Direction", this) ?? this.direction()
	)
	this.setTransparent(
		SirL.MPfSV.customFollowerSettings("Transparent", this) ?? $gamePlayer.isTransparent()
	)
};
SirL.MPCore.metaProp = function(obj, key, value=null){
	if (!obj.hasOwnProperty("sirLMeta")){ //Create if missing
		//For logic on regex visit: https://jex.im/regulex/#!flags=g&re=%5C%3C(.*%3F)(%3F%3A%5C%3A(.*%3F)%5C%3E(%3F%3D%5Cs*(%3F%3A%5C%3C%7C%24))%7C(%3F%3A(%3F%3A%5C%3E(.*%3F)(%3F%3A%5C%3C%5C%2F%5C1%5C%3E))%7C%5C%3E))
		const regExp =/\<(.*?)(?:\:(.*?)\>(?=\s*(?:\<|$))|(?:(?:\>(.*?)(?:\<\/\1\>))|\>))/gs;
		obj.sirLMeta = {};
		for (;;) {
			const match = regExp.exec(obj.note);
			if (match) {
				//match[1] is key, match[2] is value in ':' format, match[3] is value in XML style, if none set to true
				obj.sirLMeta[match[1]] = match[2] || match[3] || true
			} else {
				break;
			}
		}
	}
	if(value){ //setter
		obj.sirLMeta[key] = value
		return value
	} else { //getter
		return obj.sirLMeta[key]
	}
};
Game_Party.prototype.gainItem = function(item, amount, includeEquip) {
    const container = this.itemContainer(item);
    if (container) {
        const lastNumber = this.numItems(item);
        const newNumber = lastNumber + amount;
        container[item.id] = newNumber.clamp(0, this.maxItems(item));
        if (container[item.id] === 0) {
            delete container[item.id];
        } else {
			if (SirL.hasOwnProperty('MPsCP')){
				if(!SirL.MPCore.metaProp(item,"SirL.isSeenBefore")){
					if (DataManager.isItem(item)) {
						if(!$gameSystem._sirL.MPsCP.haveSeen["item"].includes(item.id)){
							$gameSystem._sirL.MPsCP.haveSeen["item"].push(item.id)
						}
					} else if (DataManager.isWeapon(item)) {
						if(!$gameSystem._sirL.MPsCP.haveSeen["weapon"].includes(item.id)){
							$gameSystem._sirL.MPsCP.haveSeen["weapon"].push(item.id)
						}
					} else if (DataManager.isArmor(item)) {
						if(!$gameSystem._sirL.MPsCP.haveSeen["armor"].includes(item.id)){
							$gameSystem._sirL.MPsCP.haveSeen["armor"].push(item.id)
						}
					}
					SirL.MPCore.metaProp(item,"SirL.isSeenBefore",true)
				}
			}
		}
        if (includeEquip && newNumber < 0) {
            this.discardMembersEquip(item, -newNumber);
        }
        $gameMap.requestRefresh();
    }
};
Window_ShopBuy.prototype.isEnabled = function(item) {
	retObj = false;
	if(!this._data.includes(item)){return false}
	if (SirL.hasOwnProperty('MPsCP')){
		if(!SirL.MPCore.metaProp(item,"SirL.isSeenBefore")){
			if (DataManager.isItem(item)) {
				if($gameSystem._sirL.MPsCP.haveSeen["item"].includes(item.id)){
					SirL.MPCore.metaProp(item,"SirL.isSeenBefore","true")
				}
			} else if (DataManager.isWeapon(item)) {
				if($gameSystem._sirL.MPsCP.haveSeen["weapon"].includes(item.id)){
					SirL.MPCore.metaProp(item,"SirL.isSeenBefore","true")
				}
			} else if (DataManager.isArmor(item)) {
				if($gameSystem._sirL.MPsCP.haveSeen["armor"].includes(item.id)){
					SirL.MPCore.metaProp(item,"SirL.isSeenBefore","true")
				}
			}
		}
		if(typeof SirL.MPCore.metaProp(item,"SirL.purchaseEnable") == "undefined"){
			SirL.MPCore.metaProp(item,"SirL.purchaseEnable","true")
		};
		additional = new Function("item,shopBuy","return " + SirL.MPCore.metaProp(item,"SirL.purchaseEnable"))(item,this);
		retObj = new Function("additional, item, shopBuy","return " + SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["sCP.globalPurchaseEnable"])(additional,item, this)
	} else{
		retObj = item && this.price(item) <= this._money && !$gameParty.hasMaxItems(item)
	}
	return retObj;
};
Window_ShopBuy.prototype.makeItemList = function() {
	this._data = [];
	this._price = [];
	for (const goods of this._shopGoods) {
		item = this.goodsToItem(goods);
		if (item) {
			if (SirL.hasOwnProperty('MPsCP')){
				if(!SirL.MPCore.metaProp(item, "SirL.isSeenBefore")){
					if (DataManager.isItem(item)) {
                        if($gameSystem._sirL.MPsCP.haveSeen["item"].includes(item.id)){
                            SirL.MPCore.metaProp(item, "SirL.isSeenBefore","true")
                        }
                    } else if (DataManager.isWeapon(item)) {
                        if($gameSystem._sirL.MPsCP.haveSeen["weapon"].includes(item.id)){
                            SirL.MPCore.metaProp(item, "SirL.isSeenBefore","true")
                        }
                    } else if (DataManager.isArmor(item)) {
                        if($gameSystem._sirL.MPsCP.haveSeen["armor"].includes(item.id)){
                            SirL.MPCore.metaProp(item, "SirL.isSeenBefore","true")
                        }
                    }
				}
				if(typeof SirL.MPCore.metaProp(item, "SirL.purchaseShow") == "undefined" ){
					SirL.MPCore.metaProp(item, "SirL.purchaseShow", "true")
				};
				additional = new Function("item,shopBuy","return " + SirL.MPCore.metaProp(item, "SirL.purchaseShow"))(item,this);
				if(!new Function("additional,item, shopBuy","return " + SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["sCP.globalPurchaseShow"])(additional,item,this)){
					continue;
				}
			}
			defaultPrice = 0;
			try {
				if (typeof SirL.MPCore.metaProp(item, "SirL.setItemPrice") != "undefined"){
					defaultPrice = SirL.MPCore.evalDFLikeFormulas({
						i:item,p:$gameParty,
						v:$gameVariables._data
					}, SirL.MPCore.metaProp(item, "SirL.setItemPrice"))
				}
			} catch (err) {}
			defaultPrice = defaultPrice || item.price
			this._data.push(item);
			this._price.push(goods[2] === 0 ? defaultPrice : goods[3]);
		}
	}
};
Game_System.prototype.initialize =  function() {
	//Doesn't hurt but specifically for TileBasedScaling
	document.body.style.overflow = "hidden"
	window.addEventListener("resize",Graphics._onWindowResize)
	this._sirL ??= {};
	try{
		parsedParameters = SirL_MPTileEvent_parameterParser()
		parsedParameters.then(function(result){
			SirL.MPTileEvent.linkage = result;
		});
	} catch (err) {}
	
	try{
		this._sirL.MPsCP ??= {}
		this._sirL.MPsCP.haveSeen ??= {"item":[],"weapon":[],"armor":[]}
	} catch (err){}
	
	try{
		sPPs = SirL.savablePP;
		this._sirL.savablePP ??= {}
	} catch (err) { sPPs = []}
	for(sPPId = 0; sPPId < sPPs.length; sPPId++){
		sP = sPPs[sPPId]
		this._sirL.savablePP[sP.name] = new Function(sP.code)(this);
	}
	
	this._saveEnabled = true;
    this._menuEnabled = true;
    this._encounterEnabled = true;
    this._formationEnabled = true;
    this._battleCount = 0;
    this._winCount = 0;
    this._escapeCount = 0;
    this._saveCount = 0;
    this._versionId = 0;
    this._savefileId = 0;
    this._framesOnSave = 0;
    this._bgmOnSave = null;
    this._bgsOnSave = null;
    this._windowTone = null;
    this._battleBgm = null;
    this._victoryMe = null;
    this._defeatMe = null;
    this._savedBgm = null;
    this._walkingBgm = null;
};
SirL.MPCore.metaProp = function(obj, key, value=null){
	if (!obj.hasOwnProperty("sirLMeta")){ //Create if missing
		//For logic on regex visit: https://jex.im/regulex/#!flags=g&re=%5C%3C(.*%3F)(%3F%3A%5C%3A(.*%3F)%5C%3E(%3F%3D%5Cs*(%3F%3A%5C%3C%7C%24))%7C(%3F%3A(%3F%3A%5C%3E(.*%3F)(%3F%3A%5C%3C%5C%2F%5C1%5C%3E))%7C%5C%3E))
		const regExp =/\<(.*?)(?:\:(.*?)\>(?=\s*(?:\<|$))|(?:(?:\>(.*?)(?:\<\/\1\>))|\>))/gs;
		obj.sirLMeta = {};
		for (;;) {
			const match = regExp.exec(obj.note);
			if (match) {
				//match[1] is key, match[2] is value in ':' format, match[3] is value in XML style, if none set to true
				obj.sirLMeta[match[1]] = match[2] || match[3] || true
			} else {
				break;
			}
		}
	}
	if(value){ //setter
		obj.sirLMeta[key] = value
		return value
	} else { //getter
		return obj.sirLMeta[key]
	}
};
Graphics._onWindowResize = function() {
	if (SirL.hasOwnProperty('MPTileBasedScaling')){
		SirL.MPTileBasedScaling.calculate()
		SirL.MPTileBasedScaling.refresh()
	}
    Graphics._updateAllElements();
};
Game_Actor.prototype.initEquips = function(equips) {
    const slots = this.equipSlots();
    const maxSlots = slots.length;
    this._equips = [];
    for (let i = 0; i < maxSlots; i++) {
        this._equips[i] = new Game_Item();
    }
    for (let j = 0; j < equips.length; j++) {
        if (j < maxSlots) {
		if (equips[j] && SirL.hasOwnProperty('MPsCP')) {
			type = slots[j] === 1 ? "weapon" : "armor"
			if (!$gameSystem._sirL.MPsCP.haveSeen[type].includes(equips[j])) {
				$gameSystem._sirL.MPsCP.haveSeen[type].push(equips[j])
			}
		}
            this._equips[j].setEquip(slots[j] === 1, equips[j]);
        }
    }
    this.releaseUnequippableItems(true);
    this.refresh();
};
SirL.MPCore.evalDFLikeFormulas = function ({i,p,v,buyPrice}={},formula){
	try{
		const value = Math.max(eval(formula),0)
		return isNaN(value) ? 0 : value;
	} catch (e) {
		return 0
	}
};
Game_Interpreter.prototype.command101 = function(params) {
    if ($gameMessage.isBusy()) {
        return false;
    }
	
	try{
		customFaceData = SirL.MPActorByVariable.customFlag
	} catch (err){
		customFaceData = false
	};
	if(customFaceData){
		if (SirL.MPActorByVariable.resetFlag){SirL.MPActorByVariable.reset()}
		params[0] = SirL.MPActorByVariable.storedActor[0]
		params[1] = SirL.MPActorByVariable.storedActor[1]
	}
	
	try{
		if(params[4].includes(SirL.MPAccentManager.hideAfterChar)){
			speaker = params[4].split(SirL.MPAccentManager.hideAfterChar)
			$gameMessage.setSpeakerName(speaker[0].trim())
			accentIndex = SirL.MPAccentManager.names.indexOf(speaker[1].trim())
		} else {
			$gameMessage.setSpeakerName(params[4]);
			accentIndex = SirL.MPAccentManager.names.indexOf(params[4].trim())
		}
	} catch (err) {
		$gameMessage.setSpeakerName(params[4]);
		accentIndex = -1
	}
	
	if(accentIndex >= 0){
		accent = SirL.MPAccentManager.accents[accentIndex]
		params[0] = accent["AccentManager.faceFile"] || params[0]
		params[1] = accent["AccentManager.faceId"] || params[1]
		$gameMessage.setFaceImage(params[0], params[1]);
		bg = parseInt(accent["AccentManager.backgroundNum"])
		if(bg >= 0){
		$gameMessage.setBackground(bg);
		} else {
			$gameMessage.setBackground(params[2]);
		}
			
		pos = parseInt(accent["AccentManager.positionNum"])
		if(pos >= 0){
			$gameMessage.setPositionType(pos);
		} else {
			$gameMessage.setPositionType(params[3]);
		}
		while (this.nextEventCode() === 401) {
			// Text data
			this._index++;
			text = this.currentCommand().parameters[0]
			allAccentRules = SirL.MPAccentManager.globalRules.concat(JSON.parse(accent["AccentManager.rules"]).map(rule => JSON.parse(rule)))
			for( var ruleId = 0; ruleId < allAccentRules.length; ruleId++){
				rule = new RegExp(allAccentRules[ruleId]["AccentManager.searchValue"],'g')
				text = text.replace(rule,allAccentRules[ruleId]["AccentManager.newValue"]);
			}
			$gameMessage.add(text);
		}
	} else {
		$gameMessage.setFaceImage(params[0], params[1]);
		$gameMessage.setBackground(params[2]);
		$gameMessage.setPositionType(params[3]);
		while (this.nextEventCode() === 401) {
			// Text data
			this._index++;
			text = this.currentCommand().parameters[0]
			try {
				for( var ruleId = 0; ruleId < SirL.MPAccentManager.globalRules.length; ruleId++){
					rule = new RegExp(SirL.MPAccentManager.globalRules[ruleId]["AccentManager.searchValue"],'g')
					text = text.replace(rule,SirL.MPAccentManager.globalRules[ruleId]["AccentManager.newValue"]);
				}
			} catch (err) {}
			$gameMessage.add(text);
		}
	}    
    switch (this.nextEventCode()) {
        case 102: // Show Choices
            this._index++;
            this.setupChoices(this.currentCommand().parameters);
            break;
        case 103: // Input Number
            this._index++;
            this.setupNumInput(this.currentCommand().parameters);
            break;
        case 104: // Select Item
            this._index++;
            this.setupItemChoice(this.currentCommand().parameters);
            break;
		case 357: // Plugin Command
            this._index++; //Go to next line (plugin command)
			params = this.currentCommand().parameters
			PluginManager.callCommand(this, params[0], params[1], params[3]);
			
			nextIndex = this._index + 1
			while (this._list[nextIndex].code === 657) {
			  nextIndex++
			}
			this._index = nextIndex;
			if (this.currentCommand().code === 102){
				this.setupChoices(this.currentCommand().parameters);
			}
            break;
    }
    this.setWaitMode("message");
    return true;
};
Game_Actors.prototype.actor = function(actorId) {
    if ($dataActors[actorId]) {
        if (!this._data[actorId]) {
            this._data[actorId] = new Game_Actor(actorId);
        }  else if (!SirL.MPCore.shallowEqual(this._data[actorId],new Game_Actor(actorId))) {
			if(this._data[actorId].hasOwnProperty("clonedData") && !$dataActors[actorId].hasOwnProperty("clonedData")){
				$dataActors[actorId] = this._data[actorId]["clonedData"]
			}
		}
        return this._data[actorId];
    }
	if(this._data[actorId]){
		$dataActors[actorId] = this._data[actorId]["clonedData"];
		return this._data[actorId];
	}
    return null;
};
Game_Party.prototype.removeInvalidMembers = function() {
    for (const actorId of this._actors) {
        if (!$dataActors[actorId] && !$gameActors._data[actorId]) {
            this._actors.remove(actorId);
        }
    }
};
Game_Actor.prototype.setup = function(actorId) {
    const actor = $dataActors[actorId];
	if(actor.hasOwnProperty("clonedData")){this.clonedData = actor}
    this._actorId = actorId;
    this._name = actor.name;
    this._nickname = actor.nickname;
    this._profile = actor.profile;
    this._classId = actor.classId;
    this._level = actor.initialLevel;
    this.initImages();
    this.initExp();
    this.initSkills();
    this.initEquips(actor.equips);
    this.clearParamPlus();
    this.recoverAll();
};
SirL.MPCore.shallowEqual = function(object1, object2){
	//Thanks to https://dmitripavlutin.com/how-to-compare-objects-in-javascript/
    const keys1 = Object.keys(object1);
	const keys2 = Object.keys(object2);

	if (keys1.length !== keys2.length) {
		return false;
	}

	for (let key of keys1) {
		if (JSON.stringify(object1[key]) !== JSON.stringify(object2[key])) {
			return false;
		}
	}

  return true;
};
Window_ChoiceList.prototype.windowX = function() {
	try{
		customLoc = SirL.MPChoiceLocation.customFlag
	} catch (err){
		customLoc = false
	};
	if(customLoc){
		choiceList = this;
		return new Function(SirL.MPChoiceLocation.cWinX)(choiceList)
	}
    const positionType = $gameMessage.choicePositionType();
    if (positionType === 1) {
        return (Graphics.boxWidth - this.windowWidth()) / 2;
    } else if (positionType === 2) {
        return Graphics.boxWidth - this.windowWidth();
    } else {
        return 0;
    }
};
Window_ChoiceList.prototype.windowY = function() {
	try{
		customLoc = SirL.MPChoiceLocation.customFlag
	} catch (err){
		customLoc = false
	};
	if(customLoc){
		if (SirL.MPChoiceLocation.resetFlag){SirL.MPChoiceLocation.reset()}
		choiceList = this;
		return new Function(SirL.MPChoiceLocation.cWinY)(choiceList)
	}
    const messageY = this._messageWindow.y;
    if (messageY >= Graphics.boxHeight / 2) {
        return messageY - this.windowHeight();
    } else {
        return messageY + this._messageWindow.height;
    }
};
Window_Message.prototype.updateShowFast = function() {
    if (this.isTriggered()) {
		try {
			this._showFast =  $gameSystem._sirL.savablePP.skipText
		} catch (err) { this._showFast = true }
    }
};
Game_System.prototype.onBattleStart = function() {
    this._battleCount++;
	try{
		SirL.MPDelaySwitchVariables.checkDelays(this._battleCount, $gameSystem._sirL.savablePP['battleDelays'])
	} catch(err){}
};
Game_System.prototype.onBattleWin = function() {
    this._winCount++;
	try{
		SirL.MPDelaySwitchVariables.checkDelays(this._winCount, $gameSystem._sirL.savablePP['winDelays'])
	} catch(err){}
};
Game_System.prototype.onBattleEscape = function() {
    this._escapeCount++;
	try{
		SirL.MPDelaySwitchVariables.checkDelays(this._escapeCount, $gameSystem._sirL.savablePP['escapeDelays'])
	} catch(err){}
};
Game_System.prototype.onBeforeSave = function() {
    this._saveCount++;
	try{
		SirL.MPDelaySwitchVariables.checkDelays(this._saveCount, $gameSystem._sirL.savablePP['saveDelays'])
	} catch(err){}
    this._versionId = $dataSystem.versionId;
    this._framesOnSave = Graphics.frameCount;
    this._bgmOnSave = AudioManager.saveBgm();
    this._bgsOnSave = AudioManager.saveBgs();
};
SceneManager.updateFrameCount = function() {
    Graphics.frameCount++;
	try{
		SirL.MPDelaySwitchVariables.checkDelays(Graphics.frameCount, $gameSystem._sirL.savablePP['frameDelays'])
		if(!(Graphics.frameCount%60)){
			SirL.MPDelaySwitchVariables.checkDelays(Graphics.frameCount/60, $gameSystem._sirL.savablePP['secondDelays'])
			SirL.MPDelaySwitchVariables.checkDelays(Math.floor(Date.now() / 1000), $gameSystem._sirL.savablePP['rWSecondsDelay'])
		}
	} catch(err){}
};
Game_Party.prototype.increaseSteps = function() {
    this._steps++;
	try{
		SirL.MPDelaySwitchVariables.checkDelays(this._steps, $gameSystem._sirL.savablePP['stepDelays'])
	} catch(err){}
};
SirL.MPCore.parseParam = function(param){
    function parser(parseData){
		let newParseArray = []
		let newParseObject = {}
		switch(parseData.constructor.name){
			case "String":
				try{
					if (["{","["].includes(parseData.charAt(0)) ){
						parseData = parser(JSON.parse(parseData))
						return parseData
					} else if (!isNaN(parseData) && parseData.length){
						return parseInt(parseData)
					} else {
						return parseData
					}
				} catch(err){
					return parseData
				}
				break;
			case "Array":
				newParseArray = []
				for (element of parseData){
					newParseArray.push(parser(element))
				}
				return newParseArray
				break;
			case "Object":
				newParseObject = {}
				for (element of Object.keys(parseData)){
					newParseObject[element] = parser(parseData[element])
				}
				return newParseObject
				break;
			case "Boolean":
			case "Number":
				return parseData
				break;
			default:
				console.log("ERROR")
		};
	}
    return parser(param)
};
Window_Message.prototype.terminateMessage = function() {
	try {
		$gameScreen.erasePicture(SirL.MPCore.parseParam(PluginManager.parameters(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName))["fI2B.pictureLayer"]);
	} catch (err) {}
    this.close();
    this._goldWindow.close();
    $gameMessage.clear();
};
Window_Message.prototype.update = function() {
    this.checkToNotClose();
    Window_Base.prototype.update.call(this);
    this.synchronizeNameBox();
    while (!this.isOpening() && !this.isClosing()) {
	if(TouchInput.isTriggered() ){
		try{ state = $gameSystem._sirL.savablePP.enabledFL2B } catch (err){ state = false }
		if(state){
			p = [TouchInput.x, TouchInput.y]
			bl = [$gameMessage.isRTL() ? this.innerWidth - ImageManager.faceWidth - 15: 15, this.y + 15]
			tr = [bl[0] + ImageManager.faceWidth + 1, bl[1] + this.innerHeight  - 8]
			//https://www.tutorialspoint.com/check-if-a-point-lies-on-or-inside-a-rectangle-in-python
			if (p[0] > bl[0] && p[0] < tr[0] && p[1] > bl[1] && p[1] < tr[1]){
				try {
					params = SirL.MPCore.parseParam(PluginManager.parameters(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName))
					pictureLayer = params["fI2B.pictureLayer"]
					params = params["fI2B.pairings"].filter(pair => pair["fI2B.faceFile"] == $gameMessage.faceName() && pair["fI2B.faceId"] == $gameMessage.faceIndex())[0]
				} catch (err) {params = 0}
				if(params){
					//[Number, ImageName, Origin, Direct/Variable, X/VariableX, Y/VariableY, Width, Height, Opacity, BlendMode (starts at 0) ]
					params = [pictureLayer, params["fI2B.bustFile"], params["fI2B.bustOrigin"],
								params["fI2B.bustDesignation"], params["fI2B.bustX"], params["fI2B.bustY"],
								params["fI2B.bustScaleWidth"], params["fI2B.bustScaleHeight"], params["fI2B.bustOpacity"],
								params["fI2B.bustBlend"]]
					point = Game_Interpreter.prototype.picturePoint(params)
					$gameScreen.showPicture(
						params[0], params[1], params[2], point.x, point.y,
						params[6], params[7], params[8], params[9]
					);
					return;
				}
			} else {
				try {
					$gameScreen.erasePicture(SirL.MPCore.parseParam(PluginManager.parameters(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName))["fI2B.pictureLayer"]);
				} catch (err) {}
			}
		}
	}
        if (this.updateWait()) {
            return;
        } else if (this.updateLoading()) {
            return;
        } else if (this.updateInput()) {
            return;
        } else if (this.updateMessage()) {
            return;
        } else if (this.canStart()) {
            this.startMessage();
        } else {
            this.startInput();
            return;
        }
    }
};
SirL.MPCore.toList = function(string){
	return JSON.parse(string)
};
Game_BattlerBase.prototype.meetsSkillConditions = function(skill) {
	try{
		AtypeOk = SirL.MPArmorRequirementRevamp.isSkillAtypeOk(skill,this)
	} catch(err){AtypeOk = true}
	try{
		itemOk = SirL.MPItemRequirementRevamp.isSkillItemOk(skill)
	} catch(err){itemOk = true}
    return (
		itemOk &&
		AtypeOk &&
        this.meetsUsableItemConditions(skill) &&
        this.isSkillWtypeOk(skill) &&
        this.canPaySkillCost(skill) &&
        !this.isSkillSealed(skill.id) &&
        !this.isSkillTypeSealed(skill.stypeId)
    );
};
SirL.MPCore.metaProp = function(obj, key, value=null){
	if (!obj.hasOwnProperty("sirLMeta")){ //Create if missing
		//For logic on regex visit: https://jex.im/regulex/#!flags=g&re=%5C%3C(.*%3F)(%3F%3A%5C%3A(.*%3F)%5C%3E(%3F%3D%5Cs*(%3F%3A%5C%3C%7C%24))%7C(%3F%3A(%3F%3A%5C%3E(.*%3F)(%3F%3A%5C%3C%5C%2F%5C1%5C%3E))%7C%5C%3E))
		const regExp =/\<(.*?)(?:\:(.*?)\>(?=\s*(?:\<|$))|(?:(?:\>(.*?)(?:\<\/\1\>))|\>))/gs;
		obj.sirLMeta = {};
		for (;;) {
			const match = regExp.exec(obj.note);
			if (match) {
				//match[1] is key, match[2] is value in ':' format, match[3] is value in XML style, if none set to true
				obj.sirLMeta[match[1]] = match[2] || match[3] || true
			} else {
				break;
			}
		}
	}
	if(value){ //setter
		obj.sirLMeta[key] = value
		return value
	} else { //getter
		return obj.sirLMeta[key]
	}
};
SirL.MPCore.metaProp = function(obj, key, value=null){
	if (!obj.hasOwnProperty("sirLMeta")){ //Create if missing
		//For logic on regex visit: https://jex.im/regulex/#!flags=g&re=%5C%3C(.*%3F)(%3F%3A%5C%3A(.*%3F)%5C%3E(%3F%3D%5Cs*(%3F%3A%5C%3C%7C%24))%7C(%3F%3A(%3F%3A%5C%3E(.*%3F)(%3F%3A%5C%3C%5C%2F%5C1%5C%3E))%7C%5C%3E))
		const regExp =/\<(.*?)(?:\:(.*?)\>(?=\s*(?:\<|$))|(?:(?:\>(.*?)(?:\<\/\1\>))|\>))/gs;
		obj.sirLMeta = {};
		for (;;) {
			const match = regExp.exec(obj.note);
			if (match) {
				//match[1] is key, match[2] is value in ':' format, match[3] is value in XML style, if none set to true
				obj.sirLMeta[match[1]] = match[2] || match[3] || true
			} else {
				break;
			}
		}
	}
	if(value){ //setter
		obj.sirLMeta[key] = value
		return value
	} else { //getter
		return obj.sirLMeta[key]
	}
};
Game_BattlerBase.prototype.canPaySkillCost = function(skill) {
	altSkill_canPaySkillCost = true;
	try{
		altSkills = SirL.MPCore.toList(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["SkillCostFormula.Alt Types"])
	} catch(err){
		altSkills = []
	};
	for (i = 0; i < altSkills.length; i++){
		altSkill = JSON.parse(altSkills[i])
		altSource = SirL.MPSkillCostFormula.evalCostFormula(this,altSkill["SkillCostFormula.Alt Source"])
		if(altSource < SirL.MPSkillCostFormula.skillAltCost(this, altSkill["SkillCostFormula.Alt Name"],skill)){
			altSkill_canPaySkillCost = false;
		}
	}
	unrestrictedSkill = true;
	try{
		unrestrictedSkill = SirL.MPsR.restrict(this, skill)
	} catch(err) {}
		
    return (
        this._tp >= this.skillTpCost(skill) &&
        this._mp >= this.skillMpCost(skill) &&
		altSkill_canPaySkillCost &&
		unrestrictedSkill
    );
};
SirL.MPCore.metaProp = function(obj, key, value=null){
	if (!obj.hasOwnProperty("sirLMeta")){ //Create if missing
		//For logic on regex visit: https://jex.im/regulex/#!flags=g&re=%5C%3C(.*%3F)(%3F%3A%5C%3A(.*%3F)%5C%3E(%3F%3D%5Cs*(%3F%3A%5C%3C%7C%24))%7C(%3F%3A(%3F%3A%5C%3E(.*%3F)(%3F%3A%5C%3C%5C%2F%5C1%5C%3E))%7C%5C%3E))
		const regExp =/\<(.*?)(?:\:(.*?)\>(?=\s*(?:\<|$))|(?:(?:\>(.*?)(?:\<\/\1\>))|\>))/gs;
		obj.sirLMeta = {};
		for (;;) {
			const match = regExp.exec(obj.note);
			if (match) {
				//match[1] is key, match[2] is value in ':' format, match[3] is value in XML style, if none set to true
				obj.sirLMeta[match[1]] = match[2] || match[3] || true
			} else {
				break;
			}
		}
	}
	if(value){ //setter
		obj.sirLMeta[key] = value
		return value
	} else { //getter
		return obj.sirLMeta[key]
	}
};
SirL.MPCore.toList = function(string){
	return JSON.parse(string)
};
Game_Actor.prototype.isSkillWtypeOk = function(skill) {
	requiredWeapons = [skill.requiredWtypeId1,skill.requiredWtypeId2]
	try{
		noWeapon = SirL.MPCore.metaProp(skill, "SirL.No_Weapon") ?? false;
	} catch(err){
		noWeapon = false;
	}
	try{
		x = SirL.MPCore.toList(SirL.MPCore.metaProp(skill, "SirL.Required_Weapon"))
		requiredWeapons = requiredWeapons.concat(x)
	} catch (err) {}
	if((this.weapons().length == 0 && noWeapon) ||
		(!noWeapon && !requiredWeapons.reduce(function(t,n){return t+n}))){
		return true;
	} else {
		for(requiredWeaponId = 0; requiredWeaponId < requiredWeapons.length; requiredWeaponId++){
			if(this.isWtypeEquipped(requiredWeapons[requiredWeaponId])){
				return true;
			}
		}
		return false;
	}
};
SirL.MPCore.metaProp = function(obj, key, value=null){
	if (!obj.hasOwnProperty("sirLMeta")){ //Create if missing
		//For logic on regex visit: https://jex.im/regulex/#!flags=g&re=%5C%3C(.*%3F)(%3F%3A%5C%3A(.*%3F)%5C%3E(%3F%3D%5Cs*(%3F%3A%5C%3C%7C%24))%7C(%3F%3A(%3F%3A%5C%3E(.*%3F)(%3F%3A%5C%3C%5C%2F%5C1%5C%3E))%7C%5C%3E))
		const regExp =/\<(.*?)(?:\:(.*?)\>(?=\s*(?:\<|$))|(?:(?:\>(.*?)(?:\<\/\1\>))|\>))/gs;
		obj.sirLMeta = {};
		for (;;) {
			const match = regExp.exec(obj.note);
			if (match) {
				//match[1] is key, match[2] is value in ':' format, match[3] is value in XML style, if none set to true
				obj.sirLMeta[match[1]] = match[2] || match[3] || true
			} else {
				break;
			}
		}
	}
	if(value){ //setter
		obj.sirLMeta[key] = value
		return value
	} else { //getter
		return obj.sirLMeta[key]
	}
};
SirL.MPCore.toList = function(string){
	return JSON.parse(string)
};
Sprite_Animation.prototype.processSoundTimings = function(){
	processFrames = this._animation.soundTimings.filter(timing => timing["frame"] == this._frameIndex)
	try {
		variances= SirL.MPCore.parseParam(PluginManager.parameters(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pluginName))["aSV.soundVariances"].filter(sV => sV["aSV.animationId"] == this._animation.id)[0]["aSV.frameSelection"]
	} catch (err) { variances = []}
	varianceFrames = variances.filter(timing=> timing["aSV.frameIndex"] == this._frameIndex)
	for (frame of varianceFrames){
		selectedSound = frame["aSV.seSelection"][Math.floor(Math.random()*frame["aSV.seSelection"].length)]
		processFrames.push({
			"frame":frame["aSV.frameIndex"],
			"se":{"name":selectedSound["aSV.fileName"],
			"pan":selectedSound["aSV.pan"],
			"pitch":selectedSound["aSV.pitch"],
			"volume":selectedSound["aSV.volume"]}
		})
	}
	for (const timing of processFrames) {
		AudioManager.playSe(timing.se);
	}
};
SirL.MPCore.parseParam = function(param){
    function parser(parseData){
		let newParseArray = []
		let newParseObject = {}
		switch(parseData.constructor.name){
			case "String":
				try{
					if (["{","["].includes(parseData.charAt(0)) ){
						parseData = parser(JSON.parse(parseData))
						return parseData
					} else if (!isNaN(parseData) && parseData.length){
						return parseInt(parseData)
					} else {
						return parseData
					}
				} catch(err){
					return parseData
				}
				break;
			case "Array":
				newParseArray = []
				for (element of parseData){
					newParseArray.push(parser(element))
				}
				return newParseArray
				break;
			case "Object":
				newParseObject = {}
				for (element of Object.keys(parseData)){
					newParseObject[element] = parser(parseData[element])
				}
				return newParseObject
				break;
			case "Boolean":
			case "Number":
				return parseData
				break;
			default:
				console.log("ERROR")
		};
	}
    return parser(param)
};
Game_Action.prototype.itemCri = function(target){
	try { 
		SirL.MPFinalCriticalDamage.testForCrit = true;
		SirL.MPFinalCriticalDamage.critDamage = this.makeDamageValue(target, true);
		SirL.MPFinalCriticalDamage.testForCrit = false;
		if ( target.hp <= SirL.MPFinalCriticalDamage.critDamage && ($gameSystem._sirL.savablePP.fCD_CB4E || !target.isActor()) ){
			return true;
		}
		SirL.MPFinalCriticalDamage.critDamage = 0;
		
	} catch (err) {}
	return this.item().damage.critical
        ? this.subject().cri * (1 - target.cev)
        : 0;
};
Game_Action.prototype.makeDamageValue = function(target, critical){
	try { 
		if(!SirL.MPFinalCriticalDamage.testForCrit && SirL.MPFinalCriticalDamage.critDamage > 0){
			return SirL.MPFinalCriticalDamage.critDamage;
		}
	} catch (err) {}
	
	const item = this.item();
    const baseValue = this.evalDamageFormula(target);
    let value = baseValue * this.calcElementRate(target);
    if (this.isPhysical()) {
        value *= target.pdr;
    }
    if (this.isMagical()) {
        value *= target.mdr;
    }
    if (baseValue < 0) {
        value *= target.rec;
    }
    if (critical) {
        value = this.applyCritical(value);
    }
    value = this.applyVariance(value, item.damage.variance);
    value = this.applyGuard(value, target);
    value = Math.round(value);
    return value;
};
SirL.MPCore.sleep = function (frames){
	frameFactor = 1000/60;
  var start = new Date().getTime();
  for (;;) {
    if ((new Date().getTime() - start) > frames*frameFactor){
      break;
    }
  }
};
SirL.MPCore.parseParam = function(param){
    function parser(parseData){
		let newParseArray = []
		let newParseObject = {}
		switch(parseData.constructor.name){
			case "String":
				try{
					if (["{","["].includes(parseData.charAt(0)) ){
						parseData = parser(JSON.parse(parseData))
						return parseData
					} else if (!isNaN(parseData) && parseData.length){
						return parseInt(parseData)
					} else {
						return parseData
					}
				} catch(err){
					return parseData
				}
				break;
			case "Array":
				newParseArray = []
				for (element of parseData){
					newParseArray.push(parser(element))
				}
				return newParseArray
				break;
			case "Object":
				newParseObject = {}
				for (element of Object.keys(parseData)){
					newParseObject[element] = parser(parseData[element])
				}
				return newParseObject
				break;
			case "Boolean":
			case "Number":
				return parseData
				break;
			default:
				console.log("ERROR")
		};
	}
    return parser(param)
};
Window_BattleLog.prototype.displayDamage = function(target) {	
	 if (target.result().missed) {
		try {
			 SirL.MPpAA.requestAnimation("Miss" ,target, SirL.MPpAA.subject)
		} catch (err) {}
        this.displayMiss(target);
    } else if (target.result().evaded) {
		try {
			SirL.MPpAA.requestAnimation("Evaded" ,target, SirL.MPpAA.subject)
		} catch (err) {}
        this.displayEvasion(target);
    } else {
		try {
			SirL.MPpAA.requestAnimation("Hit" ,target, SirL.MPpAA.subject)
		} catch (err) {}
        this.displayHpDamage(target);
        this.displayMpDamage(target);
        this.displayTpDamage(target);
    }
};
Window_BattleLog.prototype.displayActionResults = function(subject, target) {
	try { SirL.MPpAA.subject = subject } catch (err) {}
    if (target.result().used) {
        this.push("pushBaseLine");
        this.displayCritical(target);
        this.push("popupDamage", target);
        this.push("popupDamage", subject);
        this.displayDamage(target);
        this.displayAffectedStatus(target);
        this.displayFailure(target);
        this.push("waitForNewLine");
        this.push("popBaseLine");
    }
};
SirL.MPCore.metaProp = function(obj, key, value=null){
	if (!obj.hasOwnProperty("sirLMeta")){ //Create if missing
		//For logic on regex visit: https://jex.im/regulex/#!flags=g&re=%5C%3C(.*%3F)(%3F%3A%5C%3A(.*%3F)%5C%3E(%3F%3D%5Cs*(%3F%3A%5C%3C%7C%24))%7C(%3F%3A(%3F%3A%5C%3E(.*%3F)(%3F%3A%5C%3C%5C%2F%5C1%5C%3E))%7C%5C%3E))
		const regExp =/\<(.*?)(?:\:(.*?)\>(?=\s*(?:\<|$))|(?:(?:\>(.*?)(?:\<\/\1\>))|\>))/gs;
		obj.sirLMeta = {};
		for (;;) {
			const match = regExp.exec(obj.note);
			if (match) {
				//match[1] is key, match[2] is value in ':' format, match[3] is value in XML style, if none set to true
				obj.sirLMeta[match[1]] = match[2] || match[3] || true
			} else {
				break;
			}
		}
	}
	if(value){ //setter
		obj.sirLMeta[key] = value
		return value
	} else { //getter
		return obj.sirLMeta[key]
	}
};
Sprite_Battleback.prototype.adjustPosition = function(layer) {
	try{
		layerSettings = $gameSystem._sirL.savablePP.layers[layer]
		switchOn = layerSettings["PositionBattleBacks.TypeOfAdjustment"]
	} catch (err) {
		switchOn = ""
	}
	switch(switchOn){
		case "Screen Size":
			width = Function('bb','return Graphics.width');
			height = Function('bb','return Graphics.height');
			xOff = Function('bb','return (Graphics.width - bb.width) / 2');
			yOffSV = Function('bb','return Graphics.height - bb.height');
			yOffFV = Function('bb','return 0');
			sirL_Scale = Function('bb','ratioX','ratioY','return Math.max(ratioX, ratioY, 1.0)');
			break;
		case "UI Size":
			width = Function('bb','return Graphics.boxWidth');
			height = Function('bb','return Graphics.boxHeight');
			xOff = Function('bb','return (Graphics.width - bb.width) / 2');
			yOffSV = Function('bb','return Graphics.height - bb.height');
			yOffFV = Function('bb','return (Graphics.height - bb.height) / 2');
			sirL_Scale = Function('bb','ratioX','ratioY','return Math.max(ratioX, ratioY, 1.0)');
			break;
		case "Custom":
			width = Function('bb','return '+layerSettings["PositionBattleBacks.bbWidth"]+'');
			height = Function('bb','return '+layerSettings["PositionBattleBacks.bbHeight"]+'');
			xOff = Function('bb','return '+layerSettings["PositionBattleBacks.bbXOff"]+'');
			yOffSV = Function('bb','return '+layerSettings["PositionBattleBacks.bbYOff4SideView"]+'');
			yOffFV = Function('bb','return '+layerSettings["PositionBattleBacks.bbYOff4FrontView"]+'');
			sirL_Scale = Function('bb','ratioX','ratioY','return '+layerSettings["PositionBattleBacks.bbScale"]+'');
			break;
		default:
			try{
				if(!(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["TileBasedScaling.fOrS_battleback"] == "true")){
					SirL.MPTileBasedScaling.stretchPosition(this)
					return;
				}
			} catch (err) {}
			width = Function('bb','return Math.floor((1000 * Graphics.width) / 816)');
			height = Function('bb','return Math.floor((740 * Graphics.height) / 624)');
			xOff = Function('bb','return (Graphics.width - bb.width) / 2');
			yOffSV = Function('bb','return Graphics.height - bb.height');
			yOffFV = Function('bb','return 0');
			sirL_Scale = Function('bb','ratioX','ratioY','return Math.max(ratioX, ratioY, 1.0)');
			break;
	};
	this.width = width(this);
	this.height = height(this);
	this.x = xOff(this);
	 if ($gameSystem.isSideView()) { //Offset Y
        this.y = yOffSV(this);
    } else {
        this.y = yOffFV(this);
    }
	const ratioX = this.width / this.bitmap.width;
    const ratioY = this.height / this.bitmap.height;
	const scale = sirL_Scale(this,ratioX,ratioY); //Scale of image
	this.scale.x = scale;
    this.scale.y = scale;
};
Spriteset_Battle.prototype.updateBattleback = function() {
    if (!this._battlebackLocated || $gameSystem._sirL.savablePP.aBB) {
        this._back1Sprite.adjustPosition(0);
        this._back2Sprite.adjustPosition(1);
        this._battlebackLocated = true;
    }
};
BattleManager.onEscapeSuccess = function() {
	this.displayEscapeSuccessMessage();
	SirL.MPRewardsForEscaping.escapeRewards(this)
	this._escaped = true;
	this.processAbort();
};
SirL.MPCore.toList = function(string){
	return JSON.parse(string)
};
SirL.MPCore.toBoolean = function(string){
	return Boolean(JSON.parse(string))
};
BattleManager.displayExp = function() {
    const exp = this._rewards.exp;
    if (exp != 0) {
		if(exp > 0){
			 text = TextManager.obtainExp.format(exp, TextManager.exp);
		} else {
			try {
				text = SirL.MPRewardsForEscaping.obtainLostText("RewardsForEscaping.lostExp", exp, TextManager.exp);
			} catch (err) { text = ""}
		}
		if(text){ $gameMessage.add("\\." + text) };
    }
};;
BattleManager.displayGold = function() {
    const gold = this._rewards.gold;
	if (gold != 0) {
		if(gold > 0){
			 text = TextManager.obtainGold.format(gold)
		} else {
			try {
				text = SirL.MPRewardsForEscaping.obtainLostText("RewardsForEscaping.lostGold", gold);
			} catch (err) {  text = ""}
		}
		if(text){ $gameMessage.add("\\." + text) };
    }
};;
SirL.MPCore.metaProp = function(obj, key, value=null){
	if (!obj.hasOwnProperty("sirLMeta")){ //Create if missing
		//For logic on regex visit: https://jex.im/regulex/#!flags=g&re=%5C%3C(.*%3F)(%3F%3A%5C%3A(.*%3F)%5C%3E(%3F%3D%5Cs*(%3F%3A%5C%3C%7C%24))%7C(%3F%3A(%3F%3A%5C%3E(.*%3F)(%3F%3A%5C%3C%5C%2F%5C1%5C%3E))%7C%5C%3E))
		const regExp =/\<(.*?)(?:\:(.*?)\>(?=\s*(?:\<|$))|(?:(?:\>(.*?)(?:\<\/\1\>))|\>))/gs;
		obj.sirLMeta = {};
		for (;;) {
			const match = regExp.exec(obj.note);
			if (match) {
				//match[1] is key, match[2] is value in ':' format, match[3] is value in XML style, if none set to true
				obj.sirLMeta[match[1]] = match[2] || match[3] || true
			} else {
				break;
			}
		}
	}
	if(value){ //setter
		obj.sirLMeta[key] = value
		return value
	} else { //getter
		return obj.sirLMeta[key]
	}
};
SirL.MPCore.throwError = function(Title, Message, ...variables){
	SceneManager.stop();
	tempString = Title + "↔️" + Message
	tempString = tempString.format(...variables);
	tempString = tempString.split("↔️")
	Graphics.printError(tempString[0],tempString[1])
	AudioManager.stopAll();
};
SirL.MPCore.parseParam = function(param){
    function parser(parseData){
		let newParseArray = []
		let newParseObject = {}
		switch(parseData.constructor.name){
			case "String":
				try{
					if (["{","["].includes(parseData.charAt(0)) ){
						parseData = parser(JSON.parse(parseData))
						return parseData
					} else if (!isNaN(parseData) && parseData.length){
						return parseInt(parseData)
					} else {
						return parseData
					}
				} catch(err){
					return parseData
				}
				break;
			case "Array":
				newParseArray = []
				for (element of parseData){
					newParseArray.push(parser(element))
				}
				return newParseArray
				break;
			case "Object":
				newParseObject = {}
				for (element of Object.keys(parseData)){
					newParseObject[element] = parser(parseData[element])
				}
				return newParseObject
				break;
			case "Boolean":
			case "Number":
				return parseData
				break;
			default:
				console.log("ERROR")
		};
	}
    return parser(param)
};
SirL.MPCore.toBoolean = function(string){
	return Boolean(JSON.parse(string))
};
SirL.MPCore.throwError = function(Title, Message, ...variables){
	SceneManager.stop();
	tempString = Title + "↔️" + Message
	tempString = tempString.format(...variables);
	tempString = tempString.split("↔️")
	Graphics.printError(tempString[0],tempString[1])
	AudioManager.stopAll();
};
SceneManager.changeScene = function() {
    if (this.isSceneChanging() && !this.isCurrentSceneBusy()) {
        if (this._scene) {
            this._scene.terminate();
            this.onSceneTerminate();
        }
        this._scene = this._nextScene;
        this._nextScene = null;
        if (this._scene) {
			if(typeof SceneManager._scene.prepare == "function" && SirL.MPTileBasedScaling.preparedStorage.length){
				//There is temp storage that needs to be prepared
				this._scene.prepare(...SirL.MPTileBasedScaling.preparedStorage)
				SirL.MPTileBasedScaling.preparedStorage = []
			}
            this._scene.create();
            this.onSceneCreate();
        }
        if (this._exiting) {
            this.terminate();
        }
    }
};
SceneManager.updateScene = function() {
    if (this._scene) {
        if (this._scene.isStarted()) {
            if (this.isGameActive()) {
                this._scene.update();
            }
        } else if (this._scene.isReady()) {
            this.onBeforeSceneStart();
            this._scene.start();
            this.onSceneStart();
			Graphics._onWindowResize()
        }
    }
};
SirL.MPCore.getFnParamNames = function(fn){
	//Thanks to https://stackoverflow.com/a/9092085
    var fstr = fn.toString();
    return fstr.match(/\(.*?\)/)[0].replace(/[()]/gi,'').replace(/\s/gi,'').split(',');
};
Scene_Map.prototype.fadeOutForTransfer = function() {
    const fadeType = $gamePlayer.fadeType();
    switch (fadeType) {
        case 0: break;
        case 1:
            this.startFadeOut(this.fadeSpeed(), fadeType === 1);
            break;
    }
};
Scene_Map.prototype.stop = function() {
    Scene_Message.prototype.stop.call(this);
    $gamePlayer.straighten();
	if(this.hasOwnProperty("_mapNameWindow")){
		this._mapNameWindow.close();
	}
    if (this.needsSlowFadeOut()) {
        this.startFadeOut(this.slowFadeSpeed(), false);
    } else if (SceneManager.isNextScene(Scene_Map)) {
        this.fadeOutForTransfer();
    } else if (SceneManager.isNextScene(Scene_Battle)) {
        this.launchBattle();
    }
};
Scene_Message.prototype.isMessageWindowClosing = function() {
	if(this.hasOwnProperty("_messageWindow")){
		return this._messageWindow.isClosing();
	} else {
		return false;
	}
};
Scene_Map.prototype.terminate = function() {
	try{
		if (SirL.MPTileBasedScaling.container ) {
			this.removeChild(SirL.MPTileBasedScaling.container );
			SirL.MPTileBasedScaling.container  = null;
		}
	} catch (err) {}
    Scene_Message.prototype.terminate.call(this);
    if (!SceneManager.isNextScene(Scene_Battle)) {
		if(this.hasOwnProperty("_spriteset")){
			this._spriteset.update();
			this._mapNameWindow.hide();
		}
        this.hideMenuButton();
        SceneManager.snapForBackground();
    }
    $gameScreen.clearZoom();
};
Bitmap.load = function(url) {
	const bitmap = Object.create(Bitmap.prototype);
    bitmap.initialize();
    bitmap._url = url;
    bitmap._startLoading();
	try {
		bitmap.smooth = SirL.MPTileBasedScaling.customZoom >= 1.3 ; //To prevent bleedover on icons
	} catch (err){}
    return bitmap;
};
Game_Map.prototype.screenTileX = function() {
	return (Math.round((Graphics.width / this.tileWidth()) * 16) / 16) * 1/$gameScreen._zoomScale;
};
Game_Map.prototype.screenTileY = function() {
	return (Math.round((Graphics.height / this.tileHeight()) * 16) / 16) * 1/$gameScreen._zoomScale;
};
Game_Map.prototype.canvasToMapX = function(x) {
    const tileWidth = this.tileWidth() * $gameScreen._zoomScale;
    const originX = this._displayX * tileWidth;
    const mapX = Math.floor((originX + x) / tileWidth);
    return this.roundX(mapX);
};
Game_Map.prototype.canvasToMapY = function(y) {
    const tileHeight = this.tileHeight() * $gameScreen._zoomScale ;
    const originY = this._displayY * tileHeight;
    const mapY = Math.floor((originY + y) / tileHeight);
    return this.roundY(mapY);
};
Scene_Base.prototype.scaleSprite = function(sprite) {
	try{
		fitOrStretch = SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["TileBasedScaling.fOrS_" + SceneManager._scene.constructor.name] == "true"
	} catch (err){
		fitOrStretch = true;
	}
   const ratioX = Graphics.width / sprite.bitmap.width;
    const ratioY = Graphics.height / sprite.bitmap.height;
    const scale = Math.min(ratioX, ratioY);
    sprite.scale.x = fitOrStretch ? scale : ratioX;
    sprite.scale.y = fitOrStretch ? scale : ratioY; 
};
Sprite_Battler.prototype.setHome = function(x, y) {
	ratioX = 1
	ratioY = 1
	try{
		zoomFactor = 1/SirL.MPTileBasedScaling.customZoom 
		if(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["TileBasedScaling.fOrS_battleback"] == "true"){
			Graphics.resize($dataSystem.advanced.screenWidth ,$dataSystem.advanced.screenHeight)
			Graphics.boxWidth = ($dataSystem.advanced.uiAreaWidth / $dataSystem.advanced.screenWidth) * Graphics.width
			Graphics.boxHeight = ($dataSystem.advanced.uiAreaHeight / $dataSystem.advanced.screenHeight) * Graphics.height
			$gameScreen.setZoom($gamePlayer.x,$gamePlayer.y, 1); 
		} else {
			ratioX = ( Graphics.width/$dataSystem.advanced.screenWidth) * zoomFactor
			ratioY = ( Graphics.height/$dataSystem.advanced.screenHeight) * zoomFactor
		}
	} catch (err){
		zoomFactor = 1;
	}
    this._homeX = x * ratioX
    this._homeY = y * ratioY
    this.updatePosition();
};
DataManager.loadMapData = function(mapId) {
    if (mapId > 0) {
        const filename = "Map%1.json".format(mapId.padZero(3));
        this.loadDataFile("$dataMap", filename);
    } else {
        this.makeEmptyMap();
    }
	for(let mapEventId = 0; mapEventId < $gameMap.events().length; mapEventId++){
		mapEvent = $gameMap.events()[mapEventId];
		if(mapEvent["spawnedEventId"]){
			SirL_MPEventCloner_getMap(mapEvent["spawnedMapId"]).then(SirL_MPEventCloner_popDataMapWSpawns.bind(null,mapEvent))
		}
	}
};
SirL.MPCore.threadedDelay = function (timer){
    return new Promise(resolve => {
        timer ??= 2000; //2 seconds if none is provided
        setTimeout(function () {
            resolve();
        }, timer);
    });
};
Game_Player.prototype.updateNonmoving = function(wasMoving, sceneActive) {
    if (!$gameMap.isEventRunning()) {
        if (wasMoving) {
            $gameParty.onPlayerWalk();
            this.checkEventTriggerHere([1, 2]);
            if ($gameMap.setupStartingEvent()) {
                return;
            }
        }
        if (sceneActive && this.triggerAction()) {
            return;
        }
        if (wasMoving) {
            this.updateEncounterCount();
        } else {
            $gameTemp.clearDestination();
        }
		if (sceneActive){
			try{SirL.MPTileEvent.checkTileEvent(wasMoving)} catch(err){}
		}
    }
};
Scene_Map.prototype.start = function() {
    Scene_Message.prototype.start.call(this);
    SceneManager.clearStack();
    if (this._transfer) {
        this.fadeInForTransfer();
        this.onTransferEnd();
		try{SirL.MPTileEvent.checkTileEvent(true)} catch(err){}
    } else if (this.needsFadeIn()) {
        this.startFadeIn(this.fadeSpeed(), false);
		try{SirL.MPTileEvent.checkTileEvent(true)} catch(err){}
    }
    this.menuCalling = false;
};
Game_CharacterBase.prototype.updateJump = function() {
    this._jumpCount--;
    this._realX =
        (this._realX * this._jumpCount + this._x) / (this._jumpCount + 1.0);
    this._realY =
        (this._realY * this._jumpCount + this._y) / (this._jumpCount + 1.0);
    this.refreshBushDepth();
    if (this._jumpCount === 0) {
		try{SirL.MPTileEvent.checkTileEvent(true)} catch(err){}
        this._realX = this._x = $gameMap.roundX(this._x);
        this._realY = this._y = $gameMap.roundY(this._y);
    }
};
BattleManager.makeEscapeRatio = function() {
    this._escapeRatio = (0.5 * $gameParty.agility()) / $gameTroop.agility();
	this._troopEscapeRatio = (0.5 * $gameTroop.agility()) / $gameParty.agility();
};
Game_Battler.prototype.escape = function() {		
	initialDisplay = [
		function(battler){},
		function(battler){BattleManager._logWindow.push("addText",TextManager.escapeStart.format(battler.name()))}, 
		function(battler){$gameMessage.add(TextManager.escapeStart.format(battler.name()))}
	]
	initialDisplay[SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["EnemyEscapeRevamp.deem"] || 0](this)
	const success =Math.random() < BattleManager._troopEscapeRatio;
	if (success) {
		 if ($gameParty.inBattle()) {
			this.hide();
		 }
		this._escaped = true;
		this.clearActions();
		this.clearStates();
		SoundManager.playEscape();
	} else {
		failureDisplay = [
			function(){},
			function(){BattleManager._logWindow.push("wait"); BattleManager._logWindow.push("addText",TextManager.escapeFailure);}, 
			function(){$gameMessage.add("\\\." + TextManager.escapeFailure)}
		]
		failureDisplay[SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["EnemyEscapeRevamp.deem"] || 0]()
		BattleManager._troopEscapeRatio += 0.1;
	}
};
Game_BattlerBase.prototype.initMembers = function() {
    this._hp = 1;
    this._mp = 0;
    this._tp = 0;
    this._hidden = false;
	this._escaped = false;
    this.clearParamPlus();
    this.clearStates();
    this.clearBuffs();
};
Game_Troop.prototype.expTotal = function() {
	retObj = 0;
	retObj += this.deadMembers().reduce((r, enemy) => r + enemy.exp(), 0);
	retObj += SirL.MPEnemyEscapeRevamp.escapedMembers(this).reduce(function(r,enemy){
		if(SirL.MPCore.metaProp(enemy.enemy(),"SirL.escapeExp")){
			r += new Function("return " + SirL.MPCore.metaProp(enemy.enemy(),"SirL.escapeExp"))()
		}
		return r;
	},0);
	return retObj;
};
Game_Troop.prototype.goldTotal = function() {
	const rate = this.goldRate()
	retObj = 0;
	retObj += this.deadMembers().reduce((r, enemy) => r + enemy.gold(), 0) * rate;
	retObj += SirL.MPEnemyEscapeRevamp.escapedMembers(this).reduce(function(r,enemy){
		if(SirL.MPCore.metaProp(enemy.enemy(),"SirL.escapeGold")){
			r += new Function("return " + SirL.MPCore.metaProp(enemy.enemy(),"SirL.escapeGold"))()
		}
		return r;
	},0) * rate;
    return retObj;
};
Game_Troop.prototype.makeDropItems = function() {
    retObj = [];
	retObj = retObj.concat(this.deadMembers().reduce((r, enemy) => r.concat(enemy.makeDropItems()), []));
	retObj = retObj.concat(SirL.MPEnemyEscapeRevamp.escapedMembers(this).reduce(function(r,enemy){
		escapedDropItems = []
		if(SirL.MPCore.metaProp(enemy.enemy(),"SirL.escapeDrops")){
			escapedDropItems = SirL.MPEnemyEscapeRevamp.makeDropItemsOnEscape(enemy)
		}
		return r.concat(escapedDropItems);
	},[]));
    return retObj;
};
SirL.MPCore.toList = function(string){
	return JSON.parse(string)
};
SirL.MPCore.metaProp = function(obj, key, value=null){
	if (!obj.hasOwnProperty("sirLMeta")){ //Create if missing
		//For logic on regex visit: https://jex.im/regulex/#!flags=g&re=%5C%3C(.*%3F)(%3F%3A%5C%3A(.*%3F)%5C%3E(%3F%3D%5Cs*(%3F%3A%5C%3C%7C%24))%7C(%3F%3A(%3F%3A%5C%3E(.*%3F)(%3F%3A%5C%3C%5C%2F%5C1%5C%3E))%7C%5C%3E))
		const regExp =/\<(.*?)(?:\:(.*?)\>(?=\s*(?:\<|$))|(?:(?:\>(.*?)(?:\<\/\1\>))|\>))/gs;
		obj.sirLMeta = {};
		for (;;) {
			const match = regExp.exec(obj.note);
			if (match) {
				//match[1] is key, match[2] is value in ':' format, match[3] is value in XML style, if none set to true
				obj.sirLMeta[match[1]] = match[2] || match[3] || true
			} else {
				break;
			}
		}
	}
	if(value){ //setter
		obj.sirLMeta[key] = value
		return value
	} else { //getter
		return obj.sirLMeta[key]
	}
};
Game_Enemy.prototype.paramBase = function(paramId) {
    params = ["mhp","mmp","atk","def","mat","mdf","agi","luk"]
	formula = SirL.MPCore.metaProp(this.enemy(), "SirL."+params[paramId])
	if(typeof formula != "undefined"){
		return SirL.MPEnemyStatsFormula.evalParamFormula(this,formula);
	} else {
		return this.enemy().params[paramId];
	}
};
Game_Enemy.prototype.exp = function() {
    formula =SirL.MPCore.metaProp(this.enemy(),"SirL.exp")
	if(typeof formula != "undefined"){
		return SirL.MPEnemyStatsFormula.evalParamFormula(this,formula);
	} else {
		return this.enemy().exp;
	}
};
Game_Enemy.prototype.gold = function() {
	formula =SirL.MPCore.metaProp(this.enemy(),"SirL.gold")
	if(typeof formula != "undefined"){
		return SirL.MPEnemyStatsFormula.evalParamFormula(this,formula);
	} else {
		return this.enemy().gold;
	}
};
SirL.MPCore.metaProp = function(obj, key, value=null){
	if (!obj.hasOwnProperty("sirLMeta")){ //Create if missing
		//For logic on regex visit: https://jex.im/regulex/#!flags=g&re=%5C%3C(.*%3F)(%3F%3A%5C%3A(.*%3F)%5C%3E(%3F%3D%5Cs*(%3F%3A%5C%3C%7C%24))%7C(%3F%3A(%3F%3A%5C%3E(.*%3F)(%3F%3A%5C%3C%5C%2F%5C1%5C%3E))%7C%5C%3E))
		const regExp =/\<(.*?)(?:\:(.*?)\>(?=\s*(?:\<|$))|(?:(?:\>(.*?)(?:\<\/\1\>))|\>))/gs;
		obj.sirLMeta = {};
		for (;;) {
			const match = regExp.exec(obj.note);
			if (match) {
				//match[1] is key, match[2] is value in ':' format, match[3] is value in XML style, if none set to true
				obj.sirLMeta[match[1]] = match[2] || match[3] || true
			} else {
				break;
			}
		}
	}
	if(value){ //setter
		obj.sirLMeta[key] = value
		return value
	} else { //getter
		return obj.sirLMeta[key]
	}
};
Scene_Shop.prototype.sellingPrice = function() {
	defaultPrice = 0;
	try {
		if (typeof SirL.MPCore.metaProp(this._item, "SirL.setItemSellValue") != "undefined"){
			defaultPrice = SirL.MPCore.evalDFLikeFormulas({
					i:this._item,p:$gameParty,
					v:$gameVariables._data,
					buyPrice:SirL.MPCore.evalDFLikeFormulas({i:this._item,p:$gameParty,v:$gameVariables._data},
					SirL.MPCore.metaProp(this._item, "SirL.setItemPrice"))
				}
				, SirL.MPCore.metaProp(this._item, "SirL.setItemSellValue"))
		}
	} catch (err) {}
	defaultPrice = defaultPrice || this._item.price / 2
    return Math.floor(defaultPrice);
};
SirL.MPCore.metaProp = function(obj, key, value=null){
	if (!obj.hasOwnProperty("sirLMeta")){ //Create if missing
		//For logic on regex visit: https://jex.im/regulex/#!flags=g&re=%5C%3C(.*%3F)(%3F%3A%5C%3A(.*%3F)%5C%3E(%3F%3D%5Cs*(%3F%3A%5C%3C%7C%24))%7C(%3F%3A(%3F%3A%5C%3E(.*%3F)(%3F%3A%5C%3C%5C%2F%5C1%5C%3E))%7C%5C%3E))
		const regExp =/\<(.*?)(?:\:(.*?)\>(?=\s*(?:\<|$))|(?:(?:\>(.*?)(?:\<\/\1\>))|\>))/gs;
		obj.sirLMeta = {};
		for (;;) {
			const match = regExp.exec(obj.note);
			if (match) {
				//match[1] is key, match[2] is value in ':' format, match[3] is value in XML style, if none set to true
				obj.sirLMeta[match[1]] = match[2] || match[3] || true
			} else {
				break;
			}
		}
	}
	if(value){ //setter
		obj.sirLMeta[key] = value
		return value
	} else { //getter
		return obj.sirLMeta[key]
	}
};
SirL.MPCore.evalDFLikeFormulas = function ({i,p,v,buyPrice}={},formula){
	try{
		const value = Math.max(eval(formula),0)
		return isNaN(value) ? 0 : value;
	} catch (e) {
		return 0
	}
};
Game_Party.prototype.consumeItem = function(item) {
    if (DataManager.isItem(item) && item.consumable) {
		if (typeof SirL.MPCore.metaProp(item, "SirL.morphItem") != "undefined"){
			nextId = SirL.MPCore.metaProp(item, "SirL.morphItem");
			this.gainItem($dataItems[nextId], 1);
		}
        this.loseItem(item, 1);
    }
};
SirL.MPCore.metaProp = function(obj, key, value=null){
	if (!obj.hasOwnProperty("sirLMeta")){ //Create if missing
		//For logic on regex visit: https://jex.im/regulex/#!flags=g&re=%5C%3C(.*%3F)(%3F%3A%5C%3A(.*%3F)%5C%3E(%3F%3D%5Cs*(%3F%3A%5C%3C%7C%24))%7C(%3F%3A(%3F%3A%5C%3E(.*%3F)(%3F%3A%5C%3C%5C%2F%5C1%5C%3E))%7C%5C%3E))
		const regExp =/\<(.*?)(?:\:(.*?)\>(?=\s*(?:\<|$))|(?:(?:\>(.*?)(?:\<\/\1\>))|\>))/gs;
		obj.sirLMeta = {};
		for (;;) {
			const match = regExp.exec(obj.note);
			if (match) {
				//match[1] is key, match[2] is value in ':' format, match[3] is value in XML style, if none set to true
				obj.sirLMeta[match[1]] = match[2] || match[3] || true
			} else {
				break;
			}
		}
	}
	if(value){ //setter
		obj.sirLMeta[key] = value
		return value
	} else { //getter
		return obj.sirLMeta[key]
	}
};
SirL.MPCore.parseParam = function(param){
    function parser(parseData){
		let newParseArray = []
		let newParseObject = {}
		switch(parseData.constructor.name){
			case "String":
				try{
					if (["{","["].includes(parseData.charAt(0)) ){
						parseData = parser(JSON.parse(parseData))
						return parseData
					} else if (!isNaN(parseData) && parseData.length){
						return parseInt(parseData)
					} else {
						return parseData
					}
				} catch(err){
					return parseData
				}
				break;
			case "Array":
				newParseArray = []
				for (element of parseData){
					newParseArray.push(parser(element))
				}
				return newParseArray
				break;
			case "Object":
				newParseObject = {}
				for (element of Object.keys(parseData)){
					newParseObject[element] = parser(parseData[element])
				}
				return newParseObject
				break;
			case "Boolean":
			case "Number":
				return parseData
				break;
			default:
				console.log("ERROR")
		};
	}
    return parser(param)
};
Window_SkillList.prototype.drawSkillCost = function(skill, x, y, width) {
	defaultSkillTypes = [["Tp",""],["Mp",""]]
	try{
		skillsToShow =  SirL.MPSkillCostDisplay.getShowSkillCostList()
	} catch(err){
		skillsToShow = defaultSkillTypes
	}
	try{
		showMultiple = SirL.MPSkillCostDisplay.isShowMultiple()
	} catch(err){
		showMultiple = false
	}
	offSet = 0
	free = true
	for (i = 0; i < skillsToShow.length; i++){
		type = skillsToShow[i][0]
		try{
			cost = SirL.MPSkillCostFormula.skillAltCost(this._actor,type,skill) ?? this._actor["skill"+type+"Cost"](skill)
		}
		catch(err){
			if (defaultSkillTypes.includes(type)){
				cost = this._actor["skill"+type+"Cost"](skill)
			} else { cost = 0 }
		}
		if(cost > 0){
			free = false
			try{
				skillColor = SirL.MPSkillCostDisplay.getShowSkillCostColorList(i)
			}catch(err){
				skillColor = ColorManager[type.toLowerCase()+"CostColor"]()
			};
			try{
				renderText = SirL.MPSkillCostDisplay.showLabel(cost,
					skillsToShow[i][1] || type)
			} catch(err){
				renderText = cost
			}
			if(x-offSet > 0){
				renderText = " "+renderText
			}
			offSet += this.textSizeEx(renderText)["width"];
			this.changeTextColor(skillColor);
			this.processAllText(this.createTextState(renderText, (width-offSet + x), y, width));
			//Same as above, but without resetting the font setting
			// - this.drawTextEx(renderText, (width-offSet + x), y, width);
			if (!showMultiple){
				break;
			}
		}
	}
	if(free){
		try{
			freeObj = SirL.MPSkillCostDisplay.getFreeObject()
		} catch(err){
			freeObj = []
		}
		if(freeObj.length){
			this.changeTextColor(freeObj[0]);
			this.drawText(freeObj[1], x-offSet, y, width, "right");
		}
	}
};
Game_BattlerBase.prototype.skillTpCost = function(skill){
	try{
		retObj = SirL.MPSkillCostFormula.evalCostFormula(this,SirL.MPCore.metaProp(skill,'SirL.tpCost')) || skill.tpCost;
	} catch(err){
		retObj = skill.tpCost;
	};
	return retObj;
};
Game_BattlerBase.prototype.skillMpCost = function(skill){
	try{
		retObj = SirL.MPSkillCostFormula.evalCostFormula(this,SirL.MPCore.metaProp(skill,'SirL.mpCost')) || Math.floor(skill.mpCost * this.mcr)
	} catch(err){
		retObj = Math.floor(skill.mpCost * this.mcr)
	};
	return retObj;
};
Game_BattlerBase.prototype.paySkillCost = function(skill) {
    this._mp -= this.skillMpCost(skill);
    this._tp -= this.skillTpCost(skill);
	const a = this;
	const v = $gameVariables._data;
	try{
		altSkills = SirL.MPCore.toList(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["SkillCostFormula.Alt Types"]) || skill.tpCost
	} catch(err){
		altSkills = []
	};
	for (i = 0; i < altSkills.length; i++){
		altSkill = JSON.parse(altSkills[i])
		eval(altSkill["SkillCostFormula.Alt Source"] + " -= " + SirL.MPSkillCostFormula.skillAltCost(this, altSkill["SkillCostFormula.Alt Name"],skill).toString());
	}
};
SirL.MPCore.metaProp = function(obj, key, value=null){
	if (!obj.hasOwnProperty("sirLMeta")){ //Create if missing
		//For logic on regex visit: https://jex.im/regulex/#!flags=g&re=%5C%3C(.*%3F)(%3F%3A%5C%3A(.*%3F)%5C%3E(%3F%3D%5Cs*(%3F%3A%5C%3C%7C%24))%7C(%3F%3A(%3F%3A%5C%3E(.*%3F)(%3F%3A%5C%3C%5C%2F%5C1%5C%3E))%7C%5C%3E))
		const regExp =/\<(.*?)(?:\:(.*?)\>(?=\s*(?:\<|$))|(?:(?:\>(.*?)(?:\<\/\1\>))|\>))/gs;
		obj.sirLMeta = {};
		for (;;) {
			const match = regExp.exec(obj.note);
			if (match) {
				//match[1] is key, match[2] is value in ':' format, match[3] is value in XML style, if none set to true
				obj.sirLMeta[match[1]] = match[2] || match[3] || true
			} else {
				break;
			}
		}
	}
	if(value){ //setter
		obj.sirLMeta[key] = value
		return value
	} else { //getter
		return obj.sirLMeta[key]
	}
};
SirL.MPCore.toBoolean = function(string){
	return Boolean(JSON.parse(string))
};
SirL.MPCore.toList = function(string){
	return JSON.parse(string)
};
Window_SkillList.prototype.makeItemList = function() {
	actor = this._actor
	if (actor) {
		this._data = this._actor.skills().filter(item => this.includes(item));
		try{
			Sorts = SirL.MPCore.toList(SirL.MP76$1e_3e_1f$34$r_42_12$3f$p_34$q$34$o_3e$8_6a_7$6c_1b_34_e_3g_1c$35_m$36_f$35_g$34$1d$34$5_34_1a$34_u$3g$18$35_13_3e$a_6i$14$36$k$34$17_34_16_34_l$69$s$3f$11$34_v$34$10$34_i$3e_t$35$9$3o_j$3f$d$34$h_35$c$34_19$35$1_3e$2_3e_3_35$b$68.pP["SkillCostSorter.Sorts"])
		} catch(err){
			return;
		};
		this._data.sort(function(a,b){
			for (var sortId= 0; sortId < Sorts.length; sortId++){
				sorter = JSON.parse(Sorts[sortId])
				switch(sorter["SkillCostSorter.eval"]){
					case "skill.lastUsedTime":
						aValue = -SirL.MPSkillCostSorter.getUsedTime(a,actor)
						bValue = -SirL.MPSkillCostSorter.getUsedTime(b,actor)
					break;
					case "skill.lastUsedBattleTime":
						aValue = -SirL.MPSkillCostSorter.getUsedBattleTime(a,actor)
						bValue = -SirL.MPSkillCostSorter.getUsedBattleTime(b,actor)
					break;
					case "skill.lastUsedMenuTime":
						aValue = -SirL.MPSkillCostSorter.getUsedMenuTime(a,actor)
						bValue = -SirL.MPSkillCostSorter.getUsedMenuTime(b,actor)
					break;
					case "skill.usable":
						aValue = actor.meetsSkillConditions(a)
						bValue = actor.meetsSkillConditions(b)
					break;
					default:
						try{
							isSkillAltFormula = sorter["SkillCostSorter.eval"].includes("skill.altType_")
						} catch(err){
							isSkillAltFormula = false
						}
						if (isSkillAltFormula){
							altType = sorter["SkillCostSorter.eval"].split("_").splice(1).join('_')
							try{aValue = SirL.MPSkillCostFormula.skillAltCost(actor,altType,a)} catch(err){aValue = 0}
							try{bValue = SirL.MPSkillCostFormula.skillAltCost(actor,altType,b)} catch(err){bValue = 0}
						} else {
							aValue = eval(sorter["SkillCostSorter.eval"].replace(/skill/g,"a"))
							bValue = eval(sorter["SkillCostSorter.eval"].replace(/skill/g,"b"))
						}
				}
				aValue = aValue || Number.MAX_SAFE_INTEGER
				bValue = bValue || Number.MAX_SAFE_INTEGER
				if (aValue > bValue) return (SirL.MPCore.toBoolean(sorter["SkillCostSorter.order"])) ? 1 : -1;
				if (aValue < bValue) return (SirL.MPCore.toBoolean(sorter["SkillCostSorter.order"])) ? -1 : 1;
			}
		});
    } else {
        this._data = [];
    }
};
Game_Actor.prototype.setLastBattleSkill = function(skill) {
	try{
		SirL.MPSkillCostSorter.setUsedTime(skill,this,"Battle")
	}catch(err){};
	this._lastBattleSkill.setObject(skill);
};
Game_Actor.prototype.setLastMenuSkill = function(skill) {
	try{
		SirL.MPSkillCostSorter.setUsedTime(skill,this,"Menu")
	}catch(err){};
	this._lastMenuSkill.setObject(skill);
};
SirL.MPCore.toBoolean = function(string){
	return Boolean(JSON.parse(string))
};
SirL.MPCore.toList = function(string){
	return JSON.parse(string)
};
Game_BattlerBase.prototype.canEquipWeapon = function(item) {
	try{
		sr = SirL.MPWeaponStatsRestrictions.weaponStatRestriction(item,this);
	} catch(err) {sr = true}
    return (
		sr &&
        this.isEquipWtypeOk(item.wtypeId) &&
        !this.isEquipTypeSealed(item.etypeId)
    );
};
SirL.MPCore.metaProp = function(obj, key, value=null){
	if (!obj.hasOwnProperty("sirLMeta")){ //Create if missing
		//For logic on regex visit: https://jex.im/regulex/#!flags=g&re=%5C%3C(.*%3F)(%3F%3A%5C%3A(.*%3F)%5C%3E(%3F%3D%5Cs*(%3F%3A%5C%3C%7C%24))%7C(%3F%3A(%3F%3A%5C%3E(.*%3F)(%3F%3A%5C%3C%5C%2F%5C1%5C%3E))%7C%5C%3E))
		const regExp =/\<(.*?)(?:\:(.*?)\>(?=\s*(?:\<|$))|(?:(?:\>(.*?)(?:\<\/\1\>))|\>))/gs;
		obj.sirLMeta = {};
		for (;;) {
			const match = regExp.exec(obj.note);
			if (match) {
				//match[1] is key, match[2] is value in ':' format, match[3] is value in XML style, if none set to true
				obj.sirLMeta[match[1]] = match[2] || match[3] || true
			} else {
				break;
			}
		}
	}
	if(value){ //setter
		obj.sirLMeta[key] = value
		return value
	} else { //getter
		return obj.sirLMeta[key]
	}
};
