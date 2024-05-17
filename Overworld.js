class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.context = this.canvas.getContext("2d")
    }

    init() {
        const image = new Image();
        image.onload = () => {
        this.context.drawImage(image,0,0)
        };
        image.src = "/images/maps/DemoLower.png"

        const shadow = new Image();
        shadow.onload = () => {
            this.context.drawImage(
                shadow,
                0, 0,
                32, 32,
                x * 16-8, y * 16-18,
                32, 32
            )
        }
        shadow.src = "/images/characters/shadow.png"

        const x = 5;
        const y = 6;
        const hero = new Image();
        hero.onload = () => {
            this.context.drawImage(
                hero,
                0, 0,
                32, 32,
                x * 16-8, y * 16-18,
                32, 32
            )
        };
        hero.src = "/images/characters/people/hero.png"
    }

}