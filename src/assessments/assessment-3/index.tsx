import { Header } from "./components/header";

import { ProductToolbar } from "./components/product-toolbar";
import { ProductDataCenter } from "./components/product-data-center";

export const ProductExplorer = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container py-0 mx-auto sm:px-6 space-y-8">
        <Header />
        <div className="space-y-4">
          <ProductToolbar />
        </div>
        <ProductDataCenter />
      </div>
    </div>
  );
};
