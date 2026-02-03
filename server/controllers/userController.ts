import {Request , Response} from 'express'
import * as Sentry from "@sentry/node"

// get user credits
export const getUserCredits = async (req:Request , res:Response) => {
    try {
        
    } catch (error:any) {
        Sentry.captureException(error);
        res.status(500).json({message:error.code || error.message})
    }
}

// get all user projects
export const getAllProjects = async (req:Request , res:Response) => {
    try {
        
    } catch (error:any) {
        Sentry.captureException(error);
        res.status(500).json({message:error.code || error.message})
    }
}

// get project by id

export const getProjectById = async (req:Request , res:Response) => {
    try {
        
    } catch (error:any) {
        Sentry.captureException(error);
        res.status(500).json({message:error.code || error.message})
    }
}

// publish and unpublish 

export const toggleProjectPublic = async (req:Request , res:Response) => {
    try {
        
    } catch (error:any) {
        Sentry.captureException(error);
        res.status(500).json({message:error.code || error.message})
    }
}

