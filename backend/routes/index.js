const express = require('express');
const fs = require("fs");
const router = express.Router();

function no_cors_setup(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', false);
}

const text = fs.readFileSync("/datavolume/data.txt", "utf-8");
const my_data = text.split(" ");

// const my_data = [
//     990,
//     991,
//     992,
//     993,
//     994,
//     995
// ];

var index = 0;


/*
 *
 * curl http://localhost:3010/get_backend_data
*/
router.get('/get_backend_data', async (req, res, next) => {
  no_cors_setup(res);
  try {

    var str = "data: " + JSON.stringify(my_data[index]);
    console.log(str);
    index = (index + 1) % my_data.length;

    res.json("{ \"backend\" : " + str + " }");

  } catch (e) {
    console.log(e);
    console.log('Error in query');
    console.log('--------------');
    res.sendStatus(500);
  }
});


module.exports = router;
