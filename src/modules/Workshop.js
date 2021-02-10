import React, { useEffect, useState } from "react"
import styled from "styled-components"
import ReactPlayer from "react-player"

import Layout from "../components/layout/Layout"
import { ScheduleRounded } from "@material-ui/icons"
import FormToCampus from "../components/FormToCampus"
import Testimony from "../components/Testimony"
import Loading from "../components/Loading"

const Workshop = props => {
  const { id, type } = props

  const [item, setItem] = useState(null)

  useEffect(() => {
    async function getSource() {
      await fetch(
        `${process.env.GATSBY_REPO}${
          type === "workshop" ? "workshop" : "v1/microcontent"
        }/${id}`
      )
        .then(res => res.json())
        .then(res => setItem(res))
        .catch(err => console.log(err))
    }
    getSource()
  }, [id, type])

  console.log(item)

  if (!item) {
    return <Loading />
  }

  return (
    <Layout
      title={item.nombre_publicacion}
      description={item.descripcion}
      image={item.imagen}
    >
      <WorkshopContainer>
        <FirstColumn>
          {type === "workshop" ? (
            <SrcImg
              src={`data:image/png;base64, ${item.imagen}`}
              alt="recurso"
            />
          ) : (
            <VideoWrapper>
              <ReactPlayerFake
                url={item.link_video}
                controls={true}
                width="100%"
                height="100%"
                playsinline
              />
            </VideoWrapper>
          )}
          <FirstColumnData>
            <TypeSpan>
              {type === "workshop" ? "WORKSHOP 100% ONLINE" : "MICROLEARNING"}
            </TypeSpan>
            <Title>{item.nombre_publicacion}</Title>
            {item.tag_id.map((tag, index) => (
              <TagSpan key={index}>{tag}</TagSpan>
            ))}
            {type === "workshop" ? (
              <>
                <Description>{item.descripcion}</Description>
                <TimeWrapper>
                  <ScheduleRounded fontSize="default" htmlColor="#616161" />
                  <TimeText>1 hora</TimeText>
                </TimeWrapper>
              </>
            ) : (
              <Author>Por {item.autor_para_acropolis}</Author>
            )}
          </FirstColumnData>
        </FirstColumn>
        <SecondColumn>
          <FormToCampus type={type} id={id} />
        </SecondColumn>
      </WorkshopContainer>
      <Testimony />
    </Layout>
  )
}

export default Workshop

const WorkshopContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 2rem;
  padding: 3rem 8rem;

  @media (max-width: 1200px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`

// First Column
const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.06);
  width: 100%;
`

const FirstColumnData = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 2rem 3rem;
`

const SrcImg = styled.img`
  width: 100%;
  height: auto;
`

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`

const ReactPlayerFake = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`

const TypeSpan = styled.span`
  background-color: #b31d15;
  color: #ffffff;
  border-radius: 5px;
  padding: 0.5rem 1.5rem;
  width: max-content;
  font-size: 1rem;
  font-weight: 700;
`

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
  color: #b31d15;
`

const TagSpan = styled.span`
  width: max-content;
  border: 2px solid #b31d15;
  color: #b31d15;
  border-radius: 19px;
  padding: 0.25rem 1rem;
`

const Author = styled.div`
  font-size: 1.25rem;
  color: #616161;
`

const Description = styled.p`
  font-size: 1rem;
  color: #616161;
`

const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  margin-left: auto;
`

const TimeText = styled.span`
  font-size: 1rem;
  color: #616161;
`

const SecondColumn = styled.div`
  @media (max-width: 992px) {
    grid-row: 1;
  }
`
