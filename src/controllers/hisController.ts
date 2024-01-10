import { NextFunction, Request, Response } from "express";
import { success, err_message } from "../utils/jsonOutput";

export class HisController {
  
    async getPersonHis(req: Request, res: Response, next: NextFunction) {
      try {        
      return success()
      } catch (e) {
        return err_message();
      }
    }
  }