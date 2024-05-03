import React from 'react'
import Form from 'react-bootstrap/Form';

const BootstrapComponent = () => {
    const arr = [
        'Use Array.map',
        'Not a for loop',
        'Give each',
        'Avoid'
    ];
    const listItems = arr.map((i)=> <li  key={i.toString()} className='customCss'>{i}</li>)
  return (
    <div>
        <ul>{listItems}
            {/* {
                arr.map((i)=>{
                    return <li key={i.toString()} className='customCss'>{i}</li>
                })
            } */}
        </ul>
      {/* <h1 className='bg-primary text-warning'>Hello</h1>
      <button className='btn btn-primary'>Click</button> */}

      {/* <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control size="lg" type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form> */}
    </div>
  )
}

export default BootstrapComponent
