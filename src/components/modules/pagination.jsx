import style from "./Pagination.module.css";
function Pagination({page,setPage}) {
 

  const previoushandeler =()=>{
if (page <= 1) return;
setPage((page)=>page-1)
  }
 const nexthandeler =()=>{
if (page >= 9) return;
setPage((page)=>page+1)
  }
  return <div className={style.continer}>
    
    <button className={page==1 ? style.buttonoff:style.buttonon} onClick={previoushandeler}>Previous</button>
    <p style={{color:page==1? "#0067de":"inherit"}}>1</p>
    <p style={{color:page==2? "#0067de":"inherit"}}>2</p>
   
    {page>2&&page<8 ? (<><span >...</span><p className={style.coustpagecenter}>{page}</p></>): (<><span >...</span><p className={style.coustpagecenter}>...</p></>)}
  <span>...</span>
    <p style={{color:page==8? "#0067de":"inherit"}}>8</p>
    <p style={{color:page==9? "#0067de":"inherit"}}>9</p>
    <button className={page==9 ? style.buttonoff:style.buttonon} onClick={nexthandeler}>Next</button>

  </div>;
}

export default Pagination;
