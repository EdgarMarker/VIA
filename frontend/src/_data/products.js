const client = require('../utils/sanityClient');
const processContent = require('../utils/contentProcessor');

module.exports = async function() {
  const data = await client.fetch(`*[_type == "products"]{
    titleseo,
    descseo,
    keyseo,
    title,
    slug,
    publishedAt,
    year,
    body,
    colonia,
    hero{
      heroType,
      heroIntro,
      heroWebLink
    },
    twinDivisor{
      img1{
        "media": asset->{url},
        "alt": asset->{altText}
      },
      img2{
        "media": asset->{url},
        "alt": asset->{altText}
      }
    },
    general{
      h2,
      brochure,
      richText1,
      richText2
    },
    divisor{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    location{
      desc,
      map,
      linkLocation
    },
    amenities{
      desc,
      list[]{
        name,
        img{
          "media": asset->{url},
          "alt": asset->{altText}
        }
      }
    },
    gallery{
      list[]{   
        "media": asset->{url},
        "alt": asset->{altText}
      }
    },
    "categories": categories[]->title,
    "categoriesSlug": categories[]->slug,
    mainImage{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    body[]{
      ...,
      _type == 'image' => {
        "image": asset->{
          url,
          "alt": altText
        }
      },
    },
  }`);

  await Promise.all(data.map(processContent)); // Procesa todo el contenido en cada objeto
  return data; // Devuelve el array con las imágenes y textos ya procesados
};