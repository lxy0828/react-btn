import React, { useState } from 'react'
import './importIcons'
import './icon.scss';
interface BtnProps {
  name?: string,
  clickBtn?: any;
  l_clickBtn?: any
}   

const Btn: React.FunctionComponent<BtnProps> = (props) => {
    console.log(name,888888)
    const [num, setNum] = useState(1)
    function l_clickBtn() {
        setNum(num+1)
        props.clickBtn(num,'这是点击的数字')
    }
  return (
    <div>
        <div>{num}</div>
        <button onClick={()=>{l_clickBtn()}} className={`btn`}>{props.name == null || name === '' ? '点击' : props.name}</button>
    </div>
  )
}

export default Btn