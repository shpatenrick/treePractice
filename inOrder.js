// Tree inorder
// in order is sorting through ordered binary search tree by value
var Tree = function(val) {
    this.value = val;
    this.left = null;
    this.right = null;
};
var seven = new Tree(7);
var six = new Tree(6);
var five = new Tree(5);
var four = new Tree(4);
var three = new Tree(3);
var two = new Tree(2);
var one = new Tree(1);

five.left = two
five.right = six;
two.left = one;
two.right = four;
four.left = three;
six.right = seven;

var outer = (root) => {
    var result = [];
    var inorder = (node, left, right, level) => {
        if (left) {
          inorder(left, left.left, left.right, level + 1);
        }
        result.push(node.value, level);
        if (right) {
            inorder(right, right.left, right.right, level + 1);
        }
    };
    inorder(root, root.left, root.right, 1)
    return result;
};
outer(five);