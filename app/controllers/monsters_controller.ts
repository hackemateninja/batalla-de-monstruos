import MonsterService from '#services/monster_service'
import { createMonsterValidator } from '#validators/monster'
import { type HttpContext } from '@adonisjs/core/http'

export default class MonstersController {
  async index({ inertia }: HttpContext) {
    return inertia.render('monsters/Index', { monsters: await MonsterService.get() })
  }

  async create({ inertia }: HttpContext) {
    return inertia.render('monsters/Create')
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createMonsterValidator)
    await MonsterService.save(payload)
    return response.redirect().toRoute('monsters')
  }

  async edit({ inertia, params }: HttpContext) {
    return inertia.render('monsters/Edit', { monster: await MonsterService.findById(params.id) })
  }

  async update({ params, request, response }: HttpContext) {
    const payload = await request.validateUsing(createMonsterValidator)

    await MonsterService.updateById(payload, params.id)

    return response.redirect().toRoute('monsters')
  }

  async destroy({ params, response }: HttpContext) {
    await MonsterService.delete(params.id)

    return response.redirect().toRoute('monsters')
  }
}
