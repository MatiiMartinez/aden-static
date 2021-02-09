import React from "react"
import styled from "styled-components"
import ReactPlayer from "react-player"

const Testimony = () => {
  return (
    <TestimonyContainer>
      <FirstColumn>
        <Title>Testimonios de nuestros egresados</Title>
        <Text>
          Compartimos los testimonios de ejecutivos que han confiado su
          educación con nosotros, una red educativa internacional que integra a
          más de 70.000 profesionales y líderes empresariales a través del
          networking y la educación a distancia.
        </Text>
        <Subtitle>Networking internacional</Subtitle>
        <Text>
          Conéctate con una red mundial de profesionales que le aportará gran
          valor a tu experiencia de cursado, pudiendo aprender de las
          experiencias con ejecutivos de América Latina y el mundo.
        </Text>
      </FirstColumn>
      <SecondColumn>
        <ReactPlayerFake
          url="https://www.youtube.com/watch?v=wR2ewWi47Xc"
          controls={true}
          width="100%"
          height="100%"
          playsinline
        />
      </SecondColumn>
    </TestimonyContainer>
  )
}

export default Testimony

const TestimonyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 6rem;
  background-color: #b31d15;
  color: #ffffff;
  padding: 8rem;

  @media (max-width: 1200px) {
    padding: 4rem 2rem;
  }
`

const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 900;
`

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 900;
`

const Text = styled.p`
  font-size: 1rem;
  font-weight: 300;
`

const SecondColumn = styled.div`
  position: relative;
  padding-top: 56.25%;
`

const ReactPlayerFake = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`
