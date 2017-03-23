function calcBunaryLog(nums) {
    nums=nums.map(Number);
    for (let i = 0; i < nums.length; i++) {
        let log=Math.log2(nums[i])
        console.log(log)
    }
}
