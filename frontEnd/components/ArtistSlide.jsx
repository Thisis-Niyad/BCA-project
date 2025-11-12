import React from "react";

function ArtistSlide({img,name="Joy Maro",
  bio="ipsum dolor sit amet, consectetur adipiscing elit, sed veniam,quis nostrud exercitation ullamco"}) {
  return (
   
                <div className="col-md-6">
      <div className="client_taital_main">
        <div className="client_left">
          <div className="client_img">
            <img src={img} alt={name} />
          </div>
        </div>

        <div className="client_right">
          <h3 className="moark_text">{name}</h3>
          <p className="client_text">
           ${bio}
          </p>
        </div>
      </div>
    </div>
  

            

           
    
  );
}


export default ArtistSlide;
