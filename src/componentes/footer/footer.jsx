import './footer.css'
const Footer=()=>{
    return(
        <div className="footer">        
                    <h4> AutoAr Company </h4>
                           <div className='copyright'>
                              <p>
                                @{new Date().getFullYear()} AutoAr Angel. All right reserved
                               </p>
                            </div>

        </div>
    )
    
}

export default Footer