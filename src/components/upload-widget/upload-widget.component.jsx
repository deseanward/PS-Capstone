import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { setMedia } from "../../app/features/media/mediaSlice";

const UploadWidget = ({ children, name }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dhcvpjhlc",
        uploadPreset: "qs5htrib",
      },
      function (error, result) {
        if (result.info.secure_url) {
          console.log("GOT THE MEDIA: ");
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
    <div className='h-full w-full' onClick={() => widgetRef.current.open()}>
      {children}
    </div>
  );
};

export default UploadWidget;
