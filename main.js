let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("dicrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }

        if(count < 0){
            value.style.color = 'red'
        }
        if(count === 0){
            value.style.color = "black"
            value.style.backgroundColor = "white"
        }
        if(count === 34){
            value.style.backgroundColor = "yellow"
            value.style.color = "red"
        }

        if(count === 67){
            value.style.backgroundColor = "blue"
            value.style.color = "yellow"
        }
        if(count === 100){
            value.style.backgroundColor = "crimson"
            value.style.color = "white"
        }

        // if(count === 34){
        //     count = 0;
        // }

        value.textContent = count;
    })
})