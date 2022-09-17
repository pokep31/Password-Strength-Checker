const input = document.querySelector("input"),
      showHide = document.querySelector(".show_hide"),
      indicator = document.querySelector(".indicator"),
      iconText = document.querySelector(".icon-text"),
      text = document.querySelector(".text");

    // JS code to show & hide password  
      showHide.addEventListener("click", () =>{
        if(input.type === "password"){
          input.type = "text";
          showHide.classList.replace("fa-eye-slash", "fa-eye")
        }else{
          input.type = "password"
          showHide.classList.replace("fa-eye", "fa-eye-slash")
        }
      })

    // JS code to show password strength (with regex)
      let alphabet = /[a-zA-Z]/, //letter a to z & A to Z
          numbers = /[0-9]/, //number 0 to 9
          scharacters = /[!,@,#,$,%,^,&,*,?,_,(,),-,+,=,~]/; //special characters
      input.addEventListener("keyup", () => {
        indicator.classList.add("active");

        let val = input.value;
        if(val.match(alphabet) || val.match(numbers) || val.match(scharacters)){
          text.textContent = "La clave es débil";
          input.style.borderColor = "#ff6333";
          iconText.style.color = "#ff6333";
          showHide.style.color = "#ff6333";
        }
        if(val.match(alphabet) && val.match(numbers) && val.length >= 6){
          text.textContent = "La clave es media";
          input.style.borderColor = "#cc8500";
          iconText.style.color = "#cc8500";
          showHide.style.color = "#cc8500";
        }
        if(val.match(alphabet) && val.match(numbers) && val.match(scharacters) && val.length >= 8){
          text.textContent = "La clave es fuerte";
          input.style.borderColor = "#22c32a";
          iconText.style.color = "#22c32a";
          showHide.style.color = "#22c32a";
        }
        
        if(val == ""){
          indicator.classList.remove("active");
          input.style.borderColor = "#a6a6a6";
          iconText.style.color = "#a6a6a6";
          showHide.style.color = "#a6a6a6";
        }
      });