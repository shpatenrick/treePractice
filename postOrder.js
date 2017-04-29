// Tree post-order
// post order is pushing leaf nodes first
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

seven.children.push(four, six);
four.children.push(one, three);
three.children.push(two);
six.children.push(five);

// start at root node
    // check if node has children
        // if yes, recurse
        // if no, add value to result array
    // once children are all checked, add node value to result array

var outer = (root) => {
    var result = [];
    var postorder = (node, level) => {
        if (node.children.length === 0) {
            result.push([node.value, level]);
        } else {
            level++;
            node.children.forEach(element => {
                console.log(level);

                postorder(element, level);
            })
//             result.push('(' + node.value + ',' + level + ')');
               level--;
               result.push([node.value, level]);
        }
    };
    postorder(root, 1)
    return result;
};
outer(seven);