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

    // in-order traversal (from smallest to largest node)
    this.inOrderTraverse = callback => {
        inOrderTraverseNode(root, callback);
    };

    const inOrderTraverseNode = (node, callback) => {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
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

    this.postOrderTraverse = callback => {
        postOrderTraverseNode(root, callback);
    }

    const postOrderTraverseNode = (node, callback) => {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    };

    this.min = () => minNode(root);

    const minNode = node => {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }

            return node.key;
        }

        return null;
    };

    this.max = () => maxNode(root);

    const maxNode = node => {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }

            return node.key;
        }

        return null;
    };

    this.search = key => searchNode(root, key);

    const searchNode = (node, key) => {
        if (node === null) {
            return false;
        }

        if (key < node.key) {
            return searchNode(node.left, key);
        } else if (key > node.key) {
            return searchNode(node.right, key);
        } else {
            return true;
        }
    };

    this.remove = key => {
        root = removeNode(root, key);
    };

    const removeNode = (node, key) => {
        if (node === null) {
            return null;
        }

        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        } else { // key is equal to node.key
            // case 1 - a leaf node
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            // case 2 - a node with only 1 child
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            // case 3 - a node with 2 children
            let aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    };

    const findMinNode = node => {
        while (node && node.left !== null) {
            node = node.left;
        }

        return node;
    }

    this.getRoot = () => root;
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
