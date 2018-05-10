const chai = require('chai');
import LoveIntersection from "../lib/myRectangle"

describe("myRectangle", () => {
  describe("attributes", () => {
    const love = new LoveIntersecton()

    it("has a blank rectangle", () => {
      expect(love.intersectRectangle).to.eql({})
    })
  })
})
