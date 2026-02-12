import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function ToolCard({ title, description, href }: ToolCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-xl border border-gray-700 bg-gray-800 p-6 transition-all hover:border-gray-500 hover:bg-gray-750 hover:shadow-lg hover:shadow-gray-900/50 hover:-translate-y-0.5"
    >
      <h2 className="text-lg font-semibold text-white mb-2">{title}</h2>
      <p className="text-sm text-gray-400">{description}</p>
    </Link>
  );
}
