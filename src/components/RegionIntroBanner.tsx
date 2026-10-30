import React, { useState } from 'react';
import { Compass, Sparkles, ChevronDown, ChevronUp, MapPin, Award } from 'lucide-react';
import { RegionInfo } from '../types';
import { sound } from '../utils/sound';

interface RegionIntroBannerProps {
  region: RegionInfo;
  festivalsCount: number;
  unescoCount: number;
}

export const RegionIntroBanner: React.FC<RegionIntroBannerProps> = ({
  region,
  festivalsCount,
  unescoCount
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-800 p-3 sm:p-4 transition-all">
      <div className="flex items-center justify-between gap-3">
        
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 flex items-center justify-center flex-shrink-0">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-serif-culture font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                {region.name}
              </h1>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:inline">
                &bull; {region.tagline}
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              <span className="flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
                <MapPin className="w-3 h-3 text-red-500" />
                <span>{festivalsCount} điểm lễ hội</span>
              </span>
              {unescoCount > 0 && (
                <span className="flex items-center gap-1 font-medium text-amber-600 dark:text-amber-400">
                  <Award className="w-3 h-3" />
                  <span>{unescoCount} Di sản UNESCO</span>
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Toggle details */}
        <button
          onClick={() => {
            sound.playTap();
            setIsExpanded(!isExpanded);
          }}
          className="text-xs text-slate-500 hover:text-slate-800 dark:text-slate-400 flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <span className="hidden sm:inline">{isExpanded ? 'Thu gọn' : 'Tìm hiểu vùng'}</span>
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

      </div>

      {isExpanded && (
        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed animate-in fade-in slide-in-from-top-1">
          <p>{region.description}</p>
          <div className="mt-2 text-[11px] text-red-600 dark:text-red-400 flex items-center gap-1.5 font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Gợi ý: Nhấp vào từng điểm ghim trên bản đồ để xem chi tiết ngày âm lịch, nghi lễ và món ngon đặc sản.</span>
          </div>
        </div>
      )}
    </div>
  );
};
