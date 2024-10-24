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
    "categories": categories[]->title,
    "categoriesSlug": categories[]->slug,
    mainImage{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    pageIntro{
      desc,
      linkWeb,
      img1{
        "media": asset->{url},
        "alt": asset->{altText}
      },
      img2{
        "media": asset->{url},
        "alt": asset->{altText}
      },
    },
    pageBrochure{
      desc1,
      desc2,
      fileBrochure{
        asset->{
          url
        }
      }
    },
    pageLocation{
      desc,
      map,
      linkLocation
    },
    pageAmenities{
      desc,
      amenities[]{
        name,
        img{
          "media": asset->{url},
          "alt": asset->{altText}
        }
      }
    },
    pageGallery{
      gallery[]{   
        "media": asset->{url},
        "alt": asset->{altText}
      }
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