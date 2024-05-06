import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.AUTH_DOMAIN': JSON.stringify(env.AUTH_DOMAIN),
      'process.env.AUTH_CLIENT_ID': JSON.stringify(env.AUTH_CLIENT_ID),
      'process.env.STRIPE_API_KEY': JSON.stringify(env.STRIPE_API_KEY),
      'process.env.STRIPE_SECRET_KEY': JSON.stringify(env.STRIPE_SECRET_KEY),
    },
    plugins: [react()],
  };
});