
const express = require('express');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');


router.get('/', function(req, res, next) {
    let info;
    const apiKey = process.env.VUE_APP_NONGSARO_KEY;
    const groupListUrl = `http://api.nongsaro.go.kr/service/farmWorkingPlanNew/workScheduleGrpList?apiKey=${apiKey}`;
    axios
      .get(groupListUrl)
      .then(response => console.log(response.data.list))
      .catch(error => console.log(error))
    const data = {
        info
    }
    // res.status(200).send(data);
});

module.exports = router;
