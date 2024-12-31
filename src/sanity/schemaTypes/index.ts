import { type SchemaTypeDefinition } from 'sanity'
import blog from '../blog'
import Author from '../Author'
import category from '../category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog,Author,category],
}
