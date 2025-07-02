import vine from '@vinejs/vine'

export const createMonsterValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3).maxLength(100),
    image: vine.string().trim().url().minLength(10).maxLength(512),
    life: vine.number().withoutDecimals().min(0).max(100),
    attack: vine.number().withoutDecimals().min(0).max(100),
    defense: vine.number().withoutDecimals().min(0).max(100),
    speed: vine.number().withoutDecimals().min(0).max(100),
  })
)
