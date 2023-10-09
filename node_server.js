const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios=require("axios");


const app = express();

const port = 3001;

app.use(cors());


app.get('/api/carpark', async (req, res, next) => {

    try {
        const response = await axios.get("https://api.data.gov.sg/v1/transport/carpark-availability");
        // res.json(data);
        let small = [];
        let medium = [];
        let big = [];
        let large = [];
        let return_json = {};
        let test_json = {};

        let smallJ = {};
        let mediumJ = {};
        let bigJ = {};
        let largeJ = {};

        let datas = response.data.items[0];

        if(datas.carpark_data.length > 0)
        {
            let carpark_arr = datas.carpark_data;

            //re-group data
            carpark_arr.forEach(element => {
                let carparkInfo = element.carpark_info;
                let total_available = 0;
                let total_lots = 0;
                let category = "";

                for (i = 0; i < carparkInfo.length; i++) { 
                    total_available += parseInt(carparkInfo[i].lots_available); 
                    total_lots += parseInt(carparkInfo[i].total_lots);
                }

                element.total_available = total_available;
                element.total_lots = total_lots;

                if(total_lots < 100)
                {
                    category = "small";
                    small.push(element);
                } else if(total_lots >= 100 && total_lots < 300)
                {
                    category = "medium";
                    medium.push(element);
                } else if(total_lots >= 300 && total_lots < 400)
                {
                    category = "big";
                    big.push(element);
                } else if(total_lots >= 400)
                {
                    category = "large";
                    large.push(element);
                }

                element.category = category;
            });

            smallJ.max = getMax(small, 'total_available');
            smallJ.min = getMin(small, 'total_available');

            mediumJ.max = getMax(medium, 'total_available');
            mediumJ.min = getMin(medium, 'total_available');

            bigJ.max = getMax(big, 'total_available');
            bigJ.min = getMin(big, 'total_available');

            largeJ.max = getMax(large, 'total_available');
            largeJ.min = getMin(large, 'total_available');

            return_json.small = smallJ;
            return_json.medium = mediumJ;
            return_json.big = bigJ;
            return_json.large = largeJ;
        }

        res.send(return_json);
      }
      catch (err) {
        next(err)
      }

});

app.get('*', (req, res) => {
    res.status(500).json({ message: "error" })
})


function getMax(arr, prop) {
    var max;
    var max_arr =[];

    var max = Math.max(...arr.map(item => item[prop]));

    for (var i=0 ; i<arr.length ; i++) {

        if(max == parseInt(arr[i][prop]))
        {
            max_arr.push(arr[i]);
        } 
    }
    
    return max_arr;
}

function getMin(arr, prop) {
    var min_arr =[];

    var min = Math.min(...arr.map(item => item[prop]));

    for (var i=0 ; i<arr.length ; i++) {

        if(min == parseInt(arr[i][prop]))
        {
            min_arr.push(arr[i]);
        } 
    }

    return min_arr;
}


function compareByAvailble(a, b) {
    if (a.total_available < b.total_available) {
      return -1;
    }
    if (a.total_available > b.total_available) {
      return 1;
    }
    return 0;
  }

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
