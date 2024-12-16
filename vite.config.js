import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './', // La raíz será `frontend` porque es donde está el archivo `vite.config.js`
  build: {
    outDir: '../dist', // El resultado del build estará fuera de `frontend`, en `../dist`
    emptyOutDir: true, // Limpia el directorio `dist` antes del build
  },
  plugins: [react()],
});
