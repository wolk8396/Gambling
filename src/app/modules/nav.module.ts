interface NavModule {
  id:number,
  url:string,
  name?:string,
  image?:string 
}

interface LogoNavModule {
  id:number,
  image: string,
  name?:string
  url:string
}

export type {NavModule, LogoNavModule}