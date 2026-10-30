/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { INITIAL_FESTIVALS } from './data/festivals';
import { REGIONS } from './data/regions';
import { Festival, RegionId, FestivalFilter, ViewMode, MapTheme } from './types';
import { Header } from './components/Header';
import { MapControls } from './components/MapControls';
import { RegionIntroBanner } from './components/RegionIntroBanner';
import { FestivalMap } from './components/FestivalMap';
import { FestivalDrawer } from './components/FestivalDrawer';
import { FestivalCardsView } from './components/FestivalCardsView';
import { FestivalTimelineView } from './components/FestivalTimelineView';
import { AddFestivalModal } from './components/AddFestivalModal';
import { AboutModal } from './components/AboutModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  // Theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem('festival_map_dark') === 'true';
  });

  const [mapTheme, setMapTheme] = useState<MapTheme>('satellite');

  // Active region - default to Đồng Bằng Bắc Bộ (or remembered)
  const [selectedRegion, setSelectedRegion] = useState<RegionId>('bac-bo');

  // View mode
  const [viewMode, setViewMode] = useState<ViewMode>('map');

  // Selected festival for drawer details
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null);

  // Bookmarks
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('festival_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // User contributed festivals
  const [customFestivals, setCustomFestivals] = useState<Festival[]>(() => {
    try {
      const saved = localStorage.getItem('festival_custom_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Filter state
  const [filter, setFilter] = useState<FestivalFilter>({
    searchQuery: '',
    selectedRegion: 'bac-bo',
    selectedCategory: 'all',
    selectedMonth: 'all',
    onlyFeatured: false,
    onlyBookmarked: false,
    onlyUnesco: false
  });

  // Keep filter.selectedRegion synchronized with selectedRegion
  useEffect(() => {
    setFilter((prev) => ({ ...prev, selectedRegion }));
  }, [selectedRegion]);

  // Sync dark class on root document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('festival_map_dark', isDark ? 'true' : 'false');
  }, [isDark]);

  // Sync bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem('festival_bookmarks', JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  // Sync custom festivals to localStorage
  useEffect(() => {
    localStorage.setItem('festival_custom_items', JSON.stringify(customFestivals));
  }, [customFestivals]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAddCustomFestival = (newFestival: Festival) => {
    setCustomFestivals((prev) => [newFestival, ...prev]);
    setSelectedRegion(newFestival.region);
    setSelectedFestival(newFestival);
  };

  // Combine initial + custom festivals
  const allFestivals = useMemo(() => {
    return [...customFestivals, ...INITIAL_FESTIVALS];
  }, [customFestivals]);

  // Current active region info
  const activeRegionInfo = useMemo(() => {
    return REGIONS.find((r) => r.id === selectedRegion) || REGIONS[1];
  }, [selectedRegion]);

  // Filtered festivals
  const filteredFestivals = useMemo(() => {
    return allFestivals.filter((fest) => {
      // Region filter (if not 'all')
      if (selectedRegion !== 'all' && fest.region !== selectedRegion) {
        return false;
      }

      // Bookmarked filter
      if (filter.onlyBookmarked && !bookmarkedIds.includes(fest.id)) {
        return false;
      }

      // Featured filter
      if (filter.onlyFeatured && !fest.isFeatured) {
        return false;
      }

      // UNESCO filter
      if (filter.onlyUnesco && !fest.unescoRecognized) {
        return false;
      }

      // Category filter
      if (filter.selectedCategory !== 'all' && fest.category !== filter.selectedCategory) {
        return false;
      }

      // Month filter
      if (filter.selectedMonth !== 'all' && fest.solarMonth !== filter.selectedMonth) {
        return false;
      }

      // Search query
      if (filter.searchQuery.trim()) {
        const query = filter.searchQuery.toLowerCase().trim();
        const matchName = fest.name.toLowerCase().includes(query);
        const matchTitle = fest.vietnameseTitle.toLowerCase().includes(query);
        const matchProvince = fest.province.toLowerCase().includes(query);
        const matchDescription = fest.shortDescription.toLowerCase().includes(query);
        const matchLunar = fest.lunarDate.toLowerCase().includes(query);
        const matchRitual = fest.rituals.some((r) => r.toLowerCase().includes(query));
        const matchSpecialty = fest.specialties.some((s) => s.toLowerCase().includes(query));

        if (!matchName && !matchTitle && !matchProvince && !matchDescription && !matchLunar && !matchRitual && !matchSpecialty) {
          return false;
        }
      }

      return true;
    });
  }, [allFestivals, selectedRegion, filter, bookmarkedIds]);

  // Statistics for region banner
  const regionFestivalsCount = useMemo(() => {
    return allFestivals.filter((f) => selectedRegion === 'all' || f.region === selectedRegion).length;
  }, [allFestivals, selectedRegion]);

  const regionUnescoCount = useMemo(() => {
    return allFestivals.filter((f) => (selectedRegion === 'all' || f.region === selectedRegion) && f.unescoRecognized).length;
  }, [allFestivals, selectedRegion]);

  const handleViewOnMap = (fest: Festival) => {
    setSelectedRegion(fest.region);
    setViewMode('map');
    setSelectedFestival(fest);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      
      {/* Header */}
      <Header
        selectedRegion={selectedRegion}
        onSelectRegion={(reg) => {
          setSelectedRegion(reg);
          setSelectedFestival(null);
        }}
        viewMode={viewMode}
        onSelectViewMode={setViewMode}
        onOpenAboutModal={() => setIsAboutModalOpen(true)}
        mapTheme={mapTheme}
        onChangeMapTheme={setMapTheme}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative flex flex-col overflow-y-auto">
        
        {/* VIEW 1: INTERACTIVE MAP VIEW */}
        {viewMode === 'map' && (
          <div className="flex flex-col w-full">
            <div className="relative w-full h-[calc(100vh-65px)] min-h-[580px] overflow-hidden">
              {/* Background Minimal Leaflet Map */}
              <FestivalMap
                festivals={filteredFestivals}
                selectedFestival={selectedFestival}
                onSelectFestival={setSelectedFestival}
                activeRegion={activeRegionInfo}
                mapTheme={mapTheme}
                isDark={isDark}
                onChangeMapTheme={setMapTheme}
              />

              {/* Floating Top Controls Bar (Search + Quick Filters) */}
              <div className="absolute top-4 inset-x-4 z-[400] flex flex-col items-center gap-2 pointer-events-none">
                <div className="w-full max-w-4xl">
                  <MapControls
                    filter={filter}
                    onChangeFilter={(updated) => setFilter((prev) => ({ ...prev, ...updated }))}
                    totalCount={filteredFestivals.length}
                  />
                </div>

                {/* Minimal Region Banner (Subtle & Collapsible) */}
                <div className="w-full max-w-4xl pointer-events-auto">
                  <RegionIntroBanner
                    region={activeRegionInfo}
                    festivalsCount={regionFestivalsCount}
                    unescoCount={regionUnescoCount}
                  />
                </div>
              </div>

              {/* Bottom Floating Quick Tips or Active Selection Pill */}
              {!selectedFestival && filteredFestivals.length > 0 && (
                <div className="absolute bottom-5 inset-x-0 mx-auto w-max max-w-md z-[400] pointer-events-none hidden sm:block">
                  <div className="bg-slate-900/85 dark:bg-slate-800/90 text-white backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium shadow-lg border border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span>Nhấp vào điểm ghim trên bản đồ để khám phá nghi lễ & món ngon</span>
                  </div>
                </div>
              )}
            </div>

            {/* Footer below map */}
            <Footer
              onSelectRegion={(reg) => {
                setSelectedRegion(reg);
                setSelectedFestival(null);
              }}
            />
          </div>
        )}

        {/* VIEW 2: CARDS GRID VIEW */}
        {viewMode === 'cards' && (
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
                <MapControls
                  filter={filter}
                  onChangeFilter={(updated) => setFilter((prev) => ({ ...prev, ...updated }))}
                  totalCount={filteredFestivals.length}
                />
                <div className="mt-4">
                  <RegionIntroBanner
                    region={activeRegionInfo}
                    festivalsCount={regionFestivalsCount}
                    unescoCount={regionUnescoCount}
                  />
                </div>
              </div>

              <FestivalCardsView
                festivals={filteredFestivals}
                onSelectFestival={setSelectedFestival}
                onViewOnMap={handleViewOnMap}
                bookmarkedIds={bookmarkedIds}
                onToggleBookmark={toggleBookmark}
              />
            </div>

            <Footer
              onSelectRegion={(reg) => {
                setSelectedRegion(reg);
                setSelectedFestival(null);
              }}
            />
          </div>
        )}

        {/* VIEW 3: TIMELINE 12-MONTH VIEW */}
        {viewMode === 'timeline' && (
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
                <MapControls
                  filter={filter}
                  onChangeFilter={(updated) => setFilter((prev) => ({ ...prev, ...updated }))}
                  totalCount={filteredFestivals.length}
                />
              </div>

              <FestivalTimelineView
                festivals={filteredFestivals}
                onSelectFestival={setSelectedFestival}
                onViewOnMap={handleViewOnMap}
              />
            </div>

            <Footer
              onSelectRegion={(reg) => {
                setSelectedRegion(reg);
                setSelectedFestival(null);
              }}
            />
          </div>
        )}

        {/* Slide-over Detail Sheet (When a festival is selected) */}
        <FestivalDrawer
          festival={selectedFestival}
          onClose={() => setSelectedFestival(null)}
          isBookmarked={selectedFestival ? bookmarkedIds.includes(selectedFestival.id) : false}
          onToggleBookmark={toggleBookmark}
        />

      </main>

      {/* Add Festival Modal */}
      <AddFestivalModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddFestival={handleAddCustomFestival}
      />

      {/* About Website Modal */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />

    </div>
  );
}
