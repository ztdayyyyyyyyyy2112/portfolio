# Portfolio — Hà Nguyễn Việt Thành

Portfolio ReactJS/Vite được dựng theo hướng tuyển dụng chuyên nghiệp, responsive và có dark/light mode.

## Chạy trong VS Code

```bash
npm install
npm run dev
```

Sau đó mở địa chỉ Vite hiển thị trong terminal (thường là `http://localhost:5173`).

## Build production

```bash
npm run build
npm run preview
```

## Chỉnh nội dung nhanh

Phần lớn nội dung nằm trong:

- `src/data/portfolio.js`: thông tin cá nhân, học vấn, kỹ năng, dự án.
- `public/assets/profile.jpg`: ảnh chân dung hiện tại, được lấy từ CV.
- `public/Nguyen-Viet-Thanh-CV.pdf`: CV tải xuống từ nút "Tải CV".


1. Bỏ ảnh vào `public/assets/projects/`.
2. Thêm trường `image: '/assets/projects/ten-anh.jpg'` trong project tương ứng.
3. Thay `ProjectVisual` bằng `<img>` hoặc cập nhật component để ưu tiên ảnh khi có.


- Tên chính xác của 2 project môn học.
- Tên/đề tài NCKH.
- Link website taxi tại Tây Ninh (nếu public).
- Công nghệ, vai trò và kết quả cụ thể cho từng project.
- GitHub / LinkedIn nếu có.
- Render thật của 2 project 3D.

> Lưu ý: Website chỉ hiển thị TP.HCM, không đưa địa chỉ nhà chi tiết từ CV lên public portfolio.
