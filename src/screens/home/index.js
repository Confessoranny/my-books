import React from 'react'
import styled from 'styled-components'
import ImageComponent from '../../components/ImageComponent'

import SearchInput from '../../components/SeachInput'
import SliderCard from '../../components/Slider'
import Card from './../../components/Card'
import Menu from './../../components/Menu'

const Container = styled.div`
width: 100%;
/* height: 1000vh; */
/* background-color: yellow; */
`

const Content = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: ##F2F2F2;
`

const Group = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: calc(100% - 20%);
margin-bottom: 30px;
/* background-color: blue; */
`

const Text = styled.div`
display: flex;
justify-content: flex-start;
width: calc(100% - 20%);
/* background-color: yellow; */
`

const H1 = styled.h1`
font-size: 24px;
font-weight: 600;
font-family: "SF Pro Display";
color: #54565A;

    span {
        color: #FF6978;
    }

`

function Home() {

    const texts = [
        {
            firstTitle: "Current reading"
        },
        {
            secondTitle: "Reviews of The Days"
        }
    ]

    return(
        <Container alt="home-container">
            <Content alt="home-content">
                <Group alt="home-Group">
                    <SearchInput />
                </Group>
                <Text alt="home-identity">
                    <H1>Hi, <span>Mehmed Al Fatih</span> 👋</H1>
                </Text>
                <Group alt="home-Group">
                    <SliderCard></SliderCard>
                </Group>
                <Group alt="home-group">
                    <Card value="verao" text={texts.map(texts => {
                        return(
                            texts.firstTitle
                            )
                    })}></Card>
                </Group>
                <Group alt="home-group">
                    <Card value="wallpaper" text={texts.map(texts => {
                        return(
                            texts.secondTitle
                        )
                    })}></Card>
                </Group>
                <Menu></Menu>
            </Content>
        </Container>
    )
}

export default Home;

