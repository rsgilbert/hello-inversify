import { Container } from 'inversify'
import 'reflect-metadata'
import { Katana, Ninja, Shuriken } from './ninja'

var container = new Container()
container.bind<Ninja>(Ninja).to(Ninja)
container.bind<Katana>(Katana).to(Katana)
container.bind<Shuriken>(Shuriken).to(Shuriken)


const n = container.resolve(Ninja)

n.fight()

