export default function Loading() {
  return (
    <div className="min-h-screen bg-cream-100 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-cream-300 border-t-orange-500 rounded-full animate-spin" />
        <p className="text-dark-500 font-medium">Memuat Berkomun...</p>
      </div>
    </div>
  );
}