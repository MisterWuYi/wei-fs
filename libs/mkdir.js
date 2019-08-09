const fs = require('fs');

function mkdir (path, callback) {
    var pathArr = path.toString().split('/');
    for (var i =1; i <= pathArr.length; i++) {
        var newPath = pathArr.slice(0, i).join('/');
        let exist = fs.existsSync(newPath);
        if (exist) {
            continue;
        } else {
            fs.mkdirSync(newPath);
        }
    }
    callback && callback();
}

module.exports = mkdir;



