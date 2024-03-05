// const jwt from 'jsonwebtoken';


const jwt = require('jsonwebtoken'); 

const Auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const verefie = jwt.verify(token, "AHMED")
        console.log(verefie)
        if(verefie){
            res.status(200).json({"token": 'valider'})
            next()
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = Auth

// const Auth = async (req, res, next) => {
//     try {
//         const token = req.headers.authorization.split(' ')[1];
//         const verefie = jwt.verify(token, "AHMED")
//         if(verefie){
//             // res.json([{"token":"valid !"},{"code":token}])
//             next()
//         }
//     } catch (error) {
//         res.status(400).json({"token": 'invalid !'})
//     }
// }

// module.exports = Auth

// export default async function Auth(req, res, next){
//     try {
        
//         // access authorize header to validate request
//         const token = req.headers.authorization.split(" ")[1];

//         // retrive the user details fo the logged in user
//         const decodedToken = await jwt.verify(token, );

//         req.user = decodedToken;

//         next()

//     } catch (error) {
//         res.status(401).json({ error : "Authentication Failed!"})
//     }
// }