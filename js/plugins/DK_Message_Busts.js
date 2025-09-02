/*
Title: Message Busts
Author: DKPlugins
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 1.1.3
Release: 10.11.2022
First release: 30.09.2020
*/

/*ru
Название: Бюсты Сообщений
Автор: DKPlugins
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 1.1.3
Релиз: 10.11.2022
Первый релиз: 30.09.2020
*/

/*:
 * @plugindesc v.1.1.3 [MV|MZ] Allows you to display busts instead of a face image.
 * @author DKPlugins
 * @url https://dk-plugins.ru
 * @target MZ
 * @help

 ### Info about plugin ###
 Title: DK_Message_Busts
 Author: DKPlugins
 Site: https://dk-plugins.ru
 Version: 1.1.3
 Release: 10.11.2022
 First release: 30.09.2020

 ###=========================================================================
 ## Compatibility
 ###=========================================================================
 RPG Maker MV: 1.5+
 RPG Maker MZ: 1.0+

 ###=========================================================================
 ## Plugin commands (RPG Maker MV)
 ###=========================================================================
 1. Set bust clothes: SetBustClothes actorName clothes
 actorName - Actor
 clothes - Clothes
 Example: SetBustClothes DKPlugins SF

 2. Reset bust clothes: ResetBustClothes actorName
 actorName - Character

 3. Set bust position: SetBustPosition position
 position - Position (left or right)

 4. Mirror bust: SetBustMirror mirror
 mirror - Mirror (true or false)

 5. Set visibility of busts: SetBustsEnabled enabled
 enabled - Enabled (true or false)

 6. Set the delay between frames in a frameset: SetBustsFramesetDelay delay
 delay - Delay between frames

 ###=========================================================================
 ## Instructions
 ###=========================================================================
 The plugin allows you to display busts instead of a face image
 in the message window.
 The name of the bust file is built according to the following algorithm:
 1. Selected character face (faceName)
 2. Selected facial emotion (faceIndex)
 3. Character clothing (if installed)
 The separator "_" is used to combine all parts
 For example, if you selected a face named Priscilla_1 and emotion number 1,
 then the filename will be as follows Priscilla_1_1

 ## System of frames (framesets) ##
 You can use a set of frames instead of a static bust image.
 To do this, add the prefix at the beginning of the face file
 [frameset,cols,rows], where cols - the number of columns,
 rows - the number of rows in the frameset.
 For example, if the character's face file was named Priscilla_1,
 then to use a 2 by 2 frameset
 you need to rename the file to [frameset,2,2]Priscilla_1
 Also, this prefix must be added to the name of the bust file!

 ## Clothing system ##
 The clothes of character is determined from the face name
 according to the following rule:
 The file name is divided into parts by the separator "_"
 and the first part will be the name of the character. Wherein,
 if you are using a frameset then the prefix will be ignored!
 For example, the file is called Priscilla_1,
 then the character name will be Priscilla
 If the file is prefixed with [frameset,2,2],
 and the file is called [frameset,2,2]Priscilla_1,
 then the character name will also be Priscilla

 Use the plugin command to set clothes for your character!
 Let's consider an example:
 1. We have a face named Priscilla_1
 2. We have chosen a face emotion with index 1
 3. We installed the SF clothes for the Priscilla character using the plugin command
 The bust file name will be: Priscilla_1_1_SF
 If you are using a frameset, be sure to add a prefix to the beginning of the file!
 For the prefix [frameset,2,2] the file name from the example will be
 [frameset,2,2]Priscilla_1_1_SF

 ###===========================================================================
 ## License and terms of use
 ###===========================================================================
 You can:
 -To use the plugin for your non-commercial projects
 -Change code of the plugin

 You cannot:
 -Delete or change any information about the plugin
 -Distribute the plugin and its modifications

 ## Commercial license ##
 To use the plugin in commercial projects, you must be my subscriber on patreon
 https://boosty.to/dkplugins

 ###=========================================================================
 ## Support
 ###=========================================================================
 Become a subscriber: https://boosty.to/dkplugins



 * @command SetBustClothes
 * @desc Set bust clothes
 *
 * @arg actorName
 * @text Actor name
 * @desc Actor name
 *
 * @arg clothes
 * @text Clothes
 * @desc Clothes

 * @command ResetBustClothes
 * @desc Reset bust clothes
 *
 * @arg actorName
 * @text Actor name
 * @desc Actor name

 * @command SetBustPosition
 * @desc Set bust position
 *
 * @arg position
 * @text Position
 * @desc Position
 * @type select
 * @option left
 * @option right
 * @default left

 * @command SetBustMirror
 * @desc Mirror the bust
 *
 * @arg mirror
 * @text Mirror
 * @desc Mirror
 * @type boolean
 * @default false

 * @command SetBustsEnabled
 * @desc Set visibility of busts
 *
 * @arg enabled
 * @text Enabled
 * @desc Enabled
 * @type boolean
 * @default true

 * @command SetBustsFramesetDelay
 * @desc Set the delay between frames in a frameset
 *
 * @arg delay
 * @text Delay
 * @desc Delay between frames
 * @type number
 * @min 1
 * @default 1

 * @param Busts Settings
 * @default ---------------------------------

 * @param bustsFolder
 * @text Busts folder
 * @parent Busts Settings
 * @desc Busts folder
 * @default img/pictures/

 * @param bustOffsetX
 * @text Bust offset X
 * @parent Busts Settings
 * @desc Bust offset X. Calculated with Javascript.
 * @default 0

 * @param bustOffsetY
 * @text Bust offset Y
 * @parent Busts Settings
 * @desc Bust offset Y. Calculated with Javascript.
 * @type combo
 * @option 0
 * @option -this._messageWindow.height + 4
 * @default 0

 * @param priority
 * @text Bust priority
 * @parent Busts Settings
 * @desc Bust priority
 * @type select
 * @option behind message window
 * @value 0
 * @option in front of message window
 * @value 1
 * @default 1

 * @param framesetDelay
 * @text Frameset delay
 * @desc Delay between frames
 * @type number
 * @min 1
 * @default 3

*/

/*:ru
 * @plugindesc v.1.1.3 [MV|MZ] Позволяет отображать бюсты вместо изображения лица.
 * @author DKPlugins
 * @url https://dk-plugins.ru
 * @target MZ
 * @help

 ### Информация о плагине ###
 Название: DK_Message_Busts
 Автор: DKPlugins
 Сайт: https://dk-plugins.ru
 Версия: 1.1.3
 Релиз: 10.11.2022
 Первый релиз: 30.09.2020

 ###=========================================================================
 ## Совместимость
 ###=========================================================================
 RPG Maker MV: 1.5+
 RPG Maker MZ: 1.0+

 ###=========================================================================
 ## Команды плагина (RPG Maker MV)
 ###=========================================================================
 1. Установить одежду бюста: SetBustClothes actorName clothes
 actorName - Персонаж
 clothes - Одежда
 Пример: SetBustClothes DKPlugins SF

 2. Сбросить одежду бюста: ResetBustClothes actorName
 actorName - Персонаж

 3. Установить позицию бюста: SetBustPosition position
 position - Позиция (left или right)

 4. Отзеркалить бюст: SetBustMirror mirror
 mirror - Отзеркалить (true или false)

 5. Установить видимость бюстов: SetBustsEnabled enabled
 enabled - Включено (true или false)

 6. Установить задержку между кадрами в наборе фреймов: SetBustsFramesetDelay delay
 delay - Задержка между кадрами

 ###=========================================================================
 ## Инструкции
 ###=========================================================================
 Плагин позволяет выводить бюсты вместо изображения лица в окне сообщений.
 Название файла бюста строится по следующему алгоритму:
 1. Выбранное лицо персонажа (faceName)
 2. Выбранная эмоция лица (faceIndex)
 3. Одежда персонажа (если установлена)
 Для объединения всех частей используется разделитель "_"
 Например, если вы выбрали лицо с названием Priscilla_1 и эмоцию под номером 1,
 то имя файла будет следующим Priscilla_1_1

 ## Система фреймсетов (наборов фреймов) ##
 Вы можете использовать вместо статичного изображения бюста набор фреймов.
 Для этого необходимо в начале файла лица добавить префикс
 [frameset,cols,rows], где cols - количество столбцов,
 rows - количество строк в наборе фреймов.
 Например, если файл лица персонажа назывался Priscilla_1,
 то для использования набора фреймов размера 2 на 2
 необходимо переименовать файл в [frameset,2,2]Priscilla_1
 Также этот префикс необходимо добавить в название файла бюста!

 ## Система одежды ##
 Персонаж, которому установлена одежда,
 определяется из названия лица по следующему правилу:
 Имя файла разделяется на части по разделителю "_"
 и первая часть будет именем персонажа. При этом,
 если вы используете набор фреймов, то префикс будет игнорироваться!
 Например, файл называется Priscilla_1, тогда имя персонажа будет Priscilla.
 Если у файла установлен префикс [frameset,2,2],
 а файл называется [frameset,2,2]Priscilla_1,
 тогда имя персонажа также будет Priscilla

 Для установки одежды персонажу используйте команду плагина!
 Рассмотрим пример:
 1. У нас есть лицо с названием Priscilla_1
 2. Мы выбрали эмоцию лица с индексом 1
 3. Мы установили одежду SF персонажу Priscilla с помощью команды плагина
 Название файла бюста будет следующим: Priscilla_1_1_SF
 Если вы используете набор фреймов, то не забудьте в начало файла добавить префикс!
 Для префикса [frameset,2,2] название файла из примера будет
 [frameset,2,2]Priscilla_1_1_SF

 ###===========================================================================
 ## Лицензия и правила использования плагина
 ###===========================================================================
 Вы можете:
 -Использовать плагин в некоммерческих проектах
 -Изменять код плагина

 Вы не можете:
 -Удалять или изменять любую информацию о плагине
 -Распространять плагин и его модификации

 ## Коммерческая лицензия ##
 Для использования плагина в коммерческих проектах необходимо быть моим подписчиком на патреоне
 https://boosty.to/dkplugins

 ###=========================================================================
 ## Поддержка
 ###=========================================================================
 Стать подписчиком: https://boosty.to/dkplugins



 * @command SetBustClothes
 * @desc Установить одежду бюста
 *
 * @arg actorName
 * @text Персонаж
 * @desc Персонаж
 *
 * @arg clothes
 * @text Одежда
 * @desc Одежда

 * @command ResetBustClothes
 * @desc Сбросить одежду бюста
 *
 * @arg actorName
 * @text Персонаж
 * @desc Персонаж

 * @command SetBustPosition
 * @desc Установить позицию бюста
 *
 * @arg position
 * @text Позиция
 * @desc Позиция
 * @type select
 * @option left
 * @option right
 * @default left

 * @command SetBustMirror
 * @desc Отзеркалить бюст
 *
 * @arg mirror
 * @text Отзеркалить
 * @desc Отзеркалить
 * @type boolean
 * @default false

 * @command SetBustsEnabled
 * @desc Установить видимость бюстов
 *
 * @arg enabled
 * @text Включено
 * @desc Включено
 * @type boolean
 * @default true

 * @command SetBustsFramesetDelay
 * @desc Установить задержку между кадрами в наборе фреймов
 *
 * @arg delay
 * @text Задержка
 * @desc Задержка между кадрами
 * @type number
 * @min 1
 * @default 1

 * @param Busts Settings
 * @text Настройки Бюстов
 * @default ---------------------------------

 * @param bustsFolder
 * @text Папка с бюстами
 * @parent Busts Settings
 * @desc Папка с бюстами
 * @default img/pictures/

 * @param bustOffsetX
 * @text Отступ бюста по X
 * @parent Busts Settings
 * @desc Отступ бюста по X. Вычисляется с помощью Javascript.
 * @default 0

 * @param bustOffsetY
 * @text Отступ бюста по Y
 * @parent Busts Settings
 * @desc Отступ бюста по Y. Вычисляется с помощью Javascript.
 * @type combo
 * @option 0
 * @option -this._messageWindow.height + 4
 * @default 0

 * @param priority
 * @text Приоритет бюста
 * @parent Busts Settings
 * @desc Приоритет бюста
 * @type select
 * @option за окном сообщений
 * @value 0
 * @option перед окном сообщений
 * @value 1
 * @default 1

 * @param framesetDelay
 * @text Задержка между кадрами
 * @desc Задержка между кадрами
 * @type number
 * @min 1
 * @default 1

*/

'use strict';

var Imported = Imported || {};
Imported['DK_Message_Busts'] = '1.1.3';

//===========================================================================
// initialize parameters
//===========================================================================

const MessageBustsParams = (function() {

    function parse(string) {
        try {
            return JSON.parse(string, function(key, value) {
                if (typeof string === 'number' || typeof string === 'boolean') {
                    return string;
                }

                try {
                    if (Array.isArray(value)) {
                        return value.map(val => parse(val));
                    }

                    return parse(value);
                } catch (e) {
                    return value;
                }
            });
        } catch(e) {
            return string;
        }
    }

    const parameters = PluginManager.parameters('DK_Message_Busts');

    return Object.entries(parameters).reduce((acc, [key, value]) => {
        acc[key] = parse(value);

        return acc;
    }, {});

})();

MessageBustsParams.regex = /^\[frameset,(\d+),(\d+)\]/i;

//===========================================================================
// initialize plugin commands
//===========================================================================

const MessageBusts_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    MessageBusts_Game_Interpreter_pluginCommand.apply(this, arguments);

    switch (command) {
        case 'SetBustClothes': {
            $gameSystem.setBustClothes(args[0], args[1]);
            break;
        }
        case 'ResetBustClothes': {
            $gameSystem.setBustClothes(args[0], null);
            break;
        }
        case 'SetBustPosition': {
            $gameMessage.setBustPosition(args[0]);
            break;
        }
        case 'SetBustMirror': {
            $gameMessage.setBustMirror(args[0] === 'true');
            break;
        }
        case 'SetBustsEnabled': {
            $gameSystem.setBustsDisabled(args[0] !== 'true');
            break;
        }
        case 'SetBustsFramesetDelay':
            $gameSystem.setBustsFramesetDelay(parseInt(args[0]));
            break;
    }
};

if (Utils.RPGMAKER_NAME === 'MZ') {

    PluginManager.registerCommand('DK_Message_Busts', 'SetBustClothes', (args) => {
        $gameSystem.setBustClothes(args.actorName, args.clothes);
    });

    PluginManager.registerCommand('DK_Message_Busts', 'ResetBustClothes', (args) => {
        $gameSystem.setBustClothes(args.actorName, null);
    });

    PluginManager.registerCommand('DK_Message_Busts', 'SetBustPosition', (args) => {
        $gameMessage.setBustPosition(args.position);
    });

    PluginManager.registerCommand('DK_Message_Busts', 'SetBustMirror', (args) => {
        $gameMessage.setBustMirror(args.mirror === 'true');
    });

    PluginManager.registerCommand('DK_Message_Busts', 'SetBustsEnabled', (args) => {
        $gameSystem.setBustsDisabled(args.enabled !== 'true');
    });

    PluginManager.registerCommand('DK_Message_Busts', 'SetBustsFramesetDelay', (args) => {
        $gameSystem.setBustsFramesetDelay(parseInt(args.delay));
    });

}

//===========================================================================
// Game_System
//===========================================================================

Game_System.prototype.getBustClothes = function(actorName) {
    if (!this._bustsClothes) {
        this._bustsClothes = {};
    }

    return this._bustsClothes[actorName];
};

Game_System.prototype.setBustClothes = function(actorName, clothes) {
    if (!this._bustsClothes) {
        this._bustsClothes = {};
    }

    this._bustsClothes[actorName] = clothes;
};

Game_System.prototype.isBustDisabled = function() {
    return this._bustsDisabled || false;
};

Game_System.prototype.setBustsDisabled = function(disabled) {
    this._bustsDisabled = disabled || false;
};

Game_System.prototype.getBustsFramesetDelay = function() {
    if (this._bustsFramesetDelay === undefined) {
        return MessageBustsParams.framesetDelay;
    }

    return this._bustsFramesetDelay;
};

Game_System.prototype.setBustsFramesetDelay = function(delay) {
    this._bustsFramesetDelay = delay || 1;
};

//===========================================================================
// Game_Message
//===========================================================================

Game_Message.prototype.getBustName = function() {
    const faceName = this.faceName();

    if (!faceName) {
        return '';
    }

    const divided = faceName.split('_');
    let actorName = divided[0];

    if (MessageBustsParams.regex.exec(actorName)) {
        const substring = '[frameset,%1,%2]'.format(RegExp.$1, RegExp.$2);

        actorName = actorName.substring(substring.length);
    }

    const clothes = $gameSystem.getBustClothes(actorName) || '';
    const faceIndex = this.faceIndex() + 1;
    const parts = [faceName, faceIndex];

    if (clothes) {
        parts.push(clothes);
    }

    return parts.join('_');
};

Game_Message.prototype.setBustPosition = function(position) {
    this._bustPosition = position;
};

Game_Message.prototype.getBustPosition = function() {
    return this._bustPosition || 'left';
};

Game_Message.prototype.isBustMirror = function() {
    return this._bustMirror || false;
};

Game_Message.prototype.setBustMirror = function(mirror) {
    this._bustMirror = mirror || false;
};

//===========================================================================
// Window_Message
//===========================================================================

Window_Message.prototype._removeBust = function() {
    if (this._bustSprite) {
        if (this._bustSprite.parent) {
            this._bustSprite.parent.removeChild(this._bustSprite);
        }

        delete this._bustSprite;
    }
};

Window_Message.prototype._removeLastBust = function() {
    if (this._lastBustSprite) {
        if (this._lastBustSprite.parent) {
            this._lastBustSprite.parent.removeChild(this._lastBustSprite);
        }

        delete this._lastBustSprite;
    }
};

Window_Message.prototype.createBust = function() {
    const bustName = $gameMessage.getBustName();
    const positionType = $gameMessage.positionType();

    if (this._bustSprite) {
        this._lastBustSprite = this._bustSprite;
    }

    this._removeBust();

    if (this._lastBustSprite) {
        if (MessageBustsParams.priority === 0) {
            this.parent.parent._spriteset._pictureContainer.addChild(this._lastBustSprite);
        } else {
            this.addChild(this._lastBustSprite);
        }
    }

    if ($gameSystem.isBustDisabled() || !bustName || !positionType) {
        this._removeLastBust();
        return;
    }

    this._bustSprite = new Sprite_MessageBust();

    this._bustSprite.setMirror($gameMessage.isBustMirror());
    this._bustSprite.setBustPosition($gameMessage.getBustPosition());
    this._bustSprite.setMessageWindow(this);
    this._bustSprite.setBustName(bustName);
    this._bustSprite.visible = false;
    this._bustSprite.start();

    if (MessageBustsParams.priority === 0) {
        this.parent.parent._spriteset._pictureContainer.addChild(this._bustSprite);
    } else {
        this.addChild(this._bustSprite);
    }
};

const MessageBusts_Window_Message_contentsWidth =
    Window_Message.prototype.contentsWidth;
Window_Message.prototype.contentsWidth = function() {
      if (this._bustSprite && $gameMessage.getBustPosition() === 'right' && MessageBustsParams.priority === 1) {
          this._bustSprite.updatePosition();

          let width = this._padding;

          if (this._bustSprite.isMirror()) {
              width += this._bustSprite.width;
          } else {
              width += this._bustSprite.x;
          }

          return width;
      }

      return MessageBusts_Window_Message_contentsWidth.apply(this, arguments);
};

const MessageBusts_Window_Message_startMessage =
    Window_Message.prototype.startMessage;
Window_Message.prototype.startMessage = function() {
    this.createBust();

    if (!this._bustSprite) {
        MessageBusts_Window_Message_startMessage.apply(this, arguments);
    } else {
        this._bustSprite.onReady(() => {
            if (MessageBustsParams.priority === 1) {
                this.createContents();
            }

            MessageBusts_Window_Message_startMessage.apply(this, arguments);
        });
    }
};

const MessageBusts_Window_Message_loadMessageFace = Window_Message.prototype.loadMessageFace;
Window_Message.prototype.loadMessageFace = function() {
    if (!this._bustSprite) {
        MessageBusts_Window_Message_loadMessageFace.apply(this, arguments);
    }
};

const MessageBusts_Window_Message_drawMessageFace = Window_Message.prototype.drawMessageFace;
Window_Message.prototype.drawMessageFace = function() {
    if (!this._bustSprite) {
        MessageBusts_Window_Message_drawMessageFace.apply(this, arguments);
    }
};

const MessageBusts_Window_Message_newLineX = Window_Message.prototype.newLineX;
Window_Message.prototype.newLineX = function() {
    if ($gameMessage.faceName()) {
        if (this._bustSprite && $gameMessage.getBustPosition() === 'left' && MessageBustsParams.priority === 1) {
            let x = this._bustSprite.width;

            if (!this._bustSprite.isMirror()) {
                x += this._bustSprite.x;
            }

            return x;
        }

        return 0;
    }

    return MessageBusts_Window_Message_newLineX.apply(this, arguments);
};

const MessageBusts_Window_Message_updatePlacement = Window_Message.prototype.updatePlacement;
Window_Message.prototype.updatePlacement = function() {
    MessageBusts_Window_Message_updatePlacement.apply(this, arguments);

    if (this._bustSprite) {
        this._bustSprite.updateFrames();
        this._bustSprite.updatePosition();
        this._bustSprite.visible = true;

        this._removeLastBust();
    }
};

const MessageBusts_Window_Message_terminateMessage = Window_Message.prototype.terminateMessage;
Window_Message.prototype.terminateMessage = function() {
    MessageBusts_Window_Message_terminateMessage.apply(this, arguments);
    $gameMessage.setBustMirror(false);
    $gameMessage.setBustPosition('left');
};

const MessageBusts_Window_Message_updateLoading = Window_Message.prototype.updateLoading;
Window_Message.prototype.updateLoading = function() {
    if (this._bustSprite && !this._bustSprite.isReady()) {
        return true;
    }

    return MessageBusts_Window_Message_updateLoading.apply(this, arguments);
};

//===========================================================================
// Sprite_MessageBust
//===========================================================================

class Sprite_MessageBust extends Sprite {

    // G methods

    getBustName() {
        return this._bustName || '';
    }

    // I methods

    isReady() {
        return this.bitmap && this.bitmap.isReady();
    }

    isMirror() {
        return this._mirror;
    }

    isFramesetMode() {
        return !!this._framesetMode;
    }

    // O methods

    onReady(callback) {
        if (this.isReady()) {
            callback(this);
        } else {
            if (!this._onReadyCallbacks) {
                this._onReadyCallbacks = [];
            }

            this._onReadyCallbacks.push(callback);
        }
    }

    // S methods

    setMessageWindow(messageWindow) {
        this._messageWindow = messageWindow;
    }

    setMirror(mirror) {
        this._mirror = mirror;
    }

    setBustName(bustName) {
        this._bustName = bustName || '';

        if (MessageBustsParams.regex.exec(this._bustName)) {
            this._framesetMode = { rows: Number(RegExp.$2), cols: Number(RegExp.$1) };
        } else {
            delete this._framesetMode;
        }
    }

    setBustPosition(position) {
        this._bustPosition = position;
    }

    start() {
        this._frameIndex = 0;
        this._animationCounter = 0;
        this.bitmap = ImageManager.loadBitmap(MessageBustsParams.bustsFolder, this.getBustName());
        this.updateReady();
        this.updateFrames();
        this.updateOpacity();
        this.updateOpacity();
    }

    // U methods

    update() {
        super.update.apply(this, arguments);

        this.updateReady();
        this.updateOpacity();


        if (this.isFramesetMode() && this._animationCounter++ === $gameSystem.getBustsFramesetDelay()) {
            this._animationCounter = 0;
            this._frameIndex++;

            if (this._frameIndex >= this._framesetMode.rows * this._framesetMode.cols) {
                this._frameIndex = 0;
            }

            this.updateFrames();
        }
    }

    updateReady() {
        if (this._onReadyCallbacks && this._onReadyCallbacks.length > 0 && this.isReady()) {
            this.updateFrames();

            this._onReadyCallbacks.forEach((callback) => {
                callback(this);
            });

            delete this._onReadyCallbacks;
        }
    }

    updateOpacity() {
        if (this._messageWindow) {
            this.opacity = this._messageWindow.openness;
        }
    }

    updatePosition() {
        if (!this._messageWindow) {
            return;
        }

        const offsetY = eval(MessageBustsParams.bustOffsetY) || 0;
        let offsetX = eval(MessageBustsParams.bustOffsetX) || 0;

        if (this._mirror) {
            this.scale.x = -1;

            offsetX = this.width - offsetX * 2;
        } else {
            this.scale.x = 1;
        }

        const x = this._bustPosition === 'right' ?
            this._messageWindow.width - this.width : 0;
        let y = this._messageWindow.height - this.height;

        if (MessageBustsParams.priority === 0) {
            y += this._messageWindow.y;
        }

        this.move(x + offsetX, y + offsetY);
    }

    updateFrames() {
        if (!this.isReady() || !this.isFramesetMode()) {
            return;
        }

        const rows = this._framesetMode.rows;
        const cols = this._framesetMode.cols;
        const width = this.bitmap.width / cols;
        const height = this.bitmap.height / rows;
        const x = Math.floor(this._frameIndex % rows) * width;
        const y = Math.floor(this._frameIndex / cols) * height;

        this.setFrame(x, y, width, height);
    }

}
