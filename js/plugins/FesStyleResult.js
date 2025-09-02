// FesStyleResult.js Ver.3.3.3

/*:
* @target MZ
* @plugindesc RPG Maker Fes style for results and level up.
* @author あわやまたな (Awaya_Matana)
* @url https://awaya3ji.seesaa.net/article/489817314.html
* @help Ver.3.3.3
* You can scroll the window with up/down keys, mouse wheel, drag and swipe.
* If you set the message speed to 0, it will be displayed all at once,
* so it is speedy.
*
* 【Plugin Command】
* You can change the portrait and result BGM as the story progresses.
*
* @param terms
* @text Terms
* @desc Set terms.
* @type struct<terms>
* @default {"exp1":"%1 has","exp2":"%1’s Party has","statusUp":"%1 increased by %2!","victory":"You won the battle!","fontSize":"48","outlineWidth":"8","color1":"rgb(255,170,0)","color2":"rgb(255,255,255)","displayVictoryMessage":"true"}
*
* @param audio
* @text Audio
* @desc Set BGM, ME, and SE.
* @type struct<audio>
* @default {"optimizedMode":"true","resultBgm":"{\"name\":\"Ship3\",\"volume\":\"90\",\"pitch\":\"100\",\"pan\":\"0\"}","victorySe":"{\"name\":\"\",\"volume\":\"90\",\"pitch\":\"100\",\"pan\":\"0\"}","levelUpMe":"{\"name\":\"\",\"volume\":\"90\",\"pitch\":\"100\",\"pan\":\"0\"}","levelUpSe":"{\"name\":\"Flash3\",\"volume\":\"90\",\"pitch\":\"100\",\"pan\":\"0\"}","okSe":"{\"name\":\"Decision2\",\"volume\":\"90\",\"pitch\":\"100\",\"pan\":\"0\"}"}
*
* @param numLines
* @text Number of Lines
* @desc Number of rows in result window
* @default 9
* @type number
* @min 1
*
* @param messageSpeed
* @text Message Speed
* @desc The number of frames before displaying the next line.
* If set to 0, it will appear instantly.
* @default 16
* @type number
*
* @param waitDuration
* @text Wait Duration
* @desc Minimum number of frames between winning and displaying results.
* @default 0
* @type number
*
* @param waitForInput
* @text Wait For Input
* @desc Do not scroll until input.
* @default true
* @type boolean
*
* @param noRepeat
* @text No repeat on page turn
* @desc Never miss a text with a long press.
* @default true
* @type boolean
*
* @param portraitSettings
* @text Portrait Settings
* @desc Set the basic parameters for portrait display.
* @type struct<portraitSettings>
* @default {"areaWidth":"450","overhangWidth":"48","offsetX":"-48","offsetY":"174","slideDuration":"8"}
*
* @param portraits
* @text Portraits
* @desc Select a portrait to use for each actor.
* @type struct<portrait>[]
*
* @param pictureId
* @text Picture ID
* @desc Picture ID used for portrait display
* @default 1
* @type number
*
* @param windowSkin
* @text Window Skin
* @desc Specifies the file name of the result window.
* @type file
* @dir img/system
*
* @param windowOpacity
* @text Window Opacity
* @desc Specifies the opacity of the result window.
* -1 is system default.
* @default -1
* @type number
* @min -1
*
* @command changeResultBgm
* @text Change Result BGM
* @desc Change the result BGM.
*
* @arg bgm 
* @text BGM
* @type struct<bgm>
*
* @command changePortraitImage
* @text Change Portrait Image
* @desc Change portrait.
*
* @arg portrait
* @text Portrait
* @desc Leave the coordinates blank and keep the status quo
* @type struct<portrait>
* @default {"x":"","y":""}
*
*/

/*:ja
* @target MZ
* @plugindesc リザルト、レベルアップをツクールフェス風にします。
* @author あわやまたな (Awaya_Matana)
* @url https://awaya3ji.seesaa.net/article/489817314.html
* @help 勝利時、レベルアップ時に立ち絵がスライドインしてきます。
* 一応キー上下、マウスホイール、ドラッグ、スワイプでウィンドウを
* スクロールできます。
* メッセージ速度を0にすると一括表示になるのでスピーディです。
*
* 【プラグインコマンド】
* 物語の進行に合わせて立ち絵やリザルトBGMを差し替えられます。
*
* [更新履歴]
* 2022/07/16：Ver.1.0.0　公開。
* 2022/09/18：Ver.2.0.0　瞬間表示に対応。長押しによる読み逃し対策実装。パラメータ追加・変更。
* 2022/10/02：Ver.2.1.0　グラデーションの不具合を修正。グラデーション色を変更可能に。
* 2022/10/27：Ver.2.1.1　用語［経験値獲得時２］で%1でアクター名を取得可能に。
* 2023/01/13：Ver.3.0.0　ウィンドウの挙動を修正。必要ない機能を削除。
* 2023/04/09：Ver.3.1.0　立ち絵をプリロードするようにしました。
* 2023/04/12：Ver.3.2.0　マウス、タッチ操作を改善しました。
* 2023/04/13：Ver.3.2.1　長押し時の挙動を修正。
* 2023/05/06：Ver.3.2.2　立ち絵が無い時にウェイトが掛からないようにしました。
* 2023/07/07：Ver.3.2.3　レベルアップMEが無い時の挙動を修正しました。
* 2023/07/25：Ver.3.3.0　タッチ操作時の挙動修正。
* 2023/08/04：Ver.3.3.1　挙動修正。
* 2023/12/22：Ver.3.3.2　パラメータに用語［勝利メッセージ表示］を追加。
* 2024/01/28：Ver.3.3.3　パラメータ［ウェイト時間］を追加。
*
* @param terms
* @text 用語
* @desc 用語を設定します。
* @type struct<terms>
* @default {"exp1":"%1は","exp2":"それぞれ","statusUp":"%1が %2 上がった！","victory":"バトルに勝利しました！","fontSize":"48","outlineWidth":"8","color1":"rgb(255,170,0)","color2":"rgb(255,255,255)","displayVictoryMessage":"true"}
*
* @param audio
* @text オーディオ
* @desc BGMやME、SEを設定します。
* @type struct<audio>
* @default {"optimizedMode":"true","resultBgm":"{\"name\":\"Ship3\",\"volume\":\"90\",\"pitch\":\"100\",\"pan\":\"0\"}","victorySe":"{\"name\":\"\",\"volume\":\"90\",\"pitch\":\"100\",\"pan\":\"0\"}","levelUpMe":"{\"name\":\"\",\"volume\":\"90\",\"pitch\":\"100\",\"pan\":\"0\"}","levelUpSe":"{\"name\":\"Flash3\",\"volume\":\"90\",\"pitch\":\"100\",\"pan\":\"0\"}","okSe":"{\"name\":\"Decision2\",\"volume\":\"90\",\"pitch\":\"100\",\"pan\":\"0\"}"}
*
* @param numLines
* @text 行数
* @desc リザルトウィンドウの行数
* @default 9
* @type number
* @min 1
*
* @param messageSpeed
* @text メッセージスピード
* @desc 次の行を表示するまでのフレーム数。
* 0にするとウェイトせずに一瞬で全てを表示します。
* @default 16
* @type number
*
* @param waitDuration
* @text ウェイト時間
* @desc 勝利してからリザルトを表示するまでの最低フレーム数。
* @default 0
* @type number
*
* @param waitForInput
* @text 入力を待つ
* @desc 入力するまでスクロールしない。
* @default true
* @type boolean
*
* @param noRepeat
* @text ページ送り時リピートなし
* @desc 長押しでテキストを見逃さないようにします。
* @default true
* @type boolean
*
* @param portraitSettings
* @text 立ち絵表示設定
* @desc 立ち絵表示の基本となるパラメータを設定します。
* @type struct<portraitSettings>
* @default {"areaWidth":"450","overhangWidth":"48","offsetX":"-48","offsetY":"174","slideDuration":"8"}
*
* @param portraits
* @text 立ち絵
* @desc アクター毎に使用する立ち絵を選択します。
* @type struct<portrait>[]
*
* @param pictureId
* @text ピクチャID
* @desc 立ち絵表示に使うピクチャID
* @default 1
* @type number
*
* @param windowSkin
* @text ウィンドウスキン
* @desc リザルトウィンドウのファイル名を指定します。
* @type file
* @dir img/system
*
* @param windowOpacity
* @text ウィンドウ不透明度
* @desc リザルトウィンドウの不透明度を指定します。
* -1でシステムの初期値。
* @default -1
* @type number
* @min -1
*
* @command changeResultBgm
* @text リザルトBGMの変更
* @desc リザルトBGMを変更します。
*
* @arg bgm 
* @text BGM
* @type struct<bgm>
*
* @command changePortraitImage
* @text 立ち絵の変更
* @desc 立ち絵を変更します。
*
* @arg portrait
* @text 立ち絵
* @desc 座標は空欄で現状維持
* @type struct<portrait>
* @default {"x":"","y":""}
*
*/

/*~struct~audio:
*
* @param optimizedMode
* @text Optimization Mode
* @desc You can play the level-up ME without erasing the BGM, or switch from the Victory ME to the Victory BGM.
* @type boolean
* @default true
*
* @param resultBgm
* @text Result BGM
* @desc BGM that plays in the battle result
* @type struct<bgm>
*
* @param victorySe
* @text Victory Se
* @desc SE that plays when winning
* @type struct<se>
*
* @param levelUpMe
* @text Level Up ME
* @desc ME that sounds when leveling up
* @type struct<me>
*
* @param levelUpSe
* @text Level Up Se
* @desc SE that plays when leveling up
* @type struct<se>
*
* @param okSe
* @text OK SE
* @desc SE when decided
* @type struct<se>
*
*/

/*~struct~audio:ja
*
* @param optimizedMode
* @text 最適化モード
* @desc レベルアップMEをフェスと同じくBGMを消さずに演奏したり、勝利MEから勝利BGMへの移行をスムーズにします。
* @type boolean
* @default true
*
* @param resultBgm
* @text リザルトBGM
* @desc 戦闘結果で流れるBGM
* @type struct<bgm>
*
* @param victorySe
* @text 勝利SE
* @desc 勝利時に流れるSE
* @type struct<se>
*
* @param levelUpMe
* @text レベルアップME
* @desc レベルアップ時に流れるME
* @type struct<me>
*
* @param levelUpSe
* @text レベルアップSE
* @desc レベルアップ時に流れるSE
* @type struct<se>
*
* @param okSe
* @text 決定音
* @desc 決定した時のSE
* @type struct<se>
*
*/

/*~struct~bgm:
*
* @param name
* @type file
* @dir audio/bgm
*
* @param volume
* @type number
* @default 90
*
* @param pitch
* @type number
* @default 100
*
* @param pan
* @type number
* @min -100
* @default 0
*
*/

/*~struct~me:
*
* @param name
* @type file
* @dir audio/me
*
* @param volume
* @type number
* @default 90
*
* @param pitch
* @type number
* @default 100
*
* @param pan
* @type number
* @min -100
* @default 0
*
*/

/*~struct~se:
*
* @param name
* @type file
* @dir audio/se
*
* @param volume
* @type number
* @default 90
*
* @param pitch
* @type number
* @default 100
*
* @param pan
* @type number
* @min -100
* @default 0
*
*/

/*~struct~terms:
*
* @param exp1
* @text Gain EXP 1
* @desc Reid has
* earned 296 EXP!
* @default %1 has
*
* @param exp2
* @text Gain EXP 2
* @desc Reid’s Party has
* earned 296 EXP!
* @default %1’s Party has
*
* @param statusUp
* @text Status Up
* @desc Attack increased by 12!
* Defense increased by 12!
* @default %1 increased by %2!
*
* @param victory
* @text Victory
* @desc Messages displayed above the results window, separate from the log.
* @default You won the battle!
*
* @param fontSize
* @text Font Size
* @desc Victory message font size
* @default 48
* @type number
*
* @param outlineWidth
* @text Outline Width
* @desc Victory message outline width
* @default 8
* @type number
*
* @param color1
* @text Color 1
* @desc The upper color of the victory message gradient.
* If not entered, it will be white.
* @default rgb(255,170,0)
*
* @param color2
* @text Color 2
* @desc The lower color of the victory message gradient.
* If it is not entered, it will not be a gradation.
* @default rgb(255,255,255)
*
* @param displayVictoryMessage
* @text Display Victory Message
* @desc Display the victory message in the message window.
* @default true
* @type boolean
*
*/

/*~struct~terms:ja
*
* @param exp1
* @text 経験値獲得時１
* @desc フィリオは
* 296 の経験値を獲得！
* @default %1は
*
* @param exp2
* @text 経験値獲得時２
* @desc それぞれ
* 296 の経験値を獲得！
* @default それぞれ
*
* @param statusUp
* @text ステータスアップ
* @desc 攻撃力が 12 上がった！
* 防御力が 12 上がった！
* @default %1が %2 上がった！
*
* @param victory
* @text 勝利
* @desc ログとは別にリザルトウィンドウの上に表示されるメッセージです。
* @default バトルに勝利しました！
*
* @param fontSize
* @text フォントサイズ
* @desc 勝利のフォントサイズ
* @default 48
* @type number
*
* @param outlineWidth
* @text アウトライン幅
* @desc 勝利のアウトライン幅
* @default 8
* @type number
*
* @param color1
* @text 色１
* @desc 勝利のグラデーションの上の色。
* 未記入だと白になります。
* @default rgb(255,170,0)
*
* @param color2
* @text 色２
* @desc 勝利のグラデーションの下の色
* 未記入だとグラデーションにしません。
* @default rgb(255,255,255)
*
* @param displayVictoryMessage
* @text 勝利メッセージ表示
* @desc メッセージウィンドウに勝利メッセージを表示します。
* @default true
* @type boolean
*
*/

/*~struct~portrait:
*
* @param actorId
* @text Actor
* @desc Select an actor.
* @type actor
*
* @param filename
* @text Portrait
* @desc Select a portrait to use for each actor.
* @type file
* @dir img/pictures
*
* @param x
* @text X
* @type number
* @default 0
* @min -99999
*
* @param y
* @text Y
* @type number
* @default 0
* @min -99999
*
*/

/*~struct~portrait:ja
*
* @param actorId
* @text アクター
* @desc アクターを選択します。
* @type actor
*
* @param filename
* @text 立ち絵
* @desc アクター毎に使用する立ち絵を選択します。
* @type file
* @dir img/pictures
*
* @param x
* @text X座標
* @type number
* @default 0
* @min -99999
*
* @param y
* @text Y座標
* @type number
* @default 0
* @min -99999
*
*/

/*~struct~portraitSettings:
*
* @param areaWidth
* @text Width of Portrait Display Area
* @desc Affects the width of the result window.
* The default setting is for RPG Maker Fes portraits.
* @default 450
* @type number
*
* @param overhangWidth
* @text Window Overhang Width
* @desc How much to overlap the window and portrait area.
* The default setting is for RPG Maker Fes portraits.
* @default 48
* @type number
*
* @param offsetX
* @text Portrait Offset X
* @desc The distance to offset the portrait from the left edge of the screen.
* @default -48
* @type number
* @min -99999
*
* @param offsetY
* @text Portrait Offset Y
* @desc How much to offset the portrait from the top of the screen.
* @default 174
* @type number
* @min -99999
*
* @param slideDuration
* @text Slide Duration
* @desc Number of slide-in/slide-out frames
* @default 8
* @type number
* @min 1
*
*/

/*~struct~portraitSettings:ja
*
* @param areaWidth
* @text 立ち絵表示領域の幅
* @desc リザルトウィンドウの幅に影響を及ぼします。
* 初期設定はフェスの立ち絵用。
* @default 450
* @type number
*
* @param overhangWidth
* @text ウィンドウはみ出し幅
* @desc ウィンドウと立ち絵領域をどれくらい重ねるか。
* 初期設定はフェスの立ち絵用。
* @default 48
* @type number
*
* @param offsetX
* @text 立ち絵オフセットX
* @desc 立ち絵を画面の左端からどれくらいずらすか。
* @default -48
* @type number
* @min -99999
*
* @param offsetY
* @text 立ち絵オフセットY
* @desc 立ち絵を画面の上端からどれくらいずらすか。
* @default 174
* @type number
* @min -99999
*
* @param slideDuration
* @text スライド時間
* @desc スライドイン・アウトする時のフレーム数
* @default 8
* @type number
* @min 1
*
*/

'use strict';

{
	//プラグイン名取得。
	const script = document.currentScript;
	const pluginName = document.currentScript.src.match(/^.*\/(.*).js$/)[1];
	const hasPluginCommonBase = typeof PluginManagerEx === "function";
	const fesStyleBattle = $plugins.some(plugin => Utils.extractFileName(plugin.name) === "FesStyleBattle" && plugin.status);

	const parameters = PluginManager.parameters(pluginName);

	const analyzeAudio = parameter => {
		const params = JSON.parse(parameter || "{}");
		for (const param in params) {
			if (param !== "name") {
				params[param] = parseInt(params[param]);
			}
		}
		return params;
	};

	const analyzePortraits = param => {
		if (!param) return [];
		const arrPorts = JSON.parse(param).map(JSON.parse);
		const portraits = [];
		arrPorts.forEach(data => portraits[Number(data.actorId)] = analyzePortrait(data));
		return portraits;
	};

	const analyzePortrait = data => ({ "filename": data.filename, "x": Number(data.x), "y": Number(data.y) });

	const audioParams = JSON.parse(parameters["audio"] || "{}");
	const portSetParams = JSON.parse(parameters["portraitSettings"]);

	const optimizedMode = audioParams["optimizedMode"] === "true";
	const resultBgm = analyzeAudio(audioParams["resultBgm"]);
	const levelUpMe = analyzeAudio(audioParams["levelUpMe"]);
	const levelUpSe = analyzeAudio(audioParams["levelUpSe"]);
	const victorySe = analyzeAudio(audioParams["victorySe"]);
	const okSe = analyzeAudio(audioParams["okSe"]);
	const terms = JSON.parse(parameters["terms"]);
	terms.fontSize = Number(terms.fontSize);
	terms.outlineWidth = Number(terms.outlineWidth);
	terms.color1 = terms.color1 || "white";
	terms.color2 = terms.color2 || terms.color1;
	terms.displayVictoryMessage = terms.displayVictoryMessage !== "false";
	const numLines = Number(parameters["numLines"]);
	const messageSpeed = Number(parameters["messageSpeed"]);
	const waitForInput = parameters["waitForInput"] === "true";
	const noRepeat = parameters["noRepeat"] === "true";
	const pictureId = Number(parameters["pictureId"]);
	const windowSkin = parameters["windowSkin"];
	const windowOpacity = Number(parameters["windowOpacity"]);
	const waitDuration =  Number(parameters["waitDuration"] || 0);

	const portraitAreaWidth = Number(portSetParams["areaWidth"]);
	const portraitOffsetX = Number(portSetParams["offsetX"]);
	const portraitOffsetY = Number(portSetParams["offsetY"]);
	const resultLetterBox = portSetParams["letterBox"] === "true";
	const overhangWidth = Number(portSetParams["overhangWidth"]);
	const slideDuration = Number(portSetParams["slideDuration"]);

	const portraits = analyzePortraits(parameters["portraits"]);

	PluginManager.registerCommand(pluginName, "changePortraitImage", function(args) {
		const data = JSON.parse(args.portrait);
		const actor = $gameActors.actor(Number(data.actorId));
		const lastValue = actor.resultPortrait();
		if (data.x === "") {
			data.x = lastValue ? lastValue.x : 0;
		}
		if (data.y === "") {
			data.y = lastValue ? lastValue.y : 0;
		}
		const value = analyzePortrait(data);
		actor.setResultPortrait(value);
	});

	PluginManager.registerCommand(pluginName, "changeResultBgm", function(args) {
		const value = analyzeAudio(args.bgm);
		$gameSystem.setResultBgm(value);
	});

	//-----------------------------------------------------------------------------
	// Bitmap

	Bitmap.prototype.drawFesVictoryText = function(text, x, y, maxWidth, lineHeight, align) {
		const context = this.context;
		const alpha = context.globalAlpha;
		maxWidth = maxWidth || 0xffffffff;
		let tx = x;
		let ty = Math.round(y + lineHeight / 2 + this.fontSize * 0.35);
		if (align === "center") {
			tx += maxWidth / 2;
		}
		if (align === "right") {
			tx += maxWidth;
		}
		const y1 = y + (lineHeight-this.fontSize) / 2;
		const grad = context.createLinearGradient(0, y1, 0, y1 + this.fontSize);
		grad.addColorStop(0, terms.color1);
		grad.addColorStop(1, terms.color2);
		context.save();
		context.font = this._makeFontNameText();
		context.textAlign = align;
		context.textBaseline = "alphabetic";
		context.globalAlpha = 1;
		this._drawTextOutline(text, tx, ty, maxWidth);
		context.globalAlpha = alpha;
		this._drawFesVictoryTextBody(text, tx, ty, maxWidth, grad);
		context.restore();
		this._baseTexture.update();
	};

	Bitmap.prototype._drawFesVictoryTextBody = function(text, tx, ty, maxWidth, grad) {
		const context = this.context;
		context.fillStyle = grad;
		context.fillText(text, tx, ty, maxWidth);
	};

	//-----------------------------------------------------------------------------
	// Game_System

	const _Game_System_initialize = Game_System.prototype.initialize;
	Game_System.prototype.initialize = function() {
		_Game_System_initialize.call(this);
		this._resultBgm = null;
	};

	Game_System.prototype.resultBgm = function() {
		return this._resultBgm || resultBgm;
	};

	Game_System.prototype.setResultBgm = function(value) {
		this._resultBgm = value;
	};

	//-----------------------------------------------------------------------------
	// Game_Battler

	Game_Battler.prototype.resultPortrait = function() {
		return null;
	};

	//-----------------------------------------------------------------------------
	// Game_Actor

	const _Game_Actor_initMembers = Game_Actor.prototype.initMembers;
	Game_Actor.prototype.initMembers = function() {
		_Game_Actor_initMembers.call(this);
		this._resultPortrait = null;
	};

	Game_Actor.prototype.resultPortrait = function() {
		return this._resultPortrait || portraits[this.actorId()] || null;
	};

	Game_Actor.prototype.setResultPortrait = function(value) {
		this._resultPortrait = value;
	};

	//-----------------------------------------------------------------------------
	// AudioManager

	AudioManager.playFesBgm = function(bgm, pos) {
		if (this.isCurrentBgm(bgm)) {
			this.updateBgmParameters(bgm);
		} else {
			this.stopBgm();
			if (bgm.name) {
				this.fadeOutMe(1);
				this._bgmBuffer = this.createBuffer("bgm/", bgm.name);
				this.updateBgmParameters(bgm);
				this._bgmBuffer.play(true, pos || 0);
			}
		}
		this.updateCurrentBgm(bgm, pos);
	};

	AudioManager.playFesMe = function(me) {
		if (me.name) {
			this.stopMe();
			this._meBuffer = this.createBuffer("me/", me.name);
			this.updateMeParameters(me);
			this._meBuffer.play(false);
			this._meBuffer.addStopListener(this.stopMe.bind(this));
		}
	};

	//-----------------------------------------------------------------------------
	// Scene_Message

	const _Scene_Message_createAllWindows = Scene_Message.prototype.createAllWindows;
	Scene_Message.prototype.createAllWindows = function() {
		_Scene_Message_createAllWindows.call(this);
		this.createLevelUpWindow();
	};

	Scene_Message.prototype.createLevelUpWindow = function() {
		const rect = this.levelUpWindowRect();
		this._fesResultWindow = new Window_Result(rect);
		this.addWindow(this._fesResultWindow);
		this._fesResultWindow.setSpriteset(this._spriteset);
	};

	Scene_Message.prototype.levelUpWindowRect = function() {
		const portWidth = portraitAreaWidth;
		const pad = (Graphics.width - Graphics.boxWidth) / 2;
		const ww = Graphics.boxWidth - portWidth + pad + overhangWidth - portraitOffsetX;
		const wh = this.calcWindowHeight(numLines, false);
		const wx = Graphics.boxWidth - ww;
		const wy = (Graphics.boxHeight - wh) / 2;
		return new Rectangle(wx, wy, ww, wh);
	};

	//-----------------------------------------------------------------------------
	// Spriteset_Battle

	const _Spriteset_Battle_createUpperLayer = Spriteset_Battle.prototype.createUpperLayer;
	Spriteset_Battle.prototype.createUpperLayer = function() {
		_Spriteset_Battle_createUpperLayer.call(this);
		this.createFesResult();
	};

	Spriteset_Battle.prototype.createFesResult = function() {
		if (terms.victory) {
			this._fesVictory = new Sprite_Victory();
			this.addChild(this._fesVictory);
		}
	};

	//-----------------------------------------------------------------------------
	// Sprite_Victory

	function Sprite_Victory() {
		this.initialize(...arguments);
	}

	Sprite_Victory.prototype = Object.create(Sprite.prototype);
	Sprite_Victory.prototype.constructor = Sprite_Victory;

	Sprite_Victory.prototype.initialize = function() {
		Sprite.prototype.initialize.call(this);
		this._frameCount = 0;
		this._phase = "fadeIn";
		this._duration = 0;
		this.createBitmap();
		this.updateBitmap();
		this.updatePosition();
		this.updateVisibility();
		this.opacity = 0;
	};

	Sprite_Victory.prototype.destroy = function(options) {
		this.bitmap.destroy();
		Sprite.prototype.destroy.call(this, options);
	};

	Sprite_Victory.prototype.createBitmap = function() {
		this.bitmap = new Bitmap(this.bitmapWidth(), this.bitmapHeight());
		this.bitmap.fontFace = this.fontFace();
		this.bitmap.fontSize = this.fontSize();
		this.bitmap.outlineColor = "rgba(0, 0, 0, 1)";
		this.bitmap.outlineWidth = this.outlineWidth();
	};

	Sprite_Victory.prototype.fontFace = function() {
		return $gameSystem.mainFontFace();
	};

	Sprite_Victory.prototype.fontSize = function() {
		return terms.fontSize;
	};

	Sprite_Victory.prototype.outlineWidth = function() {
		return terms.outlineWidth;
	};

	Sprite_Victory.prototype.bitmapWidth = function() {
		return Graphics.width;
	};

	Sprite_Victory.prototype.bitmapHeight = function() {
		const rect = Scene_Message.prototype.levelUpWindowRect();
		rect.y += (Graphics.height - Graphics.boxHeight) /2;
		return rect.y;
	};

	Sprite_Victory.prototype.update = function() {
		Sprite.prototype.update.call(this);
		this.updateOpacity();
	};

	Sprite_Victory.prototype.updateBitmap = function() {
		const text = this.text();
		const width = this.bitmap.width;
		const height = this.bitmap.height;
		this.bitmap.clear();
		this.bitmap.drawFesVictoryText(text, 0, 0, width, height, "center");
	};

	Sprite_Victory.prototype.text = function() {
		return terms.victory;
	};

	Sprite_Victory.prototype.updatePosition = function() {
		this.x = 0;
		this.y = 0;
	};

	Sprite_Victory.prototype.updateVisibility = function() {
		this.visible = false;
	};

	Sprite_Victory.prototype.updateOpacity = function() {
		if (this.visible) {
			this.updateDuration();
			this.opacity = this.makeOpacity();
		}
	};

	Sprite_Victory.prototype.updateDuration = function() {
		this._duration--;
		if (this._duration <= 0) {
			let duration = 0;
			let phase = "";
			switch (this._phase) {
			case "wait":
				phase = "fadeOut";
				duration = this.fadeDuration();
				break;
			case "fadeOut":
				phase = "fadeIn";
				duration = this.fadeDuration();
				break;
			case "fadeIn":
				phase = "wait";
				duration = this.waitDuration();
				break;
			}
			this._duration = duration;
			this._phase = phase;
		}
	};

	Sprite_Victory.prototype.makeOpacity = function() {
		const duration = this._duration;
		let opacity = 255;
		switch (this._phase) {
		case "fadeOut":
			opacity = 255 * duration / this.fadeDuration();
			break;
		case "fadeIn":
			opacity = 255 - (255 * duration / this.fadeDuration());
			break;
		}
		return opacity;
	};

	Sprite_Victory.prototype.fadeDuration = function() {
		return 41;
	};

	Sprite_Victory.prototype.waitDuration = function() {
		return 72;
	};

	//-----------------------------------------------------------------------------
	// Game_Message

	const _Game_Message_clear = Game_Message.prototype.clear;
	Game_Message.prototype.clear = function() {
		_Game_Message_clear.call(this);
		this._resultMode = false;
	};

	Game_Message.prototype.resultMode = function() {
		return this._resultMode;
	};

	Game_Message.prototype.setResult = function() {
		this._resultMode = true;
	};

	const _Game_Message_isBusy = Game_Message.prototype.isBusy;
	Game_Message.prototype.isBusy = function() {
		return this.resultMode() || _Game_Message_isBusy.call(this);
	};

	//-----------------------------------------------------------------------------
	// Window_Result

	function Window_Result() {
		this.initialize(...arguments);
	}

	Window_Result.prototype = Object.create(Window_Scrollable.prototype);
	Window_Result.prototype.constructor = Window_Result;

	Window_Result.prototype.initialize = function(rect) {
		Window_Scrollable.prototype.initialize.call(this, rect);
		this.cursorVisible = false;
		this._actor = null;
		this._allText = "";
		this._needsScroll = false;
		this._lines = [];
		this._methods = [];
		this._waitCount = 0;
		this._waitMode = "";
		this._baseLineStack = [];
		this._spriteset = null;
		this.refresh();
		this.openness = 0;
		this._loadCount = "";
		this._numLoadListeners = 0;
		this._inputForNext = false;
		this.openness = 255;
		this.hide();
		this.createOkButton();
	};

	Window_Result.prototype.createOkButton = function() {
		this._okButton = new Sprite_Button("ok");
		this._okButton.visible = false;
		this.addChild(this._okButton);
	};

	Window_Result.prototype.setSpriteset = function(spriteset) {
		this._spriteset = spriteset;
	};

	Window_Result.prototype.updateArrows = function() {
		Window_Scrollable.prototype.updateArrows.call(this);
		if (!this.isScrollEnabled()) {
			this.downArrowVisible = this.upArrowVisible = false;
		}
	};

	Window_Result.prototype.isScrollEnabled = function() {
		return this._inputForNext;
	};

	if (windowSkin) {
		Window_Result.prototype.loadWindowskin = function() {
			this.windowskin = ImageManager.loadSystem(windowSkin);
		};
	}

	if (windowOpacity > -1) {
		Window_Result.prototype.updateBackOpacity = function() {
			this.backOpacity = windowOpacity;
		};
	}

	Window_Result.prototype.setSpriteset = function(spriteset) {
		this._spriteset = spriteset;
	};

	Window_Result.prototype.maxLines = function() {
		return this.numLines();
	};

	Window_Result.prototype.numLines = function() {
		return this._lines.length;
	};

	Window_Result.prototype.messageSpeed = function() {
		return messageSpeed;
	};

	Window_Result.prototype.isBusy = function() {
		return this._waitCount > 0 || this._waitMode || this._methods.length > 0;
	};

	Window_Result.prototype.update = function() {
		Window_Scrollable.prototype.update.call(this);
		while (!this.updateWait() && this._methods.length > 0) {
			this.callNextMethod();
		}
		this.processButtonScroll();
		this.updateOkButton();
	};

	Window_Result.prototype.processButtonScroll = function() {
		if (this.isScrollEnabled() && this._scrollDuration === 0) {
			if (Input.isPressed("down")) {
				this.smoothScrollDown(1);
			}
			if (Input.isPressed("up")) {
				this.smoothScrollUp(1);
			}
		}
	};

	Window_Result.prototype.updateOkButton = function() {
		if (this._okButton) {
			this._okButton.visible = this.isScrollEnabled();
		}
	};

	Window_Result.prototype.updateWait = function() {
		return this.updateWaitCount() || _Game_Message_isBusy.call($gameMessage) || this.updateWaitMode();
	};

	Window_Result.prototype.updateWaitCount = function() {
		if (this._waitCount > 0) {
			this._waitCount -= this.isFastForward() ? 3 : 1;
			if (this._waitCount < 0) {
				this._waitCount = 0;
			}
			return true;
		}
		return false;
	};

	Window_Result.prototype.isTriggered = function() {
		let triggered = false;
		if (noRepeat && this._inputForNext) {
			triggered = Input.isTriggered("ok") || Input.isTriggered("cancel");
		} else {
			triggered = Input.isRepeated("ok") || Input.isRepeated("cancel");
		}
		if (triggered) {
			this._lastRepeated = false;
		}
		return triggered || this.isTouchTriggered();
	};

	Window_Result.prototype.isTouchTriggered = function() {
		const isScrollEnabled = this.isScrollEnabled();
		const repeated = !isScrollEnabled && TouchInput.isRepeated();
		let triggered = isScrollEnabled && TouchInput.isClicked();

		if (isScrollEnabled && this._lastRepeated && !TouchInput.isPressed()) {
			triggered = false;
			this._lastRepeated = false;
		}
		if (!isScrollEnabled) {
			this._lastRepeated = repeated;
		}
		return triggered || repeated;
	};

	Window_Result.prototype.updateWaitMode = function() {
		let waiting = false;
		switch (this._waitMode) {
			case "input":
				waiting = !this.isTriggered();
				if (!waiting) {
					if (okSe) {
						AudioManager.playSe(okSe);
					}
					this._inputForNext = false;
				}
				if (!this._inputForNext) {
					this.pause = waiting;
				}
				break;
			case "effect":
				waiting = this._spriteset.isEffecting();
				break;
			case "scroll":
				waiting = !!this._scrollDuration;
				break;
			case "movement":
				waiting = this._spriteset.isAnyoneMoving();
				break;
			case "statusMovement":
				waiting = SceneManager._scene.statusWindowX() !== SceneManager._scene._statusWindow.x;
				break;
			case "messageMovement":
				waiting = SceneManager._scene.isMessageWindowClosing();
				break;
			case "loadBitmap":
				waiting = this.bitmapLoading();
				break;
		}
		if (!waiting) {
			this._waitMode = "";
		}
		return waiting;
	};

	Window_Result.prototype.setWaitMode = function(waitMode) {
		this._waitMode = waitMode;
	};

	Window_Result.prototype.callNextMethod = function() {
		if (this._methods.length > 0) {
			const method = this._methods.shift();
			if (method.name && this[method.name]) {
				this[method.name].apply(this, method.params);
			} else {
				throw new Error("Method not found: " + method.name);
			}
		}
	};

	Window_Result.prototype.nextMethodName = function() {
		const method = this._methods[0];
		if (method) {
			return method.name || "";
		}
		return "";
	};

	Window_Result.prototype.isFastForward = function() {
		return (
			Input.isLongPressed("ok") ||
			Input.isPressed("shift") ||
			TouchInput.isLongPressed()
		);
	};

	Window_Result.prototype.push = function(methodName) {
		const methodArgs = Array.prototype.slice.call(arguments, 1);
		this._methods.push({ name: methodName, params: methodArgs });
	};

	Window_Result.prototype.clear = function() {
		this._lines = [];
		this._baseLineStack = [];
		this.refresh();
		this.scrollTo(0,0);
	};

	Window_Result.prototype.wait = function() {
		this._waitCount = this.messageSpeed();
	};

	Window_Result.prototype.setWait = function(duration) {
		this._waitCount = duration;
	};

	Window_Result.prototype.waitForEffect = function() {
		this.setWaitMode("effect");
	};

	Window_Result.prototype.waitForMovement = function() {
		this.setWaitMode("movement");
	};

	Window_Result.prototype.waitForStatusMovement = function() {
		this.setWaitMode("statusMovement");
	};

	Window_Result.prototype.waitForMessageMovement = function() {
		this.setWaitMode("messageMovement");
	};

	Window_Result.prototype.waitForInput = function(next = false) {
		this.setWaitMode("input");
		this._inputForNext = next;
	};

	Window_Result.prototype.waitForScroll = function() {
		this.setWaitMode("scroll");
	};

	Window_Result.prototype.waitForLoad = function() {
		this.setWaitMode("loadBitmap");
	};

	Window_Result.prototype.addText = function(text, align) {
		const data = { "type": "text", "text": text, "align": align };
		this._lines.push(data);
		this.refresh();
		this.waitForNextLine();
	};

	Window_Result.prototype.addTextEx = function(text, align) {
		const data = { "type": "textEx", "text": text, "align": align };
		this._lines.push(data);
		this.refresh();
		this.waitForNextLine();
	};

	Window_Result.prototype.addDropItem = function(item, num) {
		const data = { "type": "dropItem", "item": item, "num": num };
		this._lines.push(data);
		this.refresh();
		this.waitForNextLine();
	};

	Window_Result.prototype.waitForNextLine = function() {
		if (this._lines.length < numLines) {
			const nextMethodName = this.nextMethodName();
			if (!["waitForInput", "wait"].includes(nextMethodName)) {
				this.wait();
			}
		}
	};

	Window_Result.prototype.pushBaseLine = function() {
		this._baseLineStack.push(this._lines.length);
	};

	Window_Result.prototype.popBaseLine = function() {
		const baseLine = this._baseLineStack.pop();
		while (this._lines.length > baseLine) {
			this._lines.pop();
		}
	};

	Window_Result.prototype.waitForNewLine = function() {
		let baseLine = 0;
		if (this._baseLineStack.length > 0) {
			baseLine = this._baseLineStack[this._baseLineStack.length - 1];
		}
		if (this._lines.length > baseLine) {
			this.wait();
		}
	};

	const playBgm = optimizedMode ? "playFesBgm" : "playBgm";
	Window_Result.prototype.playBgm = function(param) {
		if (param) {
			AudioManager[playBgm](param);
		}
	};

	const playMe = optimizedMode ? "playFesMe" : "playMe";
	Window_Result.prototype.playMe = function(param) {
		if (param) {
			AudioManager[playMe](param);
		}
	};

	Window_Result.prototype.playSe = function(param) {
		if (param) {
			AudioManager.playSe(param);
		}
	};

	Window_Result.prototype.overallHeight = function() {
		return this.numLines() * this.itemHeight();
	};

	Window_Result.prototype.showVictory = function() {
		this._spriteset._fesVictory.visible = true;
	};

	Window_Result.prototype.hideVictory = function() {
		this._spriteset._fesVictory.visible = false;
	};

	Window_Result.prototype.start = function() {
		this.placeOkButton();
		this.waitForMessageMovement();
		this._lastRepeated = noRepeat;
	};

	Window_Result.prototype.placeOkButton = function() {
		if (this._okButton) {
			const spacing = 2;
			const button = this._okButton;
			button.y = this.height + spacing;
			button.x = this.width - button.width - spacing;
		}
	};

	Window_Result.prototype.end = function() {
		if (!this.isBusy()) {
			if (BattleManager._phase === "battleEnd") {
				this._inputForNext = true;
				$gameMessage.clear();
			} else {
				this.push("slideOutPortrait");
				this.push("terminateResult");
			}
		}
	};

	Window_Result.prototype.terminateResult = function() {
		this.hide();
		$gameMessage.clear();
		this.clear();
		$gameScreen.erasePicture(pictureId);
	};

	Window_Result.prototype.lineRect = function(index) {
		const itemHeight = this.itemHeight();
		const padding = this.itemPadding();
		const x = padding;
		const y = index * itemHeight - this.scrollBaseY();
		const width = this.innerWidth - padding * 2;
		const height = itemHeight;
		return new Rectangle(x, y, width, height);
	};

	Window_Result.prototype.topRow = function() {
		return Math.floor(this.scrollY() / this.itemHeight());
	};

	Window_Result.prototype.topIndex = function() {
		return this.topRow();
	};

	Window_Result.prototype.refresh = function() {
		this.contents.clear();
		this.drawAllLines();
	};

	Window_Result.prototype.drawAllLines = function() {
		const topIndex = this.topIndex();
		for (let i = 0; i < this.maxVisibleItems(); i++) {
			const index = topIndex + i;
			if (index < this.maxLines()) {
				this.drawLineText(index);
			}
		}
	};

	Window_Result.prototype.drawLineText = function(index) {
		const rect = this.lineRect(index);
		this.contents.clearRect(rect.x, rect.y, rect.width, rect.height);
		const data = this._lines[index];
		if (data.type === "textEx") {
			const textWidth = this.textSizeEx(data.text).width;
			switch (data.align) {
			case "right":
				this.drawTextEx(data.text, rect.x + rect.width - textWidth, rect.y, textWidth);
				break;
			case "center":
				this.drawTextEx(data.text, rect.x + (rect.width - textWidth) / 2, rect.y, textWidth);
				break;
			default:
				this.drawTextEx(data.text, rect.x, rect.y, rect.width);
				break;
			}
		} else if (data.type === "text") {
			this.drawText(data.text, rect.x, rect.y, rect.width, data.align);
		} else if (data.type === "dropItem") {
			this.drawDropItem(index);
		}
	};

	Window_Result.prototype.drawDropItem = function(index) {
		const rect = this.lineRect(index);
		const data = this._lines[index];
		const item = data.item;
		const num = data.num;
		const numberWidth = this.numberWidth(rect.width);
		const nameWidth = rect.width - numberWidth;
		this.drawItemName(item, rect.x, rect.y, nameWidth);
		this.drawItemNumber(num, rect.x + nameWidth, rect.y, numberWidth);
	};

	Window_Result.prototype.drawItemNumber = function(num, x, y, width) {
		this.drawText(`✕${num}`.padEnd(3, " "), x, y, width);
	};

	Window_Result.prototype.numberWidth = function(width) {
		return Math.floor(width/4);
	};

	Window_Result.prototype.paint = function() {
		this.refresh();
	};

	Window_Result.prototype.maxVisibleItems = function() {
		const visibleRows = Math.ceil(this.contentsHeight() / this.itemHeight());
		return visibleRows;
	};

	Window_Result.prototype.contentsHeight = function() {
		return this.innerHeight + this.itemHeight();
	};

	Window_Result.prototype.portrait = function(actor) {
		return actor.resultPortrait();
	};

	Window_Result.prototype.fileName = function(actor) {
		const data = this.portrait(actor);
		return data && data.filename || "";
	};

	Window_Result.prototype.setActor = function(actor) {
		this._actor = actor;
	};

	Window_Result.prototype.actor = function() {
		return this._actor;
	};

	Window_Result.prototype.slideInPortrait = function(actor) {
		const pic = $gameScreen.picture(pictureId);
		if (!pic || this.actor() !== actor) {
			const filename = this.fileName(actor);
			if (!filename) {
				$gameScreen.erasePicture(pictureId);
				return;
			}
			const x = this.portraitX(actor);
			const y = this.portraitY(actor);
			const bitmap = ImageManager.loadPicture(filename);
			const duration = slideDuration;
			$gameScreen.showPicture(pictureId, filename, 0, -bitmap.width, y, 100, 100, 255, 0);
			const pic = $gameScreen.picture(pictureId);
			this.movePortrait(x, pic.y(), duration);
			this.setWait(duration);
		}
	};

	Window_Result.prototype.portraitX = function(actor) {
		const data = this.portrait(actor);
		const x = data ? data.x : 0;
		return x + portraitOffsetX;
	};

	Window_Result.prototype.portraitY = function(actor) {
		const data = this.portrait(actor);
		const y = data ? data.y : 0;
		return y + portraitOffsetY;
	};

	Window_Result.prototype.slideOutPortrait = function(actor) {
		const pic = $gameScreen.picture(pictureId);
		if (pic && this.actor() !== actor) {
			const filename = pic.name();
			const bitmap = ImageManager.loadPicture(filename);
			const duration = slideDuration;
			this.movePortrait(-bitmap.width, pic.y(), duration);
			this.setWait(duration);
		}
	};

	Window_Result.prototype.forceSlideOutPortrait = function() {
		const pic = $gameScreen.picture(pictureId);
		if (pic) {
			const filename = pic.name();
			const bitmap = ImageManager.loadPicture(filename);
			const duration = slideDuration;
			this.movePortrait(-bitmap.width, pic.y(), duration);
			this.setWait(duration);
		}
	};

	Window_Result.prototype.movePortrait = function(x, y, duration) {
		const pic = $gameScreen.picture(pictureId);
		$gameScreen.movePicture(pictureId, pic.origin(), x, y, pic.scaleX(), pic.scaleY(), pic.opacity(), pic.blendMode(), duration, 2);
	};

	Window_Result.prototype.setPicture = function(actor) {
		const filename = this.fileName(actor);
		this._numLoadListeners++;
		const bitmap = ImageManager.loadPicture(filename);
		bitmap.addLoadListener(this.bitmapLoaded.bind(this));
		bitmap.addLoadListener(this.slideInPortrait.bind(this, actor));
		bitmap.addLoadListener(this.setActor.bind(this, actor));
		this.waitForLoad();
	};

	Window_Result.prototype.bitmapLoaded = function() {
		this._numLoadListeners--;
	};

	Window_Result.prototype.bitmapLoading = function() {
		return this._numLoadListeners > 0;
	};

	Window_Result.prototype.createResultMethods = function(actor, data, type = "") {
		const showFast = messageSpeed === 0;
		this.push("start");
		if (type === "exp" && $gameSystem.resultBgm()) {
			this.push("playBgm", $gameSystem.resultBgm());
		}
		const filename = this.fileName(actor);
		ImageManager.loadPicture(filename);
		this.push("slideOutPortrait", actor);
		this.push("setPicture", actor);
		this.push("show");
		if (type === "levelUp") {
			if (levelUpMe && levelUpMe.name) {
				this.push("playMe", levelUpMe);
			}
			if (levelUpSe && levelUpSe.name) {
				this.push("playSe", levelUpSe);
			}
		}
		this.push("clear");
		const maxLines = this.maxVisibleItems();
		data.forEach((data, index) => {
			const line = index + 1;
			if (!showFast && line > maxLines) {
				this.pushScroll();
			}
			if (type === "dropItem") {
				if ("text" in data) {
					this.push("addTextEx", data.text, "right");
				} else {
					this.push("addDropItem", data.item, data.num);
				}
			} else {
				this.push("addTextEx", data);
			}
		});
		if (!showFast && data.length >= maxLines) {
			this.pushScroll();
		}
		this.push("waitForInput", true);
		if (showFast && type !== "dropItem") {
			this.push("setWait", 1);
		}
		this.push("end");
	};

	Window_Result.prototype.pushScroll = function(type) {
		if (waitForInput && type !== "dropItem") {
			this.push("waitForInput");
		} else {
			this.push("wait");
		}
		this.push("smoothScrollDown", 1);
		this.push("waitForScroll");
	};

	//-----------------------------------------------------------------------------
	// Game_Actor

	let lastLevel = 0;
	const _Game_Actor_changeExp = Game_Actor.prototype.changeExp;
	Game_Actor.prototype.changeExp = function(exp, show) {
		lastLevel = this.level;
		_Game_Actor_changeExp.call(this, exp, show);
	};

	const resultText = "";
	Game_Actor.prototype.displayLevelUp = function(newSkills) {
		$gameMessage.setResult();
		const dp = dParams(this, lastLevel);
		const resultWindow = SceneManager._scene._fesResultWindow;
		const texts = [];
		texts.push(TextManager.levelUp.format(this._name, TextManager.level, this._level));
		if (terms.statusUp) {
			dp.forEach((param, paramId) => {
				texts.push(terms.statusUp.format(TextManager.param(paramId), param));
			});
		}
		for (const skill of newSkills) {
			texts.push(TextManager.obtainSkill.format(skill.name));
		}
		resultWindow.createResultMethods(this, texts, "levelUp");
	};

	const dParams = (actor, lastLevel) => {
		const dp = [];
		for (const param of actor.currentClass().params) {
			dp.push(param[actor.level] - param[lastLevel]);
		}
		return dp;
	};

	//-----------------------------------------------------------------------------
	// BattleManager

	const _BattleManager_isBusy = BattleManager.isBusy;
	BattleManager.isBusy = function() {
		return _BattleManager_isBusy.call(this) || SceneManager._scene._fesResultWindow.isBusy();
	};

	let processBattleEnd = false;
	const _BattleManager_replayBgmAndBgs = BattleManager.replayBgmAndBgs;
	BattleManager.replayBgmAndBgs = function() {
		if (processBattleEnd) return;
		_BattleManager_replayBgmAndBgs.call(this);
	};

	BattleManager.playVictoryMe = function() {
		AudioManager[playMe]($gameSystem.victoryMe());
	};

	const _BattleManager_processVictory = BattleManager.processVictory;
	BattleManager.processVictory = function() {
		$gameMessage.setResult();
		processBattleEnd = true;
		_BattleManager_processVictory.call(this);
		processBattleEnd = false;
		if (victorySe) AudioManager.playSe(victorySe);
		AudioManager.stopBgm();
	};

	const _BattleManager_displayVictoryMessage = BattleManager.displayVictoryMessage;
	BattleManager.displayVictoryMessage = function() {
		SceneManager._scene._fesResultWindow.setWait(waitDuration);
		if (terms.displayVictoryMessage) {
			_BattleManager_displayVictoryMessage.call(this);
		}
	};

	const _BattleManager_processAbort = BattleManager.processAbort;
	BattleManager.processAbort = function() {
		processBattleEnd = true;
		_BattleManager_processAbort.call(this);
		processBattleEnd = false;
	};

	const _BattleManager_processDefeat = BattleManager.processDefeat;
	BattleManager.processDefeat = function() {
		processBattleEnd = true;
		_BattleManager_processDefeat.call(this);
		processBattleEnd = false;
	};

	const _BattleManager_updateBattleEnd = BattleManager.updateBattleEnd;
	BattleManager.updateBattleEnd = function() {
		_BattleManager_updateBattleEnd.call(this);
		if (!$gameParty.isAllDead() || this._canLose) {
			this.replayBgmAndBgs();
		}
	};

	BattleManager.displayExp = function() {
		$gameMessage.setResult();
		const exp = this._rewards.exp;
		const members = $gameParty.aliveMembers();
		const expMessage = members.length === 1 ? terms.exp1 : terms.exp2;
		const texts = [];
		texts.push(expMessage.format(members[0].name()));
		texts.push(TextManager.obtainExp.format(exp, TextManager.exp));
		const gold = this._rewards.gold;
		if (gold > 0) {
			texts.push(TextManager.obtainGold.format(gold));
		}
		const resultWindow = SceneManager._scene._fesResultWindow;
		if (fesStyleBattle) {
			resultWindow.push("waitForStatusMovement");
		}
		if (terms.victory) {
			resultWindow.push("showVictory");
		}
		resultWindow.createResultMethods(members[0], texts, "exp");
	};

	BattleManager.displayGold = function() {};

	BattleManager.displayDropItems = function() {};

	const _BattleManager_gainDropItems = BattleManager.gainDropItems;
	BattleManager.gainDropItems = function() {
		_BattleManager_gainDropItems.call(this);
		const items = this._rewards.items;
		const numData = [];

		$gameMessage.setResult();
		for (const item of items) {
			const index = numData.findIndex(data => data.item === item)
			if (index === -1) {
				numData.push({"item": item, "num": 1});
			} else {
				numData[index].num++;
			}
		};

		if (items.length > 0) {
			const resultWindow = SceneManager._scene._fesResultWindow;
			const data = [];
			for (const numItems of numData) {
				const item = numItems.item;
				const num = numItems.num;
				data.push( { "item": item, "num": num } );
			}
			data.push( {"text": TextManager.obtainItem.format("") } );
			resultWindow.createResultMethods($gameParty.aliveMembers()[0], data, "dropItem");
		}
	};

	//-----------------------------------------------------------------------------
	// Game_Interpreter

	const _Game_Interpreter_command315 = Game_Interpreter.prototype.command315;
	Game_Interpreter.prototype.command315 = function(params) {
		if ($gameMessage.isBusy()) {
			return false;
		}
		const result = _Game_Interpreter_command315.call(this, params);
		if ($gameMessage.resultMode()) this.setWaitMode("message");
		return result ;
	};

	const _Game_Interpreter_command316 = Game_Interpreter.prototype.command316;
	Game_Interpreter.prototype.command316 = function(params) {
		if ($gameMessage.isBusy()) {
			return false;
		}
		const result = _Game_Interpreter_command316.call(this, params);
		if ($gameMessage.resultMode()) this.setWaitMode("message");
		return result;
	};

}