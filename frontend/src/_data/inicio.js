 const client = require("../utils/sanityClient");
const processContent = require("../utils/contentProcessor");

module.exports = async function () {
  const data = await client.fetch(`*[_type == "inicio"]{
    titleseo,
    descseo,
    keyseo,
    heroH1,
    heroH2[]{
      ...,
      _type == 'image' => {
        "image": asset->{
          url,
          "alt": altText
        }
      }
    },
    heroP,
    heroBtn,
    heroImg{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    heroImgSecond{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    introH3,
    introH2,
    introRichText,
    introBtn,
    introImg1{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    introImg2{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    aboutVia{
      aboutViaH2,
      aboutViaRichText1,
      aboutViaRichText2,
      aboutViaDeadNumbers[]{
        number,
        text
        },
      aboutViaImg{
        "media": asset->{url},
        "alt": asset->{altText}
      },
    },
    ourMethod{
      ourMethodSteps[]{
        title,
        number,
        description
      },
      ourMethodH2,
      ourMethodRichText,
      ourMethodImg{
        "media": asset->{url},
        "alt": asset->{altText}
      },
    },
    testy{
      testyH2,
      testyList[]{
        name,
        text
      }
    },
    timeline{
       list[]->{ 
        title,
        publishedAt,
        year,
        mainImage{
          "media": asset->{url},
          "alt": asset->{altText}
        }
      }
    }, 
    recentProdRef{
      "recentProducts": recentProducts[]->{
        title,
    slug,
    publishedAt,
    "categories": categories[]->title,
    mainImage{
      "media": asset->{url},
      "alt": asset->{altText}
    },
      }
    }
  }`);

  await Promise.all(data.map(processContent)); // Procesa todo el contenido en cada objeto
  return data; // Devuelve el array con las imágenes y textos ya procesados
};
