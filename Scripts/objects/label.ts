module objects {
    // LABEL CLASS 
    export class Label extends createjs.Text {
        // CONSTRUCTOR METHOD
        constructor(labelString: string, labelFont: string, labelColour: string, x: number, y: number) {
            super(labelString, labelFont, labelColour);

            //regX- the left offset for this display object's registration point
            this.regX = this.getBounds().width * 0.5;  //return a rectangle representing this object's bounds in its local coordinate system
            //regY- the y offset for this display object's registration point
            this.regY = this.getBounds().height * 0.5; //0.5

            this.shadow = new createjs.Shadow("#000000", 5, 5, 10);
            this.x = x;
            this.y = y;
        }
    }
} 