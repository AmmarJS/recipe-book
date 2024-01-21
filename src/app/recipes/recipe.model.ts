export class Recipe {
    public static counter: number = 0;
    public id: number;
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, description: string, imagePath: string) {
        this.id = Recipe.counter;
        Recipe.counter++;
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}