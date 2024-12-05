import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'products',
  title: 'Productos',
  type: 'document',
  groups: [
    {
        name: 'seo',
        title: 'SEO',
    },
    {
        name: 'product',
        title: 'Producto',
    },
    {
      name: 'page',
      title: 'Pagina de Producto',
    },
  ],
  fields: [
    defineField({
      name: 'titleseo',
      title: 'Título para posicionar esta página en buscadores',
      type: 'string',
      description: '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 70)',
      group: 'seo',
      validation: rule => rule.max(70).warning('Se han rebasado los 70 caracteres recomendados')
    }),
    defineField({
      name: 'descseo',
      title: 'Descripción para posicionar esta página en buscadores',
      type: 'text',
      description: '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 155)',
      group: 'seo',
      validation: rule => rule.max(155).warning('Se han rebasado los 155 caracteres recomendados')
    }),
    defineField({
      name: 'keyseo',
      title: 'Palabras clave para posicionar esta página en buscadores',
      type: 'text',
      description: '*Separar palabras con comas',
      group: 'seo'
    }),
    defineField({
      name: 'title',
      title: 'Nombre del producto',
      type: 'string',
      group: 'product'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: '*Siempre que se agregue o cambie el nombre del producto, dar clic al botón lateral: Generate',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'product'
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen principal del producto',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'product'
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Categoría del producto',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      options: {
        layout: 'tags'
      },
      group: 'product'
    }),
    defineField({
      name: 'year',
      title: 'Año de publicación',
      type: 'string',
      group: 'product'

    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'date',
      group: 'product'
    }),
    defineField({
      name: 'body',
      title: 'Descripción del producto',
      type: 'blockContent',
      group: 'product'
    }),
    /* Page intro */
    defineField({
      name: 'hero',
      title: 'Hero de pagina',
      group: 'page',
      type: 'object',
      fields: [
        {
          name: 'heroType',
          title: 'Tipo de vivienda',
          type: 'string'
        },
        {
          name: 'heroIntro',
          title: 'Texto de hero',
          type: 'string'
        },
        {
          name: 'heroWebLink',
          title: 'Link de la web',
          type: 'string'
        }
      ]
    }),
    defineField({
      name: 'twinDivisor',
      title: 'Divisor de dos imágenes',
      type: 'object',
      group: 'page',
      fields: [
        {
          name: 'img1',
          title: 'Primera imagen',
          type: 'image'
        },
        {
          name: 'img2',
          title: 'Segunda imagen',
          type: 'image'
        }
      ]
    }),
    defineField({
      name: 'general',
      title: 'Descripción general',
      group: 'page',
      type: 'object',
      fields: [
        {
          name: 'h2',
          title: 'Titulo',
          type: 'string'
        },
        {
          name: 'brochure',
          type: 'file'
        },
        {
          name: 'richText1',
          title: 'Primera descripción',
          type: 'text'
        },
        {
          name: 'richText2',
          title: 'Segunda descripción',
          type: 'text'
        }
      ]
    }),
    defineField({
      name: 'divisor',
      title: 'Divisor',
      type: 'image',
      group: 'page'
    }),
    defineField({
      name: 'location',
      title: 'Ubicación de la página',
      group: 'page',
      type: 'object',
      fields: [
        {
          name: 'desc',
          title: 'Descripción',
          type: 'blockContent',
        },
        {
          name: 'map',
          title: 'Embed de google map',
          type: 'text',
        },
        {
          name: 'linkLocation',
          title: 'Link de la ubicación',
          type: 'string',
        }
      ]
    }),
    defineField({
      name: 'amenities',
      title: 'Amenidades de la página',
      group: 'page',
      type: 'object',
      fields: [
        {
          name: 'desc',
          title: 'Descripción',
          type: 'blockContent',
        },
        {
          name: 'list',
          title: 'Amenidades',
          type: 'array',
          of: [{
            type: 'object', fields: [
              {
                name: 'name',
                title: 'Amenidad',
                type: 'string',
              },
              {
                name: 'img',
                title: 'Imagen',
                type: 'image',
              }
            ]
          }],
          options: {
            layout: 'grid'
          },
          validation: (rule) => rule.max(10).warning('Se han rebasado las 10 amenidades recomendadas')
        }
      ]
    }),
    defineField({
      name: 'gallery',
      title: 'Galería de la página',
      group: 'page',
      type: 'object',
      fields: [
        {
          name: 'list',
          title: 'Galería',
          type: 'array',
          of: [{ type: 'image' }],
          options: {
            layout: 'grid'
          }
        }
      ]
    })
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})