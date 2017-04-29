// Tree breadthFirst
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
var eight = new Tree(8);
var nine = new Tree(9);
var ten = new Tree(10);
var eleven = new Tree(11);
var twelve = new Tree(12);

one.children.push(two, three, four);
two.children.push(five, six);
four.children.push(seven, eight);
five.children.push(nine, ten);
seven.children.push(eleven, twelve);

var outer = (root) => {
    var result = [];
    var obj = {};
    var breadthFirst = (node, level) => {
        if (!obj[level]) {
            obj[level] = [];
        }
        obj[level].push(node.value, level);
        if (node.children.length > 0) {
            node.children.forEach(child => {
                breadthFirst(child, level+1);
            })
        }
    };
    breadthFirst(root, 1);
    for (var key in obj) {
        result = result.concat(obj[key]);
    }
    return result;
};
outer(one);