
import { useState } from 'react';
import './LikesCounter.css';


function LikesCounter()
{
    const [like,setLike]=useState(0);
    function increaseLikeCount()
              {
                 setLike(like+1);
              }
    function dicreaseLikeCount()
              {
                if(like!==0)
                  setLike(like-1);
              }
              
    return <div className="div-container">
             <img src="https://d3h7nocoh5wnls.cloudfront.net/One_Word_Ganpati_Captions_for_Instagram_edeedda69f.webp" 
              alt="no imag" style={{height:'400px',border:'2px black groove',width: '700px',}}/><br/> 
              

              <span role="img" aria-label="heart-outline" onClick={increaseLikeCount} 
					style={{ cursor: 'pointer', fontSize: '24px' }}>  👍
				</span>

                 <span role="img" aria-label="thumbs down" onClick={dicreaseLikeCount} 
					style={{ cursor: 'pointer', fontSize: '24px' }}>  👎
				</span>

                 <span>
                <img src='https://static.vecteezy.com/system/resources/thumbnails/012/528/048/small/simple-save-icon-isolated-on-white-background-bookmark-symbol-modern-simple-for-web-site-or-mobile-app-vector.jpg'
                alt='icon' style={{height:'40px',width:'40px',marginLeft:'580px'}}/>  
                </span>
               
               
               
             
             <h3><b>Likes {like}</b></h3>
             <h3>Happy Ganesh Visarjan to Everyone...🌿🌸Vighna Harta at heart...!🌸🚩</h3>
    </div>
}

export default LikesCounter;