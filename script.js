let wish_messaage = document.querySelector('#wish_message')
let greeting_messaage = document.querySelector('#greet_message')
let selectOpt = document.querySelectorAll('select')
let img = document.querySelector('#schedule-img-event')
let set_time_routine = document.querySelectorAll('.set-alarm-msg h6')
//  clock function
function clockStart() {
    let AMPM = ""
    let time = new Date()
    let hrs = time.getHours()
    let mins = time.getMinutes()
    let secs = time.getSeconds()

    // set the default time to print message
    if (hrs <= 10 && AMPM === "AM") {
        greeting_messaage.innerHTML = "Good Morning || Wakeup"
        // img.src = './assets/Component 30 – 1.png'
    }
    else if (hrs > 10 && hrs <= 16) {
        greeting_messaage.innerHTML = "Good AfterNoon || Lunch"
        // img.src = './assets/Group 5183.png'
    }
    else if (hrs > 16 && hrs <= 20) {
        greeting_messaage.innerHTML = "Good Evening || Walk"
        // img.src = './assets/lunch_image.png'
    }
    else {
        greeting_messaage.innerHTML = "Good Night || Sleep"
        // img.src = './assets/AM_svg.png'  
    }

    // to set AM PM
    if (hrs > 12) {
        hrs -= 12
        AMPM = "PM"
    }
    else {
        AMPM = "AM"
    }

    document.querySelector('#hrs').innerHTML = hrs
    document.querySelector('#mins').innerHTML = mins
    document.querySelector('#secs').innerHTML = secs
    document.querySelector('#ampm').innerHTML = AMPM

}
let set_btn =document.querySelector(".set-alarm")
setInterval(() => {
    clockStart()
}, 1000);
//select time routine by user selection
let flag = 0

function setEvent() {
    let t = new Date()
    let hrs = t.getHours()

    let selectItem1 = selectOpt[0].selectedIndex
    let selectItem2 = selectOpt[1].selectedIndex
    let selectItem3 = selectOpt[2].selectedIndex
    let selectItem4 = selectOpt[3].selectedIndex
    console.log(selectItem1)

    let item1 = selectOpt[0].options[selectItem1]
    let item2 = selectOpt[1].options[selectItem2]
    let item3 = selectOpt[2].options[selectItem3]
    let item4 = selectOpt[3].options[selectItem4]


    set_time_routine[0].innerHTML = `WakeUp Time : ${item1.innerText}`
    set_time_routine[1].innerHTML = `Lunch Time : ${item2.innerText}`
    set_time_routine[2].innerHTML = `Nap Time : ${item3.innerText}`
    set_time_routine[3].innerHTML = `Night Time : ${item4.innerText}`

    if (parseInt(item1.value) === hrs) {
        // greeting_messaage.innerHTML = "Grab Some Healthy Breakfast !!"
        wish_messaage.innerHTML = "Good Morning !! Wakeup !!"
        img.src = './Component 30 – 1.png'
    }
    else if (parseInt(item2.value) === hrs) {
        // greeting_messaage.innerHTML = "Let's have Lunch !!"
        wish_messaage.innerHTML = "Good Afternon !! Lunch !!"
        img.src = './lunchtime.jpg'
    }
    else if (parseInt(item3.value) === hrs) {
        // greeting_messaage.innerHTML = "Get Some Tea.. It's Evening !!"
        wish_messaage.innerHTML = "Good Evening !! Nap !!"
        img.src = './eveningimage.png'
    }
    else if (parseInt(item4.value) === hrs) {
        // greeting_messaage.innerHTML = "Close Your Eyes & go to sleep !!"
        wish_messaage.innerHTML = "Good Night !! Sleep !!"
        img.src = './nighttime.svg'
    }

//set alarm button background
    if(flag===0){
        set_btn.style.background = "linear-gradient(90deg,#FC5EFF, #8254EF)"
        flag=1
    }
    else{
        set_btn.style.background = "linear-gradient(90deg,#8254EF ,#FC5EFF)"
        flag=0
    
    }

}