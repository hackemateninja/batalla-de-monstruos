import type { HttpContext } from '@adonisjs/core/http'

export default class MonstersController {
  async index({ inertia }: HttpContext) {
    return inertia.render('monsters/Index')
  }

  async create({ inertia }: HttpContext) {
    return inertia.render('monsters/Create')
  }

  async edit({ inertia }: HttpContext) {
    return inertia.render('monsters/Edit')
  }
}
