import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { setMedia } from "../../app/features/media/mediaSlice";

const UploadWidget = ({ children, name, ...otherProps }) => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  const { className } = otherProps;

  let widgetRef;

  const createWidget = () => {
    widgetRef = window.cloudinary.createUploadWidget(
      {
        cloudName: "dhcvpjhlc",
        uploadPreset: "qs5htrib",
        // cropping: true, //add a cropping step
        // showAdvancedOptions: true,  //add advanced options (public_id and tag)
        // sources: [ "local", "url"], // restrict the upload sources to URL and local files
        // multiple: false,  //restrict upload to a single file
        // folder: "user_images", //upload files to the specified folder
        // tags: ["users", "profile"], //add the given tags to the uploaded files
        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        clientAllowedFormats: ["png", "jpg", "gif"], //restrict uploading to image files only
        maxFiles: 1, // Maximum number of files to upload
        // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
        // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
        // theme: "purple", //change to a purple theme
      },
      function (error, result) {
        if (result.info.secure_url) {
          console.log(
            "GOT THE MEDIA: ",
            JSON.stringify(result.info.secure_url)
          );
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
  };

  useEffect(() => {
    const cldScript = document.getElementById("cloudinaryUploadWidgetScript");
    if (typeof window !== "undefined" && !loaded && !cldScript) {
      const script = document.createElement("script");
      script.setAttribute("async", "");
      script.setAttribute("id", "cloudinaryUploadWidgetScript");
      script.src = "https://upload-widget.cloudinary.com/global/all.js";
      script.addEventListener("load", () => {
        setLoaded(true);
        createWidget();
      });
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
