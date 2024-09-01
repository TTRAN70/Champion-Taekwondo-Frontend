import type { Photo } from "@/app/models/Images";
import Image from "next/image";

type Props = {
  photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;
  return (
    <div
      className="w-[250px] justify-self-center"
      key={photo.public_id}
      style={{ gridRow: `span ${photoSpans}` }}
    >
      <div className="rounded-xl overflow-hidden group">
        <Image
          src={`https://res.cloudinary.com/dumnrb366/image/upload/v1621712847/${photo.public_id}`}
          alt="gallery image"
          width={photo.width}
          height={photo.height}
          className="group-hover:opacity-75"
          sizes="250px"
        />
      </div>
    </div>
  );
}
