import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './components/Toast';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { JsonLdMultiple, organizationSchema, websiteSchema } from './components/SEO';

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Products = lazy(() => import('./pages/Products').then(m => ({ default: m.Products })));
const Cart = lazy(() => import('./pages/Cart').then(m => ({ default: m.Cart })));
const JoinUs = lazy(() => import('./pages/JoinUs').then(m => ({ default: m.default })));
const GodaMasalaGuide = lazy(() => import('./pages/heritage/GodaMasalaGuide').then(m => ({ default: m.GodaMasalaGuide })));
const ThalipeethGuide = lazy(() => import('./pages/heritage/ThalipeethGuide').then(m => ({ default: m.ThalipeethGuide })));
const KolhapuriGuide = lazy(() => import('./pages/heritage/KolhapuriVsMalvani').then(m => ({ default: m.KolhapuriVsMalvaniGuide })));
const AmboliGuide = lazy(() => import('./pages/heritage/AmboliGuide').then(m => ({ default: m.AmboliGuide })));
const KokaniWadeGuide = lazy(() => import('./pages/heritage/KokaniWadeGuide').then(m => ({ default: m.KokaniWadeGuide })));
const Knowledge = lazy(() => import('./pages/Knowledge').then(m => ({ default: m.Knowledge })));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <CartProvider>
          <ToastProvider>
            {/* Global SEO Schemas - Organization + Website */}
            <JsonLdMultiple schemas={[organizationSchema, websiteSchema]} />

            <div className="min-h-screen bg-surface-50 flex flex-col">
              <Navbar />
              <main className="flex-grow pb-20 md:pb-0">
                <Suspense fallback={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
                  </div>
                }>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/join-us" element={<JoinUs />} />
                    <Route path="/knowledge" element={<Knowledge />} />
                    <Route path="/knowledge/goda-masala" element={<GodaMasalaGuide />} />
                    <Route path="/knowledge/thalipeeth-bhajani-complete-guide" element={<ThalipeethGuide />} />
                    <Route path="/knowledge/kolhapuri-vs-malvani" element={<KolhapuriGuide />} />
                    <Route path="/knowledge/amboli-pith-fermented-rice-flour-guide" element={<AmboliGuide />} />
                    <Route path="/knowledge/kokani-wade-vada-coastal-maharashtra-guide" element={<KokaniWadeGuide />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
              <BottomNav />
            </div>
          </ToastProvider>
        </CartProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;