console.log("checking");






const btn_get=document.getElementById("get-btn");
const btn_post=document.getElementById("post-btn");


const sendHttpRequest=(method,url,data)=>{

    const promise=new Promise((resolve,reject)=>{

        const xhr=new XMLHttpRequest();
        xhr.open(method,url);
    
        //this one is for receiving the request
        xhr.responseType='json';

        //this one is for sending the request

        xhr.setRequestHeader('Content-Type','application/json');
    
        xhr.onload=()=>{
            if (xhr.status>=400) {
                reject(xhr.response);
                
            }
            resolve(xhr.response);
        }
    
        //this xhr.error will run when we dont have a successful request
        //but in case when we omit the password the request is not proper
        //but the request is complete

        xhr.error=()=>{
            reject('something went wrong');
        }
        
        xhr.send(JSON.stringify(data));
    });

    return promise;
}


const getData=()=>{
    sendHttpRequest('GET','https://reqres.in/api/users').then((responseData)=>{
        console.log(responseData);
    });
};

const sendData=()=>{
    sendHttpRequest('POST','https://reqres.in/api/register',{
        email:'eve.holt@reqres.in',
        password:'pistol'
    }).then((responseData)=>{
        console.log(responseData);
    }).catch((err)=>{

        console.log(err);
    })
};



btn_get.addEventListener("click",getData);


btn_post.addEventListener("click",sendData)

