export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/13287447-b552-47b3-80a9-d925ccbe7cf5-tgpa6w.png",
    "https://utfs.io/f/f51fa593-fc43-45f0-9402-a25a44961e44-44ihg8.png",
    "https://utfs.io/f/79247722-2127-4ea3-974c-e16a87f5bd76-k182tr.jpeg",
    "https://utfs.io/f/2a207b26-3caf-4855-a759-be89a78cfd2c-fwmi5k.png",
  ];

  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages,...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
