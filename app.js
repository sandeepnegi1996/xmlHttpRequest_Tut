console.log("checking");






const btn_get=document.getElementById("get-btn");
const btn_post=document.getElementById("post-btn");


const sendHttpRequest=(method,url)=>{

    const xhr=new XMLHttpRequest();
    xhr.open(method,url);

    xhr.responseType='json';

    xhr.onload=()=>{
        const data= xhr.response;
        console.log(data);
        
    }

    xhr.send();

}


const getData=()=>{
    sendHttpRequest('GET','https://reqres.in/api/users');
};

const sendData=()=>{};




btn_get.addEventListener("click",getData);


btn_post.addEventListener("click",sendData)

