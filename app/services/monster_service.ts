import Monster from '#models/monster'

type MonsterType = {
  name: string
  life: number
  attack: number
  defense: number
  speed: number
  image: string
}

export default class MonsterService {
  // Your code here

  static async get() {
    return Monster.all()
  }

  static async save(monster: MonsterType) {
    return Monster.create(monster)
  }

  static async findById(id: number) {
    return Monster.findOrFail(id)
  }

  static async updateById(monster: MonsterType, id: number) {
    const newMonster = await Monster.findOrFail(id)

    newMonster.merge(monster)
    return newMonster.save()
  }

  static async delete(id: number) {
    const monster = await Monster.findOrFail(id)
    return monster.delete()
  }
}
