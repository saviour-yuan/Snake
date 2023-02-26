export default class ScorePanel {
    score = 0;
    level = 1;
    maxLevel: number;
    // 设置一个变量表示多少分升级
    upScore: number;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 分数方法
    addScore() {
        this.score++;
        this.scoreEle.innerText = this.score + "";
        if (this.score % 10 === 0) {
            this.levelUp();
        }
    }


    // 等级升级方法
    levelUp() {
        if (this.level < this.maxLevel)
            this.levelEle.innerText = ++this.level + "";


    }
}

