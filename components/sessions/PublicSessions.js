import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import CookieService from '../../API/Cookie'

import { getAprovedSessions } from '../../actions/sessionActions';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://res.cloudinary.com/dxz8wbaqv/image/upload/v1624956557/afproject/Cryptocurrenices-Blockchain-Value_c9bokz.png',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

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

const PublicSession = () => {

  const dispatch = useDispatch()
  const redirect = location.search ? location.search.split('=')[1] : '/'

  const { loading, sessions, error } = useSelector(state => state.sessions);

  useEffect(() => {

    const token = CookieService.get()
    if (!token) {
      history.push(redirect)
    }

    dispatch(getAprovedSessions());

  }, [history, redirect]);

  console.log(sessions);

  const classes = useStyles();

  return (
    <React.Fragment>
      <Container style={{ marginTop: 76 }} maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {sessions && sessions.map((session) => (
              <FeaturedPost key={session._id} post={session} />
            ))}
          </Grid>
        </main>
      </Container>
    </React.Fragment >
  );
}

export default PublicSession;
