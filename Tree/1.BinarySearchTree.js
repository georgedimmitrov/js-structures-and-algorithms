function BinarySearchTree() {
    let Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    let root = null;

    this.insert = key => {
        const newNode = new Node(key);

        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    const insertNode = (node, newNode) => {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    this.getRoot = () => root;

    const searchNode = (node, key) => {

    }

    this.search = key => searchNode(root, key);

    const inOrderTraverseNode = (node, callback) => {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    };

    // in-order traversal (from smallest to largest node)
    this.inOrderTraverse = callback => {
        inOrderTraverseNode(root, callback);
    };

    // pre-order traversal (starts from ROOT, then LEFT down to last node, then RIGHT)
    this.preOrderTraverse = callback => {
        preOrderTraverseNode(root, callback);
    };

    const preOrderTraverseNode = (node, callback) => {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    };

}


// const printNode = value => console.log(value);
// const tree = new BinarySearchTree();
//
// tree.insert(11);
// tree.insert(7);
//
// tree.insert(5);
// tree.insert(3);
// tree.insert(4);
//
// tree.inOrderTraverse(printNode);
