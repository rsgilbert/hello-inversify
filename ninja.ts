import { Container, injectable } from "inversify";

@injectable()
export class Katana {
    public hit() {
        return 'cut!'
    }
}

@injectable()
export class Shuriken {
    public throw() {
        return 'pierce sound!'
    }
}

interface Warrior {
    fight: () => string;
}


@injectable()
export class Ninja implements Warrior {
    public constructor(private katana: Katana, private shuriken: Shuriken) {

    }

    fight() {
        console.log('fighting with katana. ', this.katana.hit())
        console.log('fighting with shuriken.', this.shuriken.throw())
        return 'Fought bravely!'
    }


}




