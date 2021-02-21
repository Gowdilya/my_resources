/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
console.log(typeof(true));
var invertTree = function(root) {
    // base case
    if(!root) return null; //because boolean of 0 false
    const tree = new TreeNode();

    //recursive
    tree.val = root.val;
    tree.left = invertTree(root.right);
    tree.right = invertTree(root.left);
    return tree;

};