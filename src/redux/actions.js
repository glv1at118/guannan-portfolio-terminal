function componentEnterStack(componentObj) {
    return {
        data: componentObj,
        type: "COMPONENT_ENTER_STACK"
    };
}

function clearStack() {
    return {
        type: "CLEAR_STACK"
    };
}

export { componentEnterStack, clearStack };