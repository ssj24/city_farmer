// module.exports = {
//     devServer: {
//       proxy: {
//         '/':{
//           "target":'http://api.nongsaro.go.kr/service/farmWorkingPlanNew',
//           "pathRewrite":{'^/':''},
//           "changeOrigin":true,
//           "secure":false
//         }
//       }
//     }
//   }
module.exports = { 
  devServer: { 
    proxy: { 
      '/api': { 
        target: 'http://localhost:3000/api',
        changeOrigin: true, 
        pathRewrite: { 
          '^/api': ''
        } 
      } 
    } 
  },
  outputDir: '../backend/public',  
}