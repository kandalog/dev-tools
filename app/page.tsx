import ToolCard from "@/app/components/ToolCard";

export default function Home() {
  const tools = [
    {
      title: "CUR CSV Generator",
      description: "AWS CURのCSVファイルを生成するツール",
      href: "/cur-csv-generator",
    },
    {
      title: "Base64 Encoder",
      description: "Base64のエンコード・デコードツール",
      href: "/base64",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
        <ToolCard key={tool.href} {...tool} />
      ))}
    </div>
  );
}
