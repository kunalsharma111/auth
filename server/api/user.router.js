const router = require("express").Router();
const auth = require('../middleware/auth');

const {loginuserValidator, loginuserValidationResult} = require('../validators/userLoginValidation');
const {userValidator, userValidationResult} = require('../validators/userRegisterValidation');
const {loginUser, createUser, getAllUsers,logout} = require('../controllers/user.controller');

// normal signup
router.post('/login', loginuserValidator , loginuserValidationResult, loginUser);
router.post('/create-user', userValidator , userValidationResult, createUser);
router.get('/get-all-users',auth,getAllUsers);
router.get('/logout',auth,logout);

module.exports = router;