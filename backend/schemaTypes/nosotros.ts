export default {
  name: 'nosotros',
  title: 'Nosotros',
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
      title: 'Nosotros',
    },
    {
      name: 'commitment',
      title: 'compromiso',
    },
    {
      name: 'values',
      title: 'Valores',
    },
  ],
  fields: [
    {
      name: 'titleseo',
      title: 'Título para posicionar esta página en buscadores',
      type: 'string',
      description: '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 70)',
      group: 'seo',
      validation: (rule) => rule.max(70).warning('Se han rebasado los 70 caracteres recomendados'),
    },
    {
      name: 'descseo',
      title: 'Descripción para posicionar esta página en buscadores',
      type: 'text',
      description:
        '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 155)',
      group: 'seo',
      validation: (rule) =>
        rule.max(155).warning('Se han rebasado los 155 caracteres recomendados'),
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
      name: 'heroBtn',
      title: 'Texto del botón',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'general',
      title: 'Sobre nosotros',
      group: 'intro',
      type: 'object',
      fields: [
        {
          name: 'weAreH2',
          title: 'Primer titulo',
          type: 'string',
        },
        {
          name: 'weAreRichText1',
          title: 'Primera descripción de primer titulo',
          type: 'text',
        },
        {
          name: 'weAreRichText2',
          title: 'Segunda descripción de primer titulo',
          type: 'text',
        },
        {
          name: 'ourLocationH2',
          title: 'Segundo titulo',
          type: 'string',
        },
        {
          name: 'ourLocationRichText1',
          title: 'Primera descripción de segundo titulo',
          type: 'text',
        },
        {
          name: 'ourLocationRichText2',
          title: 'Segunda descripción de segundo titulo',
          type: 'text',
        },
      ],
    },
    {
      name: 'commitment',
      title: 'Nuestro compromiso',
      type: 'object',
      group: 'commitment',
      fields: [
        {
          name: 'img1',
          title: 'Primera imagen',
          type: 'image',
        },
        {
          name: 'desc',
          title: 'Texto',
          type: 'text',
        },
        {
          name: 'img2',
          title: 'Segunda imagen',
          type: 'image',
        },
      ],
    },
    {
      name: 'values',
      title: 'Nuestros Valores',
      group: 'values',
      type: 'object',
      fields: [
        {
          name: 'h2',
          title: 'Título principal',
          type: 'text',
        },
        {
          name: 'desc',
          title: 'Descripción de sección',
          type: 'text'
        },
        {
          name: 'list',
          title: 'Valores',
          type: 'array',
          of: [{
            type: 'object', fields: [
              {
                name: 'h3',
                title: 'titulillo',
                type: 'string'
              },
              {
                name: 'p',
                title: 'text',
                type: 'text'
              }
            ]
          }],
          validation: (rule: { max: (arg0: number) => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => rule.max(4).error('Máximo alcanzado')
        }
      ],
    },
  ],
}
