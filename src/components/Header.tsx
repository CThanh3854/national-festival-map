import React from 'react';
import { 
  Map as MapIcon, 
  Grid, 
  Calendar, 
  Info, 
  Compass,
  Layers
} from 'lucide-react';
import { RegionId, ViewMode, MapTheme } from '../types';
import { REGIONS } from '../data/regions';

interface HeaderProps {
  selectedRegion: RegionId;
  onSelectRegion: (region: RegionId) => void;
  viewMode: ViewMode;
  onSelectViewMode: (mode: ViewMode) => void;
  bookmarkedCount?: number;
  onToggleBookmarksFilter?: () => void;
  isOnlyBookmarks?: boolean;
  onOpenAboutModal: () => void;
  isDark?: boolean;
  onToggleDark?: () => void;
  mapTheme: MapTheme;
  onChangeMapTheme: (theme: MapTheme) => void;
}

export const Header: React.FC<HeaderProps> = ({
  selectedRegion,
  onSelectRegion,
  viewMode,
  onSelectViewMode,
  onOpenAboutModal,
  mapTheme,
  onChangeMapTheme
}) => {
  const [showThemeMenu, setShowThemeMenu] = React.useState(false);

  return (
    <header className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 sticky top-0 z-[1200] transition-colors shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-red-600 via-rose-500 to-amber-500 flex items-center justify-center text-white shadow-md shadow-red-500/20">
            <Compass className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif-culture font-extrabold text-slate-900 dark:text-white text-lg tracking-tight">
                Bản Đồ Lễ Hội
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
              Khám phá tinh hoa lễ hội văn hóa Việt Nam & Quốc tế
            </p>
          </div>
        </div>

        {/* Region Switcher Pills (Desktop & Tablet) */}
        <div className="hidden lg:flex items-center bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
          {REGIONS.map((region) => {
            const isActive = selectedRegion === region.id;
            return (
              <button
                key={region.id}
                onClick={() => onSelectRegion(region.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 ${
                  isActive
                    ? 'bg-white dark:bg-slate-700 text-red-600 dark:text-red-400 font-semibold shadow-sm shadow-slate-200 dark:shadow-none'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {region.name}
              </button>
            );
          })}
        </div>

        {/* View Mode Toggle & Quick Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 relative z-[1250]">
          
          {/* View Mode Switcher */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
            <button
              onClick={() => onSelectViewMode('map')}
              title="Xem Bản đồ"
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-all ${
                viewMode === 'map'
                  ? 'bg-white dark:bg-slate-700 text-red-600 dark:text-red-400 font-medium shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <MapIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Bản đồ</span>
            </button>

            <button
              onClick={() => onSelectViewMode('cards')}
              title="Xem Danh sách"
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-all ${
                viewMode === 'cards'
                  ? 'bg-white dark:bg-slate-700 text-red-600 dark:text-red-400 font-medium shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span className="hidden sm:inline">Thẻ</span>
            </button>

            <button
              onClick={() => onSelectViewMode('timeline')}
              title="Dòng thời gian 12 tháng"
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-all ${
                viewMode === 'timeline'
                  ? 'bg-white dark:bg-slate-700 text-red-600 dark:text-red-400 font-medium shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Thời gian</span>
            </button>
          </div>

          {/* Map theme dropdown (visible in map mode) */}
          {viewMode === 'map' && (
            <div className="relative z-[1300]">
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                title="Chọn kiểu bản đồ"
                className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="hidden sm:inline text-xs font-semibold">Chọn bản đồ</span>
              </button>
              {showThemeMenu && (
                <div 
                  className="absolute right-0 mt-2 w-52 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-2 z-[1400] text-xs"
                  onMouseLeave={() => setShowThemeMenu(false)}
                >
                  <button
                    onClick={() => { onChangeMapTheme('satellite'); setShowThemeMenu(false); }}
                    className={`w-full text-left px-3 py-2 rounded-xl flex items-center justify-between transition-colors ${mapTheme === 'satellite' ? 'bg-emerald-50 text-emerald-700 font-bold dark:bg-emerald-950 dark:text-emerald-300' : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200'}`}
                  >
                    <span>Ảnh vệ tinh (Hybrid)</span>
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">CHÍNH</span>
                  </button>
                  <button
                    onClick={() => { onChangeMapTheme('street'); setShowThemeMenu(false); }}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-colors ${mapTheme === 'street' || mapTheme === 'positron' ? 'bg-red-50 text-red-600 font-semibold dark:bg-red-950/60 dark:text-red-400' : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200'}`}
                  >
                    Bản đồ số đường bộ
                  </button>
                  <button
                    onClick={() => { onChangeMapTheme('topo'); setShowThemeMenu(false); }}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-colors ${mapTheme === 'topo' || mapTheme === 'voyager' ? 'bg-red-50 text-red-600 font-semibold dark:bg-red-950/60 dark:text-red-400' : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200'}`}
                  >
                    Bản đồ địa hình
                  </button>
                  <button
                    onClick={() => { onChangeMapTheme('osm'); setShowThemeMenu(false); }}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-colors ${mapTheme === 'osm' ? 'bg-red-50 text-red-600 font-semibold dark:bg-red-950/60 dark:text-red-400' : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200'}`}
                  >
                    OpenStreetMap
                  </button>
                </div>
              )}
            </div>
          )}

          {/* About Website Button */}
          <button
            onClick={onOpenAboutModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-sm cursor-pointer relative z-[1250]"
            title="Giới thiệu về trang web Bản Đồ Lễ Hội"
          >
            <Info className="w-3.5 h-3.5 text-rose-400 dark:text-rose-600" />
            <span>Giới thiệu</span>
          </button>

        </div>
      </div>

      {/* Mobile Region Scroll Bar */}
      <div className="lg:hidden flex items-center overflow-x-auto px-4 py-2 gap-2 border-t border-slate-100 dark:border-slate-800 no-scrollbar">
        {REGIONS.map((region) => {
          const isActive = selectedRegion === region.id;
          return (
            <button
              key={region.id}
              onClick={() => onSelectRegion(region.id)}
              className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-red-600 text-white font-semibold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              {region.name}
            </button>
          );
        })}
      </div>
    </header>
  );
};
