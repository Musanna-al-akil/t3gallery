import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queryies";
import { Button } from "./ui/button";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0 items-center justify-center">
      <div className="flex-shrink flex-grow">
        <img src={image.url} className="object-contain" />
      </div>
      <div className="flex h-full w-56 flex-shrink-0 flex-col gap-2 border-l">
        <div className="border-b p-2 text-center text-xl">{image.name}</div>
        <div className="flex flex-col p-2">
          <span>Uploaded By:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created On:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>

        <div className="p-2">
          <form action={async() => {
            "use server";

            await deleteImage(props.id)
          }}>
            <Button type="submit" variant={"destructive"}>
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
