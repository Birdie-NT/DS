/**
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 */

// Definition for a binary tree node.
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(value?: number, left?: TreeNode | null , right?: TreeNode | null) {
        this.val = (value === undefined ? 0 : value)
        this.right = (right === undefined ? null : right)
        this.left = (left === undefined ? null : left)
    }
}

