var express = require('express');
var router = express.Router();

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
    connection.query('SELECT journalId, title, date_format(created_at, "%Y-%m-%d") as created_at, water, fertilizer, content, userId, name FROM journals, users WHERE journals.author = users.userId LIMIT 0, 7', function (err, row) {
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
                message: '글이 없습니다!'
        })}
    })
});
router.get('/user', function(req, res, next) {
    const Id = req.cookies.userId;
    connection.query('SELECT * FROM journals WHERE author = '+Id+';', function (err, row) {
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
                message: '글이 없습니다!',
                data: []
        })}
    })
})

router.post('/', function(req, res) {
    const journal = {
        'title': req.body.data.title,
        'userId': req.body.data.userId,
        'water': req.body.data.water ? 1 : 0,
        'ferti': req.body.data.ferti ? 1 : 0,
        'content': req.body.data.content,
    };
    console.log(journal);
    connection.query('INSERT INTO journals (title, author, water, fertilizer, content) VALUES ("' + journal.title + '","' + journal.userId + '","' + journal.water + '","' + journal.ferti + '","' + journal.content + '")', function (err, row) {
        if (err) {
            console.log(err)
            res.json({
                success: false,
                message: '일기쓰기에 실패했습니다.'
            })
        } else {
            console.log(row)
            res.json({
                success: true,
                message: '일기쓰기에 성공했습니다.'
            })
        }
        });
});

module.exports = router;
