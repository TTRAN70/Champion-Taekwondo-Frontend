import fetchImages from "@/app/lib/fetchImages";
import type { ImageResults } from "@/app/models/Images";
import ImgContainer from "@/app/gallery/imgcontainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
};

export default async function Gallery() {
  const url = "http://res.cloudinary.com/dumnrb366/image/list/ctkd.json";
  const images: ImageResults | undefined = await fetchImages(url);
  if (!images)
    return (
      <h2 className="min-h-screen m-4 text-2xl font-bold flex justify-center mt-10">
        No Images Found
      </h2>
    );
  return (
    <main className="min-h-screen px-5 sm:px-12">
      <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">
        {images.resources.map((photo) => (
          <ImgContainer key={photo.public_id} photo={photo} />
        ))}
      </section>
    </main>
  );
}
