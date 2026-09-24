export const profile = {
  name: 'Hà Nguyễn Việt Thành',
  role: 'Information Systems Student · Web Developer · 3D Modeler',
  email: 'hanguyenvietthanh123@gmail.com',
  phone: '093 884 9389',
  location: 'TP. Hồ Chí Minh, Việt Nam',
  locationEn: 'Ho Chi Minh City, Vietnam',
  intro:
    'Sinh viên năm 3 ngành Hệ thống Thông tin tại UIT, đồng thời theo học 3D Modeling tại VTC Academy. Mình xây dựng sản phẩm ở giao điểm giữa công nghệ, trải nghiệm người dùng và hình ảnh 3D.',
  introEn:
    'A third-year Information Systems student at UIT, while studying 3D Modeling at VTC Academy. I build products at the intersection of technology, user experience, and 3D visuals.',
}

export const stats = [
  { value: '03+', label: 'Web / research projects', labelVi: 'Dự án web / nghiên cứu' },
  { value: '01', label: 'Client website', labelVi: 'Website khách hàng' },
  { value: '02', label: '3D projects', labelVi: 'Dự án 3D' },
  { value: '02', label: 'Parallel study tracks', labelVi: 'Hướng học song song' },
]

export const education = [
  {
    period: '2024 — present',
    periodVi: '2024 — nay',
    school: 'Đại học Công nghệ Thông tin — ĐHQG TP.HCM (UIT)',
    schoolEn: 'University of Information Technology — VNU-HCM (UIT)',
    major: 'Information Systems',
    majorVi: 'Hệ thống Thông tin',
    note: 'Currently a third-year student.',
    noteVi: 'Hiện là sinh viên năm 3.',
  },
  {
    period: 'Currently studying',
    periodVi: 'Đang theo học',
    school: 'VTC Academy',
    major: '3D Modeling',
    note: 'A parallel diploma program focused on 3D modeling skills.',
    noteVi: 'Chương trình văn bằng song song tập trung vào kỹ năng dựng hình 3D.',
  },
]

export const skillGroups = [
  {
    title: 'Web & Systems',
    titleVi: 'Web & hệ thống',
    items: ['ReactJS', 'JavaScript', 'Responsive UI', 'Information Systems'],
  },
  {
    title: '3D & Visual',
    items: ['3D Modeling', 'Asset Presentation', 'Lighting / Render Workflow', 'Visual Storytelling'],
  },
  {
    title: 'Working style',
    titleVi: 'Phong cách làm việc',
    items: ['Responsibility', 'Proactive', 'Diligent', 'Friendly & collaborative'],
    itemsVi: ['Trách nhiệm', 'Chủ động', 'Cần cù', 'Thân thiện & hợp tác'],
  },
]

// TODO: Thay tên, mô tả, công nghệ, link GitHub/demo và ảnh thật của từng dự án khi có.
export const projects = [
  {
    id: 1,
    category: 'web',
    type: 'Academic',
    title: 'Website Dự Án MindScan-AI',
    titleEn: 'MindScan-AI Project Website',
    description:
      'Dự án website theo môn học quản lý ở Đại Học UIT, đảm nhận vai trò frontend hoàn toàn cho dự án, hiện tại dự án đã hoàn thành và được deploy dầy đủ. Đây là dự án để hỗ trợ sức khỏe tinh thần cho giới trẻ và sinh viên trước những áp lực tâm trí hiện nay',
    descriptionEn:
      'A course project at UIT where I handled the frontend end-to-end. The completed product supports young people and students facing mental pressure.',
    tags: ['Course Project', 'Web Development'],
    tagsEn: ['Course Project', 'Web Development'],
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
    titleEn: 'EKLASSES Website for Independent Teachers',
    description:
      'Dự án đảm nhận với vai trò lead và frontend, hiện vẫn đang được phát triển và hoàn thiện hơn, do đó vẫn chưa deploy lên các nền tảng',
    descriptionEn:
      'An ongoing project where I work as the lead and frontend developer. The product is still being refined and has not been deployed yet.',
    tags: ['Course Project', 'Information Systems'],
    tagsEn: ['Course Project', 'Information Systems'],
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
    titleEn: 'Scientific Research — Web App Project',
    description:
      'Dự án NCKH vẫn đang trong quá trình làm nên hiện tại không được phép public lên, khi hoàn thành sẽ update lên ngay sau đó.',
    descriptionEn:
      'This research project is still in progress and cannot be made public yet. More details will be shared when it is completed.',
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
    titleEn: 'Taxi Company Website in Tay Ninh',
    description:
      'Dự án thực tế cho một hãng taxi tại Tây Ninh, vẫn đang chạy trên vercel',
    descriptionEn: 'A real-world website project for a taxi company in Tay Ninh, currently running on Vercel.',
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
    titleEn: '3D Modeling Project 01',
    description:
      'Bài tập 3D hoàn chỉnh tại VTC Academy',
    descriptionEn: 'A completed 3D exercise created at VTC Academy.',
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
    titleEn: '3D Modeling Project 02',
    description:
      'Thiết kế lại iPhone theo sở thích cá nhân',
    descriptionEn: 'A personal redesign of an iPhone model.',
    tags: ['3D Modeling', 'Portfolio Piece'],
    image: '/assets/project_image/3Dproject2.jpg',
    accent: 'green',
    live: 'https://drive.google.com/drive/folders/194zwsWhRM9GE4BnOTVS08ux3YbbTA2w9?usp=sharing',
    repo: 'https://drive.google.com/drive/folders/194zwsWhRM9GE4BnOTVS08ux3YbbTA2w9?usp=sharing',
  },
]

export const highlights = [
  { en: 'Semester II GPA in 2024: 9+', vi: 'GPA học kỳ II năm 2024: 9+' },
  { en: '2024 university entrance exam: Math 9.5 · Physics 9.0', vi: 'Điểm thi đại học 2024: Toán 9.5 · Lý 9.0' },
  { en: 'Awarded prizes in Mathematics competitions at school, district, and city levels.', vi: 'Từng đạt các giải học sinh giỏi môn Toán ở cấp trường, quận và thành phố.' },
]
