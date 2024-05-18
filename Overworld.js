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

        //Place some game objects
        const hero = new GameObject({
            x: 5,
            y: 6,

        })

        const npc1 = new GameObject({
            x: 10,
            y: 8,
            src: "/images/characters/people/npc1.png"
        })

        setTimeout(() => {
            hero.sprite.draw(this.context)
            npc1.sprite.draw(this.context)
        }, 200) 
        
    }

}