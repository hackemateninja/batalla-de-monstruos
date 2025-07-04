import Battle from '#models/battle'

export class BattleService {
  static async get() {
    return Battle.all()
  }

  static async save() {}

  static async delete(id: number) {}
}
