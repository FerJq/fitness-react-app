import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
      <Typography>Exercises that target the same muscle group</Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {targetMuscleExercises.length && (
          <HorizontalScrollBar data={targetMuscleExercises} />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
