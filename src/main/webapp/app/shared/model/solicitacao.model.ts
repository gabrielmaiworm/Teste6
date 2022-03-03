import dayjs from 'dayjs';
import { IUser } from 'app/shared/model/user.model';
import { IItem } from 'app/shared/model/item.model';
import { IAcao } from 'app/shared/model/acao.model';

export interface ISolicitacao {
  id?: number;
  solicitante?: string | null;
  anonima?: boolean | null;
  dataSolicitacao?: string | null;
  enderecoEntrega?: string | null;
  localDeEntrega?: string | null;
  dataAprovacao?: string | null;
  aprovado?: boolean | null;
  ativa?: boolean | null;
  user?: IUser | null;
  descricao?: IItem | null;
  acao?: IAcao | null;
}

export const defaultValue: Readonly<ISolicitacao> = {
  anonima: false,
  aprovado: false,
  ativa: false,
};
