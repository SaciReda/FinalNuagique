import  { useState } from 'react';
import './Bail.css';


function Code() {
  
  const [montrerImage, setMontrerImage] = useState(false);
  const[srcImage,setsrcImage]=useState('');
  
  const image90 ='../thanks.png';

  

  


  const resetImage = () => {
    setMontrerImage(false);
  };

  const handleHunter = () =>{
    setsrcImage(image90);
    setMontrerImage(true);
    alert("You now have a trojan horse good luck killing that with nen lol ")
  } 
 const handlePiece = () =>{
    setsrcImage(image90)
    setMontrerImage(true);
    alert("of course  🏴‍☠️")
  } 


 return (
 <div className="container">
  {!montrerImage && (
    <>
  <div className="image-button-group">
    <img src={'../hunter.png'} alt="HunterXHunter" />
    <button type="button" onClick={handleHunter} className="btn btn-primary mt-3">
      HunterXhunter
    </button>
  </div>
  <h2>ou</h2>
  <div className="image-button-group">
    <img src={'../onepiece.png'} alt="One Piece" />
    <button type="button" onClick={handlePiece} className="btn btn-primary mt-3">
      One Piece
    </button>
  </div>
  </>
)}
  {montrerImage && (
    <div className="image-container">
      <img src={srcImage} alt="Image pour une note basse" />
      <br />
      <button type="button" onClick={resetImage}>Fermer image</button>
    </div>
  )}
</div>

);

}

export default Code;
