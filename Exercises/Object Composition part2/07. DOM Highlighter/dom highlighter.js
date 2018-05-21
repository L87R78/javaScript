
function traverseDom(selector) {
    //използваме Depth-First Search
    let targetNode = $(selector);
    let maxDepth = 0;
    let deepestNode = targetNode;

    depthFirstSearch(0, targetNode);
    hightFromBottonToTargetNode(maxDepth, deepestNode);

    function hightFromBottonToTargetNode(remainigNodes, currentNode) {    //this is recorse up, връщане нагоре
        console.log(remainigNodes);
        if(remainigNodes === -1){
            return;
        }
        currentNode.addClass('highlight');
        let parent = currentNode.parent();
        hightFromBottonToTargetNode(remainigNodes - 1, $(parent));

    }

    function depthFirstSearch(depth, currentNode) {       //this is recourse down, слизане на долу

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
