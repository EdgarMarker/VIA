const client = require('../utils/sanityClient');
const processContent = require('../utils/contentProcessor');

module.exports = async function() {
  const data = await client.fetch(`*[_type == "nosotros"]{
    titleseo,
    descseo,
    keyseo,
    heroH1,
    heroH2,
    heroP,
    heroBtn,
    heroImg{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    introH3,
    introH2,
    introRichText,
    introImg1{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    introImg2{
      "media": asset->{url},
      "alt": asset->{altText}
    },
  }`);

  await Promise.all(data.map(processContent)); // Procesa todo el contenido en cada objeto
  return data; // Devuelve el array con las imágenes y textos ya procesados
};