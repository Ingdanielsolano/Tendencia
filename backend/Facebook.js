var FB = require('fb');

function Facebook() {
    var permission;
    this.Validar = function () {
        permission = "EAACEdEose0cBAOi7C9WMZCuYeanp5fqh6yFUEwBZCoR8JJuQTPivXGY7cSZATZCyEcEGnYDc3FrrpoQzFTxh6oZCnlAWpNDHZBMQjZCdqPxJP47U9VEWyNjT91ZBTvEu9p20Lz5nx6zqqEwxkK5A0drt62mjsisCextiyhZAocyltqYRUqDfC9i9xcTSYQ4Y2NkkYN27ZBwcMayAZDZD";
    }

    this.lookTendencia = function (request, response) {
        FB.api(request.idPost.idPost + "/comments", {
            fields: [],
            access_token: permission
        }, res => {
            var hourNo;
            var hourBefo;
            var pasa = true;
            var resultN;
            var resultB;
            var contadorasi = 0;
            var contadorano = 0;
            var tendenciabool = true;
            res.data.map(rs => {
                hourBefo = hourNo;
                hourNo = new Date(rs.created_time);
                if (!pasa) {
                    resultB = resultN;
                    resultN = ((hourNo - hourBefo) / 1000) / 3600;
                    if (resultN > resultB && resultB != undefined) {
                        //console.log("no tiene "+resultN+" < ", resultB);
                        contadorano = contadorano + 1;
                    } else {
                        contadorasi = contadorasi + 1;                        
                        //console.log("tiende "+resultN+" > ",resultB);                        
                    }
                }
                pasa = false;
            })
            if(contadorasi>contadorano){
                response.send(true);
                console.log(true);
            }else{
                response.send(false);
                console.log(false);
            }
            
        })
    }

}

module.exports = new Facebook();