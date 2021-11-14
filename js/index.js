axios.get(
   'https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/Station?$top=10&$format=JSON',
   {
      headers: getAuthorizationHeader()
   }
)
.then(function (response) {
  
})
.catch(function (error) {
  console.log(error);
}); 

function getAuthorizationHeader() {
//  填入自己 ID、KEY 開始
    let AppID = '63a8d7db95214e20bac7d3872a6371a4';
    let AppKey = 'nb1XKPLjlA2Lp7W3-o1PYNuu87E';
//  填入自己 ID、KEY 結束
    let GMTString = new Date().toGMTString();
    let ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    let HMAC = ShaObj.getHMAC('B64');
    let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
    return { 'Authorization': Authorization, 'X-Date': GMTString }; 
}
