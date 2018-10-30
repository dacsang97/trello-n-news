import React from 'react'
import styled from 'styled-components'

const SelectWrapper = styled.div`
  -webkit-appearance: none;
  color: rgb(255, 255, 255);
  display: inline-flex;
  height: 40px;
  font-size: 12px;
  text-transform: uppercase;
  user-select: none;
  font-weight: 100;
  position: relative;
  white-space: nowrap;
  line-height: 0;
  width: auto;
  min-width: 160px;
  background: white;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(234, 234, 234);
  border-image: initial;
  overflow: hidden;
  transition: border 0.2s ease 0s, background 0.2s ease 0s, color 0.2s ease-out 0s,
    box-shadow 0.2s ease 0s;
  border-radius: 5px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 6px;
    border-color: rgb(221, 221, 221);
  }

  select {
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
    box-shadow: none;
    line-height: 40px;
    font-size: 14px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    background: none transparent;
    padding: 0px 56px 0px 16px;

    &:focus {
      outline: none;
    }
  }

  .arrow {
    width: 40px;
    height: 100%;
    position: absolute;
    right: 0px;
    pointer-events: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-left: 1px solid rgb(234, 234, 234);
    background: white;

    svg {
      stroke: rgb(153, 153, 153);
      transition: stroke 0.2s ease 0s;
    }
  }
`

export default ({ options, onChange }) => (
  <SelectWrapper>
    <select onChange={e => onChange(e.target.value)}>
      {options.map(option => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
    <div className="arrow">
      <svg
        width="13"
        height="6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#979797"
        fillRule="evenodd"
        strokeLinecap="square"
      >
        <path d="M1.367.375l5.185 5.303M11.685.375L6.5 5.678" />
      </svg>
    </div>
  </SelectWrapper>
)
