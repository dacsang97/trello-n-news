import styled from 'styled-components'

export default styled.div`
  position: relative;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(234, 234, 234);
  border-image: initial;

  .header,
  .footer {
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(250, 250, 250);

    color: rgb(68, 68, 68);
    display: flex;
    font-size: 12px;
    box-sizing: border-box;
    padding: 15px;
    div {
      color: rgb(68, 68, 68);
      display: flex;
      width: 100%;
      -webkit-box-align: center;
      align-items: center;
      flex: 1 1 0%;
    }
  }
  .header {
    border-bottom: 1px solid rgb(234, 234, 234);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .footer {
    border-top: 1px solid rgb(234, 234, 234);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .content {
    background-color: white;
    border-radius: 5px;
    padding: 20px;

    .title {
      color: rgb(0, 0, 0);
      font-size: 20px;
      font-weight: 500;
      line-height: 1;
      margin: 0px 0px 14px;
    }

    p {
      color: rgb(0, 0, 0);
      font-size: 12px;
      font-weight: 400;
      line-height: 1.5;
      margin: 0px 0px 14px;
    }
  }
`
