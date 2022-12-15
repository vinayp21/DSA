// validate subsequences

//  array [5,1,22,25,6,-1,8,10]
// sequence [1,6,-1,10];

// return true if sequece is right in main array

function validateSequence(arr, seq){
    let pointer=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]===seq[pointer]){
            pointer++;
        }
    }
    return pointer===seq.length

}

console.log(validateSequence([5,1,22,25,6,-1,8,10],[1,6,-1,10])) //true

const compitition= [
    ["HTML", "C#"], // [home, away]  //c# won
    ["C#", "Python"],
    ["Python", "HTML"]
  ]

  const results =[0, 0, 1]; // shows who lost in respect to compitation

// output - python

function winner(competitions, results){
    let map={};
	let row= competitions.length;
	let max=0;
	let maxTeam="";
	for(let i=0; i<row;i++){
		const [home, away] = competitions[i];
		if(results[i]){
			map[home]=map[home]? map[home]+3:3;
			if(max<map[home]){
				max=map[home];
				maxTeam=home;
			}
		}else{
			map[away]=map[away]? map[away]+3:3;
			if(max<map[away]){
				max=map[away];
				maxTeam=away;
			}
		}
	}
  return maxTeam;

}

console.log(winner(compitation, result))

// The min amt of change that u cant create
// ex [1,2,5] -> o/p=4]
coins= [5, 7, 1, 1, 2, 3, 22];
//o/p 20

const minAmt =(coins) =>{
    coins=coins.sort((a,b) => a-b);
    if(coins[0]>1){
        return 1
    }
    let sum=0;

    for(const coin of coins){
		if(coin> sum+1){
			return sum+1;
		}
		sum+=coin;
	}
	return sum+1
}

console.log(minAmt(coins));

// 3 sum
let arr=[];
function threeSum(arr, target){

    arr= arr.sort((a,b) => a-b)
    let res=[]
    for(let i=0;i<arr.length;i++){
        let curr = arr[i];
        let left= i+1;
        let right= arr.length;

        while(left<right){
            let sum= curr+ arr[left]+arr[right]
            if(sum===target){
                res.push([curr,arr[left],arr[right]])
                left++;
                right--;
            }else if(sum<target){
                left++
            }else{
                right--
            }
        }
    }
}

console.log(threeSum(arr, 10))

const arrayOne= [-1, 5, 10, 20, 28, 3];
const arrayTwo= [26, 134, 135, 15, 17];

function smallestDiff(arrayOne, arrayTwo){
    arr1= arrayOne.sort((a,b) => a-b);
    arr2= arrayTwo.sort((a,b) => a-b);
    let l=0;
    let r=0;
    let min= Infinity;
    while(l<arrayOne.length && r<arrayTwo.length){
		let val1 = arrayOne[l];
		let val2 = arrayTwo[r];
		if(val1<val2){
			curr=val2-val1
			l++;
		}else if(val2<val1){
			curr=val1-val2
			r++
		}else{
			return [val1,val2]
		}
		if(curr<min){
			min=curr;
			res=[val1,val2]
		}
	}
    
}

console.log(smallestDiff(arrayOne,arrayTwo))

// Move element to end

const array=[2, 1, 2, 2, 2, 3, 4, 2];
const toMove=2

function move(array){
    let pointer=0;
    for(let i=0; i<array.length;i++){
        if (array[i] === toMove && array[i + 1] && array[i + 1] !== toMove) {
			[array[pointer], array[i+1]]=[array[i+1], array[pointer]]
            pointer = pointer + 1;
        }else if(array[i]!==toMove ){
			pointer++;
	    }
    }
    return array;

}

console.log(move(array))

// Monotonic Array

// ever increasing or decreasing
let mArr = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];

function isMonotonic(array){

    const isInc = array[0]<array[array.length-1]

    for(let i=0; i<array.length; i++){
        if((isInc && array[i]>array[i+1]) || (!isInc && array[i]<array[i+1] )){
            return false;
        }
    }
    return true

}

console.log(isMonotonic(mArr))

const matrix = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ];
//   const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  

function spiralTraverse(array) {
    let cStart=0;
    let cEnd= array[0].length-1;
    let rStart=0;
    let rEnd=array.length-1;
    let res=[];
        while(cStart<=cEnd && rStart<= rEnd){
            for(let i=cStart; i<=cEnd;i++){
                res.push(array[rStart][i])
            }
            for(let i=rStart+1; i<=rEnd;i++){
                res.push(array[i][cEnd])
            }
            for(let i=cEnd-1; i>=cStart;i--){
                if(rStart===rEnd) break;
                res.push(array[rEnd][i])
            }
    
            for(let i=rEnd-1; i>rStart;i--){
                if(cEnd===cStart) break;
                res.push(array[i][cStart])
            }
             cStart++;
             cEnd--;
             rStart++;
             rEnd--;
        }
        
        return res
    }    
}


const peaks=[1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
function longestpeak(){
    function getPeakLength(index){
		let count=3;
		for(let i=index+1;i<arr.length;i++){
			// console.log(i)
			if(arr[i]>arr[i+1]){
				count++
			}else{
				break;
			}
		}
		for(let i=index-1;i>=0;i--){
			if(arr[i]>arr[i-1]){
				count++
			}else{
				break;
			}
		}
		return count;
	}
	
	let length=0;
	let max=0;
	for(let i=1;i<arr.length;i++){
		if(arr[i]>arr[i+1]&& arr[i-1]<arr[i]){
			length =getPeakLength(i);
		}
		max=Math.max(length,max);
	}
	return max;
}

console.log(longestpeak(peaks))

// array of products
const prod= [5,1,4,2]; //output [8,40, 10,20] 

function firstduplicate(arr){

    for(let val of arr){
        const value = Math.abs(val)
        if(arr[value-1]<0){
            return arr[val]
        }
        arr[value-1]= arr[value-1]*-1;
    }
    return -1

}

console.log(firstduplicate(prod))

function fourSum(array, targetSum){
    let pair={};
	let result=[];
	let dup={};
	for(let i=1;i<array.length;i++){
		for(let j=i+1;j<array.length;j++){
			let currentSum= array[i]+array[j];
			let difference =targetSum-currentSum;
			if(pair[difference]){
				for(const pairArr of pair[difference]){
					let key=`${pairArr.join("-")}-${array[i]}-${array[j]}`
					if(!dup[key]){
						result.push(pairArr.concat([array[i],array[j]]));
						dup[key]=true
					}
				}
			}
		}
			for(let k=0; k<i;k++){
				let currentSum= array[i]+array[k];
				if(!(pair[currentSum])){
					pair[currentSum]= [[array[i],array[k]]]
				}else{
					pair[currentSum].push([array[i],array[k]])
				}
			}
		}
	
	return result
}

console.log(fourSum([[7, 6, 4, -1, 1, 2]],16))