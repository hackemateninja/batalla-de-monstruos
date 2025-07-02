import type { HttpContext } from '@adonisjs/core/http'

export default class BattlesController {
  async index({ inertia }: HttpContext) {
    return inertia.render('battles/Index')
  }

  async create({ inertia }: HttpContext) {
    return inertia.render('battles/Create')
  }

  async edit({ inertia }: HttpContext) {
    return inertia.render('battles/Edit')
  }
}
