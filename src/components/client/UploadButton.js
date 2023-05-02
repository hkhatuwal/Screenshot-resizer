"use client"

import React, {useCallback, useRef, useState} from 'react';
import {FaUpload} from "react-icons/fa";
import axios from "axios";
import {data} from "autoprefixer";
import {redirect} from "next/navigation";
import {baseUrl} from "../../../utils/constants";
import LoadingSpinner from "@/components/client/LoadingSpinner";

const UploadButton = ({onFilePick,loading}) => {
    const fileRef = useRef(null)

    const handleUploadClick = () => {
        fileRef.current.click();
    }
    return (
        <div className="px-4">
            <input type="file" className="invisible" onChange={onFilePick} accept="image/*" ref={fileRef}
                   multiple={true}/>
            <button onClick={handleUploadClick}
                    disabled={loading}
                    className="bg-primary px-8 py-3 rounded-lg w-full font-bold flex justify-center items-center text-white text-2xl disabled:bg-primary_disabled">
                <FaUpload className="inline-block mx-2 text-light " size={28}/> UPLOAD
                {loading? <div className="inline-block mx-2 text-sm"><LoadingSpinner size={15}  /></div>:null}
            </button>
        </div>
    );
};

export default UploadButton;