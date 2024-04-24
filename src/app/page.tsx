import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"

export default  function HomePage() {

  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>
      
    </main>
  );
}

async function Images(){
    
  const images = await db.query.images.findMany({
    orderBy:(model,{desc})=> desc(model.id)
  });

  return (
    <div className="flex flex-wrap gap-4">
    {[...images, ...images].map((image,index) => (
      <div key={image.id + '-'+ index } className="w-48">
        <img src={image.url} />
        <div>{image.name}</div>
      </div>
    ))}
  </div>
  )
}