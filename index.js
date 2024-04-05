//Q-1 PROGRAM TO FIND THE MAXIMUM B/W TWO NUMBER 

let n1=10
let n2=30
if(n1>n2){
    console.log('${n1}is greater than ${n2}')
    alert('${n1}is greater than ${n2}')
}else if(n2>n1){
    console.log(`${n2}is greater than ${n1}`)
    alert(`${n2}is greater than ${n1}`)

}else{
    console.log('numbers are equal');
    alert('numbers are equal')
}



//Q-2 PROGRAM TO FIND THE MAXIMUM B/W THREE NUMBER 
let n3=10
let n5=50
let n4=30
if(n3>n4 && n3>n5){
        console.log(`${n3}is greater than other two numbers`)
        alert(`${n3}is greater than `)
}else if(n4>n3 && n4>n5){
    console.log(`${n4}is greater than other two numbers`)
    alert(`${n4}is greater than other two numbers`)

}else if (n5>n3 && n5>n4){
    console.log( ` ${n5} numbers are greater than the other two number`);
    alert(` ${n5} numbers are greater than the other two number`)
  }  else {
        console.log(`the numbers are equal`)
        alert(`the numbers are equal`)
}


//Q-3 number is negative positive or zero
let nu1=prompt(`enter a number`);
if( nu1>0){
    console.log(`number is positive`)
}
else if(nu1<0){
    console.log(`number is negative`)
}
else{
    console.log(`number is zero`)
}




//Q-4 number is divisible by 5 & 11 or not
let num1=prompt(`enter any number which you want to find divible`);
if(num1%5==0 && num1%11==0){
    console.log(`${num1} is divisible by 5 and 11`)
} else(
    console.log(`${num1} is not divisible by 5 and 11`)
)


//Q-5 NUMBER IS EVEN OR ODD
let numb1=prompt();
if(numb1%2==0){
    console.log(`${numb1}\t is even`)
} else{
    console.log(`${numb1}\t is odd`)
}


//Q-6 NUMBER IS A LEAP YEAR OR NOT 
let numbe1=prompt(`Enter a number whoich you want to check it a leap year or not`);
if(numbe1%4==0){
 if(numbe1%100==0){
        if(numbe1%400==0){
            console.log(`${numbe1} is a leap year`)
        }else{
            console.log(`${numbe1} is not a leap year`)
        }
    } else{
        console.log(`${numbe1} is a leap year`)
    }
}else {
        console.log(`This is not a leap year`)
    }
    


   //Q=7 VOWEL OR CONSTANT
   let alpha1=prompt(`any alphabet`);
   if(alpha1=='a' || alpha1=='A' || alpha1=='e' || alpha1=='E' || alpha1=='i' || alpha1=='I' ||alpha1=='o' || alpha1=='O'
   ||alpha1=='u' || alpha1=='U'){
    console.log(`${alpha1} is a vowel`)
   }else{
    console.log(`${alpha1} is a constant`)
   }


//Q=8 find alphabet is lowercase or upper case
let alphabet1=prompt(`enter any alphabet`);
if(alphabet1==alphabet1.toUpperCase()   ){
    console.log(`${alphabet1} is a uppercase letter`)
}else{
    console.log(`${alphabet1} is a lowercase letter`)
}
//Q-9 PROGRAM TO PRINT A WEEK DAY 
let w1=prompt(`Enter a weekday number`);
if(w1==1){
    console.log(`${w1}:Monday`)
}else if(w1==2){
    console.log(`${w1}:Tuesday`)
} else if(w1==3){
    console.log(`${w1}:Wednesday`)
}else if(w1==4){
    console.log(`${w1}:THursday`)
}else if(w1==5){
    console.log(`${w1}:Friday`)
}else if(w1==6){
    console.log(`${w1}:Saturday`)
}else if(w1==7){
    console.log(`${w1}:Sunday`)
}else{
    console.log(`You enter any other number kindly enter between 1 to 7`)
}
//Q=11 MIN NOTES IN AMOUNT
let wo1=prompt(`enter the amount which you want to find min notes`);
if (wo1<=100){
    console.log(`${wo1} has minimum two notes`);
} else if (wo1<=200){
    console.log(`${wo1} has minimum two notes`);
} else if (wo1<=300){
    console.log(`${wo1} has minimum three notes`);
} else if (wo1<=400){
    console.log(`${wo1} has minimum four notes`);
} else if (wo1<=500){
    console.log(`${wo1} has minimum one notes`);
} else if (wo1<=600){
    console.log(`${wo1} has minimum two notes`);
} else if (wo1<=700){
    console.log(`${wo1} has minimum three notes`);
} else if (wo1<=800){
    console.log(`${wo1} has minimum four notes`);
} else if (wo1<=900){
    console.log(`${wo1} has minimum five notes`);
} else if (wo1<=1000){
    console.log(`${wo1} has minimum one notes`);
} else if (wo1<=1500){
    console.log(`${wo1} has minimum three notes`);
} else if (wo1>=1500){
    console.log(`${wo1} has minimum two notes or maximum 500 notes`);
} else {
    console.log(`overflow kindly enter less amount`);
}

//Q-12 INPUT FIVE SUBJECT MARKS FIND ITS PERCENTAGE AND THE CONVERT INTO GRADE ACCORDING TO MARKS
let phy = parseInt(prompt(`ENTER YOUR MARKS IN PHYSICS SUBJECT`));
let chem = parseInt(prompt(`ENTER YOUR MARKS IN CHEMISTRY SUBJECT`));
let bio = parseInt(prompt(`ENTER YOUR MARKS IN BIOLOGY SUBJECT`));
let math = parseInt(prompt(`ENTER YOUR MARKS IN MATHEMATICS SUBJECT`));
let comp = parseInt(prompt(`ENTER YOUR MARKS IN COMPUTER SUBJECT`));
let total_SUB_MARKS = parseInt(prompt(`ENTER YOUR TOTAL MARKS IN ONE SUBJECT`));


//declare new variable for percentage
let per_phy=(phy/total_SUB_MARKS)*100;
let per_chem=(chem/total_SUB_MARKS)*100;
let per_bio=(bio/total_SUB_MARKS)*100;
let per_math=(math/total_SUB_MARKS)*100;
let per_comp=(comp/total_SUB_MARKS)*100;
if(per_phy>=90){
    console.log(`${per_phy}% your grade is "A" in physice`);
}else if(per_phy>=80){
    console.log(`${per_phy}% your grade is "B" in physice`);
} else if(per_phy>=70){
    console.log(`${per_phy}% your grade is "C" in physice`);
} else if(per_phy>=60){
    console.log(`${per_phy}% your grade is "D" in physice`);
} else if(per_phy>=50){
    console.log(`${per_phy}% your grade is "E" in physice`);
}else {
    console.log(`${per_phy}% your grade is "F" in physice`);
}

if(per_chem>=90){
    console.log(`${per_chem}% your grade is "A" in chemistary`);
}else if(per_chem>=80){
    console.log(`${per_chem}% your grade is "B" in chemistary`);
} else if(per_chem>=70){
    console.log(`${per_chem}% your grade is "C" in chemistary`);
} else if(per_chem>=60){
    console.log(`${per_chem}% your grade is "D" in chemistary`);
} else if(per_chem>=50){
    console.log(`${per_chem}% your grade is "E" in chemistary`);
}else {
    console.log(`${per_chem}% your grade is "F" in chemistary`);
}



if(per_math>=90){
    console.log(`${per_math}% your grade is "A" in math`);
}else if(per_math>=80){
    console.log(`${per_math}% your grade is "B" in math`);
} else if(per_math>=70){
    console.log(`${per_math}% your grade is "C" in math`);
} else if(per_math>=60){
    console.log(`${per_math}% your grade is "D" in math`);
} else if(per_math>=50){
    console.log(`${per_math}% your grade is "E" in math`);
}else {
    console.log(`${per_math}% your grade is "F" in math`);
}


if(per_bio>=90){
    console.log(`${per_bio}% your grade is "A" in biology`);
}else if(per_bio>=80){
    console.log(`${per_bio}% your grade is "B" in biology`);
} else if(per_bio>=70){
    console.log(`${per_bio}% your grade is "C" in biology`);
} else if(per_bio>=60){
    console.log(`${per_bio}% your grade is "D" in biology`);
} else if(per_bio>=50){
    console.log(`${per_bio}% your grade is "E" in biology`);
}else {
    console.log(`${per_bio}% your grade is "F" in biology`);
}



if(per_comp>=90){
    console.log(`${per_comp}% your grade is "A" in computer`);
}else if(per_comp>=80){
    console.log(`${per_comp}% your grade is "B" in computer`);
} else if(per_comp>=70){
    console.log(`${per_comp}% your grade is "C" in computer`);
} else if(per_comp>=60){
    console.log(`${per_comp}% your grade is "D"in computer`);
} else if(per_comp>=50){
    console.log(`${per_comp}% your grade is "E" in computer`);
}else {
    console.log(`${per_comp}% your grade is "F" in computer `);
}
//Q-14 electricity unit charges and show amount 
let unite1=parseInt(prompt(`Enter the unite of electricity which you want find the total bill`));
if(unite1<=50){
    unite1=unite1*0.50;
}else if(unite1<=150){
    unite1=unite1*0.75;
}else if(unite1<=250){
    unite1=unite1*1.20;
}else{
    unite1=unite1*1.50;
}
let unite2=(unite1*0.20);
unite1=unite1+unite2;
console.log(`${unite1} is your total electicity bill`);

