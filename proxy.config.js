export default function proxy() {
    return {
        '/api/(.*)': {
            target: 'http://localhost:3000',
            pathRewrite: { '^/api': '' },
            changeOrigin: true,
        }
    };
}