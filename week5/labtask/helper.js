function getCurrentTime(){
 return new Date().toString()
}
function getServerStatus(){
   return {status:"online",uptime:process.uptime()}
}

module.exports = {getCurrentTime,getServerStatus}