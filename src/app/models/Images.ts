import { z } from "zod";

const BasicImageSchema = z.object({
  updated_at: z.string(),
});

const PhotoSchema = z.object({
  public_id: z.string(),
  width: z.number(),
  height: z.number(),
});

export const ImagesSchemeWithPhotos = BasicImageSchema.extend({
  resources: z.array(PhotoSchema),
});

export type Photo = z.infer<typeof PhotoSchema>;
export type ImageResults = z.infer<typeof ImagesSchemeWithPhotos>;

/*resources: [
    {
      public_id: '433653938_882201617039790_5345723908420730766_n_jhblvy',
      width: 949,
      height: 960,
      alt: 'galleryPicture'
    }, */
