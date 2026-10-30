import React from 'react';
import { Compass, Heart, ArrowUp, Globe, MapPin, Award, BookOpen, ShieldCheck } from 'lucide-react';
import { RegionId } from '../types';
import { REGIONS } from '../data/regions';
import { sound } from '../utils/sound';

interface FooterProps {
  onSelectRegion: (region: RegionId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectRegion }) => {
  const scrollToTop = () => {
    sound.playTap();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors">
      
      {/* Top Banner with Stats / Highlights */}
      <div className="border-b border-slate-800/80 bg-slate-950/60 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-950 text-red-400 flex items-center justify-center flex-shrink-0 border border-red-800/40">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Di sản Văn hóa Phi vật thể</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Tôn vinh các lễ hội được UNESCO và Bộ Văn hóa, Thể thao và Du lịch ghi danh bảo tồn.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-emerald-800/40">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Bản đồ số & Vệ tinh Toàn cảnh</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Hệ thống định vị tọa độ thực tế, hỗ trợ dẫn đường chỉ lối và khám phá ảnh vệ tinh chi tiết.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-950 text-amber-400 flex items-center justify-center flex-shrink-0 border border-amber-800/40">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Văn hóa Trẩy hội Văn minh</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Lan tỏa tinh thần trẩy hội an lành, giữ gìn môi trường xanh và bảo vệ không gian di tích.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-red-500/20">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-serif-culture font-extrabold text-xl text-white tracking-tight">
                Bản Đồ Lễ Hội
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cổng tra cứu và khám phá trực quan lễ hội truyền thống, văn hóa dân gian vùng miền Việt Nam cùng các kỳ lễ hội ngoạn mục trên khắp thế giới.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span>Dữ liệu địa lý & văn hóa cập nhật liên tục</span>
            </div>
          </div>

          {/* Column 2: Regional Navigation */}
          <div>
            <h4 className="font-serif-culture text-sm font-bold text-white uppercase tracking-wider mb-3">
              Vùng Miền Lễ Hội
            </h4>
            <ul className="space-y-2 text-xs">
              {REGIONS.map((region) => (
                <li key={region.id}>
                  <button
                    onClick={() => {
                      sound.playTap();
                      onSelectRegion(region.id);
                      scrollToTop();
                    }}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 py-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                    <span>{region.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Cultural Guides */}
          <div>
            <h4 className="font-serif-culture text-sm font-bold text-white uppercase tracking-wider mb-3">
              Cẩm Nang & Trải Nghiệm
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <BookOpen className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>Tra cứu song hành Lịch Âm & Lịch Dương chính xác</span>
              </li>
              <li className="flex items-start gap-2">
                <Compass className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Chỉ đường trực tiếp qua Google Maps đến tọa độ lễ hội</span>
              </li>
              <li className="flex items-start gap-2">
                <Award className="w-3.5 h-3.5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Xuất file lịch (.ics) đồng bộ nhắc nhở sự kiện</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-3.5 h-3.5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span>Xem địa hình thực tế bằng lớp ảnh Vệ tinh Maxar / Esri</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Community Contribution & Notice */}
          <div>
            <h4 className="font-serif-culture text-sm font-bold text-white uppercase tracking-wider mb-3">
              Cộng Đồng & Di Sản
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Mỗi lễ hội là một kho tàng lịch sử và ký ức của nhân dân. Mọi người đều có thể đóng góp lễ hội quê hương mình để cùng nhau làm giàu bản đồ văn hóa chung.
            </p>
            <div className="mt-4 p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-[11px] text-slate-300">
              <span>Được thiết kế vì tình yêu văn hóa & lịch sử dân tộc. Miễn phí và phi thương mại.</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} Bản Đồ Lễ Hội Việt Nam & Quốc Tế. Dành cho cộng đồng yêu văn hóa.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <span>Thực hiện với</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
              <span>tinh thần gìn giữ di sản</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors flex items-center gap-1"
              title="Về đầu trang"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline text-xs">Đầu trang</span>
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
};
