Scene_Name.prototype.editWindowRect = function() {
    const inputWindowHeight = this.calcWindowHeight(9, true);
    const padding = $gameSystem.windowPadding();
    const ww = 500;
    const wh = 150
    const wx = (Graphics.boxWidth - ww) / 2;
    const wy = -50
    return new Rectangle(wx, wy, ww, wh);
};