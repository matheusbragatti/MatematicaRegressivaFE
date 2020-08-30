export class AulaCardModel {
    public id: number;
    public name: string;
    public description: string;
    public currentProgress: number;
    public maxProgress: number;

    constructor(id:number, name:string, description:string, currenProgress:number, maxProgress: number){
        this.id = id;
        this.name = name;
        this.description = description;
        this.currentProgress = currenProgress;
        this.maxProgress = maxProgress;
    }
}