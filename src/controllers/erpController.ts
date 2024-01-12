import { NextFunction, Request, Response } from "express";
import { success, err_message } from "../utils/jsonOutput";
import axios from "axios";

export class ErpController {

    private async getData(projectId: string) {
      return axios.get('https://opend.data.go.th/govspending/cgdcontract', {
        params: {
          'api-key': 'CegByPHWt4p786MejEUxCDQMYk43Q19d',
          'year': 2566,
          'dept_code': '001227600',
          'budget_start': 500000,
          'budget_end': 400000000,
          'offset': 0,
          'limit': 20,
          'project_id': projectId, // Remove the single quotes
        },
      });
    }
  

  
    async getSomething(req: Request, res: Response, next: NextFunction) {
      try {
        const projectId = req.params.projectId; // Extract projectId from the URL
        const result = await this.getData(projectId);
        console.log("Data:", result.data);
        return success(result.data);
      } catch (e) {
        console.error("Error:", e);
        return err_message();
      }
    }
    
    
  }
