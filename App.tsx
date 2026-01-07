
import React from 'react';
import { 
  Instagram, 
  Phone, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck
} from 'lucide-react';

// Custom WhatsApp Icon component that accepts className
const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

import { LinkButton } from './components/LinkButton';
import { LinkItem } from './types';

const App: React.FC = () => {
  const waNumber = "6282227896809";
  const waMessage = "Halo Kak, saya tertarik dengan info rumahnya. Boleh dikirimkan pricelist terbaru, dan detail spesifikasinya? Terima kasih.";
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  const links: LinkItem[] = [
    {
      id: 'wa-main',
      title: 'Konsultasi Gratis (WhatsApp)',
      subtitle: 'Fast Response: Tanya Stok & Cicilan',
      url: waUrl,
      icon: <WhatsAppIcon className="w-6 h-6" />,
      isPrimary: true
    },
    {
      id: 'instagram-link',
      title: 'Follow Instagram Kami',
      subtitle: '@tiar.property - Update Unit Harian',
      url: 'https://instagram.com/tiar.property',
      icon: <Instagram className="w-6 h-6" />
    }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden flex flex-col items-center">
      {/* Background Section with Sunset Aesthetic */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" 
          alt="Modern House at Sunset" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-sunset-overlay"></div>
      </div>

      {/* Content Wrapper */}
      <main className="relative z-10 w-full max-w-md px-6 pt-12 pb-20 flex flex-col items-center">
        
        {/* Brand Header: Text Left, Logo Right (Pulled up slightly) */}
        <div className="w-full mb-12 flex justify-between items-start px-2">
          <div className="flex flex-col items-start space-y-0.5">
            <span className="text-white text-[10px] tracking-[0.4em] font-medium uppercase opacity-90">Property</span>
            <span className="text-white text-[10px] tracking-[0.4em] font-medium uppercase opacity-90">Surabaya</span>
            <span className="text-white text-[10px] tracking-[0.4em] font-medium uppercase opacity-90">Sidoarjo</span>
          </div>
          <div className="-mt-3 transition-all duration-300">
            <img 
              src="https://lh3.googleusercontent.com/pw/AP1GczPcMjwHbEZ5Pl-GM5-qBmVQcREQ4DGyr2hjV5KteWuzVnf4MmXpf_g5iWHbpi1DFQGNx2XzxoISH2ofskDkRLQDQSAZ8WWzpMfeHla5Wlvr4YRVSD0=w2400" 
              alt="Tiar Property Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>

        {/* Profile Info Section */}
        <div className="w-full text-center mb-8 bg-slate-900/40 p-8 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl">
          <h3 className="text-white font-bold text-2xl mb-1 tracking-tight">Tiar.Property</h3>
          <p className="text-yellow-500 text-sm font-semibold mb-6 tracking-wide text-glow">Rumah Murah Surabaya, Sidoarjo, Jawa Timur</p>
          
          <div className="space-y-4 text-slate-200 text-sm text-left px-4">
             <div className="flex items-center gap-3">
               <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
               <span className="leading-relaxed">Stop Ngontrak, Saatnya Punya Rumah!</span>
             </div>
             <div className="flex items-center gap-3">
               <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
               <span className="leading-relaxed">Jawa Timur, Surabaya, Sidoarjo & sekitarnya</span>
             </div>
             <div className="flex items-center gap-3">
               <ShieldCheck className="w-4 h-4 text-blue-500 flex-shrink-0" />
               <span className="leading-relaxed font-medium">Legalitas Aman & Transparan</span>
             </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full space-y-4">
          {links.map((link) => (
            <LinkButton key={link.id} item={link} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center w-full">
          <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-6 font-medium">
            © 2026 TIAR.PROPERTY REAL ESTATE
          </p>
          <div className="flex justify-center items-center gap-6">
            <a 
              href="https://instagram.com/tiar.property" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-all p-2 rounded-full hover:bg-white/5 flex items-center justify-center"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href={waUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-all p-2 rounded-full hover:bg-white/5 flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-6 h-6" />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
