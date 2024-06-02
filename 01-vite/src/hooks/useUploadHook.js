import { useState } from "react";
import { upload, getAll, deleteFile } from "../firebase/files";
import { getDownloadURL } from "firebase/storage";

const useUploadHook = () => {
    const [files, setFiles] = useState([]);
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);

    const handleChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = () => {
        const uploadTask = upload(file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setPercent(percent);
            },
            (err) => console.log(err),
            async () => {
                const url = await getDownloadURL(uploadTask.snapshot.ref);
                setFiles([...files, url]);
            }
        );
    };

    const handleGetAll = async () => {
        const { items } = await getAll();
        items.forEach(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            setFiles((list) => [...list, { url, name: itemRef.name }]);
        });
    };

    const handleDelete = async (fileName) => {
        await deleteFile(fileName);
        setFiles(files.filter(file => file.name !== fileName));
        alert("Imagen eliminada exitosamente");
    };

    return { files, percent, handleChange, handleUpload, handleGetAll, handleDelete };

};

export default useUploadHook;