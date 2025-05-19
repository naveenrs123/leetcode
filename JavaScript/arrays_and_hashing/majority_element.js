/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let res = 0;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      res = num;
    }
    count += num === res ? 1 : -1;
  }
  return res;
};
