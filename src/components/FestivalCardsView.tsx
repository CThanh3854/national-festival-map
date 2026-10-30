import React from 'react';
import { MapPin, Calendar, Bookmark, Award, ArrowUpRight, Navigation } from 'lucide-react';
import { Festival } from '../types';
import { CATEGORY_LABELS } from '../data/regions';
import { sound } from '../utils/sound';

interface FestivalCardsViewProps {
  festivals: Festival[];
  onSelectFestival: (festival: Festival) => void;
  onViewOnMap: (festival: Festival) => void;
  bookmarkedIds: string[];
  onToggleBookmark: (festivalId: string) => void;
}

export const FestivalCardsView: React.FC<FestivalCardsViewProps> = ({
  festivals,
  onSelectFestival,
  onViewOnMap,
  bookmarkedIds,
  onToggleBookmark
}) => {
  if (festivals.length === 0) {
    return (
      <div className="py-20 text-center max-w-md mx-auto px-4">
        <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto mb-4">
          <Calendar className="w-8 h-8" />
        </div>
        <h3 className="font-serif-culture text-xl font-bold text-slate-800 dark:text-white mb-2">
          Không tìm thấy lễ hội nào
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Hãy thử thay đổi từ khóa tìm kiếm hoặc bỏ bớt các bộ lọc thể loại, thời gian để khám phá thêm lễ hội khác.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {festivals.map((festival) => {
          const isSaved = bookmarkedIds.includes(festival.id);
          const catConfig = CATEGORY_LABELS[festival.category] || CATEGORY_LABELS.tradition;

          return (
            <div
              key={festival.id}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 hover:border-red-400/80 dark:hover:border-red-500/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => {
                sound.playChime(580);
                onSelectFestival(festival);
              }}
            >
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                <img
                  src={festival.image}
                  alt={festival.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                {/* Top Badges */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                  <span
                    className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full text-white backdrop-blur-md border border-white/20"
                    style={{ backgroundColor: `${catConfig.color}cc` }}
                  >
                    {catConfig.label}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      sound.playTap();
                      onToggleBookmark(festival.id);
                    }}
                    title={isSaved ? 'Bỏ lưu' : 'Lưu lễ hội'}
                    className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                      isSaved
                        ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30'
                        : 'bg-black/30 hover:bg-black/60 text-white'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Province & UNESCO at bottom of image */}
                <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1 font-medium text-rose-200 drop-shadow">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{festival.province}</span>
                  </span>

                  {festival.unescoRecognized && (
                    <span className="flex items-center gap-1 bg-amber-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      <Award className="w-3 h-3" />
                      <span>UNESCO</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[11px] font-semibold text-red-600 dark:text-red-400 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{festival.lunarDate}</span>
                  </div>

                  <h3 className="font-serif-culture font-bold text-lg text-slate-900 dark:text-white leading-snug group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {festival.name}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {festival.shortDescription}
                  </p>
                </div>

                {/* Card Action footer */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400 dark:text-slate-500">
                    {festival.regionName}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        sound.playTap();
                        onViewOnMap(festival);
                      }}
                      className="text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 font-medium flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="Xem vị trí trên bản đồ"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Xem bản đồ</span>
                    </button>

                    <button
                      className="text-red-600 dark:text-red-400 font-semibold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Chi tiết</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};
