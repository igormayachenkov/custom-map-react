

export class Walker{
    constructor(path){
        this.path = path
    }

    getPosition(){
        return this.path[this.path.length-1]
    }
    move(){
        const [x,y] = this.getPosition()
        this.path.push([x+generateRandomInt(),y+generateRandomInt()])
        return new Walker(this.path)
    }
}

const generateRandomInt = ()=>Math.trunc(40*(Math.random()))
