import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Authors extends BaseSchema {
  protected tableName = 'authors'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('document')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
