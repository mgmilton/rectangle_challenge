const myRectangle = {

  // Coordinates of bottom-left corner
  leftX: 1,
  bottomY: 1,

  // Width and height
  width: 6,
  height: 3,

};

const secondRectangle = {
  leftX: 1,
  bottomY: 1,

  width: 6,
  height: 3,
}


class LoveIntersection {
  constructor(intersectRectangle){
    this.intersectRectangle = {
      leftX: 0,
      bottomY: 0,

      width: 0,
      height: 0,
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
    if (rectangle1MaxX <= rectanagle2MaxX){
      this.intersectRectangle.width = rectangle1MaxX - rectangle2.leftX
    } else {
      this.intersectRectangle.width = rectangle2MaxX - rectangle2.leftX
    }
  }

  setHeight(rectangle1, rectangle2){
    var rectangle1MaxY = rectangle1.bottomY + rectangle1.height
    var rectangle2MaxY = rectangle2.bottomY + rectangle2.height
    if (rectangle1MaxY <= rectanagle2MaxY){
      this.intersectRectangle.height = rectangle1MaxY - rectangle2.bottomY
    } else {
      this.intersectRectangle.height = rectangle2MaxY - rectangle2.bottomY
    }
  }

  findLove(rectangle1, rectangle2){
    setLeftX(rectangle1, rectangle2)
    setbottomY(rectangle1, rectangle2)
    setWidth(rectangle1, rectangle2)
    setHeight(rectangle1, rectangle2)
    return this.intersectRectangle
  }
}
