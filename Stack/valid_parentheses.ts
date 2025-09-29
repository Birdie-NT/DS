/**
 * LeetCode Problem 20: Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 *
 * Description:
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * Example:
 * Input: "()[]{}"
 * Output: true
 *
 * Approach:
 * Use a stack to keep track of opening brackets.
 * When a closing bracket appears, check if it matches the top of the stack.
 */

function isValid (s: string): boolean {
    const stack: string[] = [];
    const pairs: Record<string, string> = { '(' : ')',  '{' :'}', '[' :']'};

    for (const char of s) {
        if (pairs[char]) {
            // If it's an opening bracket, push onto stack
            stack.push(char);
        } else {
            // If it's a closing bracket, check the last element in stack
            if( stack.pop() !== char)
            return false;
        }
    }
    return stack.length === 0;
}

/**
 * Time Complexity: O(n) ----> We iterate through each character once
 * Space Complexity: O(n) ---> We use stack to store opening brackets 
 */