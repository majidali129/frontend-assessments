export const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Product Catalog
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Browse and discover amazing products
          </p>
        </div>
      </div>
    </header>
  );
};
