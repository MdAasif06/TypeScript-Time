import type { Response, Request, NextFunction } from "express";
export const validateNumricId = (
  req: Request<{ id: string }>,
  res: Response<{ message: string }>,
  next: NextFunction,
) => {
  const { id } = req.params;
  if (!/^\d+$/.test(id)) {
    res.status(404).json({ message: "Pet Id must be a number" });
  } else {
    next();
  }
};

export const pleaseAuth=(req:Request<{},unknown,{password?:string}>,res:Response<{message:string}>,next:NextFunction)=>{
   const {password}=req.query
   if(password !== "please"){
    res.status(404).json({message:"you don't have permisson"})
   }else{
    next()
   }
}
