/*:
 * @target MZ
 * @plugindesc Customize text outline thickness and color for RPG Maker MZ.
 *
 * @param Outline Thickness
 * @type number
 * @min 0
 * @default 4
 * @desc Default thickness of the text outline.
 *
 * @param Outline Color
 * @type string
 * @default rgba(0, 0, 0, 0.5)
 * @desc Default color of the text outline in CSS format (e.g., "rgba(0,0,0,0.5)" or "#000000").
 *
 * @help
 * This plugin allows you to customize the thickness and color of text outlines.
 * You can configure the default settings in the plugin parameters and override
 * them in your game using plugin commands.
 *
 * Plugin Commands:
 *   SetOutlineThickness [value]  - Set the outline thickness.
 *   SetOutlineColor [color]      - Set the outline color (CSS format).
 */

(() => {
    const pluginName = "CustomTextOutline";

    const parameters = PluginManager.parameters(pluginName);
    let outlineThickness = Number(parameters["Outline Thickness"] || 4);
    let outlineColor = String(parameters["Outline Color"] || "rgba(0, 0, 0, 0.5)");

    const _Window_Base_resetTextColor = Window_Base.prototype.resetTextColor;
    Window_Base.prototype.resetTextColor = function () {
        _Window_Base_resetTextColor.call(this);
        this.contents.outlineWidth = outlineThickness;
        this.contents.outlineColor = outlineColor;
    };

    const pluginCommands = {
        SetOutlineThickness: (args) => {
            const value = Number(args[0]);
            if (!isNaN(value)) {
                outlineThickness = value;
            }
        },
        SetOutlineColor: (args) => {
            const color = args.join(" ");
            if (color) {
                outlineColor = color;
            }
        },
    };

    PluginManager.registerCommand(pluginName, "SetOutlineThickness", (args) => {
        pluginCommands.SetOutlineThickness(args);
    });

    PluginManager.registerCommand(pluginName, "SetOutlineColor", (args) => {
        pluginCommands.SetOutlineColor(args);
    });
})();
