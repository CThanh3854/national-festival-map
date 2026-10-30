import React from 'react';
import { X, Compass, Globe, Award, Calendar, MapPin, Heart, BookOpen, ShieldCheck } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800">
        
        {/* Header */}
        <div className="relative p-6 bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white flex-shrink-0">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-red-600 via-rose-500 to-amber-500 flex items-center justify-center shadow-lg shadow-red-500/30">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-serif-culture text-xl font-extrabold tracking-tight">
                  Bản Đồ Lễ Hội
                </h2>
                <p className="text-xs text-rose-300 font-medium">
                  Di sản Văn hóa Việt Nam & Quốc tế
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
          
          {/* Mission */}
          <div>
            <h3 className="font-serif-culture text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-red-600" />
              <span>Sứ mệnh dự án</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              <strong>Bản Đồ Lễ Hội</strong> là nền tảng số hóa bản đồ di sản văn hóa, kết nối cộng đồng với kho tàng lễ hội truyền thống ngàn đời của dân tộc Việt Nam cùng những kỳ lễ hội ngoạn mục trên khắp thế giới.
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="font-serif-culture text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Tính năng nổi bật</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800 flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-800 dark:text-white">Bản đồ Vệ tinh Toàn cầu</div>
                  <div className="text-slate-500 dark:text-slate-400 mt-0.5">Tích hợp lớp ảnh vệ tinh Maxar / Esri và địa danh ranh giới chi tiết.</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800 flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-800 dark:text-white">Lịch Âm & Dương Song hành</div>
                  <div className="text-slate-500 dark:text-slate-400 mt-0.5">Tra cứu chính xác thời gian trẩy hội theo lịch cổ truyền và dương lịch.</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800 flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-800 dark:text-white">Chỉ đường & Xuất Lịch (.ics)</div>
                  <div className="text-slate-500 dark:text-slate-400 mt-0.5">Định vị tọa độ thực tế, dẫn đường Google Maps và nhắc hẹn sự kiện.</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-800 dark:text-white">Không cần Khóa API</div>
                  <div className="text-slate-500 dark:text-slate-400 mt-0.5">100% mã nguồn mở & dữ liệu công cộng, vận hành mượt mà phi lợi nhuận.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Regional coverage */}
          <div>
            <h3 className="font-serif-culture text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>Phạm vi khám phá</span>
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Dữ liệu bao phủ từ <strong>Đồng Bằng Bắc Bộ</strong> (cái nôi văn minh sông Hồng), <strong>Tây Bắc - Đông Bắc</strong> (sắc màu đại ngàn), <strong>Cố Đô & Miền Trung</strong> (cung đình và biển đảo), <strong>Đại Ngàn Tây Nguyên</strong> (không gian cồng chiêng), <strong>Phương Nam & Miền Tây</strong> (phóng khoáng sông nước) đến <strong>Lễ Hội Quốc Tế</strong> (Songkran, Hanami, Rio Carnival, Oktoberfest...).
            </p>
          </div>

          {/* Community pledge */}
          <div className="p-4 rounded-2xl bg-red-50/70 dark:bg-red-950/30 border border-red-200/60 dark:border-red-900/40 text-xs text-slate-700 dark:text-slate-300">
            <div className="font-bold text-red-700 dark:text-red-400 mb-1 flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Gìn giữ & Lan tỏa Di sản</span>
            </div>
            Dự án hoàn toàn miễn phí, xây dựng vì tình yêu lịch sử, văn hóa dân gian và nhằm phục vụ cộng đồng những người trân trọng giá trị truyền thống.
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold hover:bg-slate-800 transition-colors"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
};
