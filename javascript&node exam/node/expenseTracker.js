import { log } from 'console';
import readLine from 'readline'

const rl = readLine.createInterface({
    input: process.stdin,
  output: process.stdout,

})

const expenseMap = new Map()

function showMenu(){
    console.log(`
        1.Add an expense
        2.View all expense
        3.Update an expense
        4.Delete an expense
        5.Show total expenses
        6.close`);
        rl.question('select any option ',handleFunction)
    
}

function handleFunction (option){
    switch(option){
        case '1':
            rl.question('Add discription ',(discription)=>{
                rl.question('Add Expense ',(expense)=>{
                    if(discription.trim() !=='' && expense.trim() !==''){
                        expenseMap.set(discription,expense)
                        showMenu()
                    }
                    else{
                        console.log('discription or expense are empty');
                        showMenu()
                    }
                })
            })
            break
        case '2':
            for(let [discription,expense] of expenseMap){
                console.log(`${discription} = ${expense}`);
              
            }
            showMenu() 
            break
        case '3':
            for(let [discription,expense] of expenseMap){
                console.log(`${discription} = ${expense}`);
            }

            rl.question('which item you want to update ',(item)=>{
                rl.question('new Expense ',(newExpense)=>{
                    if(item.trim() !=='' && newExpense.trim() !==''){

                        if(expenseMap.has(item)){
                            
                            console.log(expenseMap.item);
                            
                            
                        }
                        
                            

                     for(let [discription,expense] of expenseMap){
                        console.log(`${discription} = ${expense}`);
                        
                    }
                    showMenu() 
                    }
                    
                })

               
                
            })
            break

        case '4': 
            rl.question('which expense you want to delete',(expense)=>{
                if (expense.trim()!==''){
                    expenseMap.delete(expense)

                }
                for(let [discription,expense] of expenseMap){
                        console.log(`${discription} = ${expense}`);
                        
                    }
                showMenu()
            })
            break

        case '5': 
        let sum =0
            for(let [discription,expense] of expenseMap){
                        
                      sum+=Number(expense)     
                    }
            console.log(`total : ${sum}`);
            showMenu()
            break
        case '6':
            rl.close()

        default:
            console.log('worng option');
        break
            
    }
}

showMenu()