const fs = require('fs');

function rmdir (path, callback) {

    var exist = fs.existsSync(path);
    if (!exist) {
        console.log('提供目录有误，请检查：', path);
        return;
    }

    var files = fs.readdirSync(path);

    for (var i = 0; i < files.length; i++) {
        let currentPath = path + '/'  + files[i];
        if (fs.statSync(currentPath).isDirectory()) {
            rmdir(currentPath);
        } else {
            fs.unlinkSync(currentPath);
        }
    }
    fs.rmdirSync(path);
    callback && callback();
}

module.exports = rmdir;

