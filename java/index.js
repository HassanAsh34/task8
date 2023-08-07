// For Task 1 

// 1 - Inctroduce Your Self (Name , age  , faculty , ) in varriable and write it in HTML Using JS Note using temolate Literal

        //Write Code Here
        // Note : you can write in HTML using  document.write(varribale_Name) ; 
        let data={name:"hassan",age:19,faculty:"computer science and artificial intelligence"};
        document.write("name: "+data.name);
        document.write("age: "+data.age);
        document.write("faculty: "+data.faculty);
// 2 - You Have Number 

let str = "20000.432423" ,str2 = "2005.432423" ; 
//1st methode
str = +"20000.432423";
console.log(str + "\n" + typeof(str));
//2nd methode
str2 = parseFloat(str2);
console.log(str2 + "\n" + typeof(str2));
//console.log("12312312312") //convert String To Number Using to Two different Method

