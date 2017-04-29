// Tree pre-order
// pre order is record value at node as you visit it
var Tree = function(val) {
    this.value = val;
    this.children = [];
};
var seven = new Tree(7);
var six = new Tree(6);
var five = new Tree(5);
var four = new Tree(4);
var three = new Tree(3);
var two = new Tree(2);
var one = new Tree(1);
one.children.push(two, six);
two.children.push(three, four);
four.children.push(five);
six.children.push(seven);

var outer = (root) => {
    var result = [];
    var preorder = (node, level) => {
        result.push(node.value, level);
        if (node.children.length > 0) {
           debugger;
           level++;
           node.children.forEach(element => {
                preorder(element, level);
            })
        }
    };
    preorder(root, 1);
    return result;
};
outer(one);