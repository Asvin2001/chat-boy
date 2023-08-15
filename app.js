a = document.getElementById("cb")
input = document.getElementById("input")
b = document.getElementsByClassName("bby")
c = document.getElementById("scr")







function snd() {
    // p.scrollIntoView();
    if (input.value == "hi") {
        setTimeout(function () {
            p = document.createElement("p")
            p.innerHTML = "Hi"
            p.classList.add("right")
            a.appendChild(p)
        }, 200)
        setTimeout(function () {
            q = document.createElement("p")
            q.innerHTML = "Hello! How can I assist you today?"
            q.classList.add("left")
            a.appendChild(q)
            a.scrollTo(0, 55555555555555555555555555);

            input.value = ""
        }, 800)


    }

    else if (input.value == "what is your name") {
        setTimeout(function () {
            p = document.createElement("p")
            p.innerHTML = input.value
            p.classList.add("right")
            a.appendChild(p)
        }, 200)
        setTimeout(function () {
            q = document.createElement("p")
            q.innerHTML = "I am an AI language model created by Asvin, and I don't have a personal name. You can simply call me Chat boy or Assistant. How can I help you?"
            q.classList.add("left")
            a.appendChild(q)
            a.scrollTo(0, 555555555555555555555555554567898765);
            input.value = ""
        }, 800)



    }


    else if (input.value == "hello") {
        setTimeout(function () {
            p = document.createElement("p")
            p.innerHTML = input.value
            p.classList.add("right")
            a.appendChild(p)
        }, 200)

        setTimeout(function () {
            q = document.createElement("p")
            q.innerHTML = "Hello! How can I assist you today? Is there anything specific you'd like to know or talk about?"
            q.classList.add("left")
            a.appendChild(q)
            a.scrollTo(0, 555555555555555555555555554567898765);
            input.value = ""
        }, 800)



    }





}


