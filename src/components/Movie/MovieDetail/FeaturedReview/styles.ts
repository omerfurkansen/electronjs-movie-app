import { Box } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import { Star as MuiStar } from '@mui/icons-material';

export const FeaturedReviewContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  padding: '20px',
  backgroundColor: alpha(theme.palette.text.primary, 0.1),
  borderRadius: '5px',
  border: `1px solid ${alpha(theme.palette.text.secondary, 0.1)}`,
}));

export const FeaturedReviewContainerHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const FeaturedReviewTitle = styled(Box)(({ theme }) => ({
  color: alpha(theme.palette.text.secondary, 0.6),
  fontWeight: 500,
  fontSize: '14px',
  letterSpacing: '.5px',
}));

export const FeaturedReviewRating = styled(Box)({
  display: 'flex',
  gap: '5px',
  alignItems: 'center',
  letterSpacing: '.5px',
});

export const FeaturedReviewBody = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
});

export const FeaturedReviewTextTitle = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 600,
  fontSize: '16px',
}));

export const FeaturedReviewTextBody = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '1.3rem',
}));

export const FeaturedReviewAuthor = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 400,
  fontSize: '12px',
}));

export const Star = styled(MuiStar)({
  color: yellow[700],
});