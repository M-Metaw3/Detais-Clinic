

import * as React from "react";
import styled from "styled-components";

function SectionThreeBlog(props) {
  return (
    <Div>
      <Img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a8111bab771fc5aea6957de467597a0796e2e97dea2c4003b59e80fcb466cc97?apiKey=21d766a1386c46b1b5fa78a0fa2e9250&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8111bab771fc5aea6957de467597a0796e2e97dea2c4003b59e80fcb466cc97?apiKey=21d766a1386c46b1b5fa78a0fa2e9250&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8111bab771fc5aea6957de467597a0796e2e97dea2c4003b59e80fcb466cc97?apiKey=21d766a1386c46b1b5fa78a0fa2e9250&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8111bab771fc5aea6957de467597a0796e2e97dea2c4003b59e80fcb466cc97?apiKey=21d766a1386c46b1b5fa78a0fa2e9250&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8111bab771fc5aea6957de467597a0796e2e97dea2c4003b59e80fcb466cc97?apiKey=21d766a1386c46b1b5fa78a0fa2e9250&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8111bab771fc5aea6957de467597a0796e2e97dea2c4003b59e80fcb466cc97?apiKey=21d766a1386c46b1b5fa78a0fa2e9250&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8111bab771fc5aea6957de467597a0796e2e97dea2c4003b59e80fcb466cc97?apiKey=21d766a1386c46b1b5fa78a0fa2e9250&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8111bab771fc5aea6957de467597a0796e2e97dea2c4003b59e80fcb466cc97?apiKey=21d766a1386c46b1b5fa78a0fa2e9250&"
      />
      <Div2>
        <Div3>Category</Div3>
        <Div4>Lorem ipsum dolor sit amet consectetur. Adipiscing velit.</Div4>
        <Div5>
          Lorem ipsum dolor sit amet consectetur. Eleifend dolor vel hendrerit
          quis diam. At nisi porttitor pellentesque suspendisse nibh lobortis.
          Varius leo.
        </Div5>
        <Div6 />
        <Div7>08.08.2021</Div7>
      </Div2>
    </Div>
  );
}

const Div = styled.div`
  disply: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  min-height: 600px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #fff;
  font-weight: 400;
  padding: 50px 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Img = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Div2 = styled.div`
  position: relative;
  display: flex;
  margin-top: 135px;
  width: 557px;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div3 = styled.div`
  justify-content: center;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.15);
  white-space: nowrap;
  text-align: center;
  padding: 5px 24px;
  font: 14px AktivGrotesk-Bold, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div4 = styled.div`
  text-align: center;
  align-self: stretch;
  margin-top: 24px;
  font: 30px AktivGrotesk-Medium, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div5 = styled.div`
  color: #e5e5e5;
  text-align: center;
  font-family: Lora, sans-serif;
  line-height: 20px;
  align-self: stretch;
  margin-top: 42px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div6 = styled.div`
  background-color: #e5e5e5;
  margin-top: 23px;
  width: 40px;
  height: 1px;
`;

const Div7 = styled.div`
  color: #e5e5e5;
  font-family: Lora, sans-serif;
  margin-top: 17px;
`;


export default SectionThreeBlog;
