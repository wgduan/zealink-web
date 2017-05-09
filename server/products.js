var guid = require('guid');

module.exports={
    getProducts:function(){
        return [{productId:1,name:guid.raw()},{productId:2,name:guid.raw()}];
    }
};