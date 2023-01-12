console.log("Connected ✌");

class Book{
    constructor(bookname,authorname,booktype)
    {
    this.bookname=bookname
    this.authorname=authorname
    this.booktype=booktype
    }
}

const getdata = document.getElementsByClassName("submit_btn")[0];
const tbody=document.getElementById("tbone")
var count=0;
const at=document.getElementById("alert_one");
const altext=document.getElementById("hidtext")

getdata.addEventListener('click', submitted)

function submitted(e){
    e.preventDefault()
    console.log("Recieved data");
    const bookname = document.getElementsByClassName("book-name")[0].value;
   
    const authorname=document.getElementsByClassName("author")[0].value;
    

    const adventure_btn=document.getElementsByClassName("adventure")[0].checked
    
    const action_btn=document.getElementsByClassName("action")[0].checked

    const romantic_btn=document.getElementsByClassName("romantic")[0].checked

    var booktype;

    if(adventure_btn)
    {
        booktype="Adventure"
    }
    else if(action_btn)
    {
        booktype="Action"
    }
    else if(romantic_btn)
    {
        booktype="Romantic"
    }
    const bookdata=new Book(bookname,authorname,booktype)
    console.log(bookdata);
    if(bookname!=''  && authorname!='' &&booktype!=undefined)
    {
        count++;
        addrow(bookdata)
    }
    else
    {
        
        at.classList.add("hidden")
        altext.innerText="Please input all fields*"
        setTimeout(function(){at.classList.remove("hidden");
        altext.innerText=''},1000)
    }
    
    document.getElementById("formone").reset();
    
}
function addrow(data) {
        const newrow = document.createElement('tr');
        newrow.innerHTML=`<th scope="row">${count}</th>
        <td>${data.bookname}</td>
        <td>${data.authorname}</td>
        <td>${data.booktype}</td>`
        tbody.append(newrow)
}