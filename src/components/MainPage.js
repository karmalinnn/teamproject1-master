import React from 'react';
import '../styles/main.css'
import {useForm} from "react-hook-form";
import {useState} from 'react'
import { themes, ThemeContext } from "../context/themeContext";

function Collection() {
    const {
        register,
        formState:{
            errors
        },
        handleSubmit
    } = useForm()


    const onSubmit = (data) => {
        console.log(data)
    }

    const [theme, setTheme] = useState(themes.light)

    const changeTheme = ()=> {
        setTheme((prevTheme)=> prevTheme === themes.light? themes.dark: themes.light)
    }

    return(
        <div>
            <div className="title-page">
                <div className="photo-pogoda1">
                    Mans
                </div>
                <div className="photo-pogoda2">
                    Women
                </div>
            </div>
            <h1>Collections</h1>
            <div className="Collection-block">
                <div className="block1">
                    Autumn
                </div>
                <div className="block2">
                    Winter
                </div>
                <div className="block3">
                    Spring
                </div>
                <div className="block4">
                    Summer
                </div>
            </div>
            <h1>Gallery</h1>
            <div className="Gallery">

                <div className="photo1">

                </div>
                <div className="photo2">

                </div>
                <div className="photo3">

                </div>
                <div className="photo4">

                </div>
                <div className="photo5">

                </div>
                <div className="photo6">

                </div>
                <div className="photo7">

                </div>
                <div className="photo8">

                </div>
            </div>
            <h1>Feedback</h1>
            <div className="main-div">
                <div className="form"
                     style={{background: theme.background, color: theme.textColor, outline: theme.outline}}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                        <textarea placeholder={"Пиши тут"}>

                        </textarea>
                        </div>
                        <div className={"Button"}>
                            <input {...register} type="Submit"/>
                        </div>
                        <div>
                            <label className="switch">
                                <input type="checkbox" onClick={changeTheme}/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Collection;