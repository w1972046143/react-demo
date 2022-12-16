
/*
reduce只管纯函数，不管啥偶数加奇数加等等只是一个纯函数
* 本身就是一个函数*/    //之前的值，传过来的值
//prestate初始化状态是null所以得定义一下默认值
const initState = 0
export default function countReduce(preState:number = initState, action: { type: any; data: any; }) {
    const { type, data } = action
    switch (type) {
        case "add":
            return preState + data
        case "inadd":
            return preState - data
        default:
            return preState;
    }
}
