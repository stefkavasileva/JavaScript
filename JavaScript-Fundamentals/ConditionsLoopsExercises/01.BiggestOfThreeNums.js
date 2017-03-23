function printBiggestNum(nums) {
    nums=nums.map(Number);
    nums.sort((a,b)=>b-a);
    console.log(nums[0]);
}
