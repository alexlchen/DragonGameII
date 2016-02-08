var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // LABEL CLASS 
    var Label = (function (_super) {
        __extends(Label, _super);
        // CONSTRUCTOR METHOD
        function Label(labelString, labelFont, labelColour, x, y) {
            _super.call(this, labelString, labelFont, labelColour);
            //regX- the left offset for this display object's registration point
            this.regX = this.getBounds().width * 0.5; //return a rectangle representing this object's bounds in its local coordinate system
            //regY- the y offset for this display object's registration point
            this.regY = this.getBounds().height * 0.5; //0.5
            this.shadow = new createjs.Shadow("#000000", 5, 5, 10);
            this.x = x;
            this.y = y;
        }
        return Label;
    })(createjs.Text);
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map