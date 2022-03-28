import styled from "@emotion/styled";
import { Container } from "@mui/material";

export const Gallery = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const GalleryMainImageContainer = styled.div`
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    max-height: 100%;
    max-width: 100%;
  }
`;

export const GalleryImageStrip = styled.div`
  display: flex;
  width: 500px;
  flex-wrap: wrap;
`;

export const GalleryThumbnailButton = styled.button`
  background-color: transparent;
  padding: 0;
  border: 0;
`;

export const GalleryThumbnail = styled.img`
  max-width: 100%;
  width: 100px;
  height: 100px;
`;
