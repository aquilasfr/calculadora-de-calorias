let  btn = document.querySelector('.btn')
let gender = document.querySelector('.gender')
let weight = document.querySelector('.weight')
let height = document.querySelector('.height')
let age = document.querySelector('.age')
let textResult = document.querySelector('.text')

btn.addEventListener('click', function(){
   if (gender.value === 'masculino') {
    let weightMale = 13.75 * weight.value
    let heightMale = 5 * height.value
    let ageMale = 6.76 * age.value
    let resultMale = weightMale + heightMale - ageMale + 66.5
    textResult.innerHTML = `Sua taxa metabólica basal é ${resultMale.toFixed(2)}`

   }else if(gender.value === 'feminino') {
       let weightFemale = 9.56 * weight.value
       let heightFemale = 1.85 * height.value
       let ageFemale = 4.68 * age.value
       let resultFemale = weightFemale + heightFemale - ageFemale + 66.5
       textResult.innerHTML  = `Sua taxa metabolica basal é ${resultFemaletoFixed(2)}`
       
   }else {
       alert('Selecione uma opção!')
   }
    
})