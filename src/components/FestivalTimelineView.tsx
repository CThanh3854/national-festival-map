import React from 'react';
import { Calendar, MapPin, Sparkles, Navigation } from 'lucide-react';
import { Festival } from '../types';
import { CATEGORY_LABELS } from '../data/regions';
import { sound } from '../utils/sound';

interface FestivalTimelineViewProps {
  festivals: Festival[];
  onSelectFestival: (festival: Festival) => void;
  onViewOnMap: (festival: Festival) => void;
}

export const FestivalTimelineView: React.FC<FestivalTimelineViewProps> = ({
  festivals,
  onSelectFestival,
  onViewOnMap
}) => {
  // Group festivals by month (1 - 12)
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const getSeasonName = (m: number) => {
    if (m >= 1 && m <= 3) return 'Mùa Xuân • Mùa Lễ Hội Trẩy Hội Đầu Năm';
    if (m >= 4 && m <= 6) return 'Mùa Hè • Lễ Hội Biển, Cung Đình & Nghệ Thuật';
    if (m >= 7 && m <= 9) return 'Mùa Thu • Tết Trông Trăng & Lễ Hội Tín Ngưỡng';
    return 'Mùa Đông • Hội Mùa Vàng, Hoa Trái & Đại Ngàn';
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      
      {/* Intro Header */}
      <div className="text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950 px-3 py-1 rounded-full">
          Dòng thời gian văn hóa 12 tháng
        </span>
        <h2 className="font-serif-culture text-3xl font-extrabold text-slate-900 dark:text-white mt-3">
          Nhịp đập Lễ hội quanh năm
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl mx-auto">
          Khám phá chu kỳ lễ hội theo từng tháng trong năm, từ những ngày hội xuân rộn rã trống chiêng đất Bắc đến mùa hoa Tây Bắc và lễ hội sông nước phương Nam.
        </p>
      </div>

      {/* Timeline Stream */}
      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-32 space-y-12">
        {months.map((m) => {
          const monthFestivals = festivals.filter((f) => f.solarMonth === m);
          if (monthFestivals.length === 0) return null;

          return (
            <div key={m} className="relative group">
              {/* Left Month Badge */}
              <div className="sm:absolute sm:-left-36 top-0 flex sm:flex-col items-center sm:items-end gap-1.5 mb-3 sm:mb-0">
                <span className="font-serif-culture text-2xl font-black text-slate-900 dark:text-white">
                  Tháng {m}
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold">
                  Dương lịch
                </span>
              </div>

              {/* Center Dot Indicator */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-red-600 border-4 border-white dark:border-slate-950 shadow-sm" />

              {/* Month Header / Season Tag */}
              <div className="pl-6 sm:pl-8 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/60 px-2.5 py-1 rounded-lg">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{getSeasonName(m)}</span>
                </span>
              </div>

              {/* List of festivals in this month */}
              <div className="pl-6 sm:pl-8 space-y-4">
                {monthFestivals.map((festival) => {
                  const catConfig = CATEGORY_LABELS[festival.category] || CATEGORY_LABELS.tradition;

                  return (
                    <div
                      key={festival.id}
                      onClick={() => {
                        sound.playChime(600);
                        onSelectFestival(festival);
                      }}
                      className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 hover:border-red-400 dark:hover:border-red-500 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
                    >
                      <div className="flex gap-4 items-center">
                        <img
                          src={festival.image}
                          alt={festival.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover flex-shrink-0"
                        />
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span 
                              className="text-[10px] font-bold px-2 py-0.5 rounded text-white"
                              style={{ backgroundColor: catConfig.color }}
                            >
                              {catConfig.label}
                            </span>
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-red-500" />
                              <span>{festival.province}</span>
                            </span>
                          </div>

                          <h4 className="font-serif-culture font-bold text-base text-slate-900 dark:text-white hover:text-red-600 transition-colors">
                            {festival.name}
                          </h4>

                          <p className="text-xs text-red-600 dark:text-red-400 font-medium mt-0.5 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>Âm lịch: {festival.lunarDate}</span>
                          </p>

                          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-1 max-w-md">
                            {festival.shortDescription}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            sound.playTap();
                            onViewOnMap(festival);
                          }}
                          className="text-xs py-1.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-red-50 hover:text-red-600 dark:hover:bg-slate-700 font-medium transition-colors flex items-center gap-1"
                        >
                          <Navigation className="w-3.5 h-3.5" />
                          <span>Bản đồ</span>
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
