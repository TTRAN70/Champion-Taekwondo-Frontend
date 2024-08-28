import type { Photo } from "@/app/models/Images";
import Image from "next/image";

type Props = {
  photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
  return (
    <div
      className="overflow-hidden h-64 bg-gray-200 rounded-xl relative group"
      key={photo.public_id}
    >
      <Image
        src={`https://res.cloudinary.com/dumnrb366/image/upload/v1621712847/${photo.public_id}`}
        alt="gallery image"
        fill
        className="object-cover group-hover:opacity-75"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw 33vw"
      />
    </div>
  );
}
