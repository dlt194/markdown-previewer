import EditorPreview from "@/components/EditorPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        Markdown Previewer
      </h1>
      <EditorPreview />
    </main>
  );
}
