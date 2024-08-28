import fetchImages from "@/app/lib/fetchImages";
import type { ImageResults } from "@/app/models/Images";
import ImgContainer from "@/app/gallery/imgcontainer";

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
      <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
        {images.resources.map((photo) => (
          <ImgContainer photo={photo} />
        ))}
      </section>
    </main>
  );
}
