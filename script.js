let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
const plus  =()=> {
    document.body.style.backgroundColor = "violet"
    document.body.style.color = "red"
    let plus = parseInt(num1.value)+parseInt(num2.value)
    document.getElementById('result').innerHTML= plus
   
}
const minus  =()=> {
  let minus = parseInt(num1.value)-parseInt(num2.value)
    document.getElementById('result').innerHTML= minus
     document.body.style.backgroundColor = "green"
    document.body.style.color = "yellow"
}
const d  =()=> {
  let d = parseInt(num1.value)*parseInt(num2.value)
    document.getElementById('result').innerHTML= d
     document.body.style.backgroundColor = "brown"
    document.body.style.color = "blue"
}
const f  =()=> {
  let f = parseInt(num1.value)/parseInt(num2.value)
    document.getElementById('result').innerHTML= f
     document.body.style.backgroundColor = "blue"
    document.body.style.color = "red"
}


