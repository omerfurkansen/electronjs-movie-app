import { Box, Chip as MuiChip } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { yellow, blue } from '@mui/material/colors';
import { Star as MuiStar, LiveTv as MuiLiveTv } from '@mui/icons-material';

// CONTAINERS
export const MovieDetailContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
  fontWeight: 400,
  gap: '80px',
  position: 'relative',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 0',
  },
}));

export const ChipsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '10px 5px',
  color: theme.palette.text.secondary,
}));

export const RatingContainer = styled(Box)({
  display: 'flex',
  gap: '5px',
  alignItems: 'center',
  letterSpacing: '.5px',
  height: '22px',
});

export const ActorsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',

  '& span': {
    color: theme.palette.text.secondary,
    fontWeight: 500,
  },
}));

export const ActorsActorContainer = styled(Box)({
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap',
});

export const KeywordsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  '& span': {
    color: theme.palette.text.secondary,
    fontWeight: 500,
  },
}));

export const KeywordsChipContainer = styled(Box)({
  display: 'flex',
  gap: '5px',
  flexWrap: 'wrap',
});

export const UserReviewsContainer = styled(Box)({
  display: 'flex',
  gap: '5px',
  borderLeft: `3px solid ${yellow[700]}`,
  paddingLeft: '10px',
});

// -----

export const BluredMovieBackground = styled(Box)({
  position: 'absolute',
  top: '-40px',
  left: '-40px',
  width: 'calc(100% + 80px)',
  height: '100%',
  maxHeight: '210px',
  zIndex: 0,
  filter: 'blur(10px)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: .5,
});

export const SectionInformation = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  maxWidth: '600px',
  zIndex: 0,
});

export const MovieTitle = styled(Box)(({ theme }) => ({
  fontSize: '40px',
  color: theme.palette.text.secondary,
}));

export const Subheader = styled(Box)(({ theme }) => ({
  fontSize: '20px',
  color: theme.palette.text.secondary,
}));

export const Runtime = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  paddingRight: '10px',
  marginRight: '10px',
  borderRight: `1px solid ${alpha(theme.palette.text.secondary, 0.3)}`,
}));

export const Chip = styled(MuiChip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.contrastText,
  userSelect: 'none',
  textAlign: 'center',
  alignSelf: 'center',
  padding: '5px',
  border: `1px solid ${alpha(theme.palette.secondary.contrastText, 0.3)}`,
}));

export const Star = styled(MuiStar)({
  color: yellow[700],
});

export const Actor = styled('a')({
  color: blue[400],
  textDecoration: 'none',
  cursor: 'pointer',

  '&:hover': {
    textDecoration: 'underline',
  },
});

export const TotalRatingCount = styled(Box)(({ theme }) => ({
  fontSize: '10px',
  color: alpha(theme.palette.text.secondary, 0.5),
}));

export const ImdbUrl = styled('a')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  opacity: .8,
  transition: 'opacity .3s',

  '&:hover': {
    opacity: 1,
  },
});

export const LiveTv = styled(MuiLiveTv)({
  height: '100%',
  marginLeft: '10px',
  color: yellow[700],
});

export const MovieDescription = styled(Box)({
  lineHeight: '1.8rem',
});

export const UserReviewsTotalCount = styled(Box)(({ theme }) => ({
  fontSize: '12px',
  color: alpha(theme.palette.text.secondary, 0.5),
  letterSpacing: '.5px',
}));