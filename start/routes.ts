/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'
const HomeController = () => import('#controllers/home_controller')
const MonstersController = () => import('#controllers/monsters_controller')
const BattlesController = () => import('#controllers/battles_controller')

router.get('/', [HomeController, 'index']).as('home')

router
  .group(() => {
    router.get('/', [MonstersController, 'index']).as('monsters')
    router.get('/create', [MonstersController, 'create']).as('monster.create')
    router.get('/:id/edit', [MonstersController, 'edit']).as('monster.edit')
  })
  .prefix('/monstruos')

router
  .group(() => {
    router.get('/', [BattlesController, 'index']).as('battles')
    router.get('/create', [BattlesController, 'create']).as('battle.create')
    router.get('/:id/edit', [BattlesController, 'edit']).as('battle.edit')
  })
  .prefix('/batallas')
