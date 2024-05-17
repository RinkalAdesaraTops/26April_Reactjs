import React from 'react'

const Contact = () => {
    let count =0;
    for(let i=0;i<1000000000;i++){
        count+=1;
    }
  return (
    <div>
      <h3>My Contact</h3>
      Count is : {count}
    </div>
  )
}

export default Contact
