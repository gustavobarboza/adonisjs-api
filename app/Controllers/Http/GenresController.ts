import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Genre from 'App/Models/Genre'
import CreateGenreValidator from 'App/Validators/CreateGenreValidator'

export default class GenresController {
  public async index({ response }: HttpContextContract) {
    const genres = await Genre.all()
    response.ok(genres)
  }

  public async store({ request, response }: HttpContextContract) {
    await request.validate(CreateGenreValidator)
    const newGenre = await Genre.create(request.body())

    response.created({ id: newGenre.id })
  }

  public async show({ request, response }: HttpContextContract) {
    const id = request.param('id')
    response.ok(await Genre.findOrFail(id))
  }

  public async update({ request, response }: HttpContextContract) {
    await request.validate(CreateGenreValidator)
    const newGenreInfo = request.body()
    await request.validate(CreateGenreValidator)
    const genre = await Genre.findOrFail(request.param('id'))

    genre.name = newGenreInfo.name
    genre.description = newGenreInfo.description

    await genre.save()

    response.noContent()
  }

  public async destroy({ request, response }: HttpContextContract) {
    const genreId = request.param('id')

    const genre = await Genre.findOrFail(genreId)

    await genre.delete()

    response.noContent()
  }
}
