const fs = require('fs');
const readline = require('readline');

const file = 'multimedia-commons---input.txt';
var arr ='';
const lineRead = fs.createReadStream(file);
const lineR = readline.createInterface({
    input:lineRead
});
var num = 0;
var endNum = 0;
var ctrl = 0;
lineR.on('line',(data)=>{
    num++;
    const str = data.match(/mp4/);
    if(str=='mp4'){
        console.log(str);
        endNum++;
        if(ctrl==0){
            ctrl++;
            console.log('start'+num);
        }
        // console.log(num);
        // console.log(n)
    }

    // arr += data;

    // if(num%263172==0){
    //     arr = arr+data+'\n';
    //     const url = './result2/multimedia-commons---input'+num/263172+'.txt';
    //     fs.writeFile(url,arr,(err)=>{if(err) throw err;})
    //     arr = '';
    // }else if(num<131322828){
    //     arr = arr+data+'\n';
    // }else if(num>131322828 && num<131323203){
    //     arr = arr+data+'\n';
    // }else if(num==131323203){
    //     console.log(num);
    //     arr = arr+data+'\n';
    //     const url = './result2/multimedia-commons---input500.txt';
    //     fs.writeFile(url,arr,(err)=>{if(err) throw err;})
    //     arr = '';
    // }
    // console.log(num);
}).on('close',()=>{
    console.log(num);
    console.log('end:'+endNum);
    console.log('end');
    lineRead.close();
    // for(var i =0;i<Math.ceil(arr.length/rows);i++){
    //     fs.writeFile(
    //         i+'.txt',
    //         arr.slice(i*rows,i*rows+rows).join('\r\n')
    //     )
    // }
})
