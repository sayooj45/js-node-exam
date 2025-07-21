

let expenseData=[]
let expenseAmount=[]

 const expenseInput = document.getElementById('inputdisc')
    const amountInput = document.getElementById('inputAmount')
    
    const ul = document.getElementById('expenseList')
function addExpense (){
   

    let expenseInputValue = expenseInput.value
    let amountInputValue =Number(amountInput.value)
        
        
    if(expenseInputValue.trim() !== '' && amountInputValue !== ''){
        expenseData.push(expenseInputValue)
        expenseAmount.push(amountInputValue)
        console.log(expenseData);
        
        
        
    }

} 

function viewExpense(){

    const li=document.createElement('li')
        console.log(expenseData);
        // for(let i=0;i<expenseData.length;i++){
        //     li.textContent=`${expenseData[i]} = ${expenseAmount[i]}`
        // }

        expenseData.forEach(data =>{
            

    const editBtn =document.createElement('button')
    editBtn.textContent='Edit'
    editBtn.onclick=function(){
        const newExpense=prompt('edit data',data)
        let index=expenseData.indexOf(data)
        console.log(index);
        expenseData[index] = newExpense
        console.log(expenseData);
        
        
    }
     ul.appendChild(li)
     li.textContent=data
    li.appendChild(editBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.onclick = function(){
        let index=expenseData.indexOf(data)
        expenseData.splice(index,1)
        expenseAmount.splice(index,1)
        console.log(expenseData);
        

    }
    li.appendChild(deleteBtn)

        })
        
    

       

}

function taotal() {
    let sum =0
    const li=document.createElement('li')
    console.log(expenseAmount);
   expenseAmount.forEach(amount=>{
    sum+=amount
   })
        li.textContent =`total = ${sum}`
   
    ul.appendChild(li)
}