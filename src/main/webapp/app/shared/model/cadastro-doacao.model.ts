import dayjs from 'dayjs';
import { IUser } from 'app/shared/model/user.model';
import { IItem } from 'app/shared/model/item.model';
import { IAcao } from 'app/shared/model/acao.model';

export interface ICadastroDoacao {
  id?: number;
  doacaoAnonima?: boolean | null;
  realizaEntrega?: boolean | null;
  dataDoacao?: string | null;
  logradouro?: string | null;
  numero?: number | null;
  bairro?: string | null;
  cidade?: string | null;
  cep?: string | null;
  estado?: string | null;
  pais?: string | null;
  complemento?: string | null;
  user?: IUser | null;
  descricao?: IItem | null;
  acao?: IAcao | null;
}

export const defaultValue: Readonly<ICadastroDoacao> = {
  doacaoAnonima: false,
  realizaEntrega: false,
};
