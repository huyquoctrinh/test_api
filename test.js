fetch('MY_API_URL', {
  method: 'POST',
  body: JSON.stringify({
    userId: '123'
  }),
})
const createFormData = (photo, body) => {
  const data = new FormData();

  data.append("photo", {
    name: photo.fileName,
    type: photo.type,
    uri:
      Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
  });

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
};

handleUploadPhoto = () => {
  fetch("http://194.62.98.23:8000/browse/shared/Bcare.Assets/img?fbclid=IwAR1ooOlkRKQmRnxFBsIj4KFkG_D6dKRVOGFdMdjnf8QLpEH6cwsJ6zNWZsQ", {
    method: "POST",
    body: createFormData(this.state.photo, { userId: "123" })
  })
    .then(response => response.json())
    .then(response => {
      console.log("upload succes", response);
      alert("Upload success!");
      this.setState({ photo: null });
    })
    .catch(error => {
      console.log("upload error", error);
      alert("Upload failed!");
    });
};