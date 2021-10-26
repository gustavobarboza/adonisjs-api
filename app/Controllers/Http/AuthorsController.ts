import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthorsController {
  public async index(ctx: HttpContextContract) {
    return 'Show all authors'
  }

  public async store(ctx: HttpContextContract) {
    console.log(ctx)
    return 'create a new author'
  }

  public async show(ctx: HttpContextContract) {
    return 'show a single author'
  }

  public async update({ request }: HttpContextContract) {
    const body = request.body()
    console.log(body)
    return `update author with id ${request.param('id')}`
  }

  public async destroy(ctx: HttpContextContract) {
    return 'delete an author'
  }
}
