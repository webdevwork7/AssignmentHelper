
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ShippingPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 rainbow-bg-3">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Shipping Policy</h1>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Digital Delivery</h2>
              <p className="text-gray-600 leading-relaxed">
                All our services are delivered digitally through email and our secure client portal.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Timeline</h2>
              <p className="text-gray-600 leading-relaxed">
                Work is delivered according to the deadline specified in your order, often ahead of schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShippingPolicyPage;
