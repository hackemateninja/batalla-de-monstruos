import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Turn extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare attacker: string

  @column()
  declare defender: string

  @column()
  declare damage: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
