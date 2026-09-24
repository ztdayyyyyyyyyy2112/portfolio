export const profile = {
  name: 'Hà Nguyễn Việt Thành',
  role: 'Information Systems Student · Web Developer · 3D Modeler',
  email: 'hanguyenvietthanh123@gmail.com',
  phone: '093 884 9389',
  location: 'TP. Hồ Chí Minh, Việt Nam',
  intro:
    'Sinh viên năm 3 ngành Hệ thống Thông tin tại UIT, đồng thời theo học 3D Modeling tại VTC Academy. Mình xây dựng sản phẩm ở giao điểm giữa công nghệ, trải nghiệm người dùng và hình ảnh 3D.',
}

export const stats = [
  { value: '03+', label: 'Web / research projects' },
  { value: '01', label: 'Client website' },
  { value: '02', label: '3D projects' },
  { value: '02', label: 'Parallel study tracks' },
]

export const education = [
  {
    period: '2024 — nay',
    school: 'Đại học Công nghệ Thông tin — ĐHQG TP.HCM (UIT)',
    major: 'Hệ thống Thông tin',
    note: 'Hiện là sinh viên năm 3.',
  },
  {
    period: 'Đang theo học',
    school: 'VTC Academy',
    major: '3D Modeling',
    note: 'Chương trình văn bằng song song tập trung vào kỹ năng dựng hình 3D.',
  },
]

export const skillGroups = [
  {
    title: 'Web & Systems',
    items: ['ReactJS', 'JavaScript', 'Responsive UI', 'Information Systems'],
  },
  {
    title: '3D & Visual',
    items: ['3D Modeling', 'Asset Presentation', 'Lighting / Render Workflow', 'Visual Storytelling'],
  },
  {
    title: 'Working style',
    items: ['Trách nhiệm', 'Chủ động', 'Cần cù', 'Thân thiện & hợp tác'],
  },
]

// TODO: Thay tên, mô tả, công nghệ, link GitHub/demo và ảnh thật của từng dự án khi có.
export const projects = [
  {
    id: 1,
    category: 'web',
    type: 'Academic',
    title: 'Website Dự Án MindScan-AI',
    description:
      'Dự án website theo môn học quản lý ở Đại Học UIT, đảm nhận vai trò frontend hoàn toàn cho dự án, hiện tại dự án đã hoàn thành và được deploy dầy đủ. Đây là dự án để hỗ trợ sức khỏe tinh thần cho giới trẻ và sinh viên trước những áp lực tâm trí hiện nay',
    tags: ['Course Project', 'Web Development'],
    image: '/assets/project_image/mindscanAI.png',
    accent: 'violet',
    live: 'https://temporary-snappy-peridot-xrof31b.vercel.app/',
    repo: 'https://github.com/ztdayyyyyyyyyy2112/-mindscan-ai',
  },
  {
    id: 2,
    category: 'web',
    type: 'Academic',
    title: 'Dự án Website EKLASSES Hỗ trợ quản lý dành cho Giáo viên tự do',
    description:
      'Dự án đảm nhận với vai trò lead và frontend, hiện vẫn đang được phát triển và hoàn thiện hơn, do đó vẫn chưa deploy lên các nền tảng',
    tags: ['Course Project', 'Information Systems'],
    image: '/assets/project_image/eklasses.png',
    accent: 'blue',
    live: '',
    repo: 'https://github.com/ThanhVu6102/tutoring-platform',
  },
  {
    id: 3,
    category: 'research',
    type: 'Research',
    title: 'Nghiên cứu khoa học — Web App Project',
    description:
      'Dự án NCKH vẫn đang trong quá trình làm nên hiện tại không được phép public lên, khi hoàn thành sẽ update lên ngay sau đó.',
    tags: ['Research', 'Web Application'],
    accent: 'cyan',
    live: '',
    repo: '',
  },
  {
    id: 4,
    category: 'client',
    type: 'Client',
    title: 'Website hãng taxi tại Tây Ninh',
    description:
      'Dự án thực tế cho một hãng taxi tại Tây Ninh, vẫn đang chạy trên vercel',
    tags: ['Client Work', 'Website'],
    image: '/assets/project_image/taxi.png',

    accent: 'amber',
    live: 'https://taxitoantayninh.vercel.app/',
    repo: 'https://github.com/ztdayyyyyyyyyy2112/taxitoantayninh',
  },
  {
    id: 5,
    category: '3d',
    type: '3D',
    title: '3D Modeling Project 01',
    description:
      'Bài tập 3D hoàn chỉnh tại VTC Academy',
    tags: ['3D Modeling', 'Course Project'],
    image: '/assets/project_image/3Dproject1.jpg',
    accent: 'rose',
    live: 'https://drive.google.com/drive/folders/1lwNkcl5g4GdnAUVVN9f2CIl7_0Xpj1sH?usp=sharing',
    repo: 'https://drive.google.com/drive/folders/1lwNkcl5g4GdnAUVVN9f2CIl7_0Xpj1sH?usp=sharing',
  },
  {
    id: 6,
    category: '3d',
    type: '3D',
    title: '3D Modeling Project 02',
    description:
      'Thiết kế lại iPhone theo sở thích cá nhân',
    tags: ['3D Modeling', 'Portfolio Piece'],
    image: '/assets/project_image/3Dproject2.jpg',
    accent: 'green',
    live: 'https://drive.google.com/drive/folders/194zwsWhRM9GE4BnOTVS08ux3YbbTA2w9?usp=sharing',
    repo: 'https://drive.google.com/drive/folders/194zwsWhRM9GE4BnOTVS08ux3YbbTA2w9?usp=sharing',
  },
]

export const highlights = [
  'GPA học kỳ II năm 2024: 9+',
  'Điểm thi đại học 2024: Toán 9.5 · Lý 9.0',
  'Từng đạt các giải học sinh giỏi môn Toán ở cấp trường, quận và thành phố.',
]
