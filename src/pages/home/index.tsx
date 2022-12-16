import style from './index.module.scss'
import { connect } from 'react-redux'
import { increment, decrement } from '@/redux/action'
import { Button } from 'antd'
const Home = (props: any) => {
    const add = () => {
        console.log(props)
        props.increment(1)
    };
    const reduce = () => {
        props.decrement(1)
    }
    return (
        <>
            <div className={style['out']}>
                "我是home"
            </div>
            {props.count}
            <Button type='primary' onClick={(() => add())}>加</Button>
            <Button type='primary' onClick={(() => reduce())}>减</Button>
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