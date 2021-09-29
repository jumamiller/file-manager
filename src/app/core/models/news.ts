export interface News {
  title:string,
  id?:number;
  description:string,
  target_audience:string,
  banner_image:string,
  image_path?:string;
  message?:string,
  success?:boolean,
  data?:any,
}
