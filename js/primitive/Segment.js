class Segment {
    // 传入点对象
    constructor(point1, point2) {
        this.point1 = point1
        this.point2 = point2
    }
    draw(ctx, width = 2, color = 'black') {
        ctx.beginPath()
        ctx.lineWidth = width
        ctx.strokeStyle = color
        ctx.moveTo(this.point1.x, this.point1.y)
        ctx.lineTo(this.point2.x, this.point2.y)
        ctx.stroke()
    }
}