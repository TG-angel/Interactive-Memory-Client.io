// FesStyleBattle.js Ver.5.1.4

/*:
* @target MZ
* @plugindesc It will be a battle screen in the style of RPG Maker Fes.
* @author あわやまたな (Awaya_Matana)
* @url https://awaya3ji.seesaa.net/article/488936194.html
* @help Ver.5.1.4
* 【Plugin Commands】
* You can hide or restore the status window and log window.
*
* 【Note】
* <hideStatus> //Hide status window.
* <hideLog> //Hide log window.
* <hideStatusAndLog> //hide both.
* If you enter these tags in the note field of the skill,
* it will be hidden until the skill is activated.
*
* @param window
* @text Window Settings
* @desc Make window settings.
* @type struct<window>
* @default {"skin":"","opacity":"-1","padding":"192","nameBox":"{\"skin\":\"\",\"opacity\":\"-1\"}","help":"{\"skin\":\"\",\"opacity\":\"-1\"}","skill":"{\"skin\":\"\",\"opacity\":\"-1\",\"wide\":\"false\",\"maxLines\":\"7\",\"maxCols\":\"2\"}","item":"{\"skin\":\"\",\"opacity\":\"-1\"}","partyCommand":"{\"skin\":\"\",\"opacity\":\"-1\",\"wide\":\"false\",\"maxLines\":\"1\",\"maxCols\":\"2\"}","actorCommand":"{\"skin\":\"\",\"opacity\":\"-1\",\"wide\":\"false\",\"maxLines\":\"2\",\"maxCols\":\"2\",\"mixSkillTypes\":\"true\"}","enemy":"{\"skin\":\"\",\"opacity\":\"-1\",\"wide\":\"false\",\"maxLines\":\"2\",\"maxCols\":\"2\"}","log":"{\"skin\":\"\",\"opacity\":\"-1\",\"maxLines\":\"3\"}","status":"{\"x\":\"0\",\"width\":\"172\",\"height\":\"-1\",\"rowSpacing\":\"6\",\"minLines\":\"4\",\"slideDuration\":\"14\",\"backExtend\":\"108\",\"backGradWidth\":\"96\",\"cursorOffsetX\":\"16\",\"cursorFilterAreaExtraWidth\":\"128\"}"}
*
* @param battleLog
* @text Battle Log Settings
* @desc Make settings related to the battle log.
* @type struct<battleLog>
* @default {"fesMode":"true","playOk":"true","skipMode":"true","emergeMessageStyle":"1","emergeTroopMessage1":"A horde of monsters emerged!","emergeTroopMessage2":"A horde of %1s emerged!"}
*
* @param actor
* @text Actor Settings
* @desc Make settings for actors.
* @type struct<actor>
* @default {"stateSprite":"false","stateSpriteX":"0","stateSpriteY":"0","separateIcon":"true","emptyIconId":"16","stepForward":"true","extraMotion":"true","whiten":"false","damageEffect":"shakeAndFlash","amplitude":"4","randomShake":"false"}
*
* @param enemy
* @text Enemy Settings
* @desc Make settings for enemies.
* @type struct<enemy>
* @default {"offsetX":"48","offsetY":"48","stepForward":"true","extraMotion":"true","whiten":"false","damageEffect":"shakeAndFlash","amplitude":"4","randomShake":"false","collapseEffect":"plain"}
*
* @param faceFrame
* @text Face Frame Settings
* @desc Make settings related to the actor's face image.
* @type struct<faceFrame>
* @default {"faceRect":"true","offsetX":"0","offsetY":"16"}
*
* @command hideStatusWindow
* @text Hide Status Window
* @desc Hide status window.
*
* @command showStatusWindow
* @text Show Status Window
* @desc Show status window.
*
* @command hideLogWindow
* @text Hide Log Window
* @desc Hide log window.
*
* @command showLogWindow
* @text Show Log Window
* @desc Show log window.
*
*/

/*~struct~window:
*
* @param skin
* @text Window Skin
* @desc It is an image of the window used only in battle.
* @type file
* @dir img/system
* @default 
*
* @param opacity
* @text Opacity
* @desc Window opacity used only in battle.
* -1：System standard
* @type number
* @min -1
* @default -1
*
* @param padding
* @text Padding
* @desc Specifies not to cover the window.
* @type number
* @default 192
*
* @param nameBox
* @text Name Box Window
* @desc Configure window settings.
* @type struct<textWindow>
* @default {"skin":"","opacity":"-1"}
*
* @param help
* @text Help Window
* @desc Configure window settings.
* @type struct<textWindow>
* @default {"skin":"","opacity":"-1"}
*
* @param skill
* @text Skill Window
* @desc Configure window settings.
* @type struct<commandWindow>
* @default {"skin":"","opacity":"-1","wide":"false","maxLines":"7","maxCols":"2"}
*
* @param item
* @text Item Window
* @desc Configure window settings.
* The width, Rows, Columns are linked with the skill window.
* @type struct<textWindow>
* @default {"skin":"","opacity":"-1"}
*
* @param partyCommand
* @text Party Command Window
* @desc Configure window settings.
* @type struct<commandWindow>
* @default {"skin":"","opacity":"-1","wide":"false","maxLines":"1","maxCols":"2"}
*
* @param actorCommand
* @text Actor Command Window
* @desc Configure window settings.
* @type struct<actorCommandWindow>
* @default {"skin":"","opacity":"-1","wide":"false","maxLines":"2","maxCols":"2","mixSkillTypes":"true"}
*
* @param enemy
* @text Enemy Window
* @desc Configure window settings.
* @type struct<commandWindow>
* @default {"skin":"","opacity":"-1","wide":"false","maxLines":"2","maxCols":"2"}
*
* @param log
* @text Log Window
* @desc Configure window settings.
* @type struct<logWindow>
* @default {"skin":"","opacity":"-1","maxLines":"3"}
*
* @param status
* @text Status Window
* @desc Configure window settings.
* @type struct<statusWindow>
* @default {"x":"0","width":"172","height":"-1","rowSpacing":"6","minLines":"4","slideDuration":"14","backExtend":"108","backGradWidth":"96","cursorOffsetX":"16","cursorFilterAreaExtraWidth":"128"}
*
*/

/*~struct~statusWindow:
*
* @param x
* @text X-coordinate
* @desc X coordinate of the window.
* @type number
* @min -999999
* @default 0
*
* @param width
* @text Width
* @desc Width of the window.
* @type number
* @default 172
*
* @param height
* @text Height
* @desc Height of the window.
* -1：Auto
* @type number
* @min -1
* @default -1
*
* @param rowSpacing
* @text Row Spacing
* @desc Distance between frames of actors.
* @type number
* @default 6
*
* @param minLines
* @text Minimum Number of Lines
* @desc The number of lines in the window will change depending on the number of battle members, but this is the minimum value.
* @type number
* @default 4
*
* @param slideDuration
* @text Slide Duration
* @desc Slide-in/out duration.
* @type number
* @default 14
*
* @param backExtend
* @text Background Extension
* @desc How far the actor's background extends from the right edge of the window.
* @type number
* @default 108
*
* @param backGradWidth
* @text Background Gradient Width
* @desc The gradient width of the actor's background.
* @type number
* @default 96
*
* @param cursorOffsetX
* @text Cursor Offset X
* @desc Arrow cursor offset.
* This parameter is valid only when using FesCursor.js.
* @type number
* @default 16
* @min -9999
*
* @param cursorFilterAreaExtraWidth
* @text Cursor Filter Area Expansion Width
* @desc When using FesCursor.js, increase this number if the cursor is cut off.
* @type number
* @default 128
*
*/

/*~struct~textWindow:
*
* @param skin
* @text Window Skin
* @desc Image of the window.
* @type file
* @dir img/system
* @default
*
* @param opacity
* @text Opacity
* @desc Window opacity.
* -1：Window setting standard
* @type number
* @min -1
* @default -1
*
*/

/*~struct~commandWindow:
*
* @param skin
* @text Window Skin
* @desc Image of the window.
* @type file
* @dir img/system
* @default
*
* @param opacity
* @text Opacity
* @desc Window opacity.
* -1：Window setting standard
* @type number
* @min -1
* @default -1
*
* @param wide
* @text Wide
* @desc Make the window wider.
* @default false
* @type boolean
*
* @param maxLines
* @text Number of Lines
* @desc Change the number of lines in the window.
* @default 2
* @type number
*
* @param maxCols
* @text Number of Columns
* @desc Change the number of columns in the window.
* @default 2
* @type number
*
*/

/*~struct~actorCommandWindow:
*
* @param skin
* @text Window Skin
* @desc Image of the window.
* @type file
* @dir img/system
* @default
*
* @param opacity
* @text Opacity
* @desc Window opacity.
* -1：Window setting standard
* @type number
* @min -1
* @default -1
*
* @param wide
* @text Wide
* @desc Make the window wider.
* @default false
* @type boolean
*
* @param maxLines
* @text Number of Lines
* @desc Change the number of lines in the window.
* @default 2
* @type number
*
* @param maxCols
* @text Number of Columns
* @desc Change the number of columns in the window.
* @default 2
* @type number
*
* @param mixSkillTypes
* @text Mix Skill Types
* @desc Mix skill commands into one.
* @default true
* @type boolean
*
* @param sortCommandList
* @text Sort Command List
* @desc Enter symbol. What is on top comes on top.
* attack guard item skill, etc.
* @default
* @type string[]
*
*/

/*~struct~logWindow:
*
* @param skin
* @text Window Skin
* @desc Image of the window.
* @type file
* @dir img/system
* @default
*
* @param opacity
* @text Opacity
* @desc Window opacity.
* -1：Window setting standard
* @type number
* @min -1
* @default -1
*
* @param maxLines
* @text Number of Lines
* @desc Change the number of lines in the window.
* @default 3
* @type number
*
*/

/*~struct~battleLog:
*
* @param fesMode
* @text Fes Mode
* @desc Draws spawn, flee, win, etc. text in the log window.
* Parameters below this are valid only when true.
* @type boolean
* @default true
*
* @param playOk
* @text Play OK
* @desc Plays a decision sound when accepting input in the log window.
* @type boolean
* @default true
*
* @param skipMode
* @text Skip Mode
* @desc Displays the monster appearance text without accepting input.
* @type boolean
* @default true
*
* @param emergeMessageStyle
* @text Emerge Message Style
* @desc This is the display format of the monster appearance text.
* @type select
* @default 1
* @option Default
* @value 0
* @option Use only Emerge Troop Message 1
* @value 1
* @option Use both troop messages
* @value 2
*
* @param emergeTroopMessage1
* @text Emerge Troop Message 1
* @desc A message when a horde of monsters appears.
* @type string
* @default A horde of monsters emerged!
*
* @param emergeTroopMessage2
* @text Emerge Troop Message 2
* @desc This is a message when a horde of the same monster appears.
* @type string
* @default A horde of %1s emerged!
*
*/

/*~struct~faceFrame:
*
* @param faceRect
* @text Face Display Area
* @desc Whether to consider the icon area.
* @type boolean
* @default true
*
* @param offsetX
* @text Offset X
* @desc Shifts the cutting position by the specified number.
* @type number
* @default 0
* @min -9999
*
* @param offsetY
* @text Offset Y
* @desc Shifts the cutting position by the specified number.
* @type number
* @default 16
* @min -9999
*
* @param faceFrames
* @text Individual Settings
* @desc You can set individual face images to be shifted.
* @type struct<faceFrames>[]
*
*/

/*~struct~faceFrames:
*
* @param faceName
* @text Face Name
* @desc Select the face image to set.
* @default
* @type file
* @dir img/faces
*
* @param startIndex
* @text Start Index
* @desc Select the start point of the face image to be set.
* @default 0
* @type number
*
* @param endIndex
* @text End Index
* @desc Select the end point of the face image to be set.
* If 0, no range is specified.
* @default 0
* @type number
*
* @param offsetX
* @text Offset X
* @desc Shifts the cutting position by the specified number.
* @type number
* @default 0
* @min -9999
*
* @param offsetY
* @text Offset Y
* @desc Shifts the cutting position by the specified number.
* @type number
* @default 0
* @min -9999
*
*/

/*~struct~actor:
*
* @param stateSprite
* @text State Sprite
* @desc Show the state overlay.
* @type boolean
* @default false
*
* @param stateSpriteX
* @text State X
* @desc Shift the position by the specified number.
* @type number
* @default 0
* @min -9999
*
* @param stateSpriteY
* @text State Y
* @desc Shift the position by the specified number.
* @type number
* @default 0
* @min -9999
*
* @param separateIcon
* @text Separate Icon
* @desc Prepare two icon frames.
* Shows buffs on top and stats on the bottom.
* @type boolean
* @default true
*
* @param emptyIconId
* @text Empty Icon ID
* @desc The ID of the icon to display when in no state.
* @type string
* @default 16
*
* @param stepForward
* @text Step Forward
* @desc Moves the actor forward when acting.
* @type boolean
* @default true
*
* @param extraMotion
* @text Extra Motion
* @desc The actor moves when evading or counterattacking.
* @type boolean
* @default true
*
* @param whiten
* @text Whiten
* @desc Makes the actor white when acting.
* @type boolean
* @default false
*
* @param damageEffect
* @text Damage Effect
* @desc The behavior of the actor when receiving damage.
* @type select
* @default shake
* @option Blink
* @value blink
* @option Shake
* @value shake
* @option Shake And Flash
* @value shakeAndFlash
* @option None
* @value null
*
* @param amplitude
* @text Amplitude
* @desc Amplitude when the damage effect is Shake.
* @type number
* @default 4
* @min -99999999
*
* @param randomShake
* @text Random Shake
* @desc If the damage effect is Shake, shake violently.
* @type boolean
* @default false
*
*/

/*~struct~enemy:
*
* @param offsetX
* @text Offset X
* @desc Shift the enemy's X coordinate.
* @type number
* @default 48
* @min -9999
*
* @param offsetY
* @text Offset Y
* @desc Shift the enemy's Y coordinate.
* @type number
* @default 48
* @min -9999
*
* @param stepForward
* @text Step Forward
* @desc Moves the enemy forward when acting.
* @type boolean
* @default true
*
* @param extraMotion
* @text Extra Motion
* @desc The enemy moves when evading or counterattacking.
* @type boolean
* @default true
*
* @param whiten
* @text Whiten
* @desc Makes the enemy white when acting.
* @type boolean
* @default false
*
* @param damageEffect
* @text Damage Effect
* @desc The behavior of the enemy when receiving damage.
* @type select
* @default shakeAndFlash
* @option Blink
* @value blink
* @option Shake
* @value shake
* @option Shake And Flash
* @value shakeAndFlash
* @option None
* @value null
*
* @param amplitude
* @text Amplitude
* @desc Amplitude when the damage effect is Shake.
* @type number
* @default 4
* @min -99999999
*
* @param randomShake
* @text Random Shake
* @desc If the damage effect is Shake, shake violently.
* @type boolean
* @default false
*
* @param collapseEffect
* @text Collapse Effect
* @desc Disappears the enemy on death.
* @type select
* @option Flashy
* @value flashy
* @option Plain
* @value plain
* @default plain
*
*/
/*:ja
* @target MZ
* @plugindesc ツクールフェス風の戦闘画面になります。
* @author あわやまたな (Awaya_Matana)
* @url https://awaya3ji.seesaa.net/article/488936194.html
* @help 【プラグインコマンド】
* ステータスウィンドウやログウィンドウを隠したり元に戻したりできます。
*
* 【メモ】
* <hideStatus> //ステータスウィンドウを隠す。
* <hideLog> //ログウィンドウを隠す。
* <hideStatusAndLog> //両方隠す。
* スキルのメモ欄にこれらのタグを入力するとスキル発動終了まで隠れます。
*
* [更新履歴]
* 2022/06/17：Ver.1.0.0　公開
* 2022/07/16：Ver.1.1.0　バグ修正。ネームウィンドウスキンを変更可能に。
* 2022/07/30：Ver.1.2.0　バグ修正。FesCursor最新版への対応。
* 2022/09/05：Ver.1.2.1　FesCursor導入時かつパーティーメンバーが最大人数未満の時にフリーズするバグの修正。
* 2022/09/13：Ver.2.0.0　ウィンドウの機能を大幅に強化。FesCursorの項目をウィンドウ設定に移動。
* 2022/09/14：Ver.2.0.1　アイテムが表示されない不具合を修正。
* 2022/09/22：Ver.2.1.0　処理を大幅に簡略化。
* 2022/10/01：Ver.2.2.0　処理回数の削減。アクター設定、アクターメモ、プラグインコマンドに顔フレーム設定を追加。初期値修正。
* 2022/10/21：Ver.2.3.0　ダメージエフェクトにランダムシェイクを追加。シェイクのバグを修正。
* 2022/12/19：Ver.2.4.0　ステータスウィンドウのパラメータを追加。
* 2023/01/13：Ver.3.0.0　ウィンドウの挙動を修正。
* 2023/01/22：Ver.3.0.1　バトル終了時にアクターが消えないように修正。
* 2023/03/03：Ver.4.0.0　バグ修正。パラメータとプラグインコマンドの追加・変更。スプライト数削減。ステータスの配置を改善。
* 2023/03/06：Ver.4.0.1　ステータスのスライド距離を修正。
* 2023/03/16：Ver.4.1.0　顔フレームのオフセットを調整してもはみ出さないように修正。
* 2023/04/03：Ver.4.2.0　戦闘を高速化。
* 2023/04/08：Ver.4.3.0　一部場面で仮想ボタンが正しく動作しない不具合を修正。
* 2023/04/09：Ver.4.3.1　瀕死時に勝利するとアクターのフレームが白に戻ってしまう不具合を修正。
* 2023/05/07：Ver.4.3.2　ステータスのスライドアウト距離を修正。
* 2023/07/04：Ver.5.0.0　処理の整理。アクターコマンドのソートを可能にしました。
* 2023/07/15：Ver.5.0.1　ログウィンドウと連動してステータスのスライドアウトも高速化するよう変更。
* 2023/07/20：Ver.5.0.2　特定条件下においてアクターが前進しない不具合を修正。
* 2023/07/26：Ver.5.1.0　顔画像を切り替えるプラグインに対応。
* 2023/08/29：Ver.5.1.1　不具合の原因を削除。
* 2023/10/01：Ver.5.1.2　コードを修正。
* 2023/11/23：Ver.5.1.3　コードを修正。
* 2024/03/21：Ver.5.1.4　コードを修正。FesCursor最新版に対応。
*
* @param window
* @text ウィンドウ設定
* @desc ウィンドウに関する設定を行います。
* @type struct<window>
* @default {"skin":"","opacity":"-1","padding":"192","nameBox":"{\"skin\":\"\",\"opacity\":\"-1\"}","help":"{\"skin\":\"\",\"opacity\":\"-1\"}","skill":"{\"skin\":\"\",\"opacity\":\"-1\",\"wide\":\"false\",\"maxLines\":\"7\",\"maxCols\":\"2\"}","item":"{\"skin\":\"\",\"opacity\":\"-1\"}","partyCommand":"{\"skin\":\"\",\"opacity\":\"-1\",\"wide\":\"false\",\"maxLines\":\"1\",\"maxCols\":\"2\"}","actorCommand":"{\"skin\":\"\",\"opacity\":\"-1\",\"wide\":\"false\",\"maxLines\":\"2\",\"maxCols\":\"2\",\"mixSkillTypes\":\"true\"}","enemy":"{\"skin\":\"\",\"opacity\":\"-1\",\"wide\":\"false\",\"maxLines\":\"2\",\"maxCols\":\"2\"}","log":"{\"skin\":\"\",\"opacity\":\"-1\",\"maxLines\":\"3\"}","status":"{\"x\":\"0\",\"width\":\"172\",\"height\":\"-1\",\"rowSpacing\":\"6\",\"minLines\":\"4\",\"slideDuration\":\"14\",\"backExtend\":\"108\",\"backGradWidth\":\"96\",\"cursorOffsetX\":\"16\",\"cursorFilterAreaExtraWidth\":\"128\"}"}
*
* @param battleLog
* @text バトルログ設定
* @desc バトルログに関する設定を行います。
* @type struct<battleLog>
* @default {"fesMode":"true","playOk":"true","skipMode":"true","emergeMessageStyle":"1","emergeTroopMessage1":"モンスターの群れが出現！","emergeTroopMessage2":"%1の群れが出現！"}
*
* @param actor
* @text アクター設定
* @desc アクターに関する設定を行います。
* @type struct<actor>
* @default {"stateSprite":"false","stateSpriteX":"0","stateSpriteY":"0","separateIcon":"true","emptyIconId":"16","stepForward":"true","extraMotion":"true","whiten":"false","damageEffect":"shakeAndFlash","amplitude":"4","randomShake":"false"}
*
* @param enemy
* @text エネミー設定
* @desc エネミーに関する設定を行います。
* @type struct<enemy>
* @default {"offsetX":"48","offsetY":"48","stepForward":"true","extraMotion":"true","whiten":"false","damageEffect":"shakeAndFlash","amplitude":"4","randomShake":"false","collapseEffect":"plain"}
*
* @param faceFrame
* @text 顔フレーム設定
* @desc アクターの顔画像に関する設定を行います。
* @type struct<faceFrame>
* @default {"faceRect":"true","offsetX":"0","offsetY":"16"}
*
* @command hideStatusWindow
* @text ステータスウィンドウ非表示
* @desc ステータスウィンドウを隠します。
*
* @command showStatusWindow
* @text ステータスウィンドウ表示
* @desc ステータスウィンドウを表示します。
*
* @command hideLogWindow
* @text ログウィンドウ非表示
* @desc ログウィンドウを隠します。
*
* @command showLogWindow
* @text ログウィンドウ表示
* @desc ログウィンドウを表示します。
*
*/

/*~struct~window:ja
*
* @param skin
* @text ウィンドウスキン
* @desc 戦闘画面でのみ使用するウィンドウの画像です。
* @type file
* @dir img/system
* @default 
*
* @param opacity
* @text 不透明度
* @desc 戦闘画面でのみ使用するウィンドウの不透明度です。
* -1：システム標準
* @type number
* @min -1
* @default -1
*
* @param padding
* @text パディング
* @desc ウィンドウが潰れないように指定します。
* @type number
* @default 192
*
* @param nameBox
* @text ネームボックスウィンドウ
* @desc ウィンドウの設定を行います。
* @type struct<textWindow>
* @default {"skin":"","opacity":"-1"}
*
* @param help
* @text ヘルプウィンドウ
* @desc ウィンドウの設定を行います。
* @type struct<textWindow>
* @default {"skin":"","opacity":"-1"}
*
* @param skill
* @text スキルウィンドウ
* @desc ウィンドウの設定を行います。
* @type struct<commandWindow>
* @default {"skin":"","opacity":"-1","wide":"false","maxLines":"7","maxCols":"2"}
*
* @param item
* @text アイテムウィンドウ
* @desc ウィンドウの設定を行います。
* 横長、行数、列数はスキルウィンドウと連動します。
* @type struct<textWindow>
* @default {"skin":"","opacity":"-1"}
*
* @param partyCommand
* @text パーティコマンドウィンドウ
* @desc ウィンドウの設定を行います。
* @type struct<commandWindow>
* @default {"skin":"","opacity":"-1","wide":"false","maxLines":"1","maxCols":"2"}
*
* @param actorCommand
* @text アクターコマンドウィンドウ
* @desc ウィンドウの設定を行います。
* @type struct<actorCommandWindow>
* @default {"skin":"","opacity":"-1","wide":"false","maxLines":"2","maxCols":"2","mixSkillTypes":"true"}
*
* @param enemy
* @text エネミーウィンドウ
* @desc ウィンドウの設定を行います。
* @type struct<commandWindow>
* @default {"skin":"","opacity":"-1","wide":"false","maxLines":"2","maxCols":"2"}
*
* @param log
* @text ログウィンドウ
* @desc ウィンドウの設定を行います。
* @type struct<logWindow>
* @default {"skin":"","opacity":"-1","maxLines":"3"}
*
* @param status
* @text ステータスウィンドウ
* @desc ウィンドウの設定を行います。
* @type struct<statusWindow>
* @default {"x":"0","width":"172","height":"-1","rowSpacing":"6","minLines":"4","slideDuration":"14","backExtend":"108","backGradWidth":"96","cursorOffsetX":"16","cursorFilterAreaExtraWidth":"128"}
*
*/

/*~struct~statusWindow:ja
*
* @param x
* @text X座標
* @desc ウィンドウのX座標です。
* @type number
* @min -999999
* @default 0
*
* @param width
* @text 幅
* @desc ウィンドウの幅です。
* @type number
* @default 172
*
* @param height
* @text 高さ
* @desc ウィンドウの高さです。
* -1：自動
* @type number
* @min -1
* @default -1
*
* @param rowSpacing
* @text 行間
* @desc アクターの枠同士の隙間の大きさです。
* @type number
* @default 6
*
* @param minLines
* @text 最低行数
* @desc 戦闘メンバーの人数に応じてウィンドウの行数が変化しますが、その最低値です。
* @type number
* @default 4
*
* @param slideDuration
* @text スライド時間
* @desc スライドイン・アウトの時間です。
* @type number
* @default 14
*
* @param backExtend
* @text 背景延長
* @desc アクター背景をウィンドウの右端からどれくらい延長するか。
* @type number
* @default 108
*
* @param backGradWidth
* @text 背景グラデーション幅
* @desc アクター背景のグラデーション幅。
* @type number
* @default 96
*
* @param cursorOffsetX
* @text カーソルオフセットX
* @desc 矢印カーソルのオフセットです。
* FesCursor.js使用時のみ有効なパラメータです。
* @type number
* @default 16
* @min -9999
*
* @param cursorFilterAreaExtraWidth
* @text カーソルフィルターエリア拡張幅
* @desc FesCursor.js使用時、カーソルが切れる場合はこの数値を大きくしてください。
* @type number
* @default 128
*
*/

/*~struct~textWindow:ja
*
* @param skin
* @text ウィンドウスキン
* @desc ウィンドウの画像です。
* @type file
* @dir img/system
* @default
*
* @param opacity
* @text 不透明度
* @desc ウィンドウの不透明度です。
* -1：ウィンドウ設定標準
* @type number
* @min -1
* @default -1
*
*/

/*~struct~commandWindow:ja
*
* @param skin
* @text ウィンドウスキン
* @desc ウィンドウの画像です。
* @type file
* @dir img/system
* @default
*
* @param opacity
* @text 不透明度
* @desc ウィンドウの不透明度です。
* -1：ウィンドウ設定標準
* @type number
* @min -1
* @default -1
*
* @param wide
* @text 横長
* @desc ウィンドウの幅を横長にする。
* @default false
* @type boolean
*
* @param maxLines
* @text 行数
* @desc ウィンドウの行数を変更する。
* @default 2
* @type number
*
* @param maxCols
* @text 列数
* @desc ウィンドウの列数を変更する。
* @default 2
* @type number
*
*/

/*~struct~actorCommandWindow:ja
*
* @param skin
* @text ウィンドウスキン
* @desc ウィンドウの画像です。
* @type file
* @dir img/system
* @default
*
* @param opacity
* @text 不透明度
* @desc ウィンドウの不透明度です。
* -1：ウィンドウ設定標準
* @type number
* @min -1
* @default -1
*
* @param wide
* @text 横長
* @desc ウィンドウの幅を横長にする。
* @default false
* @type boolean
*
* @param maxLines
* @text 行数
* @desc ウィンドウの行数を変更する。
* @default 2
* @type number
*
* @param maxCols
* @text 列数
* @desc ウィンドウの列数を変更する。
* @default 2
* @type number
*
* @param maxCols
* @text 列数
* @desc ウィンドウの列数を変更する。
* @default 2
* @type number
*
* @param mixSkillTypes
* @text スキルタイプ混合
* @desc スキルのコマンドを一つにまとめます。
* @default true
* @type boolean
*
* @param sortCommandList
* @text コマンドのソート
* @desc シンボルを入力します。上にあるものが上に来ます。
* attack guard item skillなど。
* @default
* @type string[]
*
*/

/*~struct~logWindow:ja
*
* @param skin
* @text ウィンドウスキン
* @desc ウィンドウの画像です。
* @type file
* @dir img/system
* @default
*
* @param opacity
* @text 不透明度
* @desc ウィンドウの不透明度です。
* -1：ウィンドウ設定標準
* @type number
* @min -1
* @default -1
*
* @param maxLines
* @text 行数
* @desc ウィンドウの行数を変更する。
* @default 3
* @type number
*
*/

/*~struct~battleLog:ja
*
* @param fesMode
* @text フェスモード
* @desc 出現、逃走、勝利などのテキストをログウィンドウ内に描画します。true時のみこれより下のパラメータが有効になります。
* @type boolean
* @default true
*
* @param playOk
* @text 決定音再生
* @desc ログウィンドウでの入力受付時、決定音を再生します。
* @type boolean
* @default true
*
* @param skipMode
* @text スキップモード
* @desc モンスター出現テキストを入力受付なしで表示します。
* 出現メッセージタイプが0の時に有効になるパラメータです。
* @type boolean
* @default true
*
* @param emergeMessageStyle
* @text 出現メッセージタイプ
* @desc モンスター出現テキストの表示形式です。
* @type select
* @default 1
* @option デフォルト
* @value 0
* @option 群れ出現メッセージ１のみ使用
* @value 1
* @option 群れ出現メッセージを両方とも使用
* @value 2
*
* @param emergeTroopMessage1
* @text 群れ出現メッセージ１
* @desc 群れで出現した時のメッセージです。
* @type string
* @default モンスターの群れが出現！
*
* @param emergeTroopMessage2
* @text 群れ出現メッセージ２
* @desc 同一モンスターで構成された群れが出現した時のメッセージです。
* @type string
* @default %1の群れが出現！
*
*/

/*~struct~faceFrame:ja
*
* @param faceRect
* @text 顔表示領域
* @desc アイコン領域を考慮するかしないか。
* @type boolean
* @default true
*
* @param offsetX
* @text オフセットX
* @desc 指定した数だけ切り取り位置をずらせます。
* @type number
* @default 0
* @min -9999
*
* @param offsetY
* @text オフセットY
* @desc 指定した数だけ切り取り位置をずらせます。
* @type number
* @default 16
* @min -9999
*
* @param faceFrames
* @text 個別設定
* @desc 個別でずらす顔画像を設定できます。
* @type struct<faceFrames>[]
*
*/

/*~struct~faceFrames:ja
*
* @param faceName
* @text ファイル名
* @desc 設定する顔画像を選択します。
* @default
* @type file
* @dir img/faces
*
* @param startIndex
* @text 開始インデックス
* @desc 設定する顔画像の開始地点を選択します。
* @default 0
* @type number
*
* @param endIndex
* @text 終了インデックス
* @desc 設定する顔画像の終了地点を選択します。
* 範囲指定しない場合は0。
* @default 0
* @type number
*
* @param offsetX
* @text オフセットX
* @desc 指定した数だけ切り取り位置をずらせます。
* @type number
* @default 0
* @min -9999
*
* @param offsetY
* @text オフセットY
* @desc 指定した数だけ切り取り位置をずらせます。
* @type number
* @default 0
* @min -9999
*
*/

/*~struct~actor:ja
*
* @param stateSprite
* @text ステートスプライト
* @desc ステート異常時の重ね合わせを表示します。
* @type boolean
* @default false
*
* @param stateSpriteX
* @text ステートX
* @desc 指定した数だけ位置をずらせます。
* @type number
* @default 0
* @min -9999
*
* @param stateSpriteY
* @text ステートY
* @desc 指定した数だけ位置をずらせます。
* @type number
* @default 0
* @min -9999
*
* @param separateIcon
* @text アイコン分割
* @desc アイコン枠を２つ用意します。
* バフを上段、ステートを下段に表示します。
* @type boolean
* @default true
*
* @param emptyIconId
* @text 空アイコンID
* @desc ステートが何も付与されていない時に表示するアイコンのID。
* @type string
* @default 16
*
* @param stepForward
* @text 前進
* @desc 行動時にアクターを前進させます。
* @type boolean
* @default true
*
* @param extraMotion
* @text さらなるモーション
* @desc 回避時、反撃時にアクターが動きます。
* @type boolean
* @default true
*
* @param whiten
* @text 漂白
* @desc 行動時にアクターを白くします。
* @type boolean
* @default false
*
* @param damageEffect
* @text ダメージエフェクト
* @desc 被ダメージ時のアクターの挙動です。
* @type select
* @default shake
* @option 点滅
* @value blink
* @option シェイク
* @value shake
* @option シェイクとフラッシュ
* @value shakeAndFlash
* @option なし
* @value null
*
* @param amplitude
* @text 振幅
* @desc ダメージエフェクトがシェイクの場合の振幅。
* @type number
* @default 4
* @min -99999999
*
* @param randomShake
* @text ランダムシェイク
* @desc ダメージエフェクトがシェイクの場合、ガタガタに揺れます。
* @type boolean
* @default false
*
*/

/*~struct~enemy:ja
*
* @param offsetX
* @text オフセットX
* @desc エネミーのX座標をずらします。
* @type number
* @default 48
* @min -9999
*
* @param offsetY
* @text オフセットY
* @desc エネミーのY座標をずらします。
* @type number
* @default 48
* @min -9999
*
* @param stepForward
* @text 前進
* @desc 行動時にエネミーを前進させます。
* @type boolean
* @default true
*
* @param extraMotion
* @text さらなるモーション
* @desc 回避時、反撃時にエネミーが動きます。
* @type boolean
* @default true
*
* @param whiten
* @text 漂白
* @desc 行動時にエネミーを白くします。
* @type boolean
* @default false
*
* @param damageEffect
* @text ダメージエフェクト
* @desc 被ダメージ時のエネミーの挙動です。
* @type select
* @default shakeAndFlash
* @option 点滅
* @value blink
* @option シェイク
* @value shake
* @option シェイクとフラッシュ
* @value shakeAndFlash
* @option なし
* @value null
*
* @param amplitude
* @text 振幅
* @desc ダメージエフェクトがシェイクの場合の振幅。
* @type number
* @default 4
* @min -99999999
*
* @param randomShake
* @text ランダムシェイク
* @desc ダメージエフェクトがシェイクの場合、ガタガタに揺れます。
* @type boolean
* @default false
*
* @param collapseEffect
* @text 消滅エフェクト
* @desc 戦闘不能時にエネミーを消滅させるエフェクトの挙動。
* @type select
* @option 派手
* @value flashy
* @option 地味
* @value plain
* @default plain
*
*/

'use strict';

function Sprite_ActorFV() {
	this.initialize(...arguments);
}

function Window_BattleHelp() {
	this.initialize(...arguments);
}

{

	const useMZ = Utils.RPGMAKER_NAME === "MZ";
	const pluginName = document.currentScript.src.match(/^.*\/(.*).js$/)[1];
	const hasPluginCommonBase = typeof PluginManagerEx === "function";
	const parameters = PluginManager.parameters(pluginName);

	const actorParam = JSON.parse(parameters["actor"]);
	const enemyParam = JSON.parse(parameters["enemy"]);
	const faceFrameParam = JSON.parse(parameters["faceFrame"]);
	const windowParam = JSON.parse(parameters["window"]);
	const logParam = JSON.parse(parameters["battleLog"]);
	//windowParam
	for (const prop in windowParam) {
		try {
			const params = JSON.parse(windowParam[prop]);
			windowParam[prop] = params;
			if (typeof params === 'object') {
				for (const structProp in params) {
					try {
						const structParams = JSON.parse(params[structProp]);
						params[structProp] = structParams;
					} catch(e) {}
				}
				if (params.skin === "") {
					params.skin = windowParam.skin;
				}
				if (params.opacity === -1) {
					params.opacity = windowParam.opacity;
				}
			}
		} catch(e) {}
	}
	const nameBoxWindow = windowParam["nameBox"];
	const helpWindow = windowParam["help"];
	const skillWindow = windowParam["skill"];
	const itemWindow = windowParam["item"];
	const partyCommandWindow = windowParam["partyCommand"];
	const actorCommandWindow = windowParam["actorCommand"];
	const enemyWindow = windowParam["enemy"];
	const logWindow = windowParam["log"];
	const statusWindow = windowParam["status"];
	const windowPadding = windowParam["padding"];
	//logParam
	const fesMode = logParam["fesMode"] === "true";
	const logPlayOk = logParam["playOk"] === "true";
	const emergeMessageStyle = Number(logParam["emergeMessageStyle"]);
	const logSkipMode = logParam["skipMode"] === "true" && emergeMessageStyle === 0;
	const emergeTroopMessage1 = logParam["emergeTroopMessage1"];
	const emergeTroopMessage2 = logParam["emergeTroopMessage2"];
	//actorParam
	const stateSprite = actorParam["stateSprite"] === "true";
	const separateIcon = actorParam["separateIcon"] === "true";
	const stateSpriteX = Number(actorParam["stateSpriteX"]);
	const stateSpriteY = Number(actorParam["stateSpriteY"]);
	const emptyIconId = Number(actorParam["emptyIconId"]);
	const stepForward = actorParam["stepForward"] === "true";
	const extraMotion = actorParam["extraMotion"] === "true";
	const whiten = actorParam["whiten"] === "true";
	const shakeAndFlash = actorParam["damageEffect"] === "shakeAndFlash";
	const damageEffect = actorParam["damageEffect"] === "null" ? null : shakeAndFlash ? "shake" : actorParam["damageEffect"];
	const actorAmp = Number(actorParam["amplitude"]);
	const actorRandomShake = actorParam["randomShake"] === "true";
	//enemyParam
	const enemyOffsetX = Number(enemyParam["offsetX"]);
	const enemyOffsetY = Number(enemyParam["offsetY"]);
	const enemyStepForward = enemyParam["stepForward"] === "true";
	const enemyExtraMotion = enemyParam["extraMotion"] === "true";
	const enemyWhiten = enemyParam["whiten"] === "true";
	const enemyShakeAndFlash = enemyParam["damageEffect"] === "shakeAndFlash";
	const enemyDamageEffect = enemyParam["damageEffect"] === "null" ? null : enemyShakeAndFlash ? "shake" : enemyParam["damageEffect"];
	const enemyCollapseEffect = enemyParam["collapseEffect"];
	const enemyAmp = Number(enemyParam["amplitude"]);
	const enemyRandomShake = enemyParam["randomShake"] === "true";
	//faceFrameParam
	const actorFaceRect = faceFrameParam["faceRect"] === "true";
	const faceOffsetX = Number(faceFrameParam["offsetX"]);
	const faceOffsetY = Number(faceFrameParam["offsetY"]);
	const faceFrames = {};
	JSON.parse(faceFrameParam["faceFrames"] || "[]").forEach(str => {
		const params = JSON.parse(str);
		for (const prop in params) {
			if (prop !== "faceName") {
				params[prop] = Number(params[prop] || 0);
			}
		}
		const faceName = params.faceName;
		const startIndex = params.startIndex;
		let endIndex = params.endIndex;
		if (startIndex > endIndex) {
			endIndex = startIndex;
		}
		const offsets = {
			"offsetX": params.offsetX,
			"offsetY": params.offsetY
		};
		for (let i = startIndex; i <= endIndex; i++) {
			const keys = [faceName, i];
			faceFrames[keys] = offsets;
		}
	});
	//FesCursor
	const fesCursorParams = PluginManager.parameters("FesCursor");	
	const windowArrow = fesCursorParams["windowArrowImage"];
	const enemyCursor = fesCursorParams["enemyCursorImage"];

	//-----------------------------------------------------------------------------
	// PluginManager

	PluginManager.registerCommand(pluginName, "showLogWindow", function(args) {
		BattleManager.showLogWindow()
	});

	PluginManager.registerCommand(pluginName, "hideLogWindow", function(args) {
		BattleManager.hideLogWindow()
	});

	PluginManager.registerCommand(pluginName, "showStatusWindow", function(args) {
		BattleManager.showStatusWindow()
	});

	PluginManager.registerCommand(pluginName, "hideStatusWindow", function(args) {
		BattleManager.hideStatusWindow()
	});

	//-----------------------------------------------------------------------------
	// Game_System

	Game_System.prototype.isSideView = function() {
		return false;
	};

	//-----------------------------------------------------------------------------
	// Game_Battler

	const _Game_Battler_initMembers = Game_Battler.prototype.initMembers;
	Game_Battler.prototype.initMembers = function() {
		_Game_Battler_initMembers.call(this);
		this._positionType = null;
	};

	Game_Battler.prototype.clearPosition = function() {
		this._positionType = null;
	};

	Game_Battler.prototype.requestPosition = function(positionType) {
		this._positionType = positionType;
	};

	Game_Battler.prototype.isPositionRequested = function() {
		return !!this._positionType;
	};

	Game_Battler.prototype.positionType = function() {
		return this._positionType;
	};

	//-----------------------------------------------------------------------------
	// Game_Enemy

	const _Game_Enemy_screenX = Game_Enemy.prototype.screenX;
	Game_Enemy.prototype.screenX = function() {
		return _Game_Enemy_screenX.call(this) + enemyOffsetX;
	};

	const _Game_Enemy_screenY = Game_Enemy.prototype.screenY;
	Game_Enemy.prototype.screenY = function() {
		return _Game_Enemy_screenY.call(this) + enemyOffsetY;
	};

	Game_Enemy.prototype.isPositionRequested = function() {
		return enemyExtraMotion && Game_Battler.prototype.isPositionRequested.call(this);
	};

	const _Game_Enemy_performActionStart = Game_Enemy.prototype.performActionStart;
	Game_Enemy.prototype.performActionStart = function(action) {
		_Game_Enemy_performActionStart.call(this, action);
		this.requestEffect(enemyWhiten ? "whiten" : null);
	};
	//回避
	const _Game_Enemy_performEvasion = Game_Enemy.prototype.performEvasion;
	Game_Enemy.prototype.performEvasion = function() {
		_Game_Enemy_performEvasion.call(this);
		this.requestPosition("evade");
	};
	//魔法回避
	const _Game_Enemy_performMagicEvasion = Game_Enemy.prototype.performMagicEvasion;
	Game_Enemy.prototype.performMagicEvasion = function() {
		_Game_Enemy_performMagicEvasion.call(this);
		this.requestPosition("evade");
	};
	//カウンター
	const _Game_Enemy_performCounter = Game_Enemy.prototype.performCounter;
	Game_Enemy.prototype.performCounter = function() {
		_Game_Enemy_performCounter.call(this);
		this.requestPosition("counter");
	};

	const _Game_Enemy_performDamage = Game_Enemy.prototype.performDamage;
	Game_Enemy.prototype.performDamage = function() {
		_Game_Enemy_performDamage.call(this);
		this.requestEffect(enemyDamageEffect);
	};
	
	//-----------------------------------------------------------------------------
	// Sprite_Enemy

	const enemyStepSize = 20;

	Sprite_Enemy.POSITIONS = {
		counter: { x: 0, y: enemyStepSize, speed: 4 },
		evade: { x: enemyStepSize, y: 0, speed: 4 },
		forward: { x: 0, y: enemyStepSize, speed: 4 }
	};

	const _Sprite_Enemy_updateMain = Sprite_Enemy.prototype.updateMain;
	Sprite_Enemy.prototype.updateMain = function() {
		_Sprite_Enemy_updateMain.call(this);
		if (enemyStepForward && this._enemy.isSpriteVisible() && !this.isMoving()) {
			this.updateTargetPosition();
		}
	};

	Sprite_Enemy.prototype.setupPosition = function() {
		if (this._enemy.isPositionRequested()) {
			const positionType = this._enemy.positionType();
			const pos = Sprite_Enemy.POSITIONS[positionType];
			let x = pos.x;
			let y = pos.y;
			if (positionType === "evade") {
				y = this._offsetY;
			}
			this.startMove(x, y, pos.speed);
			this._enemy.clearPosition();
		}
	};

	Sprite_Enemy.prototype.updateTargetPosition = function() {
		if (this._enemy.isPositionRequested()) {
			this.setupPosition();
		} else if (this.shouldStepForward()) {
			this.stepForward();
		} else if (!this.inHomePosition()) {
			this.stepBack();
		}
	};

	Sprite_Enemy.prototype.shouldStepForward = function() {
		return this._enemy.isActing();
	};

	Sprite_Enemy.prototype.stepForward = function() {
		this.startMove(0, enemyStepSize, 4);
	};

	Sprite_Enemy.prototype.stepBack = function() {
		this.startMove(0, 0, 8);
	};

	const _Sprite_Enemy_startEffect = Sprite_Enemy.prototype.startEffect;
	Sprite_Enemy.prototype.startEffect = function(effectType) {
		if (effectType === "shake") {
			this.startShake();
		}
		_Sprite_Enemy_startEffect.call(this, effectType);
	};

	const shakeDuration = 16;
	Sprite_Enemy.prototype.startShake = function() {
		this._effectDuration = shakeDuration;
	};

	const _Sprite_Enemy_updateEffect = Sprite_Enemy.prototype.updateEffect;
	Sprite_Enemy.prototype.updateEffect = function() {
		const needsUpdate = this._effectDuration > 0;
		const effectType = this._effectType;
		_Sprite_Enemy_updateEffect.call(this);
		if ((needsUpdate || this._effectDuration > 0) && (this._effectType ?? effectType) === "shake") {
			this.updateShake();
		}
	};

	const enemyShakeSpeed = 540/shakeDuration;
	Sprite_Enemy.prototype.updateShake = function() {
		const angle = enemyShakeSpeed * (shakeDuration - this._effectDuration);
		const rad = angle*Math.PI/180
		this._shake = -Math.trunc(enemyAmp * Math.sin(rad));
		if (enemyShakeAndFlash) {
			const alpha = 128 - (shakeDuration - this._effectDuration) * 8;
			this.setBlendColor([255, 128, 128, alpha]);
		}
	};

	const _Sprite_Enemy_updateCollapse = Sprite_Enemy.prototype.updateCollapse;
	Sprite_Enemy.prototype.updateCollapse = function() {
		_Sprite_Enemy_updateCollapse.call(this);
		if (enemyCollapseEffect === "plain") {
			this.blendMode = 0;
			this.setBlendColor([0, 0, 0, 0]);
		}
	};

	const _Sprite_Enemy_updateSelectionEffect = Sprite_Enemy.prototype.updateSelectionEffect;
	Sprite_Enemy.prototype.updateSelectionEffect = function() {
		if (enemyCursor) {
			const target = this.mainSprite();
			if (!SceneManager._scene._enemyWindow.active || this._battler.isSelected()) {
				target.setBlendColor([0, 0, 0, 0]);
			} else {
				target.setBlendColor([0, 0, 0, 96]);
			}
		} else {
			_Sprite_Enemy_updateSelectionEffect.call(this);
		}
	};

	const _Sprite_Enemy_updatePosition = Sprite_Enemy.prototype.updatePosition;
	Sprite_Enemy.prototype.updatePosition = function() {
		_Sprite_Enemy_updatePosition.call(this);
		if (this._shake && enemyRandomShake) {
			this.x -= this._shake;
			const rad = Math.random() * 360 / 180 * Math.PI;
			this.x += Math.cos(rad) * this._shake;
			this.y += Math.sin(rad) * this._shake;
		}
	};

	//-----------------------------------------------------------------------------
	// Game_Actor

	Game_Actor.prototype.isPositionRequested = function() {
		return extraMotion && Game_Battler.prototype.isPositionRequested.call(this);
	};
	//フロントビューでもサイドビュー画像を表示
	Game_Actor.prototype.isSpriteVisible = function() {
		return true;
	};
	//漂白
	const _Game_Actor_performActionStart = Game_Actor.prototype.performActionStart;
	Game_Actor.prototype.performActionStart = function(action) {
		_Game_Actor_performActionStart.call(this, action);
		if (whiten) {
			this.requestEffect("whiten");
		}
	};
	//回避
	const _Game_Actor_performEvasion = Game_Actor.prototype.performEvasion;
	Game_Actor.prototype.performEvasion = function() {
		_Game_Actor_performEvasion.call(this);
		this.requestPosition("evade");
	};
	//魔法回避
	const _Game_Actor_performMagicEvasion = Game_Actor.prototype.performMagicEvasion;
	Game_Actor.prototype.performMagicEvasion = function() {
		_Game_Actor_performMagicEvasion.call(this);
		this.requestPosition("evade");
	};
	//カウンター
	const _Game_Actor_performCounter = Game_Actor.prototype.performCounter;
	Game_Actor.prototype.performCounter = function() {
		_Game_Actor_performCounter.call(this);
		this.requestPosition("counter");
	};
	//ダメージエフェクト
	const _Game_Actor_performDamage = Game_Actor.prototype.performDamage;
	Game_Actor.prototype.performDamage = function() {
		_Game_Actor_performDamage.call(this);
		if (damageEffect) {
			this.requestEffect(damageEffect);
		}
	};
	//消滅エフェクト
	const _Game_Actor_performCollapse = Game_Actor.prototype.performCollapse;
	Game_Actor.prototype.performCollapse = function() {
		_Game_Actor_performCollapse.call(this);
		this.requestEffect("collapse");
	};

	Game_Actor.prototype.enemy = function() {
		return this.actor();
	};

	//-----------------------------------------------------------------------------
	// Sprite_ActorFV

	const stepSize = 20;
	Sprite_ActorFV.POSITIONS = {
		counter: { x:stepSize, y: 0, speed: 4 },
		evade: { x: -stepSize, y: 0, speed: 4},
		forward: { x: stepSize, y: 0, speed: 8}
	};

	Sprite_ActorFV.prototype = Object.create(Sprite_Actor.prototype);
	Sprite_ActorFV.prototype.constructor = Sprite_ActorFV;

	Sprite_ActorFV.prototype.initMembers = function() {
		Sprite_Actor.prototype.initMembers.call(this);
		this._faceIndex = 0;
		this._appeared = false;
		this._effectType = null;
		this._effectDuration = 0;
		this._shake = 0;
		this._shakeX = 0;
		this._shakeY = 0;
		this._statusSprites = [];
		this._faceBitmap = null;
		this._faceRect = new Rectangle();
	};

	Sprite_ActorFV.prototype.setBattler = function(battler) {
		const lastBattler = this._battler;
		Sprite_Actor.prototype.setBattler.call(this, battler);
 		if (battler !== lastBattler && battler) {
 			this.setup(battler);
		};
	};

	Sprite_ActorFV.prototype.setup = function(battler) {
		if (battler.isDead()) {
			this.startEffect("disappear");
		} else {
			this.startEffect("appear");
		}
		this._effectDuration = 1;
	};

	Sprite_ActorFV.prototype.updateSelectionEffect = function() {
		const target = this.mainSprite();
		const collapsed = this.collapsed();
		if (collapsed) {
			target.setBlendColor([0, 0, 0, 64]);
		} else {
			target.setBlendColor([0, 0, 0, 0]);
		}
		if (!windowArrow) {
			if (this._battler.isSelected()) {
				this._selectionEffectCount++;
				if (this._selectionEffectCount % 30 < 15) {
					if (collapsed) {
						target.setBlendColor([0, 0, 0, 0]);
					} else {
						target.setBlendColor([255, 255, 255, 64]);
					}
				}
			} else if (this._selectionEffectCount > 0) {
				this._selectionEffectCount = 0;
			}
		}
	};

	Sprite_ActorFV.prototype.collapsed = function() {
		return !this._appeared && !!this._battler && this._battler.isDead();
	};

	//フロントビュー時に顔画像をサイドビュー画像として読み込む。
	Sprite_ActorFV.prototype.updateBitmap = function() {
		Sprite_Battler.prototype.updateBitmap.call(this);
		const name = this._actor.faceName();
		const index = this._actor.faceIndex();
		if (this._battlerName !== name || this._faceIndex !== index) {
			this._battlerName = name;
			this._faceIndex = index;
			this._mainSprite.bitmap = ImageManager.loadFace(name);
			const rect = this._faceRect;
			this.setFaceFrame(rect.width, rect.height);
		}
	};
	//サイドビュー画像のフレームをセット
	Sprite_ActorFV.prototype.updateFrame = function() {
		Sprite_Battler.prototype.updateFrame.call(this);
		this.updateFaceFrame();
	};

	Sprite_ActorFV.prototype.setFaceFrame = function(width, height) {
		const actor = this._actor;
		const faceName = actor ? actor.faceName() : "";
		const faceIndex = actor ? actor.faceIndex() : 0;
		const offsets = faceFrames[[faceName, faceIndex]];
		let offsetX = faceOffsetX;
		let offsetY = faceOffsetY;
		if (offsets) {
			offsetX += offsets.offsetX;
			offsetY += offsets.offsetY;
		}
		const pw = ImageManager.faceWidth;
		const ph = ImageManager.faceHeight;
		const sw = Math.min(width, pw);
		const sh = Math.min(height, ph);
		const minX = (faceIndex % 4) * pw;
		const maxX = minX + pw - sw;
		const minY = Math.floor(faceIndex / 4) * ph;
		const maxY = minY + ph - sh;
		let sx = Math.floor(minX + (pw - sw) / 2) + offsetX;
		let sy = Math.floor(minY + (ph - sh) / 2) + offsetY;
		if (sx < minX) {
			sx = minX;
		} else if (sx > maxX) {
			sx = maxX;
		}
		if (sy < minY) {
			sy = minY;
		} else if (sy > maxY) {
			sy = maxY;
		}
		this._faceRect.x = sx;
		this._faceRect.y = sy;
		this._faceRect.width = sw;
		this._faceRect.height = sh;
		this.updateFaceFrame();
	};

	Sprite_ActorFV.prototype.updateFaceFrame = function() {
		const rect = this._faceRect;
		const width = rect.width;
		const height = rect.height;
		const pw = ImageManager.faceWidth;
		const ph = ImageManager.faceHeight;
		const sw = rect.width;
		const sh = rect.height;
		const sx = rect.x;
		const sy = rect.y;
		this._mainSprite.setFrame(sx, sy, sw, sh);
		this.setFrame(0, 0, sw, sh);
	};

	Sprite_ActorFV.prototype.createMainSprite = function() {
		Sprite_Actor.prototype.createMainSprite.call(this);
		if (actorFaceRect) this._mainSprite.x -= ImageManager.iconWidth/2;
	};
	//ステートフキダシ禁止か否か
	Sprite_ActorFV.prototype.createStateSprite = function() {
		Sprite_Actor.prototype.createStateSprite.call(this);
		if (stateSprite) {
			if (actorFaceRect) this._stateSprite.move(stateSpriteX - ImageManager.iconWidth/2, stateSpriteY);
		} else {
			this._stateSprite.hide();
		}
	};
	//ダメージスプライトのX座標ずらしを追加
	Sprite_ActorFV.prototype.damageOffsetX = function() {
		return Sprite_Battler.prototype.damageOffsetX.call(this);
	};
	//ダメージスプライトのY座標ずらしを追加
	Sprite_ActorFV.prototype.damageOffsetY = function() {
		const fontSize = Sprite_Damage.prototype.fontSize();
		const bitmapHeight = this.mainSprite().height;
		const offsetY = -(bitmapHeight - fontSize)/2;
		return Sprite_Battler.prototype.damageOffsetY.call(this) + offsetY;
	};
	//武器非表示
	Sprite_ActorFV.prototype.createWeaponSprite = function() {
		Sprite_Actor.prototype.createWeaponSprite.call(this);
		this._weaponSprite.hide();
	};
	//影非表示1
	Sprite_ActorFV.prototype.createShadowSprite = function() {
		Sprite_Actor.prototype.createShadowSprite.call(this);
		this._shadowSprite.visible = false;
	};
	//影非表示2
	Sprite_ActorFV.prototype.updateShadow = function() {};
	//入場モーションをキャンセル
	Sprite_ActorFV.prototype.startEntryMotion = function() {};
	//退却モーションをしない
	Sprite_ActorFV.prototype.retreat = function() {};
	//初期位置を変更しない。
	Sprite_ActorFV.prototype.moveToStartPosition = function() {};

	Sprite_ActorFV.prototype.setupPosition = function() {
		if (this._actor.isPositionRequested()) {
			const positionType = this._actor.positionType();
			const pos = Sprite_ActorFV.POSITIONS[positionType];
			const x = pos.x;
			let y = pos.y;
			if (positionType === "evade") {
				y = this._offsetY;
			}
			this.startMove(x, y, pos.speed);
			this._actor.clearPosition();
		}
	};

	const _Sprite_Actor_updateTargetPosition = Sprite_Actor.prototype.updateTargetPosition;
	Sprite_ActorFV.prototype.updateTargetPosition = function() {
		if (this._actor.isPositionRequested()) {
			this.setupPosition();
		} else {
			_Sprite_Actor_updateTargetPosition.call(this);
		}
	};

	Sprite_ActorFV.prototype.shouldStepForward = function() {
		return stepForward && !this.statusWindowHidden() && Sprite_Actor.prototype.shouldStepForward.call(this);
	};

	Sprite_ActorFV.prototype.statusWindowHidden = function() {
		if (BattleManager.statusWindowHidden()) {
			return true;
		}
		const actorField = this.parent;
		return actorField.x - statusWindow.x < -actorField.width;
	};
	//自分のターンになったら前進
	Sprite_ActorFV.prototype.stepForward = function() {
		this.startMove(stepSize, 0, 8);
	};
	//自分のターンが過ぎたら後退
	Sprite_ActorFV.prototype.stepBack = function() {
		this.startMove(0, 0, 8);
	};
	Sprite_ActorFV.prototype.setActorHome = function(index) {};
	Sprite_ActorFV.prototype.updatePosition = function() {
		Sprite_Actor.prototype.updatePosition.call(this);
		this._shakeX = this._shake;
		this._shakeY = 0;
		this.x += this._shake;
		if (this._shake && actorRandomShake) {
			const rad = Math.random() * 360 / 180 * Math.PI;
			this._shakeX = Math.cos(rad) * this._shake;
			this._shakeY = Math.sin(rad) * this._shake;
			this.x -= this._shake;
			this.x += this._shakeX;
			this.y += this._shakeY;
		}
	};
	//Sprite_Enemyからの移植
	//エフェクトのアップデート
	Sprite_ActorFV.prototype.update = function() {
		Sprite_Actor.prototype.update.call(this);
		if (this._actor) {
			this.updateEffect();
		}
	};

	Sprite_ActorFV.prototype.updateMain = function() {
		Sprite_Actor.prototype.updateMain.call(this);
		this.updateStatusPosition();
	};

	Sprite_ActorFV.prototype.updateStatusPosition = function() {
		for (const sprite of this._statusSprites) {
			sprite.x = sprite._homeX + this._offsetX + this._shakeX;
			sprite.y = sprite._homeY + this._offsetY + this._shakeY;
		}
	};

	Sprite_ActorFV.prototype.setupEffect = function() {
		if (this._appeared && this._actor.isEffectRequested()) {
			this.startEffect(this._actor.effectType());
			this._actor.clearEffect();
		}
		if (!this._appeared && this._actor.isAlive()) {
			this.startEffect("appear");
		} else if (this._appeared && this._actor.isHidden()) {
			this.startEffect("disappear");
		}
	};

	Sprite_ActorFV.prototype.startEffect = function(effectType) {
		if (effectType === "shake") {
			this.startShake();
		}
		_Sprite_Enemy_startEffect.call(this, effectType);
	};

	const _Sprite_Enemy_startAppear = Sprite_Enemy.prototype.startAppear;
	Sprite_ActorFV.prototype.startAppear = function() {
		_Sprite_Enemy_startAppear.call(this);
	};

	const _Sprite_Enemy_startDisappear = Sprite_Enemy.prototype.startDisappear;
	Sprite_ActorFV.prototype.startDisappear = function() {
		_Sprite_Enemy_startDisappear.call(this);
	};

	const _Sprite_Enemy_startWhiten = Sprite_Enemy.prototype.startWhiten;
	Sprite_ActorFV.prototype.startWhiten = function() {
		_Sprite_Enemy_startWhiten.call(this);
	};

	const _Sprite_Enemy_startBlink = Sprite_Enemy.prototype.startBlink;
	Sprite_ActorFV.prototype.startBlink = function() {
		_Sprite_Enemy_startBlink.call(this);
	};

	Sprite_ActorFV.prototype.startShake = function() {
		this._effectDuration = shakeDuration;
	};

	const _Sprite_Enemy_startCollapse = Sprite_Enemy.prototype.startCollapse
	Sprite_ActorFV.prototype.startCollapse = function() {
		_Sprite_Enemy_startCollapse.call(this);
	};

	const _Sprite_Enemy_startBossCollapse = Sprite_Enemy.prototype.startBossCollapse;
	Sprite_ActorFV.prototype.startBossCollapse = function() {
		_Sprite_Enemy_startBossCollapse.call(this);
	};

	const _Sprite_Enemy_startInstantCollapse = Sprite_Enemy.prototype.startInstantCollapse;
	Sprite_ActorFV.prototype.startInstantCollapse = function() {
		_Sprite_Enemy_startInstantCollapse.call(this);
	};

	Sprite_ActorFV.prototype.updateEffect = function() {
		const needsUpdate = this._effectDuration > 0;
		const effectType = this._effectType;
		_Sprite_Enemy_updateEffect.call(this);
		if ((needsUpdate || this._effectDuration > 0) && (this._effectType ?? effectType) === "shake") {
			this.updateShake();
		}
	};

	const _Sprite_Enemy_isEffecting = Sprite_Enemy.prototype.isEffecting;
	Sprite_ActorFV.prototype.isEffecting = function() {
		return _Sprite_Enemy_isEffecting.call(this);
	};

	const _Sprite_Enemy_revertToNormal = Sprite_Enemy.prototype.revertToNormal;
	Sprite_ActorFV.prototype.revertToNormal = function() {
		_Sprite_Enemy_revertToNormal.call(this);
	};

	const _Sprite_Enemy_updateWhiten = Sprite_Enemy.prototype.updateWhiten;
	Sprite_ActorFV.prototype.updateWhiten = function() {
		_Sprite_Enemy_updateWhiten.call(this);
	};

	const _Sprite_Enemy_updateBlink = Sprite_Enemy.prototype.updateBlink;
	Sprite_ActorFV.prototype.updateBlink = function() {
		_Sprite_Enemy_updateBlink.call(this);
	};

	const actorShakeSpeed = 720/shakeDuration;
	Sprite_ActorFV.prototype.updateShake = function() {
		const angle = actorShakeSpeed * (shakeDuration - this._effectDuration);
		const rad = angle*Math.PI/180
		this._shake = -Math.trunc(actorAmp * Math.sin(rad));
		if (shakeAndFlash) {
			const alpha = 128 - (shakeDuration - this._effectDuration) * 8;
			this.setBlendColor([255, 128, 128, alpha]);
		}
	};

	Sprite_ActorFV.prototype.updateAppear = function() {};

	Sprite_ActorFV.prototype.updateDisappear = function() {};

	Sprite_ActorFV.prototype.updateCollapse = function() {};

	Sprite_ActorFV.prototype.updateBossCollapse = function() {};

	Sprite_ActorFV.prototype.updateInstantCollapse = function() {};
	
	//-----------------------------------------------------------------------------
	// Window_BattleSkill

	if (skillWindow.skin) {
		Window_BattleSkill.prototype.loadWindowskin = function() {
			this.windowskin = ImageManager.loadSystem(skillWindow.skin);
		};
	}

	if (skillWindow.opacity !== -1) {
		Window_BattleSkill.prototype.updateBackOpacity = function() {
			this.backOpacity = skillWindow.opacity;
		};
	}

	const _Window_BattleSkill_includes = Window_BattleSkill.prototype.includes;
	Window_BattleSkill.prototype.includes = function(item) {
		if (this._stypeId === 0) {
			return !!item;
		}
		return _Window_BattleSkill_includes.call(this, item);
	};

	Window_BattleSkill.prototype.maxCols = function() {
		return skillWindow.maxCols;
	};
	
	//-----------------------------------------------------------------------------
	// Window_BattleItem

	if (itemWindow.skin) {
		Window_BattleItem.prototype.loadWindowskin = function() {
			this.windowskin = ImageManager.loadSystem(itemWindow.skin);
		};
	}

	if (itemWindow.opacity !== -1) {
		Window_BattleItem.prototype.updateBackOpacity = function() {
			this.backOpacity = itemWindow.opacity;
		};
	}

	Window_BattleItem.prototype.maxCols = function() {
		return skillWindow.maxCols;
	};
	
	//-----------------------------------------------------------------------------
	// Window_BattleEnemy

	if (enemyWindow.skin) {
		Window_BattleEnemy.prototype.loadWindowskin = function() {
			this.windowskin = ImageManager.loadSystem(enemyWindow.skin);
		};
	}

	if (enemyWindow.opacity !== -1) {
		Window_BattleEnemy.prototype.updateBackOpacity = function() {
			this.backOpacity = enemyWindow.opacity;
		};
	}

	const _Window_BattleEnemy_hide = Window_BattleEnemy.prototype.hide;
	Window_BattleEnemy.prototype.hide = function() {
		_Window_BattleEnemy_hide.call(this);
		$gameParty.select(null);
	};

	const _Window_BattleEnemy_select = Window_BattleEnemy.prototype.select;
	Window_BattleEnemy.prototype.select = function(index) {
		if (this.cursorAll()) {
			_Window_BattleEnemy_select.call(this, 0);
			$gameTroop.selectAll();
		} else {
			_Window_BattleEnemy_select.call(this, index);
		}
	};

	const _Window_BattleEnemy_processTouch = Window_BattleEnemy.prototype.processTouch;
	Window_BattleEnemy.prototype.processTouch = function() {
		_Window_BattleEnemy_processTouch.call(this);
		if (this.isOpenAndActive() && this.cursorAll()) {
			if (TouchInput.isClicked() && !this.isOverlappingButton()) {
				this.processOk();
			}
		}
	};

	Window_BattleEnemy.prototype.isOverlappingButton = function() {
		return ConfigManager.touchUI && SceneManager._scene._windowLayer.children.some(sprite => {
			if (sprite._isWindow || !sprite.isBeingTouched) {
				return false;
			}
			return sprite.isClickEnabled() && sprite.isBeingTouched();
		});
	};

	Window_BattleEnemy.prototype.maxCols = function() {
		return enemyWindow.maxCols;
	};

	//-----------------------------------------------------------------------------
	// Window_BattleStatus

	Window_BattleStatus.prototype.initialize = function(rect) {
		Window_StatusBase.prototype.initialize.call(this, rect);
		this.openness = 255;
		this._bitmapsReady = 0;
		this.setupActorField();
		this.preparePartyRefresh();
		this.frameVisible = false;
		this._backSprite.visible = false;
		this.cursorVisible = false;
	};
	//ロード待機時はアクターを表示しない。
	const _Window_BattleStatus_preparePartyRefresh = Window_BattleStatus.prototype.preparePartyRefresh;
	Window_BattleStatus.prototype.preparePartyRefresh = function() {
		const actorSprites = this._spriteset._actorSprites;
		for (let i = 0; i < actorSprites.length; i++) {
			actorSprites[i].hide();
		}
		_Window_BattleStatus_preparePartyRefresh.call(this);
	};

	Window_BattleStatus.prototype.drawBackgroundRect = function(rect) {};

	const _Window_BattleStatus_reselect = Window_BattleStatus.prototype.reselect;
	Window_BattleStatus.prototype.reselect = function() {
		_Window_BattleStatus_reselect.call(this);
		this.cursorVisible = false;
	};

	Window_BattleStatus.prototype.setupActorField = function() {
		this._spriteset = SceneManager._scene._spriteset;
		this._actorField = this._spriteset._actorField;
		this.setupActorSprites();
		this._spriteset.updateActors();
	};

	const _Window_BattleStatus_update = Window_BattleStatus.prototype.update;
	Window_BattleStatus.prototype.update = function() {
		_Window_BattleStatus_update.call(this);
		this.updateBattleField();
	};

	Window_BattleStatus.prototype.updateBattleField = function() {
		this._actorField.visible = this.isOpen();
	};

	const _Window_BattleStatus_extraHeight = Window_BattleStatus.prototype.extraHeight;
	Window_BattleStatus.prototype.extraHeight = function() {
		return 0;
	};

	Window_BattleStatus.prototype.itemPadding = function() {
		return 1;
	};

	Window_BattleStatus.prototype.colSpacing = function() {
		return 0;
	};

	Window_BattleStatus.prototype.rowSpacing = function() {
		return statusWindow.rowSpacing;
	};

	Window_BattleStatus.prototype.itemRectWithPadding = function(index) {
		const rect = this.itemRect(index);
		rect.pad(-Sprite_ActorFrame.prototype.frameWidth());
		return rect;
	};

	Window_BattleStatus.prototype.setupActorSprites = function() {
		const actorSprites = this._spriteset._actorSprites;
		for (let i = 0; i < $gameParty.maxBattleMembers(); i++) {
			const key = "actor%1-face".format(i);
			const sprite = actorSprites[i];
			this._additionalSprites[key] = sprite;
		}
	};

	Window_BattleStatus.prototype.placeActorName = function(actor, x, y) {};

	Window_BattleStatus.prototype.placeStateIcon = function(actor, x, y) {
		if (this._canSeparateIcon) {
			const key = "actor%1-buffIcon".format(actor.index());
			const sprite = this.createInnerSprite(key, Sprite_BattleActorIcon);
			sprite.setup(actor, "buff");
			sprite.setHome(x, y);
			sprite.show();
		}
		const key = "actor%1-stateIcon".format(actor.index());
		const sprite = this.createInnerSprite(key, Sprite_BattleActorIcon);
		const type = this._canSeparateIcon ? "state" : "";
		const offsetY = this._canSeparateIcon ? ImageManager.iconHeight : 0;
		sprite.setup(actor, type);
		sprite.setHome(x, y + offsetY);
		sprite.show();
	};

	Window_BattleStatus.prototype.placeBasicGauges = function(actor, x, y) {
		this.placeGauge(actor, "hp", x, y);
		this.placeGauge(actor, "mp", x, y + this.gaugeLineHeight());
		if ($dataSystem.optDisplayTp) {
			const rect = this.itemRectWithPadding(0);
			this.placeGauge(actor, "tp", x + this.itemRectWithPadding(0).width/2 + 1, y + this.gaugeLineHeight());
		}
	};

	Window_BattleStatus.prototype.placeGauge = function(actor, type, x, y) {
		const key = "actor%1-gauge-%2".format(actor.index(), type);
		const sprite = this.createInnerSprite(key, Sprite_BattleStatusGauge);
		sprite.setup(actor, type);
		sprite.setHome(x, y);
		sprite.show();
		const rect = this.itemRectWithPadding(0);
		if (type !== "hp" && $dataSystem.optDisplayTp) {
			rect.width = rect.width/2 - 1;
		}
		sprite.resize(rect.width);
	};

	Window_BattleStatus.prototype.placeTimeGauge = function(actor, x, y) {
		if (!BattleManager.isTpb()) return;
		const type = "time";
		const key = "actor%1-gauge-%2".format(actor.index(), type);
		const sprite = this.createInnerSprite(key, Sprite_BattleStatusTimeGauge);
		sprite.setup(actor, type);
		sprite.setHome(x, y);
		sprite.show();
		const iconHeight = ImageManager.iconHeight;
		const itemRect = this.itemRectWithPadding(0);
		if (this._outerTimeGauge) {
			return itemRect.height;
		}
		let iconBottom = this.stateIconY(itemRect) + iconHeight/2;
		if (this._canSeparateIcon) {
			iconBottom += iconHeight;
		}
		const gaugeY = this.basicGaugesY(itemRect);
		sprite.resize(Math.floor(gaugeY - iconBottom)-1);
	};
	//顔画像の設置
	Window_BattleStatus.prototype.placeActorFace = function(actor, x, y, width, height) {
		const key = "actor%1-face".format(actor.index());
		const sprite = this.createInnerSprite(key, Sprite_ActorFV);
		sprite.setHome(x+width/2, y+height);
		sprite.show();
		sprite.setFaceFrame(width, height);
	};
	//顔画像の設置
	const backExtend = statusWindow.backExtend;
	Window_BattleStatus.prototype.placeActorBack = function(actor, x, y, width, height) {
		const key = "actor%1-back".format(actor.index());
		const sprite = this.createInnerSprite(key, Sprite_ActorBack);
		const parentX = (Graphics.width - Graphics.boxWidth)/2;
		x = -(parentX + statusWindow.x + this.innerRect.x);
		sprite.move(x, y);
		sprite.setup(actor);
		sprite.show();
		const windowRightX = parentX + statusWindow.x + this.width;
		const itemRect = this.itemRect(0);
		sprite.resize(windowRightX + backExtend, itemRect.height);
	};
	//顔画像の設置
	Window_BattleStatus.prototype.placeFrame = function(actor, x, y) {
		const key = "actor%1-frame".format(actor.index());
		const sprite = this.createInnerSprite(key, Sprite_ActorFrame);
		sprite.setHome(x, y);
		sprite.setup(actor);
		sprite.show();
		const itemRect = this.itemRect(0);
		sprite.resize(itemRect.width, itemRect.height)
	};

	const _Window_BattleStatus_drawItemStatus = Window_BattleStatus.prototype.drawItemStatus;
	Window_BattleStatus.prototype.drawItemStatus = function(index) {
		const actor = this.actor(index);
		const rect = this.itemRect(index);
		this._canSeparateIcon = false;
		this._outerTimeGauge = false;
		if (separateIcon) {
			const rect = this.itemRectWithPadding(index);
			const basicGaugesY = this.basicGaugesY(rect);
			const stateIconY = this.stateIconY(rect);
			this._canSeparateIcon = basicGaugesY >= stateIconY + ImageManager.iconHeight*3/2;
		}
		if (BattleManager.isTpb()) {
			const rect = this.itemRectWithPadding(index);
			const basicGaugesY = this.basicGaugesY(rect);
			let iconBottom = this.stateIconY(rect) + ImageManager.iconHeight/2;
			if (this._canSeparateIcon) {
				iconBottom += ImageManager.iconHeight;
			}
			this._outerTimeGauge = basicGaugesY - iconBottom < ImageManager.iconHeight*2/3;
		}
		this.placeFrame(actor, rect.x, rect.y);
		this.placeActorBack(actor, rect.x, rect.y);
		_Window_BattleStatus_drawItemStatus.call(this, index);
	};

	Window_BattleStatus.prototype.faceRect = function(index) {
		const rect = this.itemRectWithPadding(index);
		if (actorFaceRect) {
			rect.width -= ImageManager.iconWidth;
			rect.x += ImageManager.iconWidth/2
		}
		return rect;
	};

	Window_BattleStatus.prototype.nameX = function(rect) {
		let x = rect.x + rect.width;
		if (this._outerTimeGauge) {
			x += ImageManager.iconWidth/2 + 4;
		}
		return x;
	};

	Window_BattleStatus.prototype.nameY = function(rect) {
		if (this._outerTimeGauge) {
			return rect.y + rect.height;
		}
		return this.basicGaugesY(rect);
	};

	Window_BattleStatus.prototype.basicGaugesY = function(rect) {
		const bottom = rect.y + rect.height - this.extraHeight();
		const numGauges = 2;
		return bottom - this.gaugeLineHeight() * numGauges;
	};
	//はみ出し有効か。
	Window_BattleStatus.prototype.addInnerChild = function(child) {
		if (child.constructor === Sprite_ActorFrame || child.constructor === Sprite_ActorBack) {
			return this._actorField.addChildAt(child,0);
		}
		return this._actorField.addChild(child);
	};
	//デフォルトの顔画像は表示しない。
	const _Window_BattleStatus_drawItemImage = Window_BattleStatus.prototype.drawItemImage;
	Window_BattleStatus.prototype.drawItemImage = function(index) {
		const rect = this.faceRect(index);
		const actor = this.actor(index);
		this.placeActorFace(actor, rect.x, rect.y, rect.width, rect.height);
	};

	Window_BattleStatus.prototype.gaugeLineHeight = function() {
		return 20;
	};

	Window_BattleStatus.prototype.maxCols = function() {
		return 1;
	};

	Window_BattleStatus.prototype.itemHeight = function() {
		const maxLines = Math.max(statusWindow.minLines, $gameParty.battleMembers().length);
		return Math.floor(this.innerHeight / maxLines);
	};

	Window_BattleStatus.prototype.stateIconX = function(rect) {
		return rect.x + rect.width - ImageManager.iconWidth / 2;
	};

	Window_BattleStatus.prototype.stateIconY = function(rect) {
		return rect.y + ImageManager.iconHeight / 2;
	};

	Window_BattleStatus.prototype._updateCursor = function() {
		Window_Selectable.prototype._updateCursor.call(this);
		this._cursorSprite.visible = false;
	};

	//-----------------------------------------------------------------------------
	// Window_BattleActor

	const _Window_BattleActor__updateArrowCursorFilterAreaExtraWidth = Window_BattleActor.prototype._updateArrowCursorFilterAreaExtraWidth;
	Window_BattleActor.prototype._updateArrowCursorFilterAreaExtraWidth = function() {
		return _Window_BattleActor__updateArrowCursorFilterAreaExtraWidth.call(this) + statusWindow.cursorFilterAreaExtraWidth;
	};

	const _Window_BattleActor_hide = Window_BattleActor.prototype.hide;
	Window_BattleActor.prototype.hide = function() {
		_Window_BattleActor_hide.call(this);
		$gameTroop.select(null);
	};

	Window_BattleActor.prototype.arrowCursorToRight = function() {
		return true;
	};

	Window_BattleActor.prototype.arrowCursorOffsetX = function() {
		return -statusWindow.cursorOffsetX;
	};

	Window_BattleActor.prototype.adjustArrowCursorPosition = function() {
		this._arrowCursorSprites.forEach((sprite, index) => {
			const actor = this.actor(index);
			const actorSprite = actor ? SceneManager._scene._spriteset.findTargetSprite(this.actor(index)) : null;
			const stepForward = actorSprite ? actorSprite.shouldStepForward() : false;
			const rect = this.itemRect(index + this.topIndex());
			const offsetX = stepForward ? stepSize : 0;
			sprite.setHome(this.arrowCursorX(rect) + offsetX, this.arrowCursorY(rect));
		});
	};

	Window_BattleActor.prototype.setupActorField = function() {};

	Window_BattleActor.prototype.preparePartyRefresh = function() {};

	Window_BattleActor.prototype.drawAllItems = function() {};

	Window_BattleActor.prototype.updateBattleField = function() {};

	const _Window_BattleActor_select = Window_BattleActor.prototype.select;
	Window_BattleActor.prototype.select = function(index) {
		if (this.cursorAll()) {
			_Window_BattleActor_select.call(this, 0);
			$gameParty.selectAll();
		} else {
			_Window_BattleActor_select.call(this, index);
		}
	};

	Window_BattleActor.prototype.reselect = function() {
		_Window_BattleStatus_reselect.call(this);
	};

	const _Window_BattleActor_processTouch = Window_BattleActor.prototype.processTouch;
	Window_BattleActor.prototype.processTouch = function() {
		Window_BattleStatus.prototype.processTouch.call(this);
		if (this.isOpenAndActive() && (this.cursorAll() || this.cursorFixed())) {
			if (TouchInput.isClicked() && !this.isOverlappingButton()) {
				this.processOk();
			}
		}
	};

	Window_BattleActor.prototype.isOverlappingButton = function() {
		return ConfigManager.touchUI && SceneManager._scene._windowLayer.children.some(sprite => {
			if (sprite._isWindow || !sprite.isBeingTouched) {
				return false;
			}
			return sprite.isClickEnabled() && sprite.isBeingTouched();
		});
	};

	//-----------------------------------------------------------------------------
	// Window_PartyCommand

	const _Window_PartyCommand_initialize = Window_PartyCommand.prototype.initialize;
	Window_PartyCommand.prototype.initialize = function(rect) {
		_Window_PartyCommand_initialize.call(this, rect);
		this.openness = 255;
		this.hide();
	};

	if (partyCommandWindow.skin) {
		Window_PartyCommand.prototype.loadWindowskin = function() {
			this.windowskin = ImageManager.loadSystem(partyCommandWindow.skin);
		};
	}

	if (partyCommandWindow.opacity !== -1) {
		Window_PartyCommand.prototype.updateBackOpacity = function() {
			this.backOpacity = partyCommandWindow.opacity;
		};
	}

	Window_PartyCommand.prototype.maxCols = function() {
		return partyCommandWindow.maxCols;
	};

	//-----------------------------------------------------------------------------
	// Window_ActorCommand
	//アクターコマンドにネームウィンドウを追加。

	if (actorCommandWindow.skin) {
		Window_ActorCommand.prototype.loadWindowskin = function() {
			this.windowskin = ImageManager.loadSystem(actorCommandWindow.skin);
		};
	}

	if (actorCommandWindow.opacity !== -1) {
		Window_ActorCommand.prototype.updateBackOpacity = function() {
			this.backOpacity = actorCommandWindow.opacity;
		};
	}

	const _Window_ActorCommand_initialize = Window_ActorCommand.prototype.initialize;
	Window_ActorCommand.prototype.initialize = function(rect) {
		_Window_ActorCommand_initialize.call(this, rect);
		this.openness = 255;
		this.hide();
	};

	const _Window_ActorCommand_show = Window_ActorCommand.prototype.show;
	Window_ActorCommand.prototype.show = function() {
		_Window_ActorCommand_show.call(this);
		if (this._nameBoxWindow) {
			this._nameBoxWindow.show();
		}
	};

	const _Window_ActorCommand_hide = Window_ActorCommand.prototype.hide;
	Window_ActorCommand.prototype.hide = function() {
		_Window_ActorCommand_hide.call(this);
		if (this._nameBoxWindow) {
			this._nameBoxWindow.hide();
		}
	};

	Window_ActorCommand.prototype.maxCols = function() {
		return actorCommandWindow.maxCols;
	};

	const _Window_ActorCommand_setup = Window_ActorCommand.prototype.setup;
	Window_ActorCommand.prototype.setup = function(actor) {
		_Window_ActorCommand_setup.call(this, actor);
		this.updateActorName();
		this._nameBoxWindow.start();
	};

	Window_ActorCommand.prototype.setNameBoxWindow = function(nameBoxWindow) {
		Window_Message.prototype.setNameBoxWindow.call(this, nameBoxWindow);
	};

	Window_ActorCommand.prototype.updateActorName = function() {
		const actor = this.actor();
		this._nameBoxWindow.setName(actor ? actor.name() : "");
	};

	const _Window_ActorCommand_update = Window_ActorCommand.prototype.update;
	Window_ActorCommand.prototype.update = function() {
		_Window_ActorCommand_update.call(this);
		this.synchronizeNameBox();
	};

	Window_ActorCommand.prototype.synchronizeNameBox = function() {
		Window_Message.prototype.synchronizeNameBox.call(this);
	};

	const _Window_ActorCommand_makeCommandList = Window_ActorCommand.prototype.makeCommandList;
	Window_ActorCommand.prototype.makeCommandList = function() {
		_Window_ActorCommand_makeCommandList.call(this);
		this.sortCommandList(["attack", "guard"]); 
		const symbols = actorCommandWindow.sortCommandList;
		if (symbols && symbols.length) {
			this.sortCommandList(symbols); 
		}
	};

	Window_ActorCommand.prototype.sortCommandList = function(symbols) {
		symbols = symbols.clone().reverse();
		for (const symbol of symbols) {
			const sortSymbols = this._list.filter(command => command && command.symbol === symbol);
			sortSymbols.forEach(symbol => this._list.remove(symbol));
			sortSymbols.reverse();
			sortSymbols.forEach(symbol => this._list.unshift(symbol));
		}
	};

	if (actorCommandWindow.mixSkillTypes) {
		Window_ActorCommand.prototype.addSkillCommands = function() {
			this.addCommand(TextManager.skill, "skill", true, 0);
		};
	}

	//-----------------------------------------------------------------------------
	// Window_ActorNameBox
	//アクター名を表示するためのウィンドウ

	function Window_ActorNameBox() {
		this.initialize(...arguments);
	}

	Window_ActorNameBox.prototype = Object.create(Window_NameBox.prototype);
	Window_ActorNameBox.prototype.constructor = Window_ActorNameBox;

	if (nameBoxWindow.skin) {
		Window_ActorNameBox.prototype.loadWindowskin = function() {
			this.windowskin = ImageManager.loadSystem(nameBoxWindow.skin);
		};
	}

	if (nameBoxWindow.opacity !== -1) {
		Window_ActorNameBox.prototype.updateBackOpacity = function() {
			this.backOpacity = nameBoxWindow.opacity;
		};
	}

	Window_ActorNameBox.prototype.updatePadding = function() {
		this.padding = 6;
	};

	Window_ActorNameBox.prototype.itemPadding = function() {
		return 6;
	};

	Window_ActorNameBox.prototype.fittingHeight = function(numLines) {
		return numLines * this.itemHeight() + this.padding * 2;
	};

	//-----------------------------------------------------------------------------
	// Window_BattleHelp

	Window_BattleHelp.prototype = Object.create(Window_Help.prototype);
	Window_BattleHelp.prototype.constructor = Window_BattleHelp;

	if (helpWindow.skin) {
		Window_BattleHelp.prototype.loadWindowskin = function() {
			this.windowskin = ImageManager.loadSystem(helpWindow.skin);
		};
	}

	if (helpWindow.opacity !== -1) {
		Window_BattleHelp.prototype.updateBackOpacity = function() {
			this.backOpacity = helpWindow.opacity;
		};
	}

	//-----------------------------------------------------------------------------
	// Window_BattleLog
	//メッセージウィンドウの様にメッセージ送りができるように処理を追加。
	const _Window_BattleLog_initialize = Window_BattleLog.prototype.initialize;
	Window_BattleLog.prototype.initialize = function(rect) {
		_Window_BattleLog_initialize.call(this, rect);
		this.opacity = 255;
		this._messageSpeed = _Window_BattleLog_messageSpeed.call(this);
	};

	if (logWindow.skin) {
		Window_BattleLog.prototype.loadWindowskin = function() {
			this.windowskin = ImageManager.loadSystem(logWindow.skin);
		};
	}

	if (logWindow.opacity !== -1) {
		Window_BattleLog.prototype.updateBackOpacity = function() {
			this.backOpacity = logWindow.opacity;
		};
	}

	Window_BattleLog.prototype.drawBackground = function() {};

	Window_BattleLog.prototype.maxLines = function() {
		return logWindow.maxLines;
	};

	const _Window_BattleLog_updateWaitMode = Window_BattleLog.prototype.updateWaitMode;
	Window_BattleLog.prototype.updateWaitMode = function() {
		if (this._waitMode === "input") {
			const triggered = Window_Message.prototype.isTriggered();
			if (triggered) {
				this._waitMode = "";
				if (logPlayOk) {
					SoundManager.playOk();
				}
			}
			this.pause = !triggered;
			return !triggered;
		} else {
			return _Window_BattleLog_updateWaitMode.call(this);
		}
	};

	Window_BattleLog.prototype.waitForInput = function() {
		this.setWaitMode("input");
	};

	const _Window_BattleLog_update = Window_BattleLog.prototype.update;
	Window_BattleLog.prototype.update = function() {
		if (this.active) {
			this._animationCount++;
		}
		_Window_BattleLog_update.call(this);
	};

	const _Window_BattleLog_messageSpeed = Window_BattleLog.prototype.messageSpeed;
	Window_BattleLog.prototype.messageSpeed = function() {
		return this._messageSpeed;
	};

	Window_BattleLog.prototype.setMessageSpeed = function(speed) {
		this._messageSpeed = speed;
	};

	Window_BattleLog.prototype.hideLogWindow = function() {
		BattleManager.hideLogWindow();
	};

	Window_BattleLog.prototype.displayRewards = function() {
		BattleManager.displayRewards();
		BattleManager.gainRewards();
	};

	const _Window_BattleLog_displayActionResults = Window_BattleLog.prototype.displayActionResults;
	Window_BattleLog.prototype.displayActionResults = function(subject, target) {
		_Window_BattleLog_displayActionResults.call(this, subject, target);
		BattleManager.showStatusWindow();
		BattleManager.showLogWindow();
	};

	let processAbort = false;
	const _Window_BattleLog_clear = Window_BattleLog.prototype.clear;
	Window_BattleLog.prototype.clear = function() {
		if (processAbort) return;
		_Window_BattleLog_clear.call(this);
	};

	//-----------------------------------------------------------------------------
	// Spriteset_Battle
	//アクター用コンテナの準備

	Spriteset_Battle.prototype.createActors = function() {
		this._actorSprites = [];
		this.createActorField();
		for (let i = 0; i < $gameParty.maxBattleMembers(); i++) {
			const sprite = new Sprite_ActorFV();
			this._actorSprites.push(sprite);
			this._actorField.addChild(sprite);
		}
	};

	Spriteset_Battle.prototype.createActorField = function() {
		const sprite = new Sprite();
		this._actorField = sprite;
		sprite._pseudo3dType = "excl";
		this._battleField.addChild(sprite);
	};

	Spriteset_Battle.prototype.setupActorField = function(x, y, w, h) {
		x -= this._battleField.x;
		y -= this._battleField.y;
		this._actorField.move(x, y);
		this._actorField.setFrame(0, 0, w, h);
	};
	//アニメーションを反転しない。
	Spriteset_Battle.prototype.animationShouldMirror = function(target) {
		return false;
	};

	Spriteset_Battle.prototype.animationBaseDelay = function() {
		return 0;
	};

	//-----------------------------------------------------------------------------
	// BattleManager

	const _BattleManager_initMembers = BattleManager.initMembers;
	BattleManager.initMembers = function() {
		_BattleManager_initMembers.call(this);
		this._statusWindowHidden = false;
		this._logWindowHidden = false;
		this._actorGaugeFreezed = false;
	};

	BattleManager.statusWindowHidden = function() {
		return this._statusWindowHidden;
	};

	BattleManager.logWindowHidden = function() {
		return this._logWindowHidden;
	};

	BattleManager.hideStatusWindow = function() {
		this._statusWindowHidden = true;
	};

	BattleManager.hideLogWindow = function() {
		this._logWindowHidden = true;
	};

	BattleManager.showStatusWindow = function() {
		this._statusWindowHidden = false;
	};

	BattleManager.showLogWindow = function() {
		this._logWindowHidden = false;
	};

	const _BattleManager_startAction = BattleManager.startAction;
	BattleManager.startAction = function() {
		_BattleManager_startAction.call(this);
		const meta = this._subject.currentAction().item().meta;
		if (meta["hideStatusAndLog"]) {
			this.hideStatusWindow();
			this.hideLogWindow();
		}
		if (meta["hideStatus"]) {
			this.hideStatusWindow();
		}
		if (meta["hideLog"]) {
			this.hideLogWindow();
		}
	};

	if (fesMode) {
		BattleManager.displayStartMessages = function() {
			const messageSpeed = this._logWindow.messageSpeed();
			const enemyNames = $gameTroop.enemyNames();
			if (!logSkipMode)this._logWindow.push("setMessageSpeed", 1);

			if ($gameTroop.aliveMembers().length === 1 || emergeMessageStyle === 0) {
				enemyNames.forEach((name, index) => {
					this._logWindow.push("addText", TextManager.emerge.format(name));
					this.judgementNewPage(logSkipMode);
				});
				const methods = this._logWindow._methods;
				if (methods[methods.length-1].name !== "clear" || logSkipMode) {
					this._logWindow.push("waitForInput");
					this._logWindow.push("clear");
				}
			} else if (emergeMessageStyle === 1 || enemyNames.length > 1) {
				this._logWindow.push("addText", emergeTroopMessage1);
				this._logWindow.push("waitForInput");
				this._logWindow.push("clear");
			} else {
				this._logWindow.push("addText", emergeTroopMessage2.format(enemyNames[0]));
				this._logWindow.push("waitForInput");
				this._logWindow.push("clear");
			}
				
			this._logWindow.push("setMessageSpeed", messageSpeed);
			if (this._preemptive) {;
				this._logWindow.push("addText", TextManager.preemptive.format($gameParty.name()));
				this._logWindow.push("waitForInput");
				this._logWindow.push("clear");
			} else if (this._surprise) {
				this._logWindow.push("addText", TextManager.surprise.format($gameParty.name()));
				this._logWindow.push("waitForInput");
				this._logWindow.push("clear");
			}
		};

		const _BattleManager_processVictory = BattleManager.processVictory;
		let processVictory = false;
		BattleManager.processVictory = function() {
			processVictory = true;
			const messageSpeed = this._logWindow.messageSpeed();
			this._logWindow.push("setMessageSpeed", 1);
			_BattleManager_processVictory.call(this);
			processVictory = false;
			this._logWindow.push("hideLogWindow");
			this._logWindow.push("displayRewards");
			this._logWindow.push("setMessageSpeed", messageSpeed);
		};

		const _BattleManager_displayRewards = BattleManager.displayRewards;
		BattleManager.displayRewards = function() {
			if (processVictory) return;
			BattleManager.hideStatusWindow();
			_BattleManager_displayRewards.call(this);
		};

		const _BattleManager_gainRewards = BattleManager.gainRewards;
		BattleManager.gainRewards = function() {
			if (processVictory) return;
			this._actorGaugeFreezed = true;
			_BattleManager_gainRewards.call(this);
		};

		BattleManager.logTextLength = function() {
			return this._logWindow._methods.filter(method => method.name === "addText").length;
		};

		BattleManager.judgementNewPage = function(noWait) {
			if (this.logTextLength() % this._logWindow.maxLines() === 0) {
				if (!noWait) this._logWindow.push("waitForInput");
				this._logWindow.push("clear");
			}
		};

		BattleManager.displayVictoryMessage = function() {
			this._logWindow.push("clear");
			this._logWindow.push("addText", TextManager.victory.format($gameParty.name()));
			this._logWindow.push("waitForInput");
		};

		BattleManager.displayDefeatMessage = function() {
			this._logWindow.push("clear");
			this._logWindow.push("addText", TextManager.defeat.format($gameParty.name()));
			this._logWindow.push("waitForInput");
		};

		BattleManager.displayEscapeSuccessMessage = function() {
			this._logWindow.push("clear");
			this._logWindow.push("addText", TextManager.escapeStart.format($gameParty.name()));
			this._logWindow.push("waitForInput");
		};

		BattleManager.displayEscapeFailureMessage = function() {
			this._logWindow.push("clear");
			this._logWindow.push("addText", TextManager.escapeStart.format($gameParty.name()));
			this._logWindow.push("addText", TextManager.escapeFailure);
			this._logWindow.push("waitForInput");
		};

		const _BattleManager_processAbort = BattleManager.processAbort;
		BattleManager.processAbort = function() {
			processAbort = true;
			_BattleManager_processAbort.call(this);
			processAbort = false;
		};
	} else {
		const _BattleManager_displayRewards = BattleManager.displayRewards;
		BattleManager.displayRewards = function() {
			this._actorGaugeFreezed = true;
			this.hideLogWindow();
			this.hideStatusWindow();
			_BattleManager_displayRewards.call(this);
		};
	}

	//-----------------------------------------------------------------------------
	// Game_Action

	const _Game_Action_needsSelection = Game_Action.prototype.needsSelection;
	Game_Action.prototype.needsSelection = function() {
		return _Game_Action_needsSelection.call(this) || this.isForAll() || this.needsSelectionForUser();
	};

	Game_Action.prototype.needsSelectionForUser = function() {
		const isGuard = this.isSkill() && this.subject().guardSkillId() === this.item().id;
		return (!isGuard && this.isForUser());
	};

	//-----------------------------------------------------------------------------
	// Game_Unit

	Game_Unit.prototype.selectAll = function() {
		for (const member of this.aliveMembers()) {
			member.select();
		}
	};

	//-----------------------------------------------------------------------------
	// Scene_Battle
	//主にウィンドウ配置を変更する処理

	const _Scene_Battle_initialize = Scene_Battle.prototype.initialize;
	Scene_Battle.prototype.initialize = function() {
		_Scene_Battle_initialize.call(this);
		this._statusMover = new Game_Picture();
		this._statusMover.show("", 0, statusWindow.x, 0, 100, 100, 255, 0);
	};

	const _Scene_Battle_stop = Scene_Battle.prototype.stop;
	Scene_Battle.prototype.stop = function() {
		_Scene_Battle_stop.call(this);
		this._statusWindow.open();
	};

	Scene_Battle.prototype.updateStatusWindowVisibility = function() {
		this.updateStatusWindowPosition();
	};

	Scene_Battle.prototype.updateStatusWindowPosition = function() {
		const statusWindow = this._statusWindow;
		const targetX = this.statusWindowX();
		const lastX = statusWindow.x;
		//戻る時
		if (statusWindow.x !== targetX && this._statusMover._duration === 0) {
			const easingType = BattleManager.statusWindowHidden() ? 1 : 2
			const slideDuration = this.statusWindowSlideDuration();
			this._statusMover.move(0, targetX, 0, 100, 100, 255, 0, slideDuration, easingType);
		}
		this._statusMover.updateMove();
		statusWindow.x = this._statusMover.x();
		//ステータスウィンドウとアクター領域の位置を同期
		if (lastX !== statusWindow.x) {
			const battleField = this._spriteset._battleField;
			const actorField = this._spriteset._actorField;
			actorField.x = this._windowLayer.x + statusWindow.x + statusWindow.innerRect.x - battleField.x;
		}
	};

	const slideDuration = statusWindow.slideDuration
	Scene_Battle.prototype.statusWindowSlideDuration = function() {
		const logWindow = BattleManager._logWindow;
		return logWindow.isFastForward() ? Math.floor(slideDuration/2) || 1 : slideDuration;
	};

	Scene_Battle.prototype.statusWindowX = function() {
		if (BattleManager.statusWindowHidden()) {
			return -this._statusWindow.width - Math.floor((Graphics.width - Graphics.boxWidth) / 2);
		} else {
			return statusWindow.x;
		}
	};

	Scene_Battle.prototype.updateLogWindowVisibility = function() {
		this._logWindow.visible = !BattleManager.isInputting() && !BattleManager.logWindowHidden();
	};

	const _Scene_Battle_createDisplayObjects = Scene_Battle.prototype.createDisplayObjects;
	Scene_Battle.prototype.createDisplayObjects = function() {
		_Scene_Battle_createDisplayObjects.call(this);
		this.setActorField();
	};

	Scene_Battle.prototype.setActorField = function() {
		const rect = this.statusWindowRect();
		const innerRect = this._statusWindow.innerRect;
		rect.x += this._windowLayer.x + innerRect.x;
		rect.y += this._windowLayer.y + innerRect.y;
		this._spriteset.setupActorField(rect.x, rect.y, innerRect.width, innerRect.height);
	};

	Scene_Battle.prototype.buttonAreaTop = function() {
		const skillBottom = this._skillWindow.y + this._skillWindow.height;
		const actorCommandY = this._actorCommandWindow.y;
		const wideWindows = [actorCommandWindow, partyCommandWindow, enemyWindow].filter(win => win.wide);

		let top = actorCommandY;
		if (wideWindows.length > 0) {
			const buttonHeight = this.buttonAreaHeight();
			const maxLines = Math.max(...wideWindows.map(win => win.maxLines));
			const h = this.calcWindowHeight(maxLines, true);
			const y = Graphics.boxHeight - h - buttonHeight;
			top = Math.min(top, y);
		}
		return Math.floor(top);
	};

	Scene_Battle.prototype.logWindowRect = function() {
		const numLines = logWindow.maxLines;
		const ww = Graphics.boxWidth - windowPadding;
		const wh = this.calcWindowHeight(numLines, false);
		const wx = Graphics.boxWidth - ww;
		const wy = Graphics.boxHeight - wh;
		return new Rectangle(wx, wy, ww, wh);
	};

	Scene_Battle.prototype.statusWindowRect = function() {
		const ww = statusWindow.width;
		let wh = statusWindow.height;
		if (wh < 0) {
			wh = Graphics.boxHeight;
		}
		const wx = statusWindow.x;
		const wy = Math.floor((Graphics.boxHeight - wh)/2);
		return new Rectangle(wx, wy, ww, wh);
	};

	Scene_Battle.prototype.partyCommandWindowRect = function() {
		const numLines = partyCommandWindow.maxLines;
		const multiple = partyCommandWindow.wide ? 1 : 2;
		const ww = Graphics.boxWidth - windowPadding*multiple;
		const wh = this.calcWindowHeight(numLines, true);
		const wx = windowPadding;
		const wy = Graphics.boxHeight - Math.max(wh, this.windowAreaHeight());
		return new Rectangle(wx, wy, ww, wh);
	};

	const _Scene_Battle_createActorCommandWindow = Scene_Battle.prototype.createActorCommandWindow;
	Scene_Battle.prototype.createActorCommandWindow = function() {
		this.createActorNameBoxWindow();
		_Scene_Battle_createActorCommandWindow.call(this);
		const commandWindow = this._actorCommandWindow;
		commandWindow.y = Graphics.boxHeight - this.windowAreaHeight();
		commandWindow.setNameBoxWindow(this._actorNameBoxWindow);
		this._actorNameBoxWindow.setMessageWindow(commandWindow);
	};

	Scene_Battle.prototype.createActorNameBoxWindow = function() {
		this._actorNameBoxWindow = new Window_ActorNameBox();
		this.addWindow(this._actorNameBoxWindow);
	};

	Scene_Battle.prototype.actorCommandWindowRect = function() {
		const numLines = actorCommandWindow.maxLines;
		const multiple = actorCommandWindow.wide ? 1 : 2;
		const ww = Graphics.boxWidth - windowPadding * multiple;
		const wh = this.calcWindowHeight(numLines, true);
		const wx = windowPadding;
		const wy = Graphics.boxHeight - this.windowAreaHeight();
		return new Rectangle(wx, wy, ww, wh);
	};

	Scene_Battle.prototype.createHelpWindow = function() {
		const rect = this.helpWindowRect();
		this._helpWindow = new Window_BattleHelp(rect);
		this._helpWindow.hide();
		this.addWindow(this._helpWindow);
	};

	Scene_Battle.prototype.helpWindowRect = function() {
		const wx = skillWindow.wide ? 0 : windowPadding;
		const wy = this.helpAreaTop();
		const ww = Graphics.boxWidth - wx;
		const wh = this.helpAreaHeight();
		return new Rectangle(wx, wy, ww, wh);
	};

	Scene_Battle.prototype.skillWindowRect = function() {
		const numLines = skillWindow.maxLines;
		const wx = skillWindow.wide ? 0 : windowPadding;
		const ww = Graphics.boxWidth - wx;
		const wh = this.calcWindowHeight(numLines, true);
		const wy = this.helpAreaBottom();
		return new Rectangle(wx, wy, ww, wh);
	};

	Scene_Battle.prototype.enemyWindowRect = function() {
		const numLines = enemyWindow.maxLines;
		const multiple = enemyWindow.wide ? 1 : 2;
		const ww = Graphics.boxWidth - windowPadding*multiple;
		const wx = windowPadding;
		const wh = this.calcWindowHeight(numLines, true);
		const wy = Graphics.boxHeight - wh;
		return new Rectangle(wx, wy, ww, wh);
	};

	Scene_Battle.prototype.windowAreaHeight = function() {
		return this.calcWindowHeight(actorCommandWindow.maxLines, true);
	};

	const _Scene_Battle_commandSkill = Scene_Battle.prototype.commandSkill;
	Scene_Battle.prototype.commandSkill = function() {
		_Scene_Battle_commandSkill.call(this);
		this._statusWindow.show();
		this._actorCommandWindow.show();
	};

	const _Scene_Battle_commandItem = Scene_Battle.prototype.commandItem;
	Scene_Battle.prototype.commandItem = function() {
		_Scene_Battle_commandItem.call(this);
		this._statusWindow.show();
		this._actorCommandWindow.show();
	};

	const _Scene_Battle_startActorSelection = Scene_Battle.prototype.startActorSelection;
	Scene_Battle.prototype.startActorSelection = function() {
		const action = BattleManager.inputtingAction();
		const forUser = action.needsSelectionForUser();
		this._actorWindow.setCursorFixed(forUser);
		this._actorWindow.setCursorAll(action.isForAll());
		_Scene_Battle_startActorSelection.call(this);
		if (forUser) {
			const sbj = action.subject();
			const index = $gameParty.battleMembers().findIndex(obj => obj === sbj);
			this._actorWindow.forceSelect(index);
		}
		this._itemWindow.hide();
		this._skillWindow.hide();
	};

	const _Scene_Battle_onActorOk = Scene_Battle.prototype.onActorOk;
	Scene_Battle.prototype.onActorOk = function() {
		if (this._actorWindow.cursorAll()) {
			this.hideSubInputWindows();
			this.selectNextCommand();
		} else {
			_Scene_Battle_onActorOk.call(this);
		}
	};

	const _Scene_Battle_onActorCancel = Scene_Battle.prototype.onActorCancel;
	Scene_Battle.prototype.onActorCancel = function() {
		_Scene_Battle_onActorCancel.call(this);
		if (this._enemyWindow.cursorAll()) {
			this._enemyWindow.processCancel();
		}
	};

	const _Scene_Battle_startEnemySelection = Scene_Battle.prototype.startEnemySelection;
	Scene_Battle.prototype.startEnemySelection = function() {
		const action = BattleManager.inputtingAction();
		const forAll = action.isForAll();
		this._enemyWindow.setCursorAll(forAll);
		if (forAll) {
			this._enemyWindow.x = NaN;
			this._enemyWindow.y = NaN;
		} else {
			const rect = this.enemyWindowRect();
			this._enemyWindow.x = rect.x;
			this._enemyWindow.y = rect.y;
		}
		if (action.isForEveryone()) {
			this._actorWindow.setCursorAll(true);
			this._actorWindow.show();
			this._actorWindow.activate();
		}
		_Scene_Battle_startEnemySelection.call(this);
		this._itemWindow.hide();
		this._skillWindow.hide();
		this._statusWindow.show();
		this._actorCommandWindow.hide();
	};

	const _Scene_Battle_onEnemyOk = Scene_Battle.prototype.onEnemyOk;
	Scene_Battle.prototype.onEnemyOk = function() {
		if (this._enemyWindow.cursorAll()) {
			this.hideSubInputWindows();
			this.selectNextCommand();
		} else {
			_Scene_Battle_onEnemyOk.call(this);
		}
	};

	const _Scene_Battle_onEnemyCancel = Scene_Battle.prototype.onEnemyCancel;
	Scene_Battle.prototype.onEnemyCancel = function() {
		this._actorCommandWindow.show();
		_Scene_Battle_onEnemyCancel.call(this);
	};

	const _Scene_Battle_closeCommandWindows = Scene_Battle.prototype.closeCommandWindows;
	Scene_Battle.prototype.closeCommandWindows = function() {
		_Scene_Battle_closeCommandWindows.call(this);
		this._partyCommandWindow.open();
		this._actorCommandWindow.open();
		this._partyCommandWindow.hide();
		this._actorCommandWindow.hide();
	};

	const _Scene_Battle_startPartyCommandSelection = Scene_Battle.prototype.startPartyCommandSelection;
	Scene_Battle.prototype.startPartyCommandSelection = function() {
		_Scene_Battle_startPartyCommandSelection.call(this);
		this._actorCommandWindow.open();
		this._actorCommandWindow.hide();
		this._partyCommandWindow.show();
	};

	const _Scene_Battle_startActorCommandSelection = Scene_Battle.prototype.startActorCommandSelection;
	Scene_Battle.prototype.startActorCommandSelection = function() {
		_Scene_Battle_startActorCommandSelection.call(this);
		this._partyCommandWindow.open();
		this._partyCommandWindow.hide();
	};

	//-----------------------------------------------------------------------------
	// Sprite_BattleStatusGauge

	function Sprite_BattleStatusGauge() {
		this.initialize(...arguments);
	}

	Sprite_BattleStatusGauge.prototype = Object.create(Sprite_Gauge.prototype);
	Sprite_BattleStatusGauge.prototype.constructor = Sprite_BattleStatusGauge;

	Sprite_BattleStatusGauge.prototype.initMembers = function() {
		Sprite_Gauge.prototype.initMembers.call(this);
		this._bitmapWidth = 0;
		this._homeX = 0;
		this._homeY = 0;
		this._level = 0;
		this._target = null;
	};

	Sprite_BattleStatusGauge.prototype.resize = function(width) {
		this._bitmapWidth = width;
		if (this.bitmap) {
			this.bitmap.destroy();
		}
		this.createBitmap();
		this.redraw();
	};

	Sprite_BattleStatusGauge.prototype.setHome = function(x, y) {
		this._homeX = x;
		this._homeY = y;
	};

	Sprite_BattleStatusGauge.prototype.setup = function(battler, statusType) {
		const lastBattler = this._battler;
		Sprite_Gauge.prototype.setup.call(this, battler, statusType);
		if (battler !== lastBattler) {
			this._duration = 1;
		}
		if (!this._target) {
			this._target = SceneManager._scene._spriteset._actorSprites[battler.index()];
			this._target._statusSprites.push(this);
		}
	};

	Sprite_BattleStatusGauge.prototype.update = function() {
		Sprite_Gauge.prototype.update.call(this);
		if (this._target._battler) {
			this.updateDeadly();
		}
	};

	Sprite_BattleStatusGauge.prototype.updateBitmap = function() {
		if (!BattleManager._actorGaugeFreezed) {
			Sprite_Gauge.prototype.updateBitmap.call(this);
		}
	};

	Sprite_BattleStatusGauge.prototype.smoothness = function() {
		let r = Sprite_Gauge.prototype.smoothness.call(this);
		if (this._level !== this._battler.level) {
			r = 1;
			this._level = this._battler.level;
		}
		return r;
	};

	Sprite_BattleStatusGauge.prototype.updateDeadly = function() {
		if (this._target.collapsed()) {
			this.setBlendColor([0, 0, 0, 64]);
		} else {
			this.setBlendColor([0, 0, 0, 0]);
		}
	};

	Sprite_BattleStatusGauge.prototype.bitmapWidth = function() {
		return this._bitmapWidth;
	};

	Sprite_BattleStatusGauge.prototype.bitmapHeight = function() {
		return 20;
	};

	Sprite_BattleStatusGauge.prototype.textHeight = function() {
		return 16;
	};

	Sprite_BattleStatusGauge.prototype.gaugeHeight = function() {
		return 6;
	};

	Sprite_BattleStatusGauge.prototype.gaugeX = function() {
		return 0;
	};

	Sprite_BattleStatusGauge.prototype.labelY = function() {
		return -1;
	};
	Sprite_BattleStatusGauge.prototype.labelFontSize = function() {
		return 16;
	};

	Sprite_BattleStatusGauge.prototype.valueFontSize = function() {
		return 16;
	};

	Sprite_BattleStatusGauge.prototype.drawGaugeRect = function(x, y, width, height) {
		y = this.textHeight() -2;
		Sprite_Gauge.prototype.drawGaugeRect.call(this, x, y, width, height);
	};

	//-----------------------------------------------------------------------------
	// Sprite_BattleStatusTimeGauge

	function Sprite_BattleStatusTimeGauge() {
		this.initialize(...arguments);
	}

	Sprite_BattleStatusTimeGauge.prototype = Object.create(Sprite_BattleStatusGauge.prototype);
	Sprite_BattleStatusTimeGauge.prototype.constructor = Sprite_BattleStatusTimeGauge;

	Sprite_BattleStatusTimeGauge.prototype.createBitmap = function() {
		Sprite_BattleStatusGauge.prototype.createBitmap.call(this);
		this.angle = 270;
		this.anchor.y = 1;
	};

	Sprite_BattleStatusTimeGauge.prototype.updateDeadly = function() {
		if (!this._battler.isInputting()) {
			Sprite_BattleStatusGauge.prototype.updateDeadly.call(this);
		}
	};

	Sprite_BattleStatusTimeGauge.prototype.bitmapHeight = function() {
		return Math.floor(ImageManager.iconWidth/2);
	};

	Sprite_BattleStatusTimeGauge.prototype.textHeight = function() {
		return this.gaugeHeight();
	};

	Sprite_BattleStatusTimeGauge.prototype.gaugeHeight = function() {
		return this.bitmapHeight();
	};

	Sprite_BattleStatusTimeGauge.prototype.drawGaugeRect = function(x, y, width, height) {
		Sprite_Gauge.prototype.drawGaugeRect.call(this, x, y, width, height);
	};

	//-----------------------------------------------------------------------------
	// Sprite_BattleActorIcon

	function Sprite_BattleActorIcon() {
		this.initialize(...arguments);
	}

	Sprite_BattleActorIcon.prototype = Object.create(Sprite_StateIcon.prototype);
	Sprite_BattleActorIcon.prototype.constructor = Sprite_BattleActorIcon;

	Sprite_BattleActorIcon.prototype.initMembers = function() {
		Sprite_StateIcon.prototype.initMembers.call(this);
		this._statusType = "";
		this._homeX = 0;
		this._homeY = 0;
		this._target = null;
	};

	Sprite_BattleActorIcon.prototype.setup = function(battler, statusType) {
		Sprite_StateIcon.prototype.setup.call(this, battler);
		if (!this._target) {
			this._target = SceneManager._scene._spriteset._actorSprites[battler.index()];
			this._target._statusSprites.push(this);
		}
		this._statusType = statusType;
	};

	Sprite_BattleActorIcon.prototype.setHome = function(x, y) {
		this._homeX = x;
		this._homeY = y;
	};

	Sprite_BattleActorIcon.prototype.update = function() {
		Sprite_StateIcon.prototype.update.call(this);
		if (this._target._battler) {
			this.updateDeadly();
		}
	};

	Sprite_BattleActorIcon.prototype.updateIcon = function() {
		const icons = [];
		if (this.shouldDisplay()) {
			icons.push(...this.icons());
		}
		if (icons.length > 0) {
			this._animationIndex++;
			if (this._animationIndex >= icons.length) {
				this._animationIndex = 0;
			}
			this._iconIndex = icons[this._animationIndex];
		} else {
			this._animationIndex = 0;
			this._iconIndex = emptyIconId || 0;
		}
	};

	Sprite_BattleActorIcon.prototype.icons = function() {
		switch (this._statusType) {
		case "buff":
			return this._battler.buffIcons();
		case "state":
			return this._battler.stateIcons();
		default:
			return this._battler.allIcons();
		}
	};

	Sprite_BattleActorIcon.prototype.updateDeadly = function() {
		if (this._target.collapsed()) {
			this.setBlendColor([0, 0, 0, 64]);
		} else {
			this.setBlendColor([0, 0, 0, 0]);
		}
	};

	//-----------------------------------------------------------------------------
	// Sprite_ActorFrame

	function Sprite_ActorFrame() {
		this.initialize(...arguments);
	}

	Sprite_ActorFrame.prototype = Object.create(Sprite.prototype);
	Sprite_ActorFrame.prototype.constructor = Sprite_ActorFrame;

	Sprite_ActorFrame.prototype.initialize = function() {
		Sprite.prototype.initialize.call(this);
		this.initMembers();
		this.createBitmap();
	};

	Sprite_ActorFrame.prototype.initMembers = function() {
		this._bitmapWidth = 0;
		this._bitmapHeight = 0;
		this._battler = null;
		this._target = null;
		this._homeX = 0;
		this._homeY = 0;
		this._statusType = "";
	};

	Sprite_ActorFrame.prototype.resize = function(width, height) {
		this._bitmapWidth = width;
		this._bitmapHeight = height;
		this.destroyBitmap();
		this.createBitmap();
		this.redraw();
	};

	Sprite_ActorFrame.prototype.destroy = function(options) {
		this.destroyBitmap();
		Sprite.prototype.destroy.call(this, options);
	};

	Sprite_ActorFrame.prototype.destroyBitmap = function() {
		this._statusType = "";
		if (this.bitmap) {
			this.bitmap.destroy();
		}
	};

	Sprite_ActorFrame.prototype.createBitmap = function() {
		const width = this.bitmapWidth();
		const height = this.bitmapHeight();
		this.bitmap = new Bitmap(width, height);
		this.updateBitmap();
	};

	Sprite_ActorFrame.prototype.bitmapWidth = function() {
		return this._bitmapWidth;
	};

	Sprite_ActorFrame.prototype.bitmapHeight = function() {
		return this._bitmapHeight;
	};

	Sprite_ActorFrame.prototype.frameWidth = function() {
		return 2;
	};

	Sprite_ActorFrame.prototype.setup = function(battler) {
		this._battler = battler;
		if (!this._target) {
			this._target = SceneManager._scene._spriteset._actorSprites[battler.index()];
			this._target._statusSprites.push(this);
		}
		this.createBitmap();
	};

	Sprite_ActorFrame.prototype.setHome = function(x, y) {
		this._homeX = x;
		this._homeY = y;
	};

	Sprite_ActorFrame.prototype.update = function() {
		Sprite.prototype.update.call(this);
		this.updateBitmap();
	};

	Sprite_ActorFrame.prototype.updateStatus = function() {
		this._statusType = "";
		if (this._target && this._target._battler) {
			if (this._target.collapsed()) {
				this._statusType = "dead";
			} else if (this._battler.isDying() || this._battler.isDead()) {
				this._statusType = "dying";
			} else {
				this._statusType = "normal";
			}
		}
	};

	Sprite_ActorFrame.prototype.updateBitmap = function() {
		const statusType = this._statusType;
		this.updateStatus();
		if (!BattleManager._actorGaugeFreezed && this._statusType !== statusType) {
			this.redraw();
		}
	};

	Sprite_ActorFrame.prototype.frameColor = function() {
		switch (this._statusType) {
		case "dead":
			return "rgba(0, 0, 0, 1)";
		case "dying":
			return "rgba(255, 0, 0, 1)";
		default:
			return "rgba(255, 255, 255, 1)";
		}
	};

	Sprite_ActorFrame.prototype.backgroundColor = function() {
		switch (this._statusType) {
		case "dead":
			return "rgba(0, 0, 0, 0.25)";
		case "dying":
			return "rgba(255, 255, 255, 0.25)";
		default:
			return "rgba(255, 255, 255, 0.25)";
		}
	};

	Sprite_ActorFrame.prototype.redraw = function() {
		const bitmap = this.bitmap;
		bitmap.clear();
		const c1 = this.frameColor();
		const c2 = this.backgroundColor();
		const w = this.bitmapWidth();
		const h = this.bitmapHeight();
		const frameWidth = this.frameWidth();
		bitmap.fillRect(0, 0, w, h, c1);
		bitmap.clearRect(frameWidth, frameWidth, w-frameWidth*2, h-frameWidth*2);
		bitmap.fillRect(frameWidth, frameWidth, w-frameWidth*2, h-frameWidth*2, c2);
	};

	//-----------------------------------------------------------------------------
	// Sprite_ActorBack

	function Sprite_ActorBack() {
		this.initialize(...arguments);
	}

	Sprite_ActorBack.prototype = Object.create(Sprite.prototype);
	Sprite_ActorBack.prototype.constructor = Sprite_ActorBack;

	Sprite_ActorBack.prototype.initialize = function() {
		Sprite.prototype.initialize.call(this);
		this.initMembers();
		this.createBitmap();
	};

	Sprite_ActorBack.prototype.resize = function(width, height) {
		this._bitmapWidth = width;
		this._bitmapHeight = height;
		this.destroyBitmap();
		this.createBitmap();
		this.redraw();
	};

	Sprite_ActorBack.prototype.initMembers = function() {
		this._bitmapWidth = 0;
		this._bitmapHeight = 0;
		this.resetDuration();
		this._battler = null;
		this._target = null;
		this._statusType = "";
	};

	Sprite_ActorBack.prototype.destroy = function(options) {
		this.destroyBitmap();
		Sprite.prototype.destroy.call(this, options);
	};

	Sprite_ActorBack.prototype.destroyBitmap = function() {
		this._statusType = "";
		if (this.bitmap) {
			this.bitmap.destroy();
		}
	};

	Sprite_ActorBack.prototype.createBitmap = function() {
		const width = this.bitmapWidth();
		const height = this.bitmapHeight();
		this.bitmap = new Bitmap(width, height);
		this.updateBitmap();
	};

	Sprite_ActorBack.prototype.bitmapWidth = function() {
		return this._bitmapWidth;
	};

	Sprite_ActorBack.prototype.bitmapHeight = function() {
		return this._bitmapHeight;
	};

	Sprite_ActorBack.prototype.setup = function(battler) {
		this._battler = battler;
		if (!this._target) {
			this._target = SceneManager._scene._spriteset._actorSprites[battler.index()];
		}
	};

	Sprite_ActorBack.prototype.update = function() {
		Sprite.prototype.update.call(this);
		this.updateBitmap();
		this.updateOpacity();
	};

	Sprite_ActorBack.prototype.updateStatus = function() {
		this._statusType = "";
		if (!BattleManager._actorGaugeFreezed && this._target && this._target._battler) {
			if (this.isDamaged()) {
				this._statusType = "damaged";
			} else if (this.isFocused()) {
				this._statusType = "focused";
			}
		}
	};

	Sprite_ActorBack.prototype.updateBitmap = function() {
		const statusType = this._statusType;
		this.updateStatus();
		if (this._statusType !== statusType) {
			this.redraw();
		}
	};

	const maxOpacity = 128;
	Sprite_ActorBack.prototype.updateOpacity = function() {
		switch (this._statusType) {
		case "damaged":
			this.resetDuration();
			this.opacity = maxOpacity;
			break;
		case "focused":
			this.updateDuration();
			this.opacity = this.makeOpacity();
			break;
		default:
			this.resetDuration();
			this.opacity = 0;
			break;
		}
	};

	Sprite_ActorBack.prototype.isDamaged = function() {
		return this._target._effectType === "shake" || this._target._effectType === "blink";
	};

	Sprite_ActorBack.prototype.isFocused = function() {
		return this._target.shouldStepForward();
	};

	Sprite_ActorBack.prototype.updateDuration = function() {
		this._duration--;
		if (this._duration <= 0) {
			this._duration = fadeDuration;
		}
	};

	Sprite_ActorBack.prototype.resetDuration = function() {
		this._duration = fadeDuration/2;
	};

	const fadeDuration = 82;
	Sprite_ActorBack.prototype.makeOpacity = function() {
		const duration = this._duration;
		if (duration < fadeDuration/2) {
			return maxOpacity * duration / (fadeDuration / 2);
		} else {
			return maxOpacity * (fadeDuration - duration) / (fadeDuration / 2);
		}
	};

	Sprite_ActorBack.prototype.color1 = function() {
		switch (this._statusType) {
		case "damaged":
			return "rgba(255, 120, 76, 1)";
		default:
			return "rgba(0, 244, 96, 1)";
		}
	};

	Sprite_ActorBack.prototype.color2 = function() {
		switch (this._statusType) {
		case "damaged":
			return "rgba(255, 120, 76, 0)";
		default:
			return "rgba(0, 244, 96, 0)";
		}
	};

	const gradetionWidth = statusWindow.backGradWidth;
	Sprite_ActorBack.prototype.redraw = function() {
		const bitmap = this.bitmap;
		bitmap.clear();
		const c1 = this.color1();
		const c2 = this.color2();
		const w = this.bitmapWidth();
		const h = this.bitmapHeight();
		bitmap.fillRect(0, 0, w-gradetionWidth, h, c1);
		bitmap.gradientFillRect(w-gradetionWidth, 0, gradetionWidth, h, c1, c2);
	};

}