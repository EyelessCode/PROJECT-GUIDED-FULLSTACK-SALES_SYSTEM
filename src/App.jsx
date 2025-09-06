import styled,{ThemeProvider} from "styled-components"
import {Device,GlobalStyle,AppRoutes,Sidebar, useThemeStore} from "./index"

function App() {
  const {themeStyle}=useThemeStore()
  return (
    <ThemeProvider theme={themeStyle}>
      <Container>
        <GlobalStyle/>
        <section className="contentSidebar">
          <Sidebar/>
        </section>

        <section className="contentMenuambur">Menu Hamburguesa</section>
        
        <section className="contentRouters">
          <AppRoutes/>
        </section>
      </Container>
    </ThemeProvider>
  )
}

const Container=styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: gray;

  .contentSidebar{
    display: none;
    background-color: bisque;
  }

  .contentMenuambur{
    position: absolute;
    background-color: brown;
  }

  .contentRouters{
    background-color: red;
    grid-column: 1;
    width: 100%;
  }

  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;

    .contentSidebar{
      display: initial;
    }

    .contentMenuambur{
      display: none;
    }

    .contentRouters{
      grid-column: 2;
    }
  }
`;

export default App
