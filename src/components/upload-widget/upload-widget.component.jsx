import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { setMedia } from "../../app/features/media/mediaSlice";

const UploadWidget = ({ children, name, ...otherProps }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const dispatch = useDispatch();

  const { className } = otherProps;

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dhcvpjhlc",
        uploadPreset: "qs5htrib",
      },
      function (error, result) {
        if (result.info.secure_url) {
          console.log("GOT THE MEDIA: ", JSON.stringify(result.info.secure_url));
          dispatch(
            setMedia({
              name: name,
              url: result.info.secure_url,
            })
          );
        }

        if (error) console.log(error);
      }
    );
  }, [dispatch, name]);

  return (
    <div className={className} onClick={() => widgetRef.current.open()}>
      {children}
    </div>
  );
};

export default UploadWidget;
