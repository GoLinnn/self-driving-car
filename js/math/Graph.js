class Graph {
    // 传入点数组和线数组，元素是点类和线类
    constructor(points = [], segments = []) {
        this.points = points
        this.segments = segments
    }

    draw(ctx) {
        for (const point of this.points) {
            // 绘制点
            point.draw(ctx)
        }

        for (const seg of this.segments) {
            // 绘制线
            seg.draw(ctx)
        }
    }
    // 先判断后添加
    tryAddPoint(point) {
        if (!this.containsPoint(point)) {
            this.addPoint(point)
            return true
        }
        return false
    }
    // 判断是否存在点
    containsPoint(point) {
        return this.points.find((p) => p.equals(point))
    }
    // 添加点
    addPoint(point) {
        this.points.push(point)
    }
}