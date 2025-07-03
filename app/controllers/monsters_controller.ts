import Monster from '#models/monster'
import { createMonsterValidator } from '#validators/monster'
import { type HttpContext } from '@adonisjs/core/http'

export default class MonstersController {
  async index({ inertia }: HttpContext) {
    return inertia.render('monsters/Index', { monsters: await Monster.all() })
  }

  async create({ inertia }: HttpContext) {
    return inertia.render('monsters/Create')
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createMonsterValidator)
    await Monster.create(payload)
    return response.redirect('/monstruos')
  }

  async edit({ inertia, params }: HttpContext) {
    return inertia.render('monsters/Edit', { monster: await Monster.findOrFail(params.id) })
  }

  async update({ params, request, response }: HttpContext) {
    const payload = await request.validateUsing(createMonsterValidator)
    const monster = await Monster.findOrFail(params.id)

    monster.merge(payload)
    await monster.save()
    return response.redirect('/monstruos')
  }

  async destroy({ params, response }: HttpContext) {
    const monster = await Monster.findOrFail(params.id)
    await monster.delete()

    return response.redirect('/monstruos')
  }
}
