/**
 * 环境配置
 */
const env =
    import.meta.env.MODE || 'prod'
const EnvConfig = {
    dev: {
        baseApi: '//',
        mockApi: 'https://www.fastmock.site/mock/b2079a83b73f215bf2c4001c3a6b60f1/api'
    },
    test: {
        baseApi: '',
        mockApi: 'https://www.fastmock.site/mock/b2079a83b73f215bf2c4001c3a6b60f1/api'
    },
    prod: {
        baseApi: '',
        mockApi: 'https://www.fastmock.site/mock/b2079a83b73f215bf2c4001c3a6b60f1/api'
    }
}
export default {
    env,
    mock: true,
    ...EnvConfig[env]
}