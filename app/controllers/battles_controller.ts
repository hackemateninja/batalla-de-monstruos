import type { HttpContext } from '@adonisjs/core/http'

export default class BattlesController {
  async index({ inertia }: HttpContext) {
    return inertia.render('battles/Index')
  }

  async create({ inertia }: HttpContext) {
    return inertia.render('battles/Create')
  }

  async show({ inertia, params }: HttpContext) {
    const id = params.id
    return inertia.render('battles/Show', { id })
  }
}
