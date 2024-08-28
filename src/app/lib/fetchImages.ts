import type { ImageResults } from "@/app/models/Images";
import { ImagesSchemeWithPhotos } from "@/app/models/Images";

export default async function fetchImages(
  url: string
): Promise<ImageResults | undefined> {
  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error("Fetch images error!\n");

    const images: ImageResults = await res.json();

    //Parse data with Zod schema
    const parsedData = ImagesSchemeWithPhotos.parse(images);

    if (parsedData.resources.length === 0) return undefined;

    return parsedData;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}
