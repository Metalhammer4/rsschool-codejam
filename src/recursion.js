module.exports = function recursion(three) {
    let stack = [];
    
        function walkBFS(node, lev) {
            if (!stack[lev]) stack[lev] = [];
            stack[lev].push(node.value);
              let level = lev + 1;
              if (node.left) walkBFS(node.left, level);
              if (node.right) walkBFS(node.right, level);
        }
        walkBFS(three, 0);
    return stack;
        
};
