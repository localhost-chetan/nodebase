interface IDamageble {
    takeDamage(amount: number): void;
}


class Character implements IDamageble {
    constructor(protected name: string, protected health: number) { }

    public takeDamage(amount: number): void {
        this.health -= amount;
        console.log(`${this.name} took ${amount} damage, remaining health: ${this.health}`);
    }

    public getHealth() {
        return this.health
    }
}


class Enemy extends Character {
    constructor(public name: string, public health: number, private attackPower: number) {
        super(name, health)
    }

    public attack(target: IDamageble): void {
        console.log(`${this.name} attacks with ${this.attackPower} units of power!`);
        target.takeDamage(this.attackPower)
    }
}


const hero = new Character("Gojo", 100)

const randomAttackPower = Math.floor(Math.random() * 30) + 5

const attackPower = randomAttackPower
const goblin = new Enemy("Goblin", 100, attackPower)

goblin.attack(hero)