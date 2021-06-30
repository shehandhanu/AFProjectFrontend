import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FeaturedPost from './FeaturedPost';
import CookieService from '../../API/Cookie'

import { getAprovedResearchs } from '../../actions/researchActions';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const PublicResearch = () => {

  const dispatch = useDispatch()
  const redirect = location.search ? location.search.split('=')[1] : '/'

  const { loading, researchs, error } = useSelector(state => state.research);

  useEffect(() => {

    const token = CookieService.get()
    if (!token) {
      history.push(redirect)
    }

    dispatch(getAprovedResearchs());

  }, [history, redirect]);

  console.log(researchs);

  const classes = useStyles();


  return (
    <React.Fragment>
      <Container style={{ marginTop: 76 }} maxWidth="lg">
        <main>
          <Grid container spacing={4}>
            {researchs && researchs.map((research) => (
              <FeaturedPost key={research._id} post={research} />
            ))}
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}

export default PublicResearch