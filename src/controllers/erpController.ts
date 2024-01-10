import { NextFunction, Request, Response } from "express";
import { success, err_message } from "../utils/jsonOutput";
import axios from "axios";

export class ErpController {

    private async getData(){
        // const data = 
        return axios('https://opend.data.go.th/govspending/cgdcontract?api-key=CegByPHWt4p786MejEUxCDQMYk43Q19d&year=2566&dept_code=001227600&budget_start=500000&budget_end=400000000&offset=0&project_id=$%7Bid%7D') 
    }
  
    async getSomething(req: Request, res: Response, next: NextFunction) {
      try {
        const a = await this.getData()
        console.log("e",a.data);
        
      return success(a.data)
      } catch (e) {
        return err_message();
      }
    }
  }