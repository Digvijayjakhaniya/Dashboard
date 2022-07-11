const body=document.querySelector("body"),
      sidebar=body.querySelector(".sidebar"),
      toggle=body.querySelector(".toggle"),
      searchbtn=body.querySelector(".search-box"),
      modeSwitch=body.querySelector(".toggle-switch"),
      modeText=body.querySelector(".mode-text");
      
      toggle.addEventListener("click",()=>{
        sidebar.classList.toggle("close");
      });

      searchbtn.addEventListener("click",()=>{
        sidebar.classList.remove("close");
        document.getElementById("infocus").focus();
      });

      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
          modeText.innerText="Light Mode";
        }else{
          modeText.innerText="Dark Mode";
        }
      });