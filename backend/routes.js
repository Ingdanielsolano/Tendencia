var FB=require("./Facebook");

function http(){

    this.configurar=function(app){
        app.post('/Tendencia',function (request,response) {               
            FB.lookTendencia(request.body,response);
        })
    }
}

module.exports=new http();