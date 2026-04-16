import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const isAIChat = location.pathname === "/ai";
  const isMerchant = location.pathname === "/merchant";

  // Hide footer on merchant page as it has its own or stick bottom bar
  if (isMerchant) return null;

  return (
    <footer className={`w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center bg-surface-container-low dark:bg-gray-950 ${isAIChat ? "mt-12 opacity-80 hover:opacity-100" : "mt-20"}`}>
      <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
        <span className="text-lg font-bold text-primary dark:text-gray-100 mb-2 headline">DigiDO</span>
        <p className="text-sm text-outline max-w-xs text-center md:text-left">
          © 2026 DigiDO. The Empowered Curator. {isAIChat ? "" : "Memberdayakan UMKM melalui teknologi kurasi modern."}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <Link to="#" className="text-outline text-sm font-medium hover:text-primary transition-colors">Privacy Policy</Link>
        {!isAIChat && <Link to="#" className="text-outline text-sm font-medium hover:text-primary transition-colors">Terms of Service</Link>}
        <Link to="#" className="text-outline text-sm font-medium hover:text-primary transition-colors">Merchant Portal</Link>
        <Link to="#" className="text-outline text-sm font-medium hover:text-primary transition-colors">Contact Us</Link>
      </div>
    </footer>
  );
}
