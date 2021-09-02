document.getElementById("spinner").style.display='none';




//--------------------------------- event listener add ---------------------------------------------
document.getElementById("search-btn").addEventListener('click',function(){
   


    const searchData=document.getElementById("input-value");
    document.getElementById("spinner").style.display='block';

    const search=searchData.value;

    if(search.length>0){
        getSearhKeyWord(search);

    }
    else{
       
        errorMessage();

    }
    searchData.value="";


})

// -----------------------------------------data fetch function---------------------------

const getSearhKeyWord=keyword=>{
    
// url=`https://openlibrary.org/search.json?q=${keyword}`
 url=`https://openlibrary.org/search.json?q=${keyword}`

    fetch(url)
    .then(res=>res.json())
    .then(data=>displayBookDetails(data.docs))

}



// --------------------------------catch individual book from data-------------------------------------

const displayBookDetails=bookDetails=>{
    document.getElementById("spinner").style.display='none';


    if(bookDetails.length===0){
        errorMessage();

    }
    else{

        console.log(bookDetails);
        // TotalShowResult(bookDetails.length);

        const bookDiv=document.getElementById("bookSection");
        bookDiv.innerHTML="";

        const total=[];

        bookDetails.forEach(book => {
            
                        if(book.cover_i!=="" && book.first_publish_year!==undefined && book.publisher!==undefined){

                            total.push(book);
                            // console.log(total);
                            
                            




                            const bookDiv=document.getElementById("bookSection");
                            const div=document.createElement('div');
                            div.classList.add("col");

                            
                            div.innerHTML=
                            `
                            <div class="card" style="height:700px">
                                    <img style="height:300px" class="img-fluid" src="https://covers.openlibrary.org/b/id/${book.cover_i}.jpg" class="card-img-top" alt="...">
                                    <div class="card-body text-center">
                                        <h2 class="card-title text-primary fw-bolder fs-1" >${book.title}</h2>
                                        <h6 class="card-title"><span class="fw-bold">Author: </span> ${book.author_name}</h6>
                                        <p><span class="fw-bold">First Publish:</span> ${book.first_publish_year}</p>
                                        <p><span class="fw-bold">Publisher:</span> ${book.publisher}</p>

                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    <button  type="button" class="btn btn-danger rounded-3 w-50 mx-auto" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add to Cart </button> 
                            </div>
                            
                                    
                            `
                            
                            bookDiv.appendChild(div);

        }

        
    });

    TotalShowResult(total.length);

}

}


// -----------------------------Display function of total search result---------------------------
const TotalShowResult=num=>{

//    const num= total.length;

   const getNum= document.getElementById('Total');
   getNum.innerHTML='';
   getNum.innerHTML=`
   <p class="fw-bold">Search result:</p>
   <h1 class="fw-bold text text-primary">${num}</h1>
     
   `;

}




//---------------------------------------- Display error function-----------------------------------

const errorMessage = () => {
    document.getElementById("spinner").style.display='none';
    const errorMessageDiv = document.getElementById("error-message");
     const searchData=document.getElementById("input-value").value;

  
    errorMessageDiv.innerHTML = ` <div  class="card  px-4 py-1 w-100 bg-danger text-white text-center" style="width: 18rem;">
            <h5 class="card-title">Dear User,</h5>
            <p class="card-text">
              Your search did not match any of our Books!! Please Try Again.
            </p>
          </div>`;


document.getElementById("input-value").addEventListener('click',function(){
    errorMessageDiv.innerHTML="";
  
}
)
}


    


