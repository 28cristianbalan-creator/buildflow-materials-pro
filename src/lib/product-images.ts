// Product image imports - add new product images here
import redClayBrick from "@/assets/products/red-clay-brick.jpg";
import solidClayBrick from "@/assets/products/solid-clay-brick.jpg";
import perforatedBrick from "@/assets/products/perforated-brick.jpg";
import fireClayBrick from "@/assets/products/fire-clay-brick.jpg";
import bcaBlock200 from "@/assets/products/bca-block-200.jpg";
import bcaBlock150 from "@/assets/products/bca-block-150.jpg";
import bcaAdhesive from "@/assets/products/bca-adhesive.jpg";
import bcaBlock100 from "@/assets/products/bca-block-100.jpg";
import washedSand from "@/assets/products/washed-sand.jpg";
import gravel from "@/assets/products/gravel.jpg";
import crushedStone from "@/assets/products/crushed-stone.jpg";
import riverSand from "@/assets/products/river-sand.jpg";

// Product image mapping - easy to manage and import
export const productImages = {
  'red-clay-brick': redClayBrick,
  'solid-clay-brick': solidClayBrick,
  'perforated-brick': perforatedBrick,
  'fire-clay-brick': fireClayBrick,
  'bca-block-200': bcaBlock200,
  'bca-block-150': bcaBlock150,
  'bca-adhesive': bcaAdhesive,
  'bca-block-100': bcaBlock100,
  'washed-sand': washedSand,
  'gravel': gravel,
  'crushed-stone': crushedStone,
  'river-sand': riverSand,
} as const;

export type ProductImageKey = keyof typeof productImages;

// Helper function to get product image
export const getProductImage = (imageKey: string): string => {
  return productImages[imageKey as ProductImageKey] || '';
};