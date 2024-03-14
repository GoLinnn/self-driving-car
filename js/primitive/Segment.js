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
    // 判断两条线是否相同
    // 注意判断两个线段是否相同的条件：
    // 线段端点1 = 线段端点1 && 线段端点2 = 线段端点2
    // 线段端点1 = 线段端点2 && 线段端点2 = 线段端点1
    // 所以用include来判断这种包含关系
    equals(seg) {
        return this.includes(seg.point1) && this.includes(seg.point2)
    }
    // 判断线段是否包含point点
    includes(point) {
        return this.point1.equals(point) || this.point2.equals(point)
    }
}