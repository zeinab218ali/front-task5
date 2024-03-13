import React from 'react'
import Form from 'react-bootstrap/Form';
const Selection = () => {
    return (
        <div className='select-container'>
            <Form.Select aria-label="Default select example">
                <option >Best useful link ?</option>
                <option value="1">Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.</option>
            </Form.Select>
            <Form.Select aria-label="Default select example">
                <option>How does this work ?</option>
                <option value="2">Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</option>
            </Form.Select>

            <Form.Select aria-label="Default select example">
                <option>Why is villa agency the best ?</option>
                <option value="3">Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</option>
            </Form.Select>



        </div>
    )
}

export default Selection