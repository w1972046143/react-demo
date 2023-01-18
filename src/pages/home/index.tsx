import style from './index.module.scss'
import { connect } from 'react-redux'
import { increment, decrement } from '@/redux/action'
import { Button } from 'antd'
import { useState } from 'react'
const Home = (props: any) => {
    const [num,setNum] = useState<number>(1)
    const add = () => {
        console.log(props)
        props.increment(1)
    };
    const reduce = () => {
        props.decrement(1)
    }
    const changeVal =()=>{
        setNum(num+1)
        console.log("改变值")
    }
    return (
        <>
            <div className={style['out']}>
                "我是home"
            </div>
            {props.count}
            <Button type='primary' onClick={(() => add())}>加</Button>
            <Button type='primary' onClick={(() => reduce())}>减</Button>
            {num}
            <Button onClick={()=>changeVal()}>加一</Button>
        </>
    )
}
export default connect(
    //数据
    state => ({ count: state }),
    //方法
    {
        increment,
        decrement
    }
)(Home)