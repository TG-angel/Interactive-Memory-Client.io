/*:
 * @plugindesc v.1.0.0 [MZ] Changes the status menu by adding various sections and functions.
 * @author DKPlugins
 * @url https://dk-plugins.ru
 * @target MZ
 * @help

 ### Info about plugin ###
 Title: DK_Status_Menu_Core
 Author: DKPlugins
 Site: https://dk-plugins.ru
 Contacts: https://dk-plugins.ru/contacts
 Version: 1.0.0
 Release: 04.06.2024
 First release: 04.06.2024

 ###===========================================================================
 ## Instructions
 ###===========================================================================

 ###=========================================================================
 ## See also
 ###=========================================================================
 1. Game Time (https://dk-plugins.ru/game-time/)
 Time system.

 2. Globals (https://dk-plugins.ru/globals/)
 Allows you to specify variables and switches that will be “global” to all player saves.
 Changes are saved in a separate file and applied when starting a new game or loading any save.

 3. Mouse System (https://dk-plugins.ru/mouse-system/)
 Allows you to change the mouse cursor, activate events by clicking, hovering, etc.

 4. Events Glow (https://dk-plugins.ru/events-glow/)
 Allows highlighting events on mouse hover.

 5. Pictures Glow (https://dk-plugins.ru/pictures-glow/)
 Allows highlighting pictures on mouse hover.

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
 Visit the page: https://dk-plugins.ru/commercial-license/

 ###===========================================================================
 ## Support
 ###===========================================================================
 Become a subscriber on boosty: https://boosty.to/dkplugins
 Become a subscriber on patreon: https://patreon.com/dkplugins
 Donate: https://dk-plugins.ru/donate



 * @param commandList
 * @text Command list
 * @desc The list of commands in the status menu.
 * @type select[]
 * @option Parameters
 * @value param
 * @option Equipment
 * @value equip
 * @option Skills
 * @value skill
 * @default ["param","equip","skill"]

 * @param Parameters Command
 * @default ---------------------------------

 * @param parametersCommandName
 * @text Parameters command name
 * @parent Parameters Command
 * @desc The name of the parameters command.
 * @type combo
 * @option Parameters
 * @option Stats
 * @default Parameters

 * @param parameterColumnName
 * @text Parameter column name
 * @parent Parameters Command
 * @desc The name of the parameter column.
 * @type combo
 * @option Parameter
 * @option Stat
 * @default Parameter

 * @param basicColumnName
 * @text Basic parameter column name
 * @parent Parameters Command
 * @desc The name of the basic parameter column.
 * @type combo
 * @option Basic
 * @default Basic

 * @param bonusColumnName
 * @text Bonus column name
 * @parent Parameters Command
 * @desc The name of the bonus column.
 * @type combo
 * @option Bonus
 * @option Modifier
 * @default Bonus

 * @param totalColumnName
 * @text Total column name
 * @parent Parameters Command
 * @desc The name of the total column.
 * @type combo
 * @option Total
 * @default Total

 * @param headerTextColor
 * @text Header text color
 * @parent Parameters Command
 * @desc The color of the header columns.
 * @type color
 * @default 6

 * @param totalColumnTextColor
 * @text Total column text color
 * @parent Parameters Command
 * @desc The color of the total column.
 * @type color
 * @default 2

 * @param totalParameterTextColor
 * @text Total parameter text color
 * @parent Parameters Command
 * @desc The color of the total parameter.
 * @type color
 * @default 16

 * @param Exp Gauge
 * @default ---------------------------------

 * @param expGaugeMaxText
 * @text EXP Gauge Max Text
 * @parent Exp Gauge
 * @desc The text that will be displayed in the EXP gauge when the actor reaches the maximum level.
 * @default Max

 * @param expGaugeColor1
 * @text EXP Gauge color 1
 * @parent Exp Gauge
 * @desc The color of the EXP gauge.
 * @type color
 * @default 28

 * @param expGaugeColor2
 * @text EXP Gauge color 2
 * @parent Exp Gauge
 * @desc The color of the EXP gauge.
 * @type color
 * @default 29

*/

/*:ru
 * @plugindesc v.1.0.0 [MZ] Изменяет меню статуса, добавляя различные разделы и функции.
 * @author DKPlugins
 * @url https://dk-plugins.ru
 * @target MZ
 * @base DKTools
 * @orderAfter DKTools
 * @help

 ### Информация о плагине ###
 Название: DK_Status_Menu_Core
 Автор: DKPlugins
 Сайт: https://dk-plugins.ru
 Контакты: https://dk-plugins.ru/contacts
 Версия: 1.0.0
 Релиз: 04.06.2024
 Первый релиз: 04.06.2024

 ###=========================================================================
 ## Инструкции
 ###=========================================================================

 ###=========================================================================
 ## Смотрите также
 ###=========================================================================
 1. Время (https://dk-plugins.ru/game-time/)
 Система времени.

 2. Глобальные Данные (https://dk-plugins.ru/globals/)
 Позволяет указать переменные и переключатели, которые будут "глобальными" для всех сохранений игрока.
 Изменения сохраняются в отдельный файл и применяются при старте новой игры или загрузке любого сохранения.

 3. Система Мыши (https://dk-plugins.ru/mouse-system/)
 Позволяет изменять курсор мыши, активировать события нажатием, наведением и др.

 4. Свечение Событий (https://dk-plugins.ru/events-glow/)
 Позволяет подсвечивать события при наведении мыши.

 5. Свечение Изображений (https://dk-plugins.ru/pictures-glow/)
 Позволяет подсвечивать изображения при наведении мыши.

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
 Посетите страницу: https://dk-plugins.ru/commercial-license/

 ###===========================================================================
 ## Поддержка
 ###===========================================================================
 Стать подписчиком на boosty: https://boosty.to/dkplugins
 Стать подписчиком на patreon: https://patreon.com/dkplugins
 Поддержать: https://dk-plugins.ru/donate



 * @param commandList
 * @text Список команд
 * @desc Список команд в меню статуса.
 * @type select[]
 * @option Параметры
 * @value param
 * @option Экипировка
 * @value equip
 * @option Навыки
 * @value skill
 * @default ["param","equip","skill"]

 * @param Parameters Command
 * @text Команда Параметры
 * @default ---------------------------------

 * @param parametersCommandName
 * @text Название команды параметров
 * @parent Parameters Command
 * @desc Название команды параметров.
 * @type combo
 * @option Параметры
 * @option Статы
 * @default Параметры

 * @param parameterColumnName
 * @text Название колонки параметра
 * @parent Parameters Command
 * @desc Название колонки параметра.
 * @type combo
 * @option Параметр
 * @option Стат
 * @default Параметр

 * @param basicColumnName
 * @text Название колонки базового параметра
 * @parent Parameters Command
 * @desc Название колонки базового параметра.
 * @type combo
 * @option Base
 * @default Base

 * @param bonusColumnName
 * @text Название колонки бонуса
 * @parent Parameters Command
 * @desc Название колонки бонуса.
 * @type combo
 * @option Бонус
 * @option Модификатор
 * @default Бонус

 * @param totalColumnName
 * @text Название колонки итога
 * @parent Parameters Command
 * @desc Название колонки итога.
 * @type combo
 * @option Итого
 * @default Итого

 * @param headerTextColor
 * @text Цвет текста заголовка
 * @parent Parameters Command
 * @desc Цвет заголовков колонок.
 * @type color
 * @default 6

 * @param totalColumnTextColor
 * @text Цвет текста итоговой колонки
 * @parent Parameters Command
 * @desc Цвет итоговой колонки.
 * @type color
 * @default 2

 * @param totalParameterTextColor
 * @text Цвет текста итогового параметра
 * @parent Parameters Command
 * @desc Цвет итогового параметра.
 * @type color
 * @default 16

 * @param Exp Gauge
 * @text Полоса опыта
 * @default ---------------------------------

 * @param expGaugeMaxText
 * @text Текст максимального опыта
 * @parent Exp Gauge
 * @desc Текст, который будет отображаться в полосе опыта, когда персонаж достигнет максимального уровня.
 * @default Макс

 * @param expGaugeColor1
 * @text Цвет полосы опыта 1
 * @parent Exp Gauge
 * @desc Цвет полосы опыта.
 * @type color
 * @default 28

 * @param expGaugeColor2
 * @text Цвет полосы опыта 2
 * @parent Exp Gauge
 * @desc Цвет полосы опыта.
 * @type color
 * @default 29

*/

'use strict';

var Imported = Imported || {};
Imported['DK_Status_Menu_Core'] = '1.0.0';

//===========================================================================
// initialize parameters
//===========================================================================

const StatusMenuCoreParams = (function() {

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

    const parameters = PluginManager.parameters('DK_Status_Menu_Core');

    return Object.entries(parameters).reduce((acc, [key, value]) => {
        acc[key] = parse(value);

        return acc;
    }, {});

})();

//===========================================================================
// initialize plugin commands
//===========================================================================

//===========================================================================
// Scene_Status
//===========================================================================

Scene_Status.prototype.create = function() {
    Scene_MenuBase.prototype.create.apply(this, arguments);
    this.createCommandWindow();
    this.createProfileWindow();
    this.createParamsWindow();
    this.createStatesWindow();
    this.createEquipsWindow();
    this.createSkillsWindow();
    this.createDummyWindow();
    this.createHalfDummyWindow();
    this.createHelpWindow();
};

Scene_Status.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_StatusCommand(this.commandWindowRect());
    this._commandWindow.setHandler('state', this.commandState.bind(this));
    this._commandWindow.setHandler('equip', this.commandEquip.bind(this));
    this._commandWindow.setHandler('skill', this.commandSkill.bind(this));
    this._commandWindow.setHandler('cancel', this.popScene.bind(this));
    this.addWindow(this._commandWindow);
};

Scene_Status.prototype.commandWindowRect = function() {
    const wx = 0;
    const wy = this.mainAreaTop();
    const ww = Graphics.boxWidth / 3;
    const wh = this.calcWindowHeight(4, true);
    return new Rectangle(wx, wy, ww, wh);
};

Scene_Status.prototype.createProfileWindow = function() {
    this._profileWindow = new Window_StatusProfile(this.profileWindowRect());
    this.addWindow(this._profileWindow);
};

Scene_Status.prototype.profileWindowRect = function() {
    const wx = this._commandWindow.x + this._commandWindow.width;
    const wy = this._commandWindow.y;
    const ww = Graphics.boxWidth - this._commandWindow.width;
    const wh = this._commandWindow.height;
    return new Rectangle(wx, wy, ww, wh);
};

Scene_Status.prototype.createStatesWindow = function() {
    this._statesWindow = new Window_StatusStates(this.statesWindowRect());
    this._statesWindow.setHandler('cancel', this.onStateCancel.bind(this));
    this.addWindow(this._statesWindow);
};

Scene_Status.prototype.statesWindowRect = function() {
    return this.infoWindowRect();
};

Scene_Status.prototype.createParamsWindow = function() {
    this._paramsWindow = new Window_StatusParams(this.paramsWindowRect());
    this.addWindow(this._paramsWindow);
};

Scene_Status.prototype.paramsWindowRect = function() {
    return this.infoWindowRect();
};

Scene_Status.prototype.createEquipsWindow = function() {
    this._equipsWindow = new Window_StatusEquip(this.equipsWindowRect());
    this.addWindow(this._equipsWindow);
};

Scene_Status.prototype.equipsWindowRect = function() {
    return this.halfInfoWindowRect();
};

Scene_Status.prototype.createSkillsWindow = function() {
    this._skillsWindow = new Window_StatusSkills(this.skillsWindowRect());
    this.addWindow(this._skillsWindow);
};

Scene_Status.prototype.skillsWindowRect = function() {
    return this.infoWindowRect();
};

Scene_Status.prototype.createDummyWindow = function() {
    this._dummyWindow = new Window_Base(this.infoWindowRect());
    this.addWindow(this._dummyWindow);
};

Scene_Status.prototype.createHalfDummyWindow = function() {
    this._halfDummyWindow = new Window_Base(this.halfInfoWindowRect());
    this.addWindow(this._halfDummyWindow);
};

Scene_Status.prototype.infoWindowRect = function() {
    const wx = 0;
    const wy = this._commandWindow.y + this._commandWindow.height;
    const ww = Graphics.boxWidth;
    const wh = Graphics.boxHeight - wy - this.helpAreaHeight();
    return new Rectangle(wx, wy, ww, wh);
};

Scene_Status.prototype.halfInfoWindowRect = function() {
    const rect = this.infoWindowRect();
    rect.width /= 2;
    return rect;
};

Scene_Status.prototype.commandState = function() {
    this._statesWindow.activate();
};

Scene_Status.prototype.commandEquip = function() {
    SceneManager.push(Scene_Equip);
};

Scene_Status.prototype.commandSkill = function() {
    SceneManager.push(Scene_Skill);
};

Scene_Status.prototype.onStateCancel = function() {
    this._commandWindow.activate();
};

Scene_Status.prototype.helpAreaHeight = function() {
    return Scene_MenuBase.prototype.helpAreaHeight.apply(this, arguments);
};

Scene_Status.prototype.arePageButtonsEnabled = function() {
    return this._commandWindow.active;
};

Scene_Status.prototype.refreshActor = function() {
    const actor = this.actor();

    this._windowLayer.children.forEach(function(child) {
        if (typeof child.setActor === 'function') {
            child.setActor(actor);
        }
    });
};

Scene_Status.prototype.onActorChange = function() {
    Scene_MenuBase.prototype.onActorChange.apply(this, arguments);
    this.refreshActor();
};

Scene_Status.prototype.updateWindows = function() {
    this._paramsWindow.hide();
    this._statesWindow.hide();
    this._equipsWindow.hide();
    this._skillsWindow.hide();
    this._dummyWindow.hide();
    this._halfDummyWindow.hide();

    switch (this._commandWindow.currentSymbol()) {
        case 'param':
            this._helpWindow.setText(this._actor.profile());
            this._paramsWindow.show();
            break;
        case 'state':
            this._statesWindow.show();
            break;
        case 'equip':
            this._equipsWindow.show();
            this._halfDummyWindow.show();
            this._halfDummyWindow.x = Graphics.boxWidth / 2;
            break;
        case 'skill':
            this._skillsWindow.show();
            break;
        case 'cancel':
            this._dummyWindow.show();
            break;
    }
};

const StatusCore_Scene_Status_update = Scene_Status.prototype.update;
Scene_Status.prototype.update = function() {
    StatusCore_Scene_Status_update.apply(this, arguments);

    if (this._commandWindow.active) {
        this.updateWindows();
    }
};

//===========================================================================
// Window_StatusCommand
//===========================================================================

class Window_StatusCommand extends Window_Command {

    setActor(actor) {
        if (this._actor !== actor) {
            this._actor = actor;
            this.refresh();
        }
    }

    needsCommand(command) {
        switch (command) {
            case 'characteristic':
                return Imported['DKTools_Characteristics'];
            case 'profession':
                return Imported['DK_Professions'];
        }

        return true;
    }

    codeToName(command) {
        switch (command) {
            case 'param':
                return StatusMenuCoreParams.parametersCommandName;
            case 'state':
                return StatusMenuCoreParams.statesCommandName;
            case 'equip':
                return TextManager.equip;
            case 'skill':
                return TextManager.skill;
        }

        return '';
    }

    makeCommandList() {
        if (!this._actor) {
            return;
        }

        StatusMenuCoreParams.commandList.forEach((command) => {
            if (this.needsCommand(command)) {
                this.addCommand(this.codeToName(command), command);
            }
        });

        // this.addCommand('Attributes', 'xparam');
        // this.addCommand('States', 'state', this._actor.states().length > 0);

        this.addCommand(TextManager.cancel, 'cancel');
    }

}

//===========================================================================
// Window_StatusProfile
//===========================================================================

class Window_StatusProfile extends Window_StatusBase {

    setActor(actor) {
        if (this._actor !== actor) {
            this._actor = actor;
            this.refresh();
        }
    }

    drawAllItems() {
        this.drawBackgroundRect();
        this.drawActorFace();
        this.drawActorName();
        this.drawActorLevel();
        this.placeBasicGauges();
    }

    drawBackgroundRect() {
        super.drawBackgroundRect(new Rectangle(0, 0, this.innerWidth, this.innerHeight));
    }

    drawPadding() {
        return Math.floor((this.innerHeight - ImageManager.faceHeight) / 2);
    }

    infoRect() {
        const padding = this.drawPadding();
        const x = padding + ImageManager.faceWidth + padding;
        const y = padding;

        return new Rectangle(
            x,
            y,
            Math.floor(this.innerWidth - x - padding),
            Math.floor(this.innerHeight - padding * 2)
        );
    }

    gaugesRect() {
        const rect = this.infoRect();
        const lineHeight = this.lineHeight();

        return new Rectangle(rect.x, rect.y + lineHeight, rect.width, rect.height - lineHeight);
    }

    drawActorFace() {
        const padding = this.drawPadding();
        const x = padding;
        const y = padding;

        super.drawActorFace(this._actor, x, y);
    }

    drawActorName() {
        const rect = this.infoRect();
        super.drawActorName(this._actor, rect.x, rect.y, rect.width);
    }

    drawActorLevel() {
        const padding = this.drawPadding();
        const rect = this.infoRect();

        rect.x += Math.floor(this.innerWidth / 3);

        this.changeTextColor(ColorManager.systemColor());
        this.drawText(TextManager.levelA, rect.x + 48, rect.y, rect.width);
        this.resetTextColor();
        this.drawText(this._actor.level, 0, rect.y, this.innerWidth - padding, 'right');
    }

    placeBasicGauges() {
        const actor = this._actor;
        const rect = this.gaugesRect();
        const gaugeHeight = this.gaugeLineHeight();

        if (!$dataSystem.optDisplayTp) {
            rect.y += gaugeHeight;
        }

        this.placeGauge(actor, 'hp', rect.x, rect.y, rect.width);
        this.placeGauge(actor, 'mp', rect.x, rect.y + gaugeHeight, rect.width);

        if ($dataSystem.optDisplayTp) {
            this.placeGauge(actor, 'tp', rect.x, rect.y + gaugeHeight * 2, rect.width);
            this.placeGauge(actor, 'exp', rect.x, rect.y + gaugeHeight * 3, rect.width);
        } else {
            this.placeGauge(actor, 'exp', rect.x, rect.y + gaugeHeight * 2, rect.width);
        }
    }

    placeGauge(actor, type, x, y, width) {
        const key = 'actor%1-gauge-%2'.format(actor.actorId(), type);
        const sprite = this.createInnerSprite(key, Sprite_StatusGauge);

        sprite.setup(actor, type, width);
        sprite.move(x, y);
        sprite.show();
    }

}

//===========================================================================
// Window_StatusParams
//===========================================================================

Window_StatusParams.prototype.maxCols = function() {
    return 4;
};

Window_StatusParams.prototype.itemHeight = function() {
    return 32;
};

Window_StatusParams.prototype.headerPadding = function() {
    return 4;
};

Window_StatusParams.prototype.itemRect = function(index) {
    const rect = Window_StatusBase.prototype.itemRect.apply(this, arguments);

    if (index > 3) {
        rect.y += this.itemPadding();
    }

    return rect;
};

Window_StatusParams.prototype.drawItemBackground = function(index) {
    Window_StatusBase.prototype.drawItemBackground.apply(this, arguments);
};

Window_StatusParams.prototype.drawAllItems = function() {
    this.resetFontSettings();
    this.drawColumnsBackground();
    this.drawColumns();
    this.drawTableBackground();
    this.drawParameters();
};

Window_StatusParams.prototype.drawColumnsBackground = function() {
    this.drawBackgroundRect(new Rectangle(0, 0, this.innerWidth, this.lineHeight()));
};

Window_StatusParams.prototype.drawColumns = function() {
    for (let i = 0; i < 4; i++) {
        const rect = this.itemRect(i);

        rect.height = this.lineHeight();

        this.drawColumn(i, rect);
    }
};

Window_StatusParams.prototype.drawColumn = function(index, rect) {
    const textColor = index === 3 ?
        StatusMenuCoreParams.totalColumnTextColor : StatusMenuCoreParams.headerTextColor;

    this.changeTextColor(ColorManager.textColor(textColor));
    this.drawText(this.columName(index), rect.x, rect.y, rect.width, 'center');
};

Window_StatusParams.prototype.columName = function(index) {
    return [
        StatusMenuCoreParams.parameterColumnName,
        StatusMenuCoreParams.basicColumnName,
        StatusMenuCoreParams.bonusColumnName,
        StatusMenuCoreParams.totalColumnName][index];
};

Window_StatusParams.prototype.drawTableBackground = function() {
    this.drawBackgroundRect(new Rectangle(0, this.lineHeight() + this.headerPadding(), this.innerWidth, this.innerHeight));
};

Window_StatusParams.prototype.drawParameters = function() {
    let index = 4;

    this.changeTextColor(ColorManager.systemColor());

    this.contents.fontSize -= 4;

    for (let i = 0; i < 6; i++, index += 4) {
        const paramId = i + 2;

        this.drawParamName(paramId, this.itemRect(index));
        this.drawParamBase(paramId, this.itemRect(index + 1));
        this.drawParamBonus(paramId, this.itemRect(index + 2));
        this.drawParamValue(paramId, this.itemRect(index + 3));
    }
};

Window_StatusParams.prototype.drawParamName = function(paramId, rect) {
    this.changeTextColor(ColorManager.systemColor());
    this.drawText(TextManager.param(paramId), rect.x, rect.y, rect.width, 'center');
};

Window_StatusParams.prototype.drawParamBase = function(paramId, rect) {
    this.changeTextColor(ColorManager.normalColor());
    this.drawText(this._actor.paramBase(paramId), rect.x, rect.y, rect.width, 'center');
};

Window_StatusParams.prototype.drawParamBonus = function(paramId, rect) {
    const base = this._actor.paramBase(paramId);
    const bonus = this._actor.param(paramId) - base;
    const bonusText = bonus > 0 ? '+' + bonus : bonus;
    const textColor = ColorManager.paramchangeTextColor(bonus);

    this.changeTextColor(textColor);
    this.drawText(bonusText, rect.x, rect.y, rect.width, 'center');
};

Window_StatusParams.prototype.drawParamValue = function(paramId, rect) {
    this.changeTextColor(ColorManager.textColor(StatusMenuCoreParams.totalParameterTextColor));
    this.drawText(this._actor.param(paramId), rect.x, rect.y, rect.width, 'center');
};

//===========================================================================
// Window_StatusEquip
//===========================================================================

Window_StatusEquip.prototype.drawItemBackground = function(index) {
    Window_StatusBase.prototype.drawItemBackground.apply(this, arguments);
};

//===========================================================================
// Window_StatusSkills
//===========================================================================

class Window_StatusSkills extends Window_SkillList {

    includes(item) {
        return !!item;
    }

}

//===========================================================================
// Window_StatusStates
//===========================================================================

class Window_StatusStates extends Window_Selectable {

    setActor(actor) {
        if (this._actor !== actor) {
            this._actor = actor;
            this.refresh();
        }
    }

    maxItems() {
        return this._actor.states().length;
    }

    itemHeight() {
        return this.lineHeight();
    }

    drawItem(index) {
        const state = this._actor.states()[index];

        if (state) {
            const rect = this.itemRect(index);

            this.drawText(state.name, rect.x, rect.y, rect.width);
        }
    }

}

//===========================================================================
// Sprite_StatusGauge
//===========================================================================

class Sprite_StatusGauge extends Sprite_Gauge {

    bitmapWidth() {
        return this._bitmapWidth || super.bitmapWidth();
    }

    setup(actor, type, width) {
        this._bitmapWidth = width;

        this.bitmap.destroy();

        this.createBitmap();

        super.setup(actor, type);

        this.redraw();
    }

    redraw() {
        super.redraw();

        if (this._statusType === 'exp' && !this.isValid()) {
            this.drawGauge();
            this.drawLabel();
            this.drawValue();
        }
    }

    measureLabelWidth() {
        this.setupLabelFont();
        const labels = [TextManager.hpA, TextManager.mpA, TextManager.tpA, TextManager.expA];
        const widths = labels.map(str => this.bitmap.measureTextWidth(str));
        return Math.ceil(Math.max(...widths));
    }

    label() {
        if (this._statusType === 'exp') {
            return TextManager.expA;
        }

        return super.label();
    }

    isValid() {
        if (this._battler && this._statusType === 'exp') {
            return !this._battler.isMaxLevel();
        }

        return super.isValid();
    }

    gaugeColor1() {
        if (this._statusType === 'exp') {
            return ColorManager.expGaugeColor1();
        }

        return super.gaugeColor1();
    }

    gaugeColor2() {
        if (this._statusType === 'exp') {
            return ColorManager.expGaugeColor2();
        }

        return super.gaugeColor2();
    }

    gaugeRate() {
        if (this._statusType === 'exp' && !this.isValid()) {
            return 1;
        }

        return super.gaugeRate();
    }

    currentValue() {
        if (this._battler && this._statusType === 'exp') {
            if (this._battler.isMaxLevel()) {
                return StatusMenuCoreParams.expGaugeMaxText;
            }

            return this._battler.currentExp();
        }

        return super.currentValue();
    }

    currentMaxValue() {
        if (this._battler && this._statusType === 'exp') {
            return this._battler.nextLevelExp();
        }

        return super.currentMaxValue();
    }

}

//===========================================================================
// ColorManager
//===========================================================================

ColorManager.expGaugeColor1 = function() {
    return this.textColor(StatusMenuCoreParams.expGaugeColor1);
};

ColorManager.expGaugeColor2 = function() {
    return this.textColor(StatusMenuCoreParams.expGaugeColor2);
};
