
const express = require('express');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');
const request = require('request');
const converter = require('xml-js');


router.get('/', async function(req, res1, next) {
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
                let scheduleGrpList = converter.xml2js(body, {compact: true, spaces: 2});
                // let contents = scheduleGrpList.response.body.items.item;
                let contents = await scheduleGrpList.response.body.item;
                data.basicInfo = contents;

                request.get(requestUrlSchedule, async (err,res3,body) =>{
                    if(err){
                        console.log(`err => ${err}`)
                    }
                    else {
                        if(res3.statusCode == 200){
                            let scheduleGrpList = converter.xml2js(body, {compact: true, spaces: 2});
                            let contents = await scheduleGrpList.response.body.items.item.htmlCn;
                            data.schedule = contents;
                            res1.status(200).send(data);
                        }
                    }
                })
            }
        }
    })

});

module.exports = router;
