import "./SwingImage.css";
import { agile } from "../assets";
const SwingImage = () => {
  return (
    <>
      <figure class='swing'>
        <img
          className='w-full h-full object-cover md:object-right '
          width={600}
          alt='about-blueto'
          height={700}
          src={agile}
        />
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg/687px-Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg" width="200" > */}
      </figure>{" "}
    </>
  );
};

export default SwingImage;
