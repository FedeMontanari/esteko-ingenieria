// BIM Carousel Images
// Import all images with descriptive names for granular control over order

import bimPortada from "./Portada (1° foto_).png";
import bimWpc1 from "./WPC-1.jpg";
import bimLcc2 from "./LCC-2.jpg";
import bimLcc1 from "./LCC-1.jpg";
import bimCor4343 from "./COR434-3.png";
import bimCor4341 from "./COR434-1.png";
import bimMain from "./Bim.png";

// Export individual images for granular control
export {
  bimPortada,
  bimWpc1,
  bimLcc2,
  bimLcc1,
  bimCor4343,
  bimCor4341,
  bimMain,
};

// Default ordered array - you can modify this order as needed
export const bimCarouselImages = [
  bimPortada,
  bimMain,
  bimCor4341,
  bimCor4343,
  bimLcc1,
  bimLcc2,
  bimWpc1,
]; 