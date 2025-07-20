import React from "react";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";

const PopupCareerExpert: React.FC<{ open?: boolean; onOpenChange?: (open: boolean) => void }> = ({ open, onOpenChange }) => {
  const controlled = typeof open === "boolean" && typeof onOpenChange === "function";
  return (
    <Dialog {...(controlled ? { open, onOpenChange } : {})}>
      {!controlled && (
        <DialogTrigger asChild>
          <button className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:bg-green-600 transition">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.57-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#fff"/></svg>
            Chat with us
          </button>
        </DialogTrigger>
      )}
      <DialogContent className="max-w-2xl p-0 rounded-2xl overflow-hidden flex flex-col sm:flex-row">
        {/* Left: Image */}
        <div className="hidden sm:block w-1/2 h-full">
          <img src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=400&q=80" alt="Career Expert" className="w-full h-full object-cover" />
        </div>
        {/* Right: Content */}
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center p-6 sm:p-10 bg-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center">Talk to Our Career Expert</h2>
          <p className="text-gray-600 mb-6 text-center">We'd love to hear from you</p>
          <a href="https://wa.me/917899304883" target="_blank" rel="noopener noreferrer" className="w-full mb-4">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 text-lg transition">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.57-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#fff"/></svg>
              WhatsApp us
            </button>
          </a>
          <div className="text-gray-400 font-bold mb-4">OR</div>
          <a href="https://forms.gle/iYHvjacm7pLbT12h9" target="_blank" rel="noopener noreferrer" className="w-full">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg text-lg transition">Enquire Now</button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PopupCareerExpert; 