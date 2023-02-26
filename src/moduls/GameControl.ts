import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器,控制其他的所有类

export default class GameControl {
// 定义三个属性
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = "";

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    // 游戏的初始化,调用后游戏开始
    init() {
        // 绑定键盘案件按下的事件;
        document.addEventListener("keydown", this.woShiShei);
        this.run();
    }

    woShiShei(event: KeyboardEvent) {
        console.log(event.key);
        // 修改direction属性
        this.direction = event.key;
    }

    run() {
        /*
        *   根据方向（this.direction）来使蛇的位置改变
        *       向上 top 减少
        *       向下 top 增加
        *       向左  left 减少
        *       向右  left 增加
        * */
        // 获取蛇现在坐标
        let X = this.snake.X;
        let Y = this.snake.Y;


        // 根据按键方向来修改X值和Y值
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                // 向上移动 top 减少
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                // 向下移动 top 增加
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                // 向左移动 left 减少
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                // 向右移动 left 增加
                X += 10;
                break;
        }
        this.snake.X = X;
        this.snake.Y = Y;
        // 开启一个定时调用
        setTimeout(this.run.bind(this), 300);
    }

}