export default {
  name: 'inicio',
  title: 'Inicio',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'intro',
      title: 'Introducción',
    },
    {
      name: 'aboutVia',
      title: 'Sobre VIA',
    },
    {
      name: 'prod',
      title: 'Productos recientes',
    },
  ],
  fields: [
    {
      name: 'titleseo',
      title: 'Título para posicionar esta página en buscadores',
      type: 'string',
      description: '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 70)',
      group: 'seo',
      validation: (rule: {
        max: (arg0: number) => {(): any; new (): any; warning: {(arg0: string): any; new (): any}}
      }) => rule.max(70).warning('Se han rebasado los 70 caracteres recomendados'),
    },
    {
      name: 'descseo',
      title: 'Descripción para posicionar esta página en buscadores',
      type: 'text',
      description:
        '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 155)',
      group: 'seo',
      validation: (rule: {
        max: (arg0: number) => {(): any; new (): any; warning: {(arg0: string): any; new (): any}}
      }) => rule.max(155).warning('Se han rebasado los 155 caracteres recomendados'),
    },
    {
      name: 'keyseo',
      title: 'Palabras clave para posicionar esta página en buscadores',
      type: 'text',
      description: '*Separar palabras con comas',
      group: 'seo',
    },
    {
      name: 'heroH1',
      title: 'Subtítulo de apertura',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'heroH2',
      title: 'Título principal',
      type: 'blockContent',
      group: 'hero',
      description:
        '*Agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
    },
    {
      name: 'heroP',
      title: 'Descripción',
      type: 'text',
      group: 'hero',
    },
    {
      name: 'heroBtn',
      title: 'Texto del botón',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'heroImg',
      title: 'Imagen principal',
      type: 'image',
      group: 'hero',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'introH3',
      title: 'Subtítulo indicador para la introducción',
      type: 'string',
      group: 'intro',
    },
    {
      name: 'introH2',
      title: 'Título principal para la introducción',
      type: 'string',
      group: 'intro',
    },
    {
      name: 'introRichText',
      title: 'Descripción para la introducción',
      type: 'blockContent',
      group: 'intro',
    },
    {
      name: 'introBtn',
      title: 'Texto del botón',
      type: 'string',
      group: 'intro',
    },
    {
      name: 'introImg1',
      title: 'Imagen principal para la introducción',
      type: 'image',
      group: 'intro',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'introImg2',
      title: 'Imagen secundaria para la introducción',
      type: 'image',
      group: 'intro',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'aboutVia',
      title: 'Sobre VIA',
      group: 'aboutVia',
      type: 'object',
      fields: [
        {
          name: 'aboutViaH2',
          title: 'Título principal',
          type: 'string',
        },
        {
          name: 'aboutViaRichText1',
          title: 'Primera descripción',
          type: 'text',
        },
        {
          name: 'aboutViaRichText2',
          title: 'Segunda descripción',
          type: 'text',
        },
        {
          name: 'aboutViaDeadNumbers',
          title: 'Cantidades',
          type: 'array',
          of: [
            {
              name: '',
              type: 'object',
              fields: [
                {
                  name: 'number',
                  title: 'Cantidades',
                  type: 'number',
                },
                {
                  name: 'text',
                  title: 'Texto',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'recentProdRef',
      type: 'object',
      group: 'prod',
      fields: [
        {
          title: 'Productos recientes',
          name: 'recentProducts',
          type: 'array', // Cambiado de 'reference' a 'array'
          of: [{type: 'reference', to: [{type: 'products'}]}], // Especifica que es un array de referencias
        },
      ],
    },
  ],
}
