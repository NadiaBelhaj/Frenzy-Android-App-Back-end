const multer = require('multer');

const avatarStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, 'storage/avatar/');
    },
    filename: (request, file, callback) => {
        const avatarName = Date.now() + file.originalname;
        callback(null, avatarName);
    }
});



const fileFilter = (req, file, callback) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        callback(null, true);
    } else {
        callback(null, false);
    }
};

const uploadAvatar = multer({
    storage: avatarStorage,
    fileFilter: fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 }
});

const uploadWallpaper = multer({
    storage: wallpaperStorage,
    fileFilter: fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 }
});

