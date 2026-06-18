/*
Problem Statement: Bank Account Constructor Function

Create a Constructor Function called BankAccount that allows creating and managing individual bank accounts.

Each BankAccount object should have the following properties:
	•	accountNumber (string)
	•	accountHolderName (string)
	•	balance (number)

And the following methods:
	•	deposit(amount) – Adds the given amount to the account balance. Amount must be positive.
	•	withdraw(amount) – Deducts the amount from the account balance. Ensure sufficient funds before withdrawal.
	•	getBalance() – Returns the current account balance.
	•	displayAccountInfo() – Prints the account number, holder’s name, and balance.

Requirements:
	1.	Use a constructor function, not classes.
	2.	Demonstrate the functionality by creating at least two bank accounts and performing a series of deposits, withdrawals, and balance checks.

Example Output:

Account created: 123456 | John Doe | Balance: $1000
Depositing $500...
New Balance: $1500
Withdrawing $200...
New Balance: $1300

*/
// DRY - don't repeat yourself 
// class BankAccount{
//     constructor(bankAccountNo,accName,balance){
//         this.accNo=bankAccountNo
//         this.accHolderName=accName
//         this.balance=balance
//     }
//     deposit(amount){
//         if(amount<0){
//             return "enter a number with positive sign"
//         } 
//         this.balance+=amount
//         return `${amount}rs Amount credited sucessfully to ${this.accHolderName}'s Account`
//     }
//     withDraw(amount){
//         if(amount>this.balance){
//             return "Insufficent Balance"
//         }
//         return `${this.balance-=amount} Balance in ${this.accHolderName} Account`
//     }
//     getBalance(){
//         return `${this.accHolderName} has ${this.balance}rs Balance`
//     }
//     getAccountDetails(){
//         return `${this.accHolderName}'s  ${this.accNo} Account Number has ${this.balance} rs.`
// }
// }
// p1=new BankAccount("9874 521 7563","Aniketh",1530)
// p2=new BankAccount("8521 479 7624","Akash",2000)
// console.log(p1.getAccountDetails());
// console.log(p2.getAccountDetails());
// console.log(p1.deposit(5000));
// console.log(p2.deposit(3000));
// console.log(p1.getBalance());
// console.log(p2.getBalance());
// console.log(p1.withDraw(1200));
// console.log(p2.withDraw(1500));
// console.log(p1.getAccountDetails());
// console.log(p2.getAccountDetails());


function bankAccount(bankAccountNo,accName,balance){
        this.accNo=bankAccountNo
        this.accHolderName=accName
        this.balance=balance
        this.deposit=function(amount){
        if(amount<0){
            return "enter a number with positive sign"
        } 
        this.balance+=amount
        return `${amount}rs Amount credited sucessfully to ${this.accHolderName}'s Account`
        }
        this.withDraw=function (amount){
        if(amount>this.balance){
            return "Insufficent Balance"
        }
        return `${this.balance-=amount} Balance in ${this.accHolderName} Account`
         }
        this.getBalance=function(){
            return `${this.accHolderName} has ${this.balance}rs Balance`
        }
        this.getAccountDetails=function(){
            return `${this.accHolderName}'s  ${this.accNo} Account Number has ${this.balance} rs.`
}
}
p1=new bankAccount("9874 521 7563","Aniketh",1530)
p2=new bankAccount("8521 479 7624","Akash",2000)
console.log(p1.getAccountDetails());
console.log(p2.getAccountDetails());
console.log(p1.deposit(5000));
console.log(p2.deposit(3000));
console.log(p1.getBalance());
console.log(p2.getBalance());
console.log(p1.withDraw(1200));
console.log(p2.withDraw(1500));
console.log(p1.getAccountDetails());
console.log(p2.getAccountDetails());