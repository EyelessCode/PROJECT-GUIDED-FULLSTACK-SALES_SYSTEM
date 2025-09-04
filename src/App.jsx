import styled from "styled-components"
import {GlobalStyle} from "./index"

function App() {

  return (
    <Container>
      <GlobalStyle/>
      <section className="contentSidebar"></section>
      <section className="contentMenuambur"></section>
      <section className="contentRouters"></section>
    </Container>
  )
}

const Container=styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: gray;
`;

export default App
