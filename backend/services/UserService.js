const getUserById =(userId)=>{
    return {
        userId:userId,
        name : "Some data from DB"
    }
};
module.exports = {
    getUserById
}