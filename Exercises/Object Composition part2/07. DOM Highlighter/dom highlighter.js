function traverseDom(selector) {
    let targetNode = $(selector);
    let maxDepth = 0;
    let deepestNode = targetNode;

    depthFirstSearch(0, targetNode);
    hightFromBottonToTargetNode(maxDepth, deepestNode);

    function hightFromBottonToTargetNode(remainigNodes, currentNode) {
        console.log(remainigNodes);
        if(remainigNodes === -1){
            return;
        }
        currentNode.addClass('highlight');
        let parent = currentNode.parent();
        hightFromBottonToTargetNode(remainigNodes - 1, $(parent));

    }

    function depthFirstSearch(depth, currentNode) {

        if(depth > maxDepth){
            maxDepth = depth;
            deepestNode = currentNode
        }
        let children = currentNode.children();
        for (let child of children) {
            depthFirstSearch(depth + 1, $(child))
        }
    }

}
traverseDom('.article');
