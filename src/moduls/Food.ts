export default class Food {
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById("food")!;
    }

    // 定义一个获取失误X轴左边的方法
    get X() {
        return this.element.offsetLeft;
    }

    // 定义一个获取失误Y轴左边的方法
    get Y() {
        return this.element.offsetTop;
    }

    // 修改食物位置的方法
    change() {
        this.element.style.left = `${Math.round(Math.random() * 29)}0px`;
        this.element.style.top = `${Math.round(Math.random() * 29)}0px`;
    }
}