

export default function Upload(props){

    const uploadtask = storage.storage().ref(`images/${props.name}`).put(props.file)
    uploadtask.on(
        "state_changed",
        snapshot => { },
        error => {
            console.log(error)
        },
        () => {
            storage.storage()
                .ref("images")
                .child(props.name)
                .getDownloadURL()
                .then(imgurl => {
                    console.log(imgurl)
                    props.setItem(imgurl)
                    // setdesign(imgurl)
                })
    
        })


}


