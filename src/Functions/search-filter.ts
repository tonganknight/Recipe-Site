
 export function updateFilters(filterButtonCount: number) {

//Controls the show filter button on each click

    function iterationCount(){
      if(filterButtonCount < 1){
        return 9;
      };
      if(filterButtonCount === 2){
        return 18;
      };
      if(filterButtonCount === 3){
        return 34;
      };
      if(filterButtonCount === 4){
        return 34;
      };
    }

    const iteration = iterationCount();

    console.log('iterationCount', iteration);

    if(filterButtonCount < 1){
      for (let i = 0; i < iteration!; i++) {
        const element = document.getElementById(`${i}`);
        element?.classList.remove("form-check", "form-switch", "input-items", "invisible");
        element?.classList.add("form-check", "form-switch", "input-items");
      }
      if (iteration === 9){
        if (filterButtonCount < 1  && iteration === 9) {
            return 2;
        }
      }
    }

    if (filterButtonCount === 2) {
      for (let i = 0; i < iteration!; i++) {
        const element = document.getElementById(`${i}`);
        element?.classList.remove("form-check", "form-switch", "input-items", "invisible");
        element?.classList.add("form-check", "form-switch", "input-items");
      }
    
      if (iteration === 18) {

        if (filterButtonCount === 2 && iteration === 18) {
            return 3;
        }
      }
    }

    if(filterButtonCount === 3){
      for (let i = 0; i < iteration!; i++) {
        const element = document.getElementById(`${i}`);
        element?.classList.remove("form-check", "form-switch", "input-items", "invisible");
        element?.classList.add("form-check", "form-switch", "input-items");
      }
      if (iteration === 34){
        if (filterButtonCount === 3 && iteration === 34) {
            return 4;
        }
      }
    }
    if(filterButtonCount === 4){
      for (let i = 0; i < iteration!; i++) {
        const element = document.getElementById(`${i}`);
        element?.classList.add("invisible");
      }
      if (iteration === 34){
        
        if (filterButtonCount === 4 && iteration === 34) {
        return 0;
        }
      }
    }

}