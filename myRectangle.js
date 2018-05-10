var myRectangle = {

  // Coordinates of bottom-left corner
  leftX: 1,
  bottomY: 1,
  width: 2,
  height: 2,
};
var secondRectangle = {
  leftX: 1,
  bottomY: 4,

  width: 2,
  height: 2,
};


class LoveIntersection {
  constructor(intersectRectangle){
    this.intersectRectangle = {
      leftX: 0,
      bottomY: 0,

      width: 0,
      height: 0,
    }
  }

  noOverlap(rectangle1, rectangle2){
    var rectangle1MaxX = rectangle1.leftX + rectangle1.width
    var rectangle1MaxY = rectangle1.bottomY + rectangle1.height
    if (rectangle1MaxX <= rectangle2.leftX || rectangle1MaxY <= rectangle2.bottomY){
      return true;
    }
  }

  setLeftX(rectangle1, rectangle2){
    if (rectangle1.leftX <= rectangle2.leftX){
      this.intersectRectangle.leftX = rectangle2.leftX
    } else {
      this.intersectRectangle.leftX = rectangle1.leftx
    }
  }

  setBottomY(rectangle1, rectangle2){
    if (rectangle1.bottomY <= rectangle2.bottomY){
      this.intersectRectangle.bottomY = rectangle2.bottomY
    } else {
      this.intersectRectangle.bottomY = rectangle1.bottomY
    }
  }

  setWidth(rectangle1, rectangle2){
    var rectangle1MaxX = rectangle1.leftX + rectangle1.width
    var rectangle2MaxX = rectangle2.leftX + rectangle2.width
    if (rectangle1MaxX <= rectangle2MaxX){
      this.intersectRectangle.width = rectangle1MaxX - rectangle2.leftX
    } else {
      this.intersectRectangle.width = rectangle2MaxX - rectangle2.leftX
    }
  }

  setHeight(rectangle1, rectangle2){
    var rectangle1MaxY = rectangle1.bottomY + rectangle1.height
    var rectangle2MaxY = rectangle2.bottomY + rectangle2.height
    if (rectangle1MaxY <= rectangle2MaxY){
      this.intersectRectangle.height = rectangle1MaxY - rectangle2.bottomY
    } else {
      this.intersectRectangle.height = rectangle2MaxY - rectangle2.bottomY
    }
  }

  findLove(rectangle1, rectangle2){
    if (this.noOverlap(rectangle1, rectangle2) === true){
      return "There is no overlap between these rectangles"
    } else {
      this.setLeftX(rectangle1, rectangle2);
      this.setBottomY(rectangle1, rectangle2);
      this.setWidth(rectangle1, rectangle2);
      this.setHeight(rectangle1, rectangle2);
      return this.intersectRectangle
    }
  }
}
