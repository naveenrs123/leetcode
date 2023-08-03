// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

// Optimized Solution
// Sliding window with two pointers
// Time Complexity: O(n)
// Space Complexity: O(1)

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let l = 0;
  let r = 1;
  let maxP = 0;

  while (r < prices.length) {
    let profit = prices[r] - prices[l];
    if (profit >= 0) {
      maxP = maxP > profit ? maxP : profit;
    } else {
      l = r;
    }
    r++;
  }

  return maxP;
};
