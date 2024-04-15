import { IData } from "@/types";

export interface IProductCard {
  id: string;
  data: IData;
  preview?: string;
  stars?: number;
  reviewCount?: number;
  averageScore?: number;
  pictureId?: string;
}
export type TProductCardDetails = Pick<IProductCard,  "stars" | "preview" | "reviewCount" | "averageScore" | "data">;
export type TProductCardTitle = Pick<IProductCard, "data"  >;
export type TProductCardImage = {
  src: string;
  alt: string;
};
export type TProductCardRating = {name: string} & Pick<IProductCard, "reviewCount" | "averageScore"  | "stars">;
export type TProductCardText = {
  children: string;
  fontSize?: "small" | "medium" | "large";
  color?: string;
};
