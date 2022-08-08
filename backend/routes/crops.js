
const express = require('express');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');
const request = require('request');
const converter = require('xml-js');

//추가한 부분
var mysql = require('mysql');
// Connection 객체 생성 
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',   
  password: '',
  database: 'farmer'  
});  
// Connect
connection.connect(function (err) {
  if (err) {
    console.error('mysql connection error');
    console.error(err);
    throw err;
  } 
});

router.get('/', async function(req, res1, next) {
    console.log('crops.js',req.query.cntnts);
    const cntntsNo = req.query.cntnts;
    const apiKey = process.env.VUE_APP_NONGSARO_KEY;
    const requestUrl = `http://api.nongsaro.go.kr/service/farmWorkingPlanNew/workScheduleDtl?cntntsNo=${cntntsNo}&apiKey=${apiKey}`;
    const requestUrlSchedule = `http://api.nongsaro.go.kr/service/farmWorkingPlanNew/workScheduleEraInfoLst?cntntsNo=${cntntsNo}&apiKey=${apiKey}`;
    let data = {

    }
    request.get(requestUrl, async (err,res2,body) =>{
        if(err){
            console.log(`err => ${err}`)
        }
        else {
            if(res2.statusCode == 200){
                body = `<html>
                <head>
                <?xml version="1.0" encoding="UTF-8"?>
                <WISPAccessGatewayParam xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://www.acmewisp.com/WISPAccessGatewayParam.xsd"> 
                    <Redirect>       
                        <AccessProcedure>1.0</AccessProcedure>           
                        <AccessLocation>QookNShow</AccessLocation>                
                        <LocationName>QookNShow</LocationName>   
                        <LoginURL>https://first.wifi.olleh.com/webauth/wispr/login.php?ip=221.158.214.30&mac=f8ffc2051301</LoginURL>               
                        <MessageType>100</MessageType>            
                        <ResponseCode>0</ResponseCode>  
                    </Redirect>
                </WISPAccessGatewayParam> 
                        <script>
                         location.href = "http://first.wifi.olleh.com/webauth/redirection.php?ip=221.158.214.30&mac=f8ffc2051301&url=&ssid=KT_starbucks&ap_mac=00300dd0d0df&apmodel=MW-6900AP";
                        </script>
                </head>
                </html>`;
                console.log(body.script);
                // let scheduleGrpList = converter.xml2js(body, {compact: true, spaces: 2});
                // // let contents = scheduleGrpList.response.body.items.item;
                // let contents = await scheduleGrpList.response.body.item;
                // console.log(contents);
                // data.basicInfo = contents;

                // request.get(requestUrlSchedule, async (err,res3,body) =>{
                //     if(err){
                //         console.log(`err => ${err}`)
                //     }
                //     else {
                //         if(res3.statusCode == 200){
                //             let scheduleGrpList = converter.xml2js(body, {compact: true, spaces: 2});
                //             let contents = await scheduleGrpList.response.body.items.item.htmlCn;
                //             data.schedule = contents;
                //             res1.status(200).send(data);
                //         }
                //     }
                // })
            }
        }
    })

});
router.get('/diseases', function(req, res, next) {
    connection.query('SELECT * FROM diseases', function (err, row) {
        if (err) {
          res.json({
            success: false,
            message: '서버에서 에러가 발생했습니다'
          })
        }
        if (row.length) {
            res.json({
                success: true,
                data: row
        })} else {
            res.json({
                success: false,
                message: '검색된 병해충이 없습니다!'
        })}
    })
});
module.exports = router;
