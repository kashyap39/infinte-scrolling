
async function fetchQuotes(page,limit){
  try{
   let Response= await fetch('https://api.javascripttutorial.net/v1/quotes/?page='+page+'&limit='+limit);
    let json= await Response.json();
    return json.data;
  }catch (error){
   return "not much content";
  }
};


let loaderEl=document.querySelector('.loader');

const hideLoader = () => {
  loaderEl.classList.remove('show');
};
const showLoader = () => {
  loaderEl.classList.add('show');
};

function createQuote(quote)
{
  let Blockquote=document.createElement('blockquote');
  Blockquote.innerHTML=`<span>${quote.id})</span>
  ${quote.quote}
  <footer> ~ ${quote.author}</footer>`;
  Blockquote.classList.add('list');
  hideLoader();
  document.getElementById('demo').appendChild(Blockquote);
}
let page=1;
const limit=10;
function loadQuotes(page){
  showLoader();
  setTimeout(()=>{
    fetchQuotes(page,limit).then((d)=>{
      for(let item of d)
      createQuote(item);
    }).catch((err)=>{
      console.log(err);
    }
    )
  },500);   
}
window.addEventListener('scroll', () => {
  const {
      scrollTop,
      scrollHeight,
      clientHeight
  } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight-5) {
    console.log("bottom");
      page++;
      if(page*limit<=115)
      loadQuotes(page);
  }
});
loadQuotes(page);













































