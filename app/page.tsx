import ToolCard from "./components/ToolCard";

export default function Home() {
  const tools = [
    {
      title: "Base64 Encoder",
      description: "Base64のエンコード・デコードツール",
      href: "/base64",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 p-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.href} {...tool} />
          ))}
        </div>
      </div>
    </main>
  );
}
