import React, { useState } from 'react';
import { X, PlusCircle, Check } from 'lucide-react';
import { Festival, RegionId, FestivalCategory } from '../types';
import { REGIONS, CATEGORY_LABELS } from '../data/regions';
import { sound } from '../utils/sound';

interface AddFestivalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddFestival: (festival: Festival) => void;
}

export const AddFestivalModal: React.FC<AddFestivalModalProps> = ({
  isOpen,
  onClose,
  onAddFestival
}) => {
  const [name, setName] = useState('');
  const [vietnameseTitle, setVietnameseTitle] = useState('');
  const [province, setProvince] = useState('');
  const [address, setAddress] = useState('');
  const [region, setRegion] = useState<RegionId>('bac-bo');
  const [category, setCategory] = useState<FestivalCategory>('tradition');
  const [lunarDate, setLunarDate] = useState('');
  const [solarMonth, setSolarMonth] = useState<number>(2);
  const [shortDescription, setShortDescription] = useState('');
  const [ritualsStr, setRitualsStr] = useState('');
  const [festivitiesStr, setFestivitiesStr] = useState('');
  const [specialtiesStr, setSpecialtiesStr] = useState('');
  const [latStr, setLatStr] = useState('21.0285');
  const [lngStr, setLngStr] = useState('105.8542');
  const [imageUrl, setImageUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !province.trim()) return;

    const lat = parseFloat(latStr) || 21.0285;
    const lng = parseFloat(lngStr) || 105.8542;

    const regionObj = REGIONS.find((r) => r.id === region) || REGIONS[1];

    const newFestival: Festival = {
      id: `custom-${Date.now()}`,
      name: name.trim(),
      vietnameseTitle: vietnameseTitle.trim() || name.trim(),
      region,
      regionName: regionObj.name,
      province: province.trim(),
      address: address.trim() || `${province.trim()}, Việt Nam`,
      lat,
      lng,
      category,
      lunarDate: lunarDate.trim() || 'Rằm tháng Giêng',
      solarPeriod: `Tháng ${solarMonth} hàng năm`,
      solarMonth,
      duration: '1 - 2 ngày',
      shortDescription: shortDescription.trim() || 'Lễ hội truyền thống đặc sắc của địa phương.',
      description: shortDescription.trim() || 'Lễ hội gìn giữ nét đẹp văn hóa dân tộc và gắn kết tình làng nghĩa xóm.',
      history: 'Được nhân dân địa phương lưu truyền và tổ chức hàng năm với niềm tự hào sâu sắc.',
      rituals: ritualsStr ? ritualsStr.split(',').map((s) => s.trim()).filter(Boolean) : ['Lễ dâng hương tạ ơn thần linh', 'Lễ rước kiệu truyền thống'],
      festivities: festivitiesStr ? festivitiesStr.split(',').map((s) => s.trim()).filter(Boolean) : ['Giao lưu văn nghệ dân gian', 'Trò chơi kéo co, đấu vật'],
      specialties: specialtiesStr ? specialtiesStr.split(',').map((s) => s.trim()).filter(Boolean) : ['Món ăn đặc sản địa phương'],
      tips: ['Nên ăn mặc trang nghiêm khi vào khu vực tế lễ.'],
      image: imageUrl.trim() || 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
      ticketFee: 'Miễn phí',
      isFeatured: false
    };

    sound.playTap();
    onAddFestival(newFestival);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 flex items-center justify-center">
              <PlusCircle className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif-culture text-lg font-bold text-slate-900 dark:text-white">
                Đóng góp Lễ hội mới
              </h2>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Thêm lễ hội tại quê hương bạn vào bản đồ văn hóa
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-5 space-y-4 text-xs">
          
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Tên lễ hội *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="VD: Hội Chùa Keo, Lễ hội Làng gốm Bát Tràng..."
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 focus:outline-none focus:border-red-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Tỉnh / Thành phố *
              </label>
              <input
                type="text"
                required
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                placeholder="VD: Thái Bình, Huế..."
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Vùng miền
              </label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value as RegionId)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 focus:outline-none focus:border-red-500"
              >
                {REGIONS.filter((r) => r.id !== 'all').map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Thể loại
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as FestivalCategory)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 focus:outline-none focus:border-red-500"
              >
                {Object.entries(CATEGORY_LABELS).filter(([k]) => k !== 'all').map(([k, v]) => (
                  <option key={k} value={k}>
                    {v.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Tháng Dương lịch (1-12)
              </label>
              <input
                type="number"
                min={1}
                max={12}
                value={solarMonth}
                onChange={(e) => setSolarMonth(parseInt(e.target.value) || 1)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 focus:outline-none focus:border-red-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Thời gian Âm lịch
            </label>
            <input
              type="text"
              value={lunarDate}
              onChange={(e) => setLunarDate(e.target.value)}
              placeholder="VD: Mùng 4 tháng Giêng, Rằm tháng Tám..."
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 focus:outline-none focus:border-red-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Vĩ độ (Latitude)
              </label>
              <input
                type="text"
                value={latStr}
                onChange={(e) => setLatStr(e.target.value)}
                placeholder="VD: 21.0285"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 focus:outline-none focus:border-red-500 font-mono"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Kinh độ (Longitude)
              </label>
              <input
                type="text"
                value={lngStr}
                onChange={(e) => setLngStr(e.target.value)}
                placeholder="VD: 105.8542"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 focus:outline-none focus:border-red-500 font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Mô tả ngắn gọn
            </label>
            <textarea
              rows={2}
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              placeholder="Nét đặc sắc nổi bật của lễ hội..."
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Phần Lễ (phân cách bằng dấu phẩy)
            </label>
            <input
              type="text"
              value={ritualsStr}
              onChange={(e) => setRitualsStr(e.target.value)}
              placeholder="Rước kiệu, Tế thần, Dâng hương..."
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Phần Hội & Trò chơi (phân cách bằng dấu phẩy)
            </label>
            <input
              type="text"
              value={festivitiesStr}
              onChange={(e) => setFestivitiesStr(e.target.value)}
              placeholder="Hát quan họ, Đấu vật, Cờ người..."
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Đặc sản ẩm thực (phân cách bằng dấu phẩy)
            </label>
            <input
              type="text"
              value={specialtiesStr}
              onChange={(e) => setSpecialtiesStr(e.target.value)}
              placeholder="Bánh cáy, Nem nướng, Rượu cần..."
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Form Actions */}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold flex items-center gap-1.5 shadow-md shadow-red-500/20 transition-all"
            >
              <Check className="w-4 h-4" />
              <span>Lưu vào bản đồ</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
