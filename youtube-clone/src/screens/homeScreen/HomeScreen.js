import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoriesBar from '../../components/categoriesBar/CategoriesBar'
import Video from '../../components/video/Video'
import { useDispatch, useSelector } from "react-redux"
import { getPoplarVideos, getVideosByCategory } from '../../redux/actions/videos.action'
import InfiniteScroll from 'react-infinite-scroll-component'
import SkeletonVideo from '../../components/skeletons/SkeletonVideo'
import axios from 'axios'

let countryCode;
axios.get('https://ipapi.co/json/').then((response) => {
    let data = response.data;
    countryCode = data.country;
    
}).catch((error) => {
    console.log(error);
});

const HomeScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get('https://ipapi.co/json/').then((response) => {
            let data = response.data;
            dispatch(getPoplarVideos(data.country));

        }).catch((error) => {
            console.log(error);
        });
        //dispatch(getPoplarVideos(countryCode));
    }, [dispatch]);

    const {videos, activeCategory, loading} = useSelector(state => state.homeVideos);
    
    const fetchData = () => {
        if(activeCategory === "All"){
            dispatch(getPoplarVideos(countryCode));

        } else {
            dispatch(getVideosByCategory(activeCategory));
        }
    }

    return (
        <Container>
            <CategoriesBar  />
            <Row>
                <InfiniteScroll dataLength={videos.length} next={fetchData} hasMore={true} loader={<div className='spinner-border text-danger d-block mx-auto'></div>} className='row'>
                    {
                        !loading ? 
                            videos.map((video) => (
                                <Col lg={3} md={4}>
                                    <Video  video={video} key={video.id}/>
                                </Col>
                            ))
                        : (
                            [...Array(20)].map(() => 
                                <Col lg={3} md={4}>
                                    <SkeletonVideo />
                                </Col>
                            )
                        )
                    }
                </InfiniteScroll>
            </Row>
        </Container>
    )
}

export default HomeScreen
