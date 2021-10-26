import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Genre from 'App/Models/Genre'

export default class GenreSeeder extends BaseSeeder {
  public async run() {
    await Genre.createMany([
      {
        name: 'Drama',
        description:
          'Stories  where conflicts and emotion are expressed through dialogue and action.',
      },
      {
        name: 'Fable',
        description:
          'Narration demonstrating a useful truth, especially in which animals speak as humans; legendary, supernatural tale.',
      },
      {
        name: 'Fantasy',
        description:
          'Fiction with strange or other worldly settings or characters; fiction which invites suspension of reality.',
      },
      {
        name: 'Horror',
        description:
          'Fiction in which events evoke a feeling of dread in both the characters and the reader.',
      },
      {
        name: 'Humor',
        description:
          'Fiction full of fun, fancy, and excitement, meant to entertain; but can be contained in all genres.',
      },
    ])
  }
}
