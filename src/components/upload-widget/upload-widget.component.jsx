import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { setMedia } from "../../app/features/media/mediaSlice";

const UploadWidget = ({ children, name, ...otherProps }) => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

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
            url: result.info.secure_url,
          })
        );
      }

      if (error) console.log(error);
    }
  );

  useEffect(() => {
    const cldScript = document.getElementById("cloudinaryUploadWidgetScript");
    // if window is defined and script is not loaded and not in window add script
    if (typeof window !== "undefined" && !loaded && !cldScript) {
      const script = document.createElement("script");
      script.setAttribute("async", "");
      script.setAttribute("id", "cloudinaryUploadWidgetScript");
      script.src = "https://upload-widget.cloudinary.com/global/all.js";
      script.addEventListener("load", () => setLoaded(true));
      document.body.appendChild(script);
    }
  }, [loaded]);

  return (
    <div className={className} onClick={() => widgetRef.open()}>
      {children}
    </div>
  );
};

export default UploadWidget;
