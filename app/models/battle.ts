import Monster from '#models/monster'
import Turn from '#models/turn'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'

export default class Battle extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @hasOne(() => Monster)
  declare winner: HasOne<typeof Monster>

  @hasOne(() => Monster)
  declare losser: HasOne<typeof Monster>

  @hasMany(() => Turn)
  declare turns: HasMany<typeof Turn>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
