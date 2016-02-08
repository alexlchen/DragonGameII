
module objects {
    // LABEL CLASS 
    export class Bitmap extends createjs.Bitmap {
        // CONSTRUCTOR METHOD
        constructor(imageUri: string, x: number, y: number) {
            super(imageUri);
            //regX- the left offset for this display object's registration point
            this.regX = this.getBounds().width * 1;  //return a rectangle representing this object's boundsin its local coordinate system

            //regY- the y offset for this display object's registration point
            this.regY = this.getBounds().height * 1; //0.5

            this.x = x;
            this.y = y;
        }
    }
} 


