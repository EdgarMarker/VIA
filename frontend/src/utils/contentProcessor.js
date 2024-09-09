const processImages = require('./imageProcessor');

// Función para procesar contenido recursivamente
async function processContent(item) {
  for (const key in item) {
    if (item[key] && typeof item[key] === 'object') {
      if (item[key].media && item[key].media.url) {
        item[key] = await processImages({
          url: item[key].media.url,
          alt: item[key].alt ? item[key].alt.altText : ''
        });
      } else if (isPortableTextBlock(item[key])) {
        item[key] = renderBlocks(item[key]);
      } else {
        await processContent(item[key]);
      }
    }
  }
}

function renderBlocks(blocks) {
  return blocks.map(block => {
    switch (block._type) {
      case 'block':
        return renderTextBlock(block);
      case 'image':
        return renderImageBlock(block);
      default:
        return `<div>Unrecognized block type: ${block._type}</div>`;
    }
  }).join('');
}

function renderTextBlock(block) {
  let tag = 'p'; // Establece un valor por defecto para la etiqueta

  // Asigna el tag HTML basado en el estilo del bloque
  switch (block.style) {
    case 'h1':
      tag = 'h1';
      break;
    case 'h2':
      tag = 'h2';
      break;
    case 'h3':
      tag = 'h3';
      break;
    case 'h4':
      tag = 'h4';
      break;
    case 'h5':
      tag = 'h5';
      break;
    case 'h6':
      tag = 'h6';
      break;
    case 'blockquote':
      tag = 'blockquote';
      break;
    case 'normal': // Asegúrate de que 'normal' se mapea a 'p'
    default:
      tag = 'p';
      break;
  }

  const htmlChildren = block.children.map(child => renderChild(child)).join('');
  return `<${tag}>${htmlChildren}</${tag}>`;
}
function renderImageBlock(block) {
  if (!block.image || !block.image.url) {
    console.log('Image data incomplete:', block);
    return '';
  }
  const url = block.image.url;
  const alt = block.image.alt || 'No description';
  return `<img src="${url}" alt="${alt}">`;
}

function renderChild(child) {
  let text = child.text;
  if (child.marks && child.marks.length) {
    child.marks.forEach(mark => {
      switch (mark) {
        case 'strong':
          text = `<strong>${text}</strong>`;
          break;
        case 'em':
          text = `<em>${text}</em>`;
          break;
        // Add more mark types as needed
      }
    });
  }
  return text;
}

function isPortableTextBlock(value) {
  return Array.isArray(value) ? value.some(isBlockOrImage) : isBlockOrImage(value);
}

function isBlockOrImage(item) {
  return ['block', 'image'].includes(item._type);
}

module.exports = processContent;