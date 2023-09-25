import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { setMedia } from "../../app/features/media/mediaSlice";

const UploadWidget = ({ children, name, ...otherProps }) => {
  const dispatch = useDispatch();

  const { className } = otherProps;

  const widgetRef = window.cloudinary.createUploadWidget(
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
            url: JSON.stringify(result.info.secure_url),
          })
        );
      }

      if (error) console.log(error);
    }
  );

  return (
    <div className={className} onClick={() => widgetRef.open()}>
      {children}
    </div>
  );
};

export default UploadWidget;
