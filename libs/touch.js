const fs = require('fs');
const path = require('path');

function touch (path, callback) {
    var pathArr = path.toString().split('/');
    for (let i = 0; i < length; i++) {
        let newPath = pathArr.splice(0, i + 1).join('/');
        let exists = fs.existsSync(newPath);
        if (exists) {
            return;
        }
        if (i === pathArr.length -1) {
            var fd = fs.openSync(newPath, 'w');
            fs.closeSync(fd);
        } else {
            fs.mkdirSync(newPath);
        }
    }
    callback && callback();
}

module.exports = touch;
