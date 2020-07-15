module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "https://api.qq.jsososo.com",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }

            }

        }

    }
}
