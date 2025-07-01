import Battle from '#models/battle'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
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

  @belongsTo(() => Battle)
  declare battle: BelongsTo<typeof Battle>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
