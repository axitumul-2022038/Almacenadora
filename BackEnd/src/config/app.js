'use strict'

//Importaciones
import { config } from "dotenv"
import express from 'express'

const app = express()
    config();
    const port = process.env.PORT || 2676

    app.use(express.urlencoded({extended: false}))
    app.use(express.json())

    export const initServer = ()=>{
        app.listen(port)
        console.log(`Server HTTP running in port ${port}`)
    }