import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Calendar, 
  Bookmark, 
  Navigation, 
  Share2, 
  Award, 
  Check, 
  CalendarPlus, 
  Sparkles,
  Utensils,
  BookOpen,
  HelpCircle,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Festival } from '../types';
import { CATEGORY_LABELS } from '../data/regions';
import { downloadIcsFile, getGoogleCalendarUrl } from '../utils/calendar';
import { sound } from '../utils/sound';

interface FestivalDrawerProps {
  festival: Festival | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (festivalId: string) => void;
}

export const FestivalDrawer: React.FC<FestivalDrawerProps> = ({
  festival,
  onClose,
  isBookmarked,
  onToggleBookmark
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'rituals' | 'festivities' | 'food' | 'tips'>('overview');

  if (!festival) return null;

  const catConfig = CATEGORY_LABELS[festival.category] || CATEGORY_LABELS.tradition;

  const handleBookmarkClick = () => {
    sound.playTap();
    onToggleBookmark(festival.id);
    if (!isBookmarked) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#ef4444', '#f59e0b', '#10b981']
      });
    }
  };

  const handleShare = () => {
    sound.playTap();
    const shareText = `${festival.name} - ${festival.province}\nÂm lịch: ${festival.lunarDate}\n${festival.shortDescription}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${festival.lat},${festival.lng}`;

  return (
    <div className="fixed inset-y-0 right-0 z-[8000] w-full sm:w-[480px] lg:w-[540px] bg-white dark:bg-slate-900 shadow-2xl border-l border-slate-200 dark:border-slate-800 flex flex-col transition-all duration-300 animate-in slide-in-from-right">
      
      {/* Header Image & Quick Badges */}
      <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden bg-slate-900">
        <img
          src={festival.image}
          alt={festival.name}
          className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        {/* Top bar over image */}
        <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span 
              className="text-xs px-2.5 py-1 rounded-full font-semibold backdrop-blur-md text-white border border-white/20"
              style={{ backgroundColor: `${catConfig.color}cc` }}
            >
              {catConfig.label}
            </span>
            {festival.unescoRecognized && (
              <span className="flex items-center gap-1 bg-amber-500/90 backdrop-blur-md text-white text-[11px] font-bold px-2 py-0.5 rounded-full border border-amber-300/40">
                <Award className="w-3 h-3" />
                <span>UNESCO</span>
              </span>
            )}
          </div>

          <button
            onClick={() => {
              sound.playTap();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom overlay text */}
        <div className="absolute bottom-4 inset-x-4 text-white z-10">
          <div className="flex items-center gap-1.5 text-xs text-rose-300 font-medium mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{festival.province} &bull; {festival.regionName}</span>
          </div>
          <h2 className="font-serif-culture text-2xl font-bold tracking-tight leading-tight">
            {festival.name}
          </h2>
          <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
            {festival.vietnameseTitle}
          </p>
        </div>
      </div>

      {/* Date & Location Fast Bar */}
      <div className="px-5 py-3 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-3 text-xs">
        <div className="flex items-start gap-2">
          <Calendar className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
          <div>
            <div className="font-bold text-slate-900 dark:text-slate-100">{festival.lunarDate}</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Dương lịch: {festival.solarPeriod}</div>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
          <div>
            <div className="font-bold text-slate-900 dark:text-slate-100">{festival.duration}</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">{festival.ticketFee}</div>
          </div>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="px-5 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm shadow-red-500/20"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Chỉ đường</span>
        </a>

        <button
          onClick={handleBookmarkClick}
          className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
            isBookmarked
              ? 'bg-rose-50 dark:bg-rose-950 text-rose-600 border-rose-300 dark:border-rose-800'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-slate-300'
          }`}
        >
          <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
          <span>{isBookmarked ? 'Đã lưu' : 'Lưu lại'}</span>
        </button>

        <button
          onClick={() => downloadIcsFile(festival)}
          title="Tải lịch .ics (Apple/Google Calendar)"
          className="py-2 px-3 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-slate-300 transition-colors flex items-center gap-1"
        >
          <CalendarPlus className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span className="hidden sm:inline">Thêm lịch</span>
        </button>

        <button
          onClick={handleShare}
          title="Sao chép thông tin"
          className="p-2 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 transition-colors"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Tabs navigation */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 text-xs font-medium px-4 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab('overview')}
          className={`py-2.5 px-3 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'overview'
              ? 'border-red-600 text-red-600 dark:text-red-400 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400'
          }`}
        >
          Tổng quan
        </button>
        <button
          onClick={() => setActiveTab('rituals')}
          className={`py-2.5 px-3 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'rituals'
              ? 'border-red-600 text-red-600 dark:text-red-400 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400'
          }`}
        >
          Phần Lễ ({festival.rituals.length})
        </button>
        <button
          onClick={() => setActiveTab('festivities')}
          className={`py-2.5 px-3 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'festivities'
              ? 'border-red-600 text-red-600 dark:text-red-400 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400'
          }`}
        >
          Phần Hội ({festival.festivities.length})
        </button>
        <button
          onClick={() => setActiveTab('food')}
          className={`py-2.5 px-3 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'food'
              ? 'border-red-600 text-red-600 dark:text-red-400 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400'
          }`}
        >
          Ẩm thực ({festival.specialties.length})
        </button>
        <button
          onClick={() => setActiveTab('tips')}
          className={`py-2.5 px-3 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'tips'
              ? 'border-red-600 text-red-600 dark:text-red-400 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400'
          }`}
        >
          Cẩm nang
        </button>
      </div>

      {/* Tab Content Body (Scrollable) */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5 text-slate-700 dark:text-slate-300">
        
        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-4">
            <div>
              <h3 className="font-serif-culture text-base font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-red-600" />
                <span>Ý nghĩa văn hóa</span>
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {festival.description}
              </p>
            </div>

            <div>
              <h3 className="font-serif-culture text-base font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Nguồn gốc & Lịch sử</span>
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-800">
                {festival.history}
              </p>
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
              <span>Địa chỉ chi tiết: {festival.address}</span>
            </div>
          </div>
        )}

        {/* TAB 2: RITUALS */}
        {activeTab === 'rituals' && (
          <div className="space-y-3">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Phần Lễ là linh hồn của ngày hội, thể hiện đạo lý "Uống nước nhớ nguồn", kính ngưỡng thần linh và tiền nhân:
            </p>
            <div className="space-y-2.5">
              {festival.rituals.map((ritual, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 font-bold text-xs flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                    {ritual}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: FESTIVITIES */}
        {activeTab === 'festivities' && (
          <div className="space-y-3">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Phần Hội sôi nổi, gắn kết cộng đồng với những điệu ca, trò chơi dân gian rộn ràng tiếng cười:
            </p>
            <div className="space-y-2.5">
              {festival.festivities.map((festivity, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-800/30">
                  <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    {festivity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: FOOD / SPECIALTIES */}
        {activeTab === 'food' && (
          <div className="space-y-3">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Món ngon đặc sản cổ truyền không thể bỏ lỡ khi ghé thăm mùa lễ hội:
            </p>
            <div className="grid grid-cols-1 gap-2.5">
              {festival.specialties.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-800/30">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 flex items-center justify-center flex-shrink-0">
                    <Utensils className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: TIPS */}
        {activeTab === 'tips' && (
          <div className="space-y-3">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Lưu ý để có chuyến trẩy hội văn minh, an toàn và trọn vẹn niềm vui:
            </p>
            <div className="space-y-2.5">
              {festival.tips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-800/30">
                  <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {tip}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Footer link to Google Calendar */}
      <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500">
        <a 
          href={getGoogleCalendarUrl(festival)} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-red-600 dark:text-red-400 font-semibold hover:underline inline-flex items-center gap-1"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Mở trực tiếp trên Google Calendar</span>
        </a>
      </div>

    </div>
  );
};
