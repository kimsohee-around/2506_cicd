// const REQ_URL = 'http://localhost:8080'
// vite 에서 빌드할 때 환경변수 가져오는 방법
const REQ_URL = import.meta.env.VITE_REQ_API_HOST;
export default REQ_URL