import { BattleService } from '#services/battle_service'
import MonsterService from '#services/monster_service'
import type { HttpContext } from '@adonisjs/core/http'

export default class BattlesController {
  async index({ inertia }: HttpContext) {
    return inertia.render('battles/Index', { battles: await BattleService.get() })
  }

  async create({ inertia }: HttpContext) {
    return inertia.render('battles/Create', { monsters: await MonsterService.get() })
  }

  async show({ inertia, params }: HttpContext) {
    const id = params.id
    return inertia.render('battles/Show', { id })
  }
}
