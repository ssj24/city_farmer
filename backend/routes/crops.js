
const express = require('express');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');
const request = require('request');
const converter = require('xml-js');


router.get('/', async function(req, res1, next) {
    const apiKey = process.env.VUE_APP_NONGSARO_KEY;
    const requestUrl = `http://api.nongsaro.go.kr/service/farmWorkingPlanNew/workScheduleGrpList?apiKey=${apiKey}`;

    request.get(requestUrl, (err,res2,body) =>{
        if(err){
            console.log(`err => ${err}`)
        }
        else {
            if(res2.statusCode == 200){
                let scheduleGrpList = converter.xml2js(body, {compact: true, spaces: 2});
                let contents = scheduleGrpList.response.body.items.item;
                console.log(contents);
                res1.status(200).send(contents);
            }
        }
    })
});

module.exports = router;
