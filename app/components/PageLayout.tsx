type PageLayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <main className="min-h-screen bg-gray-950 p-8">
      <div className="mx-auto max-w-5xl">{children}</div>
    </main>
  );
}
