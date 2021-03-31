const express = require("express");
const router = express.Router();

const logout = require('../controllers/logout');
const editProfile = require ('../controllers/editProfile');



const checkToken = require('../controllers/checkToken');
router.use(async function (req,res,next) {
    const token = req.headers.authorization;
    // console.log('ok')
    if(token !== 'undefined')
    {
        const isValid = await checkToken(token);
        if(isValid)
            next();
        else
            console.log('Token is invalid'); 
    }else
        console.log('token is undefined')
    
})


router.post('/logout', logout);
router.post('/editProfile', editProfile);




module.exports = router;