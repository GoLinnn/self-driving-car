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
    // 添加点
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
    addPoint(point) {
        this.points.push(point)
    }

    // 添加线
    tryAddSeg(seg) {
        if (!this.containsSeg(seg) && !seg.point1.equals(seg.point2)) {
            this.addSeg(seg)
            return true
        }
        return false
    }
    containsSeg(seg) {
        return this.segments.find((s) => s.equals(seg))
    }
    addSeg(seg) {
        this.segments.push(seg)
    }

    // 删除线
    removeSeg(seg) {
        this.segments.splice(this.segments.indexOf(seg), 1)
    }
    // 删除点
    removePoint(point) {
        // 删除包含该点的所有线
        // 获取segments数组副本，因为在迭代中修改数组（包括添加、修改、删除元素）都是不安全的行为，尤其是删除元素可能导致元素被跳过。
        // const segArray = this.segments.slice()
        // segArray.forEach((seg) => {
        //     if (seg.includes(point)) {
        //         this.removeSeg(seg)
        //     }
        // })
        // 返回数组，获取包含point的所有线段
        const segs = this.getSegmentWithPoint(point)
        for (const seg of segs) {
            this.removeSeg(seg)
        }
        this.points.splice(this.points.indexOf(point),
            1)
    }
    // 获取包含point的所有线段
    getSegmentWithPoint(point) {
        const segs = []
        for (const seg of this.segments) {
            if (seg.includes(point)) {
                segs.push(seg)
            }
        }
        return segs
    }
    // 移除所有点和线
    dispose() {
        this.points = []
        this.segments = []
    }
}