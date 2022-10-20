import React from "react";
import picture from "../../assets/images/Kaelin.jpg"

function Biography() {
  return (
    <div class="card m-2 bio border border-5">
      <img style = {{width: 200, height: 200}} src={picture} alt="Logo" />
      <div class="card-header">Biography</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          I recently completed a Full Stack Coding Bootcano at Denver University. I originally have a bachelor of Science in Environmental Ecology from the University of Kentucky. After Graduating I spent 5 years workign as a chemist, and upon moving here I was a manager and helped start a organic dog tream company in Boulder, Co. I am excited to start this new journey in the dev world!
          
          
        </li>
      </ul>
    </div>
  );
}

export default Biography;