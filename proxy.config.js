const PROXY_CONFIG = [
  {
    context: [
      '/donvitinh',
      '/baocaotonkho',
      '/ct_pbh',
      '/ct_pdv',
      '/ct_pmh',
      '/loaidichvu',
      '/loaisanpham',
      '/nhacungcap',
      '/phieubanhang',
      '/phieudichvu',
      '/phieumuahang',
      '/sanpham',
      '/thamso'
    ],
    target: 'http://localhost:8080',
    secure: false,
    changeOrigin: true,
    logLevel: 'debug',
    headers: {
      host: 'localhost'
    },
    cookieDomainRewrite: {
      'localhost': 'localhost'
    }
  }
];
module.exports = PROXY_CONFIG;
