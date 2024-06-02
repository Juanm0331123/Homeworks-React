import { useEffect } from "react";
import useUploadHook from "../hooks/useUploadHook";

const Upload = () => {
    const {
        files,
        percent,
        handleChange,
        handleUpload,
        handleGetAll,
        handleDelete,
    } = useUploadHook();

    useEffect(() => {
        handleGetAll();
    }, []);

    const handleDeleteWithConfirmation = (fileName) => {
        if (window.confirm("¿Estás seguro de que quieres eliminar esta imagen?")) {
            handleDelete(fileName);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleChange} accept="image/*" />
            <button onClick={handleUpload}>Upload to Firebase</button>
            <p>{percent}% done</p>
            {files.map((item, key) => (
                <div key={key}>
                    <img src={item.url} width="100px" alt="Uploaded file" />
                    <button onClick={() => handleDeleteWithConfirmation(item.name)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
};

export default Upload;