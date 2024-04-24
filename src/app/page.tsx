import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/9a4d133d-4549-453c-84e2-5747ce0f6585-k182tr.jpeg",
  "https://utfs.io/f/4372d630-0692-40b3-a836-980a2bf1c6ba-fwmi5k.png",
  "https://utfs.io/f/4d4f1cd3-1627-43ef-a8b9-e27190eb1e21-44ihg8.png",
  "https://utfs.io/f/d03e57ba-9356-4c2c-be02-d0e3a242c136-7ho5st.png",
];


const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          posts.map((post)=>(
            <div key={post.id}>{post.name}</div>
          ))
        }
        {[...mockImages, ...mockImages].map((image,index) => (
          <div key={image.id + '-'+ index } className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
