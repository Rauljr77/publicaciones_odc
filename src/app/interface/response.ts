export interface IResponseToken {
  isAuthSuccessful: boolean;
  errorMessage    : string | null;
  token           : string;
  tokenType       : string;
  expiresIn       : string;
}

export interface IResult<T> {
  success     : boolean;
  messageHttp : string;
  data        : T;
}

export interface IPublication {
  title             : string | null;
  mjDescripcion     : string | null;
  mjAnio            : string;
  mjMes             : string;
  nombre            : string | null;
  urlArchivo        : string | null;
  imagen            : string | null;
  created           : string;
  modified          : string;
  tematica          : string | null,
  secciones         : string | null,
  subsecciones      : string | null,
  fechaDocumento    : string | null,
  tipoPublicacion   : string | null,
  autorDocumento    : string | null,
  etiquetaDocumento : string | null,
  mJODCCategoria    : ICategoria[];
}

export interface ICategoria {
  name: string;
}