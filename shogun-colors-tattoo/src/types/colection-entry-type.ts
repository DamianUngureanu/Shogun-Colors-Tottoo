import { StaticImageData } from "next/image";

type CollectionEntryType = {
  collectionName: string;
  visible: number;
  images: StaticImageData[];
};
export default CollectionEntryType;
