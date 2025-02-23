export default function checkInputs(data){
    let hasErr = false;

    Object.values(data).forEach(str=>{
        if(typeof str === 'string'){
            if(!hasErr){
                hasErr = str.trim() === '';
            }
        }
    });

    return hasErr;
}


