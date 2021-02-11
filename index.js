

      let overlay = document.getElementById("overlay");
      let login_form = document.getElementById("login_form");

      /** Wenn man außerhalb der Form drückt schließt sich Overlay, wenn innerhalb dann nicht.*/
      overlay.addEventListener("click", function (e) {
        if (!login_form.contains(e.target)) {
          overlay.style.display = "none";
        }
      });

      document.body.addEventListener("keydown", function (e) {
        if (e.key === 27) {
          overlay.style.display = "none";
          console.log("wurde gedrückt")
        }
      });


       /* 
       Display Overlay by setting display: "flex" */