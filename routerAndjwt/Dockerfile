# =========================
# 1단계: Build Stage
# =========================
FROM node:20-alpine AS build

# 작업 디렉토리 생성
WORKDIR /app

# package.json, lock 파일만 먼저 복사 → 캐시 활용
COPY package*.json ./

# 의존성 설치
RUN npm install

# 프로젝트 소스 복사
COPY ./.env /app/.env
COPY . .

# Vite build
RUN npm run build

# =========================
# 2단계: Production Stage
# =========================
FROM nginx:alpine

# Nginx 기본 index.html 대신 Vite 빌드 산출물 사용
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx 설정 파일 덮어쓸 수도 있음 (선택)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
