import { Festival } from '../types';

export const INITIAL_FESTIVALS: Festival[] = [
  // --- ĐỒNG BẰNG BẮC BỘ ---
  {
    id: 'hoi-lim',
    name: 'Hội Lim Bắc Ninh',
    vietnameseTitle: 'Lễ hội Vùng Lim - Tiếng hát Quan họ Kinh Bắc',
    region: 'bac-bo',
    regionName: 'Đồng Bằng Bắc Bộ',
    province: 'Bắc Ninh',
    address: 'Đồi Lim, thị trấn Lim, huyện Tiên Du, tỉnh Bắc Ninh',
    lat: 21.1444,
    lng: 106.0125,
    category: 'arts_music',
    lunarDate: 'Ngày 12 - 13 tháng Giêng',
    solarPeriod: 'Tháng 2 hàng năm',
    solarMonth: 2,
    duration: '2 ngày chính hội',
    shortDescription: 'Lễ hội dân ca Quan họ đặc sắc bậc nhất xứ Kinh Bắc với những làn điệu mượt mà thắm đượm nghĩa tình.',
    description: 'Hội Lim là lễ hội truyền thống tiêu biểu của vùng Kinh Bắc, tôn vinh nghệ thuật Dân ca Quan họ Bắc Ninh - Di sản văn hóa phi vật thể đại diện của nhân loại được UNESCO vinh danh. Du khách được đắm chìm trong không gian của các liền anh, liền chị áo the khăn xếp, nón quai thao mời trầu têm cánh phượng và hát đối đáp giao duyên trên thuyền rồng lung linh.',
    history: 'Hội Lim có cội nguồn từ lễ hội đền Cổ Lũng thờ nữ thần lập ấp xưa kia và được khởi xướng mở rộng vào thế kỷ 18 bởi tướng công Nguyễn Đình Diễn. Trải qua hàng trăm năm, Hội Lim trở thành biểu tượng tinh hoa thanh lịch của văn hóa xứ Bắc.',
    rituals: [
      'Lễ tế thần tại đền hàng quận và chùa Hồng Ân trên đỉnh đồi Lim',
      'Đoàn rước sắc trang trọng rực rỡ cờ lọng từ làng Đình Cả qua các làng lân cận',
      'Lễ dâng hương tạ ơn tiền nhân khai sáng'
    ],
    festivities: [
      'Hát Quan họ đối đáp trên thuyền rồng tại hồ nước',
      'Hát Quan họ tại các lán trại dựng quanh đồi Lim và hát canh trong nhà cổ nghệ nhân',
      'Thi têm trầu cánh phượng khéo tay',
      'Trò chơi dân gian: cờ người, đấu vật cổ truyền, đu tiên, bịt mắt bắt dê'
    ],
    specialties: [
      'Bánh phu thê Đình Bảng dẻo thơm nhân đậu xanh hạt sen',
      'Bánh đa Kế giòn rụm thơm vừng lạc',
      'Nem bùi Ninh Xá cuốn lá sung chấm tương ớt',
      'Rượu nếp cái hoa vàng làng Vân trứ danh'
    ],
    tips: [
      'Nên đến sớm từ sáng ngày 13 tháng Giêng để chứng kiến trọn vẹn màn rước kiệu hoành tráng.',
      'Đừng ngần ngại nếm thử miếng trầu têm cánh phượng từ tay các liền chị thân thiện.',
      'Gửi xe ở bãi xe quy định bên ngoài thị trấn rồi đi bộ lên đồi Lim tránh ùn tắc.'
    ],
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: true,
    ticketFee: 'Miễn phí tham quan',
    accentColor: '#dc2626'
  },
  {
    id: 'den-hung',
    name: 'Giỗ Tổ Hùng Vương',
    vietnameseTitle: 'Lễ hội Đền Hùng - Về miền cội nguồn Đất Tổ',
    region: 'bac-bo',
    regionName: 'Đồng Bằng Bắc Bộ',
    province: 'Phú Thọ',
    address: 'Khu di tích lịch sử Đền Hùng, xã Hy Cương, TP. Việt Trì, tỉnh Phú Thọ',
    lat: 21.3653,
    lng: 105.3283,
    category: 'tradition',
    lunarDate: 'Mùng 8 đến mùng 10 tháng 3 Âm lịch (Chính hội 10/3)',
    solarPeriod: 'Tháng 4 hàng năm',
    solarMonth: 4,
    duration: '5 - 7 ngày lễ hội',
    shortDescription: 'Quốc lễ thiêng liêng nhất của người Việt, tưởng nhớ công đức các vua Hùng dựng nước Văn Lang.',
    description: 'Dù ai đi ngược về xuôi / Nhớ ngày Giỗ Tổ mùng mười tháng ba. Lễ hội Đền Hùng là biểu tượng tâm linh vĩ đại của tinh thần đại đoàn kết toàn dân tộc, nơi hàng triệu đồng bào con Lạc cháu Hồng tề tựu dâng nén tâm hương tri ân tổ tiên tiền hiền.',
    history: 'Tín ngưỡng thờ cúng Hùng Vương được gìn giữ qua hàng ngàn năm lịch sử, được UNESCO công nhận là Di sản văn hóa phi vật thể của nhân loại năm 2012. Quần thể Đền Hùng gồm Đền Hạ, Đền Trung, Đền Thượng và Lăng Hùng Vương trên đỉnh núi Nghĩa Lĩnh huyền thoại.',
    rituals: [
      'Lễ giỗ đức Quốc Tổ Lạc Long Quân và dâng hương tưởng niệm Tổ Mẫu Âu Cơ',
      'Lễ dâng hương tưởng niệm các Vua Hùng của đoàn lãnh đạo Nhà nước và nhân dân cả nước',
      'Lễ rước kiệu các xã vùng ven về Đền Hùng đầy sắc màu tôn nghiêm'
    ],
    festivities: [
      'Hội thi gói bánh chưng bánh giầy dâng vua',
      'Diễn xướng Hát Xoan Phú Thọ tại các sân đình cổ',
      'Hội bơi chải trên sông Lô anh hùng',
      'Hội thi đấu vật, cờ tướng và bắn nỏ truyền thống'
    ],
    specialties: [
      'Bánh tai Phú Thọ dẻo thơm thịt băm mộc nhĩ',
      'Thịt chua Thanh Sơn ướp thính ngô thơm bùi',
      'Rau sắn chua nấu cá suối thanh mát',
      'Cơm lam Đất Tổ và bưởi Đoan Hùng trứ danh'
    ],
    tips: [
      'Lượng người viếng thăm chính hội 10/3 rất đông, du khách nên mặc trang phục lịch sự và đi giày êm chân leo núi đá.',
      'Hãy ghé thăm làng đình An Thái hoặc Miếu Lãi Lèn để nghe Hát Xoan nguyên bản.'
    ],
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: true,
    ticketFee: 'Miễn phí vào khu di tích',
    accentColor: '#b45309'
  },
  {
    id: 'chua-huong',
    name: 'Lễ hội Chùa Hương',
    vietnameseTitle: 'Lễ hội Chùa Hương - Trẩy hội miền đất Phật',
    region: 'bac-bo',
    regionName: 'Đồng Bằng Bắc Bộ',
    province: 'Hà Nội',
    address: 'Khu thắng cảnh Hương Sơn, huyện Mỹ Đức, TP. Hà Nội',
    lat: 20.6186,
    lng: 105.7725,
    category: 'spiritual',
    lunarDate: 'Từ mùng 6 tháng Giêng kéo dài đến hết tháng 3 Âm lịch',
    solarPeriod: 'Tháng 2 - Tháng 4 hàng năm',
    solarMonth: 2,
    duration: '3 tháng mùa xuân (Lễ hội dài nhất Việt Nam)',
    shortDescription: 'Hành trình ngắm non nước suối Yến và chiêm bái Nam thiên đệ nhất động chốn thiền môn thanh tịnh.',
    description: 'Chùa Hương là quần thể danh thắng tâm linh lớn bậc nhất miền Bắc. Du khách thong dong ngồi đò trôi êm ả trên dòng suối Yến nở rộ hoa súng, ngắm dãy núi đá vôi hùng vĩ rồi hành hương lên Đền Trình, Chùa Thiên Trù và chiêm bái Động Hương Tích linh thiêng.',
    history: 'Quần thể Hương Sơn được xây dựng từ cuối thế kỷ 17. Chúa Trịnh Sâm từng vi hành và khắc chữ đề tặng Động Hương Tích là "Nam thiên đệ nhất động" (Động đẹp nhất trời Nam) vào năm 1770.',
    rituals: [
      'Lễ khai sơn mở cửa chùa ngày mùng 6 tháng Giêng',
      'Lễ dâng hương, cầu bình an đầu năm tại Chùa Thiên Trù',
      'Cầu tự, cầu duyên và cầu phước lành tại Bầu Sữa Mẹ trong Động Hương Tích'
    ],
    festivities: [
      'Chèo thuyền ngắm cảnh sơn thủy hữu tình dọc Suối Yến',
      'Lễ hội thả cá phóng sinh trên suối',
      'Thưởng ngoạn rừng mơ Hương Tích nở hoa trắng tinh khôi',
      'Thơ ca giao lưu tại các am thanh viện'
    ],
    specialties: [
      'Rau sắng chùa Hương nấu canh thịt thơm ngọt độc nhất vô nhị',
      'Mơ Hương Tích ngâm đường phèn giải nhiệt thanh mát',
      'Bánh củ mài, chè lam gừng ấm lòng ngày xuân',
      'Hạt dẻ nóng và chè lam Mỹ Đức'
    ],
    tips: [
      'Nên chọn đò tay chèo truyền thống để cảm nhận trọn vẹn sự tĩnh lặng non nước.',
      'Có hệ thống cáp treo lên Động Hương Tích nếu không tiện leo bậc thang đá.'
    ],
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: false,
    ticketFee: 'Vé thắng cảnh + thuyền đò theo quy định',
    accentColor: '#059669'
  },
  {
    id: 'hoi-giong',
    name: 'Hội Gióng Phù Đổng & Sóc Sơn',
    vietnameseTitle: 'Hội Gióng - Bản anh hùng ca chống giặc Ân',
    region: 'bac-bo',
    regionName: 'Đồng Bằng Bắc Bộ',
    province: 'Hà Nội',
    address: 'Đền Phù Đổng (Gia Lâm) & Đền Sóc Sơn, Hà Nội',
    lat: 21.0833,
    lng: 105.9458,
    category: 'tradition',
    lunarDate: 'Mùng 6-8 tháng Giêng (Sóc Sơn) & Mùng 7-9 tháng 4 Âm lịch (Phù Đổng)',
    solarPeriod: 'Tháng 1 - Tháng 5 hàng năm',
    solarMonth: 5,
    duration: '3 ngày',
    shortDescription: 'Lễ hội mô phỏng lại trận địa chiến tranh bộ tộc cổ xưa với tính nghệ thuật và triết lý quân sự độc đáo.',
    description: 'Hội Gióng là pho sử thi sống động về người anh hùng làng Gióng đánh đuổi giặc Ân. Nghi lễ tại Hội Gióng mang tính ước lệ sâu sắc, từ đoàn rước voi chiến, cờ lệnh đến màn chém Tướng giặc tái hiện tinh thần quật cường bảo vệ giang sơn.',
    history: 'Hội Gióng được hình thành từ thời Lý và được bảo tồn qua nhiều thế kỷ, đã được UNESCO công nhận là Di sản văn hóa phi vật thể đại diện của nhân loại vào năm 2010.',
    rituals: [
      'Lễ dâng hoa tre và trầu cau cúng Thánh Gióng tại Đền Sóc',
      'Đoàn rước cờ lệnh, rước Tướng bà, Tướng ông tại làng Phù Đổng',
      'Trận đánh mô phỏng trên bãi Soi Bia với vũ điệu cờ hiệu hào hùng'
    ],
    festivities: [
      'Tục cướp hoa tre cầu may mắn đầu năm',
      'Diễn trò múa cờ ngũ hành',
      'Thi vật truyền thống và các hội hát chèo Kinh kỳ'
    ],
    specialties: [
      'Bánh đúc ngô Sóc Sơn thơm nồng chấm tương bần',
      'Gà đồi nướng mọi than hồng',
      'Bánh phu thê và bánh dày làng Gióng'
    ],
    tips: [
      'Lễ hội đền Sóc có tục rước giò hoa tre rất trang nghiêm, người tham dự nên giữ thái độ thành kính văn minh.'
    ],
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: true,
    ticketFee: 'Miễn phí',
    accentColor: '#dc2626'
  },
  {
    id: 'tich-dien-doi-son',
    name: 'Lễ hội Tịch Điền Đọi Sơn',
    vietnameseTitle: 'Lễ hội Tịch Điền - Mở đầu mùa gieo cấy đất trời',
    region: 'bac-bo',
    regionName: 'Đồng Bằng Bắc Bộ',
    province: 'Hà Nam',
    address: 'Cánh đồng xã Đọi Sơn, thị xã Duy Tiên, tỉnh Hà Nam',
    lat: 20.6121,
    lng: 105.9752,
    category: 'culture_nature',
    lunarDate: 'Ngày mùng 7 tháng Giêng Âm lịch',
    solarPeriod: 'Tháng 2 hàng năm',
    solarMonth: 2,
    duration: '1 ngày trọng thể',
    shortDescription: 'Lễ hội khuyến nông lâu đời nhất Việt Nam, nơi người đứng đầu cày những luống cày đầu tiên cầu mùa màng bội thu.',
    description: 'Bắt nguồn từ mùa xuân năm Đinh Hợi (987) khi vua Lê Đại Hành đích thân xuống đồng cày cày Tịch Điền, lễ hội khẳng định triết lý lấy dân làm gốc, lấy nông nghiệp làm nền tảng ấm no cho xã tắc.',
    history: 'Di sản văn hóa phi vật thể cấp quốc gia, lễ hội có màn hóa thân vua Lê Đại Hành cày những luống cày đầu xuân cùng những chú trâu được trang trí hoa văn rực rỡ.',
    rituals: [
      'Rước linh vị vua Lê Đại Hành từ chùa Đọi Sơn xuống cánh đồng Tịch Điền',
      'Nghi lễ tạ Thần Nông cầu mưa thuận gió hòa',
      'Vị bô lão đức độ nhập vai Vua cày 3 đường cày đầu tiên mở hội'
    ],
    festivities: [
      'Hội thi trang trí vẽ tranh lên lưng trâu độc đáo',
      'Hội đánh trống làng Đọi Tam với hàng trăm dàn trống sấm rền vang',
      'Các trò chơi ném còn, bịt mắt bắt lợn, đập niêu đất'
    ],
    specialties: [
      'Rượu làng Vọc tiến vua thơm hương thuốc bắc',
      'Bánh cuốn chả Phủ Lý',
      'Chuối ngự Đại Hoàng ngọt thơm quý hiếm'
    ],
    tips: [
      'Hãy đứng gần khu vực đài tế lễ để chụp được những khoảnh khắc chú trâu đắp vẽ sắc màu vẽ sặc sỡ cày mở đồng xuân.'
    ],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    isFeatured: false,
    unescoRecognized: false,
    ticketFee: 'Miễn phí',
    accentColor: '#059669'
  },
  {
    id: 'trang-an-ninh-binh',
    name: 'Lễ hội Tràng An Ninh Bình',
    vietnameseTitle: 'Lễ hội Tràng An - Linh thiêng rước nước trên dòng Sao Khê',
    region: 'bac-bo',
    regionName: 'Đồng Bằng Bắc Bộ',
    province: 'Ninh Bình',
    address: 'Quần thể danh thắng Tràng An, huyện Hoa Lư, tỉnh Ninh Bình',
    lat: 20.2506,
    lng: 105.9048,
    category: 'spiritual',
    lunarDate: 'Ngày 18 tháng 3 Âm lịch',
    solarPeriod: 'Tháng 4 hàng năm',
    solarMonth: 4,
    duration: '2 ngày',
    shortDescription: 'Lễ hội rước nước và tế thần Quý Minh Đại Vương giữa non xanh nước biếc của Di sản Hỗn hợp Thế giới Tràng An.',
    description: 'Hàng trăm con thuyền rồng nối đuôi nhau uốn lượn qua các hang động kỳ bí, chở các bậc bô lão và tăng ni phật tử thực hiện nghi lễ lấy nước thiêng giữa dòng sông ngầm để dâng tế thánh linh bảo vệ giang sơn Cố đô Hoa Lư.',
    history: 'Tôn vinh Thánh Quý Minh Đại Vương - một trong ba vị thần trấn giữ ải Nam kinh đô Hoa Lư thời vua Đinh Tiên Hoàng.',
    rituals: [
      'Rước rồng trên sông Sao Khê hoành tráng',
      'Nghi thức dâng hương và rước nước thiêng giữa dòng sông ngầm',
      'Tế lễ tạ ơn các bậc tiền nhân dựng xây Cố đô Hoa Lư'
    ],
    festivities: [
      'Các chòi biểu diễn ca trù, chèo, hát xẩm trên các vách núi đá vôi',
      'Hội thuyền hoa nghệ thuật thắp sáng đêm Tràng An',
      'Thưởng ngoạn cảnh sắc kỳ vĩ của hang Sáng, hang Tối'
    ],
    specialties: [
      'Cơm cháy Ninh Bình chấm sốt dê núi thơm lừng',
      'Dê tái chanh kẹp chuối xanh lá mơ',
      'Rượu cần Nho Quan và ốc núi luộc gừng sả'
    ],
    tips: [
      'Nên đặt vé thuyền sớm và mang theo mũ nón, kem chống nắng khi tham gia đoàn thuyền rước.'
    ],
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: true,
    ticketFee: 'Vé tham quan danh thắng Tràng An',
    accentColor: '#0284c7'
  },
  {
    id: 'yen-tu-quang-ninh',
    name: 'Lễ hội Xuân Yên Tử',
    vietnameseTitle: 'Lễ hội Yên Tử - Hành hương về Kinh đô Phật giáo Trúc Lâm',
    region: 'bac-bo',
    regionName: 'Đồng Bằng Bắc Bộ',
    province: 'Quảng Ninh',
    address: 'Khu di tích danh thắng Yên Tử, TP. Uông Bí, tỉnh Quảng Ninh',
    lat: 21.1578,
    lng: 106.7198,
    category: 'spiritual',
    lunarDate: 'Từ mùng 10 tháng Giêng đến hết tháng 3 Âm lịch',
    solarPeriod: 'Tháng 2 - Tháng 4 hàng năm',
    solarMonth: 2,
    duration: 'Suốt 3 tháng mùa xuân',
    shortDescription: 'Cõi thiêng mây trắng trên đỉnh non Phù Vân, nơi Phật hoàng Trần Nhân Tông sáng lập Thiền phái Trúc Lâm Yên Tử.',
    description: 'Yên Tử là cái nôi của Phật giáo Việt Nam mang tinh thần hòa quang đồng trần. Người trẩy hội leo qua rừng tùng trúc cổ thụ nghìn năm tuổi để chạm tay vào ngôi chùa Đồng ngự giữa mây trời bảng lảng ở độ cao 1.068m.',
    history: 'Sau khi đánh thắng quân xâm lược Nguyên Mông, Vua Trần Nhân Tông nhường ngôi và lên Yên Tử tu hành, thống nhất các dòng thiền lập ra Thiền phái Trúc Lâm Yên Tử đậm đà bản sắc dân tộc.',
    rituals: [
      'Lễ gióng trống khai hội tại sân chùa Trình',
      'Nghi thức dâng hương tưởng niệm Phật Hoàng Trần Nhân Tông',
      'Cầu quốc thái dân an, phong điều vũ thuận trên đỉnh Chùa Đồng'
    ],
    festivities: [
      'Hành trình leo núi xuyên rừng trúc bình yên',
      'Các trò chơi dân gian chọi gà, ném còn dưới chân núi',
      'Thưởng thức trà hoa vàng Yên Tử tĩnh tâm'
    ],
    specialties: [
      'Măng trúc Yên Tử luộc chấm muối vừng',
      'Bánh gật gù Tiên Yên chấm mỡ gà hành phi',
      'Chả mực Hạ Long giòn sần sật'
    ],
    tips: [
      'Có tuyến cáp treo 2 chặng hỗ trợ người già và trẻ nhỏ, tuy nhiên trải nghiệm leo bộ qua đường thông xanh rất thư thái.'
    ],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: false,
    ticketFee: 'Vé thắng cảnh Yên Tử',
    accentColor: '#b45309'
  },

  // --- TÂY BẮC & ĐÔNG BẮC ---
  {
    id: 'hoa-ban-dien-bien',
    name: 'Lễ hội Hoa Ban Điện Biên',
    vietnameseTitle: 'Lễ hội Hoa Ban - Biểu tượng tình yêu & đất trời Tây Bắc',
    region: 'tay-bac',
    regionName: 'Tây Bắc - Đông Bắc',
    province: 'Điện Biên',
    address: 'TP. Điện Biên Phủ và các huyện lân cận, tỉnh Điện Biên',
    lat: 21.3869,
    lng: 103.0227,
    category: 'culture_nature',
    lunarDate: 'Giữa tháng 3 Dương lịch hàng năm',
    solarPeriod: 'Tháng 3 hàng năm',
    solarMonth: 3,
    duration: '3 - 4 ngày',
    shortDescription: 'Mùa hoa ban trắng nở ngợp sườn đồi, tôn vinh truyền thuyết mối tình chung thủy nàng Ban chàng Khum.',
    description: 'Khi tháng Ba về, hoa ban bung nở trắng xóa khắp các nẻo đường rừng Tây Bắc. Lễ hội Hoa Ban là sự kiện văn hóa lớn nhất tỉnh Điện Biên, gắn liền với di tích lịch sử chiến trường Điện Biên Phủ oanh liệt và không gian rực rỡ sắc áo thổ cẩm của đồng bào các dân tộc Thái, Mông, Kháng.',
    history: 'Bắt nguồn từ lễ hội Then Kin Pang và truyền thuyết dân gian Thái ca ngợi tình yêu son sắt, sự sinh sôi nảy nở của bản làng giữa thiên nhiên hùng vĩ.',
    rituals: [
      'Lễ cúng Thần Then tạ ơn phù hộ mùa màng tốt tươi',
      'Nghi thức dâng hoa ban tưởng nhớ anh hùng liệt sĩ tại Nghĩa trang A1',
      'Lễ buộc chỉ cổ tay cầu bình an may mắn'
    ],
    festivities: [
      'Cuộc thi Người đẹp Hoa Ban với trang phục Thái duyên dáng',
      'Đại xòe Thái với hàng nghìn người cùng nắm tay kết vòng tròn',
      'Hội thi giã bánh dày truyền thống, kéo co, đẩy gậy, bắn nỏ',
      'Không gian trưng bày văn hóa ẩm thực các dân tộc Tây Bắc'
    ],
    specialties: [
      'Thịt trâu gác bếp thơm nồng mắc khén hạt dổi',
      'Xôi nếp nương ngũ sắc thơm dẻo',
      'Pa pỉnh tộp (cá suối nướng gập ướp gia vị Thái)',
      'Nộm hoa ban rừng chua thanh lạ miệng'
    ],
    tips: [
      'Tháng 3 thời tiết Tây Bắc khô ráo, ban ngày nắng nhẹ se lạnh rất thích hợp săn ảnh hoa ban dọc đèo Pha Đin.'
    ],
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: false,
    ticketFee: 'Miễn phí tham quan',
    accentColor: '#059669'
  },
  {
    id: 'cho-tinh-khau-vai',
    name: 'Chợ tình Khau Vai Hà Giang',
    vietnameseTitle: 'Chợ tình Khau Vai - Phiên chợ huyền thoại một năm họp một lần',
    region: 'tay-bac',
    regionName: 'Tây Bắc - Đông Bắc',
    province: 'Hà Giang',
    address: 'Xã Khau Vai, huyện Mèo Vạc, tỉnh Hà Giang (Cao nguyên đá Đồng Văn)',
    lat: 23.0906,
    lng: 105.4239,
    category: 'tradition',
    lunarDate: 'Ngày 27 tháng 3 Âm lịch',
    solarPeriod: 'Tháng 4 - Tháng 5 hàng năm',
    solarMonth: 4,
    duration: '2 ngày 1 đêm',
    shortDescription: 'Phiên chợ của lòng nhân văn sâu sắc, nơi những người yêu nhau nhưng không đến được với nhau gặp lại.',
    description: 'Giữa trập trùng cao nguyên đá xám tai mèo, Chợ tình Khau Vai (hay Chợ Phong lưu) là hiện tượng văn hóa độc nhất vô nhị. Vào đêm 27/3 âm lịch, những cặp tình nhân trắc trở duyên nợ năm xưa tìm về đây để uống chén rượu ngô, trò chuyện hỏi thăm nhau dưới sự đồng thuận và tôn trọng của người bạn đời.',
    history: 'Gắn liền với chuyện tình cảm động giữa chàng Ba người Nùng và nàng Út người Giáy vì ngăn cấm bộ tộc mà đành hẹn ước mỗi năm gặp lại một lần tại đỉnh đồi Khau Vai.',
    rituals: [
      'Lễ dâng hương tại Miếu Ông, Miếu Bà linh thiêng nơi Khau Vai',
      'Nghi thức cầu duyên cho các đôi trai gái trẻ vùng cao'
    ],
    festivities: [
      'Hát đối giao duyên, thổi khèn Mông gọi bạn tình tha thiết',
      'Hội thi dệt vải lanh, thêu thổ cẩm truyền thống',
      'Chọi chim họa mi, đua ngựa trên cao nguyên đá'
    ],
    specialties: [
      'Thắng cố ngựa Mèo Vạc bốc khói nghi ngút',
      'Mèn mén ngô xay ăn kèm canh rau cải mèo',
      'Rượu ngô men lá thơm nồng ấm áp',
      'Bánh tam giác mạch nướng than hồng'
    ],
    tips: [
      'Đường lên Mèo Vạc qua đèo Mã Pí Lèng rất ngoạn mục, hãy chuẩn bị tay lái vững hoặc thuê xe máy người bản địa.'
    ],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: false,
    ticketFee: 'Miễn phí',
    accentColor: '#7c3aed'
  },
  {
    id: 'thanh-tuyen-tuyen-quang',
    name: 'Lễ hội Thành Tuyên',
    vietnameseTitle: 'Lễ hội Thành Tuyên - Đêm hội đèn lồng khổng lồ Trung Thu',
    region: 'tay-bac',
    regionName: 'Tây Bắc - Đông Bắc',
    province: 'Tuyên Quang',
    address: 'Quảng trường Nguyễn Tất Thành và các tuyến phố TP. Tuyên Quang',
    lat: 21.8236,
    lng: 105.2155,
    category: 'arts_music',
    lunarDate: 'Rằm tháng 8 Âm lịch (Dịp Tết Trung Thu)',
    solarPeriod: 'Tháng 9 - Tháng 10 hàng năm',
    solarMonth: 9,
    duration: '3 - 5 ngày',
    shortDescription: 'Lễ hội rước mô hình đèn Trung thu khổng lồ độc nhất vô nhị xác lập nhiều Kỷ lục Guiness Việt Nam.',
    description: 'Mỗi dịp Trung thu, người dân Tuyên Quang lại sáng tạo hàng trăm mô hình đèn lồng khổng lồ dài cả chục mét mô phỏng tích xưa: rồng vàng phun lửa, cá chép hóa rồng, Thánh Gióng cưỡi ngựa sắt, rùa thần Kim Quy... cùng diễu hành rực rỡ khắp các phố phường trong tiếng nhạc rộn rã.',
    history: 'Bắt nguồn từ sự sáng tạo tự phát của người dân các tổ dân phố Tuyên Quang làm đèn cho thiếu nhi từ năm 2004, nay đã trở thành Lễ hội cấp quốc gia thu hút hàng vạn du khách trong và ngoài nước.',
    rituals: [
      'Lễ rước mô hình đèn Trung thu qua các tuyến phố trung tâm',
      'Đêm hội Thành Tuyên phá cỗ trông trăng cùng thiếu nhi'
    ],
    festivities: [
      'Đoàn xe đèn lồng khổng lồ diễu hành có nhạc và hiệu ứng ánh sáng tân kỳ',
      'Liên hoan ẩm thực hương sắc vùng cao Tuyên Quang',
      'Trình diễn Di sản văn hóa phi vật thể quốc gia các dân tộc thiểu số'
    ],
    specialties: [
      'Vịt bầu Minh Hương nướng lá móc mật',
      'Bánh gai Chiêm Hóa ngọt ngào bùi béo',
      'Cơm lam Na Hang chấm muối vừng'
    ],
    tips: [
      'Hãy đặt phòng khách sạn tại TP. Tuyên Quang trước 1 tháng vì dịp này lượng khách đổ về rất đông đúc.'
    ],
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: false,
    ticketFee: 'Miễn phí trên toàn tuyến phố',
    accentColor: '#dc2626'
  },

  // --- CỐ ĐÔ & MIỀN TRUNG ---
  {
    id: 'festival-hue',
    name: 'Festival Huế',
    vietnameseTitle: 'Festival Huế - Bản giao hưởng di sản văn hóa đương đại',
    region: 'mien-trung',
    regionName: 'Cố Đô & Miền Trung',
    province: 'Thừa Thiên Huế',
    address: 'Đại Nội Huế, Sông Hương và các cung điện lăng tẩm, Thừa Thiên Huế',
    lat: 16.4697,
    lng: 107.5786,
    category: 'arts_music',
    lunarDate: 'Tổ chức định kỳ theo các mùa trong năm (Festival Bốn Mùa)',
    solarPeriod: 'Tháng 4 - Tháng 6 hàng năm',
    solarMonth: 6,
    duration: '6 ngày hội cao điểm',
    shortDescription: 'Lễ hội nghệ thuật quốc tế quy mô lớn bậc nhất Việt Nam kết tinh giữa văn hóa Cung đình và nghệ thuật thế giới.',
    description: 'Festival Huế biến cố đô rêu phong thành một sân khấu nghệ thuật khổng lồ. Từ Nhã nhạc Cung đình Huế (Di sản UNESCO), Đêm Hoàng cung huyền bí đến các đoàn nghệ thuật danh tiếng khắp năm châu biểu diễn trên dòng sông Hương thơ mộng.',
    history: 'Ra đời từ năm 2000, Festival Huế là cầu nối giao lưu văn hóa quốc tế lớn nhất của Việt Nam mang thông điệp gìn giữ di sản và hội nhập.',
    rituals: [
      'Lễ tế Giao phục dựng quy mô tại Đàn Nam Giao',
      'Lễ Truyền Lô và tôn vinh Nho học thời Nguyễn',
      'Lễ tế Xã Tắc cầu thái bình thịnh vượng'
    ],
    festivities: [
      'Chương trình nghệ thuật Đêm Hoàng Cung rực rỡ yến tiệc cung đình',
      'Lễ hội Áo dài Huế bên cầu Tràng Tiền lãng mạn',
      'Lễ hội đường phố "Sắc màu văn hóa" với các đoàn quốc tế',
      'Thả hoa đăng trên dòng sông Hương bảng lảng khói sương'
    ],
    specialties: [
      'Bún bò Huế cay nồng thơm mùi mắm ruốc sả tươi',
      'Cơm hến Cồn Hến cay xé lưỡi mộc mạc',
      'Bánh bèo, nậm, lọc chén nhỏ thanh nhã',
      'Chè bột lọc bọc heo quay độc đáo chỉ có ở Huế'
    ],
    tips: [
      'Nên thuê trang phục Cổ phục Việt (Việt phục / Áo tấc / Nhật bình) dạo bước trong Đại Nội để có những bức ảnh hoài niệm khó quên.'
    ],
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: true,
    ticketFee: 'Vé theo chương trình biểu diễn cụ thể trong Đại Nội',
    accentColor: '#7c3aed'
  },
  {
    id: 'den-long-hoi-an',
    name: 'Đêm phố cổ & Lễ hội Đèn lồng Hội An',
    vietnameseTitle: 'Đêm rằm phố cổ Hội An - Miền ánh sáng hoa đăng hoài niệm',
    region: 'mien-trung',
    regionName: 'Cố Đô & Miền Trung',
    province: 'Quảng Nam',
    address: 'Khu phố cổ Hội An, ven sông Hoài, tỉnh Quảng Nam',
    lat: 15.8801,
    lng: 108.3380,
    category: 'culture_nature',
    lunarDate: 'Đêm ngày 14 Âm lịch hàng tháng',
    solarPeriod: 'Diễn ra đều đặn 12 tháng quanh năm',
    solarMonth: 8,
    duration: 'Mỗi đêm rằm trăng tròn',
    shortDescription: 'Khi toàn bộ khu phố tắt điện, chỉ còn lung linh ánh đèn lồng lụa và hoa đăng trôi trên sông Hoài.',
    description: 'Vào đêm 14 âm lịch hàng tháng, cả khu phố cổ Hội An chìm trong không gian thanh bình tĩnh lặng. Mọi ngôi nhà cổ tắt đèn neon, thắp lên những chiếc đèn lồng đủ kiểu dáng, tiếng hát bài chòi rộn rã bên sông Hoài tạo nên khung cảnh như bước ra từ tranh cổ.',
    history: 'Được phục dựng từ năm 1998, lễ hội tái hiện trọn vẹn không gian thương cảng Faifo sầm uất thế kỷ 17 - 18 nơi giao lưu văn hóa Việt - Nhật - Hoa.',
    rituals: [
      'Nghi thức dâng hương tại Chùa Cầu và các Hội quán người Hoa',
      'Lễ tạ ơn sông mẹ Thu Bồn đem lại nguồn cá tôm trù phú'
    ],
    festivities: [
      'Thả hoa đăng giấy ước nguyện trên sông Hoài mờ ảo',
      'Hát Bài Chòi dân gian rộn rã tiếng cười vui nhộn (Di sản UNESCO)',
      'Các trò chơi đập niêu đất, cờ tướng bên hè phố cổ',
      'Thưởng trà thảo mộc mót Hội An thơm mùi sen quế'
    ],
    specialties: [
      'Cao lầu Hội An sợi dai giòn thơm thịt xá xíu',
      'Cơm gà phố Hội vàng ươm hạt dẻo ngậy',
      'Bánh mì Phượng / Madam Khánh nức tiếng thế giới',
      'Bánh đập chấm mắm nêm đậm đà'
    ],
    tips: [
      'Hãy đi bộ hoặc thuê xe đạp cổ vào phố sau 17h khi các phương tiện cơ giới bị cấm lưu thông hoàn toàn.'
    ],
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: true,
    ticketFee: 'Vé tham quan phố cổ Hội An',
    accentColor: '#dc2626'
  },
  {
    id: 'phao-hoa-da-nang-diff',
    name: 'Lễ hội Pháo hoa Quốc tế Đà Nẵng (DIFF)',
    vietnameseTitle: 'DIFF Đà Nẵng - Vũ điệu ánh sáng bên bờ sông Hàn',
    region: 'mien-trung',
    regionName: 'Cố Đô & Miền Trung',
    province: 'Đà Nẵng',
    address: 'Cảng sông Hàn và đường Trần Hưng Đạo, TP. Đà Nẵng',
    lat: 16.0718,
    lng: 108.2244,
    category: 'arts_music',
    lunarDate: 'Kéo dài trong tháng 6 - tháng 7 Dương lịch hàng năm',
    solarPeriod: 'Tháng 6 - Tháng 7 hàng năm',
    solarMonth: 7,
    duration: '5 đêm thi tài quốc tế',
    shortDescription: 'Đại tiệc pháo hoa nghệ thuật tầm cỡ quốc tế với sự tham gia của các đội thi hàng đầu thế giới.',
    description: 'Mỗi mùa hè, bầu trời Đà Nẵng lại bừng sáng với những màn trình diễn pháo hoa đỉnh cao kết hợp âm nhạc giao hưởng sống động. Hàng triệu vệt sáng phản chiếu xuống mặt nước sông Hàn lung linh bên cạnh cầu Rồng phun lửa.',
    history: 'Khởi xướng từ năm 2008, DIFF đã trở thành thương hiệu du lịch quốc tế đặc trưng, đưa Đà Nẵng trở thành "Thành phố sự kiện và lễ hội hàng đầu châu Á".',
    rituals: [
      'Lễ khai mạc trang trọng đón các đoàn nghệ thuật pháo hoa thế giới',
      'Đêm chung kết tranh cúp vô địch DIFF kịch tính'
    ],
    festivities: [
      'Trình diễn pháo hoa nghệ thuật theo cốt truyện và âm nhạc sống',
      'Lễ hội diễu hành xe hoa Carnival rực rỡ phong cách châu Âu',
      'Các đêm đại nhạc hội EDM ngoài trời bên bãi biển Mỹ Khê'
    ],
    specialties: [
      'Mì Quảng ếch / tôm thịt rắc lạc rang thơm giòn',
      'Bánh tráng cuốn thịt heo hai đầu da chấm mắm nêm',
      'Gỏi cá Nam Ô cay xé và chả bò Đà Nẵng'
    ],
    tips: [
      'Nên đặt vé khán đài chính hoặc đặt bàn sớm tại các nhà hàng rooftop ven đường Bạch Đằng / Trần Hưng Đạo.'
    ],
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: false,
    ticketFee: 'Vé khán đài DIFF theo các hạng ghế',
    accentColor: '#0284c7'
  },
  {
    id: 'kate-ninh-thuan',
    name: 'Lễ hội Katê Ninh Thuận',
    vietnameseTitle: 'Lễ hội Katê - Khúc ca linh thiêng bên tháp Chàm rêu phong',
    region: 'mien-trung',
    regionName: 'Cố Đô & Miền Trung',
    province: 'Ninh Thuận',
    address: 'Tháp Po Klong Garai (Phan Rang) và tháp Po Rome, Ninh Thuận',
    lat: 11.6033,
    lng: 108.9469,
    category: 'spiritual',
    lunarDate: 'Ngày 1 tháng 7 lịch Chăm (Khoảng tháng 9 - tháng 10 Dương lịch)',
    solarPeriod: 'Tháng 10 hàng năm',
    solarMonth: 10,
    duration: '3 ngày',
    shortDescription: 'Lễ hội dân gian đặc sắc nhất của đồng bào Chăm Bà-la-môn, tưởng nhớ các vị thần và tổ tiên.',
    description: 'Katê là dịp người Chăm tề tựu về các đền tháp cổ kính trong trang phục truyền thống thêu hoa văn tinh xảo. Tiếng kèn Saranai réo rắt quyện cùng nhịp trống Ginăng dồn dập và những điệu múa quạt duyên dáng của các thiếu nữ Chăm tạo nên bầu không khí huyền bí, thiêng liêng.',
    history: 'Katê đã có lịch sử hàng trăm năm, phản ánh sâu sắc thế giới quan và lòng tri ân các vị vua tiền nhân có công khai kênh dẫn nước giúp dân cày cấy.',
    rituals: [
      'Lễ rước y trang nữ thần Xứ sở Po Ino Nagar do người Raglai trao trả',
      'Nghi thức tắm tượng thần và mặc long bào cho tượng Thần Po Klong Garai',
      'Đại lễ cầu mùa, cầu an tại sân tháp Chàm'
    ],
    festivities: [
      'Hòa tấu kèn Saranai, trống Ginăng và trống Paranưng rộn rã',
      'Múa quạt Chăm uyển chuyển bên chân tháp cổ',
      'Hội thi dệt vải thổ cẩm Chăm Mỹ Nghiệp và nặn gốm Bàu Trúc'
    ],
    specialties: [
      'Bánh tét, bánh ít Chăm làm từ nếp nương',
      'Dê núi Phan Rang nướng mọi',
      'Nho Ninh Thuận ngọt thanh và rượu vang nho đậm đà'
    ],
    tips: [
      'Du khách có thể tham quan cả phần lễ trên tháp Po Klong Garai và phần hội thân tình tại các làng Chăm làng gốm Bàu Trúc.'
    ],
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: false,
    ticketFee: 'Miễn phí',
    accentColor: '#b45309'
  },

  // --- ĐẠI NGÀN TÂY NGUYÊN ---
  {
    id: 'cong-chieng-tay-nguyen',
    name: 'Không gian Văn hóa Cồng Chiêng Tây Nguyên',
    vietnameseTitle: 'Lễ hội Cồng Chiêng - Âm vang đại ngàn huyền sử',
    region: 'tay-nguyen',
    regionName: 'Đại Ngàn Tây Nguyên',
    province: 'Đắk Lắk',
    address: 'Buôn Ma Thuột (Đắk Lắk), Pleiku (Gia Lai) & Kon Tum',
    lat: 12.6667,
    lng: 108.0383,
    category: 'arts_music',
    lunarDate: 'Tổ chức luân phiên vào mùa khô (tháng 3 - tháng 5 hoặc cuối năm)',
    solarPeriod: 'Tháng 3 - Tháng 4 hàng năm',
    solarMonth: 3,
    duration: '3 - 5 ngày',
    shortDescription: 'Kiệt tác truyền khẩu và phi vật thể nhân loại được UNESCO vinh danh với dàn cồng chiêng linh thiêng.',
    description: 'Cồng chiêng gắn liền với vòng đời con người Tây Nguyên từ lúc cất tiếng khóc chào đời đến khi về với tổ tiên. Trong ánh lửa bập bùng giữa nhà rông cao vút, các nghệ nhân Bana, Gia Rai, Ê Đê say sưa tấu lên khúc tráng ca bất tận của núi rừng.',
    history: 'Được UNESCO công nhận là Kiệt tác di sản văn hóa phi vật thể của nhân loại năm 2005. Cồng chiêng được coi là tiếng nói của thần linh Yang nối kết giữa trần thế và cõi thiêng.',
    rituals: [
      'Lễ tạ ơn thần Yang tại chân cột bơ-lăng trước nhà rông',
      'Nghi thức đâm trâu truyền thống (được chuyển hóa thành nghi thức tượng trưng nhân văn)',
      'Lễ cúng bến nước và mừng lúa mới của các buôn làng'
    ],
    festivities: [
      'Hội diễn tấu cồng chiêng của hàng chục đoàn nghệ nhân các dân tộc',
      'Uống rượu cần bên bếp lửa hồng và nghe hát Then, trường ca Đăm Săn',
      'Hội thi đi cà kheo, giã gạo đêm trăng, tạc tượng gỗ nhà mồ'
    ],
    specialties: [
      'Cơm lam gà sa lửa nướng than củi chấm muối é',
      'Canh cà đắng lòng bò đặc sản Ê Đê',
      'Rượu cần ủ men lá rừng cay nồng đượm tình'
    ],
    tips: [
      'Đến các buôn du lịch cộng đồng như Buôn Ako Dhông hay Buôn Jun để hòa mình vào cuộc sống mộc mạc của đồng bào.'
    ],
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: true,
    ticketFee: 'Miễn phí tại các buôn làng',
    accentColor: '#b45309'
  },
  {
    id: 'hoa-da-lat',
    name: 'Festival Hoa Đà Lạt',
    vietnameseTitle: 'Festival Hoa Đà Lạt - Bản tình ca xứ sở sương mù',
    region: 'tay-nguyen',
    regionName: 'Đại Ngàn Tây Nguyên',
    province: 'Lâm Đồng',
    address: 'Quảng trường Lâm Viên, quanh Hồ Xuân Hương và các làng hoa, Đà Lạt',
    lat: 11.9404,
    lng: 108.4583,
    category: 'culture_nature',
    lunarDate: 'Tổ chức định kỳ tháng 12 (thường 2 năm một lần)',
    solarPeriod: 'Tháng 12 hàng năm',
    solarMonth: 12,
    duration: '5 - 7 ngày mùa đông',
    shortDescription: 'Lễ hội muôn sắc hoa rực rỡ tôn vinh người trồng hoa và thành phố ngàn hoa thơ mộng bậc nhất Việt Nam.',
    description: 'Hàng triệu đóa hoa cẩm tú cầu, hoa hồng, dã quỳ, mimosa khoe sắc quanh bờ hồ Xuân Hương se lạnh. Không gian hoa được bài trí công phu như những tác phẩm nghệ thuật ngoài trời hòa cùng hương cà phê ấm nóng.',
    history: 'Khởi đầu từ năm 2005, Festival Hoa Đà Lạt đã được Thủ tướng Chính phủ công nhận là "Thành phố Festival Hoa của Việt Nam".',
    rituals: [
      'Lễ khai mạc nghệ thuật quy mô lớn bên Hồ Xuân Hương',
      'Lễ tôn vinh những nghệ nhân làng hoa Vạn Thành, Thái Phiên, Hà Đông'
    ],
    festivities: [
      'Không gian trưng bày đại cảnh hoa tươi bên bờ hồ Xuân Hương',
      'Carnival đường phố biểu diễn thời trang hoa và xe hoa nghệ thuật',
      'Đêm hội rượu vang Đà Lạt và thưởng trà atiso miễn phí',
      'Chợ phiên rau hoa công nghệ cao'
    ],
    specialties: [
      'Bánh tráng nướng Đà Lạt giòn rụm nhiều topping',
      'Lẩu gà lá é cay the nóng hổi',
      'Sữa đậu nành nóng ăn kèm bánh ngọt ban đêm',
      'Dâu tây tươi hái tại vườn và mứt dâu atiso'
    ],
    tips: [
      'Tháng 12 Đà Lạt rất lạnh vào chiều tối (khoảng 14-16°C), hãy mang theo áo ấm, khăn quàng cổ.'
    ],
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: false,
    ticketFee: 'Miễn phí không gian công cộng ngoài trời',
    accentColor: '#059669'
  },
  {
    id: 'ca-phe-buon-ma-thuot',
    name: 'Lễ hội Cà phê Buôn Ma Thuột',
    vietnameseTitle: 'Lễ hội Cà phê - Tôn vinh hạt ngọc nâu Đắk Lắk',
    region: 'tay-nguyen',
    regionName: 'Đại Ngàn Tây Nguyên',
    province: 'Đắk Lắk',
    address: 'Quảng trường 10-3 và Bảo tàng Thế giới Cà phê, TP. Buôn Ma Thuột',
    lat: 12.6798,
    lng: 108.0449,
    category: 'culture_nature',
    lunarDate: 'Tổ chức định kỳ vào tháng 3 Dương lịch (2 năm một lần)',
    solarPeriod: 'Tháng 3 hàng năm',
    solarMonth: 3,
    duration: '5 ngày',
    shortDescription: 'Ngày hội tôn vinh cà phê Robusta Việt Nam - thủ phủ cà phê của thế giới.',
    description: 'Hàng ngàn du khách và các barista quốc tế quy tụ về Buôn Ma Thuột để tham gia các buổi pha chế đỉnh cao, thưởng thức ly cà phê pha phin đậm đặc thơm lừng và tham quan các đồn điền cà phê bạt ngàn hoa trắng thơm ngát.',
    history: 'Buôn Ma Thuột sở hữu vùng thổ nhưỡng đất đỏ bazan màu mỡ bậc nhất, là nơi sản xuất cà phê Robusta chất lượng hàng đầu toàn cầu.',
    rituals: [
      'Lễ khai mạc và diễu hành tôn vinh người nông dân và cây cà phê',
      'Hội nghị xúc tiến thương mại quốc tế ngành cà phê'
    ],
    festivities: [
      'Hội thi pha chế Cà phê đặc sản Việt Nam',
      'Phát cà phê miễn phí tại hàng trăm quán cà phê khắp thành phố',
      'Lễ hội đường phố với chủ đề "Buôn Ma Thuột - Nơi hội tụ tinh hoa"'
    ],
    specialties: [
      'Cà phê phin Robusta sánh đặc đậm đà',
      'Bún đỏ Buôn Ma Thuột sợi to thơm nức mùi gạch cua',
      'Bò nhúng me sốt bơ bánh mì giòn'
    ],
    tips: [
      'Đừng quên ghé thăm Bảo tàng Thế giới Cà phê với kiến trúc nhà dài cách điệu uốn lượn cực đẹp.'
    ],
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    isFeatured: false,
    unescoRecognized: false,
    ticketFee: 'Miễn phí nhiều sự kiện mở',
    accentColor: '#b45309'
  },

  // --- PHƯƠNG NAM & MIỀN TÂY ---
  {
    id: 'ba-chua-xu-nui-sam',
    name: 'Lễ hội Vía Bà Chúa Xứ Núi Sam',
    vietnameseTitle: 'Lễ hội Vía Bà Chúa Xứ - Tín ngưỡng phồn thịnh đất phương Nam',
    region: 'nam-bo',
    regionName: 'Phương Nam & Miền Tây',
    province: 'An Giang',
    address: 'Miếu Bà Chúa Xứ Núi Sam, phường Núi Sam, TP. Châu Đốc, tỉnh An Giang',
    lat: 10.6698,
    lng: 105.0862,
    category: 'spiritual',
    lunarDate: 'Từ ngày 22 đến ngày 27 tháng 4 Âm lịch (Chính hội 24/4)',
    solarPeriod: 'Tháng 5 - Tháng 6 hàng năm',
    solarMonth: 5,
    duration: '6 ngày đêm',
    shortDescription: 'Lễ hội tâm linh lớn nhất đồng bằng Nam Bộ với hàng triệu lượt khách hành hương cầu tài lộc, bình an.',
    description: 'Miếu Bà Chúa Xứ nép mình dưới chân ngọn núi Sam huyền bí. Nghi lễ tắm Bà trang nghiêm lúc nửa đêm ngày 23/4 âm lịch thu hút biển người chiêm bái, mong xin được tấm lộc áo Bà để mang về buôn bán hanh thông, gia đạo êm ấm.',
    history: 'Gắn liền với tích Thoại Ngọc Hầu cùng phu nhân Châu Thị Tế khẩn hoang đào kênh Vĩnh Tế và thỉnh tượng Bà từ đỉnh núi Sam xuống lập miếu phụng thờ.',
    rituals: [
      'Lễ tắm Bà Chúa Xứ vào lúc nửa đêm trang trọng',
      'Lễ thỉnh sắc Thoại Ngọc Hầu từ Lăng Ông về Miếu Bà',
      'Lễ Túc yết và lễ Xây chầu rực rỡ điệu bộ sân khấu tuồng cổ'
    ],
    festivities: [
      'Rước đuốc đêm lung linh từ đỉnh núi Sam xuống miếu',
      'Biểu diễn hát bội cổ truyền thâu đêm suốt sáng',
      'Múa lân sư rồng náo nhiệt khắp các nẻo đường Châu Đốc'
    ],
    specialties: [
      'Mắm Châu Đốc trứ danh (mắm thái, mắm cá linh, mắm lóc)',
      'Bún cá Châu Đốc vàng nghệ thơm phức ngải bún',
      'Bánh bò thốt nốt nướng béo ngậy nước cốt dừa'
    ],
    tips: [
      'Nên giữ đồ đạc tư trang cẩn thận vì khu vực quanh miếu rất đông đúc vào các ngày lễ chính 23 và 24.'
    ],
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: false,
    ticketFee: 'Miễn phí vào miếu',
    accentColor: '#dc2626'
  },
  {
    id: 'ok-om-bok-soc-trang',
    name: 'Lễ hội Ok Om Bok & Đua Ghe Ngo',
    vietnameseTitle: 'Lễ hội Ok Om Bok - Lễ Cúng Trăng & Đua Ghe Ngo rực lửa sông nước',
    region: 'nam-bo',
    regionName: 'Phương Nam & Miền Tây',
    province: 'Sóc Trăng',
    address: 'Dòng sông Maspero và Chùa Kh’leang, TP. Sóc Trăng',
    lat: 9.6033,
    lng: 105.9749,
    category: 'heritage_folk',
    lunarDate: 'Rằm tháng 10 Âm lịch (Ngày 15/10 Âm lịch)',
    solarPeriod: 'Tháng 11 hàng năm',
    solarMonth: 11,
    duration: '3 ngày',
    shortDescription: 'Lễ tạ ơn Nữ thần Mặt Trăng của đồng bào Khmer Nam Bộ cùng hội đua ghe Ngo cuồng nhiệt nghẹt thở.',
    description: 'Khi mặt trăng rằm tháng Mười vừa nhô lên khỏi ngọn tre, người Khmer tề tựu làm lễ đút cốm dẹp cầu chúc sức khỏe. Đỉnh cao là cuộc so tài đua ghe Ngo rực lửa trên sông Maspero với hàng trăm tay chèo dũng mãnh giữa tiếng reo hò rền vang mặt nước.',
    history: 'Di sản văn hóa phi vật thể quốc gia, thể hiện sự hòa hợp mật thiết giữa con người và thiên nhiên đất trời sau một mùa lúa chín bội thu.',
    rituals: [
      'Lễ cúng trăng tại sân chùa và trong từng gia đình đồng bào Khmer',
      'Nghi thức đút cốm dẹp cho trẻ em và lắng nghe ước vọng tương lai',
      'Lễ thả đèn gió (Lôi Protip) và đèn nước rực sáng đêm trăng'
    ],
    festivities: [
      'Giải đua ghe Ngo quy mô hàng chục đội ghe khắp các tỉnh miền Tây',
      'Hòa tấu dàn nhạc ngũ âm (Pinpeat) rộn rã sân chùa Kh’leang',
      'Múa Rom-vong uyển chuyển vui tươi trong đêm hội'
    ],
    specialties: [
      'Cốm dẹp trộn dừa nạo đường thốt nốt thơm bùi',
      'Bánh Pía Sóc Trăng nhân sầu riêng trứng muối',
      'Bún nước lèo Sóc Trăng thơm nức mùi mắm bò hóc cá lóc đồng'
    ],
    tips: [
      'Muốn xem đua ghe Ngo rõ nét, hãy có mặt ở bờ sông Maspero trước 8h sáng để chọn được vị trí đứng thoáng đãng.'
    ],
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: false,
    ticketFee: 'Miễn phí ven bờ sông',
    accentColor: '#0284c7'
  },
  {
    id: 'nghinh-ong-can-gio',
    name: 'Lễ hội Nghinh Ông Cần Giờ',
    vietnameseTitle: 'Lễ hội Nghinh Ông - Tạ ơn Thần Nam Hải nơi cửa biển Sài Gòn',
    region: 'nam-bo',
    regionName: 'Phương Nam & Miền Tây',
    province: 'TP. Hồ Chí Minh',
    address: 'Lăng Ông Thủy Tướng, thị trấn Cần Thạnh, huyện Cần Giờ, TP.HCM',
    lat: 10.4042,
    lng: 106.9602,
    category: 'tradition',
    lunarDate: 'Ngày 15 đến 17 tháng 8 Âm lịch',
    solarPeriod: 'Tháng 9 - Tháng 10 hàng năm',
    solarMonth: 9,
    duration: '3 ngày',
    shortDescription: 'Lễ hội văn hóa biển duy nhất của TP.HCM, tôn vinh cá Ông cứu độ ngư dân vượt qua phong ba bão táp.',
    description: 'Hàng trăm chiếc tàu cá giăng cờ hoa rực rỡ giong buồm ra khơi rước linh vị Ông Thủy Tướng vào lăng. Đây là ngày hội lớn nhất của ngư dân miền duyên hải Nam Bộ biểu thị lòng biết ơn biển mẹ nhân hậu.',
    history: 'Di sản văn hóa phi vật thể quốc gia có từ hơn 100 năm trước gắn liền với tín ngưỡng thờ cá Voi của người đi biển phương Nam.',
    rituals: [
      'Lễ tạ ơn các bậc tiền hiền khai hoang mở đất',
      'Đoàn tàu hoa trang hoàng ra khơi rước ngọc cốt Cá Ông vào Lăng',
      'Lễ cúng cơm chay và tưởng nhớ ngư dân tử nạn trên biển'
    ],
    festivities: [
      'Đua thuyền chèo tay truyền thống của thanh niên miền biển',
      'Thả hoa đăng trên biển Cần Giờ trong đêm trăng rằm',
      'Hát bả trạo và biểu diễn xiếc múa rối ngoài trời'
    ],
    specialties: [
      'Hải sản tươi sống Cần Giờ (tôm tích, ghẹ biển, ốc hương)',
      'Xoài cát Cần Giờ ngọt đậm thơm phức',
      'Cơm cháy khô cá dứa một nắng giòn cay'
    ],
    tips: [
      'Từ trung tâm Sài Gòn đi phà Bình Khánh sang Cần Giờ mất khoảng 1.5 giờ, thích hợp cho chuyến dã ngoại cuối tuần.'
    ],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    isFeatured: false,
    unescoRecognized: false,
    ticketFee: 'Miễn phí',
    accentColor: '#0284c7'
  },
  {
    id: 'dieu-tri-cung-tay-ninh',
    name: 'Hội Yến Diêu Trì Cung Núi Bà Đen',
    vietnameseTitle: 'Hội Yến Diêu Trì Cung - Đại lễ rực rỡ Tòa Thánh Tây Ninh',
    region: 'nam-bo',
    regionName: 'Phương Nam & Miền Tây',
    province: 'Tây Ninh',
    address: 'Nội ô Tòa Thánh Tây Ninh, thị xã Hòa Thành, tỉnh Tây Ninh',
    lat: 11.3114,
    lng: 106.1264,
    category: 'spiritual',
    lunarDate: 'Rằm tháng 8 Âm lịch (Đêm 15/8 Âm lịch)',
    solarPeriod: 'Tháng 9 - Tháng 10 hàng năm',
    solarMonth: 9,
    duration: '2 ngày đêm',
    shortDescription: 'Đại lễ tín ngưỡng Cao Đài lớn nhất trong năm với nghi thức dâng phẩm vật chay và múa rồng nhang nghẹt thở.',
    description: 'Hàng trăm ngàn tín đồ mặc áo dài trắng tinh khôi tề tựu về Đền Thánh. Đêm rằm Trung thu, màn múa Long Mã và Rồng Nhang phun lửa sáng rực khuôn viên Tòa Thánh trong mùi hương trầm ngào ngạt đầy mê hoặc.',
    history: 'Tổ chức lần đầu năm 1925, lễ hội nhằm kỷ niệm ngày Đức Hộ Pháp và các vị tiền bối đạo Cao Đài thiết tiệc chay nghinh tiếp Đức Phật Mẫu và Cửu Vị Tiên Nương.',
    rituals: [
      'Đại lễ cúng Đức Phật Mẫu tại Báo Ân Từ lúc nửa đêm',
      'Nghi thức dâng 12 quả phẩm chay tạo hình nghệ thuật tinh xảo',
      'Cầu nguyện quốc thới dân an, thế giới hòa bình'
    ],
    festivities: [
      'Múa Rồng Nhang phun lửa và Ngọc Kỳ Lân rực rỡ',
      'Chiêm ngưỡng hàng trăm gian trưng bày quả phẩm chay khổng lồ',
      'Thưởng thức bữa cơm chay nghĩa tình miễn phí cho tất cả du khách'
    ],
    specialties: [
      'Bánh tráng phơi sương Trảng Bàng cuốn rau rừng thịt luộc',
      'Muối tôm Tây Ninh trứ danh chấm trái cây',
      'Bánh canh Trảng Bàng nước dùng xương hầm trong veo'
    ],
    tips: [
      'Khi vào khu vực Tòa Thánh hành lễ, du khách cần mặc trang phục kín đáo (khuyên mặc quần áo màu sáng hoặc áo dài trắng).'
    ],
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: false,
    ticketFee: 'Miễn phí tham quan và dùng cơm chay',
    accentColor: '#7c3aed'
  },

  // --- LỄ HỘI QUỐC TẾ (INTERNATIONAL FESTIVALS) ---
  {
    id: 'songkran-thailand',
    name: 'Lễ hội Té Nước Songkran (Thái Lan)',
    vietnameseTitle: 'Songkran Festival - Tết té nước gột rửa điều không may',
    region: 'quoc-te',
    regionName: 'Lễ Hội Quốc Tế',
    province: 'Bangkok & Chiang Mai, Thái Lan',
    address: 'Khao San Road & Silom (Bangkok), Cổng Tha Phae (Chiang Mai)',
    lat: 13.7589,
    lng: 100.4974,
    category: 'tradition',
    lunarDate: 'Tết cổ truyền theo lịch Phật giáo Thái Lan (13 - 15 tháng 4)',
    solarPeriod: 'Tháng 4 hàng năm',
    solarMonth: 4,
    duration: '3 - 5 ngày',
    shortDescription: 'Lễ hội chào đón năm mới lớn nhất Thái Lan, nơi mọi người té nước vào nhau để cầu chúc may mắn và bình an.',
    description: 'Songkran là Di sản văn hóa phi vật thể của nhân loại được UNESCO vinh danh năm 2023. Khắp các ngả đường Bangkok và Chiang Mai biến thành trận địa té nước khổng lồ rực rỡ nụ cười, âm nhạc sôi động và tinh thần hòa ái.',
    history: 'Từ nghi lễ rưới nước thơm lên tượng Phật và bàn tay cha mẹ để tỏ lòng tôn kính, Songkran đã phát triển thành lễ hội nước đường phố quy mô bậc nhất hành tinh.',
    rituals: [
      'Nghi thức tắm Phật (Song Nam Phra) tại các ngôi chùa Wat Phra Kaew, Wat Pho',
      'Rót nước thơm hoa lài vào lòng bàn tay người lớn tuổi (Rod Nam Dum Hua) xin lời chúc phúc',
      'Đắp tháp cát mini tại sân chùa dâng công đức'
    ],
    festivities: [
      'Đại chiến té nước bằng súng nước và xô nước khắp các phố Khao San, Silom',
      'Diễu hành sắc màu xe hoa Nữ thần Songkran (Nang Songkran)',
      'Đại nhạc hội EDM nước S2O Songkran quy tụ DJ hàng đầu thế giới'
    ],
    specialties: [
      'Xôi xoài nước cốt dừa béo ngọt (Khao Niew Mamuang)',
      'Pad Thai tôm tươi bọc trứng',
      'Tom Yum Goong cay nồng thơm lá chanh sả tươi'
    ],
    tips: [
      'Hãy chuẩn bị túi chống nước chuyên dụng cho điện thoại và hộ chiếu.',
      'Mặc quần áo mau khô và đeo kính bơi để bảo vệ mắt giữa dòng người té nước.'
    ],
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: true,
    ticketFee: 'Miễn phí trên đường phố',
    accentColor: '#0284c7'
  },
  {
    id: 'hanami-japan',
    name: 'Lễ hội Hoa Anh Đào Hanami (Nhật Bản)',
    vietnameseTitle: 'Hanami Sakura Festival - Thưởng ngoạn hoa anh đào nở rộ xứ Phù Tang',
    region: 'quoc-te',
    regionName: 'Lễ Hội Quốc Tế',
    province: 'Tokyo & Kyoto, Nhật Bản',
    address: 'Công viên Ueno & Shinjuku Gyoen (Tokyo), Đường Triết Học (Kyoto)',
    lat: 35.7148,
    lng: 139.7740,
    category: 'culture_nature',
    lunarDate: 'Mùa xuân nở rộ (Dự báo Sakura Zensen)',
    solarPeriod: 'Cuối tháng 3 đến giữa tháng 4 hàng năm',
    solarMonth: 4,
    duration: '2 - 3 tuần',
    shortDescription: 'Phong tục ngắm hoa truyền thống nghìn năm của người Nhật, trải bạt dã ngoại dưới tán hoa anh đào tuyệt mỹ.',
    description: 'Hanami không chỉ là ngắm hoa mà là nét đẹp triết lý Mono no aware (cảm thức về sự mong manh của cái đẹp). Người Nhật cùng gia đình, đồng nghiệp quây quần dưới những tán hoa Somei Yoshino màu hồng phấn, cùng nâng chén rượu sake và ngắm cánh hoa bay trong gió xuân.',
    history: 'Tập tục này bắt đầu từ thời Nara (thế kỷ thứ 8) khi giới quý tộc ngắm hoa mận, sau đó chuyển sang hoa anh đào thời Heian và lan tỏa thành lễ hội toàn dân thời Edo.',
    rituals: [
      'Dâng trà đạo truyền thống dưới cội anh đào cổ thụ',
      'Cầu nguyện may mắn cho năm tài chính và năm học mới bắt đầu từ tháng 4'
    ],
    festivities: [
      'Trải bạt picnic dã ngoại dưới tán hoa anh đào nở rộ',
      'Yozakura - ngắm hoa anh đào thắp đèn lung linh huyền ảo về đêm',
      'Chèo thuyền ngắm hoa rủ bóng trên dòng hào Chidorigafuchi'
    ],
    specialties: [
      'Bánh Hanami Dango ba màu (hồng, trắng, xanh)',
      'Cơm hộp Bento ngắm hoa anh đào nghệ thuật',
      'Rượu Sake hoa anh đào thơm thanh nhẹ'
    ],
    tips: [
      'Các công viên nổi tiếng như Ueno cần người đến xí chỗ (bằng bạt xanh) từ sáng sớm.',
      'Luôn mang theo túi để gom rác cá nhân bỏ đúng nơi quy định để giữ gìn vệ sinh văn minh.'
    ],
    image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: false,
    ticketFee: 'Miễn phí tại hầu hết công viên công cộng',
    accentColor: '#f43f5e'
  },
  {
    id: 'rio-carnival-brazil',
    name: 'Lễ hội Hóa trang Rio Carnival (Brazil)',
    vietnameseTitle: 'Rio Carnival - Đại tiệc Samba rực lửa nhất hành tinh',
    region: 'quoc-te',
    regionName: 'Lễ Hội Quốc Tế',
    province: 'Rio de Janeiro, Brazil',
    address: 'Sambadrome Marquês de Sapucaí & đường phố Rio de Janeiro',
    lat: -22.9122,
    lng: -43.1970,
    category: 'arts_music',
    lunarDate: 'Thứ Sáu trước Mùa Chay (Lịch Công giáo)',
    solarPeriod: 'Tháng 2 hàng năm',
    solarMonth: 2,
    duration: '5 ngày đêm',
    shortDescription: 'Đại hội hóa trang và thi đấu vũ điệu Samba lớn nhất thế giới với hàng triệu vũ công và cỗ xe khổng lồ rực rỡ.',
    description: 'Rio Carnival là bữa tiệc của thị giác và âm nhạc cuồng nhiệt. Tại đại lộ Sambadrome, các trường dạy Samba danh tiếng nhất thế giới tranh tài trong trang phục đính lông vũ lấp lánh trên nền tiếng trống batucada dồn dập lay động lòng người.',
    history: 'Bắt nguồn từ lễ hội Entrudo của người Bồ Đào Nha vào thế kỷ 19 kết hợp với nhịp điệu và văn hóa châu Phi tạo nên điệu nhảy Samba rực lửa của đất nước Brazil.',
    rituals: [
      'Nghi thức trao chìa khóa thành phố cho Vua Momo (Vua của lễ hội)',
      'Cuộc thi tranh tài chính thức giữa các trường Samba hạng Đặc biệt tại Sambadrome'
    ],
    festivities: [
      'Các bữa tiệc đường phố tự do (Blocos) với hàng triệu người nhảy múa',
      'Diễu hành xe hoa khổng lồ tạo hình tinh xảo cao hàng chục mét',
      'Dạ vũ hóa trang sang trọng tại Cung điện Copacabana'
    ],
    specialties: [
      'Feijoada - món hầm thịt heo đậu đen truyền thống của Brazil',
      'Cocktail Caipirinha pha từ rượu mía Cachaça và chanh tươi',
      'Bánh ngọt Brigadeiro phủ sô-cô-la ngọt ngào'
    ],
    tips: [
      'Vé vào sân Sambadrome cần mua trước từ nhiều tháng.',
      'Tham gia các khối diễu hành đường phố Blocos là cách tuyệt nhất để trải nghiệm văn hóa dân gian không tốn phí.'
    ],
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: false,
    ticketFee: 'Miễn phí tại đường phố, vé xem tại Sambadrome',
    accentColor: '#eab308'
  },
  {
    id: 'holi-india',
    name: 'Lễ hội Sắc màu Holi (Ấn Độ)',
    vietnameseTitle: 'Holi Festival of Colors - Khúc hoan ca mùa xuân xua tan ranh giới',
    region: 'quoc-te',
    regionName: 'Lễ Hội Quốc Tế',
    province: 'Vrindavan, Mathura & Delhi, Ấn Độ',
    address: 'Đền Banke Bihari (Vrindavan) và khắp các đường phố Ấn Độ',
    lat: 27.5816,
    lng: 77.6997,
    category: 'spiritual',
    lunarDate: 'Ngày trăng tròn tháng Phalguna (Lịch Hindu)',
    solarPeriod: 'Tháng 3 hàng năm',
    solarMonth: 3,
    duration: '2 ngày',
    shortDescription: 'Lễ hội rực rỡ nơi mọi người tung bột màu vào nhau, kỷ niệm chiến thắng của cái thiện trước cái ác.',
    description: 'Holi là lễ hội Hindu cổ xưa đánh dấu sự kết thúc của mùa đông và đón chào mùa xuân sung túc. Vào ngày này, mọi rào cản về giai cấp, tuổi tác, địa vị xã hội đều bị xóa nhòa khi mọi người cùng khoác lên mình muôn sắc màu rực rỡ.',
    history: 'Bắt nguồn từ truyền thuyết thần Krishna đùa nghịch bôi màu lên má nàng Radha và sự tích thần Vishnu cứu tín đồ Prahlada khỏi ngọn lửa của nữ quỷ Holika.',
    rituals: [
      'Holika Dahan - Đốt lửa thiêng vào đêm trước ngày lễ để xua đuổi tà khí',
      'Lễ dâng bột màu cầu phúc tại các đền thờ thần Krishna'
    ],
    festivities: [
      'Tung bột màu khô (Gulal) và xịt nước màu rực rỡ vào nhau',
      'Nhảy múa theo nhịp trống Dhol truyền thống',
      'Thăm viếng gia đình, bạn bè và trao nhau những cái ôm đoàn kết'
    ],
    specialties: [
      'Bánh ngọt Gujiya nhân mawa và hạt khô chiên giòn',
      'Thức uống truyền thống Thandai thơm mùi thảo mộc và nghệ tây',
      'Bánh rán Malpua tẩm siro hoa hồng ngọt ngào'
    ],
    tips: [
      'Mặc trang phục màu trắng cũ để màu bám đẹp nhất và bỏ đi sau lễ hội.',
      'Bôi dầu dừa lên tóc và da trước khi tham gia để dễ rửa sạch bột màu sau đó.'
    ],
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: true,
    ticketFee: 'Miễn phí ngoài trời',
    accentColor: '#a855f7'
  },
  {
    id: 'oktoberfest-germany',
    name: 'Lễ hội Bia Oktoberfest (Đức)',
    vietnameseTitle: 'Oktoberfest Munich - Lễ hội bia & văn hóa dân gian lớn nhất thế giới',
    region: 'quoc-te',
    regionName: 'Lễ Hội Quốc Tế',
    province: 'Munich, Bang Bayern, Đức',
    address: 'Bãi đất Theresienwiese, TP. Munich, Đức',
    lat: 48.1314,
    lng: 11.5497,
    category: 'tradition',
    lunarDate: 'Diễn ra vào cuối tháng 9 đến đầu tháng 10 Dương lịch',
    solarPeriod: 'Tháng 9 - Tháng 10 hàng năm',
    solarMonth: 10,
    duration: '16 - 18 ngày',
    shortDescription: 'Lễ hội dân gian tiêu biểu của vùng Bavaria với những vại bia 1 lít bọt trắng và trang phục Dirndl, Lederhosen.',
    description: 'Mỗi năm có hơn 6 triệu lượt du khách đổ về Munich để nâng những chiếc cốc bia Maß khổng lồ. 14 căn lều đại tiệc khổng lồ ngập tràn giai điệu kèn đồng truyền thống và tiếng hát cụng ly "Ein Prosit!" vang dội.',
    history: 'Khởi xướng vào ngày 12/10/1810 nhân đám cưới của Hoàng thái tử Ludwig (sau là vua Ludwig I) với công chúa Therese của Saxe-Hildburghausen.',
    rituals: [
      'Thị trưởng Munich dùng búa đóng vòi vào thùng bia đầu tiên và hô vang "O’zapft is!" (Bia đã mở!)',
      'Đoàn diễu hành trang phục dân gian và xe ngựa chở thùng gỗ cổ kính của các xưởng bia'
    ],
    festivities: [
      'Uống bia tươi truyền thống Munich (chỉ 6 hãng bia đạt chuẩn Munich được phục vụ)',
      'Hát đồng ca các khúc dân ca Đức và khiêu vũ trên ghế dài',
      'Khu hội chợ vui chơi khổng lồ với vòng quay đu quay ngắm toàn cảnh thành phố'
    ],
    specialties: [
      'Gà nướng nguyên con Hendle thơm bơ giòn da',
      'Xúc xích trắng Weisswurst kèm mù tạt ngọt và bánh mì xoắn Brezn',
      'Giò heo nướng muối Schweinshaxe giòn rụm bên ngoài, mềm ngậy bên trong'
    ],
    tips: [
      'Vào cửa khu vực lễ hội hoàn toàn miễn phí, nhưng các lều bia lớn kín chỗ rất nhanh vào cuối tuần.',
      'Nên đặt bàn trước hoặc đến sớm trước 11h sáng các ngày trong tuần.'
    ],
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: false,
    ticketFee: 'Miễn phí vào cổng Theresienwiese (tính tiền món ăn & bia)',
    accentColor: '#f59e0b'
  },
  {
    id: 'venice-carnival-italy',
    name: 'Lễ hội Mặt nạ Venice Carnival (Ý)',
    vietnameseTitle: 'Carnevale di Venezia - Bí ẩn cổ tích bên kênh đào Venice',
    region: 'quoc-te',
    regionName: 'Lễ Hội Quốc Tế',
    province: 'Venice, Vùng Veneto, Ý',
    address: 'Quảng trường San Marco & kênh đào Grand Canal, Venice',
    lat: 45.4342,
    lng: 12.3389,
    category: 'arts_music',
    lunarDate: 'Kéo dài 2 tuần trước Thứ Tư Lễ Tro (Mùa Chay Kitô giáo)',
    solarPeriod: 'Tháng 2 hàng năm',
    solarMonth: 2,
    duration: '14 ngày',
    shortDescription: 'Lễ hội hóa trang cổ điển và ma mị nhất thế giới với những chiếc mặt nạ gốm sứ và trang phục quý tộc Phục hưng.',
    description: 'Venice mùa Carnival như một bộ phim lịch sử sống động. Hàng ngàn nhân vật trong áo choàng nhung dạ, mũ lông chim và những chiếc mặt nạ Bauta, Volto bí ẩn lướt đi trên những cây cầu đá cổ kính và thuyền Gondola bồng bềnh trên sóng nước.',
    history: 'Được ghi nhận từ năm 1162 sau chiến thắng quân sự của Cộng hòa Venezia. Chiếc mặt nạ cho phép người dân Venice vượt qua mọi ranh giới phân biệt giai cấp và sống ẩn danh trong mùa lễ hội.',
    rituals: [
      'Volo dell’Angelo (Chuyến bay của Thiên Thần) hạ từ tháp chuông San Marco',
      'Lễ trao giải chiếc mặt nạ và trang phục hóa trang đẹp nhất (La Maschera più bella)'
    ],
    festivities: [
      'Dạ tiệc hóa trang trong các cung điện lộng lẫy ven sông',
      'Diễu hành thuyền gondola hóa trang trên kênh Grand Canal',
      'Nghệ sĩ kịch đường phố Commedia dell’arte biểu diễn tự do'
    ],
    specialties: [
      'Bánh rán Frittelle rắc đường bột nhân kem vani thơm ngọt',
      'Bánh bột Galani mỏng giòn truyền thống Venice',
      'Rượu vang sủi Prosecco và cocktail Bellini mát lành'
    ],
    tips: [
      'Hãy chuẩn bị cho mình một chiếc mặt nạ vẽ tay tại các xưởng nghệ nhân địa phương như Ca’ Macana.',
      'Sáng sớm quanh cầu Than Thở (Ponte dei Sospiri) là thời điểm chụp ảnh tuyệt mỹ nhất khi chưa đông khách.'
    ],
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: false,
    ticketFee: 'Miễn phí ngoài trời tại Quảng trường San Marco',
    accentColor: '#8b5cf6'
  },
  {
    id: 'la-tomatina-spain',
    name: 'Lễ hội Ném Cà Chua La Tomatina (Tây Ban Nha)',
    vietnameseTitle: 'La Tomatina - Cuộc chiến thực phẩm vui nhộn nhất địa cầu',
    region: 'quoc-te',
    regionName: 'Lễ Hội Quốc Tế',
    province: 'Buñol, Valencia, Tây Ban Nha',
    address: 'Quảng trường Plaza del Pueblo, thị trấn Buñol, Tây Ban Nha',
    lat: 39.4189,
    lng: -0.7913,
    category: 'heritage_folk',
    lunarDate: 'Thứ Tư cuối cùng của tháng 8 hàng năm',
    solarPeriod: 'Tháng 8 hàng năm',
    solarMonth: 8,
    duration: '1 ngày',
    shortDescription: 'Hơn 150 tấn cà chua chín mọng biến toàn bộ thị trấn Buñol thành biển màu đỏ rực trong tiếng cười phấn khích.',
    description: 'Đúng 11h trưa sau phát đại bác hiệu lệnh, hàng loạt xe tải chở đầy cà chua tiến vào phố. Hơn 20.000 người từ khắp nơi trên thế giới lao vào cuộc chiến ném cà chua kéo dài đúng 60 phút, phủ kín đường phố bằng màu đỏ rực rỡ.',
    history: 'Bắt đầu một cách ngẫu hứng vào năm 1945 trong một cuộc diễu hành thanh niên tại Buñol, sau nhiều năm đã trở thành Di sản Du lịch Quốc tế của Tây Ban Nha.',
    rituals: [
      'Palo Jabón - Cuộc thi trèo lên cột gỗ bôi mỡ cao vút để giật chiếc đùi heo muối Jamón treo trên đỉnh',
      'Tiếng pháo bắn mở màn và phát pháo kết thúc chính xác sau 1 giờ chiến đấu'
    ],
    festivities: [
      'Cuộc đại chiến ném cà chua chín bóp mềm',
      'Tắm rửa tập thể dưới vòi cứu hỏa của người dân địa phương sau trận đấu',
      'Hội chợ ca nhạc và ăn mừng paella khổng lồ suốt đêm'
    ],
    specialties: [
      'Cơm rang hải sản Tây Ban Nha Paella nấu chảo khổng lồ',
      'Đùi heo muối Jamón Ibérico trứ danh',
      'Rượu vang trái cây Sangria đá lạnh sảng khoái'
    ],
    tips: [
      'Bắt buộc bóp nát quả cà chua trước khi ném để tránh gây chấn thương cho người khác.',
      'Đeo kính bơi kín mắt để chống nước axit cà chua cay mắt.'
    ],
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: false,
    ticketFee: 'Vé tham gia mua trước (khoảng 15€)',
    accentColor: '#dc2626'
  },
  {
    id: 'yi-peng-chiangmai',
    name: 'Lễ hội Thả Đèn Trời Yi Peng & Loy Krathong',
    vietnameseTitle: 'Yi Peng Lantern Festival - Biển sao lung linh giữa trời đêm Chiang Mai',
    region: 'quoc-te',
    regionName: 'Lễ Hội Quốc Tế',
    province: 'Chiang Mai, Thái Lan',
    address: 'Sông Ping & Trung tâm Văn hóa Lanna, Chiang Mai',
    lat: 18.7961,
    lng: 98.9793,
    category: 'spiritual',
    lunarDate: 'Đêm trăng tròn tháng 12 âm lịch Lanna (Tháng 11)',
    solarPeriod: 'Tháng 11 hàng năm',
    solarMonth: 11,
    duration: '3 ngày đêm',
    shortDescription: 'Hàng ngàn chiếc đèn trời Khom Loi bay lên không trung mang theo những ước nguyện tốt lành gửi tới trời phật.',
    description: 'Đêm Yi Peng là khoảnh khắc huyền ảo bậc nhất châu Á. Bầu trời đêm miền Bắc Thái Lan bừng sáng bởi biển đèn lồng vàng óng trôi bồng bềnh, trong khi dưới dòng sông Ping, hàng vạn chiếc hoa đăng Loy Krathong kết từ lá chuối lung linh trôi theo con nước.',
    history: 'Di sản của vương quốc Lanna cổ xưa, thả đèn Khom Loi tượng trưng cho việc buông bỏ những muộn phiền, thù hận và đón nhận ánh sáng trí tuệ của Đức Phật.',
    rituals: [
      'Tụng kinh và thiền định dưới sự dẫn dắt của các vị cao tăng',
      'Thắp nến thỉnh nguyện trước khi đồng loạt thả đèn bay lên trời',
      'Thả hoa đăng Krathong tạ ơn Nữ thần Nước Phra Mae Khongkha'
    ],
    festivities: [
      'Đồng loạt thả hàng vạn chiếc đèn trời Khom Loi trong tiếng chuông chùa',
      'Cuộc thi sắc đẹp Nàng Nopphamat lộng lẫy xiêm y truyền thống Lanna',
      'Trang hoàng đèn lồng ngũ sắc khắp các con hẻm cổ thành Chiang Mai'
    ],
    specialties: [
      'Mì xào cà ri Khao Soi béo ngậy nước cốt dừa và gà om',
      'Xúc xích thảo mộc miền Bắc Thái Sai Oua cay nồng thơm ngát',
      'Trà sữa Thái đỏ đá mát lạnh'
    ],
    tips: [
      'Chỉ được thả đèn tại các khu vực được chính quyền cấp phép để đảm bảo an toàn hàng không và phòng cháy chữa cháy.',
      'Nên mặc trang phục kín đáo che vai và đầu gối khi tham gia các điểm thiền định tôn nghiêm.'
    ],
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: true,
    ticketFee: 'Miễn phí ven sông Ping, có vé khu vực đại lễ riêng',
    accentColor: '#f59e0b'
  },
  {
    id: 'harbin-ice-festival',
    name: 'Lễ hội Băng Đăng Quốc tế Cáp Nhĩ Tân (Trung Quốc)',
    vietnameseTitle: 'Harbin Ice and Snow World - Kỳ quan cung điện băng tuyết khổng lồ',
    region: 'quoc-te',
    regionName: 'Lễ Hội Quốc Tế',
    province: 'Cáp Nhĩ Tân, Hắc Long Giang, Trung Quốc',
    address: 'Công viên Băng Tuyết Đại Thế Giới, Cáp Nhĩ Tân',
    lat: 45.7744,
    lng: 126.5741,
    category: 'arts_music',
    lunarDate: 'Từ đầu tháng 1 đến cuối tháng 2 hàng năm',
    solarPeriod: 'Tháng 1 - Tháng 2 hàng năm',
    solarMonth: 1,
    duration: '2 tháng mùa đông',
    shortDescription: 'Lễ hội băng tuyết lớn nhất thế giới với các tòa lâu đài, cung điện nguy nga tạc hoàn toàn từ những khối băng nguyên chất.',
    description: 'Dưới cái lạnh âm 25°C đến 30°C của phương Bắc, dòng sông Tùng Hoa đóng băng dày được khai thác hàng trăm ngàn mét khối để dựng nên một thành phố thần tiên bằng băng. Về đêm, hệ thống đèn LED đa sắc thắp sáng từ bên trong các bức tường băng tạo nên cảnh tượng ngoạn mục.',
    history: 'Bắt đầu từ hội hoa đăng băng truyền thống thời nhà Thanh năm 1963, Cáp Nhĩ Tân nay là lễ hội băng đăng quy mô số 1 toàn cầu sánh ngang lễ hội tuyết Sapporo.',
    rituals: [
      'Lễ lấy tảng băng thiêng đầu tiên trên sông Tùng Hoa khai hội',
      'Lễ khai mạc bắn pháo hoa rực sáng cung điện băng khổng lồ'
    ],
    festivities: [
      'Trượt máng băng dài kỷ lục hơn 500 mét nghẹt thở',
      'Chiêm ngưỡng các tác phẩm điêu khắc băng tinh xảo của nghệ sĩ khắp thế giới',
      'Bơi lội mùa đông trong hố băng sông Tùng Hoa dũng cảm'
    ],
    specialties: [
      'Kem ốc quế Mã Điệt Nhĩ (Modern Ice Cream) ăn giữa trời tuyết lạnh',
      'Xúc xích đỏ Harbin hun khói thơm lừng chấm tương cay',
      'Kẹo hồ lô bọc đường giòn tan ngọt lịm'
    ],
    tips: [
      'Cần trang bị áo khoác lông vũ dày, quần giữ nhiệt nhiều lớp, miếng dán sưởi ấm cho điện thoại vì pin tụt rất nhanh ở nhiệt độ âm sâu.'
    ],
    image: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: false,
    ticketFee: 'Vé vào cổng Công viên Băng Tuyết',
    accentColor: '#38bdf8'
  },
  {
    id: 'dia-de-los-muertos',
    name: 'Lễ hội Người Chết Día de los Muertos (Mexico)',
    vietnameseTitle: 'Día de los Muertos - Ngày hội tưởng nhớ ấm áp tình thân bên hoa cúc vạn thọ',
    region: 'quoc-te',
    regionName: 'Lễ Hội Quốc Tế',
    province: 'Oaxaca & Mexico City, Mexico',
    address: 'Nghĩa trang San Felipe del Agua (Oaxaca) & Zócalo (Mexico City)',
    lat: 17.0609,
    lng: -96.7256,
    category: 'spiritual',
    lunarDate: 'Ngày 1 và 2 tháng 11 Dương lịch hàng năm',
    solarPeriod: 'Tháng 11 hàng năm',
    solarMonth: 11,
    duration: '2 ngày chính',
    shortDescription: 'Lễ hội truyền thống Mexico tôn vinh những người đã khuất bằng hoa cúc vàng rực, hộp sọ đường và nụ cười ấm áp.',
    description: 'Khác với quan niệm sợ hãi cái chết, người Mexico tin rằng linh hồn người thân yêu sẽ trở về đoàn tụ trong ngày này. Đường phố ngập tràn hoa cúc vạn thọ cam rực rỡ, ánh nến lung linh và những gương mặt hóa trang đầu lâu La Catrina thanh lịch.',
    history: 'Di sản văn hóa phi vật thể của nhân loại được UNESCO vinh danh năm 2008, kết hợp giữa tín ngưỡng Aztec cổ xưa và lễ Các Thánh của đạo Công giáo.',
    rituals: [
      'Lập bàn thờ Ofrenda trang trí ảnh người thân, hoa cúc vạn thọ và món ăn họ yêu thích',
      'Thắp nến dẫn đường cho các linh hồn tìm về gia đình trong đêm nghĩa trang'
    ],
    festivities: [
      'Diễu hành hóa trang đầu lâu rực rỡ Catrinas trên đại lộ Paseo de la Reforma',
      'Âm nhạc Mariachi rộn ràng tại các quảng trường và khu nghĩa trang',
      'Thưởng thức bánh mì Pan de Muerto ngọt ngào rắc đường'
    ],
    specialties: [
      'Bánh mì Pan de Muerto hình xương chữ thập rắc đường hoa cam',
      'Đầu lâu đường nghệ thuật Calaveras de Azúcar',
      'Sốt sô-cô-la ớt Mole Negro truyền thống Oaxaca'
    ],
    tips: [
      'Thành phố Oaxaca và đảo Janitzio ở hồ Pátzcuaro là hai nơi tổ chức giàu bản sắc và thiêng liêng nhất.',
      'Hãy thể hiện sự tôn trọng khi ghé thăm các nghĩa trang địa phương vào ban đêm.'
    ],
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: true,
    ticketFee: 'Miễn phí ngoài trời',
    accentColor: '#ec4899'
  },
  {
    id: 'burning-man-usa',
    name: 'Đại hội Nghệ thuật Sa mạc Burning Man (Mỹ)',
    vietnameseTitle: 'Burning Man - Thành phố phù du tự biểu đạt giữa sa mạc Black Rock',
    region: 'quoc-te',
    regionName: 'Lễ Hội Quốc Tế',
    province: 'Black Rock Desert, Nevada, Mỹ',
    address: 'Black Rock City (sa mạc Black Rock), Nevada, Hoa Kỳ',
    lat: 40.7864,
    lng: -119.2065,
    category: 'arts_music',
    lunarDate: 'Chủ nhật trước Ngày Lao động Mỹ đến Ngày Lao động (Cuối tháng 8 - đầu tháng 9)',
    solarPeriod: 'Tháng 9 hàng năm',
    solarMonth: 9,
    duration: '8 ngày',
    shortDescription: 'Cộng đồng nghệ thuật tự túc khép kín giữa lòng sa mạc, tôn vinh sáng tạo vô hạn và không để lại dấu vết.',
    description: 'Hơn 70.000 người cùng nhau dựng nên "Black Rock City" - một đô thị bán nguyệt giữa sa mạc cát bụi khô cằn. Nơi đây không sử dụng tiền bạc (chỉ tặng quà), quy tụ những tác phẩm điêu khắc nghệ thuật khổng lồ, xe hoa đột biến (Mutant vehicles) và kết thúc bằng màn thiêu bức tượng Gỗ Người khổng lồ rực lửa.',
    history: 'Khởi đầu từ năm 1986 tại bãi biển Baker ở San Francisco bởi Larry Harvey, Burning Man nay là biểu tượng văn hóa sáng tạo toàn cầu.',
    rituals: [
      'Nghi thức đốt tượng Gỗ Người (The Man) vào tối thứ Bảy',
      'Lễ thiêu đền tưởng niệm (Temple Burn) tĩnh lặng vào tối Chủ nhật'
    ],
    festivities: [
      'Khám phá hàng trăm công trình điêu khắc tương tác siêu thực',
      'Đại tiệc âm nhạc điện tử bất tận trên các cỗ xe đột biến Art Car',
      'Các xưởng nghệ thuật, yoga và chia sẻ sáng tạo hoàn toàn miễn phí'
    ],
    specialties: [
      'Nền kinh tế chia sẻ tặng quà (Gifting economy) - đồ ăn thức uống do các trại tự chuẩn bị và mời nhau'
    ],
    tips: [
      'Nguyên tắc vàng: "Leave No Trace" (Không để lại bất kỳ cọng rác nào khi rời đi).',
      'Cần tự chuẩn bị đầy đủ nước uống (tối thiểu 6 lít/ngày/người), thức ăn, lều chống gió bụi và kính bảo hộ sa mạc.'
    ],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    unescoRecognized: false,
    ticketFee: 'Vé tham dự mua trước qua hệ thống xổ số',
    accentColor: '#f97316'
  }
];
