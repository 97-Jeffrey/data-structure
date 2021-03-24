// "abbcccddddcccbba" => 6
function IndexOfLongestRun(str){
  let maximum = 1;
  let counter =1;
  let result;
  for(let i=0; i<str.length; i++){
     if(str[i] == str[i-1]){
       counter ++     
       if(counter > maximum){
         maximum  = counter;
         result = i;
       }
     }else{
        counter= 1; 
     }     
  }
  
 return result - maximum + 1;
}

console.log(IndexOfLongestRun("abbcccddddcccbba"))
console.log(IndexOfLongestRun("abbbcbbbbb"))