const client = require('../utils/sanityClient');
const processContent = require('../utils/contentProcessor');

module.exports = async function() {
  const data = await client.fetch(`*[_type == "nosotros"]{
    titleseo,
    descseo,
    keyseo,
    heroH1,
    heroH2,
    heroBtn,
    general{
      weAreH2,
      weAreRichText1,
      weAreRichText2,
      ourLocationH2,
      ourLocationRichText1,
      ourLocationRichText2
    },
    commitment{
      img1{
        "media": asset->{url},
        "alt": asset->{altText}
      },
      desc,
      img2{
        "media": asset->{url},
        "alt": asset->{altText}
      }
    },
    values{
      h2,
      desc,
      list[]{
        h3,
        p
      }
    }
  }`);

  await Promise.all(data.map(processContent)); // Procesa todo el contenido en cada objeto
  return data; // Devuelve el array con las imágenes y textos ya procesados
};