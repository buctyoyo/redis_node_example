/**
 * Created by yuansc on 14-4-1.
 */
var DataProvider=require('../modules/DataProvider').DataProvider;
var Redis=new DataProvider();
function init1(){
    Redis.hmset('1',{id:12,value:"12"},function(err,result){
        console.log(err,result);
        Redis.sadd('id:'+'12','1',function(err,result){
            console.log(err,result);
        })
    })
    Redis.hmset('2',{id:123,value:"12"},function(err,result){
        console.log(err,result);
        Redis.sadd('id:'+'123','2',function(err,result){
            console.log(err,result);
        })
    })
    Redis.hmset('3',{id:123,value:"12"},function(err,result){
        console.log(err,result);
        Redis.sadd('id:'+'123','3',function(err,result){
            console.log(err,result);
        })
    })
    Redis.hmset('4',{id:12,value:"12"},function(err,result){
        console.log(err,result);
        Redis.sadd('id:'+'12','4',function(err,result){
            console.log(err,result);
        })
    })
    Redis.hmset('5',{id:123,value:"12"},function(err,result){
        console.log(err,result);
        Redis.sadd('id:'+'12','5',function(err,result){
            console.log(err,result);
        })
    })
    Redis.hmset('6',{id:123,value:"12"},function(err,result){
        console.log(err,result);
        Redis.sadd('id:'+'123','6',function(err,result){
            console.log(err,result);
        })
    })
    Redis.hmset('7',{id:123,value:"12"},function(err,result){
        console.log(err,result);
        Redis.sadd('id:'+'123','7',function(err,result){
            console.log(err,result);
        })
    })
    Redis.hmset('8',{id:12,value:"12"},function(err,result){
        console.log(err,result);
        Redis.sadd('id:'+'12','8',function(err,result){
            console.log(err,result);
        })
    })
    Redis.hmset('9',{id:12,value:"12"},function(err,result){
        console.log(err,result);
        Redis.sadd('id:'+'12','9',function(err,result){
            console.log(err,result);
        })
    })
    Redis.hmset('10',{id:123,value:"12"},function(err,result){
        console.log(err,result);
        Redis.sadd('id:'+'123','10',function(err,result){
            console.log(err,result);
        })
    })

}
function init2(){
    Redis.hmset('name.id:12.1',{id:12,value:"12"},function(err,result){
        console.log(err,result);
    })
    Redis.hmset('name.id:123.2',{id:123,value:"12"},function(err,result){
        console.log(err,result);
    })
    Redis.hmset('name.id:123.3',{id:123,value:"12"},function(err,result){
        console.log(err,result);
    })
    Redis.hmset('name.id:12.4',{id:12,value:"12"},function(err,result){
        console.log(err,result);
    })
    Redis.hmset('name.id:123.5',{id:123,value:"12"},function(err,result){
        console.log(err,result);
    })
    Redis.hmset('name.id:12.5',{id:12,value:"12"},function(err,result){
        console.log(err,result);
    })
    Redis.hmset('name.id:123.6',{id:123,value:"12"},function(err,result){
        console.log(err,result);
    })
    Redis.hmset('name.id:123.7',{id:123,value:"12"},function(err,result){
        console.log(err,result);
    })
    Redis.hmset('name.id:12.8',{id:12,value:"12"},function(err,result){
        console.log(err,result);
    })
    Redis.hmset('name.id:12.9',{id:12,value:"12"},function(err,result){
        console.log(err,result);
    })
    Redis.hmset('name.id:123.10',{id:123,value:"12"},function(err,result){
        console.log(err,result);
    })

}
exports.init1=init1;
exports.init2=init2;