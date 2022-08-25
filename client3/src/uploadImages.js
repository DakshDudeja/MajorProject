
import storage from "./fire_base"
export default function Upload(name,file,setItem){

    const uploadtask = storage.storage().ref(`images/${name}`).put(file)
    uploadtask.on(
        "state_changed",
        snapshot => { },
        error => {
            console.log(error)
        },
        () => {
            storage.storage()
                .ref("images")
                .child(name)
                .getDownloadURL()
                .then(imgurl => {
                    console.log(imgurl)
                    setItem(imgurl)
                    // setdesign(imgurl)
                })
    
        })


}


