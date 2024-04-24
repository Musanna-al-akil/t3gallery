import { getImage } from "~/server/queryies";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  return (
    <div className="flex h-full w-full min-w-0 items-center justify-center">
      <div className="flex-shrink flex-grow">
        <img src={image.url} className="object-contain" />
      </div>
      <div className="flex h-full w-56 flex-shrink-0 flex-col border-l">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
