import { RegionInfo, RegionId } from '../types';

export const REGIONS: RegionInfo[] = [
  {
    id: 'all',
    name: 'Toàn Quốc',
    tagline: 'Khám phá tất cả các lễ hội đặc sắc Việt Nam',
    center: [16.4637, 107.5909], // Center of Vietnam
    zoom: 6,
    description: 'Hàng ngàn lễ hội truyền thống, văn hóa và nghệ thuật diễn ra quanh năm từ địa đầu Lạng Sơn đến mũi Cà Mau.'
  },
  {
    id: 'bac-bo',
    name: 'Đồng Bằng Bắc Bộ',
    tagline: 'Cái nôi văn minh lúa nước & hội hè ngàn năm',
    center: [20.9500, 105.8500],
    zoom: 8,
    description: 'Vùng đất kinh kỳ Thăng Long và châu thổ sông Hồng với mật độ lễ hội xuân cổ truyền phong phú nhất cả nước: Hội Lim, Đền Hùng, Chùa Hương, Hội Gióng...'
  },
  {
    id: 'tay-bac',
    name: 'Tây Bắc - Đông Bắc',
    tagline: 'Sắc màu thổ cẩm & hội xuân đại ngàn',
    center: [22.0500, 104.2000],
    zoom: 7,
    description: 'Nơi hội tụ bản sắc văn hóa các dân tộc Tày, Nùng, H’Mông, Dao, Thái với Lễ hội Hoa Ban, Chợ tình Khau Vai, Nhảy Lửa, Hội Thành Tuyên...'
  },
  {
    id: 'mien-trung',
    name: 'Cố Đô & Miền Trung',
    tagline: 'Dấu ấn cung đình, di sản & văn hóa biển đảo',
    center: [16.0500, 108.0000],
    zoom: 7,
    description: 'Dải đất giao thoa giữa hào hoa cung đình Huế, phố cổ Hội An rực rỡ hoa đăng, lễ hội Cầu Ngư miền biển và văn hóa tháp Chăm trầm mặc.'
  },
  {
    id: 'tay-nguyen',
    name: 'Đại Ngàn Tây Nguyên',
    tagline: 'Tiếng cồng chiêng vang vọng giữa rừng thiêng',
    center: [13.2000, 108.2000],
    zoom: 7,
    description: 'Không gian văn hóa Cồng Chiêng kiệt tác nhân loại, lễ hội Đua Voi, ngát hương Festival Cà phê và muôn sắc Festival Hoa xứ sở sương mù Đà Lạt.'
  },
  {
    id: 'nam-bo',
    name: 'Phương Nam & Miền Tây',
    tagline: 'Phóng khoáng sông nước & tâm linh huyền tích',
    center: [10.4000, 105.8000],
    zoom: 7,
    description: 'Nét văn hóa Nam Bộ hào sảng, đa dạng tín ngưỡng: Lễ hội Vía Bà Chúa Xứ Châu Đốc, rực rỡ Đua Ghe Ngo Ok Om Bok và huyền tích Núi Bà Đen.'
  },
  {
    id: 'quoc-te',
    name: 'Lễ Hội Quốc Tế',
    tagline: 'Văn hóa & lễ hội ngoạn mục năm châu bốn bể',
    center: [25.0, 45.0],
    zoom: 3,
    description: 'Khám phá những lễ hội danh tiếng nhất địa cầu: Songkran Thái Lan, Hanami Nhật Bản, Rio Carnival Brazil, Oktoberfest Đức, La Tomatina Tây Ban Nha, Holi Ấn Độ, Venice Carnival Ý...'
  }
];

export const CATEGORY_LABELS: Record<string, { label: string; icon: string; color: string; bg: string }> = {
  all: { label: 'Tất cả loại hình', icon: 'Sparkles', color: '#0f172a', bg: '#f1f5f9' },
  tradition: { label: 'Dân gian & Cổ truyền', icon: 'Landmark', color: '#dc2626', bg: '#fef2f2' },
  spiritual: { label: 'Tâm linh & Đền miếu', icon: 'Flame', color: '#b45309', bg: '#fffbeb' },
  arts_music: { label: 'Âm nhạc & Nghệ thuật', icon: 'Music', color: '#7c3aed', bg: '#f5f3ff' },
  culture_nature: { label: 'Văn hóa & Mùa vụ', icon: 'Leaf', color: '#059669', bg: '#ecfdf5' },
  heritage_folk: { label: 'Trò chơi & Diễn xướng', icon: 'Award', color: '#0284c7', bg: '#f0f9ff' }
};

export const MONTHS_LABELS = [
  { value: 'all', label: 'Cả năm' },
  { value: 1, label: 'Tháng 1' },
  { value: 2, label: 'Tháng 2' },
  { value: 3, label: 'Tháng 3' },
  { value: 4, label: 'Tháng 4' },
  { value: 5, label: 'Tháng 5' },
  { value: 6, label: 'Tháng 6' },
  { value: 7, label: 'Tháng 7' },
  { value: 8, label: 'Tháng 8' },
  { value: 9, label: 'Tháng 9' },
  { value: 10, label: 'Tháng 10' },
  { value: 11, label: 'Tháng 11' },
  { value: 12, label: 'Tháng 12' }
];
