import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Використовуємо -swc, як у вас

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
});
