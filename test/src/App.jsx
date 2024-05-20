import React from 'react'
import "./App.css"
import Query from './components/Query'
import NewsContainer from './components/NewsContainer'
import NewsBox from './components/NewsBox';
import Title from './components/Title';
import "./services/GetNews"
import { DemoNews } from './services/GetNews';
const App = () => {
DemoNews()
   const data =  DemoNews();
   console.log(data);
  return (
    <div className="main">
    <h1 className="heading-txt">Welcome to the TabNews</h1>
    <div className="center-box">
       <Query/>
       <NewsContainer>
        <NewsBox>
          <Title></Title>
        </NewsBox>
       </NewsContainer>
    </div>
  
</div>

  )
}

export default App