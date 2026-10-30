import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Globe, Map as MapIcon, Layers } from 'lucide-react';
import { Festival, RegionInfo, MapTheme } from '../types';
import { CATEGORY_LABELS } from '../data/regions';
import { sound } from '../utils/sound';

interface FestivalMapProps {
  festivals: Festival[];
  selectedFestival: Festival | null;
  onSelectFestival: (festival: Festival) => void;
  activeRegion: RegionInfo;
  mapTheme: MapTheme;
  isDark: boolean;
  onChangeMapTheme?: (theme: MapTheme) => void;
}

const TILE_LAYERS: Record<string, { url: string; attribution: string }> = {
  satellite: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Ảnh vệ tinh &copy; Esri, Maxar, Earthstar Geographics'
  },
  street: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Bản đồ số &copy; Esri, TomTom, OpenStreetMap'
  },
  osm: {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  },
  topo: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Bản đồ địa hình &copy; Esri, USGS, FAO'
  },
  dark: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Bản đồ đêm &copy; Esri, HERE'
  },
  positron: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Bản đồ số &copy; Esri, TomTom, OpenStreetMap'
  },
  voyager: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Bản đồ địa hình &copy; Esri, USGS, FAO'
  }
};

const SATELLITE_LABELS_URL = 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}';

export const FestivalMap: React.FC<FestivalMapProps> = ({
  festivals,
  selectedFestival,
  onSelectFestival,
  activeRegion,
  mapTheme,
  isDark,
  onChangeMapTheme
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const overlayLayerRef = useRef<L.TileLayer | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: activeRegion.center,
      zoom: activeRegion.zoom,
      zoomControl: false,
      attributionControl: false,
      minZoom: 2,
      maxZoom: 19,
    });

    // Add zoom control at bottom right
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // Initial tile layer: default satellite
    const activeLayerKey = mapTheme;
    const activeLayerConfig = TILE_LAYERS[activeLayerKey] || TILE_LAYERS.satellite;
    
    const tileLayer = L.tileLayer(activeLayerConfig.url, {
      attribution: activeLayerConfig.attribution,
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);
    tileLayerRef.current = tileLayer;

    // If satellite, add boundaries & labels overlay
    if (activeLayerKey === 'satellite') {
      const overlayLayer = L.tileLayer(SATELLITE_LABELS_URL, {
        maxZoom: 19,
        opacity: 0.9
      }).addTo(map);
      overlayLayerRef.current = overlayLayer;
    }

    // Layer group for festival markers (on top of map and overlay)
    const markersLayer = L.layerGroup().addTo(map);
    markersLayerRef.current = markersLayer;
    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Tile Layer when mapTheme changes
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const activeLayerKey = mapTheme;
    const activeLayerConfig = TILE_LAYERS[activeLayerKey] || TILE_LAYERS.satellite;
    
    // Remove old base layer
    if (tileLayerRef.current) {
      mapInstanceRef.current.removeLayer(tileLayerRef.current);
    }
    // Remove old overlay
    if (overlayLayerRef.current) {
      mapInstanceRef.current.removeLayer(overlayLayerRef.current);
      overlayLayerRef.current = null;
    }
    
    // Add new base layer
    const newTileLayer = L.tileLayer(activeLayerConfig.url, {
      attribution: activeLayerConfig.attribution,
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(mapInstanceRef.current);
    tileLayerRef.current = newTileLayer;

    // Add boundaries overlay if satellite
    if (activeLayerKey === 'satellite') {
      const overlay = L.tileLayer(SATELLITE_LABELS_URL, {
        maxZoom: 19,
        opacity: 0.95
      }).addTo(mapInstanceRef.current);
      overlayLayerRef.current = overlay;
    }

    // Markers are rendered in Leaflet's markerPane (z-index 600), always above tilePane (z-index 200)
  }, [mapTheme, isDark]);

  // Handle Region Change: Pan map smoothly to region center
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    if (!selectedFestival) {
      mapInstanceRef.current.flyTo(activeRegion.center, activeRegion.zoom, {
        duration: 1.4,
        easeLinearity: 0.25
      });
    }
  }, [activeRegion.id]);

  // Handle Selected Festival Pan
  useEffect(() => {
    if (!mapInstanceRef.current || !selectedFestival) return;
    mapInstanceRef.current.flyTo([selectedFestival.lat, selectedFestival.lng], 12, {
      duration: 1.0,
      easeLinearity: 0.25
    });
  }, [selectedFestival?.id]);

  // Render Markers on Map
  useEffect(() => {
    if (!mapInstanceRef.current || !markersLayerRef.current) return;
    const markersLayer = markersLayerRef.current;
    markersLayer.clearLayers();

    festivals.forEach((festival) => {
      const isSelected = selectedFestival?.id === festival.id;
      const catConfig = CATEGORY_LABELS[festival.category] || CATEGORY_LABELS.tradition;

      // Marker HTML with strong contrast for satellite view
      const markerHtml = `
        <div class="relative group cursor-pointer transition-transform duration-200 ${isSelected ? 'scale-125 z-50' : 'hover:scale-115 z-10'}">
          ${isSelected ? `<div class="absolute -inset-2.5 bg-red-500/40 rounded-full festival-marker-pulse"></div>` : ''}
          <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full shadow-2xl backdrop-blur-md transition-all duration-200 border ${
            isSelected 
              ? 'bg-red-600 text-white border-white shadow-red-500/50 ring-2 ring-white' 
              : mapTheme === 'satellite'
                ? 'bg-slate-950/90 text-white border-white/30 hover:border-red-400 hover:bg-slate-900 shadow-black'
                : 'bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-100 border-slate-200/80 dark:border-slate-700/80 hover:border-red-400'
          }">
            <span class="w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-sm ring-1 ring-white/50" style="background-color: ${isSelected ? '#ffffff' : catConfig.color}"></span>
            <span class="text-xs font-bold whitespace-nowrap tracking-tight font-sans drop-shadow-sm">${festival.name}</span>
            ${festival.unescoRecognized ? `<span class="text-[9px] px-1 py-0.2 rounded font-black uppercase tracking-wider ${isSelected ? 'bg-white text-red-600' : 'bg-amber-400 text-slate-950'}">UNESCO</span>` : ''}
          </div>
          <!-- Little arrow pin indicator -->
          <div class="w-2 h-2 rotate-45 mx-auto -mt-1 ${
            isSelected 
              ? 'bg-red-600 ring-1 ring-white' 
              : mapTheme === 'satellite'
                ? 'bg-slate-950 border-r border-b border-white/30'
                : 'bg-white dark:bg-slate-900 border-r border-b border-slate-200/80 dark:border-slate-700/80'
          }"></div>
        </div>
      `;

      const customIcon = L.divIcon({
        html: markerHtml,
        className: 'custom-festival-marker',
        iconSize: [140, 40],
        iconAnchor: [70, 36]
      });

      const marker = L.marker([festival.lat, festival.lng], { icon: customIcon });

      // Click event
      marker.on('click', () => {
        sound.playChime(600);
        onSelectFestival(festival);
      });

      // Hover tooltip
      marker.bindTooltip(
        `
        <div class="p-2 min-w-[210px]">
          <div class="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-1">
            <span class="font-bold text-slate-700 dark:text-slate-300">${festival.province}</span>
            <span class="text-red-600 dark:text-red-400 font-semibold">${festival.solarPeriod}</span>
          </div>
          <div class="font-serif-culture font-bold text-slate-900 dark:text-white text-sm leading-snug">${festival.vietnameseTitle}</div>
          <div class="text-[11px] text-slate-600 dark:text-slate-300 mt-1 line-clamp-2">${festival.shortDescription}</div>
          <div class="mt-2 text-[10px] text-slate-400 dark:text-slate-500 font-mono flex items-center justify-between">
            <span>Thời gian: ${festival.lunarDate}</span>
            <span class="text-red-600 dark:text-red-400 font-medium">Chi tiết &rarr;</span>
          </div>
        </div>
        `,
        {
          direction: 'top',
          offset: [0, -30],
          opacity: 0.98,
          className: 'festival-minimal-tooltip'
        }
      );

      marker.addTo(markersLayer);
    });
  }, [festivals, selectedFestival?.id, mapTheme]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainerRef} className="w-full h-full z-0" />
      
      {/* Floating Satellite Mode Switcher with live badge */}
      {onChangeMapTheme && (
        <div className="absolute bottom-6 left-4 z-[400] flex items-center gap-2">
          <button
            onClick={() => {
              sound.playTap();
              if (mapTheme === 'satellite') {
                onChangeMapTheme('street');
              } else {
                onChangeMapTheme('satellite');
              }
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl shadow-2xl backdrop-blur-md text-xs font-bold border transition-all duration-200 cursor-pointer ${
              mapTheme === 'satellite'
                ? 'bg-emerald-600 text-white border-emerald-300 shadow-emerald-600/40 ring-2 ring-emerald-400'
                : 'bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-700 hover:border-emerald-500'
            }`}
          >
            <Globe className={`w-4 h-4 ${mapTheme === 'satellite' ? 'text-white' : 'text-emerald-600'}`} />
            <span>{mapTheme === 'satellite' ? 'Đang bật: Bản đồ Vệ Tinh' : 'Bật Bản đồ Vệ Tinh'}</span>
          </button>

          {mapTheme === 'satellite' && (
            <button
              onClick={() => {
                sound.playTap();
                onChangeMapTheme('street');
              }}
              className="px-3 py-2.5 rounded-2xl bg-black/75 hover:bg-black/90 text-white text-xs font-semibold backdrop-blur-md border border-white/20 shadow-xl transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Chuyển về bản đồ số đường bộ"
            >
              <MapIcon className="w-3.5 h-3.5 text-blue-300" />
              <span>Bản đồ số</span>
            </button>
          )}
        </div>
      )}

      {/* Attribution Badge */}
      <div className="absolute bottom-2 right-14 z-[400] bg-black/70 text-white backdrop-blur-sm px-2.5 py-0.5 rounded text-[10px] border border-white/10 pointer-events-none">
        {mapTheme === 'satellite' ? 'Ảnh Vệ tinh: Esri World Imagery & Maxar' : 'Bản đồ số: OpenStreetMap & Esri (Miễn phí 100%)'}
      </div>
    </div>
  );
};
