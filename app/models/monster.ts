import Battle from '#models/battle'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'

export default class Monster extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column({})
  declare life: number

  @column({})
  declare attack: number

  @column({})
  declare defense: number

  @column({})
  declare speed: number

  @column({})
  declare image: string

  @belongsTo(() => Battle)
  declare battle: BelongsTo<typeof Battle>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
