export type FestivalCategory = 
  | 'tradition'      // Lễ hội dân gian & cổ truyền
  | 'spiritual'      // Đền chùa & tâm linh di sản
  | 'arts_music'     // Âm nhạc & nghệ thuật
  | 'culture_nature' // Văn hóa mùa hoa & nông sản
  | 'heritage_folk'; // Trò chơi & thể thao truyền thống

export type RegionId = 'all' | 'bac-bo' | 'tay-bac' | 'mien-trung' | 'tay-nguyen' | 'nam-bo' | 'quoc-te';

export interface RegionInfo {
  id: RegionId;
  name: string;
  tagline: string;
  center: [number, number];
  zoom: number;
  description: string;
}

export interface Festival {
  id: string;
  name: string;
  vietnameseTitle: string;
  region: RegionId;
  regionName: string;
  province: string;
  address: string;
  lat: number;
  lng: number;
  category: FestivalCategory;
  lunarDate: string;        // Ngày âm lịch hoặc thời điểm theo lịch truyền thống
  solarPeriod: string;      // Tháng/thời gian dương lịch ước tính
  solarMonth: number;       // Tháng dương lịch chính (1-12)
  duration: string;         // Thời lượng
  shortDescription: string;
  description: string;
  history: string;
  rituals: string[];        // Các nghi lễ chính (Phần Lễ)
  festivities: string[];    // Các trò chơi, diễn xướng (Phần Hội)
  specialties: string[];    // Ẩm thực đặc sản
  tips: string[];           // Lời khuyên khi tham gia
  image: string;            // Ảnh chất lượng cao
  isFeatured?: boolean;     // Lễ hội quốc gia tiêu biểu
  unescoRecognized?: boolean; // Di sản UNESCO
  ticketFee: string;
  accentColor?: string;
}

export interface FestivalFilter {
  searchQuery: string;
  selectedRegion: RegionId;
  selectedCategory: FestivalCategory | 'all';
  selectedMonth: number | 'all'; // 1-12
  onlyFeatured: boolean;
  onlyBookmarked: boolean;
  onlyUnesco: boolean;
}

export type ViewMode = 'map' | 'cards' | 'timeline';
export type MapTheme = 'satellite' | 'street' | 'osm' | 'topo' | 'positron' | 'dark' | 'voyager';
