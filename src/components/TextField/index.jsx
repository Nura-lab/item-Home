import React from 'react'
import styled from 'styled-components'
import { Input } from 'antd'
import "./TextField.less"

const Label = styled.label`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 120%;
    color: #565A65; 
    margin-bottom: 8px;
`

const CustomInput = styled(Input)`
    border-bottom: 1px solid #B6BFD9;
    border-top: 0;
    border-right: 0;
    border-left: 0;
    width: 200px;
    border-radius: 0px;
    outline: none;

    &:focus {
        box-shadow: none;
    }

    &::placeholder {
        font-family: "Open Sans";
        font-size: 16px;
        line-height: 150%;
        color: #DADFEB;
    }
`

export const TextField = ({ label, type, placeholder }) => {
    return <div className="textfield">
        <Label htmlFor="text">{label}</Label>
        <CustomInput placeholder={placeholder} type={type} />
    </div>
}