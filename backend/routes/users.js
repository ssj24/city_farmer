var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');

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

/* GET users listing. */
router.get('/', function(req, res, next) {
  const Id = req.cookies.userId;
  let water = '';
  let fertilizer = '';
  connection.query(`select date_format(created_at, "%Y-%m-%d") as created_at from journals where author = ${Id} and water = 1 order by created_at asc limit 0, 1;`, function(err, row) {
    if (err) {
      console.log(err);
    } else if (row.length) {
      water = row;
    } else if (!row.length) {
      water = '';
    }
    connection.query(`select date_format(created_at, "%Y-%m-%d") as created_at from journals where author = ${Id} and fertilizer = 1 order by created_at asc limit 0, 1;`, function(err2, row2) {
      if (err2) {
        console.log(err2);
      } else if (row2.length) {
        fertilizer = row2;
        res.json({
          success: true,
          water: water,
          fertilizer: fertilizer
        })
      } else if (!row.length) {
        res.json({
          success: true,
          water: water,
          fertilizer: fertilizer
        })
      }
    })

  })
  
});
router.get('/crops', function(req, res, next) {
  const Id = req.cookies.userId;
  connection.query(`select * from crops where cropId in (select cropId from likeCrops where likeCrops.userId = ${Id});`, function(err, row) {
    if (err) {
      res.json({ // 매칭되는 아이디 없을 경우
        success: false,
        message: '서버에서 에러가 발생했습니다.'
      })
    } else {
      if (row.length) {
        res.json({
          success: true,
          data: row
        })
      } else {
      res.json({
        success: true,
        data: []
      })
    }
    }
  })
});

router.post('/regist', function(req, res) {
  var user = {
    'email': req.body.email,
    'name': req.body.name,
    'password': req.body.password
  };
  connection.query('SELECT email FROM users WHERE email = "' + user.email + '"', function (err, row) {
    if (row[0] == undefined){ //  동일한 아이디가 없을경우,
      const salt = bcrypt.genSaltSync();
      const encryptedPassword = bcrypt.hashSync(user.password, salt);
      connection.query('INSERT INTO users (email,name,password) VALUES ("' + user.email + '","' + user.name + '","' + encryptedPassword + '")', user, function (err, row2) {
        if (err) throw err;
      });
      res.json({
        success: true,
        message: 'Sing Up Success!'
      })
    }
    else {
      res.json({
        success: false,
        message: 'Sign Up Failed Please use anoter ID'
      })
    }
  });
});

router.post('/login', function (req, res) {
  const user = {
    'email': req.body.email,
    'password': req.body.password
  };
  connection.query('SELECT * FROM users WHERE email = "' + user.email + '"', function (err, row) {
    if (err) {
      res.json({ // 매칭되는 아이디 없을 경우
        success: false,
        message: 'Login failed please check your id or password!'
      })
    }
    if (row[0] !== undefined && row[0].email === user.email) {
      bcrypt.compare(user.password, row[0].password, function (err, res2) {
        if (res2) {
          res.json({ // 로그인 성공
            success: true,
            message: 'Login successful!',
            userId: row[0].userId,
            userName: row[0].name
          })

        }
        else {
          res.json({ // 매칭되는 아이디는 있으나, 비밀번호가 틀린 경우
            success: false,
            message: 'Login failed please check your id or password!'
          })
        }
      })
    }
  })
});

module.exports = router;
