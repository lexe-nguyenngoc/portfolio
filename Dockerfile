# Giai đoạn 1: Xây dựng (Builder)
FROM node:slim AS builder

# Đặt thư mục làm việc bên trong container
WORKDIR /app

# Sao chép package.json và package-lock.json (hoặc yarn.lock) vào thư mục làm việc
# Dấu gạch chéo "/" ở cuối chỉ ra rằng /app là một thư mục
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép phần còn lại của mã ứng dụng của bạn
COPY . .

# Xây dựng ứng dụng Next.js của bạn
# Next.js mặc định sẽ xây dựng ra thư mục .next
RUN npm run build

# Giai đoạn 2: Sản xuất (Production)
FROM node:slim

# Đặt thư mục làm việc
WORKDIR /app

# Sao chép chỉ các tệp dựng cần thiết từ giai đoạn builder
# Đối với Next.js, đầu ra xây dựng nằm trong thư mục .next
COPY --from=builder /app/.next ./.next

# Sao chép package.json để chỉ cài đặt các phụ thuộc sản xuất
COPY package.json ./

# Cài đặt chỉ các phụ thuộc sản xuất
RUN npm install --omit=dev

# Mở cổng mà ứng dụng của bạn lắng nghe (Next.js thường chạy trên cổng 3000)
EXPOSE 3000

# Lệnh để chạy ứng dụng Next.js ở chế độ sản xuất
CMD ["npm", "start"]
