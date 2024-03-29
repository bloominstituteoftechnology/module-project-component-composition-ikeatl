import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'
import NasaPhoto from './NasaPhoto'
import DateSelector from './DateSelector'
import styled from 'styled-components';

const Main = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`


function App() {
  const [photoData, setPhotoData] = useState(null);
  const [date, setDate] = useState('');


  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then(res => {
        setPhotoData(res.data);
      }).catch(err => console.error(err))
  }, [date]);

  if (!photoData) return <h3>Loading...</h3>;

  const handleSelect = (date) => {
    setDate(date)
  }

  return (
    <Main>
      <DateSelector passedDateProp={handleSelect} />
      <Header date={photoData.date} />
      <NasaPhoto title={photoData.title} url={photoData.url} />
      <Footer title={photoData.title} copyright={photoData.copyright} explanation={photoData.explanation} />

    </Main>
  )
}

export default App
