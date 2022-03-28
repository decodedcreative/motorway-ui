import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import * as styles from "./GalleryStyles";
import { Modal } from "@mui/material";

const Gallery = () => {
  const [images, setImages] = useState();
  const [mainImage, setMainImage] = useState();

  const [open, setOpen] = useState(false);
  const handleOpen = (img) => {
    setMainImage(img);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  // React Query

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        setImages(data);
        setMainImage(data[0].url);
      })
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  // Regular useEffect with no caching

  // useEffect(() => {
  //   fetch("images?limit=10")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("Success:", data);
  //       setImages(data);
  //       setMainImage(data[0].url);
  //     });
  // }, []);

  return (
    <styles.Gallery>
      <Modal open={open} onClose={handleClose}>
        <styles.GalleryMainImageContainer>
          {mainImage && <img src={`${mainImage}.jpg`} alt="" />}
        </styles.GalleryMainImageContainer>
      </Modal>

      <styles.GalleryImageStrip>
        {images &&
          images.map((img, i) => (
            <styles.GalleryThumbnailButton
              key={img.id}
              onClick={() => handleOpen(img.url)}
            >
              <styles.GalleryThumbnail
                src={`${img.user.profile_image}.webp`}
                alt=""
              />
            </styles.GalleryThumbnailButton>
          ))}
      </styles.GalleryImageStrip>
    </styles.Gallery>
  );
};

export default Gallery;
