import React from 'react';
import { Search, X, Filter, Sparkles, Award } from 'lucide-react';
import { FestivalCategory, FestivalFilter } from '../types';
import { CATEGORY_LABELS, MONTHS_LABELS } from '../data/regions';
import { sound } from '../utils/sound';

interface MapControlsProps {
  filter: FestivalFilter;
  onChangeFilter: (updated: Partial<FestivalFilter>) => void;
  totalCount: number;
}

export const MapControls: React.FC<MapControlsProps> = ({
  filter,
  onChangeFilter,
  totalCount
}) => {
  const [showAdvancedFilters, setShowAdvancedFilters] = React.useState(false);

  const categories = Object.keys(CATEGORY_LABELS) as (FestivalCategory | 'all')[];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-2 pointer-events-auto">
      {/* Primary Search & Quick Filters Bar */}
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/80 dark:border-slate-800 p-2 sm:p-2.5 flex flex-wrap items-center gap-2 sm:gap-3 transition-all">
        
        {/* Search Input */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={filter.searchQuery}
            onChange={(e) => onChangeFilter({ searchQuery: e.target.value })}
            placeholder="Tìm tên lễ hội, tỉnh thành, nghi thức, món ngon..."
            className="w-full bg-slate-50 dark:bg-slate-800/80 text-xs sm:text-sm text-slate-800 dark:text-slate-100 pl-9 pr-8 py-2 rounded-xl border border-slate-200 dark:border-slate-700/80 focus:outline-none focus:border-red-500 dark:focus:border-red-500 transition-colors"
          />
          {filter.searchQuery && (
            <button
              onClick={() => onChangeFilter({ searchQuery: '' })}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Month Selector Dropdown */}
        <div className="relative">
          <select
            value={filter.selectedMonth}
            onChange={(e) => {
              const val = e.target.value === 'all' ? 'all' : Number(e.target.value);
              sound.playTap();
              onChangeFilter({ selectedMonth: val });
            }}
            className="bg-slate-50 dark:bg-slate-800/80 text-xs text-slate-700 dark:text-slate-200 py-2 pl-3 pr-7 rounded-xl border border-slate-200 dark:border-slate-700/80 focus:outline-none focus:border-red-500 cursor-pointer font-medium"
          >
            {MONTHS_LABELS.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
        </div>

        {/* Toggle UNESCO Only */}
        <button
          onClick={() => {
            sound.playTap();
            onChangeFilter({ onlyUnesco: !filter.onlyUnesco });
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
            filter.onlyUnesco
              ? 'bg-amber-500 text-white border-amber-500 shadow-sm shadow-amber-500/20'
              : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>UNESCO</span>
        </button>

        {/* Toggle Featured */}
        <button
          onClick={() => {
            sound.playTap();
            onChangeFilter({ onlyFeatured: !filter.onlyFeatured });
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
            filter.onlyFeatured
              ? 'bg-red-600 text-white border-red-600 shadow-sm shadow-red-500/20'
              : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Tiêu biểu</span>
        </button>

        {/* Filter Toggle for Category Pills */}
        <button
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          className={`p-2 rounded-xl text-xs border transition-all ${
            showAdvancedFilters || filter.selectedCategory !== 'all'
              ? 'bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800'
              : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
          }`}
          title="Lọc theo thể loại lễ hội"
        >
          <Filter className="w-4 h-4" />
        </button>

        {/* Counter */}
        <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 whitespace-nowrap pl-1">
          {totalCount} lễ hội
        </div>

      </div>

      {/* Expandable Category Filter Pills */}
      {showAdvancedFilters && (
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-800 p-2.5 flex flex-wrap items-center gap-1.5 sm:gap-2 animate-in fade-in slide-in-from-top-1 duration-150">
          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 mr-1 pl-1">
            Loại hình:
          </span>
          {categories.map((catKey) => {
            const config = CATEGORY_LABELS[catKey];
            const isActive = filter.selectedCategory === catKey;
            return (
              <button
                key={catKey}
                onClick={() => {
                  sound.playTap();
                  onChangeFilter({ selectedCategory: catKey });
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-150 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-red-600 text-white font-semibold shadow-sm shadow-red-500/20'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {catKey !== 'all' && (
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: isActive ? '#fff' : config.color }}
                  />
                )}
                <span>{config.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
