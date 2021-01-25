import React from 'react'
import {Empty} from 'antd'
import Err from '../../assets/img/Error.png'

const Error= () => {
    return (
        <div>
             <Empty
    image={Err}
    // imageStyle={{
    //   height: 60,
    // }}
    description="Oops!! Something went wrong. Check your connection"
  ></Empty> 
        </div>
    )
}

export default Error
